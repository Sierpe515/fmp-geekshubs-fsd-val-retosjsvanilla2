let figura = prompt("Introduce de qué figura quieres calcular el área").toLowerCase();

switch (figura) {
    case "círculo":
        let radio = parseFloat(prompt("Introduce el valor radio"));
        const pi = 3.14159265359;
        console.log ("El área del circulo es ", ((radio ** 2) * pi));
    break;
    
    case "triangulo":
        let base = parseFloat(prompt("Introduce el valor de la base"));
        let altura = parseFloat(prompt("Introduce el valor de la altura"));
        console.log ("El área del triangulo es ", ((base * altura) / 2));
    break;

    case "cuadrado":
        let lado = parseFloat(prompt("Introduce el valor del lado"));
        console.log ("El área del cuadrado es ", (lado * lado));
    break;

    default:

        console.log ("La figura introducida es errónea");
}