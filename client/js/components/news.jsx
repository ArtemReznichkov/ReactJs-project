import React, {Component} from 'react';

var dataJSON = require('./data.json');
console.log(dataJSON)

class News extends Component {
    render() {
        return(
        
        <section id = "news">
		    <div className = "container">
		        <div className = "row">
		            <div className = "col-lg-12 text-center">
		                <h1>Breaking News</h1>
                        <hr className="section-heading-spacer"></hr>
                        <div className="clearfix"></div>
		            
			            <div className = "col-lg-3 col-sm-6 col-xs-12 text-center" id = "news-id">
			            	<a href = "">
			            		<img src = "img/services3.png" className="img-responsive" />
			            		<h4>News Name</h4>
			            	</a>
			            </div>
			            <button> + LOAD MORE</button>
		            </div>
		        </div>
		  </div>
		</section>
		
		)
    }
}

export default News;