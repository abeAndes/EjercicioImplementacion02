import { Redes } from "./Redes.js";
import { EnVivo } from "./EnVivo.js";


export class Streamer{

    nombre:string;
    nickname:string;
    descripcion:string;
    redes:Redes[];
    envivo:EnVivo[];
    

    constructor(nombre:string,nickname:string,descripcion:string){

        this.nombre=nombre;
        this.nickname=nickname;
        this.descripcion=descripcion;
        this.redes=[];
        this.envivo=[];
        
    }
}