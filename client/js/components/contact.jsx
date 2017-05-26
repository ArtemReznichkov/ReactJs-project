import React, {Component} from 'react';


class Contact extends Component {
 constructor(props) {
        super(props);
        this.state = {
            validation: {
                name: true,
                email: true,
                contactsMessage: true
            }
        }
        this.validateField = this.validateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event) {
        let json;
        let name = document.getElementById('name');
        let email =  document.getElementById('email');
        let message = document.getElementById('message');

        this.validateField(name);
        this.validateField(email);
        this.validateField(message);

        if(this.state.validation.name && this.state.validation.email &&
            this.state.validation.message) {
                let fields = {
                    name: name.value,
                    email: email.value,
                    contactsMessage: message.value
                }
                console.log(fields);
                json = JSON.stringify(fields);
                alert(json);
        } else {
            alert('Check all fields!');
        }
       
        event.preventDefault();
    }
    validateField(event) {
        let target, value;
        if (event.target) {
            target = event.target;
            value = target.value;
        } else {
            target = event;
            value = target.value;
        }
        let pattern = '';

        switch (target.name){
            case 'name': pattern = /^[a-zA-Z]+$/; break;
            case 'email': pattern = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9._]+$/; break;
            case 'contactsMessage': pattern = /[\S\s]{20,}$/; break;
            default: return;
        }
        let newValidation = this.state.validation;
        newValidation[target.name] = pattern.test(value);
        
        this.setState({ validation: newValidation });
    }
    render() {
        
        let validation = {};
        if (!this.state.validation.name) {
            validation.name = "Only english characters"
        } else {
            validation.name = '';
        }
        if (!this.state.validation.email) {
            validation.email = 'Use only english characters, numbers, "@", "_", "."'
        } else {
            validation.email = '';
        }
        if (!this.state.validation.contactsMessage) {
            validation.contactsMessage = 'Message less than 20 characters'
        } else {
            validation.contactsMessage = '';
        }
        return(
        
        <section id = "contact">
		    <div className = "col-lg-12">
    		    <div className = "col-lg-6 contact-map">
    		        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1510.7734700700555!2d30.451709100169687!3d50.44467703902069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1495448101093"></iframe>
    		    </div>
    		    <div className = "col-lg-6 contact-about">
    		        <div className = "col-lg-8">
    		            <div className = "col-lg-6">
        		            <h1>Keep in Touch</h1>
        		            <hr className="section-heading-spacer"></hr>
                            <div className="clearfix"></div>
                        </div>
                    <div className = "contact-form">    
              	        <form onSubmit={this.submitForm}>
              	            <div className = "input-name">
                  	            <input type="text" className="form-control" placeholder="Name" id="name" name="name" onChange={this.validateField} />
                  	            <p className="help-block text-danger">{validation.name}</p>
              	            </div>
              	            <div className = "input-email">
              	                <input type="email" className="form-control" placeholder="Email" id="email" name="email" onChange={this.validateField}  />
              	                <p className="help-block text-danger">{validation.email}</p>
              	            </div>
              	            <div className = "message">
              	            	<textarea className ="form-control" placeholder="Message" id="message" name = "message" name="contactsMessage" onChange={this.validateField} ></textarea>
              	            	<p className="help-block text-danger">{validation.contactsMessage}</p>
              	            </div>
              	            <button type="submit" className="contact-form-btn">SEND REQUEST</button>
              	        </form> 
    	            </div>
        	         
                    </div>
    		    </div>
    		  </div>
		</section>
		
		)
    }
}

export default Contact;

