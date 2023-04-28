function sayMyName(name) {
   return  `Meu nome é ${name}`
}

function verifyAge(age) {
    if (age < 18) {
        console.log(`Você é menor de idade`)
    }else {
        console.log(sayMyName("luiz") +` e sou maior de idade`)
    }
}

verifyAge(18)