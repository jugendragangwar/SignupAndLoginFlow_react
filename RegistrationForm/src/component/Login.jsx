import React from 'react'

const Login = () => {
  return (
    <div className='signup-container'>
    <form className='signup-form'>
        <h2>Sign Up</h2>
        <label htmlFor="email">
            Email:
            <input type="text" />
        </label>
        <label htmlFor="password">
            Password:
            <input type="Password" />
        </label>
        <button>Sign Up</button>
        <br />
        <p>Already Registerd?<a>Login</a></p>
    </form>

</div>
  )
}

export default Login
