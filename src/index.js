import foo from './cjs.mod';
import foo1 from './esm.mod';

import bundle from './bundle';

console.log(foo);
console.log(foo.bar);

console.log(foo1);
// console.log(bar1);

console.log(bundle.printAnswer(111));

export default foo1