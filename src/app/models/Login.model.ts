export interface constancia{
    tipo: dni_tipo,
    dni: number,
    nombre: string,
    apellido: string,
    sexo: sexo,
    nacimiento: Date,
    email: string,
    image?: string
}

export enum dni_tipo {
    dni = "DNI",
    libreta_enrolamiento = "Libreta de Enrolamiento",
    libreta_civica = "Libreta de Enrolamiento",
    otros = "Otros"
}

export enum sexo {
    femenino = "Femenino",
    masculino = "Masculino"
}