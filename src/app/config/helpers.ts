export const URL_LOCAL = 'http://localhost:8080/api';

export interface Pokemon {

    id?: number | null,
    nombre : string | null,
    tipo : string | null,
    nivel: number | null,
    entrenador_id: number | object | null,
    fecha_captura?: Date | null,
    activo?: boolean | null

}