import { useAuth } from "../contexts/AuthContext";

export default function(){

    const { login } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        login();
    }

    return(<>
        <form onSubmit={handleLogin}>
        <label> Email </label>
            <input 
                type="text"
                placeholder="Email" 
            />
            <label> Password </label>
            <input 
                type="password"
                placeholder="Password" 
            />
            <button>Login</button>
        </form>
    </>)

}