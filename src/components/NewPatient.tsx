import React from 'react'
import styled from '@emotion/styled';
import { Alert, TextField, Typography, Button, InputAdornment } from '@mui/material';
import { useState } from 'react';
import ObligatoryForm from './ObligatoryForm';
import { PatientInterface, DataTriajeInterface } from '../../data/patient.interface';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



interface propsInterface {
    postPatientTriaje: (data: DataTriajeInterface) => void,
    postPatient: (data: PatientInterface) => void,
    setTypePatient: (type: any) => void
}
interface errorInterface  {
    message: string,
    exist: boolean
}

const Container = styled.div`
    margin: 20px;
`
const ContainerForm = styled.div`
    width: 100%;
    height: 25vh;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const ContainerObligatoryForm = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const CustomizedInputBase = styled(TextField)`
    width: 30%;
    margin-bottom: 2%;
    flex: none;
`

const INITIAL_VALUE = {
    dni: null,
    names: null,
    lastNames: null,
    age: null
}

const NewPatient = ({
    postPatientTriaje,
    postPatient,
    setTypePatient
}: propsInterface) => {

    const { transcript  } = useSpeechRecognition();
    
    const [error, setError] = useState<errorInterface>({message: '', exist: false});
    const [patient, setPatient] = useState<PatientInterface>(INITIAL_VALUE);
    const [validated, setValidated] = useState(false)

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPatient({
            ...patient,
            [event.target.name]: (event.target.type == 'number' ? parseInt(event.target.value)  : event.target.value )
        })
    }

    const handleRegister = (e:any) => {
        e.preventDefault();
        if(handleValidate()){
            postPatient(patient);
        }
    }

    const handleValidate = () => {
        if (patient.dni && patient.names && patient.lastNames && patient.age) {
            if(patient.dni.toString().length == 8){
                setValidated(true)
                setError({message: '', exist: false})
                return true;
            }else{
                setError({message: 'El DNI debe tener 8 dígitos', exist: true})
            }
        } else {
            setError({
                message: 'Debe completar todos los campos',
                exist: true
            });
            setValidated(false);
        }
    }

    const handleFocus = (event:any) => {
        SpeechRecognition.startListening({ language: 'es-ES' });
        console.log(transcript)
    }

    const handleBlur = (event: any) => {
        SpeechRecognition.stopListening()
        if(transcript){
            setPatient({
                ...patient,
                [event.target.name]: (event.target.type == 'number' ? parseInt(transcript)  : transcript )
            })
        }
    }



    return (
        <Container>
            <Typography variant='body1'> Ingrese los datos del nuevo paciente:</Typography>
            <ContainerForm>
                <CustomizedInputBase disabled={validated ? true : false} onFocus={handleFocus} onBlur={handleBlur}    type="number" name="dni" value={patient.dni || "" } label="DNI" onChange={handleInputChange} required />
                <CustomizedInputBase disabled={validated ? true : false} onFocus={handleFocus} onBlur={handleBlur} name="names" value={patient.names || ""} label="Nombres" onChange={handleInputChange} required />
                <CustomizedInputBase disabled={validated ? true : false} onFocus={handleFocus} onBlur={handleBlur} name="lastNames" value={patient.lastNames || ""} label="Apellidos" onChange={handleInputChange} required />
                <CustomizedInputBase onFocus={handleFocus} onBlur={handleBlur} InputProps={{ endAdornment: <InputAdornment position="end">años</InputAdornment>, }} disabled={validated ? true : false} type="number" name="age" value={patient.age || ""} label="Edad" onChange={handleInputChange} required />
            </ContainerForm>
            <Button type="submit" variant='contained' disabled={ validated ? true : false} onClick={handleRegister}>{ validated ?  'Paciente registrado' : 'Registrar Paciente' }</Button>
            {
                error.exist && <Alert severity="error">{error.message}</Alert>
            }
            <ContainerObligatoryForm>
                {
                    ( validated ) && <ObligatoryForm patient={patient} postPatientTriaje={postPatientTriaje} setTypePatient={setTypePatient} />
                }
            </ContainerObligatoryForm>
        </Container>
    )
}

export default NewPatient