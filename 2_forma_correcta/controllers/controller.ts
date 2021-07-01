"use strict";
let car:Car;

let carList = [];

    let plate:any = document.getElementById("inputPlate") as HTMLInputElement;
    let brand:any = document.getElementById("inputBrand") as HTMLInputElement;
    let color:any = document.getElementById("inputColor") as HTMLInputElement;  

    let j:number = 0;
    let diameter:any = document.getElementById("inputDiameter" + j);

    //car and wheels forms
    let infoCarForm:any      = document.getElementById("createCarForm") as HTMLFormElement;
    let infoWheelsForm:any   = document.getElementById("addWheelsForm") as HTMLFormElement;

    let btnCreateCar:any     = document.querySelector("btnCreateCar") as HTMLButtonElement;
    let btnCreateWheel:any   = document.querySelector("wheelsButton") as HTMLButtonElement;

    //elements to show cars
    let showInfo:HTMLElement = document.getElementById("showInfo") as HTMLDivElement;
    let showOnlyCar:HTMLElement = document.getElementById("showOnlyCar") as HTMLElement;
    let showCarWhithWheels:HTMLDivElement = document.getElementById("showCarWhithWheels") as HTMLInputElement;
      
  //FUNCTIONS
  function createCar():void{
    let validateCar:boolean = carValidate(plate, brand, color);
    
    if(validateCar == true){
      car = new Car(plate.value.toUpperCase(), brand.value, color.value);
      carList.push(car);
      //Mostrar informacio de crear el coche
      alert("El cotxe s´ ha creat correctament:  \n \n Matricula:   " + plate.value + "\n Marca:  " + brand.value + "\n Color:   " + color.value);
      //console.log(car);
      
      //Eliminar formulari
      infoCarForm.classList.add("d-none");
      //Afegir formulari
      infoWheelsForm.classList.remove('d-none');
      showInfoCar();
    }
  }
  // validar el format de cotxe del FORMULARI
  function carValidate(plate:HTMLInputElement, brand:HTMLInputElement, color:HTMLInputElement){
    let errorPlate:HTMLElement = <HTMLElement>document.getElementById('errorPlate');
    let errorBrand: HTMLElement = document.getElementById("errorBrand") as HTMLElement;
    let errorColor: HTMLElement = document.getElementById("errorColor") as HTMLElement;
    let errorAccount:number = 0;

    infoCarForm.classList.remove("is-invalid");
    if (plate.value == ""){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Es requereix introduir matricula";
      errorAccount ++;
    } else if (!plateValidation(plate)){
      plate.classList.add("is-invalid");
      errorPlate.textContent = "Matrícula erronea . La correcta seria amb aquest format:  0000XXX";
      errorAccount ++;
    }
    if (brand.value == ""){
      brand.classList.add("is-invalid");
      errorBrand.textContent = "Es requereix introduir marca";
      errorAccount ++;
    }
    if (color.value == ""){
      color.classList.add("is-invalid");
      errorColor.textContent = "Es requereix introduir color";
      errorAccount ++;
    }
    if (errorAccount > 0){
      return false;
    }else{
      return true;       
    }
  }
  //validar Matricula
  function plateValidation(plate:HTMLInputElement): boolean{
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate.value) ? true : false;
  }
 //Mostrar coche i rodes
  function showInfoCar():void{
    if(car.wheels.length < 1){
      showInfo.classList.remove('d-none');
      showOnlyCar.classList.remove('d-none');
      //print a car
      let showPlate: any = (document.getElementById("showPlate") as HTMLSpanElement).innerHTML = ("Matrícula: " + plate.value);
      let showBrand: any = (document.getElementById("showBrand") as HTMLSpanElement).innerHTML = ("Marca: " + brand.value);
      let showColor: any = (document.getElementById("showColor") as HTMLSpanElement).innerHTML = ("Color: " + color.value);
      showOnlyCar;
      

     infoCarForm.reset();
    }else{
      showCarWhithWheels.classList.remove('d-none');
      let i:number;
     
      for(let i=0; i<4; i++)    {
        let wheelNumber:number = 1;
        console.log(car.wheels[i]);
        //Crear nou element per mostrar dades
        let node:Element = document.createElement("h6");
        let textNode:Text = document.createTextNode("Rodal " + [i+1]);
        node.appendChild(textNode);
        showCarWhithWheels.appendChild(node);
        let showWheels:Text = document.createTextNode(`Marca: ${car.wheels[i].brand} <br> Diametre: ${car.wheels[i].diameter.toString()}`);
        showCarWhithWheels.appendChild(showWheels);
        wheelNumber++;
        showWheels;
      }
    }
  }
  function addWheelsList(){
    if (wheelValidate()){
      for (let i = 1; i<=4; i++) {
        let brand:string = (<HTMLInputElement>document.getElementById("inputWheelBrand" + i)).value;
        let diameter:any = (<HTMLInputElement>document.getElementById("inputDiameter" + i)).value;
        car.addWheel(new Wheel(brand, diameter));   
      }
        console.log(car.wheels);
        console.log(car);
        //Treure displays
        infoWheelsForm.classList.add('d-none');
        infoWheelsForm.reset();
    }
      showInfoCar();
  }
  //Validacio de rodes
  function wheelValidate(){ 
    let errorAccount:number = 0;
    for(let j=1;  j<=4;  j++){
      let diameter:any = document.getElementById("inputDiameter" + j);
      let diameterValue:any = (<HTMLInputElement>document.getElementById("inputDiameter" + j)).value;
        
   
      if (diameterValue<0.4 || diameterValue>2){
        diameter.classList.add("is-invalid");
        errorAccount++;
      }else if(diameter.classList.contains('is-invalid')){
        diameter.classList.add("is-invalid");
        errorAccount++;
      }
    }  
    if (errorAccount > 0){
      return false;
    }else{
      return true;  
    }
  } 
  //EVENTOS
  //const carFormList:HTMLInputElement = document.getElementById('createCarForm') as HTMLInputElement;
  if (infoCarForm){
    infoCarForm.addEventListener('blur', (event:any) => {
    event.preventDefault();
      if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }
 // const wheelsFormList:HTMLInputElement = document.getElementById('addWheelsForm') as HTMLInputElement;
  if (infoWheelsForm){
    infoWheelsForm.addEventListener('blur', (event:any) => {
    event.preventDefault();
      if (event.target.value.trim != "") event.target.classList.remove('is-invalid');
    },  true); 
  }
 
//  Nivell 3 Crear un altre coche
// function newCar(){
// console.log(' Crear cotxe nou')
// }
