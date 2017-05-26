import React, {Component} from 'react';


class Options extends Component {
    render() {
        return(
        
        <section id = "options">
			<div className = "text-center services-wraper">
				<div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 one">
					<div className = "cover">
      					<span className ="fa-4x increase">
                            <i className ="fa fa-hand-o-up"></i>
                        </span>
                        <h4>PERSONALIZET OPTION</h4>
                    </div>
				</div>
			</div>
			<div className = "text-center services-wraper">
				<div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 two">
					<div className = "cover">
      					<span className ="fa-4x increase">
                            <i className ="fa fa-diamond"></i>
                        </span>
                        <h4>FULLY CUSTOMIZABLE</h4>
                    </div>
				</div>
			</div>
			<div className = "text-center services-wraper">
				<div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 one">
					<div className = "cover">
      					<span className ="fa-4x increase">
                            <i className ="fa fa-flask"></i>
                        </span>
                        <h4>UNLIMITED SUPPORT</h4>
                    </div>
				</div>
			</div>
			<div className = "text-center services-wraper">
				<div className = "col-lg-3 col-md-3 col-sm-6 col-xs-12 two">
					<div className = "cover">
      					<span className ="fa-4x increase">
                            <i className ="fa fa-desktop"></i>
                        </span>
                        <h4>RESPONSIVE ALL DEVICE</h4>
                    </div>
				</div>
			</div>
		</section>
		
		)
    }
}

export default Options;