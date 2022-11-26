import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import usePatientTriaje from '../hooks/usePatientTriaje';

const TablePatients = () => {

        const {isLoading, patientsTriaje} = usePatientTriaje();



    const columns: GridColDef[] = [
        { field: 'dni', headerName: 'DNI', width: 150 },
        { field: 'names', headerName: 'Nombres', width: 200 },
        { field: 'lastNames', headerName: 'Apellidos', width: 300 },
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
                        getRowId={(row) => row.dni}
                    />
            }
        </div>
    )
}

export default TablePatients