
// Saved data
let savedEmail = "aguilarmartin@gmail.com"
let savedPassword = "coderhouse"
let intentos = 3
let checkRobot = "no"


// Declaraciones
var mensaje 

function condicional() {
    for (let i = 1; i <= intentos; i++) {
        // Data entry field 
        const emailAddress = prompt("Add email address")
        const password = prompt("Add password")
        const check = prompt("Are you robot? (indicate yes or not)")

        if (emailAddress === savedEmail && password === savedPassword && check === checkRobot) {
            mensaje = alert(`Thank you ${emailAddress} for joining us, we have many products that we want to add and show you! 🤗`);
            i = 3 
            break
        } else if (emailAddress !== savedEmail || password !== savedPassword && check === checkRobot) {
            if (i === intentos) {
                mensaje = alert(`Account locked, you had ${i} attempts`)
            } else {
                mensaje = alert(`The email or password is incorrect, try again! you have ${intentos - i} attempts left`);
            }
        }
    }
}

condicional()