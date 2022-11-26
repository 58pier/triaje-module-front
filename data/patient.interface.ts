export interface PatientInterface {
    dni: number | null;
    names: string | null;
    lastNames: string | null;
    age: number |null;
}

export interface DataTriajeInterface {
    patient: PatientInterface | undefined;
    admissionTime: Date | undefined;
    temperature: number | undefined;
    heartRate: number | undefined;
    weight: number | undefined;
    height: number | undefined;
    imc: number | undefined;
    speciality: string | undefined;
    description: string | undefined;
    state: 'Por Atender' | 'Atendido' | 'En Espera' | undefined;
}
