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

const processPassword = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const passobj = storePassword(name, pass1, pass2);
    const outstr = `Name: ${passobj.name}; New Password: ${passobj.newpassword}`;
    document.getElementById('output').innerHTML = outstr;
    console.log(name, pass1, pass2);
}

// append to the form
var form = document.getElementById('form');
form.addEventListener('submit', processPassword);