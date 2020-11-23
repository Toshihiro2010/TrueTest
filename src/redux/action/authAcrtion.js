import { all, put, takeLatest } from "redux-saga/effects";

function* authtest(pppp) {

    yield console.log("enter auth authtest")
    yield console.log("pppp pppp pppp => ", pppp)

    yield put({ type: "Hello" })
}

export {
    authtest
}

export default function* authWorkerSaga() {
    yield all([
        takeLatest("HHHHA", authtest),
    ]);
}