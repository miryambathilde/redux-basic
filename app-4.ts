import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

// tiene que recibir el reducer
const store: Store = createStore(contadorReducer);

// vamos a suscribirnos a los cambios del store
store.subscribe(() => {
	console.log('Subs:', store.getState());
})

store.dispatch(incrementadorAction); // 11
store.dispatch(incrementadorAction); // 12
store.dispatch(incrementadorAction); // 13
store.dispatch(incrementadorAction); // 14