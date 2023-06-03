import { Redes } from "./Redes.js";
import { EnVivo } from "./EnVivo.js";
import { Canal } from "./Canal.js";

export var ListaS:Streamer[]=[];

export class Streamer{

    nombre:string;
    nickname:string;
    descripcion:string;
    redes:Redes[];
    canales:Canal[]=[];
    envivo:EnVivo[];
    

    constructor(nombre:string,nickname:string,descripcion:string,...canales:Canal[]){

        this.nombre=nombre;
        this.nickname=nickname;
        this.descripcion=descripcion;
        this.canales=canales;
        this.redes=[];
        this.envivo=[];
        this.ListarStreamer();
        this.RegistrarC();
        
    }
    ListarStreamer(){
        ListaS.push(this);
    }

    RegistrarC(){
        for (let i = 0; i < this.canales.length; i++) {
            this.canales[i].streamers.push(this);
        }
        
    }

    AgregarC(canal:Canal){
        this.canales.push(canal);
        this.canales[this.canales.length-1].streamers.push(this);
    }

    AgregarE(stream:EnVivo){
        this.envivo.push(stream);
    }

    Detalles(){
        let red = this.redes.map(Red=>"\n"+Red.red+" como: "+Red.nombre);
        let Env = this.envivo.map(Env=>"\n"+Env.nombre);
        console.log(" "+this.nombre+" "+this.nickname+" "+this.descripcion+" "+Env+" Me puedes encontrar en: "+red);
    }

}