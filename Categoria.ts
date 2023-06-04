import { EnVivo } from "./EnVivo.js";

export class Categoria{

    nombre:string;
    actividades:string;
    espacio:string;
    imagen:string;
    tema:string;
    Envivos:EnVivo[];

    constructor(nombre:string,actividades:string,espacio:string,imagen:string,tema:string){

        this.actividades=actividades;
        this.espacio=espacio;
        this.nombre=nombre;
        this.imagen=imagen;
        this.tema=tema;
        this.Envivos=[];
    }
   }