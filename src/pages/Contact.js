import React, {useForm} from 'react';
import { Label, Button } from 'reactstrap';

// const required = val => val && val.length;
// const maxLength = len => val => !val || (val.length <= len);
// const minLength = len => val => val && (val.length >= len);
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Contact = () => {
    const handleSubmit = useForm;
    const onSubmit = (d) =>
    alert(JSON.stringify(d));

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
            First Name:
            <input name="firstName" />  
        </Label>
        <Label>
            Last Name:
            <input name="lastName" />  
        </Label>
        <Label>
            Email:
            <input name="Email" />  
        </Label>
        <textarea>
            Feedback:
            <input name="Feedback" /> 
        </textarea>
        <Button type="submit" color="primary">
            Submit
        </Button>
    </form>
);
}
// class Contact extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             firstName: '',
//             lastName: '',
//             phoneNum: '',
//             email: '',
//             agree: false,
//             feedback: '',
//             touched: {
//                 firstName: false,
//                 lastName: false,
//                 phoneNum: false,
//                 email: false
//             }
//         };

      
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     handleSubmit(values) {
//         this.props.resetFeedbackForm(); this.props.postFeedback(values);
//     }
// render() {
 
    
//     return (
//                     <div>
//                     <Breadcrumb>
//                             <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                             <BreadcrumbItem active>Contact Us</BreadcrumbItem>
//                         </Breadcrumb>
//                         <h2>Contact Us</h2>
//                         <hr />
//                         <h2>Send us your Feedback</h2>
//                         <hr />
          
//                     <div>
//                     <Form model="feedbackForm" onSubmit={values => this.handleSubmit(values)}>  
//                                 <Label htmlFor="firstName" md={2}>First Name</Label>
//                                 <Control.text model=".firstName" id="firstName" name="firstName"
//                                         placeholder="First Name"
//                                         className="form-control"
//                                         validators={{
//                                             required, 
//                                             minLength: minLength(2),
//                                             maxLength: maxLength(15)
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".firstName"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                     />
//                                 <Label htmlFor="lastName" md={2}>Last Name</Label>
//                                     <Control.text model=".lastName" id="lastName" name="lastName"
//                                         placeholder="Last Name"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             minLength: minLength(2),
//                                             maxLength: maxLength(15)
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".lastName"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                     />
//                                 <Label htmlFor="email" md={2}>Email</Label>
//                                     <Control.text model=".email" id="email" name="email"
//                                         placeholder="Email"
//                                         className="form-control"
//                                         validators={{
//                                             required,
//                                             validEmail
//                                         }}
//                                     />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".email"
//                                         show="touched"
//                                         component="div"
//                                         messages={{
//                                             required: 'Required',
//                                             validEmail: 'Invalid email address'
//                                         }}
//                                     />
//                                     <div className="form-check">
//                                         <Label check>
//                                             <Control.checkbox
//                                                 model=".agree"
//                                                 name="agree"
//                                                 className="form-check-input"
//                                             /> {' '}
//                                             <strong>May we contact you?</strong>
//                                         </Label>
//                                     </div>
//                                     <Control.select model=".contactType" name="contactType"
//                                         className="form-control">
//                                         <option>By Phone</option>
//                                         <option>By Email</option>
//                                     </Control.select>
//                                 <Label htmlFor="feedback" md={2}>Your Feedback</Label>
//                                     <Control.textarea model=".feedback" id="feedback" name="feedback"
//                                         className="form-control"
//                                     />
//                                     <Button type="submit" color="primary">
//                                         Send Feedback
//                                     </Button>
//                         </Form>
//                     </div>
//                 </div>
//         );
// }
// }
export default Contact;