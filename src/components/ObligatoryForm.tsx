import styled from '@emotion/styled';
import { Button , InputLabel, MenuItem, Select, Typography, TextField, FormControl } from '@mui/material';
import { useState } from 'react';
import { DataTriajeInterface } from '../../data/patient.interface';

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const ContainerForm = styled.div`
    width: 100%;
    height: 40vh;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const CustomizedInputBase = styled(TextField)`
    width: 28%;
    margin-bottom: 2%;
    margin-right: 2%;
`

const INITIAL_STATE = {
    patient: undefined,
    admissionTime: undefined,
    temperature: undefined,
    heartRate: undefined,
    weight: undefined,
    height: undefined,
    imc: undefined,
    speciality: '',
    description: undefined,
    state: undefined
}

const ObligatoryForm = () => {

    const [DataTriaje, setDataTriaje] = useState <DataTriajeInterface>( INITIAL_STATE )

    return (
        <Container>
            <Typography variant='body1'> Ingrese los datos de triaje del paciente:</Typography>
            <ContainerForm>
                <CustomizedInputBase name="temperature" label="Temperatura"  required />
                <CustomizedInputBase name="heartRate" label="Frecuencia Cardiaca" required />
                <CustomizedInputBase name="weight" label="Peso" required />
                <CustomizedInputBase name="height" label="Talla" required />
                <FormControl>
                    <InputLabel id="speciality-select">Especialidad</InputLabel>
                    <Select
                        labelId="speciality-select"
                        label="Especialidad"
                        name="speciality"
                        required
                        sx={{
                            width: 400,
                            height: 56,
                        }}
                        value={DataTriaje.speciality}
                        onChange={(e) => setDataTriaje({ ...DataTriaje, speciality: e.target.value as string})}
                    >
                        <MenuItem value="Emergencia"> Emergencia </MenuItem>
                        <MenuItem value="Medicina Interna"> Medicina Interna </MenuItem>
                        <MenuItem value="Pediatria"> Pediatria </MenuItem>
                        <MenuItem value="Traumatología"> Traumatología </MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth name="description" multiline rows={4} label="Descripcion"/>
            </ContainerForm>
            <Button variant='contained' > Registrar Datos del Paciente</Button>
            {/* {
                !error && <Alert severity="success">This is a success alert — check it out!</Alert>
            } */}

        </Container>
    )
}

export default ObligatoryForm