import React from 'react';
import Home from './home';					
import About from './about';			  
const routes=[{
    path:'/',
    exact: true,
    main: ()=> <Home />
},
{
    path : '/about',			
    exact : true,			
    main : ()=> <About />		
}			
];

export default routes;