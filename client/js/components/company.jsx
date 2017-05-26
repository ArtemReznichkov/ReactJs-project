const React = require('react');
const router = require('react-router');
let Router = router.Router;
let hashHistory = router.hashHistory;
let Route = router.Route;
let IndexRoute = router.IndexRoute;
let Link = router.Link;

let Biography = require('./company/Biography.jsx');
let History = require('./company/History.jsx');
let Skills = require('./company/Skills.jsx');


class CompanyLink extends React.Component {
    constructor() {
        super();
        this.state = {
            current:2
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event){
        let target = event.target;
        let links = document.getElementsByClassName('company_nav_link');

        links[this.state.current].classList.remove('company_nav_link_active');
        target.classList.add('company_nav_link_active');

        this.setState({ current: target.dataset.id });
    }
    render() {
        return(
            <div className = "company-tabs">    
              	          <ul className = "list-inline">
              	           <li><Link to='/company/history'className="company_nav_link" data-id="0" onClick={this.clickHandler}>OUR HISTORY</Link></li>                
                            <li><Link to='/company/biography' data-id="1" className="company_nav_link" onClick={this.clickHandler}>OUR BIOGRAPHY</Link></li>
                            <li><Link to='/company/skills' data-id="2" className="company_nav_link company_nav_link_active" onClick={this.clickHandler}>OUR SKILLS</Link></li>
              	         </ul>
    	   </div>   
        );
    }
}
      


class Company extends React.Component {
    render() {
        return(
         
             <section id = "company">
    		  <div className = "col-lg-12 col-md-12 col-sm-12">
    		    <div className = "col-lg-6 col-md-6 col-sm-6 company-img">
    		      <img src="img/services2.png"></img>
    		    </div>
    		    <div className = "col-lg-6 col-md-6 col-sm-6 company-about">
    		      <div className = "col-lg-6 col-md-6 col-sm-6"> 
    		        <h1>About Our Company</h1>
                  
                    <div className="clearfix"></div>
                    <CompanyLink />
        	         <div className = "company-info">
        	           {this.props.children}
        	         </div>
                 </div>
    		    </div>
    		  </div>
		</section>
            
        );
    }
}

class CompanyRouter extends React.Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Company}>
                   <Route path='company/history' component={History} />
                   <Route path='company/biography' component={Biography} />
                   <Route path='company/skills' component={Skills} />
                   <IndexRoute component={Skills} />
                </Route>
            </Router>    
        );
    }
}

module.exports = CompanyRouter;