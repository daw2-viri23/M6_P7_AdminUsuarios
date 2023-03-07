import { about } from "../vistas/about"
import { Admin } from "../vistas/admin"
import { registro } from "./registro"

export const router = {
    admin: ()=>{
        document.querySelector("#admin").addEventListener("click", ()=>{
            document.querySelector("#app").innerHTML = Admin.template
            Admin.script()
        })
    },
    about: ()=>{
        document.querySelector("#about").addEventListener("click", ()=>{
            document.querySelector('#app').innerHTML = about.template
        })
    },
    
}