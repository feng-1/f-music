// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable'; // 数据转为map对象

import { reducer as recommendReducer } from '@/pages/discover/c-pages/recommend/store'


const reducer = combineReducers({
  recommend: recommendReducer
});

export default reducer;
