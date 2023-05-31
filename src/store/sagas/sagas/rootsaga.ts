export function* watchClickSaga() {
    console.log('hello saga');
}

export default function* rootSaga() {
    yield watchClickSaga();
}
