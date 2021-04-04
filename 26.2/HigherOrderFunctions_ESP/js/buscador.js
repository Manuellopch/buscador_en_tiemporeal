function obtenerAutos(){
	return [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
	]
};

//Datos Para la Busqueda
let DatosBusqueda = {
    marca : '',
    modelo : '',
    anio : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

//................................... Event Listener .....................................

const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
	mostrarAutos(autos);
});


//---------------------- event Listeners para el formulario ------------------------------

const Marca = document.querySelector('#marca');
Marca.addEventListener('input', e => {
    DatosBusqueda.marca = e.target.value;
    //llamar funcion filtrar auto
    filtrarAuto();
});

const Modelo = document.querySelector('#modelo');
Modelo.addEventListener('input', e => {
    DatosBusqueda.modelo = e.target.value;
    //llamar funcion filtrar auto
    filtrarAuto();
});

const Anio = document.querySelector('#year');
Anio.addEventListener('input', e => {
    DatosBusqueda.anio = Number(e.target.value);
    //llamar funcion filtrar auto
    filtrarAuto();
});

const Minimo = document.querySelector('#minimo');
Minimo.addEventListener('input', e => {
    DatosBusqueda.minimo = Number(e.target.value);
    //llamar funcion filtrar auto
    filtrarAuto();
});

const Maximo = document.querySelector('#year');
Maximo.addEventListener('input', e => {
    DatosBusqueda.maximo = Number(e.target.value);
    //llamar funcion filtrar auto
    filtrarAuto();
});
//----------------------------------- agregar al html ----------------------------------

function mostrarAutos(autos){
    const contenedor = document.querySelector('#resultado');
    //Limpiar los resultados Anteriores
	while(contenedor.firstChild){
		contenedor.removeChild(contenedor.firstChild);
	}

    //leer el elemento resultado
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
        <p>Marca:${auto.marca} - Modelo:${auto.modelo} - Año:${auto.year} - Precio:${auto.precio} - Puertas:${auto.puertas} - Color:${auto.color} - Transmision:${auto.transmision} </p>
	   `
	   contenedor.appendChild(autoHTML);
    });
}

//-------------------------------- funcion filtrar auto ---------------------------------

function filtrarAuto(){
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarModelo).filter(filtrarAño).filter(filtrarMinimo).filter(filtrarMaximo);
    if(resultado.length){
	    mostrarAutos(resultado);
    }else{
	    console.log('No Hay Resultados!!')
    }
}

//------------------------------- funciones Filtrar ----------------------------------

function filtrarMarca(auto){
    if(DatosBusqueda.marca){
        return auto.marca === DatosBusqueda.marca;
    }else{
	   return auto;
    }
}

function filtrarModelo(auto){
	if(DatosBusqueda.modelo){
	    return auto.modelo === DatosBusqueda.modelo;
	}else{
		return auto
	}
 }
 
function filtrarAño(auto){
	if(DatosBusqueda.anio){
	    return auto.year === DatosBusqueda.anio;
	}else{
		return auto
	}
 }
 
function filtrarMinimo(auto){
	if(DatosBusqueda.minimo){
	    return auto.precio >= DatosBusqueda.minimo;
	}else{
		return auto
	}
 }

function filtrarMaximo(auto){
	if(DatosBusqueda.maximo){
	    return auto.precio <= DatosBusqueda.maximo;
	}else{
		return auto
	}
 }