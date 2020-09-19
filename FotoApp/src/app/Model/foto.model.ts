export class Foto {
    id: number;
    name: string;
    titulo: string;
    description: string;

    constructor(
        id: number = null,
        name: string = '',
        titulo: string = '',
        description: string = ''
    ) {
        this.id = id;
        this.name = name;
        this.titulo = titulo;
        this.description = description;
    }

}