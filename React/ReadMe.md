## Project Structure

### Frontend (React)

#### `studentform.js`

This component allows users to fill out and submit a form for student placements.

- **State Management**: Manages form data (`placement`), error messages (`error`), and success status (`success`).
- **Form Submission**: Validates the form and submits the data to the backend using an Axios POST request.
- **Form Reset**: Clears the form fields and resets error and success messages.

#### `viewstud.js`

This component fetches and displays a list of all students.

- **State Management**: Manages the list of students (`students`).
- **Effect Hook**: Fetches student data when the component is first rendered.
- **Fetch Students**: Makes a GET request to fetch student data from the backend.
- **Render**: Displays a table of students if there are any, otherwise shows "No Students".

#### `Studform.js`

This component is responsible for displaying individual student data in a table row format.

- **Props**: Receives student data (`st`) as props and renders it in a table row (`<tr>`).

#### `api.js`

This file contains the base URL for the backend API.

- **Base URL**: Defines the base URL for the backend API which is used in Axios requests.

```javascript
const base_url = "http://localhost:8081/placement";
export default base_url;

