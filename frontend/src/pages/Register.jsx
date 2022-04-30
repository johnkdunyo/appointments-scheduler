import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUSer } from '../redux/reducers/userSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(state=>state.user.error);

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  const [ form, setForm] = useState(initialFormState);
  const [isCreatingAccount, setisCreatingAccount] = useState(false);

  const handleChange =(e) => {
    setForm( {...form,  [e.target.name]: e.target.value})
  };

  const onSubmitHandler = async(e) => {
    setisCreatingAccount(true)
    e.preventDefault()
    const response = await dispatch(signUpUSer(form)).unwrap()
    console.log(response)
    if(response.status === 200){
      console.log('okay');
      setisCreatingAccount(false);
      navigate('/home');
    }
    
  }
  return (
    <React.Fragment>
      <Loader />
      <div className='wrapper'>
        <section className='login-content'>
          <div className='container h-100'>
            <div className='row justify-content-center align-items-center height-self-center'>
              <div className='col-md-5 col-sm-12 col-12 align-self-center'>
                <div className="card">
                  <div className="card-body text-center">
                    <h2>Sign Up</h2>
                    <p>Create an account to stay connected</p>

                    <form onSubmit={onSubmitHandler}>

                      <div className='row'>

                      <div className='col-lg-6'>
                          <div className='floating-input form-group'>
                            <input
                              className='form-control'
                              type='text'
                              name='firstName'
                              id='firstName'
                              onChange={handleChange}
                              required
                             />
                             <label className='form-label'>First Name</label>
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='floating-input form-group'>
                            <input
                              className='form-control'
                              type='text'
                              name='lastName'
                              id='lastName'
                              onChange={handleChange}
                              required
                             />
                             <label className='form-label'>Last Name</label>
                          </div>
                        </div>

                        <div className='col-lg-12'>
                          <div className='floating-input form-group'>
                            <input
                              className='form-control'
                              type='text'
                              name='email'
                              id='email'
                              onChange={handleChange}
                              required
                             />
                             <label className='form-label'>Email</label>
                          </div>
                        </div>

                        <div className='col-lg-12'>
                          <div className='floating-input form-group'>
                            <input
                              className='form-control'
                              type='password'
                              name='password'
                              id='password'
                              onChange={handleChange}
                              required
                             />
                             <label className='form-label'>Password</label>
                          </div>
                        </div>

                        <div className='col-lg-12'>
                          <div className='floating-input form-group'>
                            <input
                              className='form-control'
                              type='password'
                              name='password2'
                              id='password2'
                              onChange={handleChange}
                              required
                             />
                             <label className='form-label'>Confirm Password</label>
                          </div>
                        </div>

                        { (form.password !== form.password2) && (
                          <div className='error-message mb-3'>
                            <p>Password doesn't match. Please check and type again</p>
                          </div>
                        )}

                        {error && (
                          <div className='error-message mb-3'>
                          <p>{error}</p>
                        </div>
                        )}


                 

                      </div>
                      <button type='submit' className='btn btn-primary'>{isCreatingAccount ? 'Creating account ...':'Create Account'}</button>
                      <p className='mt-3'>
                          Have an account already?  <Link to="/">Sign In</Link>
                      </p>

      
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </React.Fragment>
  )
}

export default Register