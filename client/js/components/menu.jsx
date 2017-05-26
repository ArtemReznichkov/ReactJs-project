import React, {Component} from 'react';
let Scroll = require('react-scroll');
let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class Menu extends Component {
	
	componentDidMount(){

        Events.scrollEvent.register('begin', function(to, element) {
        });

        Events.scrollEvent.register('end', function(to, element) {
        });

        scrollSpy.update();
    }
    componentWillUnmount(){
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    
    render() {
        return(
        
            <div className="navbar navbar-ket navbar-fixed-top " id="navbar" role="navigation">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i className="fa fa-bars"></i></button>
					<a className="navbar-brand" href="#"><img src="img/logo.png" alt="logo1" className="img-responsive"></img></a>
				</div>
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right animate">
						<li><Link  to="home" spy={true} smooth={true} duration={500}  className="nav_item" activeClass="active">HOME</Link></li>
						<li><Link  to="company" spy={true} smooth={true} duration={500} className="nav_item" offset={-100} activeClass="active">ABOUT</Link></li>
						<li><Link  to="services" spy={true} smooth={true} duration={500} className="nav_item" offset={-100} activeClass="active">SERVICES</Link></li>
						<li><Link  to="portfolio" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active">WORK</Link></li>
						<li><Link  to="counters" spy={true} smooth={true} duration={500} className="nav_item" offset={-100} activeClass="active">TESTIMONIAL</Link></li>
						<li><Link  to="news" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active">BLOG</Link></li>
						<li><Link  to="team" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active">TEAM</Link></li>
						<li><Link to="contact" spy={true} smooth={true} duration={500} className="nav_item" activeClass="active">CONTACT</Link></li>
					</ul>
				</div>
			</div>
		</div>
		
		)
    }
}

export default Menu;