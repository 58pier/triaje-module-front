import { useEffect, useState } from 'react';
import { DataTriajeInterface } from '../../data/patient.interface';
import { getDataPatientsTriaje } from '../helpers/getDataPatientsTriaje';
import { postDataPatientsTriaje } from '../helpers/postDataPatientsTriaje';

const usePatientTriaje = () => {
    const [patientsTriaje, setPatientsTriaje] = useState<Array<DataTriajeInterface>>([])
    const [isLoading, setIsLoading] = useState(true);

    const getDatosTriaje = async () => {
        const newPatientsTriaje = await getDataPatientsTriaje();
        setPatientsTriaje(newPatientsTriaje);
        setIsLoading(false);
    }

    const postPatientTriaje = async (patientsTriaje: DataTriajeInterface) => {
        const newPatientTriaje = await postDataPatientsTriaje(patientsTriaje);
        setPatientsTriaje([...[patientsTriaje], newPatientTriaje]);
    }

    useEffect(() => {
        getDatosTriaje();
    }, [])

    return { isLoading , patientsTriaje, postPatientTriaje };
}

export default usePatientTriaje