//Boton de crear
const btnTarea = document.querySelector('#btnTarea')
//Input donde se escribe la tarea
 const creaTarea = document.querySelector('#creaTarea')
let value = ''

//Evento para capturar el valor del input
creaTarea.addEventListener('change', (e) => {
    value = e.target.value
 })

// const crearTarea = () => {
//     const div = document.createElement('div')
//     div.classList.add('form-check')
//     const input = document.createElement('input')
//     input.type = 'checkbox'
//     input.id = 'dos'
//     input.classList.add('form-check-input')
//     const label = document.createElement('label')
//     label.classList.add('form-check-label')
//     const parrafo = document.createElement('p')
//     parrafo.id = 'textDos'
//     parrafo.textContent = value
//     div.insertAdjacentElement('afterbegin', label)
//     div.insertAdjacentElement('afterbegin', input)
//     label.insertAdjacentElement('afterbegin', parrafo)
//     const  tareas = document.querySelector('#tareas')

//     tareas.insertAdjacentElement('afterbegin', div)
// }
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
        <button id='btnDelete-${contador}' class='Eliminar-button '><img src="./assets/img/papelera.png" alt="Eliminar"></button>  
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



//Mover elemento
// const element = document.querySelector(".element");

// const keyframes = [
//   { transform: "translate(0, 0)" },
//   { transform: "translate(900px, 0)" },
//   { transform: "translate(600px, 0px)" },
//   { transform: "translate(0, 0px)" }
// ];

// element.animate(keyframes, 10000);

/* <div class="form-check">
    <input id="uno" class="form-check-input" type="checkbox" value="" >
    <label class="form-check-label" for="defaultCheck1">
     <p id="textUno">Tengo que lavar maniana a las 8:00</p>
    </label>
    </div> */