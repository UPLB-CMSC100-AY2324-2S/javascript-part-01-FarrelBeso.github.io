const strMatch = (pass1, pass2) => {
    return (pass1 === pass2);
}

const lengthCheck = (pass) => {
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

}