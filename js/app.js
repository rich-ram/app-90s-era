const form = document.getElementById('form');
const arreglo1 = ['BACKSTREET BOYS', 
                            'EL PRINCIPE DEL RAP', 
                            'HERCULES',
                            'HEY ARNOLD',
                            'MI POBRE ANGELITO',
                            'POKEMON',
                            'RUGRATS',
                            'SPACE JAM',
                            'DINOSAURIOS',
                            'PLAZA SESAMO',
                            'POWER RANGERS',
                            'TINY TOONS'];

//Crear los divs para cada imagen
const quizzImg =()=>{

    for (let i = 1; i <= arreglo1.length; i++) {
        const div = document.createElement('div')
        div.className ='col-lg-4 col-md-6 col-sm-12'
        
        form.appendChild(div)
        //Carga de Imagenes:
        div.innerHTML=
        `<img src=./assets/images/`+i+`.png id=img`+i+`></img>
        <div class="input-group">
            <input type='text' class='form-control' id='input`+i+`' placeholder='Escribe...'>
        </div>` 
    }
}


//Validar datos:
const checkInput =()=>{

    let total = arreglo1.length;
    let puntos = 0;
    
    
    for(let i = 1; i<=total; i++){
        const input = document.getElementById('input'+i);

        if(input.value === null || input.value === ''){
            input.placeholder='Hey!! Vamos, escribe lo que recuerdes...'
            error(true, input)
        }else{
            if(input.value.toUpperCase() === arreglo1[i-1]){
                puntos++;
                error(false, input)

            }else{
                input.value = ""
                input.placeholder = "Intenta de nuevo crack"
                error(true, input)
            }

        }
        
    }

    let contador = document.getElementById('contador');
    contador.innerHTML = '<p class="nav-item contador"  id="contador">'+puntos+'/'+total+'</p>'
    if(contador.value == total){
        alert('¡¡¡¡¡GANASTE!!!!!');
    }
}

const error = (check, input) =>{
    
    if (check) {
        input.classList.remove('is-valid')
        input.classList.add('is-invalid')
    }else{
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')
        input.disabled =true
    }
}

const btnSubmit = document.querySelector('.check')
btnSubmit.onclick=(e)=>{
    e.preventDefault()
    checkInput()
}











