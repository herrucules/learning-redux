// root reducer

import undoable, {distinctState} from 'redux-undo';
import {combineReducers} from 'redux';
import contents from './contentsReducer';


const appReducer = combineReducers({
	contents: undoable(contents, {limit: 10})
});

export default appReducer;
