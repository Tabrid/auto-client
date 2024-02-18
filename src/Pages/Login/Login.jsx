import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";


const Login = () => {
    const {  login } = useLogin();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;
       
         await login(username, password );

    };
  return (
    <div className="flex justify-center items-center bg-slate-200 min-h-screen">
            <div className="card w-1/2 bg-white shadow-2xl">
                <div className="card-body items-center text-center">
                    <h1 className="text-2xl font-bold ">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            className="input mt-5 input-bordered w-full max-w-xs"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input mt-5 input-bordered w-full max-w-xs"
                            required
                        />
                       
                        <input className="btn mt-10 w-full max-w-xs bg-slate-200" type="submit" value="LogIn" />
                    </form>

                    <h1 className=" mt-10">
                       Don&apos;t have an account?{" "}
                        <Link className="underline underline-offset-1" to="/signup">
                            SignUp
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
  )
}

export default Login