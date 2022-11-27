import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import usePatientTriaje from '../hooks/usePatientTriaje';
import { DataTriajeInterface } from '../../data/patient.interface';
import PatientInfo from './PatientInfo';

interface propsInterface {
    patientsTriaje: Array<DataTriajeInterface>,
    isLoading: boolean

}


const TablePatients = ({patientsTriaje, isLoading }: propsInterface) => {

    const [open, setOpen] = useState(false);
    const [valuePatient, setValuePatient] = useState<string>('')

    const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([])

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (newSelectionModel: GridSelectionModel) => {
        if(newSelectionModel.length = 1){
            setValuePatient(newSelectionModel[0].toString());
            handleClickOpen();
        }
    }


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
            headerName: 'Tipo de Urgencia',
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
            <PatientInfo open={open}
                onClose={handleClose}
                valuePatient={valuePatient}
            />
            {
                isLoading ? <h1>Cargando...</h1> :
                    <DataGrid
                        rows={patientsTriaje}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.patient.dni}
                        onSelectionModelChange={ handleSelect}
                        selectionModel={selectionModel}
                    />
            }
        </div>
    )
}

export default TablePatients