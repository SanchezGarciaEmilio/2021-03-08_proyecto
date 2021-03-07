# PROJECTO DONANTES DE SANGRE
### MongoDB



Este proyecto trata sobre una teórica base de datos sobre donantes de sangre, los bancos a los que se les dona dicha sangre y algunos pacientes que han recibido o pueden recibir la sangre. Las distintas colecciones están planteadas de forma que contengan un poco de información de cada tipo, a modo de versión más corta de lo que podría ser una base completa.

En la carpeta de *[source](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/tree/main/src)*(src) hemos dividido los archivos en dos partes, los datoS y las búsquedas realizadas.



# Datos 📊

Dentro de source tenemos la carpeta de *[data](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/tree/main/src/data)*, donde tenemos todos los datos de las tres colecciones en un único archivo, *[data.js](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/src/data/data.js)*.
También hay un archivo csv, *[donarQuery1.csv](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/src/data/donarQuery1.csv)*, que hemos obtenido mientras realizábamos las búsquedas en nuestra base.

Tenemos tres colecciones dentro de data.js:

#### Pacientes
La primera colección es la de los pacientes, en ella hemos incluido el NHS como su id, su nombre completo, su tipo de sangre y un campo booleano para verificar si ya ha recicibido alguna transfusión.

#### Donantes
La segunda colección es la principal de la base de datos, la de los donantes. Hemos vuelto a incluir su NHS como id, su nombre, tipo de sangre, la cantidad donada, la fecha de la donación, la dirección del donante, su número de contacto y los bancos de sangre a los que se le puede enviar su sangre.

#### Bancos
La última colección es la de los bancos de sangre. Hemos añadido un Id propio, dándole un número a cada uno. También su nombre, su dirección y un número de contacto.



# Búsquedas 🔎

En la carpeta de *source* tenemos otra carpeta junto a la de *data*, la de *[query](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/tree/main/src/query)*. En ella encontramos tres documentos.

El *[query-01](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/src/query/query-01.js)* donde hemos hecho tres sencillas búsquedas con el find para verificar el correcto funcionamiento de la base de datos.
El *[query-02](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/src/query/query-02.js)* donde ya hemos hecho búsquedas de mayor nivel en el que hemos incluido el aggregate.
Y el *[query-03](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/src/query/query-03.js)* donde ya hemos usado el lookup y búsquedas entre las colecciones.

En algunas de las búsquedas hemos realizado una nueva colección para obtener gráficas que nos enseñase los datos de una forma más visual. Esas son *[los donantes de junio-diciembre 2020](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/doc/Graphs/Donantes%202020%20(junio-diciembre).png)* y *[los donantes por banco de sangre](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/doc/Graphs/Donantes%20por%20banco%20de%20sangre.png)*.



# Documentación 📝

En la carpeta de *[documentation](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/tree/main/doc)*(doc) hemos incluido las nociones teóricas necesarias para este proyecto en el archivo de *[teoria](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/blob/main/doc/Teoria.pdf)*.

También hemos añadido una carpeta nueva llamada *[Graphs](https://github.com/SanchezGarciaEmilio/2021-03-08_proyecto/tree/main/doc/Graphs)*, donde hemos incluido las gráficas creadas en este proyecto.



# Fuente(s) 💾

Gran parte de los datos usados en este proyecto han sido imaginarios, pero otros hemos hecho uso de otras páginas para ayudarnos a completarlos, como los nombres de los donantes y los pacientes. Para ello hemos usado la web de *[mockaroo](https://mockaroo.com)*.



> Emilio Sánchez García