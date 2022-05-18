export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(email).toLowerCase())) {
    return '';
  } else {
    return 'Please enter valid email address';
  }
};

export const validatePassword = (
  password,
  confirmPassword
) => {
  if (password === confirmPassword) {
    return '';
  } else {
    return 'Password and confirm password mismatch';
  }
};
