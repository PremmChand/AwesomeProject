
import { put, takeEvery } from "redux-saga/effects";
import {SET_USER_DATA,USER_LIST} from './constants'

function* userList(){  //* is used handle async data, whenever you want execute a function by making it iterable then use *
    const url = "https://dummyjson.com/users";
    let data = yield fetch(url);
    data = yield data.json();
    console.log("data in saga",data);
    yield put({type:SET_USER_DATA, data})

    
}

function* SagaData(){  
yield takeEvery(USER_LIST, userList);
}
export default SagaData;