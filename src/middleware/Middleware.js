export const myMiddleware = store => next => action => {
    console.log(action)
    return next(action);
}