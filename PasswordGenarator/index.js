
function genaratePassword(length,lower,upper,number,symbol){

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = lowerCase.toUpperCase()
    const numbers = '1234567890'
    const symbols = '!@#$%&*~!?'

    let allowedChars = ''
    let password = ''

    allowedChars += lower ? lowerCase : "";
    allowedChars += upper ? upperCase : "";
    allowedChars += number ? numbers : "";
    allowedChars += symbol ? symbols : "";

    if(length <= 6){
        return `Password length must be atleast 6`
    }
    if(allowedChars.length === 0){
        return `Atleast one set of charecters must be selected`
    }

    for (let i = 0;i < length;i++){
        const random = Math.floor(Math.random()*allowedChars.length)
        
        password += allowedChars[random]
    }
    
    
    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includerUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password =genaratePassword(passwordLength,
                                includeLowerCase,
                                includerUpperCase,
                                includeNumbers,
                                includeSymbols)

console.log(`Genarated Password : ${password}`)

