import React from 'react'
import styled from '@emotion/styled';
import { Alert, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import ObligatoryForm from './ObligatoryForm';

type TypeDniPatient = number | null


const Container = styled.div`
    margin: 20px;
`
const ContainerForm = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`
const ContainerObligatoryForm = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

const NewPatient = () => {

    const [error, setError] = useState<Boolean>(true);
    const [DniPatient, setDniPatient] = useState<TypeDniPatient>(null);

    const handleRegister = () => {
        // setError(false);
        setDniPatient(12345678);
    }

    return (
        <Container>
            <Typography variant='body1'> Ingrese los datos del nuevo paciente:</Typography>
            <ContainerForm>
                <TextField type="text" label="DNI"/>
                <TextField label="Nombre"/>
                <TextField label="Apellidos"/>
                <TextField label="Edad"/>
            </ContainerForm>
            <Button variant='contained' disabled={DniPatient ? true : false} onClick={handleRegister}> Registrar Paciente</Button>
            {/* {
                !error && <Alert severity="success">This is a success alert — check it out!</Alert>
            } */}
            <ContainerObligatoryForm>
                {
                    DniPatient && <ObligatoryForm/>
                }
            </ContainerObligatoryForm>
        </Container>
    )
}

export default NewPatient