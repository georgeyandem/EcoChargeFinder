//import "/src/style.css"
//import {sortIngredients} from "/src/utilities.js";
//import {menuPrice, sortDishes, dishType} from "/src/utilities.js";
import "/src/style.css";

// Create a reactive function for isLoggedIn
// Function to check if the user is logged in based on localStorage

function TopbarView(props) {
  // for the mobile
  function mobileACB() {
    const navbar = document.getElementById("navbar-solid-bg");
    navbar.classList.toggle("hidden"); // Toggle the 'hidden' class on click
  }

  function isUserLoggedIn() {
    props.userinfo();
    return localStorage.getItem("isLoggedIn") === "true";
  }

  function logoutACB() {
    props.logoutUsingEmail();
  }
  // Store the current URL before redirecting to the login page
  function loginACB() {
    sessionStorage.setItem("lastVisitedPage", window.location.href);
  }

  function markACB() {
    props.getstore();
  }
  function searchACB() {
    window.location.hash = "#/search";
  }
  return (
    <div>
      <nav class=" bg-gray-800 border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/EcoChargeFinder_icon.png"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
              EcoChargeFinder
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
            onClick={mobileACB}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={searchACB}
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Search for EcoCharger
                </a>
              </li>

              <li>
                {isUserLoggedIn() && ( // Use "&&" for conditional rendering
                  <a
                    onClick={markACB}
                    class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Favorite Station
                  </a>
                )}
              </li>
              <li>
                {/* Conditional rendering based on the authentication status */}
                {isUserLoggedIn() ? (
                  <div class="flex items">
                    <a
                      onClick={logoutACB}
                      class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Logout as {props.username}
                    </a>
                    <img
                      class="ml-4 w-8 h-8 rounded-full"
                      src={props.image || "/user.png"}
                      alt="user photo"
                      id="icon"
                    />
                  </div>
                ) : (
                  <a
                    onClick={loginACB}
                    href="#/login" // Link for login
                    class="block py-2 px-3 md:p-0 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default TopbarView;
