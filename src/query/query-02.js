//--------------Busquedas aggregate--------------//

//Hacemos busquedas con el aggregate para buscar datos especificos de cada base de datos.

//Buscamos los pacientes que han recibido la transfusion de sangre y contamos cuantas personas de cada tipo lo han recibido.
db.patient.aggregate([
    {$match: {
        patTransfusion: true
    }}
    ,
    {$group: {
        _id: "$patBloodGroup",
        count: {$sum: 1}
    }},
    {$project:{
        _id: 0,
        bloodGroup: "$_id",
        numPatient: "$count"
    }}
])

//{ "bloodGroup" : "AB-", "numPatient" : 1 }
//{ "bloodGroup" : "0+", "numPatient" : 1 }
//{ "bloodGroup" : "AB+", "numPatient" : 1 }
//{ "bloodGroup" : "B-", "numPatient" : 1 }


//Buscamos los tipos de sangre donada y las cantidades desde la segunda mitad del año 2020.
db.donar.aggregate([
    {$match: 
        {$expr: {$eq: [{$year: "$donarDate"},2020]}} 
    },
    {$match: 
        {$expr: {$gt: [{$month: "$donarDate"},5]}} 
    },
    {$group:{
        _id: "$donarBloodGroup",
        quantityBlood: {$push: {type: "$donarBloodGroup",quantity: {$sum: "$donarTotal"}}} 
    }},
    {$project:{
        _id:0,
        quantityBlood:1
    }}
])

//{ "quantityBlood" : [ { "type" : "A-", "quantity" : 1 } ] }
//{ "quantityBlood" : [ { "type" : "AB+", "quantity" : 0.4 } ] }
//{ "quantityBlood" : [ { "type" : "B+", "quantity" : 0.7 } ] }