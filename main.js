import {simple_assembler} from "./functions/simpleAssemblerInterpreter.js";

// console.log(simple_assembler(['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a']));
console.log(simple_assembler(['mov a -10','mov b a','inc a','dec b','jnz a -2']));