import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from 'yup';


const initialValues =  {
    firstName:'',
    lastName: '',
    email:'',
    password:'',
    comments : '',
    address: '',
    social : {
      facebook : "",
      twitter : ''
    },
    phoneNumbers:['','']
}
const onSubmit = values =>{
       console.log(values)
}
const validate = values =>{
    let errors = {};
    if(values.firstName == ''){
        errors.firstName = "This field is required."
   }
   if(values.lastName == ''){
    errors.lastName = "This field is required."

   }
   if(values.email == ""){
    errors.email = "This field is required."
   }
   if(values.password == ''){
      errors.password = "This field is required."
   }
   return errors;
}
const validationSchema = Yup.object({
    firstName: Yup.string().required('This is really required'),
    lastName:  Yup.string().required('This is really required'),
    email: Yup.string().required('This is really required'),
    password: Yup.string().required('This is really required'),
    comments: Yup.string().required('This is really required'),
    address: Yup.string().required('This is really required'),
    // social: Yup.string().required('This is really required'),
    // phoneNumbers: Yup.string().required('This is really required')

    
})


const Formiked = () => {


    return (
        <>
        <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        className="form">
      <Form >
        <img src="vite.svg" alt="" /> <br />
         <label>First Name:</label> <br />
         <Field
         type="text" 
         name="firstName" 
         placeholder = "First Name"
           /> <br />
          <ErrorMessage name="firstName"> 
          {(errorMsg)=>{
            return <div className="error">{errorMsg}</div>
          }}
          </ErrorMessage><br />
         <label>Last Name:</label> <br />
         <Field type="text"
          name="lastName"
              /> <br />
         <ErrorMessage  name="lastName">
         {(errorMsg)=>{
            return <div className="error">{errorMsg}</div>
          }}
          </ErrorMessage><br />
         <label>Email:</label> <br />
         <Field type="email"
          name="email"
             /><br />
         <ErrorMessage name="email">
         {(errorMsg)=>{
            return <div className="error">{errorMsg}</div>
          }}
          </ErrorMessage> <br />
         <label>Password:</label> <br />
         <Field type="text"
          name='password'
              /> <br />
          <ErrorMessage name="password">
          {(errorMsg)=>{
            return <div className="error">{errorMsg}</div>
          }}
            </ErrorMessage> <br />
          <label htmlFor="comments">Comments:</label>
          <Field as='textarea' name="comments" id="comments" /> <br />
          <ErrorMessage name="comments">
          {(errorMsg)=>{
            return <div className="error">{errorMsg}</div>
          }}
            </ErrorMessage> <br />
          <label htmlFor="address"></label>
          <Field name='address' id='address'>
            {
              ({ field,form,meta })=>{
                return(
                  <>
                   <div>
                    <input type="text" id="address"  {...field} />
                  </div>
                  <ErrorMessage name="address">
                  {(errorMsg)=>{
                    return <div className="error">{errorMsg}</div>
                  }}
                    </ErrorMessage> <br />
                  </>
                )
              }
            }
          </Field>
          <label>Facebook:</label> <br />
         <Field type="text"
          name='social.facebook'
              /> <br />

            <label>Twitter:</label> <br />
         <Field type="text"
          name='social.twitter'
              /> <br />
            <label>Primary Number:</label> <br />
         <Field type="text"
          name='phoneNumbers[0]'
              /> <br />
        
            <label>Secondary Number:</label> <br />
         <Field type="text"
          name='phoneNumbers[1]'
              /> <br />

         <button type="submit">Submit</button>
          </Form>
       </Formik>
        </>
      );
}
 
export default Formiked;