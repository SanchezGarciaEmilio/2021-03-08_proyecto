//----------- We are going to include three collections in the database -----------//


//------- Patient data -------//
db.patient.drop()
db.patient.insertMany([
    {
        patNHS: 5042721207,
        patName: "Sophronia Goodbur",
        patBloodGroup: "AB+",
        patTransfusion: true,
    },
    {
         patNHS: 3243843774, patName: "Garret Chatt  ", patBloodGroup: "0-", patTransfusion: false,
    },
    {
         patNHS: 5946681176, patName: "Borden Swires", patBloodGroup: "A+", patTransfusion: false,
    },
    {
         patNHS: 6544901792, patName: "Shirley Goulbourn", patBloodGroup: "B-", patTransfusion: true,
    },
    {
         patNHS: 6475879274, patName: "Verine McSkin", patBloodGroup: "0+", patTransfusion: false,
    },
    {
         patNHS: 2173377866, patName: "Burch Boichat", patBloodGroup: "AB-", patTransfusion: true,
    },
    {
         patNHS: 9239003371, patName: "Goddart Robertet", patBloodGroup: "0+", patTransfusion: false,
    },
    {
         patNHS: 3368107856, patName: "Hildegarde Webb-Bowen", patBloodGroup: "0+", patTransfusion: false,
    },
    {
         patNHS: 5871689485, patName: "Iago Sandcroft", patBloodGroup: "A+", patTransfusion: false,
    },
    {
         patNHS: 1948001268, patName: "Vale Deetch", patBloodGroup: "0+", patTransfusion: true,
    },
])



//------- Donar data -------//
db.donar.drop()
db.donar.insertMany([
    {
        donarNHS: 7959956707,
        donarName: "Sax Clinton",
        donarBloodGroup: "0-",
        donarTotal: 1.1,
        donarDate: new Date("2021-01-04T19:21:26"),
        donarAddress: {
            provence: "Iowa",
            street: "Maryland Street",
            number: "08",
        },
        donarContactNumber:"688799477",
        donarBb:[1]
    },
    {
        donarNHS: 8697555361, donarName: "Deirdre Carruth", donarBloodGroup: "AB+", donarTotal: 0.4, donarDate: new Date("2020-11-20T11:58:20"),
        donarAddress: {
            provence: "Nevada",
            street: "Village Green Avenue",
            number: "9628",
        },
        donarContactNumber:"680473966", donarBb:[1,2]
    },
    {
        donarNHS: 8697555361, donarName: "Demeter Woodyer", donarBloodGroup: "0+", donarTotal: 0.9, donarDate: new Date("2020-04-22T15:10:54"),
        donarAddress: {
            provence: "California",
            street: "Dayton Circle",
            number: "813",
        },
        donarContactNumber:"648790711", donarBb:[1,3,4]
    },
    {
        donarNHS: 8903174259, donarName: "Nilson Muldrew", donarBloodGroup: "A-", donarTotal: 1.0, donarDate: new Date("2020-10-22T20:53:04"),
        donarAddress: {
            provence: "Utah",
            street: "Northridge Pass",
            number: "61",
        },
        donarContactNumber:"621556668", donarBb:[2]
    },
    {
        donarNHS: 9103471497, donarName: "Erek Gilphillan", donarBloodGroup: "0-", donarTotal: 0.6, donarDate: new Date("2020-05-10T09:11:25"),
        donarAddress: {
            provence: "Missouri",
            street: "Mesta Parkway",
            number: "98326",
        },
        donarContactNumber:"611214890", donarBb:[2,4]
    },
    {
        donarNHS: 1768022917, donarName: "Ilise Stodit", donarBloodGroup: "0+", donarTotal: 0.9, donarDate: new Date("2020-05-29T06:30:40"),
        donarAddress: {
            provence: "Kansas",
            street: "Paget Circle",
            number: "2",
        },
        donarContactNumber:"605470888", donarBb:[4]
    },
    {
        donarNHS: 9693421914, donarName: "Hanan Jopson", donarBloodGroup: "A-", donarTotal: 0.4, donarDate: new Date("2020-04-16T05:21:57"),
        donarAddress: {
            provence: "California",
            street: "Fisk Drive",
            number: "3",
        },
        donarContactNumber:"618572988", donarBb:[2,3]
    },
    {
        donarNHS: 9410296579, donarName: "Mufinella Picardo", donarBloodGroup: "B+", donarTotal: 0.7, donarDate: new Date("2020-12-19T01:55:29"),
        donarAddress: {
            provence: "California",
            street: "Reinke Place",
            number: "108",
        },
        donarContactNumber:"648656729", donarBb:[3,4]
    },
    {
        donarNHS: 8007621873, donarName: "Catie Ramalhete", donarBloodGroup: "0+", donarTotal: 0.65, donarDate: new Date("2020-04-24T08:26:14"),
        donarAddress: {
            provence: "Illinois",
            street: "Eagan Lane",
            number: "1",
        },
        donarContactNumber: "648241050", donarBb: [1,4]
    },
])

//donarTotal(L)


//------- Blood Bank data -------//
db.bank.drop()
db.bank.insertMany([
    {
        bbId: 1,
        bbName: "Blood Cross Society",
        bbAddress: {
            provence: "Iowa",
            street: "Pennsylvania Circle",
            number: "760",
        },
        bbContactNumber: 633272612,
    },
    {
        bbId: 2, bbName: "Rotary Blood Bank",
        bbAddress: {
            provence: "Illinois",
            street: "Crescent Oaks Junction",
            number: "33215",
        },
        bbContactNumber: 659926097,
    },
    {
        bbId: 3, bbName: "The Blood Association",
        bbAddress: {
            provence: "California",
            street: "Hoard Hill",
            number: "90",
        },
        bbContactNumber: 622917456,
    },
    {
        bbId: 4, bbName: "Athar Blood Bank",
        bbAddress: {
            provence: "Kansas",
            street: "Pleasure Trail",
            number: "0108",
        },
        bbContactNumber: 688921050,
    },
])

//bb = Blood Bank