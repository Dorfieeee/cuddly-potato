// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Information obtained using geonames.org
// List of cities within 25km radius from Spesov

export default (req, res) => {
    
  res.status(200).json({ locations: [
  {
      "lng": "16.62928",
      "lat": "49.39479",
      "geonameId": 3065547,
      "name": "Spešov",
      "distance": "1.0003"
  },
  {
      "lng": "16.61871",
      "lat": "49.41047",
      "geonameId": 3074255,
      "name": "Jestřebí",
      "distance": "1.49655"
  },
  {
      "lng": "16.63333",
      "lat": "49.38333",
      "geonameId": 3076803,
      "name": "Dolni Lhota",
      "distance": "1.98573"
  },
  {
      "lng": "16.64497",
      "lat": "49.39393",
      "geonameId": 3067079,
      "name": "Ráječko",
      "distance": "2.13457"
  },
  {
      "lng": "16.63902",
      "lat": "49.41094",
      "geonameId": 3067080,
      "name": "Rájec-Jestřebí",
      "distance": "2.27047"
  },
  {
      "lng": "16.64667",
      "lat": "49.38274",
      "geonameId": 3070101,
      "name": "Na Familiích",
      "distance": "2.74367"
  },
  {
      "lng": "16.65071",
      "lat": "49.38381",
      "geonameId": 3075325,
      "name": "Horní Lhota",
      "distance": "2.92494"
  },
  {
      "lng": "16.5814",
      "lat": "49.41361",
      "geonameId": 3078085,
      "name": "Černá Hora",
      "distance": "3.10739"
  },
  {
      "lng": "16.59119",
      "lat": "49.42504",
      "geonameId": 3078982,
      "name": "Bořitov",
      "distance": "3.58706"
  },
  {
      "lng": "16.66918",
      "lat": "49.40706",
      "geonameId": 3073794,
      "name": "Karolín",
      "distance": "4.01616"
  },
  {
      "lng": "16.57205",
      "lat": "49.37517",
      "geonameId": 3061801,
      "name": "Závist",
      "distance": "4.01743"
  },
  {
      "lng": "16.61667",
      "lat": "49.43333",
      "geonameId": 3073645,
      "name": "Klemov",
      "distance": "4.02637"
  },
  {
      "lng": "16.64446",
      "lat": "49.36304",
      "geonameId": 3079273,
      "name": "Blansko",
      "distance": "4.31948"
  },
  {
      "lng": "16.62937",
      "lat": "49.43664",
      "geonameId": 3076531,
      "name": "Doubravice nad Svitavou",
      "distance": "4.49955"
  },
  {
      "lng": "16.6572",
      "lat": "49.42778",
      "geonameId": 3075607,
      "name": "Holešín",
      "distance": "4.53509"
  },
  {
      "lng": "16.62289",
      "lat": "49.35632",
      "geonameId": 3075496,
      "name": "Hořice",
      "distance": "4.56714"
  },
  {
      "lng": "16.54953",
      "lat": "49.39189",
      "geonameId": 3071237,
      "name": "Malá Lhota",
      "distance": "4.85866"
  },
  {
      "lng": "16.56661",
      "lat": "49.36734",
      "geonameId": 3070647,
      "name": "Milonice",
      "distance": "4.88149"
  },
  {
      "lng": "16.54547",
      "lat": "49.40693",
      "geonameId": 3061523,
      "name": "Žernovník",
      "distance": "5.23249"
  },
  {
      "lng": "16.69108",
      "lat": "49.37727",
      "geonameId": 3064322,
      "name": "Těchov",
      "distance": "5.88315"
  },
  {
      "lng": "16.60562",
      "lat": "49.45221",
      "geonameId": 3069200,
      "name": "Obora",
      "distance": "6.17163"
  },
  {
      "lng": "16.67948",
      "lat": "49.43534",
      "geonameId": 3072504,
      "name": "Kuničky",
      "distance": "6.26807"
  },
  {
      "lng": "16.69974",
      "lat": "49.41186",
      "geonameId": 3068370,
      "name": "Petrovice",
      "distance": "6.29641"
  },
  {
      "lng": "16.54086",
      "lat": "49.36857",
      "geonameId": 3063691,
      "name": "Újezd",
      "distance": "6.3119"
  },
  {
      "lng": "16.63691",
      "lat": "49.34096",
      "geonameId": 3073681,
      "name": "Klamovka",
      "distance": "6.42999"
  },
  {
      "lng": "16.65727",
      "lat": "49.34572",
      "geonameId": 3073623,
      "name": "Klepačov",
      "distance": "6.45693"
  },
  {
      "lng": "16.63691",
      "lat": "49.34022",
      "geonameId": 3069047,
      "name": "Olešná",
      "distance": "6.50923"
  },
  {
      "lng": "16.69778",
      "lat": "49.42158",
      "geonameId": 3061718,
      "name": "Žďár",
      "distance": "6.52911"
  },
  {
      "lng": "16.52596",
      "lat": "49.39617",
      "geonameId": 3071469,
      "name": "Lubě",
      "distance": "6.535"
  },
  {
      "lng": "16.53828",
      "lat": "49.4302",
      "geonameId": 3078338,
      "name": "Býkovice",
      "distance": "6.73166"
  },
  {
      "lng": "16.55065",
      "lat": "49.35359",
      "geonameId": 3072293,
      "name": "Lažany",
      "distance": "6.77968"
  },
  {
      "lng": "16.71155",
      "lat": "49.39607",
      "geonameId": 3063044,
      "name": "Veselice",
      "distance": "6.93855"
  },
  {
      "lng": "16.58382",
      "lat": "49.46026",
      "geonameId": 3072731,
      "name": "Krhov",
      "distance": "7.39829"
  },
  {
      "lng": "16.53674",
      "lat": "49.44025",
      "geonameId": 3061515,
      "name": "Žerůtky",
      "distance": "7.48681"
  },
  {
      "lng": "16.61312",
      "lat": "49.32978",
      "geonameId": 3064611,
      "name": "Svatá Kateřina",
      "distance": "7.49358"
  },
  {
      "lng": "16.5156",
      "lat": "49.41408",
      "geonameId": 3078555,
      "name": "Brťov",
      "distance": "7.52516"
  },
  {
      "lng": "16.57589",
      "lat": "49.33443",
      "geonameId": 3064466,
      "name": "Svinošice",
      "distance": "7.55654"
  },
  {
      "lng": "16.71984",
      "lat": "49.4026",
      "geonameId": 3063366,
      "name": "Vavřinec",
      "distance": "7.56351"
  },
  {
      "lng": "16.51346",
      "lat": "49.38405",
      "geonameId": 3075728,
      "name": "Hluboké",
      "distance": "7.58392"
  },
  {
      "lng": "16.59763",
      "lat": "49.32978",
      "geonameId": 3066348,
      "name": "Šebrov",
      "distance": "7.60831"
  },
  {
      "lng": "16.60713",
      "lat": "49.46535",
      "geonameId": 3074610,
      "name": "Jabloňany",
      "distance": "7.61419"
  },
  {
      "lng": "16.62485",
      "lat": "49.46605",
      "geonameId": 3072064,
      "name": "Lhota Rapotina",
      "distance": "7.6914"
  },
  {
      "lng": "16.72202",
      "lat": "49.3919",
      "geonameId": 3064749,
      "name": "Suchdol",
      "distance": "7.71986"
  },
  {
      "lng": "16.55313",
      "lat": "49.33933",
      "geonameId": 3071759,
      "name": "Lipůvka",
      "distance": "7.88433"
  },
  {
      "lng": "16.65407",
      "lat": "49.46405",
      "geonameId": 3063688,
      "name": "Újezd",
      "distance": "7.93901"
  },
  {
      "lng": "16.50857",
      "lat": "49.41345",
      "geonameId": 3074323,
      "name": "Jeneč",
      "distance": "8.00412"
  },
  {
      "lng": "16.53716",
      "lat": "49.4516",
      "geonameId": 3071302,
      "name": "Lysice",
      "distance": "8.33012"
  },
  {
      "lng": "16.67169",
      "lat": "49.33087",
      "geonameId": 3069009,
      "name": "Olomučany",
      "distance": "8.4074"
  },
  {
      "lng": "16.51618",
      "lat": "49.35787",
      "geonameId": 3066069,
      "name": "Skalička",
      "distance": "8.461"
  },
  {
      "lng": "16.5096",
      "lat": "49.42866",
      "geonameId": 3077130,
      "name": "Dlouhá Lhota",
      "distance": "8.47853"
  },
  {
      "lng": "16.70908",
      "lat": "49.3508",
      "geonameId": 3072295,
      "name": "Lažánky",
      "distance": "8.50108"
  },
  {
      "lng": "16.5194",
      "lat": "49.34459",
      "geonameId": 3069240,
      "name": "Nuzířov",
      "distance": "9.12958"
  },
  {
      "lng": "16.73953",
      "lat": "49.41479",
      "geonameId": 3065781,
      "name": "Sloup",
      "distance": "9.17927"
  },
  {
      "lng": "16.49135",
      "lat": "49.38218",
      "geonameId": 3063595,
      "name": "Unín",
      "distance": "9.19948"
  },
  {
      "lng": "16.48972",
      "lat": "49.40673",
      "geonameId": 3078411,
      "name": "Bukovice",
      "distance": "9.22592"
  },
  {
      "lng": "16.71514",
      "lat": "49.44916",
      "geonameId": 3069907,
      "name": "Němčice",
      "distance": "9.23215"
  },
  {
      "lng": "16.60358",
      "lat": "49.48115",
      "geonameId": 3066070,
      "name": "Skalice nad Svitavou",
      "distance": "9.38693"
  },
  {
      "lng": "16.54223",
      "lat": "49.46931",
      "geonameId": 3076402,
      "name": "Drnovice",
      "distance": "9.64616"
  },
  {
      "lng": "16.48285",
      "lat": "49.39032",
      "geonameId": 3066815,
      "name": "Rohozec",
      "distance": "9.69417"
  },
  {
      "lng": "16.61377",
      "lat": "49.30926",
      "geonameId": 3062524,
      "name": "Vranov",
      "distance": "9.77456"
  },
  {
      "lng": "16.49408",
      "lat": "49.35711",
      "geonameId": 3062374,
      "name": "Všechovice",
      "distance": "9.90807"
  },
  {
      "lng": "16.75188",
      "lat": "49.41053",
      "geonameId": 3065590,
      "name": "Šošůvka",
      "distance": "9.97543"
  },
  {
      "lng": "16.50378",
      "lat": "49.45005",
      "geonameId": 3072355,
      "name": "Lačnov",
      "distance": "10.04438"
  },
  {
      "lng": "16.50608",
      "lat": "49.45226",
      "geonameId": 3065212,
      "name": "Štěchov",
      "distance": "10.05781"
  },
  {
      "lng": "16.47888",
      "lat": "49.41468",
      "geonameId": 3061506,
      "name": "Zhoř",
      "distance": "10.13923"
  },
  {
      "lng": "16.61777",
      "lat": "49.4887",
      "geonameId": 3070527,
      "name": "Mladkov",
      "distance": "10.18497"
  },
  {
      "lng": "16.74673",
      "lat": "49.36379",
      "geonameId": 3062895,
      "name": "Vilémovice",
      "distance": "10.1928"
  },
  {
      "lng": "16.55789",
      "lat": "49.4815",
      "geonameId": 3062654,
      "name": "Voděrady",
      "distance": "10.28533"
  },
  {
      "lng": "16.72581",
      "lat": "49.33717",
      "geonameId": 3066608,
      "name": "Rudice",
      "distance": "10.39762"
  },
  {
      "lng": "16.65997",
      "lat": "49.48751",
      "geonameId": 3078910,
      "name": "Boskovice",
      "distance": "10.54596"
  },
  {
      "lng": "16.73178",
      "lat": "49.45539",
      "geonameId": 3071428,
      "name": "Ludíkov",
      "distance": "10.60954"
  },
  {
      "lng": "16.47453",
      "lat": "49.3725",
      "geonameId": 3076019,
      "name": "Hájek",
      "distance": "10.62932"
  },
  {
      "lng": "16.76268",
      "lat": "49.38236",
      "geonameId": 3068753,
      "name": "Ostrov u Macochy",
      "distance": "10.7764"
  },
  {
      "lng": "16.50222",
      "lat": "49.3336",
      "geonameId": 3071139,
      "name": "Malhostovice",
      "distance": "10.87236"
  },
  {
      "lng": "16.65253",
      "lat": "49.30162",
      "geonameId": 3079841,
      "name": "Adamov",
      "distance": "10.94945"
  },
  {
      "lng": "16.58841",
      "lat": "49.49483",
      "geonameId": 3066350,
      "name": "Sebranice",
      "distance": "11.04857"
  },
  {
      "lng": "16.6788",
      "lat": "49.30661",
      "geonameId": 3074062,
      "name": "Josefov",
      "distance": "11.05386"
  },
  {
      "lng": "16.71987",
      "lat": "49.47018",
      "geonameId": 3063441,
      "name": "Valchov",
      "distance": "11.08156"
  },
  {
      "lng": "16.46821",
      "lat": "49.37119",
      "geonameId": 3076038,
      "name": "Hajánky",
      "distance": "11.11003"
  },
  {
      "lng": "16.46262",
      "lat": "49.37941",
      "geonameId": 3074548,
      "name": "Jamné",
      "distance": "11.30705"
  },
  {
      "lng": "16.7",
      "lat": "49.48333",
      "geonameId": 3074902,
      "name": "Hrádkov",
      "distance": "11.35972"
  },
  {
      "lng": "16.52839",
      "lat": "49.4839",
      "geonameId": 3061751,
      "name": "Zbraslavec",
      "distance": "11.55307"
  },
  {
      "lng": "16.47526",
      "lat": "49.44698",
      "geonameId": 3072526,
      "name": "Kunčina Ves",
      "distance": "11.61738"
  },
  {
      "lng": "16.59793",
      "lat": "49.50178",
      "geonameId": 3064456,
      "name": "Svitávka",
      "distance": "11.7116"
  },
  {
      "lng": "16.76793",
      "lat": "49.36138",
      "geonameId": 3072855,
      "name": "Krasová",
      "distance": "11.72863"
  },
  {
      "lng": "16.75595",
      "lat": "49.34453",
      "geonameId": 3074360,
      "name": "Jedovnice",
      "distance": "11.72885"
  },
  {
      "lng": "16.77766",
      "lat": "49.40632",
      "geonameId": 3075579,
      "name": "Holštejn",
      "distance": "11.77954"
  },
  {
      "lng": "16.62799",
      "lat": "49.5029",
      "geonameId": 3077540,
      "name": "Chrudichromy",
      "distance": "11.7951"
  },
  {
      "lng": "16.49678",
      "lat": "49.46968",
      "geonameId": 3072056,
      "name": "Lhota u Lysic",
      "distance": "11.82592"
  },
  {
      "lng": "16.45373",
      "lat": "49.41555",
      "geonameId": 3067017,
      "name": "Rašov",
      "distance": "11.95218"
  },
  {
      "lng": "16.57874",
      "lat": "49.29144",
      "geonameId": 3072224,
      "name": "Lelekovice",
      "distance": "12.06255"
  },
  {
      "lng": "16.63073",
      "lat": "49.28707",
      "geonameId": 3063530,
      "name": "Útěchov",
      "distance": "12.28798"
  },
  {
      "lng": "16.47798",
      "lat": "49.33183",
      "geonameId": 3076470,
      "name": "Drásov",
      "distance": "12.37777"
  },
  {
      "lng": "16.45866",
      "lat": "49.44384",
      "geonameId": 3073048,
      "name": "Kozárov",
      "distance": "12.54051"
  },
  {
      "lng": "16.53144",
      "lat": "49.29852",
      "geonameId": 3072476,
      "name": "Kuřim",
      "distance": "12.57064"
  },
  {
      "lng": "16.45044",
      "lat": "49.35962",
      "geonameId": 3061566,
      "name": "Železné",
      "distance": "12.7239"
  },
  {
      "lng": "16.49073",
      "lat": "49.47883",
      "geonameId": 3072507,
      "name": "Kunice",
      "distance": "12.84799"
  },
  {
      "lng": "16.72351",
      "lat": "49.3035",
      "geonameId": 3076054,
      "name": "Habrůvka",
      "distance": "13.01883"
  },
  {
      "lng": "16.75851",
      "lat": "49.46864",
      "geonameId": 3061697,
      "name": "Žďárná",
      "distance": "13.04331"
  },
  {
      "lng": "16.46532",
      "lat": "49.46118",
      "geonameId": 3079594,
      "name": "Bedřichov",
      "distance": "13.04521"
  },
  {
      "lng": "16.73276",
      "lat": "49.48684",
      "geonameId": 3063312,
      "name": "Velenov",
      "distance": "13.08727"
  },
  {
      "lng": "16.78435",
      "lat": "49.35511",
      "geonameId": 3073098,
      "name": "Kotvrdovice",
      "distance": "13.09021"
  },
  {
      "lng": "16.58412",
      "lat": "49.51434",
      "geonameId": 3066395,
      "name": "Sasina",
      "distance": "13.23895"
  },
  {
      "lng": "16.60635",
      "lat": "49.27811",
      "geonameId": 3068892,
      "name": "Ořešín",
      "distance": "13.25594"
  },
  {
      "lng": "16.53949",
      "lat": "49.5076",
      "geonameId": 3063687,
      "name": "Újezd",
      "distance": "13.4797"
  },
  {
      "lng": "16.5654",
      "lat": "49.28008",
      "geonameId": 3077941,
      "name": "Česká",
      "distance": "13.52731"
  },
  {
      "lng": "16.42996",
      "lat": "49.38558",
      "geonameId": 3066171,
      "name": "Šerkovice",
      "distance": "13.56545"
  },
  {
      "lng": "16.71667",
      "lat": "49.5",
      "geonameId": 3062498,
      "name": "Vratíkov",
      "distance": "13.57191"
  },
  {
      "lng": "16.49606",
      "lat": "49.49199",
      "geonameId": 3064153,
      "name": "Touboř",
      "distance": "13.67225"
  },
  {
      "lng": "16.47791",
      "lat": "49.31324",
      "geonameId": 3078211,
      "name": "Čebín",
      "distance": "13.69918"
  },
  {
      "lng": "16.4363",
      "lat": "49.43561",
      "geonameId": 3064936,
      "name": "Strhaře",
      "distance": "13.7222"
  },
  {
      "lng": "16.79917",
      "lat": "49.42893",
      "geonameId": 3075028,
      "name": "Housko",
      "distance": "13.75545"
  },
  {
      "lng": "16.43125",
      "lat": "49.36699",
      "geonameId": 3071605,
      "name": "Lomnička",
      "distance": "13.82597"
  },
  {
      "lng": "16.80583",
      "lat": "49.38394",
      "geonameId": 3071771,
      "name": "Lipovec",
      "distance": "13.8609"
  },
  {
      "lng": "16.63274",
      "lat": "49.52178",
      "geonameId": 3062908,
      "name": "Vila",
      "distance": "13.91653"
  },
  {
      "lng": "16.69613",
      "lat": "49.2833",
      "geonameId": 3079721,
      "name": "Babice nad Svitavou",
      "distance": "13.93561"
  },
  {
      "lng": "16.59528",
      "lat": "49.27172",
      "geonameId": 3074351,
      "name": "Jehnice",
      "distance": "14.02835"
  },
  {
      "lng": "16.51722",
      "lat": "49.50645",
      "geonameId": 3072486,
      "name": "Kunštát",
      "distance": "14.11019"
  },
  {
      "lng": "16.61575",
      "lat": "49.52403",
      "geonameId": 3070738,
      "name": "Míchov",
      "distance": "14.11356"
  },
  {
      "lng": "16.50173",
      "lat": "49.29328",
      "geonameId": 3070322,
      "name": "Moravské Knínice",
      "distance": "14.22381"
  },
  {
      "lng": "16.58592",
      "lat": "49.52359",
      "geonameId": 3061774,
      "name": "Zboněk",
      "distance": "14.23242"
  },
  {
      "lng": "16.76238",
      "lat": "49.4828",
      "geonameId": 3064730,
      "name": "Suchý",
      "distance": "14.26541"
  },
  {
      "lng": "16.6648",
      "lat": "49.52148",
      "geonameId": 3068532,
      "name": "Pastvisko",
      "distance": "14.27493"
  },
  {
      "lng": "16.80388",
      "lat": "49.35468",
      "geonameId": 3066199,
      "name": "Senetářov",
      "distance": "14.43937"
  },
  {
      "lng": "16.64231",
      "lat": "49.52616",
      "geonameId": 3079696,
      "name": "Bačov",
      "distance": "14.47613"
  },
  {
      "lng": "16.74409",
      "lat": "49.29706",
      "geonameId": 3072618,
      "name": "Křtiny",
      "distance": "14.50989"
  },
  {
      "lng": "16.41359",
      "lat": "49.40462",
      "geonameId": 3071611,
      "name": "Lomnice",
      "distance": "14.71337"
  },
  {
      "lng": "16.49688",
      "lat": "49.50491",
      "geonameId": 3064407,
      "name": "Sychotín",
      "distance": "14.77348"
  },
  {
      "lng": "16.44217",
      "lat": "49.32786",
      "geonameId": 3074990,
      "name": "Hradčany",
      "distance": "14.79041"
  },
  {
      "lng": "16.81262",
      "lat": "49.43286",
      "geonameId": 3070371,
      "name": "Vysočany",
      "distance": "14.81169"
  },
  {
      "lng": "16.61759",
      "lat": "49.53067",
      "geonameId": 3068010,
      "name": "Podolí",
      "distance": "14.85203"
  },
  {
      "lng": "16.41167",
      "lat": "49.38678",
      "geonameId": 3066916,
      "name": "Řepka",
      "distance": "14.87652"
  },
  {
      "lng": "16.732",
      "lat": "49.5075",
      "geonameId": 3069096,
      "name": "Okrouhlá",
      "distance": "14.88116"
  },
  {
      "lng": "16.47408",
      "lat": "49.494",
      "geonameId": 3075727,
      "name": "Hluboké",
      "distance": "14.89762"
  },
  {
      "lng": "16.42438",
      "lat": "49.34872",
      "geonameId": 3064211,
      "name": "Tišnov",
      "distance": "14.92008"
  },
  {
      "lng": "16.82155",
      "lat": "49.4106",
      "geonameId": 3079681,
      "name": "Baldovec",
      "distance": "14.99535"
  },
  {
      "lng": "16.59107",
      "lat": "49.26176",
      "geonameId": 3070390,
      "name": "Mokrá Hora",
      "distance": "15.16463"
  },
  {
      "lng": "16.41387",
      "lat": "49.43273",
      "geonameId": 3064392,
      "name": "Synalov",
      "distance": "15.19049"
  },
  {
      "lng": "16.54262",
      "lat": "49.5253",
      "geonameId": 3069231,
      "name": "Nýrov",
      "distance": "15.21396"
  },
  {
      "lng": "16.56549",
      "lat": "49.26422",
      "geonameId": 3074613,
      "name": "Ivanovice u Brna",
      "distance": "15.23073"
  },
  {
      "lng": "16.66852",
      "lat": "49.5299",
      "geonameId": 3064718,
      "name": "Sudice",
      "distance": "15.24961"
  },
  {
      "lng": "16.58333",
      "lat": "49.53333",
      "geonameId": 3073610,
      "name": "Klevetov",
      "distance": "15.33169"
  },
  {
      "lng": "16.8",
      "lat": "49.46667",
      "geonameId": 3066013,
      "name": "Sklená Huť",
      "distance": "15.42678"
  },
  {
      "lng": "16.42158",
      "lat": "49.45619",
      "geonameId": 3068840,
      "name": "Osiky",
      "distance": "15.55712"
  },
  {
      "lng": "16.42575",
      "lat": "49.46238",
      "geonameId": 3078549,
      "name": "Brumov",
      "distance": "15.59105"
  },
  {
      "lng": "16.44667",
      "lat": "49.31076",
      "geonameId": 3066181,
      "name": "Sentice",
      "distance": "15.60678"
  },
  {
      "lng": "16.5134",
      "lat": "49.52058",
      "geonameId": 3066603,
      "name": "Rudka",
      "distance": "15.61479"
  },
  {
      "lng": "16.39984",
      "lat": "49.39321",
      "geonameId": 3078542,
      "name": "Brusná",
      "distance": "15.69567"
  },
  {
      "lng": "16.52756",
      "lat": "49.26792",
      "geonameId": 3074167,
      "name": "Jinačovice",
      "distance": "15.74254"
  },
  {
      "lng": "16.68869",
      "lat": "49.53119",
      "geonameId": 3063357,
      "name": "Vážany",
      "distance": "15.81399"
  },
  {
      "lng": "16.7732",
      "lat": "49.29737",
      "geonameId": 3078404,
      "name": "Bukovina",
      "distance": "15.92573"
  },
  {
      "lng": "16.82987",
      "lat": "49.36453",
      "geonameId": 3072908,
      "name": "Krásensko",
      "distance": "15.94882"
  },
  {
      "lng": "16.62086",
      "lat": "49.25363",
      "geonameId": 3065647,
      "name": "Soběšice",
      "distance": "15.96348"
  },
  {
      "lng": "16.75",
      "lat": "49.28333",
      "geonameId": 3067446,
      "name": "Proseč",
      "distance": "15.97016"
  },
  {
      "lng": "16.83643",
      "lat": "49.39059",
      "geonameId": 3071030,
      "name": "Marianín",
      "distance": "16.01953"
  },
  {
      "lng": "16.56146",
      "lat": "49.53674",
      "geonameId": 3072057,
      "name": "Lhota u Letovic",
      "distance": "16.02186"
  },
  {
      "lng": "16.62858",
      "lat": "49.54103",
      "geonameId": 3062841,
      "name": "Vísky",
      "distance": "16.02992"
  },
  {
      "lng": "16.74952",
      "lat": "49.2816",
      "geonameId": 3078709,
      "name": "Březina",
      "distance": "16.10241"
  },
  {
      "lng": "16.40241",
      "lat": "49.35253",
      "geonameId": 3067631,
      "name": "Předklášteří",
      "distance": "16.28374"
  },
  {
      "lng": "16.84035",
      "lat": "49.3977",
      "geonameId": 3066641,
      "name": "Rozstání",
      "distance": "16.28678"
  },
  {
      "lng": "16.58146",
      "lat": "49.25212",
      "geonameId": 3066965,
      "name": "Řečkovice",
      "distance": "16.32182"
  },
  {
      "lng": "16.39423",
      "lat": "49.42559",
      "geonameId": 3069161,
      "name": "Ochoz u Tišnova",
      "distance": "16.39979"
  },
  {
      "lng": "16.42142",
      "lat": "49.32124",
      "geonameId": 3078707,
      "name": "Březina",
      "distance": "16.46249"
  },
  {
      "lng": "16.71452",
      "lat": "49.26371",
      "geonameId": 3073877,
      "name": "Kanice",
      "distance": "16.47749"
  },
  {
      "lng": "16.69394",
      "lat": "49.25746",
      "geonameId": 3066872,
      "name": "Řícmanice",
      "distance": "16.53492"
  },
  {
      "lng": "16.38817",
      "lat": "49.40427",
      "geonameId": 3063052,
      "name": "Veselí",
      "distance": "16.55416"
  },
  {
      "lng": "16.48369",
      "lat": "49.51915",
      "geonameId": 3071265,
      "name": "Makov",
      "distance": "16.61741"
  },
  {
      "lng": "16.45872",
      "lat": "49.28849",
      "geonameId": 3077531,
      "name": "Chudčice",
      "distance": "16.63068"
  },
  {
      "lng": "16.5303",
      "lat": "49.5368",
      "geonameId": 3074431,
      "name": "Jasinov",
      "distance": "16.72847"
  },
  {
      "lng": "16.54627",
      "lat": "49.54058",
      "geonameId": 3062138,
      "name": "Zábludov",
      "distance": "16.73529"
  },
  {
      "lng": "16.44153",
      "lat": "49.49594",
      "geonameId": 3064351,
      "name": "Tasovice",
      "distance": "16.7571"
  },
  {
      "lng": "16.77059",
      "lat": "49.50943",
      "geonameId": 3079509,
      "name": "Benešov",
      "distance": "16.78291"
  },
  {
      "lng": "16.38758",
      "lat": "49.37295",
      "geonameId": 3065176,
      "name": "Štěpánovice",
      "distance": "16.79986"
  },
  {
      "lng": "16.83321",
      "lat": "49.34472",
      "geonameId": 3067994,
      "name": "Podomí",
      "distance": "16.81957"
  },
  {
      "lng": "16.69502",
      "lat": "49.53959",
      "geonameId": 3073511,
      "name": "Knínice u Boskovic",
      "distance": "16.84794"
  },
  {
      "lng": "16.84681",
      "lat": "49.37932",
      "geonameId": 3072545,
      "name": "Kulířov",
      "distance": "16.87526"
  },
  {
      "lng": "16.57357",
      "lat": "49.54709",
      "geonameId": 3072130,
      "name": "Letovice",
      "distance": "16.95883"
  },
  {
      "lng": "16.42291",
      "lat": "49.48353",
      "geonameId": 3078020,
      "name": "Černovice",
      "distance": "16.98199"
  },
  {
      "lng": "16.64449",
      "lat": "49.54946",
      "geonameId": 3068617,
      "name": "Pamětice",
      "distance": "17.06758"
  },
  {
      "lng": "16.67247",
      "lat": "49.24708",
      "geonameId": 3079332,
      "name": "Bílovice nad Svitavou",
      "distance": "17.18646"
  },
  {
      "lng": "16.38313",
      "lat": "49.43394",
      "geonameId": 3079547,
      "name": "Běleč",
      "distance": "17.38443"
  },
  {
      "lng": "16.55193",
      "lat": "49.54782",
      "geonameId": 3073536,
      "name": "Kněževísko",
      "distance": "17.39047"
  },
  {
      "lng": "16.60712",
      "lat": "49.55467",
      "geonameId": 3073696,
      "name": "Kladoruby",
      "distance": "17.53306"
  },
  {
      "lng": "16.41279",
      "lat": "49.31136",
      "geonameId": 3075839,
      "name": "Heroltice",
      "distance": "17.57596"
  },
  {
      "lng": "16.60822",
      "lat": "49.55512",
      "geonameId": 3064133,
      "name": "Trávník",
      "distance": "17.57968"
  },
  {
      "lng": "16.50993",
      "lat": "49.25464",
      "geonameId": 3066678,
      "name": "Rozdrojovice",
      "distance": "17.62271"
  },
  {
      "lng": "16.78643",
      "lat": "49.5106",
      "geonameId": 3068512,
      "name": "Pavlov",
      "distance": "17.66299"
  },
  {
      "lng": "16.71881",
      "lat": "49.54167",
      "geonameId": 3073858,
      "name": "Kapouňata",
      "distance": "17.71926"
  },
  {
      "lng": "16.48959",
      "lat": "49.53367",
      "geonameId": 3068382,
      "name": "Petrov",
      "distance": "17.73526"
  },
  {
      "lng": "16.57082",
      "lat": "49.24002",
      "geonameId": 3070893,
      "name": "Medlánky",
      "distance": "17.77958"
  },
  {
      "lng": "16.75394",
      "lat": "49.53032",
      "geonameId": 3073244,
      "name": "Kořenec",
      "distance": "17.8727"
  },
  {
      "lng": "16.80943",
      "lat": "49.29737",
      "geonameId": 3078390,
      "name": "Bukovinka",
      "distance": "17.90782"
  },
  {
      "lng": "16.85181",
      "lat": "49.44522",
      "geonameId": 3069745,
      "name": "Niva",
      "distance": "17.92613"
  },
  {
      "lng": "16.46303",
      "lat": "49.5244",
      "geonameId": 3066646,
      "name": "Rozseč nad Kunštátem",
      "distance": "17.9804"
  },
  {
      "lng": "16.37762",
      "lat": "49.4419",
      "geonameId": 3072755,
      "name": "Křeptov",
      "distance": "17.99638"
  },
  {
      "lng": "16.58904",
      "lat": "49.55882",
      "geonameId": 3064106,
      "name": "Třebětín",
      "distance": "18.08772"
  },
  {
      "lng": "16.73733",
      "lat": "49.25447",
      "geonameId": 3069167,
      "name": "Ochoz u Brna",
      "distance": "18.15345"
  },
  {
      "lng": "16.39386",
      "lat": "49.32159",
      "geonameId": 3062635,
      "name": "Vohančice",
      "distance": "18.19205"
  },
  {
      "lng": "16.71162",
      "lat": "49.54862",
      "geonameId": 3066355,
      "name": "Šebetov",
      "distance": "18.21846"
  },
  {
      "lng": "16.36393",
      "lat": "49.40036",
      "geonameId": 3068015,
      "name": "Podolí",
      "distance": "18.29857"
  },
  {
      "lng": "16.38333",
      "lat": "49.33333",
      "geonameId": 3061521,
      "name": "Žernůvka",
      "distance": "18.3275"
  },
  {
      "lng": "16.36845",
      "lat": "49.36227",
      "geonameId": 3064953,
      "name": "Střemchoví",
      "distance": "18.38742"
  },
  {
      "lng": "16.73735",
      "lat": "49.54241",
      "geonameId": 3070075,
      "name": "Na Karlově",
      "distance": "18.39758"
  },
  {
      "lng": "16.64798",
      "lat": "49.2329",
      "geonameId": 3069184,
      "name": "Obřany",
      "distance": "18.41291"
  },
  {
      "lng": "16.37649",
      "lat": "49.34215",
      "geonameId": 3069926,
      "name": "Nelepeč",
      "distance": "18.43728"
  },
  {
      "lng": "16.36111",
      "lat": "49.40082",
      "geonameId": 3079034,
      "name": "Borač",
      "distance": "18.50412"
  },
  {
      "lng": "16.36298",
      "lat": "49.37667",
      "geonameId": 3062007,
      "name": "Zahrada",
      "distance": "18.50902"
  },
  {
      "lng": "16.83594",
      "lat": "49.48351",
      "geonameId": 3067398,
      "name": "Protivanov",
      "distance": "18.62222"
  },
  {
      "lng": "16.57807",
      "lat": "49.56285",
      "geonameId": 3075924,
      "name": "Havírna",
      "distance": "18.63437"
  },
  {
      "lng": "16.52475",
      "lat": "49.55404",
      "geonameId": 3062515,
      "name": "Vranová",
      "distance": "18.66157"
  },
  {
      "lng": "16.85139",
      "lat": "49.32865",
      "geonameId": 3066574,
      "name": "Ruprechtov",
      "distance": "18.71937"
  },
  {
      "lng": "16.61201",
      "lat": "49.56553",
      "geonameId": 3073450,
      "name": "Kochov",
      "distance": "18.73097"
  },
  {
      "lng": "16.43686",
      "lat": "49.27591",
      "geonameId": 3062965,
      "name": "Veverská Bítýška",
      "distance": "18.74063"
  },
  {
      "lng": "16.87168",
      "lat": "49.42118",
      "geonameId": 3068711,
      "name": "Otinoves",
      "distance": "18.74788"
  },
  {
      "lng": "16.65",
      "lat": "49.56536",
      "geonameId": 3076378,
      "name": "Drvalovice",
      "distance": "18.87165"
  },
  {
      "lng": "16.41027",
      "lat": "49.50118",
      "geonameId": 3075653,
      "name": "Hodonín",
      "distance": "18.87864"
  },
  {
      "lng": "16.49168",
      "lat": "49.5466",
      "geonameId": 3064689,
      "name": "Sulíkov",
      "distance": "18.90749"
  },
  {
      "lng": "16.36311",
      "lat": "49.44034",
      "geonameId": 3072670,
      "name": "Křížovice",
      "distance": "18.9663"
  },
  {
      "lng": "16.48333",
      "lat": "49.25",
      "geonameId": 3069202,
      "name": "Obora",
      "distance": "18.99343"
  },
  {
      "lng": "16.52739",
      "lat": "49.23604",
      "geonameId": 3073510,
      "name": "Kníničky",
      "distance": "19.03898"
  },
  {
      "lng": "16.62583",
      "lat": "49.22589",
      "geonameId": 6639703,
      "name": "Lesná",
      "distance": "19.05799"
  },
  {
      "lng": "16.87883",
      "lat": "49.39407",
      "geonameId": 3069137,
      "name": "Odrůvky",
      "distance": "19.08374"
  },
  {
      "lng": "16.35871",
      "lat": "49.36099",
      "geonameId": 3076780,
      "name": "Dolní Loućky",
      "distance": "19.10921"
  },
  {
      "lng": "16.58987",
      "lat": "49.22522",
      "geonameId": 3072934,
      "name": "Královo Pole",
      "distance": "19.21334"
  },
  {
      "lng": "16.66621",
      "lat": "49.56728",
      "geonameId": 3063395,
      "name": "Vanovice",
      "distance": "19.27033"
  },
  {
      "lng": "16.55605",
      "lat": "49.56609",
      "geonameId": 3070765,
      "name": "Meziříčko",
      "distance": "19.2859"
  },
  {
      "lng": "16.3516",
      "lat": "49.37932",
      "geonameId": 3073967,
      "name": "Kaly",
      "distance": "19.29608"
  },
  {
      "lng": "16.35269",
      "lat": "49.42411",
      "geonameId": 3076525,
      "name": "Doubravník",
      "distance": "19.34014"
  },
  {
      "lng": "16.88103",
      "lat": "49.37559",
      "geonameId": 3064790,
      "name": "Studnice",
      "distance": "19.3922"
  },
  {
      "lng": "16.37794",
      "lat": "49.31496",
      "geonameId": 3068472,
      "name": "Pejškov",
      "distance": "19.55969"
  },
  {
      "lng": "16.65819",
      "lat": "49.22219",
      "geonameId": 3071116,
      "name": "Maloměřice",
      "distance": "19.69664"
  },
  {
      "lng": "16.36575",
      "lat": "49.32886",
      "geonameId": 3077356,
      "name": "Čížky",
      "distance": "19.69869"
  },
  {
      "lng": "16.52339",
      "lat": "49.56381",
      "geonameId": 3072275,
      "name": "Lazinov",
      "distance": "19.71483"
  },
  {
      "lng": "16.35914",
      "lat": "49.45732",
      "geonameId": 3065985,
      "name": "Skorotice",
      "distance": "19.79781"
  },
  {
      "lng": "16.40671",
      "lat": "49.28241",
      "geonameId": 3075623,
      "name": "Holasice",
      "distance": "19.85141"
  },
  {
      "lng": "16.43104",
      "lat": "49.52917",
      "geonameId": 3071526,
      "name": "Louka",
      "distance": "19.88381"
  },
  {
      "lng": "16.82913",
      "lat": "49.50974",
      "geonameId": 3078438,
      "name": "Buková",
      "distance": "19.89183"
  },
  {
      "lng": "16.5303",
      "lat": "49.22645",
      "geonameId": 3078308,
      "name": "Bystrc",
      "distance": "19.97829"
  },
  {
      "lng": "16.57202",
      "lat": "49.57566",
      "geonameId": 3065869,
      "name": "Slatinka",
      "distance": "20.10936"
  },
  {
      "lng": "16.35598",
      "lat": "49.33474",
      "geonameId": 3063538,
      "name": "Úsuší",
      "distance": "20.11883"
  },
  {
      "lng": "16.36203",
      "lat": "49.47012",
      "geonameId": 3077825,
      "name": "Chlébské",
      "distance": "20.12936"
  },
  {
      "lng": "16.5044",
      "lat": "49.5631",
      "geonameId": 3072737,
      "name": "Křetín",
      "distance": "20.15236"
  },
  {
      "lng": "16.71819",
      "lat": "49.56586",
      "geonameId": 3064516,
      "name": "Světlá",
      "distance": "20.17441"
  },
  {
      "lng": "16.34139",
      "lat": "49.36681",
      "geonameId": 3075304,
      "name": "Horní Loučky",
      "distance": "20.22097"
  },
  {
      "lng": "16.72072",
      "lat": "49.56571",
      "geonameId": 3067478,
      "name": "Přívěsť",
      "distance": "20.22757"
  },
  {
      "lng": "16.55236",
      "lat": "49.21967",
      "geonameId": 3073332,
      "name": "Komín",
      "distance": "20.27144"
  },
  {
      "lng": "16.34618",
      "lat": "49.44531",
      "geonameId": 3078010,
      "name": "Černvír",
      "distance": "20.29468"
  },
  {
      "lng": "16.87499",
      "lat": "49.46667",
      "geonameId": 3066921,
      "name": "Repechy",
      "distance": "20.31763"
  },
  {
      "lng": "16.45",
      "lat": "49.25",
      "geonameId": 3069344,
      "name": "Nový Dvůr",
      "distance": "20.33114"
  },
  {
      "lng": "16.46698",
      "lat": "49.55228",
      "geonameId": 3066644,
      "name": "Rozsíčka",
      "distance": "20.3557"
  },
  {
      "lng": "16.33476",
      "lat": "49.39441",
      "geonameId": 3074682,
      "name": "Husle",
      "distance": "20.41594"
  },
  {
      "lng": "16.60257",
      "lat": "49.21373",
      "geonameId": 6639861,
      "name": "Ponava",
      "distance": "20.42074"
  },
  {
      "lng": "16.55931",
      "lat": "49.57766",
      "geonameId": 3078965,
      "name": "Borová",
      "distance": "20.49378"
  },
  {
      "lng": "16.33381",
      "lat": "49.41524",
      "geonameId": 3071042,
      "name": "Maňová",
      "distance": "20.57716"
  },
  {
      "lng": "16.57253",
      "lat": "49.21395",
      "geonameId": 3062119,
      "name": "Žabovřesky",
      "distance": "20.61606"
  },
  {
      "lng": "16.54936",
      "lat": "49.57773",
      "geonameId": 3065974,
      "name": "Skrchov",
      "distance": "20.65776"
  },
  {
      "lng": "16.59639",
      "lat": "49.58262",
      "geonameId": 3069409,
      "name": "Novičí",
      "distance": "20.67795"
  },
  {
      "lng": "16.6309",
      "lat": "49.21132",
      "geonameId": 3074681,
      "name": "Husovice",
      "distance": "20.69406"
  },
  {
      "lng": "16.61667",
      "lat": "49.58333",
      "geonameId": 3075464,
      "name": "Horky",
      "distance": "20.70906"
  },
  {
      "lng": "16.90194",
      "lat": "49.40881",
      "geonameId": 3069446,
      "name": "Nové Sady",
      "distance": "20.79552"
  },
  {
      "lng": "16.89738",
      "lat": "49.43326",
      "geonameId": 3076505,
      "name": "Drahany",
      "distance": "20.81063"
  },
  {
      "lng": "16.75552",
      "lat": "49.56096",
      "geonameId": 3067958,
      "name": "Pohora",
      "distance": "20.83913"
  },
  {
      "lng": "16.33726",
      "lat": "49.35178",
      "geonameId": 3077448,
      "name": "Chytálky",
      "distance": "20.85992"
  },
  {
      "lng": "16.67148",
      "lat": "49.58135",
      "geonameId": 3078968,
      "name": "Borotín",
      "distance": "20.87909"
  },
  {
      "lng": "16.88974",
      "lat": "49.45511",
      "geonameId": 3078888,
      "name": "Bousín",
      "distance": "20.88071"
  },
  {
      "lng": "16.61631",
      "lat": "49.20902",
      "geonameId": 6639862,
      "name": "Černá Pole",
      "distance": "20.92129"
  },
  {
      "lng": "16.43472",
      "lat": "49.54501",
      "geonameId": 3077344,
      "name": "Crhov",
      "distance": "21.04966"
  },
  {
      "lng": "16.3256",
      "lat": "49.40632",
      "geonameId": 3068418,
      "name": "Pernštejnské Jestřabí",
      "distance": "21.10044"
  },
  {
      "lng": "16.79078",
      "lat": "49.54901",
      "geonameId": 3075193,
      "name": "Horní Štěpánov",
      "distance": "21.11422"
  },
  {
      "lng": "16.38734",
      "lat": "49.27917",
      "geonameId": 3072296,
      "name": "Lažánky",
      "distance": "21.17107"
  },
  {
      "lng": "16.43181",
      "lat": "49.54574",
      "geonameId": 12123379,
      "name": "Chrov",
      "distance": "21.24491"
  },
  {
      "lng": "16.3569",
      "lat": "49.48678",
      "geonameId": 3075424,
      "name": "Horní Čepí",
      "distance": "21.27057"
  },
  {
      "lng": "16.49755",
      "lat": "49.57217",
      "geonameId": 3067407,
      "name": "Prostřední Poříčí",
      "distance": "21.27476"
  },
  {
      "lng": "16.77655",
      "lat": "49.23654",
      "geonameId": 3075081,
      "name": "Hostěnice",
      "distance": "21.33734"
  },
  {
      "lng": "16.4931",
      "lat": "49.57155",
      "geonameId": 3076727,
      "name": "Dolní Poříčí",
      "distance": "21.34374"
  },
  {
      "lng": "16.3219",
      "lat": "49.39429",
      "geonameId": 3074183,
      "name": "Jilmoví",
      "distance": "21.34942"
  },
  {
      "lng": "16.34644",
      "lat": "49.32036",
      "geonameId": 3077255,
      "name": "Deblín",
      "distance": "21.36149"
  },
  {
      "lng": "16.32571",
      "lat": "49.36512",
      "geonameId": 3063692,
      "name": "Újezd",
      "distance": "21.37555"
  },
  {
      "lng": "16.74969",
      "lat": "49.22589",
      "geonameId": 3075534,
      "name": "Mokrá Horákov",
      "distance": "21.38274"
  },
  {
      "lng": "16.34762",
      "lat": "49.47773",
      "geonameId": 3076904,
      "name": "Dolní Čepí",
      "distance": "21.42864"
  },
  {
      "lng": "16.55279",
      "lat": "49.20885",
      "geonameId": 3074042,
      "name": "Jundrov",
      "distance": "21.43828"
  },
  {
      "lng": "16.66317",
      "lat": "49.20655",
      "geonameId": 6694695,
      "name": "Vinohrady",
      "distance": "21.47176"
  },
  {
      "lng": "16.33406",
      "lat": "49.45702",
      "geonameId": 3069952,
      "name": "Nedvědice",
      "distance": "21.5087"
  },
  {
      "lng": "16.39484",
      "lat": "49.5263",
      "geonameId": 3067429,
      "name": "Prosetín",
      "distance": "21.52572"
  },
  {
      "lng": "16.57991",
      "lat": "49.5894",
      "geonameId": 3079707,
      "name": "Babolky",
      "distance": "21.54326"
  },
  {
      "lng": "16.72125",
      "lat": "49.57879",
      "geonameId": 3077869,
      "name": "Cetkovice",
      "distance": "21.59493"
  },
  {
      "lng": "16.59794",
      "lat": "49.20296",
      "geonameId": 6639863,
      "name": "Veveří",
      "distance": "21.63464"
  },
  {
      "lng": "16.61682",
      "lat": "49.5918",
      "geonameId": 3064634,
      "name": "Svárov",
      "distance": "21.65043"
  },
  {
      "lng": "16.46291",
      "lat": "49.56493",
      "geonameId": 3063540,
      "name": "Ústup",
      "distance": "21.70933"
  },
  {
      "lng": "16.42519",
      "lat": "49.2469",
      "geonameId": 3074640,
      "name": "Hvozdec",
      "distance": "21.71487"
  },
  {
      "lng": "16.87658",
      "lat": "49.49331",
      "geonameId": 3071183,
      "name": "Malé Hradisko",
      "distance": "21.71584"
  },
  {
      "lng": "16.41927",
      "lat": "49.54499",
      "geonameId": 3072623,
      "name": "Křtěnov",
      "distance": "21.76423"
  },
  {
      "lng": "16.52953",
      "lat": "49.5849",
      "geonameId": 3062678,
      "name": "Vlkov",
      "distance": "21.80192"
  },
  {
      "lng": "16.38512",
      "lat": "49.52321",
      "geonameId": 3077330,
      "name": "Čtyři Dvory",
      "distance": "21.83407"
  },
  {
      "lng": "16.57991",
      "lat": "49.20167",
      "geonameId": 6639903,
      "name": "Stránice",
      "distance": "21.89594"
  },
  {
      "lng": "16.69484",
      "lat": "49.20711",
      "geonameId": 3071748,
      "name": "Líšeň",
      "distance": "21.89779"
  },
  {
      "lng": "16.72536",
      "lat": "49.58119",
      "geonameId": 3078588,
      "name": "Brodek",
      "distance": "21.95131"
  },
  {
      "lng": "16.5564",
      "lat": "49.5908",
      "geonameId": 3076682,
      "name": "Dolní Smržov",
      "distance": "21.9672"
  },
  {
      "lng": "16.67678",
      "lat": "49.59083",
      "geonameId": 3076261,
      "name": "Dvořiště",
      "distance": "21.98832"
  },
  {
      "lng": "16.62197",
      "lat": "49.19932",
      "geonameId": 6639860,
      "name": "Zábrdovice",
      "distance": "22.00455"
  },
  {
      "lng": "16.3156",
      "lat": "49.42711",
      "geonameId": 3067058,
      "name": "Rakove",
      "distance": "22.051"
  },
  {
      "lng": "16.31214",
      "lat": "49.3844",
      "geonameId": 3078892,
      "name": "Boudy",
      "distance": "22.10366"
  },
  {
      "lng": "16.54381",
      "lat": "49.59059",
      "geonameId": 3065971,
      "name": "Skřib",
      "distance": "22.14218"
  },
  {
      "lng": "16.31068",
      "lat": "49.39356",
      "geonameId": 3065948,
      "name": "Skryje",
      "distance": "22.16506"
  },
  {
      "lng": "16.56667",
      "lat": "49.2",
      "geonameId": 3073895,
      "name": "Kamenný Mlýn",
      "distance": "22.21569"
  },
  {
      "lng": "16.31667",
      "lat": "49.43976",
      "geonameId": 3071038,
      "name": "Mansberk",
      "distance": "22.22843"
  },
  {
      "lng": "16.74728",
      "lat": "49.21659",
      "geonameId": 6694696,
      "name": "Horákova Lhota",
      "distance": "22.23426"
  },
  {
      "lng": "16.31017",
      "lat": "49.41017",
      "geonameId": 3071704,
      "name": "Litava",
      "distance": "22.2423"
  },
  {
      "lng": "16.6587",
      "lat": "49.59642",
      "geonameId": 3063237,
      "name": "Velká Roudka",
      "distance": "22.37953"
  },
  {
      "lng": "16.64738",
      "lat": "49.19654",
      "geonameId": 3061473,
      "name": "Židenice",
      "distance": "22.42558"
  },
  {
      "lng": "16.80084",
      "lat": "49.55896",
      "geonameId": 3069444,
      "name": "Nové Sady",
      "distance": "22.43679"
  },
  {
      "lng": "16.56643",
      "lat": "49.59631",
      "geonameId": 3079691,
      "name": "Bahna",
      "distance": "22.44145"
  },
  {
      "lng": "16.60796",
      "lat": "49.19522",
      "geonameId": 3078610,
      "name": "Brno",
      "distance": "22.46315"
  },
  {
      "lng": "16.59346",
      "lat": "49.59881",
      "geonameId": 3077779,
      "name": "Chlum",
      "distance": "22.48963"
  },
  {
      "lng": "16.35975",
      "lat": "49.28368",
      "geonameId": 3070988,
      "name": "Maršov",
      "distance": "22.49303"
  },
  {
      "lng": "16.57511",
      "lat": "49.19606",
      "geonameId": 6639902,
      "name": "Pisárky",
      "distance": "22.55874"
  },
  {
      "lng": "16.33155",
      "lat": "49.47929",
      "geonameId": 3073784,
      "name": "Kasany",
      "distance": "22.56201"
  },
  {
      "lng": "16.3058",
      "lat": "49.41586",
      "geonameId": 3073580,
      "name": "Klokočí",
      "distance": "22.60718"
  },
  {
      "lng": "16.31393",
      "lat": "49.34658",
      "geonameId": 3072473,
      "name": "Kuřimské Jestřabí",
      "distance": "22.64577"
  },
  {
      "lng": "16.60712",
      "lat": "49.19343",
      "geonameId": 6694367,
      "name": "Brno střed",
      "distance": "22.66434"
  },
  {
      "lng": "16.30926",
      "lat": "49.4361",
      "geonameId": 3066248,
      "name": "Sejřek",
      "distance": "22.67347"
  },
  {
      "lng": "16.34566",
      "lat": "49.29437",
      "geonameId": 3078832,
      "name": "Braniškov",
      "distance": "22.72562"
  },
  {
      "lng": "16.42169",
      "lat": "49.55755",
      "geonameId": 3069029,
      "name": "Olešnice",
      "distance": "22.7284"
  },
  {
      "lng": "16.3134",
      "lat": "49.45084",
      "geonameId": 3068420,
      "name": "Pernštejn",
      "distance": "22.74978"
  },
  {
      "lng": "16.3057",
      "lat": "49.36439",
      "geonameId": 3066867,
      "name": "Řikonín",
      "distance": "22.82225"
  },
  {
      "lng": "16.64447",
      "lat": "49.60168",
      "geonameId": 3071226,
      "name": "Malá Roudka",
      "distance": "22.84314"
  },
  {
      "lng": "16.86178",
      "lat": "49.52597",
      "geonameId": 3071777,
      "name": "Lipová",
      "distance": "22.86564"
  },
  {
      "lng": "16.89253",
      "lat": "49.29797",
      "geonameId": 3074219,
      "name": "Ježkovice",
      "distance": "22.92175"
  },
  {
      "lng": "16.87174",
      "lat": "49.27632",
      "geonameId": 3067276,
      "name": "Račice",
      "distance": "22.93594"
  },
  {
      "lng": "16.31361",
      "lat": "49.3358",
      "geonameId": 3079290,
      "name": "Blahoňov",
      "distance": "22.99706"
  },
  {
      "lng": "16.33108",
      "lat": "49.48836",
      "geonameId": 3063699,
      "name": "Ujčov",
      "distance": "23.01765"
  },
  {
      "lng": "16.91534",
      "lat": "49.32904",
      "geonameId": 3066493,
      "name": "Rychtářov",
      "distance": "23.02627"
  },
  {
      "lng": "16.83286",
      "lat": "49.54869",
      "geonameId": 3078585,
      "name": "Brodek u Konice",
      "distance": "23.0483"
  },
  {
      "lng": "16.4879",
      "lat": "49.20706",
      "geonameId": 3061633,
      "name": "Žebětín",
      "distance": "23.10069"
  },
  {
      "lng": "16.39072",
      "lat": "49.54481",
      "geonameId": 3072055,
      "name": "Lhota u Olešnice",
      "distance": "23.15827"
  },
  {
      "lng": "16.54146",
      "lat": "49.19449",
      "geonameId": 3073419,
      "name": "Kohoutovice",
      "distance": "23.17927"
  },
  {
      "lng": "16.37035",
      "lat": "49.53119",
      "geonameId": 3078553,
      "name": "Brťoví",
      "distance": "23.22327"
  },
  {
      "lng": "16.59747",
      "lat": "49.18852",
      "geonameId": 6694366,
      "name": "Staré Brno",
      "distance": "23.24009"
  },
  {
      "lng": "16.83656",
      "lat": "49.54893",
      "geonameId": 3077200,
      "name": "Dešná",
      "distance": "23.25068"
  },
  {
      "lng": "16.52512",
      "lat": "49.59797",
      "geonameId": 3062901,
      "name": "Vilémov",
      "distance": "23.28594"
  },
  {
      "lng": "16.31607",
      "lat": "49.47348",
      "geonameId": 3073054,
      "name": "Kovářová",
      "distance": "23.35132"
  },
  {
      "lng": "16.33922",
      "lat": "49.50489",
      "geonameId": 3065186,
      "name": "Štěpánov nad Svratkou",
      "distance": "23.37327"
  },
  {
      "lng": "16.52093",
      "lat": "49.59813",
      "geonameId": 3078853,
      "name": "Bradlné",
      "distance": "23.39063"
  },
  {
      "lng": "16.64969",
      "lat": "49.60632",
      "geonameId": 3065999,
      "name": "Skočova Lhota",
      "distance": "23.39303"
  },
  {
      "lng": "16.76667",
      "lat": "49.58333",
      "geonameId": 3066012,
      "name": "Sklená Huť",
      "distance": "23.41058"
  },
  {
      "lng": "16.47733",
      "lat": "49.5876",
      "geonameId": 3075248,
      "name": "Horní Poříčí",
      "distance": "23.44406"
  },
  {
      "lng": "16.45036",
      "lat": "49.57917",
      "geonameId": 3063027,
      "name": "Veselka",
      "distance": "23.53493"
  },
  {
      "lng": "16.89833",
      "lat": "49.50262",
      "geonameId": 3069112,
      "name": "Okluky",
      "distance": "23.59679"
  },
  {
      "lng": "16.33193",
      "lat": "49.5012",
      "geonameId": 3069017,
      "name": "Olešnička",
      "distance": "23.62643"
  },
  {
      "lng": "16.73501",
      "lat": "49.59507",
      "geonameId": 3063710,
      "name": "Uhřice",
      "distance": "23.64232"
  },
  {
      "lng": "16.40183",
      "lat": "49.2369",
      "geonameId": 3062964,
      "name": "Veverské Knínice",
      "distance": "23.66455"
  },
  {
      "lng": "16.88155",
      "lat": "49.52107",
      "geonameId": 3066344,
      "name": "Seč",
      "distance": "23.67857"
  },
  {
      "lng": "16.3156",
      "lat": "49.48131",
      "geonameId": 3071734,
      "name": "Lískovec",
      "distance": "23.71196"
  },
  {
      "lng": "16.30274",
      "lat": "49.4588",
      "geonameId": 3065710,
      "name": "Smrček",
      "distance": "23.73603"
  },
  {
      "lng": "16.86881",
      "lat": "49.53381",
      "geonameId": 3074809,
      "name": "Hrochov",
      "distance": "23.81069"
  },
  {
      "lng": "16.33833",
      "lat": "49.51167",
      "geonameId": 3078954,
      "name": "Borovec",
      "distance": "23.82247"
  },
  {
      "lng": "16.76288",
      "lat": "49.58892",
      "geonameId": 3063565,
      "name": "Úsobrno",
      "distance": "23.83852"
  },
  {
      "lng": "16.79592",
      "lat": "49.21746",
      "geonameId": 3074230,
      "name": "Jezera",
      "distance": "23.88619"
  },
  {
      "lng": "16.63716",
      "lat": "49.18232",
      "geonameId": 3078016,
      "name": "Černovice",
      "distance": "23.94012"
  },
  {
      "lng": "16.35263",
      "lat": "49.26759",
      "geonameId": 3065746,
      "name": "Smelcovna",
      "distance": "23.95735"
  },
  {
      "lng": "16.5612",
      "lat": "49.18316",
      "geonameId": 3069294,
      "name": "Nový Lískovec",
      "distance": "24.12817"
  },
  {
      "lng": "16.72084",
      "lat": "49.19042",
      "geonameId": 3068020,
      "name": "Podolí",
      "distance": "24.2217"
  },
  {
      "lng": "16.36218",
      "lat": "49.25553",
      "geonameId": 3074388,
      "name": "Javůrek",
      "distance": "24.257"
  },
  {
      "lng": "16.56355",
      "lat": "49.61255",
      "geonameId": 3077194,
      "name": "Deštná",
      "distance": "24.25797"
  },
  {
      "lng": "16.34763",
      "lat": "49.52747",
      "geonameId": 3073230,
      "name": "Koroužné",
      "distance": "24.26027"
  },
  {
      "lng": "16.59493",
      "lat": "49.17929",
      "geonameId": 6694702,
      "name": "Štýřice",
      "distance": "24.27572"
  },
  {
      "lng": "16.62532",
      "lat": "49.17884",
      "geonameId": 3073337,
      "name": "Komárov",
      "distance": "24.28683"
  },
  {
      "lng": "16.40977",
      "lat": "49.56952",
      "geonameId": 3072337,
      "name": "Lamberk",
      "distance": "24.30795"
  },
  {
      "lng": "16.59406",
      "lat": "49.61541",
      "geonameId": 3066738,
      "name": "Roubanina",
      "distance": "24.32848"
  },
  {
      "lng": "16.75358",
      "lat": "49.19737",
      "geonameId": 3063330,
      "name": "Velatice",
      "distance": "24.36672"
  },
  {
      "lng": "16.67947",
      "lat": "49.61237",
      "geonameId": 3063193,
      "name": "Velké Opatovice",
      "distance": "24.37638"
  },
  {
      "lng": "16.49833",
      "lat": "49.60255",
      "geonameId": 3064795,
      "name": "Študlov",
      "distance": "24.38362"
  },
  {
      "lng": "16.62094",
      "lat": "49.61655",
      "geonameId": 3079440,
      "name": "Bezděčí u Velkých Opatovic",
      "distance": "24.40601"
  },
  {
      "lng": "16.79074",
      "lat": "49.20976",
      "geonameId": 3067723,
      "name": "Pozořice",
      "distance": "24.40859"
  },
  {
      "lng": "16.8623",
      "lat": "49.54715",
      "geonameId": 3072363,
      "name": "Labutice",
      "distance": "24.43587"
  },
  {
      "lng": "16.89395",
      "lat": "49.27311",
      "geonameId": 3068273,
      "name": "Pístovice",
      "distance": "24.4623"
  },
  {
      "lng": "16.53399",
      "lat": "49.61065",
      "geonameId": 3077566,
      "name": "Chrastová Lhota",
      "distance": "24.47887"
  },
  {
      "lng": "16.64",
      "lat": "49.61744",
      "geonameId": 3078554,
      "name": "Brťov",
      "distance": "24.56399"
  },
  {
      "lng": "16.35984",
      "lat": "49.54181",
      "geonameId": 3079070,
      "name": "Bolešín",
      "distance": "24.56756"
  },
  {
      "lng": "16.86605",
      "lat": "49.24804",
      "geonameId": 3069002,
      "name": "Olšany",
      "distance": "24.60639"
  },
  {
      "lng": "16.78254",
      "lat": "49.20371",
      "geonameId": 3066090,
      "name": "Sivice",
      "distance": "24.68848"
  },
  {
      "lng": "16.30879",
      "lat": "49.30177",
      "geonameId": 3064581,
      "name": "Svatoslav",
      "distance": "24.71144"
  },
  {
      "lng": "16.57698",
      "lat": "49.61826",
      "geonameId": 3075203,
      "name": "Horní Smržov",
      "distance": "24.75514"
  },
  {
      "lng": "16.3156",
      "lat": "49.505",
      "geonameId": 3073016,
      "name": "Kozlov",
      "distance": "24.86556"
  },
  {
      "lng": "16.85629",
      "lat": "49.55751",
      "geonameId": 3072058,
      "name": "Lhota u Konice",
      "distance": "24.92902"
  }]
})}