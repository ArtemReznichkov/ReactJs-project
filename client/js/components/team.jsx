import React, {Component} from 'react';

var members = [
    {src: 'img/2.jpg', name: 'Al Masum', position: 'Founder', keys: 1},
    {src: 'img/1.jpg', name: 'Mis Liza', position: 'UX Designer', keys: 2},
    {src: 'img/3.jpg', name: 'Afifa Jannat', position: 'Web Designer', keys: 3},
    {src: 'img/4.jpg', name: 'Hasan Mahmud', position: 'Web Designer', keys: 4},
    ]

class Team extends Component {
    render() {
        return(
        
            <section id = "team">
    			<div className = "container">
    				<div className = "row">
    					<div className="col-lg-12 text-center">
                            <h1>Meet Our Team</h1>
                            <hr className="section-heading-spacer"></hr>
                            <div className="clearfix"></div>
    	                </div>
    	                <div className = "team-members">
    	                    {members.map(function(item){
    	                      return (
    	                      <div key={item.keys} className = "col-lg-3 col-md-6 col-sm-6 col-xs-12">
    	              		    <div className = "member-photo">
        		              		<img src={item.src} className="img-responsive"></img>
        		            		<div className = "member-name">
        		            			<h5>{item.name}</h5>
        		            			<p>{item.position}</p>
        		            		</div>
    		                    </div>
    	                        <div className = "member-social-links text-center" >
                                    <ul>
      	             		            <li className = "facebook"><a href = "#"><span className="fa-lg"><i className="fa fa-facebook"></i></span></a></li>
      	             		            <li className = "twitter"><a href = "#"><span className="fa-lg"><i className="fa fa-twitter"></i></span></a></li>
                        				<li className = "google"><a href = "#"><span className="fa-lg"><i className="fa fa-google-plus"></i></span></a></li>
                        				<li className = "dribbble"><a href = "#"><span className="fa-lg"><i className="fa fa-dribbble"></i></span></a></li>
                			        </ul>
                		        </div>
                        	</div>
    	                    )})}
    	             	    
                        </div>
          	        </div>
    			</div>
		    </section>
		
		)
    }
}

export default Team;