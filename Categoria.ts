import { EnVivo } from "./EnVivo.js";

export class Categoria{

    nombre:string;
    imagen:string;
    descripcion:string;
    Envivos:EnVivo[];

    constructor(nombre:string,imagen:string,descripcion:string){

        this.nombre=nombre;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.Envivos=[];
    }
}