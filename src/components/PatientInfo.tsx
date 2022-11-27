import styled from '@emotion/styled';
import { Dialog, DialogTitle, Typography } from '@mui/material';
import usePatientTriaje from '../hooks/usePatientTriaje';
import { useEffect, useState } from 'react';
import { DataTriajeInterface } from '../../data/patient.interface';

interface propsInterface {
    open: boolean,
    onClose: () => void,
    valuePatient: string
}

const Container = styled.div`
    margin: 40px;
`
const ContainerInfoPatient = styled.div`
    display: flex;
    padding-left: 20px;
    padding-bottom: 20px;
    background-color: beige;
`
const ContainerInfoTriaje = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-bottom: 20px;
    background-color: beige;
`
const ContainerText = styled.div`
    margin-top: 20px;
    width: 200px;
`
const ContainerText2 = styled.div`
    margin-top: 20px;
    width: 260px;
`

const PatientInfo = ({ open, onClose, valuePatient}: propsInterface) => {

    const handleClose = () => {
        onClose();
    };

    const {getDataPaciente} = usePatientTriaje();
    const [patient, setPatient] = useState<DataTriajeInterface >({} as DataTriajeInterface);

    useEffect( () => {
        if(open){
            getDataPaciente(parseInt(valuePatient)).then(
                (data) => {
                    data.admissionTime = new Date(data.admissionTime);
                    setPatient(data)
                    console.log(data);
                }
            );
        }
    }, [open])

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth={'md'}>
            <DialogTitle align='center' > Registro de atención en Triaje </DialogTitle>

                   <Container>
                        <Typography variant='h5'> Información del Paciente </Typography>
                        <ContainerInfoPatient>
                            <ContainerText>
                                <Typography variant='h6'> DNI:  </Typography>
                                <Typography variant='subtitle1'> {patient.patient?.dni} </Typography>
                            </ContainerText>
                            <ContainerText>
                                <Typography variant='h6'> Nombres:  </Typography>
                                <Typography variant='subtitle1'> {patient.patient?.names} </Typography>
                            </ContainerText>
                            <ContainerText>
                                <Typography variant='h6'> Apellidos:  </Typography>
                                <Typography variant='subtitle1'> {patient.patient?.lastNames} </Typography>
                            </ContainerText>
                            <ContainerText>
                                <Typography variant='h6'> Edad:  </Typography>
                                <Typography variant='subtitle1'> {patient.patient?.age} </Typography>
                            </ContainerText>
                        </ContainerInfoPatient>
                        <br/>
                        <Typography variant='h5'> Información de Triaje </Typography>
                        <ContainerInfoTriaje>
                            <ContainerText2>
                                <Typography variant='h6'> Hora de Ingreso:  </Typography>
                                <Typography variant='subtitle1'> { patient.admissionTime?.toLocaleDateString() + ' - ' +patient.admissionTime?.toLocaleTimeString()} </Typography>
                            </ContainerText2>
                            <ContainerText2>
                                <Typography variant='h6'> Temperatura:  </Typography>
                                <Typography variant='subtitle1'> {patient.temperature}° Celsius</Typography>
                            </ContainerText2>
                            <ContainerText2>
                                <Typography variant='h6'> Ritmo Cardiaco:  </Typography>
                                <Typography variant='subtitle1'> {patient.heartRate}ppm </Typography>
                            </ContainerText2>
                            <ContainerText2>
                                <Typography variant='h6'> IMC:  </Typography>
                                <Typography variant='subtitle1'> {patient.imc} </Typography>
                            </ContainerText2>
                            <ContainerText2>
                                <Typography variant='h6'> Especialidad Derivada:  </Typography>
                                <Typography variant='subtitle1'> {patient.speciality} </Typography>
                            </ContainerText2>
                            <ContainerText2>
                                <Typography variant='h6'> Descripción  </Typography>
                                <Typography variant='subtitle1'> {patient.description} </Typography>
                            </ContainerText2>
                        </ContainerInfoTriaje>
                   </Container>

        </Dialog>
    )
}

export default PatientInfo