var Productor = (function () {

	var nombre = 'jose',
		edad = 22;

	duplicarEdad = function () {
		return edad * 2;
	}

	return {

		save : function () {
			console.log('se guardo correctamente');
		},

		saludar : function ( duplicarEdad ) {
			console.log('hola tienes' + duplicarEdad + 'de edad');
		}
	}

})()
