let emailLenght = 6,
passLength = 5;

let email = prompt('Please, write email')
if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < emailLenght) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, write password');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (password === 'UserPass' && email === 'user@gmail.com' ||
     password === 'AdminPass' && email === 'admin@gmail.com') {
        let passChange = confirm('Do you want to change your password?');
        if (passChange) {
            let passValidation = prompt('Please, write old password');
            if (password === null || password === '') {
                alert('Canceled');
            } else if (passValidation === password) {
                let passNew = prompt('Please, write new password');
                if (passNew.length > passLength) {
                    let passCheck = prompt('Please, enter new password again');
                    if (passCheck === passNew) {
                        alert('You have successfully changed your password');
                    } else {
                        alert('You wrote the wrong password');
                    }
                } else {
                    alert('It’s too short password. Sorry');
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}