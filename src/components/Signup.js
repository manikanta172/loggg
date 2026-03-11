import React from 'react';

function Signup() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [cpass, setCpass] = React.useState('');

  const [nameErr, setNameErr] = React.useState('');
  const [emailErr, setEmailErr] = React.useState('');
  const [passErr, setPassErr] = React.useState('');
  const [cpassErr, setCpassErr] = React.useState('');

  function handleName(e) {
    setName(e.target.value);
    setNameErr('');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setEmailErr('');
  }

  function handlePass(e) {
    setPass(e.target.value);
    setPassErr('');
  }

  function handleCpass(e) {
    setCpass(e.target.value);
    setCpassErr('');
  }

  function submitForm(e) {
    e.preventDefault();

    let good = true;

    if (name == '') {
      setNameErr('name required');
      good = false;
    } else if (name.length < 3) {
      setNameErr('name too short');
      good = false;
    }

    if (email == '') {
      setEmailErr('email required');
      good = false;
    } else if (email.includes('@') == false || email.includes('.') == false) {
      setEmailErr('invalid email');
      good = false;
    }

    if (pass == '') {
      setPassErr('password required');
      good = false;
    } else if (pass.length < 6) {
      setPassErr('password too short');
      good = false;
    }

    if (cpass == '') {
      setCpassErr('confirm password');
      good = false;
    } else if (pass != cpass) {
      setCpassErr('passwords dont match');
      good = false;
    }

    if (good == true) {
      alert('signup success');
      setName('');
      setEmail('');
      setPass('');
      setCpass('');
    }
  }

  return (
    <div>
      <h2>SIGNUP</h2>
      <form onSubmit={submitForm}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleName} />
          <p style={{color:'red'}}>{nameErr}</p>
        </div>

        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmail} />
          <p style={{color:'red'}}>{emailErr}</p>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={pass} onChange={handlePass} />
          <p style={{color:'red'}}>{passErr}</p>
        </div>

        <div>
          <label>Confirm:</label>
          <input type="password" value={cpass} onChange={handleCpass} />
          <p style={{color:'red'}}>{cpassErr}</p>
        </div>

        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
}

export default Signup;