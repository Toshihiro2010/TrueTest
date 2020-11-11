import {
    all, delay, put, take, takeEvery,
    takeLatest, select, call
} from 'redux-saga/effects'
// import I18n from '../../common/i18nClient';
import I18n from '../../common/i18nClient';
import { doGet2 } from '../../service/ApiClient';


function* helloSaga() {
    // yield console.log("delay 2 sec")
    // yield delay(2000)
    yield console.log('Hello Sagas!')
    // const path = yield '/users/toshihiro2010'
    // let respose = yield call(doGet2, path)
    // yield console.log(" respose = > ", respose)
}


const actionAddProduct = (productName) => {
    return ({ type: "actionAddProduct", payload: { productName: productName, isComplete: false } })

}

function* myTest() {
    yield put({ type: "TTTTTT" })

}

function* testWatch() {
    // yield take("actionAddProduct")
    yield console.log(" testWatch => actionAddProduct")
}

function* testWatch2() {
    // yield take("actionAddProduct")
    while (true) {
        yield take("actionAddProduct")
        yield console.log(" testWatch2 => actionAddProduct")
        yield myTest()
    }
}

function* watchLanguage() {
    // while (true) {
    //     yield take("SETTING/CHANGE_LANGUAGE")
    const language = yield select(state => state.settingReducer.language)
    yield I18n.locale = language
    // }
}

export {
    actionAddProduct
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        // takeEvery("actionAddProduct", testWatch),
        testWatch2(),
        // watchLanguage(),
        takeEvery("SETTING/CHANGE_LANGUAGE", watchLanguage),

    ])
}