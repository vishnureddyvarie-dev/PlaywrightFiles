import {add, sub, mul} from './Day17_export.js';

console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2
console.log(mul(5, 3)); // 15

// if we want to export everything at once
import * as calculation from './Day17_export.js';

