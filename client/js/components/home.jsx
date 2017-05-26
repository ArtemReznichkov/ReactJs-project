import React, {Component} from 'react';
import Slider from 'react-slick';

let Scroll = require('react-scroll');
let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


// class ButtonNext extends React.Component{
    
//       constructor(props) {
//     super(props)
//     this.next = this.next.bind(this)
   
//   }
//   next() {
//     this.slider.slickNext()
//   }

//         render(){
//             return (
//         <span className="sld-btn btn-right" >
// 			<i className = "fa fa-angle-right fa-2x ">
// 			<i {...this.props}></i>
// 			</i>
// 		</span>
//         )}
// }

// class ButtonPrev extends React.Component{
//       constructor(props) {
//     super(props)
    
//     this.previous = this.previous.bind(this)
//   }
  
//   previous() {
//     this.slider.slickPrev()
//   }
    
//         render(){
//             return (
//              <span className="sld-btn btn-left">
// 	             <i className = "fa fa-angle-left fa-2x">
// 	             <i {...this.props}></i>
	           
// 	             </i>
//              </span>
	
//         )}
// }

class ReactSlickDemo extends React.Component{

 
    
  render() {
  	var settings = {
      dots: true,
      accessibility: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrow: true,
      autoplaySpeed: 3000,
    //   nextArrow: <ButtonNext />,
    //   prevArrow: <ButtonPrev />,
      pauseOnHover: true
    }
    return (
    	
      	<Slider {...settings}>
    			<div>
    				<h2>THE HAM IS <span>A PSD TEMPLATE</span></h2>
    				<h1>WHO WE ARE</h1>
    				<h3>Nam varius accumsan elementum aliquam</h3>
    				<Link  to="portfolio" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active"><input type="button" value = "EXPLORE NOW"/></Link>
    				<Link to="contact" spy={true} smooth={true} duration={500} className="nav_item" activeClass="active"><input type="button" value = "PURCHASE NOW"/></Link>
    			</div>
    			<div>
    				<h2>THE HAM IS <span>A PSD TEMPLATE</span></h2>
    				<h1>WE ARE NUMBER ONE</h1>
    				<h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
    				<Link  to="portfolio" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active"><input type="button" value = "EXPLORE NOW"/></Link>
    				<Link to="contact" spy={true} smooth={true} duration={500} className="nav_item" activeClass="active"><input type="button" value = "PURCHASE NOW"/></Link>
    			</div>
    			<div>
    				<h2>THE HAM IS <span>A PSD TEMPLATE</span></h2>
    				<h1>WE ARE CREATIVE</h1>
    				<h3>Quis autem vel eum iure reprehenderit qui in ea voluptate</h3>
    				<Link  to="portfolio" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active"><input type="button" value = "EXPLORE NOW"/></Link>
    				<Link to="contact" spy={true} smooth={true} duration={500} className="nav_item" activeClass="active"><input type="button" value = "PURCHASE NOW"/></Link>
    			</div>
				
          
        </Slider>
      
    );
  }
};


class Home extends Component {
	
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
        
        <section id = "home">
			<div className = "home-content">
				<div className = "container text-center carousel">
					<div className = "row gallery" >
						<div className = "col-lg-12  carousel-wraper">
							<ReactSlickDemo />
						</div>
					</div>
				</div>
			</div>
		</section>
		
		)
    }
}

export default Home;

