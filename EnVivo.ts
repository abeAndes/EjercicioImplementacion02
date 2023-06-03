
import { Categoria } from "./Categoria.js";
import { Streamer } from "./Streamer.js";
import { Canal } from "./Canal.js";

export class EnVivo{

    nombre:string;
    categoria:Categoria[]=[];
    streamer:Streamer;
    canal:Canal;

    constructor(nombre:string,streamer:Streamer,canal:Canal,...categoria:Categoria[]){

        this.nombre=nombre;
        this.streamer=streamer;
        this.canal=canal;
        this.categoria=categoria;
        this.AgregarCanal();
        this.AgregarCategoria();
        this.AgregarStreamer();
    }

    AgregarCanal(){
        this.canal.envivos.push(this);
    }

    AgregarCategoria(){
        this.categoria[this.categoria.length].Envivos.push(this);
    }

    AgregarStreamer(){
        this.streamer.envivo.push(this);
    }
}