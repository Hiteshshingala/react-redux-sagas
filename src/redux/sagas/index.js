import { takeEvery, put, delay} from "redux-saga/effects";

function* watchAgeUpAsync() {
    yield delay(4200)
    yield put({type: 'AGE_UP_ASYNC', value: 1})
}

export function* watchAgeUp() {
    yield takeEvery('AGE_UP', watchAgeUpAsync)
}