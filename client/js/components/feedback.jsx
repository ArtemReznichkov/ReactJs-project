

const React = require('react');


class MessagesPanel extends React.Component{
    constructor(props) {
        super(props);
        this.removeComment = this.removeComment.bind(this);
    }
    removeComment(event) {
        const id = event.target.dataset.id;
        this.props.removeComment(id);
    }
    render() {

        let messagesRender = this.props.messages.map((item,index) => {
            return (
              <div className="row" key={index}>
                <div className="col-md-12">
                    <div className="feedback_item">
                        <div className = 'feedback-message'>
                    	   <h4>{item.title}<span data-id={item.id} onClick={this.removeComment}>x</span></h4>
                           <p>{item.message}</p>
                       </div>
                    </div>
                </div>
              </div>
              );
              
        });
        return(
            
    	   <div className = "feed-block">
                  {messagesRender}
            </div>
              
        );
    }
}

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ id: 1, title: 'Message title', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }],
            errors:''
        }
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }
    addComment(event) {
        let title = document.getElementsByName('title')[0].value;
        let message = document.getElementsByName('message')[0].value;
        let messages = this.state.messages;
        let id = (messages.length + 1);
        if (!message.length || !title.length) {
            this.setState({ errors:true });
            return;
        } else {
            document.getElementsByName('title')[0].value = '';
            document.getElementsByName('message')[0].value = '';
            messages.push({ id, title, message });
            this.setState({ messages, errors: false });
        }
       
    }
    removeComment(id) {
        let messages = this.state.messages.filter((item) => {
            return item.id != id;
        });
        this.setState({ messages });
    }

    render() {
        let errors = this.state.errors ? <h3 className="text-danger">Fields must be empty!</h3> : '';
        return(
                <section id = "feedback">
        		    <div className = "container">
        				<div className = "row">
        				    <div className="col-lg-12 text-center feedback-title">      
        				  	    <h1>Feedback</h1>
                                <hr className="section-heading-spacer"></hr>
                                <div className="clearfix"></div>
        	                </div>
                        <MessagesPanel messages={this.state.messages} removeComment={this.removeComment}  />
                            <div className = "feed-form">
                    	        <div className = 'feed-inputs col-lg-4 col-lg-offset-2'>
                    	            <input type='text' name = 'title' id = 'feedtitle' placeholder = 'Title' />
                    	            <textarea type='text' name = 'message' id = 'feedmessage' className = 'inpt-message' placeholder = 'Message' />
                                     {errors}
                    	        </div>
                    	        <div className = 'feed-leave col-lg-4'>
                    	            <h1>Leave us a message</h1>
                    	            <button onClick={this.addComment}> + ADD COMMENT</button>
                    	        </div>
                	         </div>
                    	 </div>
                    </div>
                </section>
      
        );
    }
}
module.exports = Feedback;