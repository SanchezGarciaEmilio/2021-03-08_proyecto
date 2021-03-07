//--------------Busquedas lookup--------------//

//Hacemos busquedas con el lookup para buscar datos especificos entre las bases de datos.


db.patient.aggregate([
    {
        $match: {
            patTransfusion: false
        }
    }
    ,
    {$lookup:{
        from: "donar",
        localField: "patBloodGroup",
        foreignField: "donarBloodGroup",
        as: "donar"
    }},
    {$project:{
        _id:0,
        patBloodGroup:1,
        totalBlood: {$round: [{$sum: ["$donar.donarTotal"]},2]}
    }},
    {$sort:{
        totalBlood:-1
    }}
])

//{ "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patBloodGroup" : "0-", "totalBlood" : 1.7 }
//{ "patBloodGroup" : "A+", "totalBlood" : 0 }
//{ "patBloodGroup" : "A+", "totalBlood" : 0 }




/*----------------------------------------*/




//Buscamos cuantos donantes hay por cada banco de sangre.
db.donar.aggregate([
    {$unwind: "$donarBb"},
    {$lookup:{
        from: "bank",
        localField: "donarBb",
        foreignField: "bbId",
        as: "BloodBank"
    }},
    {$group:{
        _id: ["$BloodBank.bbId","$BloodBank.bbName"],
        count: {$sum: 1}
    }},
    {$project:{
        _id:0,
        bbName: {$last: "$_id"},
        numDonar: "$count"
    }}
])

//{ "bbName" : [ "The Blood Association" ], "numDonar" : 3 }
//{ "bbName" : [ "Blood Cross Society" ], "numDonar" : 4 }
//{ "bbName" : [ "Rotary Blood Bank" ], "numDonar" : 4 }
//{ "bbName" : [ "Athar Blood Bank" ], "numDonar" : 5 }