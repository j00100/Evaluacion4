const titulo = document.getElementById("tituloCard"); 
const titulo2 = document.getElementById("titulo2");
const imagen = document.getElementById("img");
const cuerpo = document.getElementById("txtc");
const footer = document.getElementById("fter");
const boton = document.getElementById("botonD");
const card = document.getElementById("card");

let contador = 15;

let estado = 0;

/*

La variable estado me permite saber si, en esta ejecucion
es necesario modificar los elementos del doom
titulo
imagen
titulo2
descripcion


*/


boton.addEventListener('click', function(event){


	event.preventDefault();

	contador = contador - 1;

	footer.textContent = contador.toString();
	boton.textContent = "presioname " + contador.toString();

	if(contador == 0){

		window.location.reload();

	}else if(contador <= 10 && contador >= 6){

		if(estado != 1){

			titulo.textContent = "Semaforo amarillo";
			titulo2.textContent = "Semaforo amarillo";
			cuerpo.textContent = "Dejo de ser verde para ser amarillo";
			
			imagen.src = "assets/brand/semaforo2.jpg";

			boton.classList.remove("btn-primary")
			boton.classList.add("btn-warning")

			card.classList.remove("text-bg-primary");
			card.classList.add("text-bg-warning");

			
			estado = 1;

		}

	}else if(contador < 6){

		if(estado != 2){

			titulo.textContent = "Semaforo rojo";
			titulo2.textContent = "Semaforo rojo";
			cuerpo.textContent = "Ahora es rojo, pero no por tanto";
			
			imagen.src = "assets/brand/semaforo3.jpg";

			boton.classList.remove("btn-warning")
			boton.classList.add("btn-danger")

			card.classList.remove("text-bg-warning");
			card.classList.add("text-bg-danger");

			estado = 2;

		}
	}

});