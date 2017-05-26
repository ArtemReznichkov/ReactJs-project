import React, {Component} from 'react';

class PortfolioWorks extends React.Component {

    render() {
        let works = [
            {src: 'img/services1.png',title:'creative design',type:'web design'},
            {src: 'img/services2.png',title:'creative design',type:'graphic design'},
            {src: 'img/services3.png',title:'creative design',type:'graphic design'},
            {src: 'img/services1.png',title:'creative design',type:'graphic design'},
            {src: 'img/services2.png',title:'creative design',type:'web design'},
            {src: 'img/services3.png',title:'creative design',type:'landing pages'},
            {src: 'img/services1.png',title:'creative design',type:'landing pages'},
            {src: 'img/services2.png',title:'creative design',type:'landing pages'},
            {src: 'img/services3.png',title:'creative design',type:'wordpress'},
            {src: 'img/services1.png',title:'creative design',type:'wordpress'},
            {src: 'img/services2.png',title:'creative design',type:'wordpress'},
            {src: 'img/services3.png',title:'creative design',type:'wordpress'},
        ];
        let type = this.props.filterType.toLowerCase();
        let worksRender = works.map((item,index)=>{
            if(item.type == type || type == 'all'){
                return  <li key={index} className="col-xs-6 col-sm-4 col-md-3 col-lg-3 portfolio-item" data-title={item.title} 
                             data-type={item.type}>
                        <a className = "image-link">
                          <img src = {item.src} className="img-responsive"></img>
                          <div className ="image-cover"></div>
                          <div className = "cover-icon">
                            <span className ="fa-stack fa-2x">
                              <i className ="fa fa-circle-thin fa-stack-2x first-fa-circle"></i>
                              <i className ="fa fa-pencil fa-stack-1x fa-inverse first-fa-el"></i>
                            </span>
                            <span className ="fa-stack fa-2x">
                              <i className ="fa fa-circle fa-stack-2x second-fa-circle"></i>
                              <i className ="fa fa-search fa-stack-1x fa-inverse second-fa-el"></i>
                            </span>
                          </div>
                          <h4 className = "cover-title">Creative Design</h4>
                          <p className ="cover-text">{item.type}</p>
                        </a>
                       </li>
            }
        });
        return (
            <div className="col-lg-12 text-center">
     			<div className = "portfolio-images">
         			<ul className="full-portfolio clearfix" id="Grid">
                        { worksRender }
                    </ul>
                </div>
            </div>
        );
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType:'All'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event) {
        let target = event.target;
        this.setState({ filterType: target.innerText });
    }
    render() {
        let filterList = ['All', 'Graphic Design', 'Web Design', 'Landing Pages', 'Wordpress'];
        let filterListRender = filterList.map((text,index) => {
            if (text == this.state.filterType) {
                return <li  onClick={this.clickHandler} key={index}><a>{text}</a></li>
            } else {
                return <li  onClick={this.clickHandler} key={index}><a>{text}</a></li>
            }
        });
        return(
            
            <section id = "portfolio">
 			    <div className = "container">
 				    <div className = "row">
 					    <div className="col-lg-12 text-center">
                               <h1>Our Amazing Work</h1>
                               <hr className="section-heading-spacer"></hr>
                               <div className="clearfix"></div>
                        <div className="col-lg-10 col-lg-offset-1 text-center">
                            <ul className = "list-inline portfolio-filter">
                                {filterListRender}
                            </ul>
                                <PortfolioWorks filterType={this.state.filterType} />
                        </div>
                    </div>
 				   </div>
 				</div>
            </section>
            
        );
    }
}

export default Portfolio;

