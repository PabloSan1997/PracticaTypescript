import React from 'react'
import { Buscador } from './componentes/Buscador'
import { Confirmar } from './componentes/Confirmar';
import { Contenedor } from './componentes/Contenedor'
import { Formulario } from './componentes/Formulario';
import { Header } from './componentes/Header'
import { Contexto, Provedor } from './contexto/contexto';


type miContexto={
  borrar:boolean
}

function App():JSX.Element{
  const [mostrar, setMostrar]=React.useState<boolean>(false);
  const {borrar}=React.useContext(Contexto) as miContexto;
  return (

        <div className="App">
      <Header/>
      <Buscador/>
      <Contenedor/>
      {mostrar && <Formulario setMostrar={setMostrar}/>}
      {borrar &&  <Confirmar/>}
      <button className='boton' onClick={()=>setMostrar(!mostrar)}>+</button>
    </div>

  )
}

export default App
