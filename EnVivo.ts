
import { Categoria } from "./Categoria.js";
import { Streamer } from "./Streamer.js";
import { Canal } from "./Canal.js";

export class EnVivo{

    nombre:string;
    categoria:Categoria[];
    streamer:Streamer;
    canal:Canal;

    constructor(nombre:string,streamer:Streamer,canal:Canal){

        this.nombre=nombre;
        this.streamer=streamer;
        this.canal=canal;
        this.categoria=[];

    }

}