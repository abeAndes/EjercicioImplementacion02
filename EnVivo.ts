
import { Categoria } from "./Categoria.js";
import { Streamer } from "./Streamer.js";
import { Canal } from "./Canal.js";

export var ListaE:EnVivo[]=[];

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
        this.ListarEnvivo();
    }

    AgregarCanal(){
        this.canal.envivos.push(this);
    }

    AgregarCategoria(){
        for (let i = 0; i < this.categoria.length; i++) {
            this.categoria[i].Envivos.push(this);        
        }
        
    }

    AgregarStreamer(){
        this.streamer.envivo.push(this);
    }

    ListarEnvivo(){
        ListaE.push(this);
    }

    Detalles(){
        let categorias = this.categoria.map(Cat=>"\n"+Cat.nombre)
        console.log(" Nombre: "+this.nombre+" Streamer "+this.streamer.nickname+" Canal: "+this.canal.nombre+" Categorias: "+categorias);
    }
}

export function ImprimirLista(){
    let list = ListaE.map(list=>list.nombre);
    console.log(list);        
}

export function AgregarE(nombre:string,streamer:Streamer,canal:Canal,...categoria:Categoria[]){
    const Envivo21 = new EnVivo (nombre=nombre,streamer=streamer,canal=canal,...categoria=categoria);
}