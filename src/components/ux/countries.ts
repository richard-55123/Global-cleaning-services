export interface CountryConfig {
    name: string
    cca2: string
    callingCode: string
    mobileNetworks: string[]
    currency: string
    minLength: number
    maxLength: number
    minInvestment: number
}

export const countries: CountryConfig[] = [
    {
        "name": "Cameroun",
        "cca2": "CM",
        "callingCode": "+237",
        "mobileNetworks": [
            "Orange Money",
            "Mtn Mobile Money"
        ],
        "currency": "XAF",
        "minLength": 8,
        "maxLength": 9,
        "minInvestment": 30000
    },
    {
        "name": "Niger",
        "cca2": "NE",
        "callingCode": "+227",
        "mobileNetworks": [
            "Airtel Money"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "République centrafricaine",
        "cca2": "CF",
        "callingCode": "+236",
        "mobileNetworks": [
            "Orange Money"
        ],
        "currency": "XAF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Tchad",
        "cca2": "TD",
        "callingCode": "+235",
        "mobileNetworks": [
            "Moov Money",
            "Airtel Money"
        ],
        "currency": "XAF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Gabon",
        "cca2": "GA",
        "callingCode": "+241",
        "mobileNetworks": [
            "Airtel Money",
            "Mobicash",
            "Moov",
            "Libertis"
        ],
        "currency": "XAF",
        "minLength": 7,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Congo Brazzaville",
        "cca2": "CG",
        "callingCode": "+242",
        "mobileNetworks": [
            "Airtel Money",
            "MTN MONEY"
        ],
        "currency": "XAF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 30000
    },
    {
        "name": "Madagascar",
        "cca2": "MG",
        "callingCode": "+261",
        "mobileNetworks": [
            "TELMA",
            "MVOLA",
            "Airtel Money",
            "ORANGE MONEY"
        ],
        "currency": "MGA",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 240000
    },
    {
        "name": "Haïti",
        "cca2": "HT",
        "callingCode": "+509",
        "mobileNetworks": [
            "NATCASH",
            "MONCASH"
        ],
        "currency": "HTG",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 5000
    },
    {
        "name": "Mali",
        "cca2": "ML",
        "callingCode": "+223",
        "mobileNetworks": [
            "ORANGE MONEY"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Burkina Faso",
        "cca2": "BF",
        "callingCode": "+226",
        "mobileNetworks": [
            "ORANGE MONEY"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Sénégal",
        "cca2": "SN",
        "callingCode": "+221",
        "mobileNetworks": [
            "WAVE MONEY",
            "ORANGE MONEY"
        ],
        "currency": "XOF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 30000
    },
    {
        "name": "Côte d'Ivoire",
        "cca2": "CI",
        "callingCode": "+225",
        "mobileNetworks": [
            "Orange Money",
            "Wave",
            "MTN MONEY",
            "Moov Money"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 10,
        "minInvestment": 30000
    },
    {
        "name": "Togo",
        "cca2": "TG",
        "callingCode": "+228",
        "mobileNetworks": [
            "MOOV",
            "Flooz",
            "T-MONEY",
            "Togocell"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Bénin",
        "cca2": "BJ",
        "callingCode": "+229",
        "mobileNetworks": [
            "MOOV MONEY",
            "MTN"
        ],
        "currency": "XOF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 30000
    },
    {
        "name": "Congo Kinshasa",
        "cca2": "CD",
        "callingCode": "+243",
        "mobileNetworks": [
            "M-PESA",
            "Airtel Money"
        ],
        "currency": "USD",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 50
    },
    {
        "name": "Tanzanie",
        "cca2": "TZ",
        "callingCode": "+255",
        "mobileNetworks": [
            "M-PESA",
            "Airtel Money"
        ],
        "currency": "TZS",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 130000
    },
    {
        "name": "Ouganda",
        "cca2": "UG",
        "callingCode": "+256",
        "mobileNetworks": [
            "Airtel Money",
            "Mobile Money"
        ],
        "currency": "UGX",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 190000
    },
    {
        "name": "Burundi",
        "cca2": "BI",
        "callingCode": "+257",
        "mobileNetworks": [
            "Lumicash"
        ],
        "currency": "BIF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 160000
    },
    {
        "name": "Guinée Équatoriale",
        "cca2": "GQ",
        "callingCode": "+240",
        "mobileNetworks": [
            "Muni Dinero",
            "Rosa Money"
        ],
        "currency": "XAF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 30000
    },
    {
        "name": "Guinée Conakry",
        "cca2": "GN",
        "callingCode": "+224",
        "mobileNetworks": [
            "Orange Money"
        ],
        "currency": "GNF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 462000
    },
    {
        "name": "Zambie",
        "cca2": "ZM",
        "callingCode": "+260",
        "mobileNetworks": [
            "MTN Mobile Money"
        ],
        "currency": "ZMW",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 1250
    },
    {
        "name": "France",
        "cca2": "FR",
        "callingCode": "+33",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Allemagne",
        "cca2": "DE",
        "callingCode": "+49",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 10,
        "maxLength": 11,
        "minInvestment": 150
    },
    {
        "name": "Espagne",
        "cca2": "ES",
        "callingCode": "+34",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Italie",
        "cca2": "IT",
        "callingCode": "+39",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Royaume-Uni",
        "cca2": "GB",
        "callingCode": "+44",
        "mobileNetworks": [
            "null"
        ],
        "currency": "GBP",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Canada",
        "cca2": "CA",
        "callingCode": "+1",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CAD",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "États-Unis",
        "cca2": "US",
        "callingCode": "+1",
        "mobileNetworks": [
            "null"
        ],
        "currency": "USD",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Brésil",
        "cca2": "BR",
        "callingCode": "+55",
        "mobileNetworks": [
            "null"
        ],
        "currency": "BRL",
        "minLength": 10,
        "maxLength": 11,
        "minInvestment": 950
    },
    {
        "name": "Argentine",
        "cca2": "AR",
        "callingCode": "+54",
        "mobileNetworks": [
            "null"
        ],
        "currency": "ARS",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 250000
    },
    {
        "name": "Chili",
        "cca2": "CL",
        "callingCode": "+56",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CLP",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 165000
    },
    {
        "name": "Mexique",
        "cca2": "MX",
        "callingCode": "+52",
        "mobileNetworks": [
            "null"
        ],
        "currency": "MXN",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 3200
    },
    {
        "name": "Japon",
        "cca2": "JP",
        "callingCode": "+81",
        "mobileNetworks": [
            "null"
        ],
        "currency": "JPY",
        "minLength": 9,
        "maxLength": 10,
        "minInvestment": 27500
    },
    {
        "name": "Chine",
        "cca2": "CN",
        "callingCode": "+86",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CNY",
        "minLength": 11,
        "maxLength": 11,
        "minInvestment": 1250
    },
    {
        "name": "Inde",
        "cca2": "IN",
        "callingCode": "+91",
        "mobileNetworks": [
            "null"
        ],
        "currency": "INR",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 15750
    },
    {
        "name": "Pakistan",
        "cca2": "PK",
        "callingCode": "+92",
        "mobileNetworks": [
            "null"
        ],
        "currency": "PKR",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 50000
    },
    {
        "name": "Bangladesh",
        "cca2": "BD",
        "callingCode": "+880",
        "mobileNetworks": [
            "null"
        ],
        "currency": "BDT",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 21500
    },
    {
        "name": "Indonésie",
        "cca2": "ID",
        "callingCode": "+62",
        "mobileNetworks": [
            "null"
        ],
        "currency": "IDR",
        "minLength": 9,
        "maxLength": 11,
        "minInvestment": 3000000
    },
    {
        "name": "Malaisie",
        "cca2": "MY",
        "callingCode": "+60",
        "mobileNetworks": [
            "null"
        ],
        "currency": "MYR",
        "minLength": 9,
        "maxLength": 10,
        "minInvestment": 750
    },
    {
        "name": "Singapour",
        "cca2": "SG",
        "callingCode": "+65",
        "mobileNetworks": [
            "null"
        ],
        "currency": "SGD",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 230
    },
    {
        "name": "Thaïlande",
        "cca2": "TH",
        "callingCode": "+66",
        "mobileNetworks": [
            "null"
        ],
        "currency": "THB",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 5600
    },
    {
        "name": "Vietnam",
        "cca2": "VN",
        "callingCode": "+84",
        "mobileNetworks": [
            "null"
        ],
        "currency": "VND",
        "minLength": 9,
        "maxLength": 10,
        "minInvestment": 4650000
    },
    {
        "name": "Philippines",
        "cca2": "PH",
        "callingCode": "+63",
        "mobileNetworks": [
            "null"
        ],
        "currency": "PHP",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 10350
    },
    {
        "name": "Australie",
        "cca2": "AU",
        "callingCode": "+61",
        "mobileNetworks": [
            "null"
        ],
        "currency": "AUD",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 265
    },
    {
        "name": "Nouvelle-Zélande",
        "cca2": "NZ",
        "callingCode": "+64",
        "mobileNetworks": [
            "null"
        ],
        "currency": "NZD",
        "minLength": 8,
        "maxLength": 9,
        "minInvestment": 305
    },
    {
        "name": "Égypte",
        "cca2": "EG",
        "callingCode": "+20",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EGP",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 11100
    },
    {
        "name": "Maroc",
        "cca2": "MA",
        "callingCode": "+212",
        "mobileNetworks": [
            "null"
        ],
        "currency": "MAD",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 2155
    },
    {
        "name": "Algérie",
        "cca2": "DZ",
        "callingCode": "+213",
        "mobileNetworks": [
            "null"
        ],
        "currency": "DZD",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 30260
    },
    {
        "name": "Tunisie",
        "cca2": "TN",
        "callingCode": "+216",
        "mobileNetworks": [
            "null"
        ],
        "currency": "TND",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 700
    },
    {
        "name": "Libye",
        "cca2": "LY",
        "callingCode": "+218",
        "mobileNetworks": [
            "null"
        ],
        "currency": "LYD",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 1270
    },
    {
        "name": "Éthiopie",
        "cca2": "ET",
        "callingCode": "+251",
        "mobileNetworks": [
            "null"
        ],
        "currency": "ETB",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 26900
    },
    {
        "name": "Kenya",
        "cca2": "KE",
        "callingCode": "+254",
        "mobileNetworks": [
            "null"
        ],
        "currency": "KES",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 22650
    },
    {
        "name": "Rwanda",
        "cca2": "RW",
        "callingCode": "+250",
        "mobileNetworks": [
            "null"
        ],
        "currency": "RWF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 253900
    },
    {
        "name": "Seychelles",
        "cca2": "SC",
        "callingCode": "+248",
        "mobileNetworks": [
            "null"
        ],
        "currency": "SCR",
        "minLength": 7,
        "maxLength": 7,
        "minInvestment": 2400
    },
    {
        "name": "Maurice",
        "cca2": "MU",
        "callingCode": "+230",
        "mobileNetworks": [
            "null"
        ],
        "currency": "MUR",
        "minLength": 7,
        "maxLength": 8,
        "minInvestment": 8100
    },
    {
        "name": "Liberia",
        "cca2": "LR",
        "callingCode": "+231",
        "mobileNetworks": [
            "null"
        ],
        "currency": "LRD",
        "minLength": 7,
        "maxLength": 8,
        "minInvestment": 21000
    },
    {
        "name": "Guinée-Bissau",
        "cca2": "GW",
        "callingCode": "+245",
        "mobileNetworks": [
            "null"
        ],
        "currency": "XOF",
        "minLength": 7,
        "maxLength": 7,
        "minInvestment": 30000
    },
    {
        "name": "Cap-Vert",
        "cca2": "CV",
        "callingCode": "+238",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CVE",
        "minLength": 7,
        "maxLength": 7,
        "minInvestment": 16650
    },
    {
        "name": "Djibouti",
        "cca2": "DJ",
        "callingCode": "+253",
        "mobileNetworks": [
            "null"
        ],
        "currency": "DJF",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 31150
    },
    {
        "name": "Oman",
        "cca2": "OM",
        "callingCode": "+968",
        "mobileNetworks": [
            "null"
        ],
        "currency": "OMR",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 67300
    },
    {
        "name": "Émirats Arabes Unis",
        "cca2": "AE",
        "callingCode": "+971",
        "mobileNetworks": [
            "null"
        ],
        "currency": "AED",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 650
    },
    {
        "name": "Arabie Saoudite",
        "cca2": "SA",
        "callingCode": "+966",
        "mobileNetworks": [
            "null"
        ],
        "currency": "SAR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 700
    },
    {
        "name": "Turquie",
        "cca2": "TR",
        "callingCode": "+90",
        "mobileNetworks": [
            "null"
        ],
        "currency": "TRY",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 7450
    },
    {
        "name": "Grèce",
        "cca2": "GR",
        "callingCode": "+30",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Portugal",
        "cca2": "PT",
        "callingCode": "+351",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Pays-Bas",
        "cca2": "NL",
        "callingCode": "+31",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Belgique",
        "cca2": "BE",
        "callingCode": "+32",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 8,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Suisse",
        "cca2": "CH",
        "callingCode": "+41",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CHF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Autriche",
        "cca2": "AT",
        "callingCode": "+43",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Pologne",
        "cca2": "PL",
        "callingCode": "+48",
        "mobileNetworks": [
            "null"
        ],
        "currency": "PLN",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 650
    },
    {
        "name": "République tchèque",
        "cca2": "CZ",
        "callingCode": "+420",
        "mobileNetworks": [
            "null"
        ],
        "currency": "CZK",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 3650
    },
    {
        "name": "Hongrie",
        "cca2": "HU",
        "callingCode": "+36",
        "mobileNetworks": [
            "null"
        ],
        "currency": "HUF",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 57350
    },
    {
        "name": "Roumanie",
        "cca2": "RO",
        "callingCode": "+40",
        "mobileNetworks": [
            "null"
        ],
        "currency": "RON",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 800
    },
    {
        "name": "Bulgarie",
        "cca2": "BG",
        "callingCode": "+359",
        "mobileNetworks": [
            "null"
        ],
        "currency": "BGN",
        "minLength": 8,
        "maxLength": 9,
        "minInvestment": 300
    },
    {
        "name": "Russie",
        "cca2": "RU",
        "callingCode": "+7",
        "mobileNetworks": [
            "null"
        ],
        "currency": "RUB",
        "minLength": 10,
        "maxLength": 10,
        "minInvestment": 14650
    },
    {
        "name": "Ukraine",
        "cca2": "UA",
        "callingCode": "+380",
        "mobileNetworks": [
            "null"
        ],
        "currency": "UAH",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 7350
    },
    {
        "name": "Biélorussie",
        "cca2": "BY",
        "callingCode": "+375",
        "mobileNetworks": [
            "null"
        ],
        "currency": "BYN",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 350
    },
    {
        "name": "Lituanie",
        "cca2": "LT",
        "callingCode": "+370",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 150
    },
    {
        "name": "Lettonie",
        "cca2": "LV",
        "callingCode": "+371",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 150
    },
    {
        "name": "Estonie",
        "cca2": "EE",
        "callingCode": "+372",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 7,
        "maxLength": 8,
        "minInvestment": 150
    },
    {
        "name": "Finlande",
        "cca2": "FI",
        "callingCode": "+358",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 10,
        "minInvestment": 150
    },
    {
        "name": "Suède",
        "cca2": "SE",
        "callingCode": "+46",
        "mobileNetworks": [
            "null"
        ],
        "currency": "SEK",
        "minLength": 7,
        "maxLength": 10,
        "minInvestment": 1650
    },
    {
        "name": "Norvège",
        "cca2": "NO",
        "callingCode": "+47",
        "mobileNetworks": [
            "null"
        ],
        "currency": "NOK",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 1800
    },
    {
        "name": "Danemark",
        "cca2": "DK",
        "callingCode": "+45",
        "mobileNetworks": [
            "null"
        ],
        "currency": "DKK",
        "minLength": 8,
        "maxLength": 8,
        "minInvestment": 1150
    },
    {
        "name": "Islande",
        "cca2": "IS",
        "callingCode": "+354",
        "mobileNetworks": [
            "null"
        ],
        "currency": "ISK",
        "minLength": 7,
        "maxLength": 7,
        "minInvestment": 22350
    },
    {
        "name": "Irlande",
        "cca2": "IE",
        "callingCode": "+353",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    },
    {
        "name": "Luxembourg",
        "cca2": "LU",
        "callingCode": "+352",
        "mobileNetworks": [
            "null"
        ],
        "currency": "EUR",
        "minLength": 9,
        "maxLength": 9,
        "minInvestment": 150
    }
]