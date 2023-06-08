let pass = 'whatsdapassword'

const shift = function(n) {
    let newPass = '';

    for(let i = 0; i < pass.length; i++){
        let encryption = (i + n) % pass.length;
        newPass += pass[encryption]
    }

    console.log(newPass)
    
}

shift(5)