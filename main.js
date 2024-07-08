let fullDataset = [];
let lineChart;
let histogramChart;
let boxPlotChart;
let maxYears;

// Process the data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDataset();
    document.getElementById('datasetSelect').addEventListener('change', loadDataset);
});

function loadDataset() {
    const dataset = document.getElementById('datasetSelect').value;
    const data = dataset === 'msciworld' ? MSCIWorldData : stockMarketData;
    
    fullDataset = data.map(row => ({
        date: new Date(row.Date),
        value: parseFloat(row.IndexValue)
    }));

    maxYears = Math.floor(fullDataset.length / 12) - 1;
    const yearsInput = document.getElementById('years');
    yearsInput.max = maxYears;
    yearsInput.value = Math.min(parseInt(yearsInput.value), maxYears);

    // Enable the calculate button after data is processed
    document.querySelector('button').disabled = false;
}

function calculate() {
    const button = document.getElementById("calculateButton");
    button.disabled = true;
    document.querySelector('details').removeAttribute('open');
    const startingAmount = parseFloat(document.getElementById('startingAmount').value);
    const years = parseInt(document.getElementById('years').value);
    const withdrawalAmount = parseFloat(document.getElementById('withdrawalAmount').value);
    const withdrawalFrequency = parseInt(document.getElementById('withdrawalFrequency').value);
    const yearlyInflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;
    
    const chartData = [];
    let finalBalances = [];
    let boxPlotData = [];
    let processedPeriods = 0;
    const totalPeriods = fullDataset.length - years * 12;
    const chunkSize = 12;
    let sufficientFundsPeriods = 0;

    // Show progress bar and hide sufficient funds info
    document.getElementById('progressBar').style.display = 'block';
    document.getElementById('sufficientFundsInfo').style.display = 'none';

    let minBalance, maxBalance, avgBalance;
    let q1, median, q3;
    
    function processChunk() {
        const endIndex = Math.min(processedPeriods + chunkSize, totalPeriods);
        
        for (let startIndex = processedPeriods; startIndex < endIndex; startIndex++) {
            let balance = startingAmount;
            const periodData = [];
            let sufficientFunds = true;
            
            for (let month = 0; month < years * 12; month++) {
                if (month > 0) {
                    const monthlyReturn = fullDataset[startIndex + month].value / fullDataset[startIndex + month - 1].value;
                    balance *= monthlyReturn;
                }
                
                let adjustedWithdrawal = withdrawalAmount;
                if (withdrawalFrequency === 12) {
                    adjustedWithdrawal *= Math.pow(1 + yearlyInflationRate, month / 12);
                } else if (withdrawalFrequency === 4 && month % 3 === 0) {
                    adjustedWithdrawal *= Math.pow(1 + yearlyInflationRate, month / 12);
                } else if (withdrawalFrequency === 1 && month % 12 === 0) {
                    adjustedWithdrawal *= Math.pow(1 + yearlyInflationRate, month / 12);
                }
                
                if (withdrawalFrequency === 12 || 
                    (withdrawalFrequency === 4 && month % 3 === 0) || 
                    (withdrawalFrequency === 1 && month % 12 === 0)) {
                    balance -= adjustedWithdrawal;
                }
                
                periodData.push({ x: month / 12, y: balance });

                if (balance < 0) {
                    sufficientFunds = false;
                }
            }

            if (sufficientFunds) {
                sufficientFundsPeriods++;
            }

            const finalBalance = periodData[periodData.length - 1].y;
            let color;
            if (finalBalance < 0) {
                color = 'rgba(255, 0, 0, 0.1)';
            } else if (finalBalance < startingAmount) {
                color = 'rgba(255, 165, 0, 0.1)';
            } else {
                color = 'rgba(0, 128, 0, 0.1)';
            }

            const startDate = fullDataset[startIndex].date;
            const startYearMonth = startDate.toLocaleString('default', { year: 'numeric', month: 'short' });
            chartData.push({
                label: startYearMonth,
                data: periodData,
                borderColor: color,
                fill: false,
                pointRadius: 0,
                borderWidth: 1
            });

            finalBalances.push(finalBalance);
            boxPlotData.push(finalBalance);
        }

        createLineChart(chartData, years);
        createHistogram(finalBalances, startingAmount);

        // Update box plot with current data
        if (boxPlotData.length > 0) {
            const sortedData = boxPlotData.slice().sort((a, b) => a - b);
            const localMinBalance = sortedData[0];
            const localMaxBalance = sortedData[sortedData.length - 1];
            const localQ1 = sortedData[Math.floor(sortedData.length * 0.25)];
            const localMedian = sortedData[Math.floor(sortedData.length * 0.5)];
            const localQ3 = sortedData[Math.floor(sortedData.length * 0.75)];
            const localAvgBalance = sortedData.reduce((sum, balance) => sum + balance, 0) / sortedData.length;

            createBoxPlot(sortedData, localMinBalance, localMaxBalance, localQ1, localMedian, localQ3, localAvgBalance);
        }

        processedPeriods = endIndex;
        
        // Update progress bar
        const progress = Math.round((processedPeriods / totalPeriods) * 100);
        document.getElementById('progressBar').value = progress;

        if (processedPeriods < totalPeriods) {
            setTimeout(processChunk, 0);
        } else {
            console.log("Calculation complete. Displaying results.");
            button.disabled = false;
            // Compute statistics
            finalBalances.sort((a, b) => a - b);
            const minBalance = finalBalances[0];
            const maxBalance = finalBalances[finalBalances.length - 1];
            const avgBalance = finalBalances.reduce((sum, balance) => sum + balance, 0) / finalBalances.length;
            
            const q1 = finalBalances[Math.floor(finalBalances.length * 0.25)];
            const median = finalBalances[Math.floor(finalBalances.length * 0.5)];
            const q3 = finalBalances[Math.floor(finalBalances.length * 0.75)];

            createBoxPlot(finalBalances, minBalance, maxBalance, q1, median, q3, avgBalance);

            console.log("Statistics calculated:", { minBalance, maxBalance, avgBalance, q1, median, q3 });

            // Display statistics and create charts
            createLineChart(chartData, years);
            createHistogram(finalBalances, startingAmount);
            createBoxPlot(finalBalances, minBalance, maxBalance, q1, median, q3);

            // Hide progress bar and show sufficient funds info
            document.getElementById('progressBar').style.display = 'none';
            document.getElementById('sufficientFundsInfo').style.display = 'block';
            
            // Display sufficient funds info
            const percentage = (sufficientFundsPeriods / totalPeriods * 100).toFixed(2);
            document.getElementById('sufficientFundsInfo').textContent = 
                `${sufficientFundsPeriods}/${totalPeriods} (${percentage}%) periods with sufficient funds`;
        }
    }

    processChunk();
    button.disabled = false;
}

