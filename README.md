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

### Model

#### `EvModel.js`
- Description: Application state model containing data related to user input, search parameters, search results, and chargers.

#### `EvSource.js`
- Description: Handles API requests for searching charging stations.

#### `resolvePromise.js`
- Description: Utility function to handle promises and update promise state.

## What Still Needs to Be Done
While the current implementation provides a functional foundation, there are several areas that may benefit from further development:
* TopbarView: The top bar component is currently a placeholder. Depending on the project requirements, additional navigation or information features could be implemented here. 
* DetailsPresenter and DetailsView: If the application involves more detailed information about charging stations, these components may need enhancements to display and handle additional data. 
* Styles and UI Improvements: Enhance the overall user experience by adding styles and UI improvements to make the application more visually appealing and user-friendly. 
* Testing: Implement unit tests and integration tests to ensure the reliability and robustness of the application. 
* Documentation: Provide comprehensive documentation for developers, including setup instructions, code structure, and any additional features. 

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
