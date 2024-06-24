import { Camera } from "./camera";
import { Persona } from "./persona";

export interface Prenotazione {
    da: Date;
    a: Date;
    prezzo: number;
    persone: Persona[];
    camera: Camera;
}
