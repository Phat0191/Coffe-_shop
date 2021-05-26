import React, {Component,Fragment} from 'react';					
import './App.css';				
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';	
//import UpdateProduct from './crud/update';
// import CallAPI  from './crud/Allproduct';
// import routes from './components/router';	
// import Interface from './components/interface';
import Content from "./User_content/Content_service";
import Our_menu from './User_content/our_menu';
import Caffee_sell from './User_content/caffee_sell';
import People_shop from './User_content/people_shop';
import Our_chef from './User_content/our_chef';
import Footer from './User_content/footer';
import Navbar from './User_content/Navbar';
import HeroSection from './User_content/Video';
import About from './User_content/About';


// test frontend


function App() {
  return(
    <Fragment>
      <Navbar />
      <HeroSection />
      <About />
      <Content />
      <Our_menu />
      <Caffee_sell />
      <People_shop />
      <Our_chef />
      <Footer />
    </Fragment>
  );
}
export default App;







// function App() {
//   return(
//     <Fragment>
//       <CallAPI  />
//     </Fragment>
//   );
// }
// export default App;



// class App extends Component {					
// render(){					
// return (					
// <Router>
//   <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to='/about'>About</Link>
//   </li>
//   </ul>					
// <Switch>					
// {this.showContentMenu(routes)}					
// </Switch>					
// </Router>					
// );					
					
// }					
// showContentMenu = (routes) =>{					
// var result = null;					
// if (routes.length > 0) {					
// result = routes.map((route, index) =>{					
// return (					
// <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />		
// );		
// });					
// }					
// return result;					
// }				
// }					
		

  // import React from "react";
  // import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  //   Link
  // } from "react-router-dom";

  // export default function BasicExample() {
  //   return (
  //     <Router>
  //       <div>
  //         <ul>
  //           <li>
  //             <Link to="/">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about">sadh</Link>
  //           </li>
  //           <li>
  //             <Link to="/ashboard">Dashboard</Link>
  //           </li>
  //         </ul>
  //         <hr />
  //         <Switch>
  //           <Route exact path="/">
  //             <Home />
  //           </Route>
  //           <Route path="/about">
  //             <About />
  //           </Route>
  //           <Route path="/ashboard">
  //             <Dashboard />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </Router>
  //   );
  // }

  // function Home() {
  //   return (
  //     <div>
  //       <h2>Home</h2>
  //     </div>
  //   );
  // }

  // function About() {
  //   return (
  //     <div>
  //       <h2>About</h2>
  //     </div>
  //   );
  // }

  // function Dashboard() {
  //   return (
  //     <div>
  //       <h2>Dashboard</h2>
  //     </div>
  //   );
  // }
