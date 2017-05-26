import React, {Component} from 'react';
let Scroll = require('react-scroll');
let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


class Footer extends Component {
    
    	
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
        
       <footer id = "footer">
			<div className = "container text-center">
				<p>&copy; 2017 - <span>theHam</span>| All Rights Reserved</p>
				
				<Link  to="home" spy={true} smooth={true} duration={500}  className="nav_item square-l goup" activeClass="active">
					<span  className="fa-stack fa-2x">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-angle-double-up fa-stack-1x fa-inverse"></i>
                    </span>
				</Link>
				
			</div>
		</footer>
		
		)
    }
}

export default Footer;