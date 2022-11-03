export const myMiddleware = store => next => action => {
    console.log(action.payload)
    return next(action);
}