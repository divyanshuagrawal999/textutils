// // import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// // import React from 'react' 

// function App() {
//   return (
//     <>
//      <Navbar title="TextUtils" about = "About us" />
//      <div className="container"><Textform heading="Enter a text to analyze" /></div>
//     <About />
//     <Alert />

//     </>
//   );
// }

// export default App;



import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Routes>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
          <Alert alert={alert} />
          <div className="container my-3">
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about" element={<About mode={mode} />}>

            </Route>
            <Route exact path="/" elements={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} >

            </Route>
          </div>
        </Routes>
      </Router>
    </>
  );
}

export default App;