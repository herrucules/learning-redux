import {updateObject, updateItemInArray, createReducer} from './utilities';

const content = (state={}, action) => 
	(action.type == 'ADD_CONTENT') ? action.payload : state;

const addContent = (contentsState, action) => (
	[
		...contentsState,
		content(undefined, action)
	]
);

const editContent = (contentsState, action) => (
	updateItemInArray(contentsState, action.payload.id, content => {
		return updateObject(content, {text: action.payload.text});
	})
);

const contents = createReducer([], {
	'ADD_CONTENT': addContent,
	'EDIT_CONTENT': editContent
});

export default contents;