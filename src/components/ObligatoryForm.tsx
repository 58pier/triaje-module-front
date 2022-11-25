import styled from '@emotion/styled';
import { Typography, TextField, Button } from '@mui/material';

const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`
const ContainerForm = styled.div`
    width: 100%;
    height: 25vh;
    margin-top: 20px;
    margin-bottom: 20px;
`
const CustomizedInputBase = styled(TextField)`
    width: 28%;
    float: left;
    margin-right: 3%;
    margin-bottom: 2%;
`
const ObligatoryForm = () => {
    return (
        <Container>
            <Typography variant='body1'> Ingrese los datos de triaje del paciente:</Typography>
            <ContainerForm>
                <CustomizedInputBase label="Temperatura"/>
                <CustomizedInputBase label="Frecuencia Cardiaca"/>
                <CustomizedInputBase label="Peso"/>
                <CustomizedInputBase label="Talla"/>
                <CustomizedInputBase disabled label="IMC"/>
            </ContainerForm>
            <Button variant='contained' > Registrar Datos del Paciente</Button>
            {/* {
                !error && <Alert severity="success">This is a success alert — check it out!</Alert>
            } */}

        </Container>
    )
}

export default ObligatoryForm