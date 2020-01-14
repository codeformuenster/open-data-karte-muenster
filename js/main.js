var mapColors = [
  "#FFFFFF",
  "#FFF1D5",
  "#FFE4AB",
  "#FFD781",
  "#FFCA57",
  "#FFBD2E",
  "#EE9724",
  "#DE711B",
  "#CD4B12",
  "#BD2509",
  "#AD0000"
];
//["#FF0000", "#FE1C00", "#FD3800", "#FC5500", "#FB7100", "#FA8D00", "#F9AA00", "#F8C600", "#F7E200", "#F7FF00", "#FAFF33"];

var dataSet = function () {
  var openData = {
    'wohnberechtigte': {
      'title': 'Wohnberechtigte nach Alter',
      'unit': 'Personen',
      'description': 'Wohnberechtigte Bevölkerung: Viele Städte verwenden als Einwohnerbegriff den Begriff der' +
        '"wohnberechtigte Bevölkerung"; das sind alle Einwohner, die mit Haupt- und Nebenwohnungen am maßgebenden Ort' +
        'gemeldet sind. Alle jene Einwohner sind amtlich gemeldet und somit "berechtigt", an diesem Ort zu wohnen.' +
        'Siehe auch: http://de.wikipedia.org/wiki/Bev%C3%B6lkerung#Wohnberechtigte_Bev.C3.B6lkerung',
      'default': 3,
      'tableTitle': 'Gestaffelt nach Alter',
      'limits': [0, 100, 200, 400, 600, 800, 1000, 2000, 3000, 4000, 5000],
      'headlines': ['Gesamt', "0 - 9", "10 - 19", "20 - 29", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70 - 79", "80 - 89", "90 u. mehr"],
      'percent_of': 'wohnberechtigte-0',
      'data': {
        11: [1450, 83, 73, 402, 232, 162, 137, 98, 144, 80, 39],
        12: [1354, 35, 77, 601, 213, 128, 89, 77, 73, 48, 13],
        13: [2199, 74, 82, 737, 409, 231, 192, 148, 189, 120, 17],
        14: [2432, 81, 103, 890, 343, 253, 186, 131, 155, 184, 106],
        15: [1384, 47, 74, 497, 229, 141, 146, 85, 103, 54, 8],
        21: [4522, 167, 223, 1701, 841, 378, 352, 200, 297, 270, 93],
        22: [8688, 392, 375, 3082, 1739, 952, 845, 513, 473, 262, 55],
        23: [1251, 45, 36, 612, 243, 108, 91, 45, 38, 28, 5],
        24: [6932, 336, 275, 2393, 1579, 807, 704, 398, 257, 163, 20],
        25: [6260, 396, 331, 1798, 1259, 846, 705, 425, 324, 145, 31],
        26: [5284, 410, 407, 962, 868, 785, 693, 486, 440, 196, 37],
        27: [12524, 785, 733, 3282, 2162, 1589, 1525, 1134, 817, 383, 114],
        28: [4338, 187, 296, 1984, 669, 351, 331, 248, 174, 74, 24],
        29: [2210, 132, 114, 531, 344, 217, 273, 183, 211, 151, 54],
        31: [5479, 418, 430, 931, 730, 675, 750, 562, 590, 333, 60],
        32: [8976, 684, 650, 1832, 1467, 1232, 1218, 829, 622, 347, 95],
        33: [7688, 482, 406, 2290, 1624, 916, 822, 467, 420, 203, 58],
        34: [7036, 570, 682, 961, 847, 1080, 1037, 687, 647, 431, 94],
        43: [1045, 49, 23, 410, 246, 122, 74, 45, 43, 25, 8],
        44: [5202, 301, 285, 1188, 886, 611, 584, 346, 470, 388, 143],
        45: [10220, 681, 721, 1841, 1665, 1386, 1519, 886, 866, 550, 105],
        46: [8099, 669, 880, 1306, 979, 1131, 1319, 677, 678, 384, 76],
        47: [8605, 755, 643, 2023, 1376, 1174, 1088, 686, 532, 268, 60],
        51: [21155, 2145, 2486, 5899, 2872, 2664, 2177, 1370, 913, 516, 113],
        52: [7631, 532, 743, 2949, 860, 707, 707, 435, 369, 243, 86],
        54: [9250, 643, 1133, 1505, 819, 1363, 1563, 921, 812, 424, 67],
        56: [6244, 762, 805, 570, 781, 1013, 935, 592, 514, 235, 37],
        57: [9082, 986, 956, 1174, 1190, 1424, 1230, 904, 815, 351, 52],
        58: [6769, 593, 646, 954, 800, 899, 960, 751, 805, 324, 37],
        61: [10555, 1382, 1257, 1382, 1310, 1388, 1526, 918, 868, 449, 75],
        62: [4998, 476, 463, 704, 636, 672, 784, 546, 466, 222, 29],
        63: [10513, 1148, 1122, 1459, 1138, 1255, 1573, 1239, 1058, 454, 67],
        68: [3102, 312, 363, 285, 333, 491, 496, 323, 323, 156, 20],
        71: [10317, 889, 930, 1121, 1304, 1623, 1626, 1063, 1068, 603, 90],
        76: [3692, 384, 404, 338, 389, 609, 600, 438, 357, 151, 22],
        77: [8017, 886, 909, 692, 838, 1263, 1221, 785, 945, 395, 83],
        81: [4932, 445, 593, 707, 563, 793, 827, 435, 354, 181, 34],
        82: [6522, 610, 769, 724, 762, 1087, 1072, 623, 537, 291, 47],
        86: [7930, 824, 846, 943, 975, 1088, 1196, 846, 787, 365, 60],
        87: [8981, 846, 952, 824, 977, 1347, 1456, 1038, 1070, 402, 69],
        91: [5640, 575, 634, 775, 738, 710, 789, 513, 523, 307, 76],
        95: [6350, 450, 636, 584, 599, 860, 1071, 893, 895, 325, 37],
        96: [9881, 745, 888, 1224, 1189, 1433, 1428, 1058, 1166, 620, 130],
        97: [9284, 882, 1113, 1007, 1072, 1471, 1635, 1069, 779, 230, 26],
        98: [6244, 697, 804, 540, 778, 1099, 866, 581, 588, 251, 40],
      }
    },


    'wohnberechtigte_m': {
      'title': 'Wohnberechtigte (männlich)',
      'unit': 'Personen',
      'percent_of': 'wohnberechtigte',
      'default': 3,
      'tableTitle': 'Gestaffelt nach Alter',
      'headlines': ['Gesamt', "0 - 9", "10 - 19", "20 - 29", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70 - 79", "80 - 89", "90 u. mehr"],
      'limits': [0, 100, 200, 400, 600, 800, 1000, 2000, 3000, 4000, 5000],
      'data': {
        11: [663, 37, 38, 184, 126, 85, 66, 47, 62, 14, 4],
        12: [611, 18, 31, 247, 118, 67, 52, 37, 32, 0, 0],
        13: [1081, 42, 37, 367, 226, 143, 89, 75, 72, 0, 0],
        14: [1125, 39, 59, 427, 195, 131, 90, 63, 58, 49, 14],
        15: [579, 22, 32, 171, 117, 80, 69, 38, 34, 0, 0],
        21: [1918, 82, 76, 697, 430, 204, 174, 84, 95, 62, 14],
        22: [3952, 211, 164, 1288, 912, 490, 366, 220, 196, 92, 13],
        23: [625, 29, 14, 260, 151, 76, 46, 22, 18, 0, 0],
        24: [3377, 175, 131, 1020, 855, 431, 377, 220, 118, 47, 3],
        25: [2783, 191, 145, 680, 644, 413, 320, 204, 131, 50, 5],
        26: [2434, 226, 200, 414, 443, 384, 318, 214, 173, 55, 7],
        27: [5852, 402, 360, 1431, 1120, 795, 730, 525, 359, 114, 16],
        28: [2112, 100, 125, 941, 370, 188, 159, 110, 88, 0, 0],
        29: [989, 71, 44, 210, 172, 131, 123, 95, 85, 45, 13],
        31: [2510, 206, 214, 384, 356, 337, 353, 261, 259, 122, 18],
        32: [4260, 332, 320, 813, 752, 634, 612, 393, 268, 119, 17],
        33: [3569, 243, 197, 963, 837, 470, 404, 222, 168, 54, 11],
        34: [3395, 296, 337, 457, 436, 552, 524, 337, 277, 157, 22],
        43: [525, 22, 10, 179, 144, 80, 42, 21, 15, 0, 0],
        44: [2246, 149, 136, 493, 473, 316, 272, 168, 147, 0, 0],
        45: [4680, 342, 362, 842, 819, 652, 696, 405, 339, 194, 29],
        46: [3813, 330, 451, 619, 491, 523, 624, 317, 280, 154, 24],
        47: [4147, 392, 296, 911, 698, 623, 562, 338, 224, 86, 17],
        51: [10217, 1125, 1227, 2834, 1436, 1269, 1078, 634, 402, 195, 17],
        52: [3568, 272, 356, 1305, 456, 372, 347, 209, 165, 72, 14],
        54: [4546, 320, 584, 770, 407, 656, 801, 444, 371, 175, 18],
        56: [3059, 407, 404, 287, 358, 510, 474, 283, 227, 99, 10],
        57: [4550, 554, 485, 581, 592, 748, 629, 446, 362, 147, 6],
        58: [3409, 311, 341, 483, 427, 464, 500, 354, 376, 144, 9],
        61: [5132, 710, 646, 694, 644, 677, 769, 432, 375, 168, 17],
        62: [2388, 241, 229, 341, 307, 330, 376, 266, 189, 102, 7],
        63: [5107, 592, 571, 750, 560, 620, 740, 602, 473, 181, 18],
        68: [1563, 161, 183, 146, 164, 262, 258, 170, 149, 65, 5],
        71: [4917, 465, 472, 495, 667, 786, 805, 489, 462, 250, 26],
        76: [1800, 191, 187, 152, 184, 301, 313, 232, 167, 64, 9],
        77: [3874, 457, 474, 349, 387, 603, 617, 372, 432, 161, 22],
        81: [2472, 226, 312, 365, 293, 392, 427, 220, 154, 70, 13],
        82: [3189, 315, 401, 360, 376, 522, 541, 313, 244, 104, 13],
        86: [3838, 413, 434, 471, 485, 552, 597, 389, 344, 134, 19],
        87: [4360, 445, 494, 421, 468, 675, 701, 491, 484, 164, 17],
        91: [2724, 304, 315, 399, 359, 354, 393, 250, 229, 104, 17],
        95: [3044, 226, 310, 300, 290, 424, 496, 428, 411, 143, 16],
        96: [4539, 394, 447, 591, 600, 683, 649, 473, 480, 206, 16],
        97: [4565, 447, 550, 518, 536, 722, 778, 534, 371, 100, 9],
        98: [3172, 354, 419, 276, 372, 573, 448, 331, 280, 106, 13]
      }
    },


    'wohnberechtigte_w': {
      'title': 'Wohnberechtigte (weiblich)',
      'tableTitle': 'Gestaffelt nach Alter',
      'unit': 'Personen',
      'percent_of': 'wohnberechtigte',
      'default': 3,
      'headlines': ['Gesamt', "0 - 9", "10 - 19", "20 - 29", "30 - 39", "40 - 49", "50 - 59", "60 - 69", "70 - 79", "80 - 89", "90 u. mehr"],
      'limits': [0, 100, 200, 400, 600, 800, 1000, 2000, 3000, 4000, 5000],
      'data': {
        11: [787, 46, 35, 218, 106, 77, 71, 51, 82, 66, 35],
        12: [743, 17, 46, 354, 95, 61, 37, 40, 41, 0, 0],
        13: [1118, 32, 45, 370, 183, 88, 103, 73, 117, 0, 0],
        14: [1307, 42, 44, 463, 148, 122, 96, 68, 97, 135, 92],
        15: [805, 25, 42, 326, 112, 61, 77, 47, 69, 0, 0],
        21: [2604, 85, 147, 1004, 411, 174, 178, 116, 202, 208, 79],
        22: [4736, 181, 211, 1794, 827, 462, 479, 293, 277, 170, 42],
        23: [626, 16, 22, 352, 92, 32, 45, 23, 20, 0, 0],
        24: [3555, 161, 144, 1373, 724, 376, 327, 178, 139, 116, 17],
        25: [3477, 205, 186, 1118, 615, 433, 385, 221, 193, 95, 26],
        26: [2850, 184, 207, 548, 425, 401, 375, 272, 267, 141, 30],
        27: [6672, 383, 373, 1851, 1042, 794, 795, 609, 458, 269, 98],
        28: [2226, 87, 171, 1043, 299, 163, 172, 138, 86, 0, 0],
        29: [1221, 61, 70, 321, 172, 86, 150, 88, 126, 106, 41],
        31: [2969, 212, 216, 547, 374, 338, 397, 301, 331, 211, 42],
        32: [4716, 352, 330, 1019, 715, 598, 606, 436, 354, 228, 78],
        33: [4119, 239, 209, 1327, 787, 446, 418, 245, 252, 149, 47],
        34: [3641, 274, 345, 504, 411, 528, 513, 350, 370, 274, 72],
        43: [520, 27, 13, 231, 102, 42, 32, 24, 28, 0, 0],
        44: [2956, 152, 149, 695, 413, 295, 312, 178, 323, 0, 0],
        45: [5540, 339, 359, 999, 846, 734, 823, 481, 527, 356, 76],
        46: [4286, 339, 429, 687, 488, 608, 695, 360, 398, 230, 52],
        47: [4458, 363, 347, 1112, 678, 551, 526, 348, 308, 182, 43],
        51: [10938, 1020, 1259, 3065, 1436, 1395, 1099, 736, 511, 321, 96],
        52: [4063, 260, 387, 1644, 404, 335, 360, 226, 204, 171, 72],
        54: [4704, 323, 549, 735, 412, 707, 762, 477, 441, 249, 49],
        56: [3185, 355, 401, 283, 423, 503, 461, 309, 287, 136, 27],
        57: [4532, 432, 471, 593, 598, 676, 601, 458, 453, 204, 46],
        58: [3360, 282, 305, 471, 373, 435, 460, 397, 429, 180, 28],
        61: [5423, 672, 611, 688, 666, 711, 757, 486, 493, 281, 58],
        62: [2610, 235, 234, 363, 329, 342, 408, 280, 277, 120, 22],
        63: [5406, 556, 551, 709, 578, 635, 833, 637, 585, 273, 49],
        68: [1539, 151, 180, 139, 169, 229, 238, 153, 174, 91, 15],
        71: [5400, 424, 458, 626, 637, 837, 821, 574, 606, 353, 64],
        76: [1892, 193, 217, 186, 205, 308, 287, 206, 190, 87, 13],
        77: [4143, 429, 435, 343, 451, 660, 604, 413, 513, 234, 61],
        81: [2460, 219, 281, 342, 270, 401, 400, 215, 200, 111, 21],
        82: [3333, 295, 368, 364, 386, 565, 531, 310, 293, 187, 34],
        86: [4092, 411, 412, 472, 490, 536, 599, 457, 443, 231, 41],
        87: [4621, 401, 458, 403, 509, 672, 755, 547, 586, 238, 52],
        91: [2916, 271, 319, 376, 379, 356, 396, 263, 294, 203, 59],
        95: [3306, 224, 326, 284, 309, 436, 575, 465, 484, 182, 21],
        96: [5342, 351, 441, 633, 589, 750, 779, 585, 686, 414, 114],
        97: [4719, 435, 563, 489, 536, 749, 857, 535, 408, 130, 17],
        98: [3072, 343, 385, 264, 406, 526, 418, 250, 308, 145, 27],

      }
    },
    'einkommen': {
      'title': 'Festgesetzte Einkommen-/Jahreslohnsteuer',
      'percent_of': 'einkommen-0',
      'unit': 'Tausend Euro',
      'tableTitle': 'Summe (Gesamt des Stadtviertels) der festgesetzten Jahreslohsteuer,<br />gestaffelt nach Gesamtbetrag der Einkünfte, in Tausend Euro',
      'default': 3,
      'headlines': ['Gesamt', "0 - 15", "15 - 30", "30 - 40", "40 - 50", "50 - 70", "70 - 100", "100 - 125", "125 u. mehr"],
      'limits': [0, 100, 200, 400, 600, 800, 1000, 2000, 3000, 4000, 5000],
      'data': {
        11: [4160, 26, 369, 532, 490, 720, 498, 373, 1152],
        12: [2750, 21, 337, 351, 464, 445, 443, 109, 580],
        13: [8579, 42, 558, 664, 817, 1342, 1085, 615, 3457],
        14: [8333, 43, 622, 950, 891, 1049, 999, 282, 3495],
        15: [3505, 31, 373, 509, 447, 428, 548, 212, 959],
        21: [10199, 66, 1165, 1580, 1469, 1717, 1312, 582, 2308],
        22: [20175, 173, 2607, 3646, 3196, 3812, 3028, 1147, 2566],
        23: [2011, 28, 328, 293, 183, 345, 293, 134, 408],
        24: [14255, 170, 2392, 2642, 2164, 2377, 1648, 769, 2094],
        25: [19591, 133, 1954, 2788, 2556, 3100, 2538, 1175, 5347],
        26: [20450, 83, 1367, 2047, 1749, 2402, 2540, 1012, 9250],
        27: [50490, 207, 3243, 5094, 5359, 8045, 7552, 3863, 17126],
        28: [14334, 71, 826, 1030, 998, 1491, 1235, 621, 8062],
        29: [10449, 33, 527, 685, 642, 1073, 1191, 669, 5628],
        31: [18879, 88, 1129, 1690, 1803, 2752, 2438, 1309, 7669],
        32: [22687, 173, 2384, 2921, 2390, 3229, 3980, 1609, 6002],
        33: [12731, 152, 2422, 2437, 2095, 2232, 1376, 655, 1362],
        34: [17866, 97, 1586, 2143, 1957, 3143, 2865, 1558, 4517],
        43: [1774, 25, 352, 345, 322, 397, 192, ,],
        44: [10913, 122, 1450, 1699, 1354, 1840, 1662, 777, 2010],
        45: [37360, 191, 3097, 4483, 3621, 5652, 4524, 2174, 13618],
        46: [20796, 109, 1978, 2630, 2519, 3939, 3651, 1466, 4503],
        47: [21103, 138, 1918, 2009, 1863, 3083, 2609, 1617, 7865],
        51: [48526, 212, 2812, 3967, 3871, 7496, 7685, 4223, 18260],
        52: [65014, 80, 986, 1518, 1520, 2718, 2684, 2208, 53300],
        54: [27671, 135, 1734, 2525, 2775, 4733, 4854, 2479, 8435],
        56: [14919, 56, 976, 1500, 1424, 2776, 3215, 1228, 3745],
        57: [26478, 130, 1987, 2449, 2170, 3980, 3581, 2196, 9985],
        58: [19577, 84, 1440, 1973, 1653, 3405, 3082, 1433, 6506],
        61: [16540, 156, 1687, 2052, 1650, 1915, 1819, 744, 6517],
        62: [12307, 81, 1188, 1443, 1321, 2415, 2116, 761, 2983],
        63: [23885, 154, 1636, 2032, 2347, 3827, 4113, 1657, 8120],
        68: [7510, 52, 573, 712, 772, 1389, 1436, 519, 2058],
        71: [55559, 154, 2482, 3203, 3098, 5540, 6780, 3439, 30863],
        76: [13901, 40, 618, 1159, 1122, 1996, 2177, 935, 5854],
        77: [24613, 88, 1490, 1864, 1956, 3936, 4652, 1719, 8908],
        81: [9926, 80, 901, 1345, 1274, 1920, 1980, 664, 1760],
        82: [24503, 88, 1369, 1795, 1888, 3098, 3922, 1963, 10380],
        86: [17313, 110, 1521, 1941, 2038, 2933, 2674, 1072, 5023],
        87: [29816, 125, 1865, 2368, 2401, 4563, 4506, 1901, 12086],
        91: [7968, 90, 1104, 1252, 1094, 1634, 890, 695, 1209],
        95: [21155, 80, 1264, 1842, 1933, 3632, 3356, 1759, 7290],
        96: [26758, 155, 2695, 2964, 2850, 4158, 3846, 1983, 8107],
        97: [24847, 129, 1692, 2319, 2374, 4761, 4867, 2065, 6641],
        98: [14466, 63, 1123, 1609, 1600, 2529, 2246, 1010, 4288],

      }
    },

    'arbeitslose': {
      'title': 'Anzahl der Arbeitslosen',
      'unit': 'Personen',
      'description': 'Der Prozentsatz wird aus der Anzahl der Wohnberechtigten des jeweiligen Stadtteils berechnet.',
      'extra': 'showChange',
      'percent_of': 'wohnberechtigte-0',
      'headlines': [2010, 2011, 2012, 2013, 2014],
      'default': 4,
      'limits': [0, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600],
      'data': {
        11: [29, 32, 31, 36, 36],
        12: [25, 25, 27, 17, 21],
        13: [35, 33, 32, 33, 45],
        14: [44, 46, 42, 42, 37],
        15: [25, 24, 22, 32, 26],
        21: [75, 70, 90, 94, 94],
        22: [268, 307, 346, 359, 334],
        23: [38, 38, 39, 49, 43],
        24: [214, 235, 229, 236, 248],
        25: [123, 144, 127, 129, 130],
        26: [133, 112, 132, 140, 146],
        27: [221, 217, 224, 221, 221],
        28: [83, 83, 93, 91, 94],
        29: [26, 25, 28, 35, 37],
        31: [129, 141, 133, 133, 132],
        32: [289, 251, 307, 287, 303],
        33: [240, 246, 274, 280, 291],
        34: [170, 177, 170, 171, 163],
        43: [30, 39, 34, 38, 35],
        44: [129, 138, 157, 148, 133],
        45: [229, 202, 239, 225, 193],
        46: [171, 151, 180, 189, 181],
        47: [309, 309, 336, 346, 327],
        51: [469, 493, 553, 544, 556],
        52: [96, 112, 106, 106, 120],
        54: [207, 165, 196, 169, 204],
        56: [111, 120, 114, 151, 142],
        57: [230, 216, 214, 223, 235],
        58: [154, 167, 168, 189, 184],
        61: [696, 723, 766, 728, 698],
        62: [201, 197, 209, 186, 181],
        63: [625, 645, 666, 646, 591],
        68: [72, 68, 72, 63, 81],
        71: [182, 200, 237, 238, 217],
        76: [64, 66, 77, 74, 77],
        77: [166, 171, 169, 195, 222],
        81: [141, 149, 153, 155, 187],
        82: [150, 162, 166, 159, 167],
        86: [320, 335, 365, 349, 368],
        87: [198, 206, 233, 216, 243],
        91: [281, 302, 321, 346, 306],
        95: [111, 120, 132, 126, 119],
        96: [356, 326, 369, 381, 348],
        97: [292, 287, 286, 298, 284],
        98: [94, 114, 121, 108, 109]
      },
    },
    'haushalte': {
      'title': 'Anzahl der Haushalte',
      'unit': 'Haushalte',
      'extra': 'showChange',
      'headlines': ['', '', '2010', '2011', '2012', '2013', '2014'],
      'default': 6,
      'limits': [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
      'data': {
        11: ["Aegidii", , 903, 998, 1001, 995, 959],
        12: ["Überwasser", , 954, 1073, 1049, 1054, 1019],
        13: ["Dom", , 1508, 1642, 1602, 1611, 1585],
        14: ["Buddenturm", , 1401, 1538, 1546, 1583, 1589],
        15: ["Martini", , 931, 1017, 1024, 1025, 1027],
        21: ["Pluggendorf", , 2761, 3079, 3072, 3098, 3140],
        22: ["Josef", , 5640, 6046, 6031, 6227, 6217],
        23: ["Bahnhof", , 818, 895, 880, 936, 968],
        24: ["Hansaplatz", , 4655, 5015, 5024, 4981, 5024],
        25: ["Mauritz-West", , 3978, 4257, 4238, 4252, 4282],
        26: ["Schlachthof", , 2856, 3062, 3101, 3139, 3145],
        27: ["Kreuz", , 7678, 8287, 8266, 8223, 8235],
        28: ["Neutor", , 2717, 3159, 3071, 3004, 3005],
        29: ["Schloss", , 1185, 1314, 1295, 1304, 1303],
        31: ["Aaseestadt", , 2990, 3108, 3132, 3159, 3121],
        32: ["Geist", , 5093, 5342, 5328, 5350, 5411],
        33: ["Schützenhof", , 4707, 5063, 5063, 5148, 5152],
        34: ["Düesberg", , 3410, 3485, 3504, 3543, 3549],
        43: ["Hafen", , 727, 801, 785, 793, 776],
        44: ["Herz-Jesu", , 2759, 2911, 2926, 2904, 2956],
        45: ["Mauritz-Mitte", , 5944, 6181, 6117, 6211, 6241],
        46: ["Rumphorst", , 3990, 4153, 4212, 4286, 4265],
        47: ["Uppenberg", , 4604, 4990, 5024, 5079, 5117],
        51: ["Gievenbeck", , 8998, 10170, 10428, 10661, 10748],
        52: ["Sentrup", , 3766, 4339, 4422, 4451, 4542],
        54: ["Mecklenbeck", , 4407, 4697, 4206, 4306, 4570],
        56: ["Albachten", , 2324, 2414, 2464, 2504, 2558],
        57: ["Roxel", , 3953, 4185, 4254, 4264, 4336],
        58: ["Nienberge", , 3196, 3395, 3391, 3440, 3433],
        61: ["Coerde", , 4506, 4673, 4714, 4791, 4885],
        62: ["Kinderhaus-Ost", , 2560, 2623, 2628, 2649, 2661],
        63: ["Kinderhaus-West", , 4678, 4905, 4895, 4913, 4914],
        68: ["Sprakel", , 1260, 1269, 1298, 1332, 1364],
        71: ["Mauritz-Ost", , 5004, 5200, 5295, 5343, 5375],
        76: ["Gelmer-Dyckburg", , 1536, 1584, 1625, 1658, 1682],
        77: ["Handorf", , 3290, 3421, 3474, 3476, 3521],
        81: ["Gremmendorf-West", , 2163, 2215, 2225, 2367, 2430],
        82: ["Gremmendorf-Ost", , 2907, 2978, 3012, 3080, 3109],
        86: ["Angelmodde", , 3528, 3626, 3655, 3831, 3857],
        87: ["Wolbeck", , 3927, 4025, 4062, 4137, 4183],
        91: ["Berg Fidel", , 2491, 2580, 2583, 2586, 2614],
        95: ["Hiltrup-Ost", , 2968, 3016, 2986, 2995, 3014],
        96: ["Hiltrup-Mitte", , 4947, 5093, 5150, 5164, 5166],
        97: ["Hiltrup-West", , 3938, 4083, 4174, 4208, 4278],
        98: ["Amelsbüren", , 2322, 2384, 2422, 2439, 2426]
      }
    }
  };

  var currentDataSet = 'undef';
  var currentSubSet = 0;

  function selectDataSet(dsname) {
    if (!dsname) {
      dsname = "arbeitslose-4";
    }
    var myArray = /^(.+)-(\d+)$/g.exec(dsname);
    currentDataSet = myArray ? myArray[1] : dsname;
    currentSubSet = myArray ? myArray[2] : openData[dsname].default;
    if (!openData[currentDataSet].headlines[currentSubSet]) {
      location.href = "?";
    }
    showDataSelector();
  }

  function getDataSet() {
    return openData[currentDataSet];
  }

  function getData() {
    return openData;
  }

  function getTitle() {
    return openData[currentDataSet].title + " " + openData[currentDataSet].headlines[currentSubSet];
  }

  function getUnit() {
    return openData[currentDataSet].unit;
  }

  var limits = [];

  function getLimits() {
    var max = 0;
    if (limits.length < 2) {
      $.each(openData[currentDataSet].data, function (key, arr) {
        if (max < arr[currentSubSet]) {
          max = arr[currentSubSet];
        }
      });
      var numsteps = 10;
      var step = max / numsteps;
      for (var i = 0; i < numsteps; i++) {
        limits[i] = Math.floor(i * step);
      }
    }
    return limits;
  }

  function getDataItem(stadtteilNr) {
    return openData[currentDataSet]['data'][stadtteilNr][currentSubSet];
  }

  function getPercent(stadtteilNr) {
    if (!stadtteilNr) {
      alert("need stadtteiNr");
    }
    var referenceDataSet = openData[currentDataSet].percent_of;
    if (referenceDataSet) {
      var referenceSubset = currentSubSet;
      if (referenceDataSet.indexOf('-') > 0) {
        var temp = referenceDataSet.split('-');
        referenceDataSet = temp[0];
        referenceSubset = temp[1];
      }
      console.log("stadtteilNr", stadtteilNr)
      console.log("currentData&Subset", currentDataSet, currentSubSet);
      console.log("referenceData&Subset", referenceDataSet, referenceSubset);

      let percentValue = openData[currentDataSet]['data'][stadtteilNr][currentSubSet] / openData[referenceDataSet]['data'][stadtteilNr][referenceSubset] * 100;
      return "(" + percentValue.toFixed(2) + "%)";
    } else {
      return ""
    }
  }

  function getDataTable(stadtteilNr) {
    var table = {};
    var lastVal = 0;
    var hls = openData[currentDataSet].headlines;
    for (var i = 0; i < hls.length; i++) {
      if (hls[i]) {
        var currentVal = openData[currentDataSet]['data'][stadtteilNr][i];
        var change = lastVal ? currentVal - lastVal : 0;
        table[hls[i]] = [currentVal, change, (i == currentSubSet ? 1 : 0)];
        lastVal = currentVal;
      }
    }
    return table;
  }

  function getDataItemColor(stadtteilNr) {
    var currentVal = getDataItem(stadtteilNr);
    var a = getLimits();
    var len = a.length;
    var currentNr = len - 1;
    for (var i = 0; i < len; i++) {
      if (currentVal <= a[i]) {
        currentNr = i - 1;
        break;
      }
    }
    return mapColors[currentNr];
  }

  // list all datasets for "select dataset" popup
  function showDataSelector() {
    $.each(openData, function (key, arr) {
//    $("#dataSelector").append('<div class="nextone rtext"><b>' + arr.title + '</b>
//    <button type="button" class="selector btn btn-default" data-id="'+key+'">Datensatz auswählen</button> </div><br clear="all" />');

      var select_html = '<select class="selector-d form-control input-lg"><option value=""> Auswahl </option>';

      var len = arr.headlines.length;
      for (var i = 0; i < len; i++) {
        if (!arr.headlines[i]) {
          continue;
        }
        var thiskey = key + "-" + i;
        select_html += '<option value="' + thiskey + '" ' +
          (thiskey == (currentDataSet + '-' + currentSubSet) ? "selected" : "") + '> ' + arr.headlines[i] + '</option>';
      }
      select_html += '</select>';

      $("#dataSelector").append('<div class="hover-' + key + ' row topmargin">' +
        '<div class="col-md-8">' +
        '<button type="button" data-id="' + key + '" class="selector btn ' +
        ((currentDataSet == key) ? "btn-primary" : "btn-default") + ' btn-lg btn-block">' + arr.title + '</button>' +
        '</div><div class="col-md-4">' + select_html + '</div></div>');
      if (arr.description) {
        var classname = 'show-' + key;
        $("#dataSelector").append('<div class="row hide-i ' + classname + '"><div class="col-md-12">' + arr.description + '</div></div>');
        $('.hover-' + key).hover(
          function () {
            $('.' + classname).fadeIn();
          },
          function () {
            $('.' + classname).fadeOut();
          }
        );
        $("." + classname).hide();

      }

    });
    $("#dataSelector").append('<br clear="both" />');
    $(".selector").click(function () {
      location.href = "?" + $(this).data('id');
    });
    $(".selector-d").change(function () {
      location.href = "?" + $(this).val();
    });
    console.log("selected dataset", currentDataSet, currentSubSet);
  }

  return {
    getUnit: getUnit,
    getTitle: getTitle,
    getLimits: getLimits,
    getPercent: getPercent,
    getDataSet: getDataSet,
    getDataItem: getDataItem,
    getDataTable: getDataTable,
    selectDataSet: selectDataSet,
    getDataItemColor: getDataItemColor
  };
}();

var showData = location.search.substr(1);
if (!showData) {
  $('#myModal').modal('show');
}
dataSet.selectDataSet(showData);

function getColor(i) {
  return mapColors[i];
}

var map = L.map('map').setView([51.962, 7.629], 11);

L.tileLayer(
  'http://{s}.tiles.mapbox.com/v3/tomrocket.m8l1e9gm/{z}/{x}/{y}.png', {
    maxZoom: 16,
    minZoom: 11,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  }
).addTo(map);


// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props) {
  var html = '<strong>' + dataSet.getTitle() + '</strong>';
  html = html + (props ?
    '<b>' + props.Name + '</b><br />' + dataSet.getDataItem(props.Nr) + ' ' + dataSet.getUnit() + ' ' + dataSet.getPercent(props.Nr)
    : 'Navigieren Sie über einen Stadtteil');
  this._div.innerHTML = html;
};
info.addTo(map);


var extraInfo = L.control({position: 'bottomleft'});
extraInfo.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'extras');
  this.update();
  return this._div;
};
extraInfo.update = function (props) {
  var html = '';

  console.log("props", props);
  // draw nice history/detail table
  if (props) {
    var hls = dataSet.getDataTable(props.Nr);
    var tbl = dataSet.getDataSet();
    var htitle = tbl.tableTitle || "Historie";
    html += '<div class="history">' + htitle + '</div> <table>';
    $.each(hls, function (key, value) {
      html += value[2] ? '<tr class="high">' : '<tr>';
      html += '<td>' + key + ':</td><th>' + value[0] + '</th>';
      if (tbl.extra == "showChange") {
        html += '<td class="change ' + (value[1] > 0 ? "green" : "red") + '">' + (value[1] ? (value[1] > 0 ? '+' : '') + value[1] : '') + '</td>';
      }
      html += '</tr>';
    });
    html += '</table>';
  }
  this._div.innerHTML = html;
};
extraInfo.addTo(map);

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: dataSet.getDataItemColor(feature.properties.Nr)
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
  extraInfo.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}


function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: clickUpdate
  });
}

var lastClickedLayer;

//To make it work on touch devices
function clickUpdate(e) {

  if (lastClickedLayer) {

    resetHighlight(lastClickedLayer);

    if (e.target._leaflet_id === lastClickedLayer.target._leaflet_id) {
      lastClickedLayer = undefined;
    } else {
      lastClickedLayer = e;
      highlightFeature(e);
    }

  } else {
    lastClickedLayer = e;
    highlightFeature(e);
  }

}


geojson = L.geoJson(stadtteileMuenster2, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

map.attributionControl.addAttribution('Jahresstatistiken &copy; <a href="http://www.muenster.de/stadt/stadtplanung/zahlen.html">Stadt Münster</a>');


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = dataSet.getLimits(),
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + getColor(i) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>') + '<button type="button" class="changer btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Datensatz ändern</button>';
  return div;
};

legend.addTo(map);