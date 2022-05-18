import React, { useEffect, useState } from 'react';
import './style.css';
import { Input, Button } from '../components';
import { validateEmail } from './validation';



const LoginC = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const [errState, setErrState] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#44e8e9';
    return () => {
      document.body.style.backgroundColor = '#fff';
    };
  }, []);
  const onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setState((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      setErrState((prev) => ({
        ...prev,
        email: validateEmail(value)
      }));
    } else {
      setErrState((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  function validateForm(e) {
    e.preventDefault();
    const target = e.target;

    let fieldData = {
      email: target.email.value,
      password: target.password.value
    };

    let emplyValidateErrorMessage = {
      email: `email address`,
      password: `password `
    };

    let emptyValidation = false;
    let key

    let vObj = {}

    for (key in fieldData) {
      if (fieldData[key] === '') {
        vObj[key] = `Please Enter ${emplyValidateErrorMessage[key]} `;
        emptyValidation = true;
      }
    }
    setErrState((prev) => {
      return { ...prev, ...vObj };
    });
    function checkValidation() {
      let status = false;
      let k;
      for (k in errState) {
        if (errState[k] !== '') {
          status = true;
        }
      }
      return status;
    }

    if (!emptyValidation && !checkValidation()) {
      let { email, password } = fieldData;

      let body = {
        email: email,
        password: password
      };
      console.log("output and state", body, state);
    }
  }
  return (
    <React.Fragment>
      <div className={'AuthPage'}>
        <div className={'register'}>
          <div className={'registerMain'}>
            <div className={'header'}>
              <h1>Login</h1>
            </div>
            <form name="myForm" action="" onSubmit={validateForm}>
              <div className={'form'}>
                <Input
                  name="email"
                  label="Your Email"
                  onChange={onChange}
                  validation={errState.email}
                />
                <Input
                  name="password"
                  type="password"
                  label="Password"
                  onChange={onChange}
                  validation={errState.password}
                />
              </div>
              <div className={'registerButton'}>
                <Button id="buttonid" type="submit" label={'Log in'} />
              </div>
              <div className={'validation'}>

              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Login = LoginC;
