const validation = (userData, errors, setErrors) => {
  // Email
  if (userData.email) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      setErrors({ ...errors, email: "Media pila, tu email es inválido" });
    } else if (userData.email.length > 35) {
      setErrors({ ...errors, email: "35 caracteres es el máximo" });
    } else {
      setErrors({ ...errors, email: "" });

      if (userData.password.length < 6 || userData.password.length > 10)
        setErrors({
          ...errors,
          password: "La contraseña debe ser de entre 6 y 10 caracteres",
        });
      else if (!/\d/.test(userData.password))
        setErrors({ ...errors, password: "Tu clave debe contener un número" });
      else setErrors({ ...errors, password: "" });
    }
  } else {
    setErrors({ ...errors, email: "Por favor completá el campo" });
  }
};

export default validation;
