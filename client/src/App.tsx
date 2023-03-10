import React from 'react'
import { Buscador } from './componentes/Buscador'
import { Contenedor } from './componentes/Contenedor'
import { Formulario } from './componentes/Formulario';
import { Header } from './componentes/Header'



function App():JSX.Element{
  const [mostrar, setMostrar]=React.useState<boolean>(true);
  return (
    <div className="App">
      <Header/>
      <Buscador/>
      <Contenedor/>
      {mostrar && <Formulario setMostrar={setMostrar}/>}
      <button className='boton' onClick={()=>setMostrar(!mostrar)}>+</button>
    </div>
  )
}

export default App
