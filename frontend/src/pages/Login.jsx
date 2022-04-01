import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const Login = () => {

  const initialFormState = {
    email: "",
    password: ""
  }
  const [form, setForm ] = useState(initialFormState)
  // const [checkBox, setCheckBox] = useState(false)


  const handleChange = (e) => {
    setForm( {...form, [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
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
                    <h2>Sign  In</h2>
                    <p>Login to stay connected</p>

                    <form onSubmit={onSubmitHandler}>

                      <div className='row'>

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

                        <div className="col-lg-6">
                        <div className="custom-control custom-checkbox mb-3 text-left">
                          <input
                            type="checkbox"
                            className='custom-control-input'
                            id='customCheck1'
                          />
                          <label className='custom-control-label'>Remember me</label>
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className="text-primary float-right">Forgot Password?</div>
                      </div>

                      </div>
                      <button type='submit' className='btn btn-primary'>Sign In</button>
                      <p className='mt-3'>
                          Dont have an account? <Link to="/signup">Sign Up</Link>
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

export default Login