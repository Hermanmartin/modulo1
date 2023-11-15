'use strict';

function BinarioADecimal(num) {
   let decimal = parseInt(num,2);

   return decimal;
}
let numeroBinario = 1011;
BinarioADecimal(numeroBinario);


function DecimalABinario(num) {
   let binario = num.toString(2);

   return binario;
}

let numeroDecimal = 11;
DecimalABinario(numeroDecimal);

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
