  
  const countries = [
    
        {
          "name": "Brazil",
          "capital": "Brasília",
          "region": "Americas",
          "population": 213993437,
          "area": 8515767,
          "flag": "https://flagcdn.com/br.svg",
          "language": "Portuguese",
          "currency": "Brazilian real",
          "acronym": "MERCOSUR"
        },
        {
          "name": "Japan",
          "capital": "Tokyo",
          "region": "Asia",
          "population": 126476461,
          "area": 377973,
          "flag": "https://flagcdn.com/jp.svg",
          "language": "Japanese",
          "currency": "Japanese yen",
          "acronym": ""
        },
        {
          "name": "Germany",
          "capital": "Berlin",
          "region": "Europe",
          "population": 83783942,
          "area": 357022,
          "flag": "https://flagcdn.com/de.svg",
          "language": "German",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Egypt",
          "capital": "Cairo",
          "region": "Africa",
          "population": 102334155,
          "area": 1002450,
          "flag": "https://flagcdn.com/eg.svg",
          "language": "Arabic",
          "currency": "Egyptian pound",
          "acronym": "AU"
        },
        {
          "name": "Canada",
          "capital": "Ottawa",
          "region": "Americas",
          "population": 37742154,
          "area": 9984670,
          "flag": "https://flagcdn.com/ca.svg",
          "language": "English, French",
          "currency": "Canadian dollar",
          "acronym": ""
        },
        {
          "name": "France",
          "capital": "Paris",
          "region": "Europe",
          "population": 65273511,
          "area": 551695,
          "flag": "https://flagcdn.com/fr.svg",
          "language": "French",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "China",
          "capital": "Beijing",
          "region": "Asia",
          "population": 1439323776,
          "area": 9596961,
          "flag": "https://flagcdn.com/cn.svg",
          "language": "Mandarin",
          "currency": "Renminbi",
          "acronym": ""
        },
        {
          "name": "Australia",
          "capital": "Canberra",
          "region": "Oceania",
          "population": 25499884,
          "area": 7692024,
          "flag": "https://flagcdn.com/au.svg",
          "language": "English",
          "currency": "Australian dollar",
          "acronym": "ANZUS"
        },
        {
          "name": "India",
          "capital": "New Delhi",
          "region": "Asia",
          "population": 1380004385,
          "area": 3287263,
          "flag": "https://flagcdn.com/in.svg",
          "language": "Hindi, English",
          "currency": "Indian rupee",
          "acronym": ""
        },
        {
          "name": "Russia",
          "capital": "Moscow",
          "region": "Europe",
          "population": 145912025,
          "area": 17098242,
          "flag": "https://flagcdn.com/ru.svg",
          "language": "Russian",
          "currency": "Russian ruble",
          "acronym": "CIS"
        },
        {
          "name": "Mexico",
          "capital": "Mexico City",
          "region": "Americas",
          "population": 128932753,
          "area": 1964375,
          "flag": "https://flagcdn.com/mx.svg",
          "language": "Spanish",
          "currency": "Mexican peso",
          "acronym": ""
        },
        {
          "name": "Nigeria",
          "capital": "Abuja",
          "region": "Africa",
          "population": 206139589,
          "area": 923768,
          "flag": "https://flagcdn.com/ng.svg",
          "language": "English",
          "currency": "Nigerian naira",
          "acronym": "ECOWAS"
        },
        {
          "name": "South Africa",
          "capital": "Pretoria",
          "region": "Africa",
          "population": 59308690,
          "area": 1219090,
          "flag": "https://flagcdn.com/za.svg",
          "language": "Zulu, Xhosa, Afrikaans, English",
          "currency": "South African rand",
          "acronym": "AU"
        },
        {
          "name": "United Kingdom",
          "capital": "London",
          "region": "Europe",
          "population": 67886011,
          "area": 243610,
          "flag": "https://flagcdn.com/gb.svg",
          "language": "English",
          "currency": "Pound sterling",
          "acronym": "NATO"
        },
        {
          "name": "Italy",
          "capital": "Rome",
          "region": "Europe",
          "population": 60244639,
          "area": 301340,
          "flag": "https://flagcdn.com/it.svg",
          "language": "Italian",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Spain",
          "capital": "Madrid",
          "region": "Europe",
          "population": 46754778,
          "area": 505992,
          "flag": "https://flagcdn.com/es.svg",
          "language": "Spanish",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Argentina",
          "capital": "Buenos Aires",
          "region": "Americas",
          "population": 45195777,
          "area": 2780400,
          "flag": "https://flagcdn.com/ar.svg",
          "language": "Spanish",
          "currency": "Argentine peso",
          "acronym": ""
        },
        {
          "name": "Turkey",
          "capital": "Ankara",
          "region": "Asia",
          "population": 84339067,
          "area": 783356,
          "flag": "https://flagcdn.com/tr.svg",
          "language": "Turkish",
          "currency": "Turkish lira",
          "acronym": ""
        },
        {
          "name": "Saudi Arabia",
          "capital": "Riyadh",
          "region": "Asia",
          "population": 34813871,
          "area": 2149690,
          "flag": "https://flagcdn.com/sa.svg",
          "language": "Arabic",
          "currency": "Saudi riyal",
          "acronym": ""
        },
        {
          "name": "Indonesia",
          "capital": "Jakarta",
          "region": "Asia",
          "population": 273523615,
          "area": 1904569,
          "flag": "https://flagcdn.com/id.svg",
          "language": "Indonesian",
          "currency": "Indonesian rupiah",
          "acronym": ""
        },
        {
          "name": "Philippines",
          "capital": "Manila",
          "region": "Asia",
          "population": 109581078,
          "area": 300000,
          "flag": "https://flagcdn.com/ph.svg",
          "language": "Filipino, English",
          "currency": "Philippine peso",
          "acronym": ""
        },
        {
          "name": "Vietnam",
          "capital": "Hanoi",
          "region": "Asia",
          "population": 97338579,
          "area": 331212,
          "flag": "https://flagcdn.com/vn.svg",
          "language": "Vietnamese",
          "currency": "Vietnamese đồng",
          "acronym": ""
        },
        {
          "name": "Thailand",
          "capital": "Bangkok",
          "region": "Asia",
          "population": 69799978,
          "area": 513120,
          "flag": "https://flagcdn.com/th.svg",
          "language": "Thai",
          "currency": "Thai baht",
          "acronym": ""
        },
        {
          "name": "Pakistan",
          "capital": "Islamabad",
          "region": "Asia",
          "population": 225199937,
          "area": 881912,
          "flag": "https://flagcdn.com/pk.svg",
          "language": "Urdu, English",
          "currency": "Pakistani rupee",
          "acronym": ""
        },
        {
          "name": "Bangladesh",
          "capital": "Dhaka",
          "region": "Asia",
          "population": 166303498,
          "area": 147570,
          "flag": "https://flagcdn.com/bd.svg",
          "language": "Bengali",
          "currency": "Bangladeshi taka",
          "acronym": ""
        },
        {
          "name": "Iran",
          "capital": "Tehran",
          "region": "Asia",
          "population": 83992949,
          "area": 1648195,
          "flag": "https://flagcdn.com/ir.svg",
          "language": "Persian",
          "currency": "Iranian rial",
          "acronym": ""
        },
        {
          "name": "Iraq",
          "capital": "Baghdad",
          "region": "Asia",
          "population": 40222493,
          "area": 438317,
          "flag": "https://flagcdn.com/iq.svg",
          "language": "Arabic, Kurdish",
          "currency": "Iraqi dinar",
          "acronym": ""
        },
        {
          "name": "Sudan",
          "capital": "Khartoum",
          "region": "Africa",
          "population": 43849260,
          "area": 1861484,
          "flag": "https://flagcdn.com/sd.svg",
          "language": "Arabic, English",
          "currency": "Sudanese pound",
          "acronym": ""
        },
        {
          "name": "Ukraine",
          "capital": "Kyiv",
          "region": "Europe",
          "population": 43733762,
          "area": 603500,
          "flag": "https://flagcdn.com/ua.svg",
          "language": "Ukrainian",
          "currency": "Ukrainian hryvnia",
          "acronym": ""
        },
        {
          "name": "Colombia",
          "capital": "Bogotá",
          "region": "Americas",
          "population": 50882891,
          "area": 1141748,
          "flag": "https://flagcdn.com/co.svg",
          "language": "Spanish",
          "currency": "Colombian peso",
          "acronym": ""
        },
        {
          "name": "Kenya",
          "capital": "Nairobi",
          "region": "Africa",
          "population": 53771296,
          "area": 580367,
          "flag": "https://flagcdn.com/ke.svg",
          "language": "Swahili, English",
          "currency": "Kenyan shilling",
          "acronym": "EAC"
        },
        {
          "name": "Morocco",
          "capital": "Rabat",
          "region": "Africa",
          "population": 36910560,
          "area": 446550,
          "flag": "https://flagcdn.com/ma.svg",
          "language": "Arabic, Amazigh",
          "currency": "Moroccan dirham",
          "acronym": ""
        },
        {
          "name": "Algeria",
          "capital": "Algiers",
          "region": "Africa",
          "population": 43851044,
          "area": 2381741,
          "flag": "https://flagcdn.com/dz.svg",
          "language": "Arabic, Berber",
          "currency": "Algerian dinar",
          "acronym": "AU"
        },
        {
          "name": "Malaysia",
          "capital": "Kuala Lumpur",
          "region": "Asia",
          "population": 32365999,
          "area": 330803,
          "flag": "https://flagcdn.com/my.svg",
          "language": "Malay",
          "currency": "Malaysian ringgit",
          "acronym": ""
        },
        {
          "name": "Singapore",
          "capital": "Singapore",
          "region": "Asia",
          "population": 5850342,
          "area": 728.6,
          "flag": "https://flagcdn.com/sg.svg",
          "language": "Malay, Mandarin, Tamil, English",
          "currency": "Singapore dollar",
          "acronym": ""
        },
        {
          "name": "New Zealand",
          "capital": "Wellington",
          "region": "Oceania",
          "population": 4822233,
          "area": 268021,
          "flag": "https://flagcdn.com/nz.svg",
          "language": "English, Māori",
          "currency": "New Zealand dollar",
          "acronym": ""
        },
        {
          "name": "Chile",
          "capital": "Santiago",
          "region": "Americas",
          "population": 19116201,
          "area": 756102,
          "flag": "https://flagcdn.com/cl.svg",
          "language": "Spanish",
          "currency": "Chilean peso",
          "acronym": ""
        },
        {
          "name": "Peru",
          "capital": "Lima",
          "region": "Americas",
          "population": 32971854,
          "area": 1285216,
          "flag": "https://flagcdn.com/pe.svg",
          "language": "Spanish",
          "currency": "Peruvian sol",
          "acronym": ""
        },
        {
          "name": "Venezuela",
          "capital": "Caracas",
          "region": "Americas",
          "population": 28435943,
          "area": 916445,
          "flag": "https://flagcdn.com/ve.svg",
          "language": "Spanish",
          "currency": "Venezuelan bolívar",
          "acronym": ""
        },
        {
          "name": "Czech Republic",
          "capital": "Prague",
          "region": "Europe",
          "population": 10708981,
          "area": 78866,
          "flag": "https://flagcdn.com/cz.svg",
          "language": "Czech",
          "currency": "Czech koruna",
          "acronym": "EU"
        },
        {
          "name": "Finland",
          "capital": "Helsinki",
          "region": "Europe",
          "population": 5540720,
          "area": 338424,
          "flag": "https://flagcdn.com/fi.svg",
          "language": "Finnish, Swedish",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Norway",
          "capital": "Oslo",
          "region": "Europe",
          "population": 5421241,
          "area": 323802,
          "flag": "https://flagcdn.com/no.svg",
          "language": "Norwegian",
          "currency": "Norwegian krone",
          "acronym": ""
        },
        {
          "name": "Sweden",
          "capital": "Stockholm",
          "region": "Europe",
          "population": 10379295,
          "area": 450295,
          "flag": "https://flagcdn.com/se.svg",
          "language": "Swedish",
          "currency": "Swedish krona",
          "acronym": ""
        },
        {
          "name": "Denmark",
          "capital": "Copenhagen",
          "region": "Europe",
          "population": 5818553,
          "area": 43094,
          "flag": "https://flagcdn.com/dk.svg",
          "language": "Danish",
          "currency": "Danish krone",
          "acronym": "EU"
        },
        {
          "name": "Portugal",
          "capital": "Lisbon",
          "region": "Europe",
          "population": 10196709,
          "area": 92212,
          "flag": "https://flagcdn.com/pt.svg",
          "language": "Portuguese",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Greece",
          "capital": "Athens",
          "region": "Europe",
          "population": 10423054,
          "area": 131957,
          "flag": "https://flagcdn.com/gr.svg",
          "language": "Greek",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Hungary",
          "capital": "Budapest",
          "region": "Europe",
          "population": 9660351,
          "area": 93028,
          "flag": "https://flagcdn.com/hu.svg",
          "language": "Hungarian",
          "currency": "Hungarian forint",
          "acronym": "EU"
        },
        {
          "name": "Iceland",
          "capital": "Reykjavik",
          "region": "Europe",
          "population": 343599,
          "area": 103000,
          "flag": "https://flagcdn.com/is.svg",
          "language": "Icelandic",
          "currency": "Icelandic króna",
          "acronym": ""
        },
        {
          "name": "Lithuania",
          "capital": "Vilnius",
          "region": "Europe",
          "population": 2722289,
          "area": 65300,
          "flag": "https://flagcdn.com/lt.svg",
          "language": "Lithuanian",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Latvia",
          "capital": "Riga",
          "region": "Europe",
          "population": 1886198,
          "area": 64559,
          "flag": "https://flagcdn.com/lv.svg",
          "language": "Latvian",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Estonia",
          "capital": "Tallinn",
          "region": "Europe",
          "population": 1326535,
          "area": 45339,
          "flag": "https://flagcdn.com/ee.svg",
          "language": "Estonian",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Slovakia",
          "capital": "Bratislava",
          "region": "Europe",
          "population": 5456362,
          "area": 49035,
          "flag": "https://flagcdn.com/sk.svg",
          "language": "Slovak",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Slovenia",
          "capital": "Ljubljana",
          "region": "Europe",
          "population": 2078654,
          "area": 20273,
          "flag": "https://flagcdn.com/si.svg",
          "language": "Slovene",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Cyprus",
          "capital": "Nicosia",
          "region": "Europe",
          "population": 1207359,
          "area": 9251,
          "flag": "https://flagcdn.com/cy.svg",
          "language": "Greek, Turkish",
          "currency": "Euro",
          "acronym": "EU"
        },
        {
          "name": "Bulgaria",
          "capital": "Sofia",
          "region": "Europe",
          "population": 6951482,
          "area": 110879,
          "flag": "https://flagcdn.com/bg.svg",
          "language": "Bulgarian",
          "currency": "Bulgarian lev",
          "acronym": "EU"
        },
        {
          "name": "Romania",
          "capital": "Bucharest",
          "region": "Europe",
          "population": 19237691,
          "area": 238397,
          "flag": "https://flagcdn.com/ro.svg",
          "language": "Romanian",
          "currency": "Romanian leu",
          "acronym": "EU"
        },
        {
          "name": "Serbia",
          "capital": "Belgrade",
          "region": "Europe",
          "population": 8772235,
          "area": 77474,
          "flag": "https://flagcdn.com/rs.svg",
          "language": "Serbian",
          "currency": "Serbian dinar",
          "acronym": ""
        },
        {
          "name": "Moldova",
          "capital": "Chișinău",
          "region": "Europe",
          "population": 2657637,
          "area": 33846,
          "flag": "https://flagcdn.com/md.svg",
          "language": "Romanian",
          "currency": "Moldovan leu",
          "acronym": ""
        },
        {
          "name": "Montenegro",
          "capital": "Podgorica",
          "region": "Europe",
          "population": 622359,
          "area": 14026,
          "flag": "https://flagcdn.com/me.svg",
          "language": "Montenegrin",
          "currency": "Euro",
          "acronym": ""
        },
      
];