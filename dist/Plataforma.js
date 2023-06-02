export var ListaP;
export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
        this.ListarPlat();
    }
    ListarPlat() {
        ListaP.push(this);
    }
    Detalles() {
        console.log(" " + this.nombre + " " + this.logo + " " + this.descripcion + " " + this.patrocinador + " " + this.canales);
    }
}
//# sourceMappingURL=Plataforma.js.map