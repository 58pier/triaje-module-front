export interface PatientInterface {
    dni: number | null;
    names: string | null;
    lastNames: string | null;
    age: number |null;
}

export interface DataTriajeInterface {
    patient: PatientInterface | null;
    admissionTime: Date | null;
    temperature: number | null;
    heartRate: number | null;
    weight: number | null;
    height: number | null;
    imc: number | null;
    speciality: string | null;
    description: string | null;
    state: 'Por Atender' | 'Atendido' | 'En Espera' | null;
}
