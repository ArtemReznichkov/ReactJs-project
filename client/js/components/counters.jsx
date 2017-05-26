import React, {Component} from 'react';
import { render } from 'react-dom';
import CountUp, { startAnimation } from 'react-countup';

class Counters extends Component {
    
  constructor(){
        super();
        this.state={
            animation:false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event){
        let windowHeight =  window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollTop = scroll + windowHeight;
        let position = document.getElementById('counters').offsetTop;
        let offsetInner = document.getElementsByClassName('counter-item-amount')[0].offsetTop/2;
        if(scrollTop>(position+offsetInner)){
            this.setState({animation:true});
            window.removeEventListener('scroll', this.handleScroll);
        }    
    }
    
    
    
    
    render() {
        let facts = [
            { title: 'Works', amount: 4609, icons: 'fa fa-briefcase fa-stack-1x fa-inverse' },
            { title: 'Customers', amount: 3470, icons: 'fa fa-user fa-stack-1x fa-inverse' },
            { title: 'Purchase', amount: 2908, icons: 'fa fa-shopping-cart fa-stack-1x fa-inverse' },
            { title: 'Office', amount: 1908, icons: 'fa fa-map-marker fa-stack-1x fa-inverse' }
        ];
        let factsRender = facts.map((item, index) => {
            let itemRender='';
            let counterAnimation ='';
            if(this.state.animation){
                counterAnimation = <CountUp start={0} end={item.amount} duration={3} />
            }
            if (index % 2 != 0) {
                itemRender =
                <div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 two" key={index}>
					    <div className = "cover">
      						<span className="fa-stack fa-5x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className={item.icons} aria-hidden="true"></i>
                            </span>
                            
                            <h3 className = "counter-item-amount">{counterAnimation}</h3>
                            <p>{item.title}</p>
                        </div>
				</div>
            } else {
                itemRender =
                <div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 one" key={index}>
  						<div className = "cover">
      						<span className="fa-stack fa-5x">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className={item.icons} aria-hidden="true"></i>
                            </span>
                            
                            <h3 className = "counter-item-amount">{counterAnimation}</h3>
                            <p>{item.title}</p>
                        </div>
				</div>
            }
            return itemRender;
        });
        return(
        
            <section id = "counters">
		  	    <div className = "text-center counters-wraper">
		  	    {factsRender}
				
    			</div>
    		</section>
		
		)
    }
}


export default Counters;

