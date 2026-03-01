# React Demo App

##  Overview

This project is a React web application developed as a technical interview task.  
It demonstrates the use of modern React practices including:

- Functional Components
- React Hooks
- Context API for state management
- API integration
- Responsive UI with Tailwind CSS
- Basic unit testing with Vitest and React Testing Library

The application contains three main pages:

1. Login Page  
2. Main Page (Explorer with Search)  
3. Detail Page  


##  Technologies Used

- React (Vite)
- React Router DOM
- Context API
- Tailwind CSS
- Vitest (not working)
- React Testing Library
- Public REST API (iTunes Search API)


##  Login Page


- Phone number input field
- Validation rules:
  - Required field
  - Must start with `+254`
  - Mock validation (only accepts a specific number)
- Displays error messages
- On success:
  - Saves login state to `localStorage`
  - Redirects to the Main Page


##  Main Page (Explorer)

- Fetches music data from a public API
- Displays results in a responsive grid
- Includes a debounced search input
- Loading and error states handled properly
- Clicking an item navigates to the Detail Page


##  Detail Page

- Fetches detailed information using the item ID
- Displays:
  - Album cover (high resolution)
  - Title
  - Artist
  - Album
  - Genre
  - Duration
  - Audio preview
- Responsive layout (desktop & mobile)
- Cinematic blurred background using album artwork


##  Architectural Decisions

- Context API is used to manage global search state.
- The Detail page performs its own API fetch to ensure it works even on page refresh.
- Debouncing is implemented to prevent excessive API calls.
- Components are modular and separated by responsibility.


##  Testing

At least one unit test is included:

Unfortunately, I wasn't able to complete the testing requirements within the project's timeframe. I focused on ensuring the core functionality is solid, but I regret not being able to include the full test suite.
