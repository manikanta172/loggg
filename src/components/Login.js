import React from 'react';

function Login() {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [passErr, setPassErr] = React.useState('');

  function updateEmail(e) {
    setEmail(e.target.value);
    setEmailErr('');
  }

  function updatePass(e) {
    setPass(e.target.value);
    setPassErr('');
  }

  function checkForm(e) {
    e.preventDefault();

    let ok = true;

    if (email == '') {
      setEmailErr('email required');
      ok = false;
    } else if (email.includes('@') == false || email.includes('.') == false) {
      setEmailErr('invalid email');
      ok = false;
    }

    if (pass == '') {
      setPassErr('password required');
      ok = false;
    } else if (pass.length < 6) {
      setPassErr('password too short');
      ok = false;
    }

    if (ok == true) {
      alert('login ok');
      setEmail('');
      setPass('');
    }
  }

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={checkForm}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={updateEmail} />
          <p style={{color:'red'}}>{emailErr}</p>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={pass} onChange={updatePass} />
          <p style={{color:'red'}}>{passErr}</p>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;