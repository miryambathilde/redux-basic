import { decrementadorAction, incrementadorAction, multiplicadorAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';
import { Action, Reducer } from './ngrx-fake/ngrx';

// <T> es de tipo genérico
class Store<T> {
	// declaramos la propiedad privada state de tipo genérico
	constructor (private reducer: Reducer<T>, private initialState: T) { }
	// función del store getState
	getState () {
		return this.initialState;
	}
	// funcion del store dispatch para ejecturar las acciones, siempre recibe un action por parametro, no retorna nada, simplemente ejecuta la action
	dispatch (action: Action) {
		this.initialState = this.reducer(this.initialState, action);
	}
}

// vamos a usar nuestro store, para ello creamos una nueva instancia y le pasamos por param el reducer y el estado inicial //
const store = new Store(contadorReducer, 10);

// para poder ver el estado de la aplicación podemos llamar al getState del store
console.log(store.getState()); // 10

// queremos hacer un dispatch del action de incrementar
store.dispatch(incrementadorAction);
console.log(store.getState()); // 11

// queremos hacer un dispatch del action de decrementar
store.dispatch(decrementadorAction);
console.log(store.getState()); // 10

// queremos hacer un dispatch del action de multiplicar
store.dispatch(multiplicadorAction);
console.log(store.getState()); // 20

store.dispatch(multiplicadorAction);
console.log(store.getState()); // 40

