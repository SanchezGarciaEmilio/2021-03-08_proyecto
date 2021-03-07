//--------------Busquedas aggregate--------------//

//Hacemos busquedas con el aggregate para buscar datos especificos de cada base de datos.

//Buscamos los pacientes que han recibido la transfusion de sangre y contamos cuantas personas de cada tipo lo han recibido.
db.patient.aggregate([
    {
        $match: {
            patTransfusion: true
        }
    }
    ,
    {
        $group: {
            _id: "$patBloodGroup",
            count: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            bloodGroup: "$_id",
            numPatient: "$count"
        }
    }
])

//{ "bloodGroup" : "AB-", "numPatient" : 1 }
//{ "bloodGroup" : "0+", "numPatient" : 1 }
//{ "bloodGroup" : "AB+", "numPatient" : 1 }
//{ "bloodGroup" : "B-", "numPatient" : 1 }


/*----------------------------------------*/


//Miramos cuanta cantidad de cada sangre disponemos, si esa cantidad está por debajo de 1.3 añadimos una advertencia como
//true. Sino, aparecerá como false.
db.donar.aggregate([
    {
        $group: {
            _id: "$donarBloodGroup",
            count: { $sum: "$donarTotal" }
        }
    },
    {
        $project: {
            _id: 0,
            typeBlood: "$_id",
            bloodTotal: { $round: ["$count", 2] },
            danger: {
                $cond: { if: { $gte: ["$count", 1.3] }, then: false, else: true }
            }
        }
    }
])

//{ "typeBlood" : "0-", "bloodTotal" : 1.7, "danger" : false }
//{ "typeBlood" : "0+", "bloodTotal" : 2.45, "danger" : false }
//{ "typeBlood" : "A-", "bloodTotal" : 1.4, "danger" : false }
//{ "typeBlood" : "AB+", "bloodTotal" : 0.4, "danger" : true }
//{ "typeBlood" : "B+", "bloodTotal" : 0.7, "danger" : true }


/*----------------------------------------*/


//Buscamos los tipos de sangre donada y las cantidades desde la segunda mitad del año 2020.
db.donar.aggregate([
    {
        $match:
            { $expr: { $eq: [{ $year: "$donarDate" }, 2020] } }
    },
    {
        $match:
            { $expr: { $gt: [{ $month: "$donarDate" }, 5] } }
    },
    {
        $group: {
            _id: "$donarBloodGroup",
            quantityBlood: { $push: { type: "$donarBloodGroup", quantity: { $sum: "$donarTotal" } } }
        }
    },
    {
        $project: {
            _id: 0,
            quantityBlood: 1
        }
    },
    { $sort: { "quantityBlood.quantity": -1 } },
    { $merge: "donarQuery1" }
])


//{ "quantityBlood" : [ { "type" : "A-", "quantity" : 1 } ] }
//{ "quantityBlood" : [ { "type" : "B+", "quantity" : 0.7 } ] }
//{ "quantityBlood" : [ { "type" : "AB+", "quantity" : 0.4 } ] }