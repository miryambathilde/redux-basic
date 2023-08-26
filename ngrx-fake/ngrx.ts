// Acciones - payload es opcional
// definimos la accion
export interface Action {
	type: string
	payload?: any
}

export interface Reducer<T> {
	// es una función de tipo genérico que recibe un state y una action
	(state: T, action: Action): T
}