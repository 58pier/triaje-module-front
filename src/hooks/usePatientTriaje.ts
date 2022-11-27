import { useEffect, useState } from 'react';
import { DataTriajeInterface } from '../../data/patient.interface';
import { getDataPatientsTriaje, getDataPatientTriaje } from '../helpers/getDataPatientsTriaje';
import { postDataPatientsTriaje } from '../helpers/postDataPatientsTriaje';

const usePatientTriaje = () => {
    const [patientsTriaje, setPatientsTriaje] = useState<Array<DataTriajeInterface>>([])
    const [isLoading, setIsLoading] = useState(true);

    const getDataPacientesTriaje = async () => {
        const newPatientsTriaje = await getDataPatientsTriaje();
        setPatientsTriaje(newPatientsTriaje);
        setIsLoading(false);
    }

    const postPatientTriaje = async (patientTriaje: DataTriajeInterface) => {
        console.log(patientsTriaje);
        await postDataPatientsTriaje(patientTriaje);
        setPatientsTriaje([...patientsTriaje, patientTriaje]);
        getDataPacientesTriaje();
    }

    const getDataPaciente = async (dni: number) => {
        console.log(dni)
        const newPatientTriaje = await getDataPatientTriaje(dni);
        return newPatientTriaje;
    }

    useEffect(() => {
        getDataPacientesTriaje();
    }, [])

    return { isLoading , patientsTriaje, postPatientTriaje, getDataPacientesTriaje, getDataPaciente };
}

export default usePatientTriaje