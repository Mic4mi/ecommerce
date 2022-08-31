const mockdata = [{
    "id": 1,
    "name": "Tetramolopium",
    "price": 443295.8,
    "description": "Reactive well-modulated capacity",
    "stock": 5,
    "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
}, {
    "id": 2,
    "name": "Phellodendron",
    "price": 184653.41,
    "description": "Versatile 6th generation flexibility",
    "stock": 73,
    "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
}, {
    "id": 3,
    "name": "Astragalus",
    "price": 44154.37,
    "description": "Grass-roots uniform matrix",
    "stock": 5,
    "img": "http://dummyimage.com/250x200.png/dddddd/000000"
}, {
    "id": 4,
    "name": "Rhynchospora",
    "price": 499062.5,
    "description": "Diverse system-worthy product",
    "stock": 8,
    "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
}, {
    "id": 5,
    "name": "Aquilegia",
    "price": 478660.37,
    "description": "Optional grid-enabled internet solution",
    "stock": 29,
    "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
}, {
    "id": 6,
    "name": "Digitalis purpurea",
    "price": 121099.63,
    "description": "Right-sized reciprocal Graphical User Interface",
    "stock": 66,
    "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
},
    //{
    //     "id": 7,
    //     "name": "Vitex agnus-castus L. var. agnus-castus",
    //     "price": 418036.3,
    //     "description": "Implemented transitional monitoring",
    //     "stock": 80,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 8,
    //     "name": "Acarospora saepincola H. Magn.",
    //     "price": 480593.72,
    //     "description": "Balanced incremental strategy",
    //     "stock": 9,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 9,
    //     "name": "Physcia sorediosa (Vain.) Lynge",
    //     "price": 161842.1,
    //     "description": "Polarised clear-thinking capacity",
    //     "stock": 8,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 10,
    //     "name": "Claoxylon A. Juss.",
    //     "price": 97672.09,
    //     "description": "User-friendly coherent methodology",
    //     "stock": 33,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 11,
    //     "name": "Ribes hirtellum Michx.",
    //     "price": 253887.9,
    //     "description": "Balanced eco-centric leverage",
    //     "stock": 66,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 12,
    //     "name": "Pistacia mexicana Kunth",
    //     "price": 152708.56,
    //     "description": "Devolved even-keeled encryption",
    //     "stock": 58,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 13,
    //     "name": "Vitis vulpina L.",
    //     "price": 277763.22,
    //     "description": "Programmable motivating circuit",
    //     "stock": 81,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 14,
    //     "name": "Carex cephalophora Muhl. ex Willd.",
    //     "price": 16177.54,
    //     "description": "Re-engineered web-enabled intranet",
    //     "stock": 51,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 15,
    //     "name": "Selenicereus coniflorus (Weingart) Britton & Rose",
    //     "price": 43693.15,
    //     "description": "Distributed foreground definition",
    //     "stock": 95,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 16,
    //     "name": "Artemisia glomerata Ledeb. var. subglabrata Hultén",
    //     "price": 466832.41,
    //     "description": "Polarised bi-directional frame",
    //     "stock": 42,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 17,
    //     "name": "Allium parvum Kellogg",
    //     "price": 450224.82,
    //     "description": "Fundamental next generation matrix",
    //     "stock": 96,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 18,
    //     "name": "Typha angustifolia L.",
    //     "price": 194343.11,
    //     "description": "Ameliorated heuristic encryption",
    //     "stock": 62,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 19,
    //     "name": "Aristida adscensionis L.",
    //     "price": 472088.92,
    //     "description": "Reduced reciprocal local area network",
    //     "stock": 22,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 20,
    //     "name": "Cynanchum maccartii Shinners",
    //     "price": 440020.95,
    //     "description": "Compatible optimizing matrices",
    //     "stock": 82,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 21,
    //     "name": "Scleria pauciflora Muhl. ex Willd. var. caroliniana (Willd.) Alph. Wood",
    //     "price": 203136.9,
    //     "description": "Polarised bandwidth-monitored throughput",
    //     "stock": 49,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 22,
    //     "name": "Macleaya cordata (Willd.) R. Br.",
    //     "price": 342068.09,
    //     "description": "Self-enabling value-added initiative",
    //     "stock": 57,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 23,
    //     "name": "Erigeron humilis Graham",
    //     "price": 47790.59,
    //     "description": "Adaptive web-enabled artificial intelligence",
    //     "stock": 19,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 24,
    //     "name": "Peltigera kristinssonii Vitik.",
    //     "price": 167731.26,
    //     "description": "Streamlined even-keeled extranet",
    //     "stock": 30,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 25,
    //     "name": "Podostemum Michx.",
    //     "price": 46564.47,
    //     "description": "Secured interactive Graphical User Interface",
    //     "stock": 46,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 26,
    //     "name": "Leptochloopsis Yates",
    //     "price": 129605.49,
    //     "description": "Progressive grid-enabled extranet",
    //     "stock": 13,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 27,
    //     "name": "Cyperus lancastriensis Porter ex A. Gray",
    //     "price": 136961.12,
    //     "description": "User-friendly leading edge interface",
    //     "stock": 13,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 28,
    //     "name": "Rhamnus arguta Maxim.",
    //     "price": 408077.75,
    //     "description": "Networked multi-state open architecture",
    //     "stock": 65,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 29,
    //     "name": "Juniperus arizonica (R.P. Adams) R.P. Adams",
    //     "price": 356968.52,
    //     "description": "User-friendly fresh-thinking flexibility",
    //     "stock": 51,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 30,
    //     "name": "Lecidea mutabilis Fée",
    //     "price": 313018.24,
    //     "description": "Face to face 5th generation frame",
    //     "stock": 30,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 31,
    //     "name": "Fontinalis Hedw.",
    //     "price": 232957.12,
    //     "description": "Switchable value-added array",
    //     "stock": 59,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 32,
    //     "name": "Evolvulus sericeus Sw.",
    //     "price": 101815.81,
    //     "description": "Assimilated homogeneous budgetary management",
    //     "stock": 94,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 33,
    //     "name": "Portulaca smallii P. Wilson",
    //     "price": 89849.73,
    //     "description": "Right-sized maximized time-frame",
    //     "stock": 52,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 34,
    //     "name": "Silene scaposa B.L. Rob. var. lobata C.L. Hitchc. & Maguire",
    //     "price": 128061.51,
    //     "description": "Upgradable leading edge knowledge base",
    //     "stock": 75,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 35,
    //     "name": "Pinus halepensis Mill.",
    //     "price": 316290.54,
    //     "description": "Synergistic modular customer loyalty",
    //     "stock": 58,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 36,
    //     "name": "Allionia incarnata L. var. incarnata",
    //     "price": 377114.98,
    //     "description": "Decentralized asymmetric adapter",
    //     "stock": 80,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 37,
    //     "name": "Solanum muricatum Aiton",
    //     "price": 220614.24,
    //     "description": "Optimized mobile Graphical User Interface",
    //     "stock": 76,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 38,
    //     "name": "Astragalus miser Douglas ex Hook. var. miser",
    //     "price": 88440.34,
    //     "description": "Cloned uniform product",
    //     "stock": 39,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 39,
    //     "name": "Synalissa symphorea (Ach.) Nyl.",
    //     "price": 197010.33,
    //     "description": "Re-engineered high-level capacity",
    //     "stock": 59,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 40,
    //     "name": "Penstemon anguineus Eastw.",
    //     "price": 160294.53,
    //     "description": "Optimized multi-tasking standardization",
    //     "stock": 30,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 41,
    //     "name": "Choisya dumosa (Torr.) A. Gray",
    //     "price": 458590.05,
    //     "description": "Integrated 24/7 local area network",
    //     "stock": 65,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 42,
    //     "name": "Symphyotrichum lanceolatum (Willd.) G.L. Nesom ssp. lanceolatum var. hirsuticaule (Semple & Chmielewski) G.L. Nesom",
    //     "price": 11637.45,
    //     "description": "Cross-group user-facing productivity",
    //     "stock": 75,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 43,
    //     "name": "Veratrum L.",
    //     "price": 462997.58,
    //     "description": "Organic contextually-based open architecture",
    //     "stock": 6,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 44,
    //     "name": "Matelea borinquensis Alain",
    //     "price": 89749.93,
    //     "description": "Profound neutral local area network",
    //     "stock": 31,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"
    // }, {
    //     "id": 45,
    //     "name": "Sporobolus airoides (Torr.) Torr.",
    //     "price": 259739.86,
    //     "description": "Automated impactful approach",
    //     "stock": 84,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 46,
    //     "name": "Catapodium Link",
    //     "price": 69417.33,
    //     "description": "Compatible fault-tolerant customer loyalty",
    //     "stock": 70,
    //     "img": "http://dummyimage.com/250x200.png/ff4444/ffffff"
    // }, {
    //     "id": 47,
    //     "name": "Asclepias californica Greene ssp. greenei Woodson",
    //     "price": 12466.06,
    //     "description": "User-friendly interactive definition",
    //     "stock": 15,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 48,
    //     "name": "Penstemon procerus Douglas ex Graham",
    //     "price": 225996.0,
    //     "description": "Programmable exuding approach",
    //     "stock": 78,
    //     "img": "http://dummyimage.com/250x200.png/dddddd/000000"
    // }, {
    //     "id": 49,
    //     "name": "Cordia angustifolia (West ex Willd.) Roem. & Schult.",
    //     "price": 149132.74,
    //     "description": "Devolved radical challenge",
    //     "stock": 59,
    //     "img": "http://dummyimage.com/250x200.png/cc0000/ffffff"
    // }, {
    //     "id": 50,
    //     "name": "Rudbeckia hirta L.",
    //     "price": 184811.73,
    //     "description": "Quality-focused methodical product",
    //     "stock": 92,
    //     "img": "http://dummyimage.com/250x200.png/5fa2dd/ffffff"}
];

export default mockdata;
