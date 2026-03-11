import React from 'react';

function ForgotPassword() {
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const [msg, setMsg] = React.useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
    setErr('');
  }

  function sendLink(e) {
    e.preventDefault();

    if (email == '') {
      setErr('email required');
    } else if (email.includes('@') == false || email.includes('.') == false) {
      setErr('invalid email');
    } else {
      setMsg('link sent to ' + email);
      setEmail('');
      setTimeout(() => {
        setMsg('');
      }, 3000);
    }
  }

  return (
    <div>
      <h2>FORGOT PASSWORD</h2>
      <p>enter your email</p>
      
      {msg != '' && <p style={{color:'green'}}>{msg}</p>}
      
      <form onSubmit={sendLink}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmail} />
          <p style={{color:'red'}}>{err}</p>
        </div>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default ForgotPassword;