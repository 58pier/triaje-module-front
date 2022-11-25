import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const TablePatients = () => {

    const columns: GridColDef[] = [
        { field: 'dni', headerName: 'DNI', width: 150 },
        { field: 'names', headerName: 'Nombres', width: 200 },
        { field: 'lastNames', headerName: 'Apellidos', width: 300 },
        {
            field: 'Specialty',
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
    const rows = [
        { dni: 12345678, lastNames: 'Snow', names: 'Jon', age: 35 },
        { dni: 2, lastNames: 'Lannsister', names: 'Cersei', age: 42 },
        { dni: 3, lastNames: 'Lannsister', names: 'Jaime', age: 45 },
        { dni: 4, lastNames: 'Starsk', names: 'Arya', age: 16 },
        { dni: 5, lastNames: 'Targsaryen', names: 'Daenerys', age: null },
        { dni: 6, lastNames: 'Melissandre', names: null, age: 150 },
        { dni: 7, lastNames: 'Clifsford', names: 'Ferrara', age: 44 },
        { dni: 8, lastNames: 'Frances', names: 'Rossini', age: 36 },
        { dni: 9, lastNames: 'Roxie', names: 'Harvey', age: 65 },
    ];


    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(row) => row.dni}
            />
        </div>
    )
}

export default TablePatients