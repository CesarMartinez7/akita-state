import { Injectable } from "@angular/core";
import { Store, StoreAction, StoreConfig } from "@datorama/akita";
// Interfaz de los datos pasados despues


// Interfaza de los datos a proveer
export interface DataChange {
    username: string;
    lastname: string
    token: string;
    count: number;
    isDark: boolean
}



// Inicializacion de esos datos

const InitialData: DataChange = {
    username: "GOKU1",
    lastname: "Akita Lastname",
    token: "no token",
    isDark: true,
    count: 0
}

// Nombre de estorage y su configuracion, siempre espera una clase que hereda de Store de akita y su tipado obviamente, tambien es neceario heredad todo con el super
@Injectable({providedIn: "root"})
@StoreConfig({name: "storeData"})
export class DataChangex extends Store<DataChange> {
    constructor() {
        super(InitialData)
    }
}


// https://opensource.salesforce.com/akita/docs/store 

// Tal y como sale en la documentacion

/*
    1. Primero importamos la configuracion del storage y el storage, despues.
    2. Despues creamos nuevo storage con el decorador, proveemos este storage a todo como si fuera un injetable,
    3. Configuramos nuevo StorageConfig, con la propiedad del nombre UNICO del 
    4. Damos nueestra clase que extiende del tipo y del Storage de Akita
    5. En el constructor heredamos todo del storage inicializamos en el super nuestros tipos
    6. Storage Generado exitosamente
    7. Ahora es hora donde configuraremos nuestro query, o mejor dicho nuestro servicio, en este servicio podremos configurar, obtener, actualizar, resetear nuestros valores, o tambien depende de quien maneje estos datos.



    Generacion de Un Servicio O QUERY en Aqui para obtener y actualizar

    1 . Lo primero sera generar primero la interface o tipo generado anteriormente nuestro store,
    2. Segundo Importar Injetable porque necesitamos convertirlo a un servicio para inyectarlo en nuestros componentes
    3. Crear nuestro inyectable que hereda de Query Y NUESTRO TIPADO IMPORTADO,
    4. En el constructor sera practicamente igual, ponerlo como propiedad y generar el store en el constructor, despues de esto, es necesario en el super heredar del mismo store, y ya despues seria generar nuestros metodos de servicio o lo que haremos con este servicio de estado global, un ejemplo sencillo seria cambiar el tema de una app en tamaño global.


*/
