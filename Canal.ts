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
        let D_Envivos=this.envivos.map(Env=>"\n"+Env.nombre);
        console.log("Nombre: "+this.nombre+" Banner: "+this.banner+" Descripción: "+this.descripcion+" Plataforma: "+this.plataforma.nombre+" Streams: "+D_Envivos);
        
    }
}

export function ImprimirLista(){
    let list = ListaC.map(list=>list.nombre);
    console.log(list);        
}

export function AgregarC(nombre:string,banner:string,descripcion:string,plataforma:Plataforma){
    const canal12 = new Canal ( nombre=nombre,banner=banner,descripcion=descripcion,plataforma=plataforma);
}