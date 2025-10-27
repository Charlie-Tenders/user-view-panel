# User View Panel

A simple, modular web application that displays and edits user information through a clean Bootstrap interface.  
The app fetches user data from a REST API (or local mock data) and allows in-place editing with live updates.

---

## Features

- Fetches user data from a remote REST API  
- Displays users as responsive Bootstrap cards  
- Opens a modal form to edit user information  
- Sends updates to the API using a PUT request  
- Uses modular JavaScript (ES6 imports)  
- Includes a local mock dataset for offline testing

---

## Project Structure
```
/
├── index.html # Main page and modal container
├── style.css # Custom styling for cards and layout
├── mock-data/
│ └── response.json # Local mock dataset
└── js/
├── script.js # Main script (fetch, render, edit, update)
└── utils/
├── fetchData.js # GET request handler
├── putData.js # PUT request handler
└── formFactory.js # Dynamic modal form generator
```

## ️ Setup & Usage

1. Clone this repository or download the project files.
2. Open `index.html` in your browser.  
   *(No server required if using local mock data.)*
3. To fetch live data, ensure the API endpoint in `script.js` is accessible:
   ```js
   const remoteUrl = "https://easy-simple-users-rest-api.onrender.com/api/users";
4. Click `Edit` on any user card to open the modal and update user details.

## Tech Stack
- HTML5
- CSS3 + Bootstrap 5.3
- Vanilla JavaScript (ES Modules)
- Fetch API for Get/PUT requests

## Data Format
Each user object follows this structure:
```
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "gender": "male",
  "avatar_url": "https://avatar.iran.liara.run/public/boy",
  "created_at": "2025-09-23 11:22:01"
}
```
