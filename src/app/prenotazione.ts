import { Camera } from "./camera";
import { Persona } from "./persona";
import { Albergo } from "./albergo";

export interface Prenotazione {
    dataDa: Date;
    dataA: Date;
    prezzo: number;
    persona: Persona[];
    camera: Camera;
    albergo: Albergo;
}
