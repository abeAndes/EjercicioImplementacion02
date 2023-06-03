export class Canal {
    constructor(nombre, banner, descripcion, plataforma) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.plataforma = plataforma;
        this.envivos = [];
        this.AgregarPlat();
    }
    AgregarPlat() {
        this.plataforma.canales.push(this);
    }
}
//# sourceMappingURL=Canal.js.map