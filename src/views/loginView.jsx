function LogInView(props) {
  return (
    <div>
      <form id="loginForm">
        <input
          type="email"
          onChange={emailChangeACB}
          placeholder="Email"
          autocomplete="email"
        />
        <input
          type="password"
          onChange={passwordChangeACB}
          placeholder="Password"
          autocomplete="current-password"
        />
      </form>
      <button class="forget-password-button" onClick={loginACB}>
        Login
      </button>
      <button class="forget-password-button" onClick={logoutACB}>
        Logout
      </button>
      <button class="forget-password-button" onClick={signupACB}>
        Signup
      </button>
      <button class="forget-password-button" onClick={resetACB}>
        Forget your Password
      </button>
      <br />
      <button class="forget-password-button" onClick={googleACB}>
        Login with Google
      </button>
    </div>
  );

  function passwordChangeACB(evt) {
    props.onPasswordChange(evt.target.value);
  }

  function emailChangeACB(evt) {
    props.onEmailChange(evt.target.value);
  }
  function loginACB() {
    props.loginUsingEmail();
  }
  function logoutACB() {
    props.logoutUsingEmail();
  }
  function signupACB() {
    props.signupUsingEmail();
  }
  function resetACB() {
    props.resetUsingEmail();
  }
  function googleACB() {
    props.loginUsingGoogle();
  }
}

export default LogInView;
