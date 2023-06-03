
import { Streamer } from "./Streamer.js";

export class Redes{

    nombre:string;
    descripcion:string;
    streamer:Streamer;

    constructor(nombre:string,descripcion:string,streamer:Streamer){

        this.nombre=nombre;
        this.descripcion=descripcion;
        this.streamer=streamer;
        this.AgregarStreamer();
    }

    AgregarStreamer(){
        this.streamer.redes.push(this);
    }
}