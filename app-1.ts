// Acciones - payload es opcional
// 1. definimos la accion
interface Action {
	type: string
	payload?: any
}

// 2. ahora vamos a crear el reducer para utilizar esa action (recibe dos params, el estado actual o OldState y la action)
// el estado anterior en este caso es 10
function reducer (state = 10, action: Action) {
	// si tenemos mas de 1 acción, tenemos que usar un switch
	switch (action.type) {
		// queremos que la action incremente en 1
		case 'INCREMENTAR': {
			return state + 1;
		}
		case 'DECREMENTAR': {
			return state - 1;
		}
		case 'MULTIPLICAR': {
			return state * action.payload;
		}
		case 'DIVIDIR': {
			return state / action.payload;
		}
		default:
			// siempre tiene que retornar un nuevo estado
			return state;
	}
}

// 3. pasos para usar el reducer
/**
Para llamar al reducer simplemente llamamos al reducer y le pasamos el state actual y el action
*/
// 4. Primero vamos a definir la constante de nuestra action para poder usarla y pasarla por parametro

// INCREMENTAR
const incrementadorAction: Action = {
	type: 'INCREMENTAR'
}
// y ahora usamos nuestro reducer
console.log(reducer(10, incrementadorAction)); // 11

// DECREMENTAR
const decrementadorAction: Action = {
	type: 'DECREMENTAR'
}
// y ahora usamos nuestro reducer
console.log(reducer(10, decrementadorAction)); // 9

// MULTIPLICAR
const multiplicadorAction: Action = {
	type: 'MULTIPLICAR',
	// queremos multiplicar nuestro estado por 2
	payload: 2
}

console.log(reducer(10, multiplicadorAction)); // 20

// DIVIDIR
const divisorAction: Action = {
	type: 'DIVIDIR',
	// queremos dividir nuestro estado por 2
	payload: 2
}

console.log(reducer(10, divisorAction)); // 5

