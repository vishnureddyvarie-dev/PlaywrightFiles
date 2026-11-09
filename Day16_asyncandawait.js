async function fun1() {
console.log('Hello');
}


async function fun2() {
    console.log('World');
}

await fun1();
await fun2();
