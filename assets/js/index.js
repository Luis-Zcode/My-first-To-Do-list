const btnTarea = document.querySelector('#btnTarea')

 const creaTarea = document.querySelector('#creaTarea')
let value = ''

creaTarea.addEventListener('change', (e) => {
    value = e.target.value
 })
const tareaUno = document.querySelector('#uno')
const action = () => {
    const textUno = document.querySelector('#textUno')
    textUno.classList.toggle("text-decoration-line-through")
}

let contador = 0
const crearTareita = () => {
   
    if(value.trim().length == 0){
        alert('Ingrese una tarea');return
    }

    if(value != '')
    {

    contador = contador +1;
    const div = 
    `
<div id='padre-${contador}' class='d-flex'>
        <div id='color' class='d-flex noMarcado bg-danger'>
            <div class="form-check moverTareas">
                <input id='tarea-${contador}' class="form-check-input" type="checkbox" value="" >
                <label class="form-check-label" for="defaultCheck1">
                    <p class='centrarParrafo' id="parrafo-${contador}">${value}</p>
                </label>
            </div>
        </div>
        <div>
        <button id='btnDelete-${contador}' class='Eliminar-button btn btn-danger'><img src="./assets/img/papelera.svg" alt="Eliminar"></button>  
    </div>
 </div>
    `
 
creaTarea.value = ''
value = ''

    const tareas = document.querySelector('#tareas')
    tareas.insertAdjacentHTML('afterbegin', div) 

    const CheckboxCreado = document.querySelector(`#tarea-${contador}`)
    const ParrafoCreado = document.querySelector(`#parrafo-${contador}`)
    const Color = document.querySelector(`#color`)
    const padre = document.querySelector(`#padre-${contador}`)
   
    CheckboxCreado.addEventListener('click', () => {
        ParrafoCreado.classList.toggle('text-decoration-line-through')

        if(Color.classList.item(2) == 'bg-danger'){
            Color.classList.replace('bg-danger', 'bg-success')
        }else if(Color.classList.item(2) == 'bg-success'){
            Color.classList.replace('bg-success', 'bg-danger')
        }

    })
    
    const btnDelete= document.querySelector(`#btnDelete-${contador}`)

    btnDelete.addEventListener('click', () => {
        padre.remove()
    })
}
}

tareaUno.addEventListener('click', action)
btnTarea.addEventListener('click', crearTareita)