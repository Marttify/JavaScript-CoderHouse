


// Saved data
const savedEmail = "aguilarmartin@gmail.com";
const savedPassword = "coderhouse";
const intentos = 3;
// let checkRobot = true;

const emailAddress = document.getElementById('exampleInputEmail1')
const password = document.getElementById('exampleInputPassword1')

// Declaraciones
let mensaje 

function condicional() {
    for (let i = 1; i <= intentos; i++) {
        // Data entry field 
        // const emailAddress = document.getElementById('exampleInputEmail1')
        // const password = document.getElementById('exampleInputPassword1')
        // const check = document.getElementById('exampleCheck1')

        if (emailAddress === savedEmail && password === savedPassword ) {
            mensaje = alert(`Thank you ${emailAddress} for joining us, we have many products that we want to add and show you! 🤗`);
            i = 3 
            break
        } else if (emailAddress !== savedEmail || password !== savedPassword ) {
            if (i === intentos) {
                mensaje = alert(`Account locked, you had ${i} attempts`)
            } else {
                mensaje = alert(`The email or password is incorrect, try again! you have ${intentos - i} attempts left`);
            }
        }
    }
}

condicional()