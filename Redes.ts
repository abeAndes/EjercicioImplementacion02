
import { Streamer } from "./Streamer.js";

export class Redes{

    nombre:string;
    red:string;
    descripcion:string;
    streamer:Streamer;

    constructor(nombre:string,red:string,descripcion:string,streamer:Streamer){

        this.nombre=nombre;
        this.red=red;
        this.descripcion=descripcion;
        this.streamer=streamer;
        this.AgregarStreamer();
    }

    AgregarStreamer(){
        this.streamer.redes.push(this);
    }
}