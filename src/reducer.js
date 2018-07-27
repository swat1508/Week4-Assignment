const DomOperations = require('./view/domOpeartions.js');
const _domOp = new DomOperations();
import { updateState } from './handlerAndcontroller/stateUpdater';
export const store = Redux.createStore(findReducer, [])
export function findReducer(currentState = [], action) {
    switch (action.type) {
        case 'createIssue':
        case 'create-repo':
        case 'viewIssues':
        case 'closeIssue':
        case 'addComment':
        case 'addCollaborator':
        case 'getLatestComment': {
            var nextState = updateState(currentState, action);
            window.localStorage.setItem('currentState', JSON.stringify(nextState));
            return nextState;
            break;
        }
        default:
            return currentState;
    }
}
store.subscribe(render);
//export const render = function() {
    export function render(){
        alert("in render");
    document.getElementById("myWidget").innerHTML = '';
    var repository = JSON.parse(window.localStorage.getItem('currentState'));
    if (repository) {
        repository.forEach(function (element) {
            _domOp.setResponseInWidget(element);
        });
    }
}

