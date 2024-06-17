export interface MangaBody {
    id: number;
    name: string;
    author: string;
    imagen: string;
    descripcion?: string; // La descripción es ahora opcional
}