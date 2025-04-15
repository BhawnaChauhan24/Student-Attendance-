import React from "react";
import StudentPage from "./Components/StudentPage"; // Import the main page component
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Include your desired PrimeReact theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core styles
import 'primeicons/primeicons.css'; // PrimeIcons styles
 
const App = () => {
    return (
<div className="App">
<StudentPage />
</div>
    );
};
 
export default App;