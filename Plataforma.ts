import { Patrocinador } from "./Patrocinador.js";
import { Canal } from "./Canal.js";

export var ListaP:Plataforma[];

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
        console.log(" "+this.nombre+" "+this.logo+" "+this.descripcion+" "+this.patrocinador+" "+this.canales);
        
    }
    AgregarPat(){
        this.patrocinador.plataformas.push(this);
    }

}