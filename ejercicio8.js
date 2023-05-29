//- Una función sin parámetros que devuelva siempre "true"
function verdadera() {
    return true
};

console.log(verdadera());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
setTimeout(() => {
    console.log("Hola soy una promesa")
}, 5000);

//- Una función generadora de índices pares automáticos
function* generadorId(){
    let id = 0
    while(true) {
        id = id + 2
        yield id
    }
};

const idPares = generadorId();

console.log(idPares.next());
console.log(idPares.next());
console.log(idPares.next());
console.log(idPares.next());
console.log(idPares.next());
console.log(idPares.next());