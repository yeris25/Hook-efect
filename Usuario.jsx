import { useDebugValue, useEffect, useState } from "react"

const Usuario = () => {
    const [Users, setUsuario] = useState ([])
    const mostrarUsuario = async () => { 
    await fetch ('https://jsonplaceholder.typicode.com/users')
    .then ((res)=> res.json())
    .then ((data) => setUsuario(data))
    .catch ((err) =>{
        console.log(err)
    })

    }

useEffect(()=>{
    mostrarUsuario()
}, [])


console.log (Usuario)

}
    return (
        <section>
            {
                    Usuario.map((Usuario)=>(
                    <section key={Usuario.id}>
                    <h1>{Usuario.name}</h1>
                    <p>{Usuario.username}</p>
                    <p>{Usuario.email}</p>
                    <p>{Usuario.address.street}</p>
                    <p>{Usuario.address.suite}</p>
                    <p>{Usuario.address.city}</p>
                    <p>{Usuario.address.zipcode}</p>
                    <p>{Usuario.address.geo.lat}</p>
                    <p>{Usuario.address.geo.lng}</p>
                    </section>
                ))
            }
        </section>
    )
    

export default Usuario



import React from 'react'

export const Usuarios = () => {
  return (
    <div>Usuario</div>
  )
}
