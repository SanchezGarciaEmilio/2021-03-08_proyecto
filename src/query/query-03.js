//--------------Busquedas lookup--------------//

//Hacemos busquedas con el lookup para buscar datos especificos entre las bases de datos.

//Buscamos los pacientes que no han recibido ninguna transfusión y buscamos cuanta sangre disponemos de cada tipo.
db.patient.aggregate([
    {
        $match: {
            patTransfusion: false
        }
    }
    ,
    {
        $lookup: {
            from: "donar",
            localField: "patBloodGroup",
            foreignField: "donarBloodGroup",
            as: "donar"
        }
    },
    {
        $project: {
            _id: 0,
            patNHS: 1,
            patBloodGroup: 1,
            totalBlood: { $round: [{ $sum: ["$donar.donarTotal"] }, 2] }
        }
    },
    {
        $sort: {
            totalBlood: -1
        }
    }
])

//{ "patNHS" : 6475879274, "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patNHS" : 9239003371, "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patNHS" : 3368107856, "patBloodGroup" : "0+", "totalBlood" : 2.45 }
//{ "patNHS" : 3243843774, "patBloodGroup" : "0-", "totalBlood" : 1.7 }
//{ "patNHS" : 5946681176, "patBloodGroup" : "A+", "totalBlood" : 0 }
//{ "patNHS" : 5871689485, "patBloodGroup" : "A+", "totalBlood" : 0 }




/*----------------------------------------*/




//Buscamos cuantos donantes hay por cada banco de sangre.
db.donar.aggregate([
    { $unwind: "$donarBb" },
    {
        $lookup: {
            from: "bank",
            localField: "donarBb",
            foreignField: "bbId",
            as: "BloodBank"
        }
    },
    {
        $group: {
            _id: ["$BloodBank.bbId", "$BloodBank.bbName"],
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            bbName: { $last: "$_id" },
            numDonar: "$count"
        }
    }
])

//{ "bbName" : [ "The Blood Association" ], "numDonar" : 3 }
//{ "bbName" : [ "Blood Cross Society" ], "numDonar" : 4 }
//{ "bbName" : [ "Rotary Blood Bank" ], "numDonar" : 4 }
//{ "bbName" : [ "Athar Blood Bank" ], "numDonar" : 5 }




/*----------------------------------------*/




//Buscamos los donantes y los bancos de sangre que coincidan en la misma provincia.
db.donar.aggregate([
    {
        $lookup: {
            from: "bank",
            localField: "donarBb",
            foreignField: "bbId",
            as: "BloodBank"
        }
    },
    { $unwind: "$BloodBank" },
    {
        $match: {
            $expr: { $eq: ["$donarAddress.provence", "$BloodBank.bbAddress.provence"] }
        }
    },
    { $count: "matchesDonarBb" }
])

//{ "matchesDonarBb" : 5 }