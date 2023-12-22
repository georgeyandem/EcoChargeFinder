# EcoChargeFinder

The EcoChargeFinder is a website that enables users to effortlessly locate electric vehicle (EV) charging stations on a global scale. It is a web application designed to help users locate charging stations for electric vehicles in various cities. The application provides information about the number of charging stations, their locations, and additional details to assist electric vehicle users in finding suitable charging points.

The website prioritizes mobile accessibility, ensuring a smooth and user-friendly experience for all visitors, including those using mobile phones. Users, regardless of their device, can seamlessly locate nearby charging stations, and simplifying their search for charging points. 

Here is a file overview of the files that has been created: 

## Files Overview

### Components:

#### VueRoot.jsx
The root component that sets up the Vue Router and renders the main content based on the current route.

#### map.vue
the map thrid party component that redering a map using Leaflet library.

#### ErrorModal.vue 
This component is responsible for displaying an error message when the user denies access to location services in the browser.Denying access prevents the display of the current user position on the map.

### Views:

#### `AboutView.jsx`
- Description: Provides information about how the app works and a contact section.
- Features:
  - Description about how the app works.
  - Contact information.

#### `DetailsView.jsx`
- Description: Displays details about a specific charge station, including an image, price, ingredients, and instructions.
- Features:
  - Cancel button.
  - More information link.

#### `HomeView.jsx`
- Description: The home page view displaying buttons for navigation and information about charging stations.
- Features:
  - About us button.
  - Find a charger button.
  - Display information about charging stations.

#### `SearchView.jsx`
- Description: Allows users to perform a search for charging stations.

#### `SearchResultsView.jsx`
- Description: Allows user to see the searchResults for charging stations.

#### `TopbarView.jsx`
- Description: Represents the top bar of the application.
- Features:
  - Navigation buttons.

#### `BottenbarView.jsx`
- A copyright statement indicating the current year and ownership of the EcoChargeFinder website.
- Links to important pages:
  - Terms of Service
  - Privacy Policy 

#### `ContactView.jsx`
  - This component displays contact information, business hours, and a "Get in Touch" section. It provides a structured layout for presenting essential details.

#### `DetailsView.jsx`
  - This component renders detailed information about a station, showcasing an image, station name, reviews, color, size options, pricing, and an "Add to Favorites" button. Ideal for presenting in-depth content within your React application.

#### `MarklistView.jsx`
  - This component is designed to display a list of favorite stations. It provides a clean and organized layout with the ability to remove stations from the favorites list.

#### `ResetPassword.jsx`
  - This component provides a user interface for resetting passwords. It includes a form with an email input, a checkbox for accepting terms and conditions, and a button to initiate the password reset process.

#### `PrivacyPolicyView.jsx`
  - This component presents the privacy policy for EcoChargeFinder, outlining the collection, usage, and protection of user information. This component is designed to provide users with transparency about how their data is handled when using the application.

#### `TermsOfService.jsx` 
  - This component presents the terms of service for EcoChargeFinder, outlining the rules and regulations for using the platform. Users are required to comply with these terms when accessing or using the services provided by EcoChargeFinder.

### Presenters:

#### `AboutPresenter.jsx`
- Description: Presenter for the AboutView.
- Features: No additional logic, simply renders the AboutView.

#### `DetailsPresenter.jsx`
- Description: Presenter for the DetailsView.
- Features:No additional logic, simply renders the DetailsView.


#### `HomePresenter.jsx`
- Description: Presenter for the HomeView.
- Features: No additional logic, simply renders the HomeView.

#### `MapWithSearchPresenter.jsx`
- Description: Presenter for the Search, Search Results and the map.
- Features: No additional logic, simply renders the SearchView.
  -Features:
    - Reads user input from the search bar.
    - Provides search results upon clicking the search icon or  pressing Enter.

#### `TopBarPresenter.jsx`
- Description: Presenter for the navbar, Search Results and the map.
  - Features:No additional logic, simply renders the topBarView.

#### `BottombarPresenter.jsx`
-The BottombarPresenter orchestrates navigation actions for the bottom bar of the application. It provides functions to navigate to the terms of service and privacy policy views by updating the window location hash. This presenter is responsible for handling user interactions and directing them to the respective views.

#### `ContactPresenter.jsx`
-The ContactPresenter is a presenter component that renders the ContactView. It serves as a bridge between the view and any data or functionality required. In this case, it simply renders the ContactView, which displays contact information and details.

#### `DescreiptionPresenter.jsx`
- The descriptionPresenter component serves as an introduction to the EcoChargeFinder application, providing users with essential information about its purpose and functionality. 

#### `DetailsPresenter.jsx`
- This component serves as a presenter to display a summary of details, incorporating user interactions related to saving favorites and managing user data. It leverages the TopbarView and DetailsView components to provide a cohesive user interface.

#### `MarklistPresenter.jsx`
- The Summary component is a presenter that integrates the TopbarView and Marklist components to provide a user interface for managing favorite locations. It includes functions for navigating to location details and removing markers from the user's favorites.

#### `PrivacyPolicyPresenter.jsx`
- The PrivacyPolicyView component in EcoChargeFinder offers users a visually appealing and well-organized presentation of the platform's privacy policy. This view is integral for informing users about how their data is collected, utilized, and safeguarded within the application.

#### `TermsOfServicePresenter.jsx`
- The TermsOfServiceView component is dedicated to presenting EcoChargeFinder's terms of service in a clear and structured manner. Users can refer to this view to understand the rules and regulations governing their use of the platform. It serves as a comprehensive guide to user responsibilities and conditions for utilizing EcoChargeFinder services.

#### `ResetPassword.jsx`
- This component serves as a presenter for the password reset functionality, integrating the ResetPassView component and authentication services. It enables users to initiate the password reset process, providing a seamless experience for updating their account credentials.


### Model

#### `EvModel.js`
- Description: Application state model containing data related to user input, search parameters, search results, and chargers.

#### `EvSource.js`
- Description: Handles API requests for searching charging stations.

#### `resolvePromise.js`
- Description: Utility function to handle promises and update promise state.


## Usage

1. Clone the repository.
```bash
  git clone https://gits-15.sys.kth.se/alayoubi/EcoChargeFinder.git
```
2. Navigate to the project directory:
```bash
  cd EcoChargeFinder
```
3. Install dependencies (if any).
```bash
  npm install
```
4. Run the application.
```bash
  npm run dev
```
## Requriments

-Node.js
Make sure Node.js is installed. you can download it from [here](https://nodejs.org/en).

-apiConfig.js:
in the apiConfig.js file
```javascript
const BASE_URL = "https://nominatim.openstreetmap.org/"; // the DH2642 proxy server
const API_KEY = "tour_api_key"; // exempel mapquest https://developer.mapquest.com/documentation/

export { BASE_URL, API_KEY };
```
> **NOTE**:
> To make sure the app work correctly the api configuration must be set up in a new file named apiConfig.js and have the a code above in the file.) 


> **TIP**:
> You can get free Api-key from mapquest [here](https://developer.mapquest.com/documentation/).

-firebaseConfig.js:
The firebaseConfig.js file is necessary for hosting and authentication purposes.
Obtain the Firebase configuration from the Firebase website.
Ensure these configurations are correctly set up for the app to function as intended.

> **IMPORTANT**:
> Make sure the files named correctly "the config files doesnt start with caps".

Enjoy using EcoChargeFinder to find electric vehicle charging stations easily!
