import styled from '@emotion/styled';
import { Button, InputLabel, InputAdornment, MenuItem, Select, Typography, TextField, FormControl, Alert } from '@mui/material';
import { useState } from 'react';
import { DataTriajeInterface, PatientInterface } from '../../data/patient.interface';

interface errorInterface {
    message: string,
    exist: boolean
}

interface propsInterface {
    patient: PatientInterface,
}

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
    patient: null,
    admissionTime: null,
    temperature: null,
    heartRate: null,
    weight: null,
    height: null,
    imc: null,
    speciality: null,
    description: null,
    state: null
}

const ObligatoryForm = ({ patient }: propsInterface) => {

    const [dataTriaje, setDataTriaje] = useState<DataTriajeInterface>(INITIAL_STATE)
    const [error, setError] = useState<errorInterface>({ message: '', exist: false });


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataTriaje({
            ...dataTriaje,
            [event.target.name]: event.target.value
        })
    }

    const handleRegister = (event: any) => {
        event.preventDefault();
        if (handleValidate()) {
            setDataTriaje({
                ...dataTriaje,
                patient: patient,
                imc: parseFloat((dataTriaje.weight! / (dataTriaje.height! * dataTriaje.height!)).toFixed(2)),
                admissionTime: new Date(),
                state: 'En Espera'
            })
            console.log(dataTriaje)
        }
    }

    const handleValidate = () => {
        if (
            dataTriaje.temperature &&
            dataTriaje.heartRate &&
            dataTriaje.weight &&
            dataTriaje.height &&
            dataTriaje.speciality
        ) {
            if (dataTriaje.temperature <= 30 || dataTriaje.temperature >= 50) {
                setError({ message: 'La temperatura debe ser mayor de 30 y menor de 50', exist: true })
                return false;
            } else if (dataTriaje.heartRate < 0 || dataTriaje.heartRate > 200) {
                setError({ message: 'La frecuencia cardiaca debe estar entre 0 y 200', exist: true })
                return false;
            } else if (dataTriaje.weight < 0 || dataTriaje.weight > 300) {
                setError({ message: 'El peso debe estar entre 0 y 200', exist: true })
                return false;
            } else if (dataTriaje.height < 0 || dataTriaje.height > 3) {
                setError({ message: 'La altura debe estar entre 0 y 3 metros', exist: true })
                return false;
            } else {
                setError({ message: '', exist: false })
                return true;
            }
        } else {
            setError({ message: 'Todos los campos son obligatorios', exist: true })
            return false;
        }
    }


    return (
        <Container>
            <Typography variant='body1'> Ingrese los datos de triaje del paciente:</Typography>
            <ContainerForm>
                <CustomizedInputBase InputProps={{ endAdornment: <InputAdornment position="end">°C</InputAdornment>, }} onChange={handleInputChange} value={dataTriaje.temperature || ''} name="temperature" label="Temperatura" required />
                <CustomizedInputBase onChange={handleInputChange} value={dataTriaje.heartRate || ''} name="heartRate" label="Frecuencia Cardiaca" required />
                <CustomizedInputBase InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>, }} onChange={handleInputChange} value={dataTriaje.weight || ''} name="weight" label="Peso" required />
                <CustomizedInputBase InputProps={{ endAdornment: <InputAdornment position="end">m</InputAdornment>, }} onChange={handleInputChange} value={dataTriaje.height || ''} name="height" label="Talla" required />
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
                        value={dataTriaje.speciality || ''}
                        onChange={(e) => setDataTriaje({ ...dataTriaje, speciality: e.target.value as string })}
                    >
                        <MenuItem value="Emergencia"> Emergencia </MenuItem>
                        <MenuItem value="Medicina Interna"> Medicina Interna </MenuItem>
                        <MenuItem value="Pediatria"> Pediatria </MenuItem>
                        <MenuItem value="Traumatología"> Traumatología </MenuItem>
                    </Select>
                </FormControl>
                <TextField fullWidth onChange={handleInputChange} value={dataTriaje.description || ''} name="description" multiline rows={4} label="Descripcion" />
            </ContainerForm>
            <Button type="submit" onClick={handleRegister} variant='contained' > Registrar Datos del Paciente</Button>
            {
                error.exist && <Alert severity="error">{error.message}</Alert>
            }

        </Container>
    )
}

export default ObligatoryForm