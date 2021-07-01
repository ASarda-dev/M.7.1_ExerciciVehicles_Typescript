"use strict";
var createcar2 = document.getElementById('createcar2');
var inputs = document.querySelectorAll('#createcar2 input');
var plate = document.getElementById('plate');
var createwheel2 = document.getElementById('createwheel2');
var inputs2 = document.querySelectorAll('#createwheel2 input');
var infocar2 = document.getElementById('car');
var infowheel2 = document.getElementById('wheel');
var info = document.getElementById('infocar');
var car2;
var listCar2 = new Array();
var expresiones = {
    plate: /^[\d]{4}[a-zA-Z]{3}$/,
    brand: /^[a-zA-Z0-9]{3,15}$/,
    color: /^[a-zA-z]{3,15}$/,
    brand2: /^[a-zA-Z0-9]{3,15}$/,
};
var validarFormulario = function (e) {
    switch (e.target.name) {
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
};
var validarFormulario2 = function (e) {
    switch (e.target.name) {
        case 'brand1':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break;
        case 'brand2':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break;
        case 'brand3':
            validarCampo(expresiones.brand2, e.target, e.target.name);
            break;
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
};
var validarCampo2 = function (input, campo) {
    var _a, _b, _c, _d;
    if (input.value > 0.4 && input.value < 2) {
        (_a = document.getElementById(campo)) === null || _a === void 0 ? void 0 : _a.classList.remove('is-invalid');
        (_b = document.getElementById(campo)) === null || _b === void 0 ? void 0 : _b.classList.add('is-valid');
    }
    else {
        (_c = document.getElementById(campo)) === null || _c === void 0 ? void 0 : _c.classList.add('is-invalid');
        (_d = document.getElementById(campo)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-valid');
    }
};
var validarCampo = function (expresion, input, campo) {
    var _a, _b, _c, _d;
    if (expresion.test(input.value)) {
        (_a = document.getElementById(campo)) === null || _a === void 0 ? void 0 : _a.classList.remove('is-invalid');
        (_b = document.getElementById(campo)) === null || _b === void 0 ? void 0 : _b.classList.add('is-valid');
    }
    else {
        (_c = document.getElementById(campo)) === null || _c === void 0 ? void 0 : _c.classList.add('is-invalid');
        (_d = document.getElementById(campo)) === null || _d === void 0 ? void 0 : _d.classList.remove('is-valid');
    }
};
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
inputs2.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario2);
    input.addEventListener('blur', validarFormulario2);
});
createcar2.addEventListener('submit', function (e) {
    e.preventDefault();
});
createwheel2.addEventListener('submit', function (e) {
    e.preventDefault();
});
function createCar2(plate, brand, color) {
    var _a, _b, _c, _d, _e;
    console.log(car2);
    var registrada = false;
    for (var i = 0; i < listCar2.length; i++) {
        if (listCar2[i].plate == plate) {
            registrada = true;
        }
    }
    if (!registrada && plate != '' && brand != '' && color != '') {
        car2 = new Car(plate, color, brand);
        listCar2.push(car2);
        createcar2.style.display = "none";
        createwheel2.style.display = "block";
        console.log(listCar2);
        createcar2.reset();
        (_a = document.getElementById('plate')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('brand')) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
        (_c = document.getElementById('color')) === null || _c === void 0 ? void 0 : _c.classList.remove('is-valid');
    }
    if (registrada) {
        alert('Error!!! Ya existe plate introduzca otra');
        (_d = document.getElementById('plate')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-valid');
        (_e = document.getElementById('plate')) === null || _e === void 0 ? void 0 : _e.classList.add('is-invalid');
    }
    var titulo = document.getElementById('titulo');
    titulo.remove();
}
function createWheel2(diametro1, brand1, diametro2, brand2, diametro3, brand3, diametro4, brand4) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var wheel1 = new Wheel(diametro1, brand1);
    var wheel2 = new Wheel(diametro2, brand2);
    var wheel3 = new Wheel(diametro3, brand3);
    var wheel4 = new Wheel(diametro4, brand4);
    if (brand1 != null && diametro1 != null && brand2 != null && diametro2 != null && brand3 != null && diametro3 != null && brand4 != '' && diametro4 != null) {
        car2.addWheel(wheel1);
        car2.addWheel(wheel2);
        car2.addWheel(wheel3);
        car2.addWheel(wheel4);
        createwheel2.style.display = "none";
        createwheel2.reset();
        (_a = document.getElementById('brand1')) === null || _a === void 0 ? void 0 : _a.classList.remove('is-valid');
        (_b = document.getElementById('diametro1')) === null || _b === void 0 ? void 0 : _b.classList.remove('is-valid');
        (_c = document.getElementById('brand2')) === null || _c === void 0 ? void 0 : _c.classList.remove('is-valid');
        (_d = document.getElementById('diametro2')) === null || _d === void 0 ? void 0 : _d.classList.remove('is-valid');
        (_e = document.getElementById('brand3')) === null || _e === void 0 ? void 0 : _e.classList.remove('is-valid');
        (_f = document.getElementById('diametro3')) === null || _f === void 0 ? void 0 : _f.classList.remove('is-valid');
        (_g = document.getElementById('brand4')) === null || _g === void 0 ? void 0 : _g.classList.remove('is-valid');
        (_h = document.getElementById('diametro4')) === null || _h === void 0 ? void 0 : _h.classList.remove('is-valid');
        showCar2();
    }
    console.log(car2);
    console.log(listCar2);
}
function newcar() {
    info.style.display = "none";
    createcar2.style.display = "block";
    createwheel2.style.display = "none";
}
function showCar2() {
    info.style.display = 'block';
    infocar2.innerHTML = "\n   <div class=\"tit\">\n    COCHE :\n    </div>\n    <br>   \n   <strong> PLATE : </strong> " + car2.plate + " \n   <strong> BRAND : </strong> " + car2.brand + " \n   <strong> COLOR : </strong> " + car2.color + "\n    ";
    infowheel2.innerHTML = "<br>\n    <div class=\"tit\">\n    RUEDAS:\n    </div>\n   <br>\n    <strong> MARCA RUEDA 1 : </strong> " + car2.wheels[0].diameter + " <br><strong>DIAMETRO RUEDA 1 : </strong> " + car2.wheels[0].brand + "<br>\n    <strong> MARCA RUEDA 2 : </strong> " + car2.wheels[1].diameter + " <br><strong>DIAMETRO RUEDA 2 : </strong> " + car2.wheels[1].brand + "<br>\n    <strong> MARCA RUEDA 3 : </strong> " + car2.wheels[2].diameter + " <br><strong>DIAMETRO RUEDA 3 : </strong> " + car2.wheels[2].brand + "<br>\n    <strong> MARCA RUEDA 4 : </strong> " + car2.wheels[3].diameter + " <br><strong>DIAMETRO RUEDA 4 : </strong> " + car2.wheels[3].brand + "<br>\n    ";
}
