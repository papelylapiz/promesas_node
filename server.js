const express = require('express');
const app = express();
const { Controller } = require('./promesas');
let port = 3000;
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);

    let co = new Controller();
    co.uno()
        .then((res) => { return co.dos(res) })
        .then((res) => { return co.tres(res) })
        .then((res) => { return co.cuatro(res) })
        .catch((e) => {
            if(e.message && e.message.indexOf('tres') >- 1) {
                console.log(e);
                return e;
            }
            if(e && e.indexOf('tres') >- 1) {
                console.log(e);
                return e;
            }
            console.log('no es error de tres');
        })
            


});