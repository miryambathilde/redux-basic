// 2. ahora vamos a crear el reducer para utilizar esa action (recibe dos params, el estado actual o OldState y la action)

import { Action } from '../ngrx-fake/ngrx';

// el estado anterior en este caso es 10
export function contadorReducer (state = 10, action: Action) {
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
		case 'RESET': {
			return state = 0;
		}
		default:
			// siempre tiene que retornar un nuevo estado
			return state;
	}
}