function formatNumber(num) {
    if (Math.abs(num) >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (Math.abs(num) >= 1000 && Math.abs(num) < 100000){
        return (num / 1000).toFixed(1) + 'k';
    } else if (Math.abs(num) >= 1000) {
        return (num / 1000).toFixed(0) + 'k';
    } else {
        return num.toString();
    }
}

function createLineChart(chartData, years) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    
    if (!lineChart) {
        lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: chartData.map(dataset => ({
                    ...dataset,
                    borderColor: dataset.borderColor === 'rgba(255, 0, 0, 0.1)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)',
                    originalBorderColor: dataset.borderColor === 'rgba(255, 0, 0, 0.1)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)'
                }))
            },
            options: {
                responsive: true,
                animation: false,
                plugins: {
                    legend: {
                        display: false
                    },
                },
                scales: {
                    x: {
                        type: 'linear',
                        display: true,
                        title: {
                            display: true,
                            text: 'Years'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return Math.round(value);
                            }
                        },
                        bounds: 'data'
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Balance'
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return formatNumber(value);
                            }
                        }
                    }
                }
            }
        });
    } else {
        lineChart.data.datasets = chartData.map(dataset => ({
            ...dataset,
            borderColor: dataset.borderColor === 'rgba(255, 0, 0, 0.1)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)',
            originalBorderColor: dataset.borderColor === 'rgba(255, 0, 0, 0.1)' ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 128, 0, 0.1)'
        }));
        lineChart.update('none');
    }
}

