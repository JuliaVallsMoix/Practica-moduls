// Un endpoint que cuando le hacen un GET devolvemos un número aleatorio. Le puedes pasar dos números para que te calcule el número aleatorio en dicho intervalo. --> (1, 10), quiero un número aleatroio entre 1 y 10.

// Vamos a instalar un módulo o biblioteca de terceros (externa).

// Load Chance

import { Chance } from "chance";

var chance = new Chance();

console.log(chance.integer({ min: 1, max: 10}));