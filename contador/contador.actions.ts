// pasos para usar el reducer
/**
Para llamar al reducer simplemente llamamos al reducer y le pasamos el state actual y el action
*/
// 4. Primero vamos a definir la constante de nuestra action para poder usarla y pasarla por parametro

import { Action } from '../ngrx-fake/ngrx'

// INCREMENTAR
export const incrementadorAction: Action = {
	type: 'INCREMENTAR'
}


// DECREMENTAR
export const decrementadorAction: Action = {
	type: 'DECREMENTAR'
}


// MULTIPLICAR
export const multiplicadorAction: Action = {
	type: 'MULTIPLICAR',
	// queremos multiplicar nuestro estado por 2
	payload: 2
}

// DIVIDIR
export const divisorAction: Action = {
	type: 'DIVIDIR',
	// queremos dividir nuestro estado por 2
	payload: 2
}

// RESET
export const resetAction: Action = {
	type: 'RESET'
}
