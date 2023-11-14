import { configureStore, combineReducers} from '@reduxjs/toolkit'
import questionReducer from './question_reducer'
import  resultReducer  from './result_reducer'
import  quizReducer  from './Quizname';

const rootReducer = combineReducers({
    question:questionReducer,
    result:resultReducer,
    quizname:quizReducer
})

export default configureStore({reducer:rootReducer});