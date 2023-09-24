import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
  } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <h1>White Group React Presentaion</h1>
              <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/members">Members</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>

              <div className="content">
                <Routes>
                  <Route path="/" element={<Home title='Home' /> } />
                  <Route path="/members" element={<Members title='Members' /> } />  
                  {/* https://teamtreehouse.com/community/updated-reactrouterdom-v6-render-does-not-work-fixed-it-by-adding-title-to-elementabout-titleabout */}
                  <Route path="/contact" element={<Contact title='Contact' /> } />
                </Routes>
              </div>

            </div>
        </HashRouter>
    );
  }
}
export default Main;