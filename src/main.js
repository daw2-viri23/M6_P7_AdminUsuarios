import { header } from './componentes/header'
import { adminUsuarios } from './componentes/adminUsuarios';
import './style.css'
import { Admin } from './vistas/admin';
import { about } from './vistas/about';
import { router } from './componentes/router';
import { registro } from './componentes/registro';




document.querySelector('header').innerHTML = header.template


router.admin()
router.about()

adminUsuarios.borrar()
adminUsuarios.editar()
console.log(adminUsuarios.usuarios)



//