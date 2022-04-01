import { Http } from '@nativescript/core'


export function test() {
    const value = [];
    Http.getJSON('http://10.0.2.2:8000/api/test').then(response => {
        console.log("response__response____________response____")
        console.log(response)
        console.log("__________________")
        value = response;
        return response;
    })
        .catch(e => {
            console.log("__e__e___e___________")
            console.error(e);
            console.log("__________________")
        });
    return value;
}
export function reqGetUsers() {
    const value = [];
    Http.getJSON('http://10.0.2.2:8000/api/users').then(response => {
        value = response;
    })
        .catch(e => {
            console.error(e);
        });
    return value;
}
export function reqGetDollar() {
    var value = [];

    return Http.getJSON('http://10.0.2.2:8000/api/dollarPrice').then(response => {
        console.log("1response__response____________response____");
        console.log("2response__response____________response____");
        console.log(response);
    })
        .catch(e => {
            console.log("1__e__e___e___________")
            console.error(e);
            console.log("2__e__e___e___________")
        });

}

export function reqGetaeroflot() {
    const value = [];
    Http.getJSON('http://10.0.2.2:8000/api/aeroflot').then(response => {
        value = response;
    })
        .catch(e => {
            console.error(e);
        });
    return value;
}
