import React, {Component} from 'react';
var router = require('react-router'); 
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link;
let IndexRoute = router.IndexRoute;

class One extends React.Component{
        render(){
            return(
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services1.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    	           do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    	           nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
class Two extends React.Component{
        render(){
            return (
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services2.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    	           nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
    class Three extends React.Component{
        render(){
            return (
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services3.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"Ddolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    	           nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
    class Four extends React.Component{
        render(){
            return (
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services1.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"Aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    	           nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
    class Five extends React.Component{
        render(){
            return (
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services2.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
    class Six extends React.Component{
        render(){
            return (
            <div className = "services-text">
                	           <div className = "col-lg-2 img">
                    	           <img src="img/services3.png" className="img-responsive"></img>
                    	       </div>
                    	       <div className = "col-lg-10">
                    	           <p>"In 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    	           nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    	           sunt in culpa qui officia deserunt mollit anim id est laborum.Ut 
                    	           enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    	           ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    	           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    	       </div>
            </div>
        )}
    }
    
class Service extends Component {

    
    render() {
        return(
        
             <section id = "services">
    		    <div className = "container">
    				<div className = "row">
    				    <div className="col-lg-12 text-center">      
    				  	    <h1>Our Services</h1>
                            <hr className="section-heading-spacer"></hr>
                            <div className="clearfix"></div>
                            <div className = "services-tabs">    
                    	          <ul className = "list-inline">
                    	           <li><Link to='/services/web'>Web Design</Link></li>
                    	           <li><Link to='/services/graphic'>Graphic Design</Link></li>
                    	           <li><Link to='/services/support'>Online Support</Link></li>
                    	           <li><Link to='/services/app'>App Design</Link></li>
                    	           <li><Link to='/services/marketing'>Online Marketing</Link></li>
                    	           <li><Link to='/services/seo'>SEO service</Link></li>
                    	         </ul>
                	         </div>
    	                 </div>
                	       <div className="col-lg-12">  
                	         {this.props.children}
                          </div>
    				</div>
    			</div>
    		</section>
		
		)
    }
}


class Services extends Component {
    

    
    render() {
        return(
         
                	         <Router history={hashHistory}>
                                <Route path='/' component={Service}>
                                   <Route path='/services/web' component={One} />
                                   <Route path='/services/graphic' component={Two} />
                                   <Route path='/services/support' component={Three} />
                                   <Route path='/services/app' component={Four} />
                                   <Route path='/services/marketing' component={Five} />
                                   <Route path='/services/seo' component={Six} />
                                   <IndexRoute component={One} />
                                </Route>
                            </Router>
              
		
		)
    }
}

export default Services;


