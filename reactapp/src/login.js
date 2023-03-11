import './css/login.css';

function Login(){
    return<>
        <div className="mainlogin">
            <div className="login">
                <form className="loginform" >
                    <h1 className="loginhead">login</h1> <br/><br/>
                    <p>username <input type="text"/></p><br/>
                    <p>password <input type="password"/></p><br/>
                    <a href="home.html"><button type="submit">submit</button></a><br/>
                    <p>don't have an acccount?</p>
                    <a href="signup.html">signup</a>
                </form>
            </div>
       </div>
    
       
        </>
}

export default Login;