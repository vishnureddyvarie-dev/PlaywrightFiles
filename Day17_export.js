export let add = (a, b) => a + b;

export let sub = (a, b) => a - b;

export let mul = (a, b) => a * b;

//Export functions

export function concat(a,b){
    return a+b;
}

// Export everything at the end

export{add,sub,mul,concat}

// using alias name
export{add as addition, sub as substratin, mul as multiplication}

//Default Export

export default function concat('vishnu','vardhan')
