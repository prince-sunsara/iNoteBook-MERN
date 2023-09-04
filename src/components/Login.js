import React from 'react'

function Login() {
  return (
    <>
        <div className="container my-3">
                <h2>Login now...</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary" >login</button>
                </form>
            </div>
    </>
  )
}

export default Login    