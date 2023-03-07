import { v4 as uuidv4 } from 'uuid';
import { adminUsuarios } from './adminUsuarios';
import multiavatar from '@multiavatar/multiavatar/esm'

export const registro = {
    template: `
    
        <form class="form border bordered p-3 m-3 shadow" id="formularioRegistro">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nick</label>
            <input type="text" class="form-control" id="nick" aria-describedby="emailHelp">
            <div  class="form-text">nick</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div  class="form-text">email</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary" id="enviarForm">Submit</button>
        </form>
       <div id="avatar" class="col-6"></div> 
    
    `,
    script: ()=>{
       

        const formulario = document.querySelector('#formularioRegistro')
        console.log(formulario)
        const enviarForm = document.querySelector('#enviarForm')
        console.log('boton' , enviarForm)

        enviarForm.addEventListener('click', (event)=>{
            var dadesUsuari = new Object()
            dadesUsuari.id = uuidv4()
            dadesUsuari.nick = document.querySelector('#nick').value
            dadesUsuari.email = document.querySelector('#email').value
            dadesUsuari.pass = document.querySelector('#password').value
            event.preventDefault()
            console.log('se ha hecho click en el boton de enviar formulario')
            console.log(dadesUsuari)
            adminUsuarios.usuarios.push(dadesUsuari)
            console.log(adminUsuarios.usuarios)

            let nuevoUsuario = `
                
            <tr id="userid1${dadesUsuari.id}" class="d-none">
                <td>${dadesUsuari.id}</td>
                <td id="nick-tabla">${dadesUsuari.nick}</td>
                <td>${dadesUsuari.email}</td>
                <td><button type="button" class="editar btn btn-primary ml-5 " data-id="${dadesUsuari.id}">✏️</button></td>
                <td><button type="button" class="borrar1 btn btn-danger" data-id="${dadesUsuari.id}">🗑️</button></td>
            </tr>`

                const tr = document.createElement('tr')
                tr.setAttribute("id", dadesUsuari.id)
                tr.innerHTML = nuevoUsuario

                document.querySelector('tbody').append(tr)

           // document.querySelector('main').addEventListener('click', (event)=>{
                //if(event.target.classList.contains('borrar1')){
                  //  var idUsuari = '#userid1' + event.target.dataset.id
                //console.log('has hecho click en borrar al usuario ' + idUsuari)
                //document.querySelector(idUsuari).classList.add('d-none')
               // }
           // })


            
        })
        document.querySelector('#nick').addEventListener("keydown", (event)=>{
  
            let svgCode = multiavatar(event.target.value)
            document.querySelector('#avatar').innerHTML = svgCode;
          })


        //let svgCode = multiavatar(event.target.value)
        //    console.log(svgCode)
        //    document.querySelector('#avatar').innerHTML = svgCode;
    } 
}

 