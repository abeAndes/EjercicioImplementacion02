import { Patrocinador } from "./Patrocinador.js";
import { Plataforma } from "./Plataforma.js";
import { Canal } from "./Canal.js";
import { Categoria } from "./Categoria.js";
import { Streamer } from "./Streamer.js";
import { Redes } from "./Redes.js";
import { EnVivo } from "./EnVivo.js";
import { ImprimirLista as IP } from "./Plataforma.js";
import { ImprimirLista as IS } from "./Streamer.js";
import { ImprimirLista as IE } from "./EnVivo.js";
import { ImprimirLista as IC } from "./Canal.js";
import { AgregarP } from "./Plataforma.js";
import { AgregarS } from "./Streamer.js";
import { AgregarE } from "./EnVivo.js";
import { AgregarC } from "./Canal.js";
//Registros Base
const patrocinador1 = new Patrocinador("Nucita");
const patrocinador2 = new Patrocinador("Coca-cola");
const patrocinador3 = new Patrocinador("Netflix");
const patrocinador4 = new Patrocinador("Pepsi");
const patrocinador5 = new Patrocinador("Nike");
const plataforma1 = new Plataforma("Youtube", "Imagen", "Youtube", patrocinador1);
const plataforma2 = new Plataforma("Facebook", "Imagen", "Facebook", patrocinador2);
const plataforma3 = new Plataforma("Instagram", "Imagen", "Instagram", patrocinador3);
const plataforma4 = new Plataforma("Tiktok", "Imagen", "Tiktok", patrocinador4);
const plataforma5 = new Plataforma("twitter", "Imagen", "twitter", patrocinador5);
const canal1 = new Canal("JuegaMario", "Banner", "Juegos 80's", plataforma1);
const canal2 = new Canal("MetalSlug", "Banner", "Juegos 90's", plataforma1);
const canal3 = new Canal("Camping", "Banner", "Supervivencia al aire libre", plataforma2);
const canal4 = new Canal("Animals", "Banner", "Animales en su entorno", plataforma2);
const canal5 = new Canal("Paranormales", "Banner", "Experiencias de otro mundo", plataforma3);
const canal6 = new Canal("Run", "Banner", "velocidad total", plataforma3);
const canal7 = new Canal("Space", "Banner", "De otra galaxia", plataforma4);
const canal8 = new Canal("Ancient", "Banner", "Hablemos del pasado", plataforma4);
const canal9 = new Canal("Architecture", "Banner", "Construcción y detalles para interiores", plataforma4);
const canal10 = new Canal("SportsX", "Banner", "Deportes y novedad", plataforma5);
const canal11 = new Canal("Minecraft", "Banner", "Necesita descripción?", plataforma5);
const categoria1 = new Categoria("Juegos", "Videojuegos online en vivo", "Interior", "Imagen", "Tecnicas de gaming");
const categoria2 = new Categoria("Naturaleza", "Vida salvaje", "Aire libre", "Imagen", "Todo del exterior");
const categoria3 = new Categoria("Deportes", "Deportes y resultados", "Mixto", "Imagen", "Reporte de disciplinas de elite");
const categoria4 = new Categoria("Vintage", "Cosas del pasado e historia", "Interior", "Imagen", "Eventos historicos importantes y antigüedades");
const streamer1 = new Streamer("Juan", "Juanmax", "Gamer", canal1, canal2, canal11);
const streamer2 = new Streamer("Santiago", "Santix", "Survivor", canal3, canal4);
const streamer3 = new Streamer("Andres", "LaRegla", "Deportista", canal6, canal10);
const streamer4 = new Streamer("Leidy", "Constructor", "Arquitecta", canal9);
const streamer5 = new Streamer("Maria", "Mary2000", "Historiadora", canal8, canal5, canal7);
const red1 = new Redes("Juanmax", "Instagram", "", streamer1);
const red2 = new Redes("Juanmax", "Facebook", "", streamer1);
const red3 = new Redes("Juanmax", "Twittwer", "", streamer1);
const red4 = new Redes("Juanmax", "Twitch", "", streamer1);
const red11 = new Redes("Santix", "Instagram", "", streamer2);
const red21 = new Redes("Santix", "Facebook", "", streamer2);
const red31 = new Redes("Santix", "Twittwer", "", streamer2);
const red41 = new Redes("Santix", "Twitch", "", streamer2);
const red12 = new Redes("Mary2000", "Instagram", "", streamer3);
const red22 = new Redes("Mary2000", "Facebook", "", streamer3);
const red32 = new Redes("Mary2000", "Twittwer", "", streamer3);
const red42 = new Redes("Mary2000", "Twitch", "", streamer3);
const red13 = new Redes("Constructor", "Instagram", "", streamer4);
const red23 = new Redes("Constructor", "Facebook", "", streamer4);
const red33 = new Redes("Constructor", "Twittwer", "", streamer4);
const red43 = new Redes("Constructor", "Twitch", "", streamer4);
const red14 = new Redes("LaRegla", "Instagram", "", streamer5);
const red24 = new Redes("LaRegla", "Facebook", "", streamer5);
const red34 = new Redes("LaRegla", "Twittwer", "", streamer5);
const red44 = new Redes("LaRegla", "Twitch", "", streamer5);
const envivo1 = new EnVivo("Pierdo en JuegaMario", streamer1, canal1, categoria1, categoria2);
const envivo2 = new EnVivo("Pierdo en MetalSlug", streamer1, canal2, categoria1, categoria2);
const envivo3 = new EnVivo("Pierdo en Minecraft", streamer1, canal11, categoria1, categoria2);
const envivo4 = new EnVivo("Pierdo en JuegaMario de nuevo", streamer1, canal1, categoria1, categoria2);
const envivo5 = new EnVivo("Sobreviviendo en Africa", streamer2, canal2, categoria2, categoria2);
const envivo6 = new EnVivo("Sobreviviendo en Asia", streamer2, canal2, categoria2, categoria2);
const envivo7 = new EnVivo("Aprendiendo sobre Leones marinos", streamer2, canal4, categoria2, categoria2);
const envivo8 = new EnVivo("Aprendiendo sobre Leones", streamer2, canal4, categoria2, categoria2);
const envivo9 = new EnVivo("Colombia pierde en Patinaje", streamer3, canal10, categoria3, categoria2);
const envivo10 = new EnVivo("Colombia pierde en Natación", streamer3, canal6, categoria3, categoria2);
const envivo11 = new EnVivo("Colombia pierde en Ciclismo", streamer3, canal10, categoria3, categoria2);
const envivo12 = new EnVivo("Colombia pierde en Baloncesto", streamer3, canal6, categoria3, categoria2);
const envivo13 = new EnVivo("Visitando antiguos Campos Nazis", streamer4, canal9, categoria4, categoria2);
const envivo14 = new EnVivo("Visitando antiguos Templos judios", streamer4, canal9, categoria4, categoria2);
const envivo15 = new EnVivo("Visitando antiguos campos de batalla", streamer4, canal9, categoria4, categoria2);
const envivo16 = new EnVivo("Visitando antiguos Casitllos embrujados", streamer4, canal9, categoria4, categoria2);
const envivo17 = new EnVivo("Hagalo usd mismo en la cocina", streamer5, canal8, categoria4, categoria2);
const envivo18 = new EnVivo("Hagalo usd mismo en la sala", streamer5, canal5, categoria4, categoria2);
const envivo19 = new EnVivo("Hagalo usd mismo en las alcobas", streamer5, canal7, categoria4, categoria2);
const envivo20 = new EnVivo("Hagalo usd mismo en su atico", streamer5, canal5, categoria4, categoria2);
//Listas
//Plataformas
IP();
//Canales
IC();
//Streamers
IS();
//Streams
IE();
//Detalles
plataforma1.Detalles();
canal2.Detalles();
streamer1.Detalles();
envivo1.Detalles();
//Agregaciones
//Plataforma
AgregarP("Twitch", "Imagen", "Twitch", patrocinador1);
//Streamer
AgregarS("Martha", "Constructor", "Arquitecto", canal9);
//Stream
AgregarE("Pierdo en Call of duty", streamer1, canal11, categoria1, categoria2);
//Canal
AgregarC("Purificando agua", "Banner", "Supervivencia al aire libre", plataforma2);
//canal a streamer
streamer1.AgregarCanal(canal8);
//stream a streamer
streamer1.AgregarStream(envivo15);
//Verificaciones de los cambios
//Plataformas
IP();
//Canales
IC();
//Streamers
IS();
//Streams
IE();
//Relaciones con streamer
streamer1.Detalles();
//# sourceMappingURL=main.js.map