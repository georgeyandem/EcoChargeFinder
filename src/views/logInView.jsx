// logInView.jsx
import {
  login,
  logout,
  signup,
  password_reset,
  loginByGoogle,
} from "../auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      login(this.email, this.password);
    },
    logout() {
      logout();
    },
    signup() {
      signup(this.email, this.password);
    },
    reset() {
      password_reset(this.email);
    },
    google() {
      loginByGoogle();
    },
  },
  render() {
    return (
      <div>
        <form id="loginForm">
          <input
            type="email"
            v-model={this.email}
            placeholder="Email"
            autocomplete="email"
          />
          <input
            type="password"
            v-model={this.password}
            placeholder="Password"
            autocomplete="current-password"
          />
        </form>
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout}>Logout</button>
        <button onClick={this.signup}>Signup</button>
        <button onClick={this.reset}>Forget your Password</button>
        <button onClick={this.google}>Login with Google</button>
      </div>
    );
  },
};