function createHistogram(finalBalances, startingAmount) {
    const totalPeriods = finalBalances.length;

    // Sort the final balances
    finalBalances.sort((a, b) => a - b);

    // Calculate IQR for Freedman-Diaconis rule
    const q1 = finalBalances[Math.floor(totalPeriods * 0.25)];
    const q3 = finalBalances[Math.floor(totalPeriods * 0.75)];
    const iqr = q3 - q1;

    // Calculate bin width using Freedman-Diaconis rule
    let binWidth = 2 * iqr * Math.pow(totalPeriods, -1/3);

    // Round bin width to a nice number
    const magnitude = Math.pow(10, Math.floor(Math.log10(binWidth)));
    binWidth = Math.ceil(binWidth / magnitude) * magnitude;

    // Ensure 0 is at the edge of two bins
    const minValue = Math.floor(finalBalances[0] / binWidth) * binWidth;
    const maxValue = Math.ceil(finalBalances[totalPeriods - 1] / binWidth) * binWidth;

    let bins = [];
    for (let binStart = minValue; binStart <= maxValue; binStart += binWidth) {
        bins.push({ start: binStart, end: binStart + binWidth, count: 0 });
    }

    // Count the number of balances in each bin
    finalBalances.forEach(balance => {
        const binIndex = Math.floor((balance - minValue) / binWidth);
        if (binIndex >= 0 && binIndex < bins.length) {
            bins[binIndex].count++;
        }
    });

    // Identify underflow and overflow bins
    const minBinCount = Math.ceil(totalPeriods * 0.01);
    let underflowBin = { start: -Infinity, end: bins[0].start, count: 0 };
    let overflowBin = { start: bins[bins.length - 1].end, end: Infinity, count: 0 };

    while (bins[0].count < minBinCount && bins.length > 1) {
        underflowBin.count += bins[0].count;
        underflowBin.end = bins[1].start;
        bins.shift();
    }

    while (bins[bins.length - 1].count < minBinCount && bins.length > 1) {
        overflowBin.count += bins[bins.length - 1].count;
        overflowBin.start = bins[bins.length - 2].end;
        bins.pop();
    }

    // Add underflow and overflow bins if they have at least 1% of observations
    if (underflowBin.count >= minBinCount) {
        bins.unshift(underflowBin);
    }
    if (overflowBin.count >= minBinCount) {
        bins.push(overflowBin);
    }

    const ctx = document.getElementById('histogramChart').getContext('2d');
    const totalCount = finalBalances.length; // Use the total number of final balances

    function getChartData() {
        return {
            labels: bins.map(bin => {
                if (bin.start === -Infinity) return `< ${formatNumber(bin.end)}`;
                if (bin.end === Infinity) return `≥ ${formatNumber(bin.start)}`;
                return `${formatNumber(bin.start)} - ${formatNumber(bin.end)}`;
            }),
            datasets: [{
                label: 'Number of Periods',
                data: bins.map(bin => bin.count),
                backgroundColor: bins.map(bin => bin.end <= 0 ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 128, 0, 0.5)'),
                borderColor: bins.map(bin => bin.end <= 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 128, 0, 1)'),
                borderWidth: 1
            }]
        };
    }

    function getChartOptions() {
        return {
            responsive: true,
            animation: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Periods'
                    },
                    ticks: {
                        callback: function(value) {
                            const percentage = ((value / totalCount) * 100).toFixed(1);
                            return `${formatNumber(value)} (${percentage}%)`;
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Final Balance'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Histogram of Final Balances'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            const percentage = ((value / totalCount) * 100).toFixed(1);
                            return `Number of Periods: ${formatNumber(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        };
    }

    if (!histogramChart) {
        histogramChart = new Chart(ctx, {
            type: 'bar',
            data: getChartData(),
            options: getChartOptions()
        });
    } else {
        histogramChart.data = getChartData();
        histogramChart.options = getChartOptions();
        histogramChart.update('none');
    }
}

function createBoxPlot(finalBalances, minBalance, maxBalance, q1, median, q3, avgBalance) {
    const canvas = document.getElementById('boxPlotChart');
    if (!canvas) {
        console.error("Box plot canvas not found!");
        return;
    }
    const ctx = canvas.getContext('2d');

    if (boxPlotChart) {
        boxPlotChart.destroy();
    }

    // Calculate IQR and whiskers
    const iqr = q3 - q1;
    const lowerWhisker = Math.max(minBalance, q1 - 1.5 * iqr);
    const upperWhisker = Math.min(maxBalance, q3 + 1.5 * iqr);

    // Identify outliers
    const outliers = finalBalances.filter(balance => balance < lowerWhisker || balance > upperWhisker);

    boxPlotChart = new Chart(ctx, {
        type: 'boxplot',
        data: {
            labels: ['Final Balances'],
            datasets: [{
                label: 'Box Plot',
                data: [
                    finalBalances
                    // {
                    //     min: lowerWhisker,
                    //     q1: q1,
                    //     median: median,
                    //     q3: q3,
                    //     max: upperWhisker,
                    //     outliers: outliers
                    // }
                ],
                backgroundColor: '#d0cfcf',
                borderColor: '#a0a0a0'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Box Plot of Final Balances'
                },
                legend: {
                    display: false
                },
                // tooltip: {
                //     callbacks: {
                //         label: function(context) {
                //             const value = context.raw;
                //             if (context.datasetIndex === 1) {
                //                 return `Average: ${formatNumber(value.median)}`;
                //             }
                //             return [
                //                 `Min: ${formatNumber(value.min)}`,
                //                 `Q1: ${formatNumber(value.q1)}`,
                //                 `Median: ${formatNumber(value.median)}`,
                //                 `Q3: ${formatNumber(value.q3)}`,
                //                 `Max: ${formatNumber(value.max)}`,
                //                 `Outliers: ${value.outliers.length}`
                //             ];
                //         }
                //     }
                // }
            },
            responsive: true,
            animation: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Balance'
                    },
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    }
                },
                y: {
                    title: {
                        display: false
                    }
                }
            }
        }
    });
}