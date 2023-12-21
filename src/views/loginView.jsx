import "/src/style.css";
function LogInView(props) {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="./EcoChargeFinder_icon.png"
            alt="logo"
          />
          EcoChargeFinder
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" id="loginForm">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  type="email"
                  onChange={emailChangeACB}
                  //placeholder="Email"
                  autocomplete="email"
                  id="email"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  type="password"
                  onChange={passwordChangeACB}
                  placeholder="Password"
                  autocomplete="current-password"
                  id="password"
                />
              </div>

              <div class="flex items-center justify-between">
                <a
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#/reset"
                >
                  Forget your Password
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                onClick={loginACB}
                onkeydown={handleKeyPress}
              >
                Sign in
              </button>
              <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                  {" "}
                  OR
                </p>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                onClick={googleACB}
              >
                Sign in with Google
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400 mb-4 ">
                {" "}
                Don’t have an account yet?&nbsp;
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#/signup"
                >
                  Signup
                </a>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
      {/*<button  onClick={logoutACB}>Logout</button>*/}
    </section>
  );

  function passwordChangeACB(evt) {
    props.onPasswordChange(evt.target.value);
  }

  function emailChangeACB(evt) {
    props.onEmailChange(evt.target.value);
  }
  function loginACB(event) {
    props.loginUsingEmail();
    event.preventDefault(); // Prevent the default form submission behavior
  }
  function handleKeyPress(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      props.loginUsingEmail();
      event.preventDefault(); // Prevent the default form submission behavior
    }
  }

  function googleACB() {
    props.loginUsingGoogle();
  }
}

export default LogInView;
