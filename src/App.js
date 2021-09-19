import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Create from "./Components/Create";

import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import BlogDetail from "./Components/BlogDetails";

function App() {
  return (
      <Router>
          <div className="App">
            <Navbar />
            <div className="content">
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route path="/create">
                      <Create />
                  </Route>

                  <Route path="/blogs/:id">
                      <BlogDetail/>
                  </Route>
              </Switch>
            </div>
          </div>
      </Router>
  );
}

export default App;