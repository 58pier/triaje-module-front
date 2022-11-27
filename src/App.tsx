import 'regenerator-runtime/runtime'
import styled from '@emotion/styled'
import { Typography, Button } from '@mui/material'
import { useState } from 'react'
import ExistentPatient from './components/ExistentPatient';
import NewPatient from './components/NewPatient'
import TablePatients from './components/TablePatients';
import usePatientTriaje from './hooks/usePatientTriaje';
import usePatient from './hooks/usePatient';
import Shortcuts from './components/Shortcuts';

//Speech



type TypePatient  =
	'newPatient' |
	'existentPatient' |
	''

const Container = styled.div`
	margin: 20px;
	display: flex;
	justify-content: space-around;
`

const ContainerPatientOption = styled.div`
	margin: 20px;
	border-color: red;
	width: 20%;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
const ContainerForm = styled.div`
	background-color: beige;
	width: 50%;
`

const ContainerTable = styled.div`
	margin: 20px;
`

const App = () => {


	//APP
	const [typePatient, setTypePatient] = useState<TypePatient>('')

	const { isLoading, patientsTriaje, postPatientTriaje  } = usePatientTriaje();
	const { patients, postPatient  } = usePatient();

	const handleTypePatient = (event: React.MouseEvent<HTMLButtonElement>) => {
		let value = event.currentTarget.value
		setTypePatient(value as TypePatient)
	}

	return (
		<>
			<Shortcuts/>
			<Typography variant='h3'> Bienvenido al  Modulo de Triaje</Typography>
			<Container>
				<ContainerPatientOption>
					<Typography variant='subtitle1'> Seleccione el tipo de paciente:</Typography>
					<Button disabled={typePatient ? true : false} variant='contained' value='newPatient' onClick={ handleTypePatient}> Paciente Nuevo  </Button>
					<Button disabled={typePatient ? true : false} variant='contained' value='existentPatient' onClick={handleTypePatient}> Paciente Existente  </Button>
				</ContainerPatientOption>
				<ContainerForm>
				{
					typePatient && <Button variant='outlined' onClick={() => setTypePatient('')}> Salir</Button>
				}
				{
					(
						typePatient === 'newPatient' && <NewPatient postPatient={postPatient} postPatientTriaje={postPatientTriaje} setTypePatient={setTypePatient}/>
						|| typePatient === 'existentPatient' && <ExistentPatient />
					)
				}
				</ContainerForm>
			</Container>
			<ContainerTable>
				<TablePatients isLoading={isLoading} patientsTriaje={patientsTriaje} />
			</ContainerTable>
		</>
	)
}

export default App