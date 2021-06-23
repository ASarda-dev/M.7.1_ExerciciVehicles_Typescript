const createcar2:any = document.getElementById('createcar2');
const inputs:any = document.querySelectorAll('#createcar2 input');
const plate:any = document.getElementById('plate');
const createwheel2:any = document.getElementById('createwheel2');
const inputs2 = document.querySelectorAll('#createwheel2 input');
const infocar2:any = document.getElementById('car');
const infowheel2:any = document.getElementById('wheel');
const info:any = document.getElementById('infocar');

let car2:Car;
let listCar2 = new Array();

const expresiones = {
    plate: /^[\d]{4}[a-zA-Z]{3}$/,
    brand: /^[a-zA-Z0-9]{3,15}$/,
    color: /^[a-zA-z]{3,15}$/,
    brand2: /^[a-zA-Z0-9]{3,15}$/,
}

const validarFormulario = (e:any) => {
    switch(e.target.name){
        case 'plate':
            validarCampo(expresiones.plate, e.target, e.target.name);
            break;
        case 'brand':
            validarCampo(expresiones.brand, e.target, e.target.name);
            break;
        case 'color':
            validarCampo(expresiones.color, e.target, e.target.name);
            break;
    }
}

const validarFormulario2 = (e:any) => {
    switch(e.target.name){
        case 'brand1':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break
        case 'brand2':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break
        case 'brand3':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break
        case 'brand4':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break;
        case 'diametro1':
            validarCampo2(e.target, e.target.name);
            break;
        case 'diametro2':
            validarCampo2(e.target, e.target.name);
            break;
        case 'diametro3':
            validarCampo2(e.target, e.target.name);
            break;
        case 'diametro4':
            validarCampo2(e.target, e.target.name);
            break;
    }
}

const validarCampo2 = (input:any, campo:any) => {
    if(input.value > 0.4 && input.value < 2){
        document.getElementById(campo)?.classList.remove('is-invalid');
        document.getElementById(campo)?.classList.add('is-valid');
    }else{
        document.getElementById(campo)?.classList.add('is-invalid');
        document.getElementById(campo)?.classList.remove('is-valid');
    }
}

const validarCampo = (expresion:any, input:any, campo:any) => {
    if(expresion.test(input.value)){
        document.getElementById(campo)?.classList.remove('is-invalid');
        document.getElementById(campo)?.classList.add('is-valid');
    }else{
        document.getElementById(campo)?.classList.add('is-invalid');
        document.getElementById(campo)?.classList.remove('is-valid');
    }
}

inputs.forEach((input:any) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

inputs2.forEach((input:any) => {
    input.addEventListener('keyup', validarFormulario2);
    input.addEventListener('blur', validarFormulario2);
})

createcar2.addEventListener('submit', (e:any) => {
    e.preventDefault();
})

createwheel2.addEventListener('submit', (e:any) => {
    e.preventDefault();
})

function createCar2(plate:string,brand:string,color:string){
    console.log(car2);
    let registrada = false;
    for(let i=0; i< listCar2.length; i++){
        if(listCar2[i].plate == plate){
            registrada = true;
        }
    }

    if(!registrada && plate != '' && brand != '' && color != ''){
        car2 = new Car(plate, color, brand);
        listCar2.push(car2);
        createcar2.style.display="none";
        createwheel2.style.display="block";
        console.log(listCar2);
        createcar2.reset();
        document.getElementById('plate')?.classList.remove('is-valid');
        document.getElementById('brand')?.classList.remove('is-valid');
        document.getElementById('color')?.classList.remove('is-valid');
    }

    if(registrada ){
        alert('Error!!! Ya existe plate introduzca otra');
        document.getElementById('plate')?.classList.remove('is-valid');
        document.getElementById('plate')?.classList.add('is-invalid');
    }
    let titulo:any = document.getElementById('titulo');
    titulo.remove()
}

function createWheel2(diametro1:number,brand1:string,diametro2:number,brand2:string,diametro3:number,brand3:string,diametro4:number,brand4:string){
    
    let wheel1 = new Wheel(diametro1, brand1);
    let wheel2 = new Wheel(diametro2, brand2);
    let wheel3 = new Wheel(diametro3, brand3);
    let wheel4 = new Wheel(diametro4, brand4);

    if(brand1 != null && diametro1 != null && brand2 != null && diametro2 != null && brand3 != null && diametro3 != null && brand4 != '' && diametro4 != null){
        car2.addWheel(wheel1);
        car2.addWheel(wheel2);
        car2.addWheel(wheel3);
        car2.addWheel(wheel4);
        createwheel2.style.display="none";
        createwheel2.reset();
        document.getElementById('brand1')?.classList.remove('is-valid');
        document.getElementById('diametro1')?.classList.remove('is-valid');
        document.getElementById('brand2')?.classList.remove('is-valid');
        document.getElementById('diametro2')?.classList.remove('is-valid');
        document.getElementById('brand3')?.classList.remove('is-valid');
        document.getElementById('diametro3')?.classList.remove('is-valid');
        document.getElementById('brand4')?.classList.remove('is-valid');
        document.getElementById('diametro4')?.classList.remove('is-valid');
        showCar2();
    }
    console.log(car2);
    console.log(listCar2);
}

function newcar(){
    info.style.display="none";
    createcar2.style.display="block";
    createwheel2.style.display="none";
}

function showCar2(){
    info.style.display = 'block';
    infocar2.innerHTML = `
   <div class="tit">
    COCHE :
    </div>
    <br>   
   <strong> PLATE : </strong> ${car2.plate} 
   <strong> BRAND : </strong> ${car2.brand} 
   <strong> COLOR : </strong> ${car2.color}
    `;
    infowheel2.innerHTML = `<br>
    <div class="tit">
    RUEDAS:
    </div>
   <br>
    <strong> MARCA RUEDA 1 : </strong> ${car2.wheels[0].diameter} <br><strong>DIAMETRO RUEDA 1 : </strong> ${car2.wheels[0].brand}<br>
    <strong> MARCA RUEDA 2 : </strong> ${car2.wheels[1].diameter} <br><strong>DIAMETRO RUEDA 2 : </strong> ${car2.wheels[1].brand}<br>
    <strong> MARCA RUEDA 3 : </strong> ${car2.wheels[2].diameter} <br><strong>DIAMETRO RUEDA 3 : </strong> ${car2.wheels[2].brand}<br>
    <strong> MARCA RUEDA 4 : </strong> ${car2.wheels[3].diameter} <br><strong>DIAMETRO RUEDA 4 : </strong> ${car2.wheels[3].brand}<br>
    `;
}