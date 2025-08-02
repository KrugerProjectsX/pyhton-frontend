import './Login.css'
import axios from "axios";
export const Login = () => {
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await axios.post('http://localhost:8000/auth/login', {
            email: email,
            password: password
        })
        if (response.status === 200) {
            console.log('Login successful', response);
            alert(response.data.message);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_logged', JSON.stringify(response.data.user));
            window.location.href = '/';
        } else {
            console.error('Login failed', response);
            alert(response.data.message);
        }

    }
    return (
        <div>
            <h1>Login Page</h1>
            <p>This is the login page.</p>
            <p>Please enter your credentials to log in.</p>
            <form onSubmit={e => handleLogin(e)}>
                <input type="email"  name={'email'} placeholder="Email"/>
                <input type="password" name={'password'} placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
        
    )
}
