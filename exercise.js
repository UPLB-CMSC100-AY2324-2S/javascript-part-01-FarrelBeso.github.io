const strMatch = (pass1, pass2) => {
    return (pass1 === pass2);
}

const isCorrectLength = (pass) => {
    return (pass.length >= 8);
}

const containsNum = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= '0' && pass[i] <= '9') return true;
    } return false;
}

const containsUpper = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'A' && pass[i] <= 'Z') return true;
    } return false;
}

const containsLower = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= 'a' && pass[i] <= 'z') return true;
    } return false;
}

const validatePassword = (pass1, pass2) => {
    return (
        strMatch(pass1, pass2) &&
        isCorrectLength(pass1) && isCorrectLength(pass2) &&
        containsNum(pass1) && containsNum(pass2) &&
        containsUpper(pass1) && containsUpper(pass2) &&
        containsLower(pass1) && containsLower(pass2)
    );
}

const reversePassword = (pass) => {
    let strbuff = '';
    for (let i=pass.length-1; i>=0; i--) {
        strbuff += pass[i];
    }
    return strbuff;
}

const storePassword = (name, pass1, pass2) => {
    let passObj = {
        "name": name,
        "newpassword": pass1
    };
    if (validatePassword(pass1, pass2)) {
        passObj.newpassword = reversePassword(pass1);
    }
    return passObj;
}

console.log("Validate Password Test:")
console.log(validatePassword("helloworld", "hello"))
console.log(validatePassword("hello", "hello"))
console.log(validatePassword("hello1234", "hello1234"))
console.log(validatePassword("Hello1234", "Hello1234"))
console.log(validatePassword("HELLO1234", "HELLO1234"))
console.log("Password Reversal Test:")
console.log(reversePassword("Hello1234"))
console.log(reversePassword("Pass1234"))
console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))
