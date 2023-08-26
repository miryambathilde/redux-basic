import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, resetAction } from './contador/contador.actions';
import { decrementadorAction } from './contador/contador.actions';
import { multiplicadorAction } from './contador/contador.actions';
import { divisorAction } from './contador/contador.actions';


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
		case 'RESET': {
			return state = 0;
		}
		default:
			// siempre tiene que retornar un nuevo estado
			return state;
	}
}

console.log(reducer(10, incrementadorAction)); // 11
console.log(reducer(10, decrementadorAction)); // 9
console.log(reducer(10, multiplicadorAction)); // 20
console.log(reducer(10, divisorAction)); // 5
console.log(reducer(10, resetAction)); // 0
