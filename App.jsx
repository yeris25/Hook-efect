import {createBrowserRouter, Routerprovider} from 'react-router-dom'
import Comentarios from './componenst/Comentarios'
import Albums from './componenst/Albums'
import  Photos  from './componenst/Photos'
import  Post from './componenst/Post'
import Usuario from './componenst/Usuario'
const router = createBrowserRouter([



{
  path:'/Comentarios',
  element:<Comentarios/>
},
{
  path:'/Albums',
  element:<Albums/>
},
{
  path:'/Photos',
  element:<Photos/>,
},
{
path:'/Post',
element:<Post/>,
},
{
  path:'/Usuario',
  element:<Usuario/>,
},
{
  path:'/Post',
  element:<Post/>,
},


])


function App() {

  return (
    <>
    <Routerprovider router={router}/>
    </>
  )
}

export default App
