//--------------Busquedas sencillas--------------//
//--------------------(find)--------------------//

//Hacemos busquedas sencillas para comprobar el correcto funcionamiento de la base de datos.

//Probamos a buscar un paciente que tenga sangre AB+ y haya recibido ya la transfusión.
db.patient.find({
    $and: [
        { patBloodGroup: { $eq: "AB+" } },
        { patTransfusion: { $ne: false } }
    ]
}).pretty()

//{ "_id" : ObjectId("60337c95f93fd661c785b6b8"), "patNHS" : 5042721207, "patName" : "Sophronia Goodbur", "patBloodGroup" : "AB+", "patTransfusion" : true }


/*----------------------------------------*/


//Buscamos en la base de los bancos de sangre aquellos que ni tengan el nombre de "Society" ni su calle sea la 90.
db.bank.find({
    $nor: [
        { bbName: { $regex: /Society/i } },
        { "bbAddress.number": { $eq: "90" } }
    ]
})


//{ "_id" : ObjectId("60337c95f93fd661c785b6cc"), "bbId" : 2, "bbName" : "Rotary Blood Bank", "bbAddress" : { "provence" : "Illinois", "street" : "Crescent Oaks Junction", "number" : "33215" }, "bbContactNumber" : 659926097 }
//{ "_id" : ObjectId("60337c95f93fd661c785b6ce"), "bbId" : 4, "bbName" : "Athar Blood Bank", "bbAddress" : { "provence" : "Kansas", "street" : "Pleasure Trail", "number" : "0108" }, "bbContactNumber" : 688921050 }


/*----------------------------------------*/


//Cuenta los donantes que hayan donado un litro de sangre o más, o hayan donado al primer banco.
db.donar.find({
    $or: [
        { donarBb: { $elemMatch: { $eq: 1 } } },
        { donarTotal: { $gte: 1 } }
    ]
}).count()

//5
