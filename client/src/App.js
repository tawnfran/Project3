
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import guests from "./pages/guests";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import home from "./pages/home";
import registry from "./pages/registry";
import toDo from "./pages/toDo";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/guests" component={guests} />
            <Route exact path="/registry" component={registry} />
            <Route exact path="/toDo" component={toDo} />
          </Switch>          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

// const App = () => {
//   return (
//     <div className="container">
//       <h1>Test</h1>
//       <div className="flex-row">
//         <div className="flex-large">
//           <h2>Add Guest</h2>
//         </div>
//         <div className="flex-large">
//           <h2>View Guests</h2>
//           <guestsTable />
//         </div>
//       </div>
//     </div>
//   )
// }

// class App extends Component {
//   initialState = {
//       name: "",
//       attending: false,
//   }
//   state = initialState
//   updateGuest = guest => {
//       this.setState({name: guest.name, attending: guest.attending})
//   }
// }

export default App;