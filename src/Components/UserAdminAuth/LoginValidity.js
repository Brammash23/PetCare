export const Validity = (data) => {
    var error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=,*\d) (?=.*[a-z]) (?=.*[A-Z]) [a-zA-Z0-9]{8,}$/

    const email=data.email;
    const password=data.password;
    const passwordLength = data.password.length;
    if (email==="") {
        error.email = "Email should contain a value";
    } else if (!email_pattern.test(email)) {
        error.email = "Email is not valid";
    } else {
        error.email = "";
    }

   
    if (password==="") {
        error.password = "Password should contain a value";
    } else if (passwordLength>5) {
        error.password = "";
    } else {
        error.password = "Enter an Validate Password";
        console.log("Wrong password")
    }

    return error;
};
