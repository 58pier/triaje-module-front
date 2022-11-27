import ReactShortcut from 'react-shortcut';
import SpeechRecognition  from 'react-speech-recognition';

const Shortcuts = () => {



	return (
		<>

			<ReactShortcut
				keys="ctrl+shift+1"
				onKeysPressed={() => {
					console.log('Iniciar');
					SpeechRecognition.startListening({ continuous: true, language: 'es-ES' });
				}}
			/>
			<ReactShortcut
				keys="ctrl+shift+2"
				onKeysPressed={() => {
					console.log('Detener');
					SpeechRecognition.abortListening()
				}}
			/>

		</>
	)
}

export default Shortcuts