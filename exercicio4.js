let x = 100;

function testScope() {

    let x = 50;
    console.log("valor de x:", x); 

    
    if (true) {
        let x = 30;
        console.log("valor de x:", x);
    }
}

testScope();


console.log("Valor de x no escopo global:", x);
