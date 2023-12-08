# EcoChargeFinder

The EcoChargeFinder is a website that enables users to effortlessly locate electric vehicle (EV) charging stations on a global scale.

## Files Overview

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

## Usage

1. Clone the repository.
2. Install dependencies (if any).
3. Run the application.

Enjoy using EcoChargeFinder to find electric vehicle charging stations easily!
