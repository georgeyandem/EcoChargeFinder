# EcoChargeFinder

The EcoChargeFinder is a website that enables users to effortlessly locate electric vehicle (EV) charging stations on a global scale. It is a web application designed to help users locate charging stations for electric vehicles in various cities. The application provides information about the number of charging stations, their locations, and additional details to assist electric vehicle users in finding suitable charging points.

The website prioritizes mobile accessibility, ensuring a smooth and user-friendly experience for all visitors, including those using mobile phones. Users, regardless of their device, can seamlessly locate nearby charging stations, and simplifying their search for charging points. 

Here is a file overview of the files that has been created: 

## Files Overview

### Components

### VueRoot.jsx
The root component that sets up the Vue Router and renders the main content based on the current route.

### Search.jsx
Presenter component for the search feature, allowing users to type a location and initiate a search.

### Home.jsx
Presenter component for the home page, displaying information about the number of chargers and providing buttons to navigate to other sections.

### About.jsx
Presenter component for the about page, providing information about the app and a button to navigate back to the home page.

### Views

#### `AboutView.jsx`
- Description: Provides information about how the app works and a contact section.
- Features:
  - Description about how the app works.
  - Contact information.
  - Back to Home Page button.

#### `DetailsView.jsx`
- Description: Displays details about a specific dish, including an image, price, ingredients, and instructions.
- Features:
  - Add to Menu button.
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
- Features:
  - About us button.
  - Back to Home button.
  - Search input and button.

#### `TopbarView.jsx`
- Description: Represents the top bar of the application.
- Features:
  - Navigation buttons.
  - Number of chargers information.

### Presenters

#### `AboutPresenter.jsx`
- Description: Presenter for the AboutView.
- Features: No additional logic, simply renders the AboutView.

#### `DetailsPresenter.jsx`
- Description: Presenter for the DetailsView.
- Features:
  - Add to Menu button functionality.

#### `HomePresenter.jsx`
- Description: Presenter for the HomeView.
- Features: No additional logic, simply renders the HomeView.

#### `SearchPresenter.jsx`
- Description: Presenter for the SearchView.
- Features: No additional logic, simply renders the SearchView.

#### `SidebarPresenter.jsx`
- Description: Presenter for the TopbarView.
- Features:
  - Number of guests change functionality.
  - Dish link click functionality.
  - Remove dish functionality.

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
2. Install dependencies (if any).
3. Run the application.

Enjoy using EcoChargeFinder to find electric vehicle charging stations easily!
