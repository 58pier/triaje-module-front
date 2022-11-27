import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from 'react';
import usePatientTriaje from '../hooks/usePatientTriaje';
import { DataTriajeInterface } from '../../data/patient.interface';

interface propsInterface {
    patientsTriaje: Array<DataTriajeInterface>,
    isLoading: boolean

}


const TablePatients = ({patientsTriaje, isLoading }: propsInterface) => {

    const columns: GridColDef[] = [
        { field: 'patient', headerName: 'DNI', width: 150, renderCell: (params) => {return params.value.dni}},
        { field: 'names', headerName: 'Nombres', width: 200, valueGetter: ({id}) => {
            const item = patientsTriaje.find((patientTriaje) => patientTriaje.patient?.dni === id);
            return item?.patient?.names;
        } },
        { field: 'lastNames', headerName: 'Apellidos', width: 300, valueGetter: ({id}) => {
            const item = patientsTriaje.find((patientTriaje) => patientTriaje.patient?.dni === id);
            return item?.patient?.lastNames;
        } },
        {
            field: 'speciality',
            headerName: 'Especialidad',
            type: 'string',
            width: 200
        },
        {
            field: 'state',
            headerName: 'Estado',
            type: 'string',
            width: 150,
        },
        {
            field: 'admissionTime',
            headerName: 'Hora de Ingreso',
            type: 'date',
            width: 150,
            renderCell: ({value}) => { let time = new Date(value);  return time.toLocaleDateString('es-PE', {weekday: 'short'}) + " " + time.getHours() + ':' + time.getMinutes()   }
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>

            {
                isLoading ? <h1>Cargando...</h1> :
                    <DataGrid
                        rows={patientsTriaje}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.patient.dni}
                    />
            }
        </div>
    )
}

export default TablePatients