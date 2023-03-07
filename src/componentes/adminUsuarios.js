import { v4 as uuidv4 } from 'uuid';


export const adminUsuarios = {
    

    
    usuarios: [
        {
            id:uuidv4(),
            nick: 'JoseLu',
            email: 'joseluisviri@gmail.com',
            pass: '11111'
        },
        {
            id:uuidv4(),
            nick: 'nicolas',
            email: 'nicolas@gmail.com',
            pass: '22222'
        },
        {
            id:uuidv4(),
            nick: 'pau',
            email: 'pau@gmail.com',
            pass: '33333'
        }
    ],
    pintaTabla: (usuarios)=>{

        var html= `
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nick</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
    `
    for(let indice=0;indice<adminUsuarios.usuarios.length;indice++){
        //con la ruta podremos agregar nuestros datos en la tabla del html utilizando el "${}" 
        html+= `
            <tr id="userid${adminUsuarios.usuarios[indice].id}">
                <td>${adminUsuarios.usuarios[indice].id}</td>
                <td>${adminUsuarios.usuarios[indice].nick}</td>
                <td>${adminUsuarios.usuarios[indice].email}</td>
                <td><button type="button" class="editar btn btn-primary ml-5 " data-id="${adminUsuarios.usuarios[indice].id}">✏️</button></td>
                <td><button type="button" class="borrar btn btn-danger" data-id="${adminUsuarios.usuarios[indice].id}">🗑️</button></td>
            </tr>
    
            `
        }
            html+=`
                </tbody>
            </table>
        `
        return(html)
        //con el return devolvemos la variable html con su codigo, y lo mostrara en la terminal.

    },

    borrar: ()=>{
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('borrar')){
                var idUsuario = '#userid' + event.target.dataset.id
                console.log('has hecho click en borrar al usuario ' + idUsuario)
                document.querySelector(idUsuario).classList.add('d-none')

            }
            
        })
    },
    editar: ()=>{
        document.querySelector('main').addEventListener("click", (event)=>{
            if(event.target.classList.contains('editar')){
                var idUsuario = event.target.dataset.id
                console.log('has hecho click en editar al usuario ' + idUsuario)
            }
            
        })
    }
    
}