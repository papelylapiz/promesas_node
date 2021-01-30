
const crearError =  (numero) => {
         throw '-->Error en '+numero+' ---->'; // aquí se usa la palabra clave throw
}

class Controller {
    constructor() {}

    

    async uno() {
        return new Promise((resolve, reject) => {
            try {
                let a = 1;
                console.log('uno: ', a);
                resolve(a);
            } catch (e) {
                //console.log('error uno', e);
                reject(e);
            }
        });
    }


    async dos(numero) {
        return new Promise((resolve, reject) => {
            try {
                let b = Number(numero) + 1;
                console.log('dos: ', b);
                resolve(b);
            } catch (e) {
                console.log('error dos', e);
                reject(e);
            }
        });
    }


    async tres(numero) {
        return new Promise((resolve, reject) => {
            try {
                //throw '-->Error en tres ---->';
                //nonExistentFunction();
                let c = Number(numero) + 1;
                console.log('tres: ', c);
                resolve(c);
            } catch (e) {
                //console.log('error tres', e);
                reject('-->Error en tres ---->');
            }
        });
    }

    async cuatro(numero) {
        return new Promise((resolve, reject) => {
            try {
                let d = Number(numero) + 1;
                console.log('cuatro: ', d);
                resolve(d);
            } catch (e) {
                //console.log('error cuatro', e);
                reject(e);
            }
        });
    }


 

}
module.exports = {
    Controller,
    crearError
}