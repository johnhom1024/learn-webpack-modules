import { foo, bar } from './cjs.mod';
import foo1, { bar1 } from './esm.mod';

console.log(foo);
console.log(bar);

console.log(foo1);
console.log(bar1);