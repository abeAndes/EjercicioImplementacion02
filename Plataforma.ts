import { Patrocinador } from "./Patrocinador.js";
import { Canal } from "./Canal.js";

export var ListaP:Plataforma[]=[];

export class Plataforma{

    nombre:string;
    logo:string;
    descripcion:string;
    patrocinador:Patrocinador;
    canales:Canal[];

    constructor(nombre:string,logo:string,descripcion:string,patrocinador:Patrocinador){

        this.nombre=nombre;
        this.logo=logo;
        this.descripcion=descripcion;
        this.patrocinador=patrocinador;
        this.canales=[];
        this.ListarPlat();
        this.AgregarPat();

    }
    ListarPlat(){
        ListaP.push(this);
    }

    Detalles(){
            let can = this.canales.map(can=>"\n"+can.nombre)
        console.log("Nombre: "+this.nombre+", Logo: "+this.logo+", Descripción: "+this.descripcion+", Patrocinador: "+this.patrocinador.nombre+", Canales: "+can);
        
    }
    AgregarPat(){
        this.patrocinador.plataformas.push(this);
    }

}

export function ImprimirLista(){
    let list = ListaP.map(list=>list.nombre);
    console.log(list);        
}

export function AgregarP(nombre:string,logo:string,descripcion:string,patrocinador:Patrocinador){
    const Plataforma6 = new Plataforma(nombre=nombre,logo=logo,descripcion=descripcion,patrocinador=patrocinador)
    console.log("Plataforma agregada con exito");
    
}