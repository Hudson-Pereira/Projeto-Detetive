/*Projeto Detetive
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
1 - 'Telefonou para a vítima?'
2 - 'Esteve no local do crime?'
3 - 'Mora perto da vítima?'
4 - 'Devia para a vítima?'
5 - 'Já tranalhou com a vítima?'
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
1 resposta SIM - INOCENTE
2 respostas SIM - SUSPEITO
3 e 4 respostas SIM - CÚMPLICE
5 respostas SIM - ASSASSINO
*/

console.log('PROJETO DETETIVE!!!');
console.log('--------------------------');

console.log('Houve um assassinato na cidade, as pessosa suspeitas foram identificadas. Vamos interroga-las com as seguintas perguntas.');
console.log('--------------------------');

console.log('Responda as seguintes perguntas apenas com 1 para sim ou 0 para não');

console.log('');

let res1 = +prompt('Você telefonou para a vítima no dia do ocorrido?');

console.log('');
let res2 = +prompt('Você esteve no local do crime no dia do ocorrido');
  
console.log('');
let res3 = +prompt('Você mora perto da vítima?');

console.log('');
let res4 = +prompt('Você devia para a vítima?')

console.log('');
let res5 = +prompt('Você já trabalhou com a vítima?');

let t = res1 + res2 + res3 + res4 + res5;
console.log(t);

if (t <= 1){
  console.log('Suspeito considerado INOCENTE do crime.');
} else if (t == 2){
  console.log('Suspeito considerável possível autor do crime.');
} else if (t== 3) {
  console.log('Supeito considerado CÚMPLICE no crime.');
} else if (t == 4){
  console.log('Suspeito considerado CÚMPLICE no crime.');
} else if (t == 5) {
  console.log('Suspeito considerado CULPADO do crime = ASSASSINO!')
} else if (t > 5) {
  console.log('Você não respondeu todas as questões corretamente, faça o questionário novamente.Responda apenas com 1 para SIM e 0 para NÃO.')
} else {
    console.log('Você não respondeu todas as questões corretamente, faça o questionário novamente.Responda apenas com 1 para SIM e 0 para NÃO.')
};
