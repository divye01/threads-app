import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export function getReq (action, params) {
  const headers = prepareJSONHeaders();
  return ajax.getJSON(prepareUrl(), headers).pipe(
    catchError(error => {
      console.log('error: ', error);
      throw of(error);
    })
  )
}

function prepareUrl() {
  var url = 'http://localhost:5000';
  return url;
}


function prepareJSONHeaders () {
  return Object.assign({}, {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': ''
  });
}