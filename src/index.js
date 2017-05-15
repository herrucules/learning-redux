import appReducer from './reducer';
import {createStore} from 'redux';
import undoable, {ActionCreators} from 'redux-undo';

const initial = {
	contents: {
		present:[
			{id:0, text:'initial'}
		]
	}
};

let store = createStore(appReducer, initial);

console.log(store.getState());

store.subscribe( ()=>console.log(store.getState()) );

store.dispatch({
	type: 'ADD_CONTENT',
	payload: {
		id: 1,
		text: 'hello world'
	}
});

store.dispatch({
	type: 'ADD_CONTENT',
	payload: {
		id: 2,
		text: 'again world'
	}
});

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.undo());

store.dispatch({
	type: 'ADD_CONTENT',
	payload: {
		id: 3,
		text: 'overwrite! world'
	}
});

store.dispatch({
	type: 'EDIT_CONTENT',
	payload: {
		id: 3,
		text: 'OVERWRITE world'
	}
});

store.dispatch(ActionCreators.undo());
store.dispatch(ActionCreators.redo());

