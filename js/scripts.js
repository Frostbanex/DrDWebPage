//BOTÓN PARA IR AL PRINCIPIO DE LA PÁGINA

topButton = document.getElementById("topButton");

//Se esconde y aparece (izquierda para safari y derecha para los demás)

window.onscroll = function scrollFunction() {
	if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
		topButton.style.display = "block";
	} else {
		topButton.style.display = "none";
	}
};

//Acción del botón

function topFunction() {
	window.scrollTo({top: 0, behavior: "smooth"});
}

//NOMBRAR VENDEDORES

var elementoDroga = [
	document.getElementById("vendedor1"),
	document.getElementById("vendedor2"),
	document.getElementById("vendedor3"),
	document.getElementById("vendedor4"),
];

var vendedores = ["Pepe", "Juan", "Cebollino", "Mari Ángeles"];

for (var i = 0; i < 4; i++) {
	elementoDroga[i].textContent = elementoDroga[i].textContent + " " + vendedores[i];
}

function tamVentana() {
	var tam = [0, 0];
	if (typeof window.innerWidth != "undefined") {
		tam = [window.innerWidth, window.innerHeight];
	} else if (
		typeof document.documentElement != "undefined" &&
		typeof document.documentElement.clientWidth != "undefined" &&
		document.documentElement.clientWidth != 0
	) {
		tam = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	} else {
		tam = [
			document.getElementsByTagName("body")[0].clientWidth,
			document.getElementsByTagName("body")[0].clientHeight,
		];
	}
	return tam;
}
