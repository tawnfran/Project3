import React from 'react';
// import guests from "./pages/guests";
// import registry from "./pages/registry";
// import toDo from "./pages/toDo";
import './App.css';
import Wrapper from "./pages/Wrapper";

    function App() {
      return (
        <Router>
          <div>
           <Navbar />
            <Wrapper>
               <Route exact path="/" component={home} />
               {/* <Route exact path="/guests" component={guests} />
              <Route exact path="/registry" component={registry} />
               <Route exact path="/toDo" component={toDo} /> */}
             </Wrapper>
             <Footer />
           </div>
         </Router>
      );
    }


export default App;
