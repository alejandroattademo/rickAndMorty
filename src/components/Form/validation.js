const validation = (userData, errors, setErrors) => {
    // Email
    if (userData.email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))) {
            setErrors({ ...errors, email: "Must be a valid email" });
        } else if (userData.email.length > 35) {
            setErrors({ ...errors, email: "35 characters is the maximum" });
        } else {
            setErrors({ ...errors, email: "" });
            //Password
            if (userData.password.length < 6 || userData.password.length > 10) 
                setErrors({ ...errors, password: "Password must be between 6 and 10 characters" });
            else if (!/\d/.test(userData.password)) 
                setErrors({ ...errors, password: "Password must contain a number" });
            else 
                setErrors({ ...errors, password: "" });
            }
    } else {
        setErrors({ ...errors, email: "Please complete the field" });
    }         
}

export default validation;


