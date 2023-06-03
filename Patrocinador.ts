import { Plataforma } from "./Plataforma.js";

export class Patrocinador{

    nombre:string;
    plataformas:Plataforma[];

    constructor(nombre:string){
        this.nombre=nombre;
        this.plataformas=[];
    }
}