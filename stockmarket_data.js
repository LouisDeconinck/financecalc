// Source: https://shillerdata.com/
const stockMarketData = [
    {
      Date: "1871-1-1",
      IndexValue: "112.0182565"
    },
    {
      Date: "1871-2-1",
      IndexValue: "110.6985602"
    },
    {
      Date: "1871-3-1",
      IndexValue: "112.2738555"
    },
    {
      Date: "1871-4-1",
      IndexValue: "120.3604796"
    },
    {
      Date: "1871-5-1",
      IndexValue: "126.8402615"
    },
    {
      Date: "1871-6-1",
      IndexValue: "128.352146"
    },
    {
      Date: "1871-7-1",
      IndexValue: "126.5324925"
    },
    {
      Date: "1871-8-1",
      IndexValue: "130.7761808"
    },
    {
      Date: "1871-9-1",
      IndexValue: "129.6221341"
    },
    {
      Date: "1871-10-1",
      IndexValue: "121.6073425"
    },
    {
      Date: "1871-11-1",
      IndexValue: "123.5060773"
    },
    {
      Date: "1871-12-1",
      IndexValue: "123.8850774"
    },
    {
      Date: "1872-1-1",
      IndexValue: "127.5948779"
    },
    {
      Date: "1872-2-1",
      IndexValue: "128.7034568"
    },
    {
      Date: "1872-3-1",
      IndexValue: "131.5390556"
    },
    {
      Date: "1872-4-1",
      IndexValue: "132.8348241"
    },
    {
      Date: "1872-5-1",
      IndexValue: "133.4261272"
    },
    {
      Date: "1872-6-1",
      IndexValue: "133.7083471"
    },
    {
      Date: "1872-7-1",
      IndexValue: "135.5205627"
    },
    {
      Date: "1872-8-1",
      IndexValue: "133.5714443"
    },
    {
      Date: "1872-9-1",
      IndexValue: "130.8642754"
    },
    {
      Date: "1872-10-1",
      IndexValue: "134.9959108"
    },
    {
      Date: "1872-11-1",
      IndexValue: "131.2068097"
    },
    {
      Date: "1872-12-1",
      IndexValue: "137.0366847"
    },
    {
      Date: "1873-1-1",
      IndexValue: "138.7991963"
    },
    {
      Date: "1873-2-1",
      IndexValue: "137.5422748"
    },
    {
      Date: "1873-3-1",
      IndexValue: "137.1583583"
    },
    {
      Date: "1873-4-1",
      IndexValue: "135.9728734"
    },
    {
      Date: "1873-5-1",
      IndexValue: "139.9658499"
    },
    {
      Date: "1873-6-1",
      IndexValue: "142.957892"
    },
    {
      Date: "1873-7-1",
      IndexValue: "143.4303516"
    },
    {
      Date: "1873-8-1",
      IndexValue: "144.1999309"
    },
    {
      Date: "1873-9-1",
      IndexValue: "133.9543372"
    },
    {
      Date: "1873-10-1",
      IndexValue: "125.9330486"
    },
    {
      Date: "1873-11-1",
      IndexValue: "126.1567795"
    },
    {
      Date: "1873-12-1",
      IndexValue: "135.6269631"
    },
    {
      Date: "1874-1-1",
      IndexValue: "141.6227856"
    },
    {
      Date: "1874-2-1",
      IndexValue: "146.7133042"
    },
    {
      Date: "1874-3-1",
      IndexValue: "145.4142801"
    },
    {
      Date: "1874-4-1",
      IndexValue: "144.4854985"
    },
    {
      Date: "1874-5-1",
      IndexValue: "142.6951191"
    },
    {
      Date: "1874-6-1",
      IndexValue: "146.3918177"
    },
    {
      Date: "1874-7-1",
      IndexValue: "146.1158615"
    },
    {
      Date: "1874-8-1",
      IndexValue: "148.5329202"
    },
    {
      Date: "1874-9-1",
      IndexValue: "151.7727322"
    },
    {
      Date: "1874-10-1",
      IndexValue: "154.8559502"
    },
    {
      Date: "1874-11-1",
      IndexValue: "158.461437"
    },
    {
      Date: "1874-12-1",
      IndexValue: "158.3747513"
    },
    {
      Date: "1875-1-1",
      IndexValue: "159.3268021"
    },
    {
      Date: "1875-2-1",
      IndexValue: "159.9263248"
    },
    {
      Date: "1875-3-1",
      IndexValue: "162.9933446"
    },
    {
      Date: "1875-4-1",
      IndexValue: "164.7105607"
    },
    {
      Date: "1875-5-1",
      IndexValue: "163.286816"
    },
    {
      Date: "1875-6-1",
      IndexValue: "163.7088705"
    },
    {
      Date: "1875-7-1",
      IndexValue: "165.0559802"
    },
    {
      Date: "1875-8-1",
      IndexValue: "165.3667539"
    },
    {
      Date: "1875-9-1",
      IndexValue: "166.23559"
    },
    {
      Date: "1875-10-1",
      IndexValue: "164.5396319"
    },
    {
      Date: "1875-11-1",
      IndexValue: "169.6329311"
    },
    {
      Date: "1875-12-1",
      IndexValue: "172.0871862"
    },
    {
      Date: "1876-1-1",
      IndexValue: "178.1653817"
    },
    {
      Date: "1876-2-1",
      IndexValue: "181.5609103"
    },
    {
      Date: "1876-3-1",
      IndexValue: "182.1634354"
    },
    {
      Date: "1876-4-1",
      IndexValue: "177.8659655"
    },
    {
      Date: "1876-5-1",
      IndexValue: "178.6573634"
    },
    {
      Date: "1876-6-1",
      IndexValue: "183.4950049"
    },
    {
      Date: "1876-7-1",
      IndexValue: "182.3896133"
    },
    {
      Date: "1876-8-1",
      IndexValue: "174.2946168"
    },
    {
      Date: "1876-9-1",
      IndexValue: "163.2335525"
    },
    {
      Date: "1876-10-1",
      IndexValue: "160.4834758"
    },
    {
      Date: "1876-11-1",
      IndexValue: "157.0873297"
    },
    {
      Date: "1876-12-1",
      IndexValue: "154.520772"
    },
    {
      Date: "1877-1-1",
      IndexValue: "151.5894666"
    },
    {
      Date: "1877-2-1",
      IndexValue: "147.4714002"
    },
    {
      Date: "1877-3-1",
      IndexValue: "147.5555459"
    },
    {
      Date: "1877-4-1",
      IndexValue: "134.111117"
    },
    {
      Date: "1877-5-1",
      IndexValue: "132.6648248"
    },
    {
      Date: "1877-6-1",
      IndexValue: "131.1356166"
    },
    {
      Date: "1877-7-1",
      IndexValue: "136.5551823"
    },
    {
      Date: "1877-8-1",
      IndexValue: "152.7535587"
    },
    {
      Date: "1877-9-1",
      IndexValue: "164.7772203"
    },
    {
      Date: "1877-10-1",
      IndexValue: "169.2200177"
    },
    {
      Date: "1877-11-1",
      IndexValue: "170.8619885"
    },
    {
      Date: "1877-12-1",
      IndexValue: "171.1677231"
    },
    {
      Date: "1878-1-1",
      IndexValue: "177.3187554"
    },
    {
      Date: "1878-2-1",
      IndexValue: "176.1707433"
    },
    {
      Date: "1878-3-1",
      IndexValue: "184.1985917"
    },
    {
      Date: "1878-4-1",
      IndexValue: "192.2453215"
    },
    {
      Date: "1878-5-1",
      IndexValue: "200.1732365"
    },
    {
      Date: "1878-6-1",
      IndexValue: "209.9571365"
    },
    {
      Date: "1878-7-1",
      IndexValue: "212.7956567"
    },
    {
      Date: "1878-8-1",
      IndexValue: "209.5403682"
    },
    {
      Date: "1878-9-1",
      IndexValue: "214.7156104"
    },
    {
      Date: "1878-10-1",
      IndexValue: "215.5952847"
    },
    {
      Date: "1878-11-1",
      IndexValue: "218.3611015"
    },
    {
      Date: "1878-12-1",
      IndexValue: "223.1183621"
    },
    {
      Date: "1879-1-1",
      IndexValue: "229.8319424"
    },
    {
      Date: "1879-2-1",
      IndexValue: "236.4401712"
    },
    {
      Date: "1879-3-1",
      IndexValue: "236.2844489"
    },
    {
      Date: "1879-4-1",
      IndexValue: "247.9100065"
    },
    {
      Date: "1879-5-1",
      IndexValue: "260.1208347"
    },
    {
      Date: "1879-6-1",
      IndexValue: "265.5742327"
    },
    {
      Date: "1879-7-1",
      IndexValue: "268.8482235"
    },
    {
      Date: "1879-8-1",
      IndexValue: "271.9165759"
    },
    {
      Date: "1879-9-1",
      IndexValue: "273.484307"
    },
    {
      Date: "1879-10-1",
      IndexValue: "288.1678284"
    },
    {
      Date: "1879-11-1",
      IndexValue: "289.1955951"
    },
    {
      Date: "1879-12-1",
      IndexValue: "281.0700491"
    },
    {
      Date: "1880-1-1",
      IndexValue: "284.5300414"
    },
    {
      Date: "1880-2-1",
      IndexValue: "290.5157516"
    },
    {
      Date: "1880-3-1",
      IndexValue: "294.3025055"
    },
    {
      Date: "1880-4-1",
      IndexValue: "299.9769184"
    },
    {
      Date: "1880-5-1",
      IndexValue: "285.7223631"
    },
    {
      Date: "1880-6-1",
      IndexValue: "294.0092477"
    },
    {
      Date: "1880-7-1",
      IndexValue: "308.7148251"
    },
    {
      Date: "1880-8-1",
      IndexValue: "321.0387702"
    },
    {
      Date: "1880-9-1",
      IndexValue: "318.3999507"
    },
    {
      Date: "1880-10-1",
      IndexValue: "328.9005926"
    },
    {
      Date: "1880-11-1",
      IndexValue: "343.9792315"
    },
    {
      Date: "1880-12-1",
      IndexValue: "355.8154296"
    },
    {
      Date: "1881-1-1",
      IndexValue: "382.3093367"
    },
    {
      Date: "1881-2-1",
      IndexValue: "378.638324"
    },
    {
      Date: "1881-3-1",
      IndexValue: "384.3404003"
    },
    {
      Date: "1881-4-1",
      IndexValue: "380.7407659"
    },
    {
      Date: "1881-5-1",
      IndexValue: "403.3247714"
    },
    {
      Date: "1881-6-1",
      IndexValue: "409.7883094"
    },
    {
      Date: "1881-7-1",
      IndexValue: "393.0672695"
    },
    {
      Date: "1881-8-1",
      IndexValue: "377.8460483"
    },
    {
      Date: "1881-9-1",
      IndexValue: "368.1453415"
    },
    {
      Date: "1881-10-1",
      IndexValue: "360.4076909"
    },
    {
      Date: "1881-11-1",
      IndexValue: "367.695416"
    },
    {
      Date: "1881-12-1",
      IndexValue: "358.5871828"
    },
    {
      Date: "1882-1-1",
      IndexValue: "354.8083938"
    },
    {
      Date: "1882-2-1",
      IndexValue: "345.3866493"
    },
    {
      Date: "1882-3-1",
      IndexValue: "346.3808538"
    },
    {
      Date: "1882-4-1",
      IndexValue: "344.7858047"
    },
    {
      Date: "1882-5-1",
      IndexValue: "339.0919861"
    },
    {
      Date: "1882-6-1",
      IndexValue: "335.8403023"
    },
    {
      Date: "1882-7-1",
      IndexValue: "359.5777074"
    },
    {
      Date: "1882-8-1",
      IndexValue: "368.6114484"
    },
    {
      Date: "1882-9-1",
      IndexValue: "384.1627373"
    },
    {
      Date: "1882-10-1",
      IndexValue: "378.8470479"
    },
    {
      Date: "1882-11-1",
      IndexValue: "367.7213685"
    },
    {
      Date: "1882-12-1",
      IndexValue: "374.8418369"
    },
    {
      Date: "1883-1-1",
      IndexValue: "374.6321651"
    },
    {
      Date: "1883-2-1",
      IndexValue: "364.5090434"
    },
    {
      Date: "1883-3-1",
      IndexValue: "374.2543452"
    },
    {
      Date: "1883-4-1",
      IndexValue: "387.5097592"
    },
    {
      Date: "1883-5-1",
      IndexValue: "386.4079647"
    },
    {
      Date: "1883-6-1",
      IndexValue: "403.3162863"
    },
    {
      Date: "1883-7-1",
      IndexValue: "407.1046425"
    },
    {
      Date: "1883-8-1",
      IndexValue: "390.5664605"
    },
    {
      Date: "1883-9-1",
      IndexValue: "400.8907956"
    },
    {
      Date: "1883-10-1",
      IndexValue: "392.0000334"
    },
    {
      Date: "1883-11-1",
      IndexValue: "403.9900682"
    },
    {
      Date: "1883-12-1",
      IndexValue: "393.0542493"
    },
    {
      Date: "1884-1-1",
      IndexValue: "383.2910713"
    },
    {
      Date: "1884-2-1",
      IndexValue: "395.6647874"
    },
    {
      Date: "1884-3-1",
      IndexValue: "396.1915967"
    },
    {
      Date: "1884-4-1",
      IndexValue: "388.2686368"
    },
    {
      Date: "1884-5-1",
      IndexValue: "366.5843728"
    },
    {
      Date: "1884-6-1",
      IndexValue: "353.7079325"
    },
    {
      Date: "1884-7-1",
      IndexValue: "359.6765549"
    },
    {
      Date: "1884-8-1",
      IndexValue: "384.3855009"
    },
    {
      Date: "1884-9-1",
      IndexValue: "378.4647041"
    },
    {
      Date: "1884-10-1",
      IndexValue: "372.3418283"
    },
    {
      Date: "1884-11-1",
      IndexValue: "375.3110741"
    },
    {
      Date: "1884-12-1",
      IndexValue: "381.0076609"
    },
    {
      Date: "1885-1-1",
      IndexValue: "374.4541536"
    },
    {
      Date: "1885-2-1",
      IndexValue: "383.7189456"
    },
    {
      Date: "1885-3-1",
      IndexValue: "395.7330906"
    },
    {
      Date: "1885-4-1",
      IndexValue: "392.4241826"
    },
    {
      Date: "1885-5-1",
      IndexValue: "399.2131508"
    },
    {
      Date: "1885-6-1",
      IndexValue: "409.1087058"
    },
    {
      Date: "1885-7-1",
      IndexValue: "421.388972"
    },
    {
      Date: "1885-8-1",
      IndexValue: "447.0825189"
    },
    {
      Date: "1885-9-1",
      IndexValue: "448.7662633"
    },
    {
      Date: "1885-10-1",
      IndexValue: "476.8479329"
    },
    {
      Date: "1885-11-1",
      IndexValue: "503.7783636"
    },
    {
      Date: "1885-12-1",
      IndexValue: "490.1850407"
    },
    {
      Date: "1886-1-1",
      IndexValue: "503.7720867"
    },
    {
      Date: "1886-2-1",
      IndexValue: "515.3709546"
    },
    {
      Date: "1886-3-1",
      IndexValue: "512.681915"
    },
    {
      Date: "1886-4-1",
      IndexValue: "513.8791668"
    },
    {
      Date: "1886-5-1",
      IndexValue: "518.4248131"
    },
    {
      Date: "1886-6-1",
      IndexValue: "551.0450341"
    },
    {
      Date: "1886-7-1",
      IndexValue: "554.4205543"
    },
    {
      Date: "1886-8-1",
      IndexValue: "553.6264072"
    },
    {
      Date: "1886-9-1",
      IndexValue: "569.9929235"
    },
    {
      Date: "1886-10-1",
      IndexValue: "586.4004784"
    },
    {
      Date: "1886-11-1",
      IndexValue: "602.8482334"
    },
    {
      Date: "1886-12-1",
      IndexValue: "581.9543634"
    },
    {
      Date: "1887-1-1",
      IndexValue: "563.9224317"
    },
    {
      Date: "1887-2-1",
      IndexValue: "555.1655232"
    },
    {
      Date: "1887-3-1",
      IndexValue: "570.0926948"
    },
    {
      Date: "1887-4-1",
      IndexValue: "585.0907243"
    },
    {
      Date: "1887-5-1",
      IndexValue: "597.1330011"
    },
    {
      Date: "1887-6-1",
      IndexValue: "588.8372297"
    },
    {
      Date: "1887-7-1",
      IndexValue: "583.4294011"
    },
    {
      Date: "1887-8-1",
      IndexValue: "564.1088202"
    },
    {
      Date: "1887-9-1",
      IndexValue: "565.6891407"
    },
    {
      Date: "1887-10-1",
      IndexValue: "542.3751641"
    },
    {
      Date: "1887-11-1",
      IndexValue: "548.4275656"
    },
    {
      Date: "1887-12-1",
      IndexValue: "534.8928593"
    },
    {
      Date: "1888-1-1",
      IndexValue: "534.903346"
    },
    {
      Date: "1888-2-1",
      IndexValue: "540.0908819"
    },
    {
      Date: "1888-3-1",
      IndexValue: "521.7213136"
    },
    {
      Date: "1888-4-1",
      IndexValue: "531.9734924"
    },
    {
      Date: "1888-5-1",
      IndexValue: "547.7443121"
    },
    {
      Date: "1888-6-1",
      IndexValue: "539.2561969"
    },
    {
      Date: "1888-7-1",
      IndexValue: "548.852151"
    },
    {
      Date: "1888-8-1",
      IndexValue: "562.704261"
    },
    {
      Date: "1888-9-1",
      IndexValue: "578.7368665"
    },
    {
      Date: "1888-10-1",
      IndexValue: "570.8856855"
    },
    {
      Date: "1888-11-1",
      IndexValue: "554.7562007"
    },
    {
      Date: "1888-12-1",
      IndexValue: "546.1984158"
    },
    {
      Date: "1889-1-1",
      IndexValue: "578.8143091"
    },
    {
      Date: "1889-2-1",
      IndexValue: "594.621958"
    },
    {
      Date: "1889-3-1",
      IndexValue: "591.5349191"
    },
    {
      Date: "1889-4-1",
      IndexValue: "592.5483548"
    },
    {
      Date: "1889-5-1",
      IndexValue: "625.9834369"
    },
    {
      Date: "1889-6-1",
      IndexValue: "638.7796208"
    },
    {
      Date: "1889-7-1",
      IndexValue: "627.9975089"
    },
    {
      Date: "1889-8-1",
      IndexValue: "638.4967188"
    },
    {
      Date: "1889-9-1",
      IndexValue: "648.0580961"
    },
    {
      Date: "1889-10-1",
      IndexValue: "638.4521077"
    },
    {
      Date: "1889-11-1",
      IndexValue: "634.7159806"
    },
    {
      Date: "1889-12-1",
      IndexValue: "625.6080248"
    },
    {
      Date: "1890-1-1",
      IndexValue: "650.6900622"
    },
    {
      Date: "1890-2-1",
      IndexValue: "645.6506411"
    },
    {
      Date: "1890-3-1",
      IndexValue: "643.0211115"
    },
    {
      Date: "1890-4-1",
      IndexValue: "658.6500969"
    },
    {
      Date: "1890-5-1",
      IndexValue: "680.490353"
    },
    {
      Date: "1890-6-1",
      IndexValue: "677.866873"
    },
    {
      Date: "1890-7-1",
      IndexValue: "675.2347734"
    },
    {
      Date: "1890-8-1",
      IndexValue: "637.9948095"
    },
    {
      Date: "1890-9-1",
      IndexValue: "622.1365874"
    },
    {
      Date: "1890-10-1",
      IndexValue: "596.2142296"
    },
    {
      Date: "1890-11-1",
      IndexValue: "568.3128492"
    },
    {
      Date: "1890-12-1",
      IndexValue: "557.2522665"
    },
    {
      Date: "1891-1-1",
      IndexValue: "595.7248968"
    },
    {
      Date: "1891-2-1",
      IndexValue: "598.0726164"
    },
    {
      Date: "1891-3-1",
      IndexValue: "582.3098597"
    },
    {
      Date: "1891-4-1",
      IndexValue: "596.7943566"
    },
    {
      Date: "1891-5-1",
      IndexValue: "603.6967956"
    },
    {
      Date: "1891-6-1",
      IndexValue: "608.2181104"
    },
    {
      Date: "1891-7-1",
      IndexValue: "607.8984176"
    },
    {
      Date: "1891-8-1",
      IndexValue: "630.6255772"
    },
    {
      Date: "1891-9-1",
      IndexValue: "692.688373"
    },
    {
      Date: "1891-10-1",
      IndexValue: "695.0709785"
    },
    {
      Date: "1891-11-1",
      IndexValue: "695.7260848"
    },
    {
      Date: "1891-12-1",
      IndexValue: "719.3586852"
    },
    {
      Date: "1892-1-1",
      IndexValue: "754.2058135"
    },
    {
      Date: "1892-2-1",
      IndexValue: "758.1217066"
    },
    {
      Date: "1892-3-1",
      IndexValue: "789.4421683"
    },
    {
      Date: "1892-4-1",
      IndexValue: "801.3856657"
    },
    {
      Date: "1892-5-1",
      IndexValue: "804.1228941"
    },
    {
      Date: "1892-6-1",
      IndexValue: "802.5589208"
    },
    {
      Date: "1892-7-1",
      IndexValue: "784.1617065"
    },
    {
      Date: "1892-8-1",
      IndexValue: "787.8710076"
    },
    {
      Date: "1892-9-1",
      IndexValue: "770.9897264"
    },
    {
      Date: "1892-10-1",
      IndexValue: "789.2409384"
    },
    {
      Date: "1892-11-1",
      IndexValue: "769.2407783"
    },
    {
      Date: "1892-12-1",
      IndexValue: "754.1698046"
    },
    {
      Date: "1893-1-1",
      IndexValue: "742.7503257"
    },
    {
      Date: "1893-2-1",
      IndexValue: "723.4613048"
    },
    {
      Date: "1893-3-1",
      IndexValue: "716.9242352"
    },
    {
      Date: "1893-4-1",
      IndexValue: "728.546682"
    },
    {
      Date: "1893-5-1",
      IndexValue: "675.188719"
    },
    {
      Date: "1893-6-1",
      IndexValue: "662.5142161"
    },
    {
      Date: "1893-7-1",
      IndexValue: "619.5473129"
    },
    {
      Date: "1893-8-1",
      IndexValue: "632.7498572"
    },
    {
      Date: "1893-9-1",
      IndexValue: "654.0446133"
    },
    {
      Date: "1893-10-1",
      IndexValue: "667.8116151"
    },
    {
      Date: "1893-11-1",
      IndexValue: "699.4490192"
    },
    {
      Date: "1893-12-1",
      IndexValue: "687.3137568"
    },
    {
      Date: "1894-1-1",
      IndexValue: "695.2823393"
    },
    {
      Date: "1894-2-1",
      IndexValue: "718.1763866"
    },
    {
      Date: "1894-3-1",
      IndexValue: "764.30093"
    },
    {
      Date: "1894-4-1",
      IndexValue: "777.8117707"
    },
    {
      Date: "1894-5-1",
      IndexValue: "752.1868158"
    },
    {
      Date: "1894-6-1",
      IndexValue: "745.2062942"
    },
    {
      Date: "1894-7-1",
      IndexValue: "732.9965298"
    },
    {
      Date: "1894-8-1",
      IndexValue: "742.2856872"
    },
    {
      Date: "1894-9-1",
      IndexValue: "746.6383275"
    },
    {
      Date: "1894-10-1",
      IndexValue: "747.0672327"
    },
    {
      Date: "1894-11-1",
      IndexValue: "750.1269378"
    },
    {
      Date: "1894-12-1",
      IndexValue: "757.052541"
    },
    {
      Date: "1895-1-1",
      IndexValue: "751.3056907"
    },
    {
      Date: "1895-2-1",
      IndexValue: "743.7440198"
    },
    {
      Date: "1895-3-1",
      IndexValue: "746.7763891"
    },
    {
      Date: "1895-4-1",
      IndexValue: "749.2994069"
    },
    {
      Date: "1895-5-1",
      IndexValue: "782.4649257"
    },
    {
      Date: "1895-6-1",
      IndexValue: "789.7516952"
    },
    {
      Date: "1895-7-1",
      IndexValue: "806.7911302"
    },
    {
      Date: "1895-8-1",
      IndexValue: "832.969033"
    },
    {
      Date: "1895-9-1",
      IndexValue: "841.0117924"
    },
    {
      Date: "1895-10-1",
      IndexValue: "831.608571"
    },
    {
      Date: "1895-11-1",
      IndexValue: "806.3933238"
    },
    {
      Date: "1895-12-1",
      IndexValue: "772.4683051"
    },
    {
      Date: "1896-1-1",
      IndexValue: "777.2951839"
    },
    {
      Date: "1896-2-1",
      IndexValue: "824.6990206"
    },
    {
      Date: "1896-3-1",
      IndexValue: "814.6219399"
    },
    {
      Date: "1896-4-1",
      IndexValue: "837.0871858"
    },
    {
      Date: "1896-5-1",
      IndexValue: "848.7133227"
    },
    {
      Date: "1896-6-1",
      IndexValue: "848.9258055"
    },
    {
      Date: "1896-7-1",
      IndexValue: "796.9192744"
    },
    {
      Date: "1896-8-1",
      IndexValue: "754.5632122"
    },
    {
      Date: "1896-9-1",
      IndexValue: "797.184811"
    },
    {
      Date: "1896-10-1",
      IndexValue: "794.0256622"
    },
    {
      Date: "1896-11-1",
      IndexValue: "826.8507019"
    },
    {
      Date: "1896-12-1",
      IndexValue: "799.4777905"
    },
    {
      Date: "1897-1-1",
      IndexValue: "825.9170218"
    },
    {
      Date: "1897-2-1",
      IndexValue: "821.0241485"
    },
    {
      Date: "1897-3-1",
      IndexValue: "825.93458"
    },
    {
      Date: "1897-4-1",
      IndexValue: "815.2552137"
    },
    {
      Date: "1897-5-1",
      IndexValue: "834.7415028"
    },
    {
      Date: "1897-6-1",
      IndexValue: "876.6831714"
    },
    {
      Date: "1897-7-1",
      IndexValue: "918.7721761"
    },
    {
      Date: "1897-8-1",
      IndexValue: "938.9243011"
    },
    {
      Date: "1897-9-1",
      IndexValue: "959.5404504"
    },
    {
      Date: "1897-10-1",
      IndexValue: "944.9111095"
    },
    {
      Date: "1897-11-1",
      IndexValue: "914.5249639"
    },
    {
      Date: "1897-12-1",
      IndexValue: "937.1422479"
    },
    {
      Date: "1898-1-1",
      IndexValue: "965.777698"
    },
    {
      Date: "1898-2-1",
      IndexValue: "953.2039521"
    },
    {
      Date: "1898-3-1",
      IndexValue: "913.1609045"
    },
    {
      Date: "1898-4-1",
      IndexValue: "900.5059345"
    },
    {
      Date: "1898-5-1",
      IndexValue: "899.3756728"
    },
    {
      Date: "1898-6-1",
      IndexValue: "1003.401687"
    },
    {
      Date: "1898-7-1",
      IndexValue: "1024.972305"
    },
    {
      Date: "1898-8-1",
      IndexValue: "1066.558"
    },
    {
      Date: "1898-9-1",
      IndexValue: "1067.822893"
    },
    {
      Date: "1898-10-1",
      IndexValue: "1048.819638"
    },
    {
      Date: "1898-11-1",
      IndexValue: "1086.806256"
    },
    {
      Date: "1898-12-1",
      IndexValue: "1141.320538"
    },
    {
      Date: "1899-1-1",
      IndexValue: "1231.562295"
    },
    {
      Date: "1899-2-1",
      IndexValue: "1246.4448"
    },
    {
      Date: "1899-3-1",
      IndexValue: "1267.556335"
    },
    {
      Date: "1899-4-1",
      IndexValue: "1269.368425"
    },
    {
      Date: "1899-5-1",
      IndexValue: "1219.811472"
    },
    {
      Date: "1899-6-1",
      IndexValue: "1179.724514"
    },
    {
      Date: "1899-7-1",
      IndexValue: "1207.767711"
    },
    {
      Date: "1899-8-1",
      IndexValue: "1225.724412"
    },
    {
      Date: "1899-9-1",
      IndexValue: "1170.103619"
    },
    {
      Date: "1899-10-1",
      IndexValue: "1153.365116"
    },
    {
      Date: "1899-11-1",
      IndexValue: "1163.995973"
    },
    {
      Date: "1899-12-1",
      IndexValue: "1074.760442"
    },
    {
      Date: "1900-1-1",
      IndexValue: "1092.278859"
    },
    {
      Date: "1900-2-1",
      IndexValue: "1102.055976"
    },
    {
      Date: "1900-3-1",
      IndexValue: "1114.367592"
    },
    {
      Date: "1900-4-1",
      IndexValue: "1132.168991"
    },
    {
      Date: "1900-5-1",
      IndexValue: "1108.676342"
    },
    {
      Date: "1900-6-1",
      IndexValue: "1092.864983"
    },
    {
      Date: "1900-7-1",
      IndexValue: "1083.566718"
    },
    {
      Date: "1900-8-1",
      IndexValue: "1116.131747"
    },
    {
      Date: "1900-9-1",
      IndexValue: "1080.82679"
    },
    {
      Date: "1900-10-1",
      IndexValue: "1138.267792"
    },
    {
      Date: "1900-11-1",
      IndexValue: "1231.900261"
    },
    {
      Date: "1900-12-1",
      IndexValue: "1327.179245"
    },
    {
      Date: "1901-1-1",
      IndexValue: "1353.752109"
    },
    {
      Date: "1901-2-1",
      IndexValue: "1410.470203"
    },
    {
      Date: "1901-3-1",
      IndexValue: "1465.997335"
    },
    {
      Date: "1901-4-1",
      IndexValue: "1614.143806"
    },
    {
      Date: "1901-5-1",
      IndexValue: "1537.936323"
    },
    {
      Date: "1901-6-1",
      IndexValue: "1696.272803"
    },
    {
      Date: "1901-7-1",
      IndexValue: "1567.859307"
    },
    {
      Date: "1901-8-1",
      IndexValue: "1575.08205"
    },
    {
      Date: "1901-9-1",
      IndexValue: "1553.212182"
    },
    {
      Date: "1901-10-1",
      IndexValue: "1540.862527"
    },
    {
      Date: "1901-11-1",
      IndexValue: "1560.118929"
    },
    {
      Date: "1901-12-1",
      IndexValue: "1521.832485"
    },
    {
      Date: "1902-1-1",
      IndexValue: "1578.280394"
    },
    {
      Date: "1902-2-1",
      IndexValue: "1597.096982"
    },
    {
      Date: "1902-3-1",
      IndexValue: "1604.287818"
    },
    {
      Date: "1902-4-1",
      IndexValue: "1644.526776"
    },
    {
      Date: "1902-5-1",
      IndexValue: "1626.523438"
    },
    {
      Date: "1902-6-1",
      IndexValue: "1603.25814"
    },
    {
      Date: "1902-7-1",
      IndexValue: "1644.654989"
    },
    {
      Date: "1902-8-1",
      IndexValue: "1713.77136"
    },
    {
      Date: "1902-9-1",
      IndexValue: "1702.918323"
    },
    {
      Date: "1902-10-1",
      IndexValue: "1546.408866"
    },
    {
      Date: "1902-11-1",
      IndexValue: "1542.108784"
    },
    {
      Date: "1902-12-1",
      IndexValue: "1494.896923"
    },
    {
      Date: "1903-1-1",
      IndexValue: "1558.84354"
    },
    {
      Date: "1903-2-1",
      IndexValue: "1554.748352"
    },
    {
      Date: "1903-3-1",
      IndexValue: "1549.997336"
    },
    {
      Date: "1903-4-1",
      IndexValue: "1492.075457"
    },
    {
      Date: "1903-5-1",
      IndexValue: "1502.785353"
    },
    {
      Date: "1903-6-1",
      IndexValue: "1425.339178"
    },
    {
      Date: "1903-7-1",
      IndexValue: "1365.48188"
    },
    {
      Date: "1903-8-1",
      IndexValue: "1327.329785"
    },
    {
      Date: "1903-9-1",
      IndexValue: "1286.09575"
    },
    {
      Date: "1903-10-1",
      IndexValue: "1264.634353"
    },
    {
      Date: "1903-11-1",
      IndexValue: "1289.530854"
    },
    {
      Date: "1903-12-1",
      IndexValue: "1355.068317"
    },
    {
      Date: "1904-1-1",
      IndexValue: "1351.904189"
    },
    {
      Date: "1904-2-1",
      IndexValue: "1291.580444"
    },
    {
      Date: "1904-3-1",
      IndexValue: "1307.92266"
    },
    {
      Date: "1904-4-1",
      IndexValue: "1361.353405"
    },
    {
      Date: "1904-5-1",
      IndexValue: "1369.836286"
    },
    {
      Date: "1904-6-1",
      IndexValue: "1377.739188"
    },
    {
      Date: "1904-7-1",
      IndexValue: "1440.642188"
    },
    {
      Date: "1904-8-1",
      IndexValue: "1477.854022"
    },
    {
      Date: "1904-9-1",
      IndexValue: "1531.024062"
    },
    {
      Date: "1904-10-1",
      IndexValue: "1626.481251"
    },
    {
      Date: "1904-11-1",
      IndexValue: "1681.459625"
    },
    {
      Date: "1904-12-1",
      IndexValue: "1703.241078"
    },
    {
      Date: "1905-1-1",
      IndexValue: "1745.765331"
    },
    {
      Date: "1905-2-1",
      IndexValue: "1827.795247"
    },
    {
      Date: "1905-3-1",
      IndexValue: "1906.582021"
    },
    {
      Date: "1905-4-1",
      IndexValue: "1888.968082"
    },
    {
      Date: "1905-5-1",
      IndexValue: "1822.315647"
    },
    {
      Date: "1905-6-1",
      IndexValue: "1849.471723"
    },
    {
      Date: "1905-7-1",
      IndexValue: "1913.301796"
    },
    {
      Date: "1905-8-1",
      IndexValue: "1967.674243"
    },
    {
      Date: "1905-9-1",
      IndexValue: "2002.645044"
    },
    {
      Date: "1905-10-1",
      IndexValue: "2036.758356"
    },
    {
      Date: "1905-11-1",
      IndexValue: "2008.737791"
    },
    {
      Date: "1905-12-1",
      IndexValue: "2041.116851"
    },
    {
      Date: "1906-1-1",
      IndexValue: "2117.708655"
    },
    {
      Date: "1906-2-1",
      IndexValue: "2108.799045"
    },
    {
      Date: "1906-3-1",
      IndexValue: "2063.386344"
    },
    {
      Date: "1906-4-1",
      IndexValue: "2041.682297"
    },
    {
      Date: "1906-5-1",
      IndexValue: "1971.875263"
    },
    {
      Date: "1906-6-1",
      IndexValue: "2004.184947"
    },
    {
      Date: "1906-7-1",
      IndexValue: "2026.673793"
    },
    {
      Date: "1906-8-1",
      IndexValue: "2134.512917"
    },
    {
      Date: "1906-9-1",
      IndexValue: "2182.786939"
    },
    {
      Date: "1906-10-1",
      IndexValue: "2078.346123"
    },
    {
      Date: "1906-11-1",
      IndexValue: "2105.215362"
    },
    {
      Date: "1906-12-1",
      IndexValue: "2070.928971"
    },
    {
      Date: "1907-1-1",
      IndexValue: "2040.788353"
    },
    {
      Date: "1907-2-1",
      IndexValue: "1942.20514"
    },
    {
      Date: "1907-3-1",
      IndexValue: "1777.218066"
    },
    {
      Date: "1907-4-1",
      IndexValue: "1793.062266"
    },
    {
      Date: "1907-5-1",
      IndexValue: "1702.280101"
    },
    {
      Date: "1907-6-1",
      IndexValue: "1637.943673"
    },
    {
      Date: "1907-7-1",
      IndexValue: "1707.989791"
    },
    {
      Date: "1907-8-1",
      IndexValue: "1587.45656"
    },
    {
      Date: "1907-9-1",
      IndexValue: "1578.145449"
    },
    {
      Date: "1907-10-1",
      IndexValue: "1399.777006"
    },
    {
      Date: "1907-11-1",
      IndexValue: "1381.625542"
    },
    {
      Date: "1907-12-1",
      IndexValue: "1492.21261"
    },
    {
      Date: "1908-1-1",
      IndexValue: "1581.264287"
    },
    {
      Date: "1908-2-1",
      IndexValue: "1548.913746"
    },
    {
      Date: "1908-3-1",
      IndexValue: "1620.687906"
    },
    {
      Date: "1908-4-1",
      IndexValue: "1697.497352"
    },
    {
      Date: "1908-5-1",
      IndexValue: "1797.207737"
    },
    {
      Date: "1908-6-1",
      IndexValue: "1807.807258"
    },
    {
      Date: "1908-7-1",
      IndexValue: "1861.815026"
    },
    {
      Date: "1908-8-1",
      IndexValue: "1949.837895"
    },
    {
      Date: "1908-9-1",
      IndexValue: "1936.657998"
    },
    {
      Date: "1908-10-1",
      IndexValue: "1947.244363"
    },
    {
      Date: "1908-11-1",
      IndexValue: "2064.807767"
    },
    {
      Date: "1908-12-1",
      IndexValue: "2097.056688"
    },
    {
      Date: "1909-1-1",
      IndexValue: "2134.299532"
    },
    {
      Date: "1909-2-1",
      IndexValue: "2059.124171"
    },
    {
      Date: "1909-3-1",
      IndexValue: "2095.197843"
    },
    {
      Date: "1909-4-1",
      IndexValue: "2151.94859"
    },
    {
      Date: "1909-5-1",
      IndexValue: "2208.768529"
    },
    {
      Date: "1909-6-1",
      IndexValue: "2232.997565"
    },
    {
      Date: "1909-7-1",
      IndexValue: "2272.935182"
    },
    {
      Date: "1909-8-1",
      IndexValue: "2312.581638"
    },
    {
      Date: "1909-9-1",
      IndexValue: "2300.008353"
    },
    {
      Date: "1909-10-1",
      IndexValue: "2272.183722"
    },
    {
      Date: "1909-11-1",
      IndexValue: "2247.337855"
    },
    {
      Date: "1909-12-1",
      IndexValue: "2260.186594"
    },
    {
      Date: "1910-1-1",
      IndexValue: "2241.352997"
    },
    {
      Date: "1910-2-1",
      IndexValue: "2169.550394"
    },
    {
      Date: "1910-3-1",
      IndexValue: "2189.349643"
    },
    {
      Date: "1910-4-1",
      IndexValue: "2124.787909"
    },
    {
      Date: "1910-5-1",
      IndexValue: "2138.009046"
    },
    {
      Date: "1910-6-1",
      IndexValue: "2063.268014"
    },
    {
      Date: "1910-7-1",
      IndexValue: "1967.615135"
    },
    {
      Date: "1910-8-1",
      IndexValue: "2043.825074"
    },
    {
      Date: "1910-9-1",
      IndexValue: "2086.847192"
    },
    {
      Date: "1910-10-1",
      IndexValue: "2258.368357"
    },
    {
      Date: "1910-11-1",
      IndexValue: "2312.104187"
    },
    {
      Date: "1910-12-1",
      IndexValue: "2257.261043"
    },
    {
      Date: "1911-1-1",
      IndexValue: "2321.90268"
    },
    {
      Date: "1911-2-1",
      IndexValue: "2447.478618"
    },
    {
      Date: "1911-3-1",
      IndexValue: "2403.519727"
    },
    {
      Date: "1911-4-1",
      IndexValue: "2481.667171"
    },
    {
      Date: "1911-5-1",
      IndexValue: "2545.625368"
    },
    {
      Date: "1911-6-1",
      IndexValue: "2607.162549"
    },
    {
      Date: "1911-7-1",
      IndexValue: "2578.924242"
    },
    {
      Date: "1911-8-1",
      IndexValue: "2389.13939"
    },
    {
      Date: "1911-9-1",
      IndexValue: "2245.696963"
    },
    {
      Date: "1911-10-1",
      IndexValue: "2268.792846"
    },
    {
      Date: "1911-11-1",
      IndexValue: "2394.719279"
    },
    {
      Date: "1911-12-1",
      IndexValue: "2441.054201"
    },
    {
      Date: "1912-1-1",
      IndexValue: "2428.676153"
    },
    {
      Date: "1912-2-1",
      IndexValue: "2392.929656"
    },
    {
      Date: "1912-3-1",
      IndexValue: "2422.22235"
    },
    {
      Date: "1912-4-1",
      IndexValue: "2434.266803"
    },
    {
      Date: "1912-5-1",
      IndexValue: "2441.759133"
    },
    {
      Date: "1912-6-1",
      IndexValue: "2476.129009"
    },
    {
      Date: "1912-7-1",
      IndexValue: "2488.961974"
    },
    {
      Date: "1912-8-1",
      IndexValue: "2531.302596"
    },
    {
      Date: "1912-9-1",
      IndexValue: "2529.665978"
    },
    {
      Date: "1912-10-1",
      IndexValue: "2534.7608"
    },
    {
      Date: "1912-11-1",
      IndexValue: "2516.711792"
    },
    {
      Date: "1912-12-1",
      IndexValue: "2460.421306"
    },
    {
      Date: "1913-1-1",
      IndexValue: "2426.138471"
    },
    {
      Date: "1913-2-1",
      IndexValue: "2350.48469"
    },
    {
      Date: "1913-3-1",
      IndexValue: "2316.419695"
    },
    {
      Date: "1913-4-1",
      IndexValue: "2324.31658"
    },
    {
      Date: "1913-5-1",
      IndexValue: "2294.847922"
    },
    {
      Date: "1913-6-1",
      IndexValue: "2167.821968"
    },
    {
      Date: "1913-7-1",
      IndexValue: "2185.566244"
    },
    {
      Date: "1913-8-1",
      IndexValue: "2254.612079"
    },
    {
      Date: "1913-9-1",
      IndexValue: "2263.763937"
    },
    {
      Date: "1913-10-1",
      IndexValue: "2202.724581"
    },
    {
      Date: "1913-11-1",
      IndexValue: "2136.029758"
    },
    {
      Date: "1913-12-1",
      IndexValue: "2165.430018"
    },
    {
      Date: "1914-1-1",
      IndexValue: "2264.970671"
    },
    {
      Date: "1914-2-1",
      IndexValue: "2328.622261"
    },
    {
      Date: "1914-3-1",
      IndexValue: "2295.326807"
    },
    {
      Date: "1914-4-1",
      IndexValue: "2273.692699"
    },
    {
      Date: "1914-5-1",
      IndexValue: "2275.095113"
    },
    {
      Date: "1914-6-1",
      IndexValue: "2274.398939"
    },
    {
      Date: "1914-7-1",
      IndexValue: "2137.295066"
    },
    {
      Date: "1914-8-1",
      IndexValue: "2105.391339"
    },
    {
      Date: "1914-9-1",
      IndexValue: "2115.328895"
    },
    {
      Date: "1914-10-1",
      IndexValue: "2146.240164"
    },
    {
      Date: "1914-11-1",
      IndexValue: "2134.999043"
    },
    {
      Date: "1914-12-1",
      IndexValue: "2073.317256"
    },
    {
      Date: "1915-1-1",
      IndexValue: "2119.879919"
    },
    {
      Date: "1915-2-1",
      IndexValue: "2122.513638"
    },
    {
      Date: "1915-3-1",
      IndexValue: "2209.378118"
    },
    {
      Date: "1915-4-1",
      IndexValue: "2362.173178"
    },
    {
      Date: "1915-5-1",
      IndexValue: "2294.351277"
    },
    {
      Date: "1915-6-1",
      IndexValue: "2330.546232"
    },
    {
      Date: "1915-7-1",
      IndexValue: "2332.13568"
    },
    {
      Date: "1915-8-1",
      IndexValue: "2441.480622"
    },
    {
      Date: "1915-9-1",
      IndexValue: "2542.538914"
    },
    {
      Date: "1915-10-1",
      IndexValue: "2667.532566"
    },
    {
      Date: "1915-11-1",
      IndexValue: "2744.457538"
    },
    {
      Date: "1915-12-1",
      IndexValue: "2760.655446"
    },
    {
      Date: "1916-1-1",
      IndexValue: "2701.443636"
    },
    {
      Date: "1916-2-1",
      IndexValue: "2674.701853"
    },
    {
      Date: "1916-3-1",
      IndexValue: "2651.688157"
    },
    {
      Date: "1916-4-1",
      IndexValue: "2609.325787"
    },
    {
      Date: "1916-5-1",
      IndexValue: "2653.439038"
    },
    {
      Date: "1916-6-1",
      IndexValue: "2666.091216"
    },
    {
      Date: "1916-7-1",
      IndexValue: "2641.068127"
    },
    {
      Date: "1916-8-1",
      IndexValue: "2648.891813"
    },
    {
      Date: "1916-9-1",
      IndexValue: "2719.743083"
    },
    {
      Date: "1916-10-1",
      IndexValue: "2766.784302"
    },
    {
      Date: "1916-11-1",
      IndexValue: "2793.788313"
    },
    {
      Date: "1916-12-1",
      IndexValue: "2671.141173"
    },
    {
      Date: "1917-1-1",
      IndexValue: "2599.010887"
    },
    {
      Date: "1917-2-1",
      IndexValue: "2403.884951"
    },
    {
      Date: "1917-3-1",
      IndexValue: "2491.568185"
    },
    {
      Date: "1917-4-1",
      IndexValue: "2350.053076"
    },
    {
      Date: "1917-5-1",
      IndexValue: "2248.04132"
    },
    {
      Date: "1917-6-1",
      IndexValue: "2271.43646"
    },
    {
      Date: "1917-7-1",
      IndexValue: "2256.650752"
    },
    {
      Date: "1917-8-1",
      IndexValue: "2169.833058"
    },
    {
      Date: "1917-9-1",
      IndexValue: "2032.570861"
    },
    {
      Date: "1917-10-1",
      IndexValue: "1907.685108"
    },
    {
      Date: "1917-11-1",
      IndexValue: "1762.770591"
    },
    {
      Date: "1917-12-1",
      IndexValue: "1692.006998"
    },
    {
      Date: "1918-1-1",
      IndexValue: "1769.379586"
    },
    {
      Date: "1918-2-1",
      IndexValue: "1824.041959"
    },
    {
      Date: "1918-3-1",
      IndexValue: "1813.582038"
    },
    {
      Date: "1918-4-1",
      IndexValue: "1784.149809"
    },
    {
      Date: "1918-5-1",
      IndexValue: "1815.897988"
    },
    {
      Date: "1918-6-1",
      IndexValue: "1806.238867"
    },
    {
      Date: "1918-7-1",
      IndexValue: "1784.747684"
    },
    {
      Date: "1918-8-1",
      IndexValue: "1778.13645"
    },
    {
      Date: "1918-9-1",
      IndexValue: "1746.460322"
    },
    {
      Date: "1918-10-1",
      IndexValue: "1797.619516"
    },
    {
      Date: "1918-11-1",
      IndexValue: "1820.284206"
    },
    {
      Date: "1918-12-1",
      IndexValue: "1773.120928"
    },
    {
      Date: "1919-1-1",
      IndexValue: "1772.498092"
    },
    {
      Date: "1919-2-1",
      IndexValue: "1823.01697"
    },
    {
      Date: "1919-3-1",
      IndexValue: "1866.295849"
    },
    {
      Date: "1919-4-1",
      IndexValue: "1904.18251"
    },
    {
      Date: "1919-5-1",
      IndexValue: "2022.066801"
    },
    {
      Date: "1919-6-1",
      IndexValue: "2086.500925"
    },
    {
      Date: "1919-7-1",
      IndexValue: "2102.579742"
    },
    {
      Date: "1919-8-1",
      IndexValue: "1937.682802"
    },
    {
      Date: "1919-9-1",
      IndexValue: "1966.983802"
    },
    {
      Date: "1919-10-1",
      IndexValue: "2042.742669"
    },
    {
      Date: "1919-11-1",
      IndexValue: "1948.862371"
    },
    {
      Date: "1919-12-1",
      IndexValue: "1860.739195"
    },
    {
      Date: "1920-1-1",
      IndexValue: "1812.782894"
    },
    {
      Date: "1920-2-1",
      IndexValue: "1654.778145"
    },
    {
      Date: "1920-3-1",
      IndexValue: "1762.090616"
    },
    {
      Date: "1920-4-1",
      IndexValue: "1704.803816"
    },
    {
      Date: "1920-5-1",
      IndexValue: "1582.982347"
    },
    {
      Date: "1920-6-1",
      IndexValue: "1541.547315"
    },
    {
      Date: "1920-7-1",
      IndexValue: "1555.45008"
    },
    {
      Date: "1920-8-1",
      IndexValue: "1539.9764"
    },
    {
      Date: "1920-9-1",
      IndexValue: "1627.43296"
    },
    {
      Date: "1920-10-1",
      IndexValue: "1646.579169"
    },
    {
      Date: "1920-11-1",
      IndexValue: "1579.845657"
    },
    {
      Date: "1920-12-1",
      IndexValue: "1477.153294"
    },
    {
      Date: "1921-1-1",
      IndexValue: "1584.029256"
    },
    {
      Date: "1921-2-1",
      IndexValue: "1633.79786"
    },
    {
      Date: "1921-3-1",
      IndexValue: "1610.489746"
    },
    {
      Date: "1921-4-1",
      IndexValue: "1645.114376"
    },
    {
      Date: "1921-5-1",
      IndexValue: "1743.343156"
    },
    {
      Date: "1921-6-1",
      IndexValue: "1622.842449"
    },
    {
      Date: "1921-7-1",
      IndexValue: "1618.61752"
    },
    {
      Date: "1921-8-1",
      IndexValue: "1608.634393"
    },
    {
      Date: "1921-9-1",
      IndexValue: "1677.311324"
    },
    {
      Date: "1921-10-1",
      IndexValue: "1710.051883"
    },
    {
      Date: "1921-11-1",
      IndexValue: "1822.22117"
    },
    {
      Date: "1921-12-1",
      IndexValue: "1907.604685"
    },
    {
      Date: "1922-1-1",
      IndexValue: "1960.417407"
    },
    {
      Date: "1922-2-1",
      IndexValue: "2013.865636"
    },
    {
      Date: "1922-3-1",
      IndexValue: "2125.233261"
    },
    {
      Date: "1922-4-1",
      IndexValue: "2265.192502"
    },
    {
      Date: "1922-5-1",
      IndexValue: "2364.537242"
    },
    {
      Date: "1922-6-1",
      IndexValue: "2353.564643"
    },
    {
      Date: "1922-7-1",
      IndexValue: "2367.454642"
    },
    {
      Date: "1922-8-1",
      IndexValue: "2497.647721"
    },
    {
      Date: "1922-9-1",
      IndexValue: "2574.432239"
    },
    {
      Date: "1922-10-1",
      IndexValue: "2627.31576"
    },
    {
      Date: "1922-11-1",
      IndexValue: "2493.827168"
    },
    {
      Date: "1922-12-1",
      IndexValue: "2485.409327"
    },
    {
      Date: "1923-1-1",
      IndexValue: "2546.517468"
    },
    {
      Date: "1923-2-1",
      IndexValue: "2667.484201"
    },
    {
      Date: "1923-3-1",
      IndexValue: "2722.93702"
    },
    {
      Date: "1923-4-1",
      IndexValue: "2624.460082"
    },
    {
      Date: "1923-5-1",
      IndexValue: "2512.903705"
    },
    {
      Date: "1923-6-1",
      IndexValue: "2415.5235"
    },
    {
      Date: "1923-7-1",
      IndexValue: "2319.727588"
    },
    {
      Date: "1923-8-1",
      IndexValue: "2357.497063"
    },
    {
      Date: "1923-9-1",
      IndexValue: "2370.917891"
    },
    {
      Date: "1923-10-1",
      IndexValue: "2335.200456"
    },
    {
      Date: "1923-11-1",
      IndexValue: "2417.797631"
    },
    {
      Date: "1923-12-1",
      IndexValue: "2512.57023"
    },
    {
      Date: "1924-1-1",
      IndexValue: "2607.874027"
    },
    {
      Date: "1924-2-1",
      IndexValue: "2648.120291"
    },
    {
      Date: "1924-3-1",
      IndexValue: "2625.944522"
    },
    {
      Date: "1924-4-1",
      IndexValue: "2594.248493"
    },
    {
      Date: "1924-5-1",
      IndexValue: "2598.783341"
    },
    {
      Date: "1924-6-1",
      IndexValue: "2661.681875"
    },
    {
      Date: "1924-7-1",
      IndexValue: "2782.605094"
    },
    {
      Date: "1924-8-1",
      IndexValue: "2909.095758"
    },
    {
      Date: "1924-9-1",
      IndexValue: "2878.2785"
    },
    {
      Date: "1924-10-1",
      IndexValue: "2838.515336"
    },
    {
      Date: "1924-11-1",
      IndexValue: "3011.279773"
    },
    {
      Date: "1924-12-1",
      IndexValue: "3169.603142"
    },
    {
      Date: "1925-1-1",
      IndexValue: "3315.037803"
    },
    {
      Date: "1925-2-1",
      IndexValue: "3377.337446"
    },
    {
      Date: "1925-3-1",
      IndexValue: "3284.451564"
    },
    {
      Date: "1925-4-1",
      IndexValue: "3283.587619"
    },
    {
      Date: "1925-5-1",
      IndexValue: "3384.51074"
    },
    {
      Date: "1925-6-1",
      IndexValue: "3420.8569"
    },
    {
      Date: "1925-7-1",
      IndexValue: "3491.268763"
    },
    {
      Date: "1925-8-1",
      IndexValue: "3553.736787"
    },
    {
      Date: "1925-9-1",
      IndexValue: "3651.332929"
    },
    {
      Date: "1925-10-1",
      IndexValue: "3787.522994"
    },
    {
      Date: "1925-11-1",
      IndexValue: "3855.84786"
    },
    {
      Date: "1925-12-1",
      IndexValue: "3956.454752"
    },
    {
      Date: "1926-1-1",
      IndexValue: "4032.861006"
    },
    {
      Date: "1926-2-1",
      IndexValue: "4055.575737"
    },
    {
      Date: "1926-3-1",
      IndexValue: "3818.231648"
    },
    {
      Date: "1926-4-1",
      IndexValue: "3707.68483"
    },
    {
      Date: "1926-5-1",
      IndexValue: "3771.751323"
    },
    {
      Date: "1926-6-1",
      IndexValue: "3991.162761"
    },
    {
      Date: "1926-7-1",
      IndexValue: "4224.906147"
    },
    {
      Date: "1926-8-1",
      IndexValue: "4436.057178"
    },
    {
      Date: "1926-9-1",
      IndexValue: "4496.644812"
    },
    {
      Date: "1926-10-1",
      IndexValue: "4389.276656"
    },
    {
      Date: "1926-11-1",
      IndexValue: "4440.530023"
    },
    {
      Date: "1926-12-1",
      IndexValue: "4560.885557"
    },
    {
      Date: "1927-1-1",
      IndexValue: "4602.087263"
    },
    {
      Date: "1927-2-1",
      IndexValue: "4738.587544"
    },
    {
      Date: "1927-3-1",
      IndexValue: "4859.890557"
    },
    {
      Date: "1927-4-1",
      IndexValue: "4999.949659"
    },
    {
      Date: "1927-5-1",
      IndexValue: "5163.722055"
    },
    {
      Date: "1927-6-1",
      IndexValue: "5192.153262"
    },
    {
      Date: "1927-7-1",
      IndexValue: "5421.035826"
    },
    {
      Date: "1927-8-1",
      IndexValue: "5764.925918"
    },
    {
      Date: "1927-9-1",
      IndexValue: "6079.324642"
    },
    {
      Date: "1927-10-1",
      IndexValue: "5974.114952"
    },
    {
      Date: "1927-11-1",
      IndexValue: "6168.448731"
    },
    {
      Date: "1927-12-1",
      IndexValue: "6336.279229"
    },
    {
      Date: "1928-1-1",
      IndexValue: "6385.17128"
    },
    {
      Date: "1928-2-1",
      IndexValue: "6406.520098"
    },
    {
      Date: "1928-3-1",
      IndexValue: "6774.870345"
    },
    {
      Date: "1928-4-1",
      IndexValue: "7226.42628"
    },
    {
      Date: "1928-5-1",
      IndexValue: "7431.401031"
    },
    {
      Date: "1928-6-1",
      IndexValue: "7133.819051"
    },
    {
      Date: "1928-7-1",
      IndexValue: "7211.855355"
    },
    {
      Date: "1928-8-1",
      IndexValue: "7471.048659"
    },
    {
      Date: "1928-9-1",
      IndexValue: "7929.444393"
    },
    {
      Date: "1928-10-1",
      IndexValue: "8163.811267"
    },
    {
      Date: "1928-11-1",
      IndexValue: "8742.185169"
    },
    {
      Date: "1928-12-1",
      IndexValue: "8854.638513"
    },
    {
      Date: "1929-1-1",
      IndexValue: "9536.107812"
    },
    {
      Date: "1929-2-1",
      IndexValue: "9613.785279"
    },
    {
      Date: "1929-3-1",
      IndexValue: "9868.980667"
    },
    {
      Date: "1929-4-1",
      IndexValue: "9897.773145"
    },
    {
      Date: "1929-5-1",
      IndexValue: "10016.6473"
    },
    {
      Date: "1929-6-1",
      IndexValue: "10177.65764"
    },
    {
      Date: "1929-7-1",
      IndexValue: "10985.84998"
    },
    {
      Date: "1929-8-1",
      IndexValue: "11640.64212"
    },
    {
      Date: "1929-9-1",
      IndexValue: "12135.01491"
    },
    {
      Date: "1929-10-1",
      IndexValue: "10882.42032"
    },
    {
      Date: "1929-11-1",
      IndexValue: "8032.540328"
    },
    {
      Date: "1929-12-1",
      IndexValue: "8432.887875"
    },
    {
      Date: "1930-1-1",
      IndexValue: "8637.141942"
    },
    {
      Date: "1930-2-1",
      IndexValue: "9264.600746"
    },
    {
      Date: "1930-3-1",
      IndexValue: "9703.606286"
    },
    {
      Date: "1930-4-1",
      IndexValue: "10291.68638"
    },
    {
      Date: "1930-5-1",
      IndexValue: "9767.530111"
    },
    {
      Date: "1930-6-1",
      IndexValue: "8865.779356"
    },
    {
      Date: "1930-7-1",
      IndexValue: "8814.706916"
    },
    {
      Date: "1930-8-1",
      IndexValue: "8788.708532"
    },
    {
      Date: "1930-9-1",
      IndexValue: "8765.790631"
    },
    {
      Date: "1930-10-1",
      IndexValue: "7639.747271"
    },
    {
      Date: "1930-11-1",
      IndexValue: "7163.729209"
    },
    {
      Date: "1930-12-1",
      IndexValue: "6845.712484"
    },
    {
      Date: "1931-1-1",
      IndexValue: "7177.880902"
    },
    {
      Date: "1931-2-1",
      IndexValue: "7860.436261"
    },
    {
      Date: "1931-3-1",
      IndexValue: "8098.62908"
    },
    {
      Date: "1931-4-1",
      IndexValue: "7410.28987"
    },
    {
      Date: "1931-5-1",
      IndexValue: "6818.972789"
    },
    {
      Date: "1931-6-1",
      IndexValue: "6723.660388"
    },
    {
      Date: "1931-7-1",
      IndexValue: "6982.471221"
    },
    {
      Date: "1931-8-1",
      IndexValue: "6808.408884"
    },
    {
      Date: "1931-9-1",
      IndexValue: "5868.46205"
    },
    {
      Date: "1931-10-1",
      IndexValue: "5154.039461"
    },
    {
      Date: "1931-11-1",
      IndexValue: "5330.9095"
    },
    {
      Date: "1931-12-1",
      IndexValue: "4395.362891"
    },
    {
      Date: "1932-1-1",
      IndexValue: "4448.284881"
    },
    {
      Date: "1932-2-1",
      IndexValue: "4508.060997"
    },
    {
      Date: "1932-3-1",
      IndexValue: "4590.831376"
    },
    {
      Date: "1932-4-1",
      IndexValue: "3548.751093"
    },
    {
      Date: "1932-5-1",
      IndexValue: "3191.897248"
    },
    {
      Date: "1932-6-1",
      IndexValue: "2815.634513"
    },
    {
      Date: "1932-7-1",
      IndexValue: "2988.453673"
    },
    {
      Date: "1932-8-1",
      IndexValue: "4555.280617"
    },
    {
      Date: "1932-9-1",
      IndexValue: "5063.642567"
    },
    {
      Date: "1932-10-1",
      IndexValue: "4426.08267"
    },
    {
      Date: "1932-11-1",
      IndexValue: "4443.260639"
    },
    {
      Date: "1932-12-1",
      IndexValue: "4357.575541"
    },
    {
      Date: "1933-1-1",
      IndexValue: "4627.088404"
    },
    {
      Date: "1933-2-1",
      IndexValue: "4170.188925"
    },
    {
      Date: "1933-3-1",
      IndexValue: "4217.016396"
    },
    {
      Date: "1933-4-1",
      IndexValue: "4690.838463"
    },
    {
      Date: "1933-5-1",
      IndexValue: "6065.807865"
    },
    {
      Date: "1933-6-1",
      IndexValue: "7075.896341"
    },
    {
      Date: "1933-7-1",
      IndexValue: "7440.019672"
    },
    {
      Date: "1933-8-1",
      IndexValue: "7040.663264"
    },
    {
      Date: "1933-9-1",
      IndexValue: "7006.295765"
    },
    {
      Date: "1933-10-1",
      IndexValue: "6349.041649"
    },
    {
      Date: "1933-11-1",
      IndexValue: "6526.604289"
    },
    {
      Date: "1933-12-1",
      IndexValue: "6677.868465"
    },
    {
      Date: "1934-1-1",
      IndexValue: "7084.256167"
    },
    {
      Date: "1934-2-1",
      IndexValue: "7575.865097"
    },
    {
      Date: "1934-3-1",
      IndexValue: "7212.380845"
    },
    {
      Date: "1934-4-1",
      IndexValue: "7358.066685"
    },
    {
      Date: "1934-5-1",
      IndexValue: "6635.073744"
    },
    {
      Date: "1934-6-1",
      IndexValue: "6697.723103"
    },
    {
      Date: "1934-7-1",
      IndexValue: "6406.062193"
    },
    {
      Date: "1934-8-1",
      IndexValue: "6180.953709"
    },
    {
      Date: "1934-9-1",
      IndexValue: "5967.782141"
    },
    {
      Date: "1934-10-1",
      IndexValue: "6084.672282"
    },
    {
      Date: "1934-11-1",
      IndexValue: "6280.084308"
    },
    {
      Date: "1934-12-1",
      IndexValue: "6394.002531"
    },
    {
      Date: "1935-1-1",
      IndexValue: "6325.485932"
    },
    {
      Date: "1935-2-1",
      IndexValue: "6114.872411"
    },
    {
      Date: "1935-3-1",
      IndexValue: "5752.27001"
    },
    {
      Date: "1935-4-1",
      IndexValue: "6163.646423"
    },
    {
      Date: "1935-5-1",
      IndexValue: "6672.927538"
    },
    {
      Date: "1935-6-1",
      IndexValue: "7001.990414"
    },
    {
      Date: "1935-7-1",
      IndexValue: "7394.064976"
    },
    {
      Date: "1935-8-1",
      IndexValue: "7919.4023"
    },
    {
      Date: "1935-9-1",
      IndexValue: "8112.105434"
    },
    {
      Date: "1935-10-1",
      IndexValue: "8354.909624"
    },
    {
      Date: "1935-11-1",
      IndexValue: "9100.376997"
    },
    {
      Date: "1935-12-1",
      IndexValue: "9127.710696"
    },
    {
      Date: "1936-1-1",
      IndexValue: "9659.693834"
    },
    {
      Date: "1936-2-1",
      IndexValue: "10242.94933"
    },
    {
      Date: "1936-3-1",
      IndexValue: "10567.08972"
    },
    {
      Date: "1936-4-1",
      IndexValue: "10611.92915"
    },
    {
      Date: "1936-5-1",
      IndexValue: "10080.22331"
    },
    {
      Date: "1936-6-1",
      IndexValue: "10465.87014"
    },
    {
      Date: "1936-7-1",
      IndexValue: "11039.54504"
    },
    {
      Date: "1936-8-1",
      IndexValue: "11213.69339"
    },
    {
      Date: "1936-9-1",
      IndexValue: "11376.79951"
    },
    {
      Date: "1936-10-1",
      IndexValue: "12010.41914"
    },
    {
      Date: "1936-11-1",
      IndexValue: "12385.12745"
    },
    {
      Date: "1936-12-1",
      IndexValue: "12213.90449"
    },
    {
      Date: "1937-1-1",
      IndexValue: "12547.28116"
    },
    {
      Date: "1937-2-1",
      IndexValue: "12962.19504"
    },
    {
      Date: "1937-3-1",
      IndexValue: "12901.11705"
    },
    {
      Date: "1937-4-1",
      IndexValue: "12092.10105"
    },
    {
      Date: "1937-5-1",
      IndexValue: "11519.26107"
    },
    {
      Date: "1937-6-1",
      IndexValue: "11136.46716"
    },
    {
      Date: "1937-7-1",
      IndexValue: "11765.4286"
    },
    {
      Date: "1937-8-1",
      IndexValue: "11933.07785"
    },
    {
      Date: "1937-9-1",
      IndexValue: "10218.89372"
    },
    {
      Date: "1937-10-1",
      IndexValue: "8778.861726"
    },
    {
      Date: "1937-11-1",
      IndexValue: "8109.386828"
    },
    {
      Date: "1937-12-1",
      IndexValue: "8083.072887"
    },
    {
      Date: "1938-1-1",
      IndexValue: "8461.80226"
    },
    {
      Date: "1938-2-1",
      IndexValue: "8367.771054"
    },
    {
      Date: "1938-3-1",
      IndexValue: "7863.73412"
    },
    {
      Date: "1938-4-1",
      IndexValue: "7538.652315"
    },
    {
      Date: "1938-5-1",
      IndexValue: "7709.398692"
    },
    {
      Date: "1938-6-1",
      IndexValue: "7934.70677"
    },
    {
      Date: "1938-7-1",
      IndexValue: "9558.519577"
    },
    {
      Date: "1938-8-1",
      IndexValue: "9657.870587"
    },
    {
      Date: "1938-9-1",
      IndexValue: "9261.670372"
    },
    {
      Date: "1938-10-1",
      IndexValue: "10408.13285"
    },
    {
      Date: "1938-11-1",
      IndexValue: "10453.29321"
    },
    {
      Date: "1938-12-1",
      IndexValue: "10183.3631"
    },
    {
      Date: "1939-1-1",
      IndexValue: "10065.22145"
    },
    {
      Date: "1939-2-1",
      IndexValue: "10091.45058"
    },
    {
      Date: "1939-3-1",
      IndexValue: "10118.57814"
    },
    {
      Date: "1939-4-1",
      IndexValue: "8944.533454"
    },
    {
      Date: "1939-5-1",
      IndexValue: "9311.142805"
    },
    {
      Date: "1939-6-1",
      IndexValue: "9513.588994"
    },
    {
      Date: "1939-7-1",
      IndexValue: "9784.097867"
    },
    {
      Date: "1939-8-1",
      IndexValue: "9680.352451"
    },
    {
      Date: "1939-9-1",
      IndexValue: "10522.53609"
    },
    {
      Date: "1939-10-1",
      IndexValue: "10745.69414"
    },
    {
      Date: "1939-11-1",
      IndexValue: "10595.75422"
    },
    {
      Date: "1939-12-1",
      IndexValue: "10388.07632"
    },
    {
      Date: "1940-1-1",
      IndexValue: "10447.53889"
    },
    {
      Date: "1940-2-1",
      IndexValue: "10349.4879"
    },
    {
      Date: "1940-3-1",
      IndexValue: "10334.66662"
    },
    {
      Date: "1940-4-1",
      IndexValue: "10481.86595"
    },
    {
      Date: "1940-5-1",
      IndexValue: "9083.95158"
    },
    {
      Date: "1940-6-1",
      IndexValue: "8289.922296"
    },
    {
      Date: "1940-7-1",
      IndexValue: "8672.673466"
    },
    {
      Date: "1940-8-1",
      IndexValue: "8902.970493"
    },
    {
      Date: "1940-9-1",
      IndexValue: "9327.025378"
    },
    {
      Date: "1940-10-1",
      IndexValue: "9463.757406"
    },
    {
      Date: "1940-11-1",
      IndexValue: "9733.499482"
    },
    {
      Date: "1940-12-1",
      IndexValue: "9317.526681"
    },
    {
      Date: "1941-1-1",
      IndexValue: "9384.873979"
    },
    {
      Date: "1941-2-1",
      IndexValue: "8847.92479"
    },
    {
      Date: "1941-3-1",
      IndexValue: "8889.254335"
    },
    {
      Date: "1941-4-1",
      IndexValue: "8602.594748"
    },
    {
      Date: "1941-5-1",
      IndexValue: "8407.464663"
    },
    {
      Date: "1941-6-1",
      IndexValue: "8574.314818"
    },
    {
      Date: "1941-7-1",
      IndexValue: "9064.331419"
    },
    {
      Date: "1941-8-1",
      IndexValue: "8949.683824"
    },
    {
      Date: "1941-9-1",
      IndexValue: "8907.548929"
    },
    {
      Date: "1941-10-1",
      IndexValue: "8489.440581"
    },
    {
      Date: "1941-11-1",
      IndexValue: "8090.15392"
    },
    {
      Date: "1941-12-1",
      IndexValue: "7565.432595"
    },
    {
      Date: "1942-1-1",
      IndexValue: "7663.978818"
    },
    {
      Date: "1942-2-1",
      IndexValue: "7426.199204"
    },
    {
      Date: "1942-3-1",
      IndexValue: "6983.658901"
    },
    {
      Date: "1942-4-1",
      IndexValue: "6699.889317"
    },
    {
      Date: "1942-5-1",
      IndexValue: "6740.778851"
    },
    {
      Date: "1942-6-1",
      IndexValue: "7127.544851"
    },
    {
      Date: "1942-7-1",
      IndexValue: "7393.546364"
    },
    {
      Date: "1942-8-1",
      IndexValue: "7351.099603"
    },
    {
      Date: "1942-9-1",
      IndexValue: "7472.334268"
    },
    {
      Date: "1942-10-1",
      IndexValue: "7970.439196"
    },
    {
      Date: "1942-11-1",
      IndexValue: "8093.017481"
    },
    {
      Date: "1942-12-1",
      IndexValue: "8129.375707"
    },
    {
      Date: "1943-1-1",
      IndexValue: "8658.098235"
    },
    {
      Date: "1943-2-1",
      IndexValue: "9215.139738"
    },
    {
      Date: "1943-3-1",
      IndexValue: "9417.913943"
    },
    {
      Date: "1943-4-1",
      IndexValue: "9662.173351"
    },
    {
      Date: "1943-5-1",
      IndexValue: "10026.14578"
    },
    {
      Date: "1943-6-1",
      IndexValue: "10244.68596"
    },
    {
      Date: "1943-7-1",
      IndexValue: "10558.55062"
    },
    {
      Date: "1943-8-1",
      IndexValue: "10137.80814"
    },
    {
      Date: "1943-9-1",
      IndexValue: "10337.11416"
    },
    {
      Date: "1943-10-1",
      IndexValue: "10285.62495"
    },
    {
      Date: "1943-11-1",
      IndexValue: "9853.209295"
    },
    {
      Date: "1943-12-1",
      IndexValue: "10027.86533"
    },
    {
      Date: "1944-1-1",
      IndexValue: "10395.70899"
    },
    {
      Date: "1944-2-1",
      IndexValue: "10370.6092"
    },
    {
      Date: "1944-3-1",
      IndexValue: "10706.89772"
    },
    {
      Date: "1944-4-1",
      IndexValue: "10506.65637"
    },
    {
      Date: "1944-5-1",
      IndexValue: "10738.37034"
    },
    {
      Date: "1944-6-1",
      IndexValue: "11226.66718"
    },
    {
      Date: "1944-7-1",
      IndexValue: "11500.49617"
    },
    {
      Date: "1944-8-1",
      IndexValue: "11379.34781"
    },
    {
      Date: "1944-9-1",
      IndexValue: "11240.17806"
    },
    {
      Date: "1944-10-1",
      IndexValue: "11564.29959"
    },
    {
      Date: "1944-11-1",
      IndexValue: "11531.45495"
    },
    {
      Date: "1944-12-1",
      IndexValue: "11764.81688"
    },
    {
      Date: "1945-1-1",
      IndexValue: "12163.21407"
    },
    {
      Date: "1945-2-1",
      IndexValue: "12617.54385"
    },
    {
      Date: "1945-3-1",
      IndexValue: "12657.52053"
    },
    {
      Date: "1945-4-1",
      IndexValue: "13024.76732"
    },
    {
      Date: "1945-5-1",
      IndexValue: "13490.91423"
    },
    {
      Date: "1945-6-1",
      IndexValue: "13633.67742"
    },
    {
      Date: "1945-7-1",
      IndexValue: "13402.78528"
    },
    {
      Date: "1945-8-1",
      IndexValue: "13497.74941"
    },
    {
      Date: "1945-9-1",
      IndexValue: "14467.07531"
    },
    {
      Date: "1945-10-1",
      IndexValue: "15120.10302"
    },
    {
      Date: "1945-11-1",
      IndexValue: "15665.3431"
    },
    {
      Date: "1945-12-1",
      IndexValue: "15894.69514"
    },
    {
      Date: "1946-1-1",
      IndexValue: "16578.50233"
    },
    {
      Date: "1946-2-1",
      IndexValue: "16768.25842"
    },
    {
      Date: "1946-3-1",
      IndexValue: "16141.386"
    },
    {
      Date: "1946-4-1",
      IndexValue: "17140.38922"
    },
    {
      Date: "1946-5-1",
      IndexValue: "17136.05294"
    },
    {
      Date: "1946-6-1",
      IndexValue: "16895.36382"
    },
    {
      Date: "1946-7-1",
      IndexValue: "15550.46654"
    },
    {
      Date: "1946-8-1",
      IndexValue: "14995.29687"
    },
    {
      Date: "1946-9-1",
      IndexValue: "12707.02736"
    },
    {
      Date: "1946-10-1",
      IndexValue: "12229.80672"
    },
    {
      Date: "1946-11-1",
      IndexValue: "11941.59748"
    },
    {
      Date: "1946-12-1",
      IndexValue: "12232.51406"
    },
    {
      Date: "1947-1-1",
      IndexValue: "12345.25403"
    },
    {
      Date: "1947-2-1",
      IndexValue: "12872.60355"
    },
    {
      Date: "1947-3-1",
      IndexValue: "12173.57974"
    },
    {
      Date: "1947-4-1",
      IndexValue: "11772.96866"
    },
    {
      Date: "1947-5-1",
      IndexValue: "11613.48706"
    },
    {
      Date: "1947-6-1",
      IndexValue: "12014.84959"
    },
    {
      Date: "1947-7-1",
      IndexValue: "12704.25949"
    },
    {
      Date: "1947-8-1",
      IndexValue: "12340.12979"
    },
    {
      Date: "1947-9-1",
      IndexValue: "11810.93368"
    },
    {
      Date: "1947-10-1",
      IndexValue: "12169.51413"
    },
    {
      Date: "1947-11-1",
      IndexValue: "12029.47427"
    },
    {
      Date: "1947-12-1",
      IndexValue: "11743.04379"
    },
    {
      Date: "1948-1-1",
      IndexValue: "11494.32772"
    },
    {
      Date: "1948-2-1",
      IndexValue: "11076.6845"
    },
    {
      Date: "1948-3-1",
      IndexValue: "11337.69137"
    },
    {
      Date: "1948-4-1",
      IndexValue: "12059.83042"
    },
    {
      Date: "1948-5-1",
      IndexValue: "12649.48075"
    },
    {
      Date: "1948-6-1",
      IndexValue: "13119.94779"
    },
    {
      Date: "1948-7-1",
      IndexValue: "12705.46503"
    },
    {
      Date: "1948-8-1",
      IndexValue: "12339.14956"
    },
    {
      Date: "1948-9-1",
      IndexValue: "12255.93384"
    },
    {
      Date: "1948-10-1",
      IndexValue: "12699.84057"
    },
    {
      Date: "1948-11-1",
      IndexValue: "12152.95805"
    },
    {
      Date: "1948-12-1",
      IndexValue: "12185.42737"
    },
    {
      Date: "1949-1-1",
      IndexValue: "12436.69074"
    },
    {
      Date: "1949-2-1",
      IndexValue: "12125.02046"
    },
    {
      Date: "1949-3-1",
      IndexValue: "12306.99155"
    },
    {
      Date: "1949-4-1",
      IndexValue: "12307.09897"
    },
    {
      Date: "1949-5-1",
      IndexValue: "12337.13729"
    },
    {
      Date: "1949-6-1",
      IndexValue: "11682.87875"
    },
    {
      Date: "1949-7-1",
      IndexValue: "12519.86025"
    },
    {
      Date: "1949-8-1",
      IndexValue: "12987.66306"
    },
    {
      Date: "1949-9-1",
      IndexValue: "13175.80353"
    },
    {
      Date: "1949-10-1",
      IndexValue: "13706.82652"
    },
    {
      Date: "1949-11-1",
      IndexValue: "13917.42853"
    },
    {
      Date: "1949-12-1",
      IndexValue: "14492.76395"
    },
    {
      Date: "1950-1-1",
      IndexValue: "14937.94847"
    },
    {
      Date: "1950-2-1",
      IndexValue: "15315.52694"
    },
    {
      Date: "1950-3-1",
      IndexValue: "15461.09112"
    },
    {
      Date: "1950-4-1",
      IndexValue: "15985.37211"
    },
    {
      Date: "1950-5-1",
      IndexValue: "16541.76193"
    },
    {
      Date: "1950-6-1",
      IndexValue: "16829.57453"
    },
    {
      Date: "1950-7-1",
      IndexValue: "15505.81491"
    },
    {
      Date: "1950-8-1",
      IndexValue: "16402.13021"
    },
    {
      Date: "1950-9-1",
      IndexValue: "17009.25143"
    },
    {
      Date: "1950-10-1",
      IndexValue: "17670.94081"
    },
    {
      Date: "1950-11-1",
      IndexValue: "17669.02629"
    },
    {
      Date: "1950-12-1",
      IndexValue: "17494.41211"
    },
    {
      Date: "1951-1-1",
      IndexValue: "18599.81307"
    },
    {
      Date: "1951-2-1",
      IndexValue: "19175.9651"
    },
    {
      Date: "1951-3-1",
      IndexValue: "18890.36394"
    },
    {
      Date: "1951-4-1",
      IndexValue: "19255.22613"
    },
    {
      Date: "1951-5-1",
      IndexValue: "19302.41523"
    },
    {
      Date: "1951-6-1",
      IndexValue: "19082.36946"
    },
    {
      Date: "1951-7-1",
      IndexValue: "19532.98714"
    },
    {
      Date: "1951-8-1",
      IndexValue: "20501.86739"
    },
    {
      Date: "1951-9-1",
      IndexValue: "20981.74246"
    },
    {
      Date: "1951-10-1",
      IndexValue: "20904.8738"
    },
    {
      Date: "1951-11-1",
      IndexValue: "20276.29313"
    },
    {
      Date: "1951-12-1",
      IndexValue: "20926.91749"
    },
    {
      Date: "1952-1-1",
      IndexValue: "21729.46835"
    },
    {
      Date: "1952-2-1",
      IndexValue: "21603.31523"
    },
    {
      Date: "1952-3-1",
      IndexValue: "21765.5296"
    },
    {
      Date: "1952-4-1",
      IndexValue: "21727.85908"
    },
    {
      Date: "1952-5-1",
      IndexValue: "21828.53577"
    },
    {
      Date: "1952-6-1",
      IndexValue: "22452.55534"
    },
    {
      Date: "1952-7-1",
      IndexValue: "23034.64847"
    },
    {
      Date: "1952-8-1",
      IndexValue: "23237.47216"
    },
    {
      Date: "1952-9-1",
      IndexValue: "22979.84199"
    },
    {
      Date: "1952-10-1",
      IndexValue: "22608.64289"
    },
    {
      Date: "1952-11-1",
      IndexValue: "23436.76676"
    },
    {
      Date: "1952-12-1",
      IndexValue: "24492.49806"
    },
    {
      Date: "1953-1-1",
      IndexValue: "24827.68296"
    },
    {
      Date: "1953-2-1",
      IndexValue: "24728.6077"
    },
    {
      Date: "1953-3-1",
      IndexValue: "24871.42498"
    },
    {
      Date: "1953-4-1",
      IndexValue: "23759.22299"
    },
    {
      Date: "1953-5-1",
      IndexValue: "23907.85512"
    },
    {
      Date: "1953-6-1",
      IndexValue: "23078.70888"
    },
    {
      Date: "1953-7-1",
      IndexValue: "23520.36823"
    },
    {
      Date: "1953-8-1",
      IndexValue: "23643.5614"
    },
    {
      Date: "1953-9-1",
      IndexValue: "22672.55003"
    },
    {
      Date: "1953-10-1",
      IndexValue: "23383.75639"
    },
    {
      Date: "1953-11-1",
      IndexValue: "24107.1448"
    },
    {
      Date: "1953-12-1",
      IndexValue: "24550.74907"
    },
    {
      Date: "1954-1-1",
      IndexValue: "25293.68773"
    },
    {
      Date: "1954-2-1",
      IndexValue: "25971.17723"
    },
    {
      Date: "1954-3-1",
      IndexValue: "26642.41538"
    },
    {
      Date: "1954-4-1",
      IndexValue: "27931.41514"
    },
    {
      Date: "1954-5-1",
      IndexValue: "29057.70415"
    },
    {
      Date: "1954-6-1",
      IndexValue: "29412.53921"
    },
    {
      Date: "1954-7-1",
      IndexValue: "30724.10808"
    },
    {
      Date: "1954-8-1",
      IndexValue: "31460.28766"
    },
    {
      Date: "1954-9-1",
      IndexValue: "32443.41687"
    },
    {
      Date: "1954-10-1",
      IndexValue: "33324.85052"
    },
    {
      Date: "1954-11-1",
      IndexValue: "34760.56251"
    },
    {
      Date: "1954-12-1",
      IndexValue: "36621.0299"
    },
    {
      Date: "1955-1-1",
      IndexValue: "37415.74831"
    },
    {
      Date: "1955-2-1",
      IndexValue: "38802.48962"
    },
    {
      Date: "1955-3-1",
      IndexValue: "38633.73729"
    },
    {
      Date: "1955-4-1",
      IndexValue: "40105.28841"
    },
    {
      Date: "1955-5-1",
      IndexValue: "40074.01545"
    },
    {
      Date: "1955-6-1",
      IndexValue: "42536.89765"
    },
    {
      Date: "1955-7-1",
      IndexValue: "45619.09911"
    },
    {
      Date: "1955-8-1",
      IndexValue: "45484.03797"
    },
    {
      Date: "1955-9-1",
      IndexValue: "47498.99846"
    },
    {
      Date: "1955-10-1",
      IndexValue: "45255.33585"
    },
    {
      Date: "1955-11-1",
      IndexValue: "48453.74229"
    },
    {
      Date: "1955-12-1",
      IndexValue: "49236.83633"
    },
    {
      Date: "1956-1-1",
      IndexValue: "48063.88473"
    },
    {
      Date: "1956-2-1",
      IndexValue: "48522.93202"
    },
    {
      Date: "1956-3-1",
      IndexValue: "52022.26944"
    },
    {
      Date: "1956-4-1",
      IndexValue: "52599.50207"
    },
    {
      Date: "1956-5-1",
      IndexValue: "50919.31427"
    },
    {
      Date: "1956-6-1",
      IndexValue: "50414.58119"
    },
    {
      Date: "1956-7-1",
      IndexValue: "52924.90421"
    },
    {
      Date: "1956-8-1",
      IndexValue: "52968.73612"
    },
    {
      Date: "1956-9-1",
      IndexValue: "51146.4814"
    },
    {
      Date: "1956-10-1",
      IndexValue: "50471.51263"
    },
    {
      Date: "1956-11-1",
      IndexValue: "50108.8878"
    },
    {
      Date: "1956-12-1",
      IndexValue: "50827.46608"
    },
    {
      Date: "1957-1-1",
      IndexValue: "49880.44061"
    },
    {
      Date: "1957-2-1",
      IndexValue: "47714.15086"
    },
    {
      Date: "1957-3-1",
      IndexValue: "48312.65423"
    },
    {
      Date: "1957-4-1",
      IndexValue: "49412.31345"
    },
    {
      Date: "1957-5-1",
      IndexValue: "51284.14661"
    },
    {
      Date: "1957-6-1",
      IndexValue: "52100.26017"
    },
    {
      Date: "1957-7-1",
      IndexValue: "52934.24608"
    },
    {
      Date: "1957-8-1",
      IndexValue: "50179.86844"
    },
    {
      Date: "1957-9-1",
      IndexValue: "48304.32653"
    },
    {
      Date: "1957-10-1",
      IndexValue: "45456.91937"
    },
    {
      Date: "1957-11-1",
      IndexValue: "44482.23393"
    },
    {
      Date: "1957-12-1",
      IndexValue: "44624.62852"
    },
    {
      Date: "1958-1-1",
      IndexValue: "45343.86638"
    },
    {
      Date: "1958-2-1",
      IndexValue: "45661.51145"
    },
    {
      Date: "1958-3-1",
      IndexValue: "46440.66233"
    },
    {
      Date: "1958-4-1",
      IndexValue: "46693.62933"
    },
    {
      Date: "1958-5-1",
      IndexValue: "48353.68765"
    },
    {
      Date: "1958-6-1",
      IndexValue: "49675.02317"
    },
    {
      Date: "1958-7-1",
      IndexValue: "51023.87246"
    },
    {
      Date: "1958-8-1",
      IndexValue: "53276.24398"
    },
    {
      Date: "1958-9-1",
      IndexValue: "54844.56108"
    },
    {
      Date: "1958-10-1",
      IndexValue: "57235.85844"
    },
    {
      Date: "1958-11-1",
      IndexValue: "58936.35552"
    },
    {
      Date: "1958-12-1",
      IndexValue: "60419.78298"
    },
    {
      Date: "1959-1-1",
      IndexValue: "62773.87425"
    },
    {
      Date: "1959-2-1",
      IndexValue: "62194.85602"
    },
    {
      Date: "1959-3-1",
      IndexValue: "63940.78611"
    },
    {
      Date: "1959-4-1",
      IndexValue: "64954.83136"
    },
    {
      Date: "1959-5-1",
      IndexValue: "66102.18944"
    },
    {
      Date: "1959-6-1",
      IndexValue: "65476.29092"
    },
    {
      Date: "1959-7-1",
      IndexValue: "68011.27026"
    },
    {
      Date: "1959-8-1",
      IndexValue: "67795.27983"
    },
    {
      Date: "1959-9-1",
      IndexValue: "65062.47794"
    },
    {
      Date: "1959-10-1",
      IndexValue: "64956.41263"
    },
    {
      Date: "1959-11-1",
      IndexValue: "65391.67093"
    },
    {
      Date: "1959-12-1",
      IndexValue: "67656.89874"
    },
    {
      Date: "1960-1-1",
      IndexValue: "66882.66067"
    },
    {
      Date: "1960-2-1",
      IndexValue: "64252.93017"
    },
    {
      Date: "1960-3-1",
      IndexValue: "63563.71056"
    },
    {
      Date: "1960-4-1",
      IndexValue: "64352.16854"
    },
    {
      Date: "1960-5-1",
      IndexValue: "63950.58526"
    },
    {
      Date: "1960-6-1",
      IndexValue: "66276.64601"
    },
    {
      Date: "1960-7-1",
      IndexValue: "64821.12937"
    },
    {
      Date: "1960-8-1",
      IndexValue: "65787.52605"
    },
    {
      Date: "1960-9-1",
      IndexValue: "63997.60707"
    },
    {
      Date: "1960-10-1",
      IndexValue: "62503.98555"
    },
    {
      Date: "1960-11-1",
      IndexValue: "64717.15943"
    },
    {
      Date: "1960-12-1",
      IndexValue: "66458.46754"
    },
    {
      Date: "1961-1-1",
      IndexValue: "70064.80176"
    },
    {
      Date: "1961-2-1",
      IndexValue: "73129.19142"
    },
    {
      Date: "1961-3-1",
      IndexValue: "75613.09806"
    },
    {
      Date: "1961-4-1",
      IndexValue: "77820.24895"
    },
    {
      Date: "1961-5-1",
      IndexValue: "78803.39504"
    },
    {
      Date: "1961-6-1",
      IndexValue: "77952.16037"
    },
    {
      Date: "1961-7-1",
      IndexValue: "77411.50161"
    },
    {
      Date: "1961-8-1",
      IndexValue: "80652.80578"
    },
    {
      Date: "1961-9-1",
      IndexValue: "79949.17744"
    },
    {
      Date: "1961-10-1",
      IndexValue: "81024.91347"
    },
    {
      Date: "1961-11-1",
      IndexValue: "84893.45591"
    },
    {
      Date: "1961-12-1",
      IndexValue: "85882.76485"
    },
    {
      Date: "1962-1-1",
      IndexValue: "82888.58707"
    },
    {
      Date: "1962-2-1",
      IndexValue: "84191.3698"
    },
    {
      Date: "1962-3-1",
      IndexValue: "84479.12156"
    },
    {
      Date: "1962-4-1",
      IndexValue: "81720.43169"
    },
    {
      Date: "1962-5-1",
      IndexValue: "75849.42312"
    },
    {
      Date: "1962-6-1",
      IndexValue: "67193.58987"
    },
    {
      Date: "1962-7-1",
      IndexValue: "68792.36285"
    },
    {
      Date: "1962-8-1",
      IndexValue: "70872.64958"
    },
    {
      Date: "1962-9-1",
      IndexValue: "70221.05439"
    },
    {
      Date: "1962-10-1",
      IndexValue: "68216.99695"
    },
    {
      Date: "1962-11-1",
      IndexValue: "73130.89281"
    },
    {
      Date: "1962-12-1",
      IndexValue: "76513.98832"
    },
    {
      Date: "1963-1-1",
      IndexValue: "79687.48152"
    },
    {
      Date: "1963-2-1",
      IndexValue: "80959.60389"
    },
    {
      Date: "1963-3-1",
      IndexValue: "80607.45388"
    },
    {
      Date: "1963-4-1",
      IndexValue: "84621.9381"
    },
    {
      Date: "1963-5-1",
      IndexValue: "86544.20021"
    },
    {
      Date: "1963-6-1",
      IndexValue: "86449.95236"
    },
    {
      Date: "1963-7-1",
      IndexValue: "85115.81546"
    },
    {
      Date: "1963-8-1",
      IndexValue: "87696.14098"
    },
    {
      Date: "1963-9-1",
      IndexValue: "90234.07406"
    },
    {
      Date: "1963-10-1",
      IndexValue: "90393.10921"
    },
    {
      Date: "1963-11-1",
      IndexValue: "90118.39713"
    },
    {
      Date: "1963-12-1",
      IndexValue: "91979.03149"
    },
    {
      Date: "1964-1-1",
      IndexValue: "95043.82833"
    },
    {
      Date: "1964-2-1",
      IndexValue: "96452.11493"
    },
    {
      Date: "1964-3-1",
      IndexValue: "98451.4077"
    },
    {
      Date: "1964-4-1",
      IndexValue: "100120.0289"
    },
    {
      Date: "1964-5-1",
      IndexValue: "101343.5926"
    },
    {
      Date: "1964-6-1",
      IndexValue: "100664.1873"
    },
    {
      Date: "1964-7-1",
      IndexValue: "104317.1136"
    },
    {
      Date: "1964-8-1",
      IndexValue: "103373.0116"
    },
    {
      Date: "1964-9-1",
      IndexValue: "105067.9258"
    },
    {
      Date: "1964-10-1",
      IndexValue: "107140.0602"
    },
    {
      Date: "1964-11-1",
      IndexValue: "107799.3891"
    },
    {
      Date: "1964-12-1",
      IndexValue: "106194.9311"
    },
    {
      Date: "1965-1-1",
      IndexValue: "109192.2217"
    },
    {
      Date: "1965-2-1",
      IndexValue: "110258.6727"
    },
    {
      Date: "1965-3-1",
      IndexValue: "110276.9864"
    },
    {
      Date: "1965-4-1",
      IndexValue: "111640.1453"
    },
    {
      Date: "1965-5-1",
      IndexValue: "113576.5356"
    },
    {
      Date: "1965-6-1",
      IndexValue: "107772.9064"
    },
    {
      Date: "1965-7-1",
      IndexValue: "107885.5574"
    },
    {
      Date: "1965-8-1",
      IndexValue: "110172.9669"
    },
    {
      Date: "1965-9-1",
      IndexValue: "114136.68"
    },
    {
      Date: "1965-10-1",
      IndexValue: "116619.558"
    },
    {
      Date: "1965-11-1",
      IndexValue: "117876.4818"
    },
    {
      Date: "1965-12-1",
      IndexValue: "117259.2705"
    },
    {
      Date: "1966-1-1",
      IndexValue: "119583.6621"
    },
    {
      Date: "1966-2-1",
      IndexValue: "118326.8931"
    },
    {
      Date: "1966-3-1",
      IndexValue: "113404.4487"
    },
    {
      Date: "1966-4-1",
      IndexValue: "116446.809"
    },
    {
      Date: "1966-5-1",
      IndexValue: "110617.4057"
    },
    {
      Date: "1966-6-1",
      IndexValue: "109660.7374"
    },
    {
      Date: "1966-7-1",
      IndexValue: "109345.5503"
    },
    {
      Date: "1966-8-1",
      IndexValue: "102408.8231"
    },
    {
      Date: "1966-9-1",
      IndexValue: "99108.41888"
    },
    {
      Date: "1966-10-1",
      IndexValue: "97949.25601"
    },
    {
      Date: "1966-11-1",
      IndexValue: "103155.593"
    },
    {
      Date: "1966-12-1",
      IndexValue: "103893.2677"
    },
    {
      Date: "1967-1-1",
      IndexValue: "108185.4278"
    },
    {
      Date: "1967-2-1",
      IndexValue: "112221.8311"
    },
    {
      Date: "1967-3-1",
      IndexValue: "114829.5045"
    },
    {
      Date: "1967-4-1",
      IndexValue: "116763.6187"
    },
    {
      Date: "1967-5-1",
      IndexValue: "118807.3071"
    },
    {
      Date: "1967-6-1",
      IndexValue: "117275.7032"
    },
    {
      Date: "1967-7-1",
      IndexValue: "119254.9141"
    },
    {
      Date: "1967-8-1",
      IndexValue: "121101.2344"
    },
    {
      Date: "1967-9-1",
      IndexValue: "122738.4661"
    },
    {
      Date: "1967-10-1",
      IndexValue: "122493.4679"
    },
    {
      Date: "1967-11-1",
      IndexValue: "118611.5689"
    },
    {
      Date: "1967-12-1",
      IndexValue: "121941.6721"
    },
    {
      Date: "1968-1-1",
      IndexValue: "121206.3308"
    },
    {
      Date: "1968-2-1",
      IndexValue: "115708.3443"
    },
    {
      Date: "1968-3-1",
      IndexValue: "113573.1639"
    },
    {
      Date: "1968-4-1",
      IndexValue: "121920.7925"
    },
    {
      Date: "1968-5-1",
      IndexValue: "124678.1314"
    },
    {
      Date: "1968-6-1",
      IndexValue: "127606.201"
    },
    {
      Date: "1968-7-1",
      IndexValue: "126938.4055"
    },
    {
      Date: "1968-8-1",
      IndexValue: "124129.2531"
    },
    {
      Date: "1968-9-1",
      IndexValue: "128118.6676"
    },
    {
      Date: "1968-10-1",
      IndexValue: "130855.6668"
    },
    {
      Date: "1968-11-1",
      IndexValue: "132817.5725"
    },
    {
      Date: "1968-12-1",
      IndexValue: "134147.1503"
    },
    {
      Date: "1969-1-1",
      IndexValue: "128440.4535"
    },
    {
      Date: "1969-2-1",
      IndexValue: "127419.2541"
    },
    {
      Date: "1969-3-1",
      IndexValue: "123943.1298"
    },
    {
      Date: "1969-4-1",
      IndexValue: "126064.5319"
    },
    {
      Date: "1969-5-1",
      IndexValue: "130136.333"
    },
    {
      Date: "1969-6-1",
      IndexValue: "122992.0964"
    },
    {
      Date: "1969-7-1",
      IndexValue: "117180.2302"
    },
    {
      Date: "1969-8-1",
      IndexValue: "116216.9634"
    },
    {
      Date: "1969-9-1",
      IndexValue: "116632.8771"
    },
    {
      Date: "1969-10-1",
      IndexValue: "117569.7867"
    },
    {
      Date: "1969-11-1",
      IndexValue: "118109.5502"
    },
    {
      Date: "1969-12-1",
      IndexValue: "111576.8733"
    },
    {
      Date: "1970-1-1",
      IndexValue: "110626.551"
    },
    {
      Date: "1970-2-1",
      IndexValue: "106527.5297"
    },
    {
      Date: "1970-3-1",
      IndexValue: "108102.5232"
    },
    {
      Date: "1970-4-1",
      IndexValue: "104313.3173"
    },
    {
      Date: "1970-5-1",
      IndexValue: "92391.60991"
    },
    {
      Date: "1970-6-1",
      IndexValue: "91667.63048"
    },
    {
      Date: "1970-7-1",
      IndexValue: "91674.43299"
    },
    {
      Date: "1970-8-1",
      IndexValue: "94659.48889"
    },
    {
      Date: "1970-9-1",
      IndexValue: "100130.0475"
    },
    {
      Date: "1970-10-1",
      IndexValue: "102100.1864"
    },
    {
      Date: "1970-11-1",
      IndexValue: "101792.8944"
    },
    {
      Date: "1970-12-1",
      IndexValue: "108529.7762"
    },
    {
      Date: "1971-1-1",
      IndexValue: "112990.0828"
    },
    {
      Date: "1971-2-1",
      IndexValue: "117384.4349"
    },
    {
      Date: "1971-3-1",
      IndexValue: "120405.7983"
    },
    {
      Date: "1971-4-1",
      IndexValue: "124517.7115"
    },
    {
      Date: "1971-5-1",
      IndexValue: "122526.7689"
    },
    {
      Date: "1971-6-1",
      IndexValue: "119680.1647"
    },
    {
      Date: "1971-7-1",
      IndexValue: "118833.0646"
    },
    {
      Date: "1971-8-1",
      IndexValue: "116743.0579"
    },
    {
      Date: "1971-9-1",
      IndexValue: "119645.4267"
    },
    {
      Date: "1971-10-1",
      IndexValue: "117127.8691"
    },
    {
      Date: "1971-11-1",
      IndexValue: "112006.9279"
    },
    {
      Date: "1971-12-1",
      IndexValue: "119445.8989"
    },
    {
      Date: "1972-1-1",
      IndexValue: "124728.4421"
    },
    {
      Date: "1972-2-1",
      IndexValue: "126714.8619"
    },
    {
      Date: "1972-3-1",
      IndexValue: "129720.2089"
    },
    {
      Date: "1972-4-1",
      IndexValue: "131036.7404"
    },
    {
      Date: "1972-5-1",
      IndexValue: "129707.4932"
    },
    {
      Date: "1972-6-1",
      IndexValue: "130064.2515"
    },
    {
      Date: "1972-7-1",
      IndexValue: "128791.5413"
    },
    {
      Date: "1972-8-1",
      IndexValue: "133346.6927"
    },
    {
      Date: "1972-9-1",
      IndexValue: "131420.0126"
    },
    {
      Date: "1972-10-1",
      IndexValue: "131346.9565"
    },
    {
      Date: "1972-11-1",
      IndexValue: "137924.4658"
    },
    {
      Date: "1972-12-1",
      IndexValue: "140782.9075"
    },
    {
      Date: "1973-1-1",
      IndexValue: "141842.6782"
    },
    {
      Date: "1973-2-1",
      IndexValue: "136167.9719"
    },
    {
      Date: "1973-3-1",
      IndexValue: "133095.7138"
    },
    {
      Date: "1973-4-1",
      IndexValue: "130022.6518"
    },
    {
      Date: "1973-5-1",
      IndexValue: "125817.3042"
    },
    {
      Date: "1973-6-1",
      IndexValue: "122478.4508"
    },
    {
      Date: "1973-7-1",
      IndexValue: "123682.5349"
    },
    {
      Date: "1973-8-1",
      IndexValue: "119503.3512"
    },
    {
      Date: "1973-9-1",
      IndexValue: "121619.722"
    },
    {
      Date: "1973-10-1",
      IndexValue: "125662.1735"
    },
    {
      Date: "1973-11-1",
      IndexValue: "116289.1524"
    },
    {
      Date: "1973-12-1",
      IndexValue: "107675.0712"
    },
    {
      Date: "1974-1-1",
      IndexValue: "108567.9208"
    },
    {
      Date: "1974-2-1",
      IndexValue: "104539.0731"
    },
    {
      Date: "1974-3-1",
      IndexValue: "107950.9646"
    },
    {
      Date: "1974-4-1",
      IndexValue: "102325.0641"
    },
    {
      Date: "1974-5-1",
      IndexValue: "98329.21029"
    },
    {
      Date: "1974-6-1",
      IndexValue: "97974.25809"
    },
    {
      Date: "1974-7-1",
      IndexValue: "86156.67762"
    },
    {
      Date: "1974-8-1",
      IndexValue: "81920.80936"
    },
    {
      Date: "1974-9-1",
      IndexValue: "72846.13454"
    },
    {
      Date: "1974-10-1",
      IndexValue: "73848.20962"
    },
    {
      Date: "1974-11-1",
      IndexValue: "76017.91625"
    },
    {
      Date: "1974-12-1",
      IndexValue: "70837.13813"
    },
    {
      Date: "1975-1-1",
      IndexValue: "76658.98957"
    },
    {
      Date: "1975-2-1",
      IndexValue: "84298.78063"
    },
    {
      Date: "1975-3-1",
      IndexValue: "88157.7094"
    },
    {
      Date: "1975-4-1",
      IndexValue: "89131.54929"
    },
    {
      Date: "1975-5-1",
      IndexValue: "94579.42694"
    },
    {
      Date: "1975-6-1",
      IndexValue: "96592.05533"
    },
    {
      Date: "1975-7-1",
      IndexValue: "95935.42757"
    },
    {
      Date: "1975-8-1",
      IndexValue: "89059.22753"
    },
    {
      Date: "1975-9-1",
      IndexValue: "87814.67202"
    },
    {
      Date: "1975-10-1",
      IndexValue: "91675.59221"
    },
    {
      Date: "1975-11-1",
      IndexValue: "92869.82269"
    },
    {
      Date: "1975-12-1",
      IndexValue: "91442.7206"
    },
    {
      Date: "1976-1-1",
      IndexValue: "99991.30929"
    },
    {
      Date: "1976-2-1",
      IndexValue: "103796.0043"
    },
    {
      Date: "1976-3-1",
      IndexValue: "104441.9861"
    },
    {
      Date: "1976-4-1",
      IndexValue: "105211.6761"
    },
    {
      Date: "1976-5-1",
      IndexValue: "104068.4149"
    },
    {
      Date: "1976-6-1",
      IndexValue: "104453.018"
    },
    {
      Date: "1976-7-1",
      IndexValue: "106676.1983"
    },
    {
      Date: "1976-8-1",
      IndexValue: "105526.2801"
    },
    {
      Date: "1976-9-1",
      IndexValue: "107726.0892"
    },
    {
      Date: "1976-10-1",
      IndexValue: "103842.5573"
    },
    {
      Date: "1976-11-1",
      IndexValue: "103289.0929"
    },
    {
      Date: "1976-12-1",
      IndexValue: "106837.4064"
    },
    {
      Date: "1977-1-1",
      IndexValue: "105722.4308"
    },
    {
      Date: "1977-2-1",
      IndexValue: "102174.3039"
    },
    {
      Date: "1977-3-1",
      IndexValue: "101436.3392"
    },
    {
      Date: "1977-4-1",
      IndexValue: "99395.03211"
    },
    {
      Date: "1977-5-1",
      IndexValue: "98969.03676"
    },
    {
      Date: "1977-6-1",
      IndexValue: "99206.17684"
    },
    {
      Date: "1977-7-1",
      IndexValue: "99988.14573"
    },
    {
      Date: "1977-8-1",
      IndexValue: "97593.67273"
    },
    {
      Date: "1977-9-1",
      IndexValue: "96136.33286"
    },
    {
      Date: "1977-10-1",
      IndexValue: "93722.82336"
    },
    {
      Date: "1977-11-1",
      IndexValue: "94188.38845"
    },
    {
      Date: "1977-12-1",
      IndexValue: "93814.50761"
    },
    {
      Date: "1978-1-1",
      IndexValue: "90057.39129"
    },
    {
      Date: "1978-2-1",
      IndexValue: "88618.48658"
    },
    {
      Date: "1978-3-1",
      IndexValue: "88156.74247"
    },
    {
      Date: "1978-4-1",
      IndexValue: "91694.59669"
    },
    {
      Date: "1978-5-1",
      IndexValue: "95844.83153"
    },
    {
      Date: "1978-6-1",
      IndexValue: "95457.43465"
    },
    {
      Date: "1978-7-1",
      IndexValue: "94674.92553"
    },
    {
      Date: "1978-8-1",
      IndexValue: "101153.9256"
    },
    {
      Date: "1978-9-1",
      IndexValue: "100797.5844"
    },
    {
      Date: "1978-10-1",
      IndexValue: "97126.97726"
    },
    {
      Date: "1978-11-1",
      IndexValue: "91438.07699"
    },
    {
      Date: "1978-12-1",
      IndexValue: "92784.62757"
    },
    {
      Date: "1979-1-1",
      IndexValue: "95822.19975"
    },
    {
      Date: "1979-2-1",
      IndexValue: "93715.18486"
    },
    {
      Date: "1979-3-1",
      IndexValue: "94950.77839"
    },
    {
      Date: "1979-4-1",
      IndexValue: "96160.50218"
    },
    {
      Date: "1979-5-1",
      IndexValue: "93156.27831"
    },
    {
      Date: "1979-6-1",
      IndexValue: "94356.35766"
    },
    {
      Date: "1979-7-1",
      IndexValue: "94654.04962"
    },
    {
      Date: "1979-8-1",
      IndexValue: "98461.81018"
    },
    {
      Date: "1979-9-1",
      IndexValue: "98910.69277"
    },
    {
      Date: "1979-10-1",
      IndexValue: "94835.48538"
    },
    {
      Date: "1979-11-1",
      IndexValue: "93661.38369"
    },
    {
      Date: "1979-12-1",
      IndexValue: "96769.76903"
    },
    {
      Date: "1980-1-1",
      IndexValue: "98565.38614"
    },
    {
      Date: "1980-2-1",
      IndexValue: "101467.2511"
    },
    {
      Date: "1980-3-1",
      IndexValue: "91177.56806"
    },
    {
      Date: "1980-4-1",
      IndexValue: "89120.07654"
    },
    {
      Date: "1980-5-1",
      IndexValue: "92696.13388"
    },
    {
      Date: "1980-6-1",
      IndexValue: "97982.87296"
    },
    {
      Date: "1980-7-1",
      IndexValue: "102855.1789"
    },
    {
      Date: "1980-8-1",
      IndexValue: "105696.1877"
    },
    {
      Date: "1980-9-1",
      IndexValue: "107790.8134"
    },
    {
      Date: "1980-10-1",
      IndexValue: "110326.0157"
    },
    {
      Date: "1980-11-1",
      IndexValue: "114474.39"
    },
    {
      Date: "1980-12-1",
      IndexValue: "112003.5579"
    },
    {
      Date: "1981-1-1",
      IndexValue: "111116.2503"
    },
    {
      Date: "1981-2-1",
      IndexValue: "106604.7635"
    },
    {
      Date: "1981-3-1",
      IndexValue: "110271.7801"
    },
    {
      Date: "1981-4-1",
      IndexValue: "110948.8041"
    },
    {
      Date: "1981-5-1",
      IndexValue: "108306.0947"
    },
    {
      Date: "1981-6-1",
      IndexValue: "108272.8595"
    },
    {
      Date: "1981-7-1",
      IndexValue: "104934.5441"
    },
    {
      Date: "1981-8-1",
      IndexValue: "104977.418"
    },
    {
      Date: "1981-9-1",
      IndexValue: "95334.80846"
    },
    {
      Date: "1981-10-1",
      IndexValue: "96776.26441"
    },
    {
      Date: "1981-11-1",
      IndexValue: "99405.05281"
    },
    {
      Date: "1981-12-1",
      IndexValue: "100258.877"
    },
    {
      Date: "1982-1-1",
      IndexValue: "95140.70472"
    },
    {
      Date: "1982-2-1",
      IndexValue: "93025.89167"
    },
    {
      Date: "1982-3-1",
      IndexValue: "90570.52913"
    },
    {
      Date: "1982-4-1",
      IndexValue: "95123.52015"
    },
    {
      Date: "1982-5-1",
      IndexValue: "94768.67906"
    },
    {
      Date: "1982-6-1",
      IndexValue: "88665.1902"
    },
    {
      Date: "1982-7-1",
      IndexValue: "88426.48867"
    },
    {
      Date: "1982-8-1",
      IndexValue: "88947.01777"
    },
    {
      Date: "1982-9-1",
      IndexValue: "99503.59047"
    },
    {
      Date: "1982-10-1",
      IndexValue: "108010.3723"
    },
    {
      Date: "1982-11-1",
      IndexValue: "113101.5499"
    },
    {
      Date: "1982-12-1",
      IndexValue: "115104.9115"
    },
    {
      Date: "1983-1-1",
      IndexValue: "119379.9325"
    },
    {
      Date: "1983-2-1",
      IndexValue: "121799.123"
    },
    {
      Date: "1983-3-1",
      IndexValue: "126508.3296"
    },
    {
      Date: "1983-4-1",
      IndexValue: "130883.2347"
    },
    {
      Date: "1983-5-1",
      IndexValue: "135847.5575"
    },
    {
      Date: "1983-6-1",
      IndexValue: "137813.5648"
    },
    {
      Date: "1983-7-1",
      IndexValue: "138235.1294"
    },
    {
      Date: "1983-8-1",
      IndexValue: "134505.0139"
    },
    {
      Date: "1983-9-1",
      IndexValue: "138273.6789"
    },
    {
      Date: "1983-10-1",
      IndexValue: "138758.2772"
    },
    {
      Date: "1983-11-1",
      IndexValue: "136905.4268"
    },
    {
      Date: "1983-12-1",
      IndexValue: "136597.1077"
    },
    {
      Date: "1984-1-1",
      IndexValue: "137934.875"
    },
    {
      Date: "1984-2-1",
      IndexValue: "130246.3797"
    },
    {
      Date: "1984-3-1",
      IndexValue: "130569.5898"
    },
    {
      Date: "1984-4-1",
      IndexValue: "130598.3901"
    },
    {
      Date: "1984-5-1",
      IndexValue: "129893.5623"
    },
    {
      Date: "1984-6-1",
      IndexValue: "127126.8892"
    },
    {
      Date: "1984-7-1",
      IndexValue: "125489.5738"
    },
    {
      Date: "1984-8-1",
      IndexValue: "136519.8889"
    },
    {
      Date: "1984-9-1",
      IndexValue: "137783.0458"
    },
    {
      Date: "1984-10-1",
      IndexValue: "136827.3466"
    },
    {
      Date: "1984-11-1",
      IndexValue: "138590.2718"
    },
    {
      Date: "1984-12-1",
      IndexValue: "137613.1395"
    },
    {
      Date: "1985-1-1",
      IndexValue: "143807.4929"
    },
    {
      Date: "1985-2-1",
      IndexValue: "151415.5685"
    },
    {
      Date: "1985-3-1",
      IndexValue: "150127.8226"
    },
    {
      Date: "1985-4-1",
      IndexValue: "150958.668"
    },
    {
      Date: "1985-5-1",
      IndexValue: "154512.047"
    },
    {
      Date: "1985-6-1",
      IndexValue: "157952.0323"
    },
    {
      Date: "1985-7-1",
      IndexValue: "161204.2495"
    },
    {
      Date: "1985-8-1",
      IndexValue: "157938.8354"
    },
    {
      Date: "1985-9-1",
      IndexValue: "154534.7639"
    },
    {
      Date: "1985-10-1",
      IndexValue: "156270.1541"
    },
    {
      Date: "1985-11-1",
      IndexValue: "165847.1825"
    },
    {
      Date: "1985-12-1",
      IndexValue: "174150.0735"
    },
    {
      Date: "1986-1-1",
      IndexValue: "174981.7304"
    },
    {
      Date: "1986-2-1",
      IndexValue: "185461.3216"
    },
    {
      Date: "1986-3-1",
      IndexValue: "197835.8013"
    },
    {
      Date: "1986-4-1",
      IndexValue: "203635.5468"
    },
    {
      Date: "1986-5-1",
      IndexValue: "204075.245"
    },
    {
      Date: "1986-6-1",
      IndexValue: "209318.0465"
    },
    {
      Date: "1986-7-1",
      IndexValue: "205545.2111"
    },
    {
      Date: "1986-8-1",
      IndexValue: "209853.1939"
    },
    {
      Date: "1986-9-1",
      IndexValue: "203773.0236"
    },
    {
      Date: "1986-10-1",
      IndexValue: "203406.4958"
    },
    {
      Date: "1986-11-1",
      IndexValue: "210403.179"
    },
    {
      Date: "1986-12-1",
      IndexValue: "213806.3695"
    },
    {
      Date: "1987-1-1",
      IndexValue: "226640.1654"
    },
    {
      Date: "1987-2-1",
      IndexValue: "240421.9766"
    },
    {
      Date: "1987-3-1",
      IndexValue: "249825.9606"
    },
    {
      Date: "1987-4-1",
      IndexValue: "246372.0233"
    },
    {
      Date: "1987-5-1",
      IndexValue: "245929.2252"
    },
    {
      Date: "1987-6-1",
      IndexValue: "256090.7513"
    },
    {
      Date: "1987-7-1",
      IndexValue: "263393.2635"
    },
    {
      Date: "1987-8-1",
      IndexValue: "278925.3889"
    },
    {
      Date: "1987-9-1",
      IndexValue: "269064.8758"
    },
    {
      Date: "1987-10-1",
      IndexValue: "236556.6468"
    },
    {
      Date: "1987-11-1",
      IndexValue: "207275.8494"
    },
    {
      Date: "1987-12-1",
      IndexValue: "204512.8764"
    },
    {
      Date: "1988-1-1",
      IndexValue: "212648.091"
    },
    {
      Date: "1988-2-1",
      IndexValue: "219161.2562"
    },
    {
      Date: "1988-3-1",
      IndexValue: "225276.9582"
    },
    {
      Date: "1988-4-1",
      IndexValue: "222143.4573"
    },
    {
      Date: "1988-5-1",
      IndexValue: "216549.2383"
    },
    {
      Date: "1988-6-1",
      IndexValue: "228572.2224"
    },
    {
      Date: "1988-7-1",
      IndexValue: "226914.5802"
    },
    {
      Date: "1988-8-1",
      IndexValue: "222083.4124"
    },
    {
      Date: "1988-9-1",
      IndexValue: "224857.0713"
    },
    {
      Date: "1988-10-1",
      IndexValue: "232634.8244"
    },
    {
      Date: "1988-11-1",
      IndexValue: "227751.8374"
    },
    {
      Date: "1988-12-1",
      IndexValue: "232670.126"
    },
    {
      Date: "1989-1-1",
      IndexValue: "239654.1744"
    },
    {
      Date: "1989-2-1",
      IndexValue: "246550.2777"
    },
    {
      Date: "1989-3-1",
      IndexValue: "244750.7002"
    },
    {
      Date: "1989-4-1",
      IndexValue: "251833.5982"
    },
    {
      Date: "1989-5-1",
      IndexValue: "260722.1328"
    },
    {
      Date: "1989-6-1",
      IndexValue: "268927.9973"
    },
    {
      Date: "1989-7-1",
      IndexValue: "275795.4328"
    },
    {
      Date: "1989-8-1",
      IndexValue: "288277.3912"
    },
    {
      Date: "1989-9-1",
      IndexValue: "288676.5758"
    },
    {
      Date: "1989-10-1",
      IndexValue: "288124.5517"
    },
    {
      Date: "1989-11-1",
      IndexValue: "282233.8913"
    },
    {
      Date: "1989-12-1",
      IndexValue: "289507.3543"
    },
    {
      Date: "1990-1-1",
      IndexValue: "280222.3393"
    },
    {
      Date: "1990-2-1",
      IndexValue: "271866.4122"
    },
    {
      Date: "1990-3-1",
      IndexValue: "277713.7135"
    },
    {
      Date: "1990-4-1",
      IndexValue: "277834.2175"
    },
    {
      Date: "1990-5-1",
      IndexValue: "287871.4001"
    },
    {
      Date: "1990-6-1",
      IndexValue: "295403.6242"
    },
    {
      Date: "1990-7-1",
      IndexValue: "294774.9272"
    },
    {
      Date: "1990-8-1",
      IndexValue: "269129.2141"
    },
    {
      Date: "1990-9-1",
      IndexValue: "255315.2243"
    },
    {
      Date: "1990-10-1",
      IndexValue: "247914.6496"
    },
    {
      Date: "1990-11-1",
      IndexValue: "254745.3273"
    },
    {
      Date: "1990-12-1",
      IndexValue: "266434.6547"
    },
    {
      Date: "1991-1-1",
      IndexValue: "263037.5287"
    },
    {
      Date: "1991-2-1",
      IndexValue: "293132.586"
    },
    {
      Date: "1991-3-1",
      IndexValue: "301609.6458"
    },
    {
      Date: "1991-4-1",
      IndexValue: "307967.5923"
    },
    {
      Date: "1991-5-1",
      IndexValue: "306510.5439"
    },
    {
      Date: "1991-6-1",
      IndexValue: "306670.2129"
    },
    {
      Date: "1991-7-1",
      IndexValue: "308612.8134"
    },
    {
      Date: "1991-8-1",
      IndexValue: "315955.3646"
    },
    {
      Date: "1991-9-1",
      IndexValue: "313623.0749"
    },
    {
      Date: "1991-10-1",
      IndexValue: "313733.6189"
    },
    {
      Date: "1991-11-1",
      IndexValue: "312870.5448"
    },
    {
      Date: "1991-12-1",
      IndexValue: "315565.5155"
    },
    {
      Date: "1992-1-1",
      IndexValue: "338296.9745"
    },
    {
      Date: "1992-2-1",
      IndexValue: "335053.9563"
    },
    {
      Date: "1992-3-1",
      IndexValue: "329997.9944"
    },
    {
      Date: "1992-4-1",
      IndexValue: "330395.8247"
    },
    {
      Date: "1992-5-1",
      IndexValue: "336746.7772"
    },
    {
      Date: "1992-6-1",
      IndexValue: "331086.0105"
    },
    {
      Date: "1992-7-1",
      IndexValue: "336697.9247"
    },
    {
      Date: "1992-8-1",
      IndexValue: "338905.4026"
    },
    {
      Date: "1992-9-1",
      IndexValue: "339226.323"
    },
    {
      Date: "1992-10-1",
      IndexValue: "334033.5792"
    },
    {
      Date: "1992-11-1",
      IndexValue: "342758.8917"
    },
    {
      Date: "1992-12-1",
      IndexValue: "354221.1243"
    },
    {
      Date: "1993-1-1",
      IndexValue: "352987.5553"
    },
    {
      Date: "1993-2-1",
      IndexValue: "357821.5574"
    },
    {
      Date: "1993-3-1",
      IndexValue: "364244.8224"
    },
    {
      Date: "1993-4-1",
      IndexValue: "358360.264"
    },
    {
      Date: "1993-5-1",
      IndexValue: "360457.6553"
    },
    {
      Date: "1993-6-1",
      IndexValue: "363073.5996"
    },
    {
      Date: "1993-7-1",
      IndexValue: "363295.088"
    },
    {
      Date: "1993-8-1",
      IndexValue: "368676.7745"
    },
    {
      Date: "1993-9-1",
      IndexValue: "372899.6585"
    },
    {
      Date: "1993-10-1",
      IndexValue: "375977.3822"
    },
    {
      Date: "1993-11-1",
      IndexValue: "375749.2071"
    },
    {
      Date: "1993-12-1",
      IndexValue: "379084.1312"
    },
    {
      Date: "1994-1-1",
      IndexValue: "384612.3349"
    },
    {
      Date: "1994-2-1",
      IndexValue: "383014.2221"
    },
    {
      Date: "1994-3-1",
      IndexValue: "376281.2413"
    },
    {
      Date: "1994-4-1",
      IndexValue: "363198.9012"
    },
    {
      Date: "1994-5-1",
      IndexValue: "366796.5168"
    },
    {
      Date: "1994-6-1",
      IndexValue: "369610.9803"
    },
    {
      Date: "1994-7-1",
      IndexValue: "366704.1001"
    },
    {
      Date: "1994-8-1",
      IndexValue: "376486.0565"
    },
    {
      Date: "1994-9-1",
      IndexValue: "378548.8118"
    },
    {
      Date: "1994-10-1",
      IndexValue: "376622.2431"
    },
    {
      Date: "1994-11-1",
      IndexValue: "374733.506"
    },
    {
      Date: "1994-12-1",
      IndexValue: "370894.8062"
    },
    {
      Date: "1995-1-1",
      IndexValue: "378469.85"
    },
    {
      Date: "1995-2-1",
      IndexValue: "391361.6461"
    },
    {
      Date: "1995-3-1",
      IndexValue: "400047.1288"
    },
    {
      Date: "1995-4-1",
      IndexValue: "411556.6418"
    },
    {
      Date: "1995-5-1",
      IndexValue: "424500.4704"
    },
    {
      Date: "1995-6-1",
      IndexValue: "437134.8534"
    },
    {
      Date: "1995-7-1",
      IndexValue: "452647.5281"
    },
    {
      Date: "1995-8-1",
      IndexValue: "453784.6543"
    },
    {
      Date: "1995-9-1",
      IndexValue: "469737.9221"
    },
    {
      Date: "1995-10-1",
      IndexValue: "472487.2717"
    },
    {
      Date: "1995-11-1",
      IndexValue: "483949.9371"
    },
    {
      Date: "1995-12-1",
      IndexValue: "500682.3737"
    },
    {
      Date: "1996-1-1",
      IndexValue: "498580.1241"
    },
    {
      Date: "1996-2-1",
      IndexValue: "526320.8421"
    },
    {
      Date: "1996-3-1",
      IndexValue: "522572.6163"
    },
    {
      Date: "1996-4-1",
      IndexValue: "521596.1157"
    },
    {
      Date: "1996-5-1",
      IndexValue: "532859.8325"
    },
    {
      Date: "1996-6-1",
      IndexValue: "539332.3485"
    },
    {
      Date: "1996-7-1",
      IndexValue: "519596.0923"
    },
    {
      Date: "1996-8-1",
      IndexValue: "534564.861"
    },
    {
      Date: "1996-9-1",
      IndexValue: "543663.622"
    },
    {
      Date: "1996-10-1",
      IndexValue: "564277.2526"
    },
    {
      Date: "1996-11-1",
      IndexValue: "591669.0709"
    },
    {
      Date: "1996-12-1",
      IndexValue: "598763.974"
    },
    {
      Date: "1997-1-1",
      IndexValue: "616329.4974"
    },
    {
      Date: "1997-2-1",
      IndexValue: "641197.1392"
    },
    {
      Date: "1997-3-1",
      IndexValue: "635608.6495"
    },
    {
      Date: "1997-4-1",
      IndexValue: "613200.3349"
    },
    {
      Date: "1997-5-1",
      IndexValue: "670144.656"
    },
    {
      Date: "1997-6-1",
      IndexValue: "705030.6004"
    },
    {
      Date: "1997-7-1",
      IndexValue: "744545.4852"
    },
    {
      Date: "1997-8-1",
      IndexValue: "745744.8135"
    },
    {
      Date: "1997-9-1",
      IndexValue: "752765.4007"
    },
    {
      Date: "1997-10-1",
      IndexValue: "763261.068"
    },
    {
      Date: "1997-11-1",
      IndexValue: "754938.9202"
    },
    {
      Date: "1997-12-1",
      IndexValue: "775793.1996"
    },
    {
      Date: "1998-1-1",
      IndexValue: "776192.2424"
    },
    {
      Date: "1998-2-1",
      IndexValue: "824358.2884"
    },
    {
      Date: "1998-3-1",
      IndexValue: "866552.3589"
    },
    {
      Date: "1998-4-1",
      IndexValue: "894417.409"
    },
    {
      Date: "1998-5-1",
      IndexValue: "890795.2327"
    },
    {
      Date: "1998-6-1",
      IndexValue: "890745.0424"
    },
    {
      Date: "1998-7-1",
      IndexValue: "929404.6517"
    },
    {
      Date: "1998-8-1",
      IndexValue: "863561.9597"
    },
    {
      Date: "1998-9-1",
      IndexValue: "820260.6137"
    },
    {
      Date: "1998-10-1",
      IndexValue: "828824.3257"
    },
    {
      Date: "1998-11-1",
      IndexValue: "919783.8024"
    },
    {
      Date: "1998-12-1",
      IndexValue: "958118.0318"
    },
    {
      Date: "1999-1-1",
      IndexValue: "1004036.06"
    },
    {
      Date: "1999-2-1",
      IndexValue: "1002151.945"
    },
    {
      Date: "1999-3-1",
      IndexValue: "1028329.916"
    },
    {
      Date: "1999-4-1",
      IndexValue: "1064293.846"
    },
    {
      Date: "1999-5-1",
      IndexValue: "1063241.986"
    },
    {
      Date: "1999-6-1",
      IndexValue: "1056737.421"
    },
    {
      Date: "1999-7-1",
      IndexValue: "1101218.465"
    },
    {
      Date: "1999-8-1",
      IndexValue: "1057121.856"
    },
    {
      Date: "1999-9-1",
      IndexValue: "1045797.484"
    },
    {
      Date: "1999-10-1",
      IndexValue: "1030649.573"
    },
    {
      Date: "1999-11-1",
      IndexValue: "1103232.208"
    },
    {
      Date: "1999-12-1",
      IndexValue: "1134220.132"
    },
    {
      Date: "2000-1-1",
      IndexValue: "1129517.052"
    },
    {
      Date: "2000-2-1",
      IndexValue: "1095041.077"
    },
    {
      Date: "2000-3-1",
      IndexValue: "1128889.979"
    },
    {
      Date: "2000-4-1",
      IndexValue: "1144303.178"
    },
    {
      Date: "2000-5-1",
      IndexValue: "1110520.883"
    },
    {
      Date: "2000-6-1",
      IndexValue: "1139669.911"
    },
    {
      Date: "2000-7-1",
      IndexValue: "1146692.889"
    },
    {
      Date: "2000-8-1",
      IndexValue: "1157460.921"
    },
    {
      Date: "2000-9-1",
      IndexValue: "1139024.393"
    },
    {
      Date: "2000-10-1",
      IndexValue: "1077769.886"
    },
    {
      Date: "2000-11-1",
      IndexValue: "1068827.432"
    },
    {
      Date: "2000-12-1",
      IndexValue: "1033933.723"
    },
    {
      Date: "2001-1-1",
      IndexValue: "1032106.913"
    },
    {
      Date: "2001-2-1",
      IndexValue: "1006030.186"
    },
    {
      Date: "2001-3-1",
      IndexValue: "912600.7484"
    },
    {
      Date: "2001-4-1",
      IndexValue: "913062.1689"
    },
    {
      Date: "2001-5-1",
      IndexValue: "971475.4557"
    },
    {
      Date: "2001-6-1",
      IndexValue: "946666.1388"
    },
    {
      Date: "2001-7-1",
      IndexValue: "924079.4592"
    },
    {
      Date: "2001-8-1",
      IndexValue: "905175.3443"
    },
    {
      Date: "2001-9-1",
      IndexValue: "799763.8311"
    },
    {
      Date: "2001-10-1",
      IndexValue: "828014.9288"
    },
    {
      Date: "2001-11-1",
      IndexValue: "871326.7412"
    },
    {
      Date: "2001-12-1",
      IndexValue: "887603.2017"
    },
    {
      Date: "2002-1-1",
      IndexValue: "882961.9053"
    },
    {
      Date: "2002-2-1",
      IndexValue: "849998.337"
    },
    {
      Date: "2002-3-1",
      IndexValue: "887043.8433"
    },
    {
      Date: "2002-4-1",
      IndexValue: "851115.7544"
    },
    {
      Date: "2002-5-1",
      IndexValue: "827117.7205"
    },
    {
      Date: "2002-6-1",
      IndexValue: "777718.4766"
    },
    {
      Date: "2002-7-1",
      IndexValue: "693271.7974"
    },
    {
      Date: "2002-8-1",
      IndexValue: "698833.4467"
    },
    {
      Date: "2002-9-1",
      IndexValue: "664476.5608"
    },
    {
      Date: "2002-10-1",
      IndexValue: "654314.1266"
    },
    {
      Date: "2002-11-1",
      IndexValue: "697671.9533"
    },
    {
      Date: "2002-12-1",
      IndexValue: "691983.0853"
    },
    {
      Date: "2003-1-1",
      IndexValue: "687406.5674"
    },
    {
      Date: "2003-2-1",
      IndexValue: "638394.9227"
    },
    {
      Date: "2003-3-1",
      IndexValue: "642885.4279"
    },
    {
      Date: "2003-4-1",
      IndexValue: "678339.4393"
    },
    {
      Date: "2003-5-1",
      IndexValue: "715541.1204"
    },
    {
      Date: "2003-6-1",
      IndexValue: "755532.3785"
    },
    {
      Date: "2003-7-1",
      IndexValue: "759216.9402"
    },
    {
      Date: "2003-8-1",
      IndexValue: "755088.9205"
    },
    {
      Date: "2003-9-1",
      IndexValue: "776443.8968"
    },
    {
      Date: "2003-10-1",
      IndexValue: "793062.2153"
    },
    {
      Date: "2003-11-1",
      IndexValue: "804855.1679"
    },
    {
      Date: "2003-12-1",
      IndexValue: "830431.636"
    },
    {
      Date: "2004-1-1",
      IndexValue: "867191.7703"
    },
    {
      Date: "2004-2-1",
      IndexValue: "871920.6208"
    },
    {
      Date: "2004-3-1",
      IndexValue: "852790.7272"
    },
    {
      Date: "2004-4-1",
      IndexValue: "858311.0729"
    },
    {
      Date: "2004-5-1",
      IndexValue: "831449.1413"
    },
    {
      Date: "2004-6-1",
      IndexValue: "852516.4479"
    },
    {
      Date: "2004-7-1",
      IndexValue: "834762.3207"
    },
    {
      Date: "2004-8-1",
      IndexValue: "822756.7486"
    },
    {
      Date: "2004-9-1",
      IndexValue: "843881.4523"
    },
    {
      Date: "2004-10-1",
      IndexValue: "840327.9997"
    },
    {
      Date: "2004-11-1",
      IndexValue: "879989.2666"
    },
    {
      Date: "2004-12-1",
      IndexValue: "907321.6276"
    },
    {
      Date: "2005-1-1",
      IndexValue: "893218.9552"
    },
    {
      Date: "2005-2-1",
      IndexValue: "903043.4483"
    },
    {
      Date: "2005-3-1",
      IndexValue: "893762.0987"
    },
    {
      Date: "2005-4-1",
      IndexValue: "866419.7123"
    },
    {
      Date: "2005-5-1",
      IndexValue: "878911.7273"
    },
    {
      Date: "2005-6-1",
      IndexValue: "897630.893"
    },
    {
      Date: "2005-7-1",
      IndexValue: "909660.158"
    },
    {
      Date: "2005-8-1",
      IndexValue: "907845.3473"
    },
    {
      Date: "2005-9-1",
      IndexValue: "899404.9358"
    },
    {
      Date: "2005-10-1",
      IndexValue: "874059.189"
    },
    {
      Date: "2005-11-1",
      IndexValue: "916058.5911"
    },
    {
      Date: "2005-12-1",
      IndexValue: "939519.2321"
    },
    {
      Date: "2006-1-1",
      IndexValue: "946100.2701"
    },
    {
      Date: "2006-2-1",
      IndexValue: "944050.0638"
    },
    {
      Date: "2006-3-1",
      IndexValue: "952816.6734"
    },
    {
      Date: "2006-4-1",
      IndexValue: "952333.87"
    },
    {
      Date: "2006-5-1",
      IndexValue: "940189.9253"
    },
    {
      Date: "2006-6-1",
      IndexValue: "912960.3157"
    },
    {
      Date: "2006-7-1",
      IndexValue: "916836.1611"
    },
    {
      Date: "2006-8-1",
      IndexValue: "936021.3309"
    },
    {
      Date: "2006-9-1",
      IndexValue: "964457.0363"
    },
    {
      Date: "2006-10-1",
      IndexValue: "1004794.204"
    },
    {
      Date: "2006-11-1",
      IndexValue: "1026448.504"
    },
    {
      Date: "2006-12-1",
      IndexValue: "1046956.608"
    },
    {
      Date: "2007-1-1",
      IndexValue: "1051014.476"
    },
    {
      Date: "2007-2-1",
      IndexValue: "1062118.95"
    },
    {
      Date: "2007-3-1",
      IndexValue: "1026508.665"
    },
    {
      Date: "2007-4-1",
      IndexValue: "1062530.803"
    },
    {
      Date: "2007-5-1",
      IndexValue: "1091910.579"
    },
    {
      Date: "2007-6-1",
      IndexValue: "1093570.93"
    },
    {
      Date: "2007-7-1",
      IndexValue: "1100150.907"
    },
    {
      Date: "2007-8-1",
      IndexValue: "1055885.049"
    },
    {
      Date: "2007-9-1",
      IndexValue: "1085375.942"
    },
    {
      Date: "2007-10-1",
      IndexValue: "1115475.293"
    },
    {
      Date: "2007-11-1",
      IndexValue: "1055607.282"
    },
    {
      Date: "2007-12-1",
      IndexValue: "1069410.487"
    },
    {
      Date: "2008-1-1",
      IndexValue: "993526.0405"
    },
    {
      Date: "2008-2-1",
      IndexValue: "975167.049"
    },
    {
      Date: "2008-3-1",
      IndexValue: "941404.0676"
    },
    {
      Date: "2008-4-1",
      IndexValue: "975447.6648"
    },
    {
      Date: "2008-5-1",
      IndexValue: "992098.2875"
    },
    {
      Date: "2008-6-1",
      IndexValue: "940498.6695"
    },
    {
      Date: "2008-7-1",
      IndexValue: "878719.2874"
    },
    {
      Date: "2008-8-1",
      IndexValue: "900863.5356"
    },
    {
      Date: "2008-9-1",
      IndexValue: "858383.7441"
    },
    {
      Date: "2008-10-1",
      IndexValue: "692026.6718"
    },
    {
      Date: "2008-11-1",
      IndexValue: "644816.3412"
    },
    {
      Date: "2008-12-1",
      IndexValue: "649257.2302"
    },
    {
      Date: "2009-1-1",
      IndexValue: "639338.3594"
    },
    {
      Date: "2009-2-1",
      IndexValue: "593511.9845"
    },
    {
      Date: "2009-3-1",
      IndexValue: "558375.4032"
    },
    {
      Date: "2009-4-1",
      IndexValue: "625581.1329"
    },
    {
      Date: "2009-5-1",
      IndexValue: "665287.6464"
    },
    {
      Date: "2009-6-1",
      IndexValue: "678511.2862"
    },
    {
      Date: "2009-7-1",
      IndexValue: "688237.0992"
    },
    {
      Date: "2009-8-1",
      IndexValue: "742427.4007"
    },
    {
      Date: "2009-9-1",
      IndexValue: "769013.0296"
    },
    {
      Date: "2009-10-1",
      IndexValue: "786705.097"
    },
    {
      Date: "2009-11-1",
      IndexValue: "802582.736"
    },
    {
      Date: "2009-12-1",
      IndexValue: "821864.021"
    },
    {
      Date: "2010-1-1",
      IndexValue: "830168.886"
    },
    {
      Date: "2010-2-1",
      IndexValue: "805895.3599"
    },
    {
      Date: "2010-3-1",
      IndexValue: "850288.0023"
    },
    {
      Date: "2010-4-1",
      IndexValue: "883515.488"
    },
    {
      Date: "2010-5-1",
      IndexValue: "830902.3592"
    },
    {
      Date: "2010-6-1",
      IndexValue: "802244.8789"
    },
    {
      Date: "2010-7-1",
      IndexValue: "800806.0959"
    },
    {
      Date: "2010-8-1",
      IndexValue: "806614.6722"
    },
    {
      Date: "2010-9-1",
      IndexValue: "833328.5101"
    },
    {
      Date: "2010-10-1",
      IndexValue: "870397.6149"
    },
    {
      Date: "2010-11-1",
      IndexValue: "891711.2218"
    },
    {
      Date: "2010-12-1",
      IndexValue: "923248.3271"
    },
    {
      Date: "2011-1-1",
      IndexValue: "950699.0289"
    },
    {
      Date: "2011-2-1",
      IndexValue: "975856.3703"
    },
    {
      Date: "2011-3-1",
      IndexValue: "955695.6547"
    },
    {
      Date: "2011-4-1",
      IndexValue: "970689.3254"
    },
    {
      Date: "2011-5-1",
      IndexValue: "972531.903"
    },
    {
      Date: "2011-6-1",
      IndexValue: "937934.8141"
    },
    {
      Date: "2011-7-1",
      IndexValue: "966187.9872"
    },
    {
      Date: "2011-8-1",
      IndexValue: "863334.4764"
    },
    {
      Date: "2011-9-1",
      IndexValue: "855238.9992"
    },
    {
      Date: "2011-10-1",
      IndexValue: "882904.3089"
    },
    {
      Date: "2011-11-1",
      IndexValue: "899290.3098"
    },
    {
      Date: "2011-12-1",
      IndexValue: "915555.7291"
    },
    {
      Date: "2012-1-1",
      IndexValue: "955158.6504"
    },
    {
      Date: "2012-2-1",
      IndexValue: "990575.4577"
    },
    {
      Date: "2012-3-1",
      IndexValue: "1011479.023"
    },
    {
      Date: "2012-4-1",
      IndexValue: "1008066.751"
    },
    {
      Date: "2012-5-1",
      IndexValue: "978075.232"
    },
    {
      Date: "2012-6-1",
      IndexValue: "968243.2617"
    },
    {
      Date: "2012-7-1",
      IndexValue: "998179.1151"
    },
    {
      Date: "2012-8-1",
      IndexValue: "1026308.763"
    },
    {
      Date: "2012-9-1",
      IndexValue: "1052643.932"
    },
    {
      Date: "2012-10-1",
      IndexValue: "1050800.587"
    },
    {
      Date: "2012-11-1",
      IndexValue: "1025878.584"
    },
    {
      Date: "2012-12-1",
      IndexValue: "1051061.432"
    },
    {
      Date: "2013-1-1",
      IndexValue: "1092714.9"
    },
    {
      Date: "2013-2-1",
      IndexValue: "1109141.906"
    },
    {
      Date: "2013-3-1",
      IndexValue: "1136384.218"
    },
    {
      Date: "2013-4-1",
      IndexValue: "1154128.363"
    },
    {
      Date: "2013-5-1",
      IndexValue: "1204799.949"
    },
    {
      Date: "2013-6-1",
      IndexValue: "1188504.606"
    },
    {
      Date: "2013-7-1",
      IndexValue: "1226723.936"
    },
    {
      Date: "2013-8-1",
      IndexValue: "1228367.195"
    },
    {
      Date: "2013-9-1",
      IndexValue: "1241594.18"
    },
    {
      Date: "2013-10-1",
      IndexValue: "1271171.243"
    },
    {
      Date: "2013-11-1",
      IndexValue: "1322952.519"
    },
    {
      Date: "2013-12-1",
      IndexValue: "1343210.8"
    },
    {
      Date: "2014-1-1",
      IndexValue: "1351209.257"
    },
    {
      Date: "2014-2-1",
      IndexValue: "1344505.879"
    },
    {
      Date: "2014-3-1",
      IndexValue: "1372294.798"
    },
    {
      Date: "2014-4-1",
      IndexValue: "1370568.142"
    },
    {
      Date: "2014-5-1",
      IndexValue: "1386745.845"
    },
    {
      Date: "2014-6-1",
      IndexValue: "1428434.166"
    },
    {
      Date: "2014-7-1",
      IndexValue: "1450389.551"
    },
    {
      Date: "2014-8-1",
      IndexValue: "1446636.393"
    },
    {
      Date: "2014-9-1",
      IndexValue: "1471273.582"
    },
    {
      Date: "2014-10-1",
      IndexValue: "1435962.11"
    },
    {
      Date: "2014-11-1",
      IndexValue: "1526153.012"
    },
    {
      Date: "2014-12-1",
      IndexValue: "1544604.872"
    },
    {
      Date: "2015-1-1",
      IndexValue: "1534709.847"
    },
    {
      Date: "2015-2-1",
      IndexValue: "1571306.744"
    },
    {
      Date: "2015-3-1",
      IndexValue: "1562903.426"
    },
    {
      Date: "2015-4-1",
      IndexValue: "1573452.901"
    },
    {
      Date: "2015-5-1",
      IndexValue: "1580817.105"
    },
    {
      Date: "2015-6-1",
      IndexValue: "1568457.879"
    },
    {
      Date: "2015-7-1",
      IndexValue: "1567119.824"
    },
    {
      Date: "2015-8-1",
      IndexValue: "1531311.376"
    },
    {
      Date: "2015-9-1",
      IndexValue: "1464589.776"
    },
    {
      Date: "2015-10-1",
      IndexValue: "1528523.629"
    },
    {
      Date: "2015-11-1",
      IndexValue: "1576693.474"
    },
    {
      Date: "2015-12-1",
      IndexValue: "1564668.166"
    },
    {
      Date: "2016-1-1",
      IndexValue: "1461816.225"
    },
    {
      Date: "2016-2-1",
      IndexValue: "1452592.34"
    },
    {
      Date: "2016-3-1",
      IndexValue: "1538402.852"
    },
    {
      Date: "2016-4-1",
      IndexValue: "1574506.456"
    },
    {
      Date: "2016-5-1",
      IndexValue: "1563401.233"
    },
    {
      Date: "2016-6-1",
      IndexValue: "1574914.354"
    },
    {
      Date: "2016-7-1",
      IndexValue: "1629494.904"
    },
    {
      Date: "2016-8-1",
      IndexValue: "1647535.595"
    },
    {
      Date: "2016-9-1",
      IndexValue: "1636386.48"
    },
    {
      Date: "2016-10-1",
      IndexValue: "1626093.462"
    },
    {
      Date: "2016-11-1",
      IndexValue: "1648203.292"
    },
    {
      Date: "2016-12-1",
      IndexValue: "1712694.365"
    },
    {
      Date: "2017-1-1",
      IndexValue: "1727265.024"
    },
    {
      Date: "2017-2-1",
      IndexValue: "1766224.652"
    },
    {
      Date: "2017-3-1",
      IndexValue: "1795675.257"
    },
    {
      Date: "2017-4-1",
      IndexValue: "1787626.28"
    },
    {
      Date: "2017-5-1",
      IndexValue: "1816344.801"
    },
    {
      Date: "2017-6-1",
      IndexValue: "1846953.159"
    },
    {
      Date: "2017-7-1",
      IndexValue: "1866506.685"
    },
    {
      Date: "2017-8-1",
      IndexValue: "1865565.71"
    },
    {
      Date: "2017-9-1",
      IndexValue: "1886439.939"
    },
    {
      Date: "2017-10-1",
      IndexValue: "1939271.96"
    },
    {
      Date: "2017-11-1",
      IndexValue: "1970066.114"
    },
    {
      Date: "2017-12-1",
      IndexValue: "2028080.908"
    },
    {
      Date: "2018-1-1",
      IndexValue: "2115183.78"
    },
    {
      Date: "2018-2-1",
      IndexValue: "2044874.719"
    },
    {
      Date: "2018-3-1",
      IndexValue: "2041601.412"
    },
    {
      Date: "2018-4-1",
      IndexValue: "1999701.515"
    },
    {
      Date: "2018-5-1",
      IndexValue: "2030504.107"
    },
    {
      Date: "2018-6-1",
      IndexValue: "2070129.186"
    },
    {
      Date: "2018-7-1",
      IndexValue: "2102738.914"
    },
    {
      Date: "2018-8-1",
      IndexValue: "2153105.028"
    },
    {
      Date: "2018-9-1",
      IndexValue: "2186758.944"
    },
    {
      Date: "2018-10-1",
      IndexValue: "2098912.133"
    },
    {
      Date: "2018-11-1",
      IndexValue: "2062273.228"
    },
    {
      Date: "2018-12-1",
      IndexValue: "1953829.147"
    },
    {
      Date: "2019-1-1",
      IndexValue: "1983983.018"
    },
    {
      Date: "2019-2-1",
      IndexValue: "2090814.622"
    },
    {
      Date: "2019-3-1",
      IndexValue: "2119611.749"
    },
    {
      Date: "2019-4-1",
      IndexValue: "2186973.402"
    },
    {
      Date: "2019-5-1",
      IndexValue: "2148922.848"
    },
    {
      Date: "2019-6-1",
      IndexValue: "2178699.723"
    },
    {
      Date: "2019-7-1",
      IndexValue: "2258336.432"
    },
    {
      Date: "2019-8-1",
      IndexValue: "2187685.59"
    },
    {
      Date: "2019-9-1",
      IndexValue: "2253439.179"
    },
    {
      Date: "2019-10-1",
      IndexValue: "2248540.895"
    },
    {
      Date: "2019-11-1",
      IndexValue: "2349515.585"
    },
    {
      Date: "2019-12-1",
      IndexValue: "2409746.394"
    },
    {
      Date: "2020-1-1",
      IndexValue: "2480789.443"
    },
    {
      Date: "2020-2-1",
      IndexValue: "2477057.424"
    },
    {
      Date: "2020-3-1",
      IndexValue: "2012863.956"
    },
    {
      Date: "2020-4-1",
      IndexValue: "2113929.607"
    },
    {
      Date: "2020-5-1",
      IndexValue: "2238342.829"
    },
    {
      Date: "2020-6-1",
      IndexValue: "2371047.896"
    },
    {
      Date: "2020-7-1",
      IndexValue: "2441110.494"
    },
    {
      Date: "2020-8-1",
      IndexValue: "2576834.611"
    },
    {
      Date: "2020-9-1",
      IndexValue: "2557098.882"
    },
    {
      Date: "2020-10-1",
      IndexValue: "2600143.492"
    },
    {
      Date: "2020-11-1",
      IndexValue: "2704595.63"
    },
    {
      Date: "2020-12-1",
      IndexValue: "2817149.204"
    },
    {
      Date: "2021-1-1",
      IndexValue: "2883617.018"
    },
    {
      Date: "2021-2-1",
      IndexValue: "2939358.358"
    },
    {
      Date: "2021-3-1",
      IndexValue: "2942643.882"
    },
    {
      Date: "2021-4-1",
      IndexValue: "3094406.968"
    },
    {
      Date: "2021-5-1",
      IndexValue: "3093138.417"
    },
    {
      Date: "2021-6-1",
      IndexValue: "3120153.779"
    },
    {
      Date: "2021-7-1",
      IndexValue: "3200518.625"
    },
    {
      Date: "2021-8-1",
      IndexValue: "3263740.845"
    },
    {
      Date: "2021-9-1",
      IndexValue: "3252178.481"
    },
    {
      Date: "2021-10-1",
      IndexValue: "3239989.06"
    },
    {
      Date: "2021-11-1",
      IndexValue: "3377147.931"
    },
    {
      Date: "2021-12-1",
      IndexValue: "3375761.883"
    },
    {
      Date: "2022-1-1",
      IndexValue: "3278933.561"
    },
    {
      Date: "2022-2-1",
      IndexValue: "3154974.078"
    },
    {
      Date: "2022-3-1",
      IndexValue: "3085646.729"
    },
    {
      Date: "2022-4-1",
      IndexValue: "3072186.543"
    },
    {
      Date: "2022-5-1",
      IndexValue: "2799501.055"
    },
    {
      Date: "2022-6-1",
      IndexValue: "2668559.018"
    },
    {
      Date: "2022-7-1",
      IndexValue: "2681300.816"
    },
    {
      Date: "2022-8-1",
      IndexValue: "2855211.445"
    },
    {
      Date: "2022-9-1",
      IndexValue: "2641769.055"
    },
    {
      Date: "2022-10-1",
      IndexValue: "2549794.643"
    },
    {
      Date: "2022-11-1",
      IndexValue: "2687298.381"
    },
    {
      Date: "2022-12-1",
      IndexValue: "2695896.785"
    },
    {
      Date: "2023-1-1",
      IndexValue: "2711351.08"
    },
    {
      Date: "2023-2-1",
      IndexValue: "2781176.227"
    },
    {
      Date: "2023-3-1",
      IndexValue: "2700355.225"
    },
    {
      Date: "2023-4-1",
      IndexValue: "2794141.178"
    },
    {
      Date: "2023-5-1",
      IndexValue: "2807691.851"
    },
    {
      Date: "2023-6-1",
      IndexValue: "2936979.375"
    },
    {
      Date: "2023-7-1",
      IndexValue: "3045020.829"
    },
    {
      Date: "2023-8-1",
      IndexValue: "3001545.684"
    },
    {
      Date: "2023-9-1",
      IndexValue: "2965565.092"
    },
    {
      Date: "2023-10-1",
      IndexValue: "2876612.952"
    },
    {
      Date: "2023-11-1",
      IndexValue: "3015081.081"
    },
    {
      Date: "2023-12-1",
      IndexValue: "3174290.662"
    },
    {
      Date: "2024-1-1",
      IndexValue: "3249031.522"
    },
    {
      Date: "2024-2-1",
      IndexValue: "3364650.86"
    },
    {
      Date: "2024-3-1",
      IndexValue: "3452773.146"
    },
    {
      Date: "2024-4-1",
      IndexValue: "3400748.88"
    },
    {
      Date: "2024-5-1",
      IndexValue: "3475649.118"
    },
    {
      Date: "2024-6-1",
      IndexValue: "3504241.085"
    }
  ]