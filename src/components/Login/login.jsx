// This is the login page created for the user to login

function Login(){
return <div>
  <h2>Welcome to NoteBit</h2>
  <form  href = "Notebit.html">
    <p>
    <input type="text" id="username" name="username" required> 
    {/* Taking the username */}
    <span></span>
    </input>
    </p>
    <p>

    <input type="text" id="password" name="password"required><span></span>

    {/* Taking the password */}

    </input></p>
    
    <p>
    <button type="submit" id="login" name="submit" value="Login" onclick = "validate()">Login</button>
    </p>
    
    <br>
    </br>
  </form>
  
  </div>}

// Exporting Login function to app component

export default Login