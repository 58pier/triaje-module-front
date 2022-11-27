import ReactShortcut from 'react-shortcut';

const Shortcuts = () => {
  return (
    <>

        <ReactShortcut 
            keys= "ctrl+shift+1"
            onKeysPressed= {() => {
                console.log('ctrl+d')
            }}
        />

    </>
  )
}

export default Shortcuts