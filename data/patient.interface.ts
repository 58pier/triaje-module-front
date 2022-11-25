interface PatientInterface {
    dni: number;
    names: string;
    lastNames: string;
    age: number;
}

interface DataTriajeInterface {
    patient: PatientInterface;
    admissionTime: Date;
    temperature: number;
    heartRate: number;
    weight: number;
    height: number;
    imc: number;
    speciality: string;
    description: string;
    state: 'Por Atender' | 'Atendido' | 'En Espera';
}
