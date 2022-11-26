import { useEffect, useState } from 'react';
import { PatientInterface } from '../../data/patient.interface';
import { getDataPatients } from '../helpers/getDataPatients';
import { postDataPatients } from '../helpers/postDataPatients';

const usePatient = () => {
    const [patients, setPatients] = useState<Array<PatientInterface>>([])
    const [isLoading, setIsLoading] = useState(true)

    const getDatosTriaje = async () => {
        const newPatients = await getDataPatients();
        setPatients(newPatients);
        setIsLoading(false);
    }

    const postPatient = async (patient: PatientInterface) => {
        const newPatient = await postDataPatients(patient);
        setPatients([...patients, newPatient]);
        getDatosTriaje();
    }

    useEffect(() => {
        getDatosTriaje();
    }, [])

    return { patients, isLoading, postPatient };
}

export default usePatient