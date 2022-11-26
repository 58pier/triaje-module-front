import { DataTriajeInterface } from '../../data/patient.interface';

export const postDataPatientsTriaje = async (dataTriaje: DataTriajeInterface) => {
    const url = 'http://localhost:3000/dataTriaje';
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(dataTriaje),
    });
    const data = await resp.json();
    return data;
}