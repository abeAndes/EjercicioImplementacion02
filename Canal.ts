import { Plataforma } from "./Plataforma.js";
import { EnVivo } from "./EnVivo.js";
import { Streamer } from "./Streamer.js";

export var ListaC:Canal[]=[];

export class Canal{

    nombre:string;
    banner:string;
    descripcion:string;
    plataforma:Plataforma;
    envivos:EnVivo[];
    streamers:Streamer[];


    constructor(nombre:string,banner:string,descripcion:string,plataforma:Plataforma){

        this.nombre=nombre;
        this.banner=banner;
        this.descripcion=descripcion;
        this.plataforma=plataforma;
        this.envivos=[];
        this.streamers=[];
        this.AgregarPlat();  
        this.ListarCanal();
    }
    AgregarPlat(){
        this.plataforma.canales.push(this);
    }

    ListarCanal(){
        ListaC.push(this);
    }
    Detalles(){
        let D_Envivos=this.envivos.map(Env=>Env.nombre);
        console.log(" "+this.nombre+" "+this.banner+" "+this.descripcion+" "+this.plataforma+" "+D_Envivos);
        
    }
}