export var ListaC = [];
export class Canal {
    constructor(nombre, banner, descripcion, plataforma) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.plataforma = plataforma;
        this.envivos = [];
        this.streamers = [];
        this.AgregarPlat();
        this.ListarCanal();
    }
    AgregarPlat() {
        this.plataforma.canales.push(this);
    }
    ListarCanal() {
        ListaC.push(this);
    }
    Detalles() {
        let D_Envivos = this.envivos.map(Env => Env.nombre);
        console.log(" " + this.nombre + " " + this.banner + " " + this.descripcion + " " + this.plataforma + " " + D_Envivos);
    }
}
//# sourceMappingURL=Canal.js.map