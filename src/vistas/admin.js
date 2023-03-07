import { adminUsuarios } from "../componentes/adminUsuarios";

import { registro } from "../componentes/registro";

export const Admin = {
    template: `
       <div class="row">
                <div id="registro" class="col-4">
                </div> 
               <div class="col-8">
                    ${adminUsuarios.pintaTabla()}
               </div> 
               
       </div> 
      
    `,
    script: ()=>{
        document.querySelector('#registro').innerHTML = registro.template
        registro.script()
    }
    
}