const DomOperations = require('./../view/domOpeartions.js');
const _domOp = new DomOperations();
const reducer = require('./../reducer.js');
import actionz from './../actions';
import { globalVaribale } from './../reducer';

export const processFetchApi = function (objData) {
    debugger;
    var statusCode = '';
    var data = {
        method: objData.method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": 'token  a858d61bf4e0c57421491a5297be2ac278e87dc8'
        }
    }
    if(objData.method !== 'GET') {
        data.body = JSON.stringify(objData.jsonData)
    }
    fetch(objData.url, data).then((response) => {
        statusCode = response.status;
        alert("statusCode : " + statusCode);

        if (response.ok) {
            return response.json();
        }
    }).then((jsonData) => {
        var myArray = jsonData;          //populate data   
        myArray.status = statusCode;
        reducer.store.dispatch({ type: objData.operation, payload: myArray });     
    }).catch((err) => {
        console.log("Error:", err.message);
    })
};