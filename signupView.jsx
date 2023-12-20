import "/src/style.css";

// Updated SignupView component
function SignupView(props) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex-container px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* Left side with image */}
        <div className="image-container">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="./EcoChargeFinder_icon.png" alt="logo" />
            EcoChargeFinder
          </a>
        </div>
        {/* Middle part with Sign in */}
        <div className="form-container bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{ marginLeft: '0rem', paddingRight: '-1rem'}}>
          <p className="text-sm font-light text-gray-500 dark:text-gray-300 mt-4">
            Sign in to your account <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">here</a>.
          </p>
        </div>
        {/* Right side with the form container */}
        <div className="form-container bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {/* Adding the input container */}
              <div className="input-container">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="fixed-size-input"
                    placeholder="username"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="fixed-size-input"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    type="password"
                    className="fixed-size-input"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    className="fixed-size-input"
                    placeholder="••••••••"
                    required=""
                  />
                </div>
                {/* ... (other input fields) */}
              </div>
              <div className="input-container">
              <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                />
             </div>
            <div className="ml-1 text-sm">
               <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                I accept the <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a>
                </label>
            </div>
            </div>
                {/* ... (other input fields) */}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
              {/* ... (other elements) */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupView;
