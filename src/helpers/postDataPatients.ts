import { PatientInterface } from '../../data/patient.interface';

export const postDataPatients = async (patient: PatientInterface) => {
    const url = 'http://localhost:4000/api/patients';
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(patient),
    });
    const {data} = await resp.json();
    return data;
}