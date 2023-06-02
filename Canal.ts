import { Plataforma } from "./Plataforma.js";
import { EnVivo } from "./EnVivo.js";

export class Canal{

    nombre:string;
    banner:string;
    descripcion:string;
    plataforma:Plataforma;
    envivos:EnVivo[];

    constructor(nombre:string,banner:string,descripcion:string,plataforma:Plataforma){

        this.nombre=nombre;
        this.banner=banner;
        this.descripcion=descripcion;
        this.plataforma=plataforma;
        this.envivos=[];
    
    }

}