import { Http } from '@nativescript/core'


export function test() {
    const value = [];
    Http.getJSON('http://10.0.2.2:8000/api/test').then(response => {
        console.log("response__response____________response____")
        console.log(response)
        console.log("__________________")
        value = response;
    })
        .catch(e => {
            console.log("__e__e___e___________")
            console.error(e);
            console.log("__________________")
        });
    return value;
    Http.request({
        url: 'http://10.0.2.1:22/api/test',
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    }).then(response => {
        console.log("response__response____________response____")
        console.log(response)
        console.log("__________________")
        value = response;
    })
        .catch(e => {
            console.log("__e__e___e___________")
            console.error(e);
            console.log("__________________")
        });
    return value;
}
export function getUsers() {
    const value = [];
    Http.getJSON('http://127.0.0.1/api/users').then(response => {
        value = response;
    })
        .catch(e => {
            console.error(e);
        });
    return value;
}
export function getDollar() {
    const value = [];
    Http.getJSON('http://127.0.0.1:8000/api/dollarPrice').then(response => {
        value = response;
    })
        .catch(e => {
            console.error(e);
        });
    return value;
}

export function getaeroflot() {
    const value = [];
    Http.getJSON('http://127.0.0.1:8000/api/aeroflot').then(response => {
        value = response;
    })
        .catch(e => {
            console.error(e);
        });
    return value;
}
