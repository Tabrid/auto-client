import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

const Signup = () => {
    const { signup } = useSignup();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const username = form.username.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const gender = form.gender.value;
                    const input = {
                        fullName,
                        username,
                        password,
                        confirmPassword,
                        gender
                    };
                    await signup(input);
                    try {
                        await fetch('https://auto-server-production-a245.up.railway.app/post-to-google-sheet', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(input)
                        });
                        alert('Data successfully submitted!');
                        // Optionally, clear the form fields
                        event.preventDefault();
                      } catch (error) {
                        console.error('Error submitting data:', error);
                        alert('An error occurred while submitting data');
                      }
           
    };
    return (
        <div className="flex justify-center bg-slate-200">
            <div className="card w-1/2 bg-white shadow-2xl my-10">
                <div className="card-body items-center text-center">
                    <h1 className="text-2xl font-bold ">SIGNUP</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="input mt-10 input-bordered w-full max-w-xs"
                            required
                        />
                        <br/>
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            className="input mt-5 input-bordered w-full max-w-xs"
                            required
                        />
                        <br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Type Password"
                            className="input mt-5 input-bordered w-full max-w-xs"
                            required
                        />
                        <br/>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="input mt-5 input-bordered w-full max-w-xs"
                            required
                        />
                        <br/>
                        <select name="gender" className="select mt-5 select-bordered w-full max-w-xs">
                            <option disabled defaultValue>Gender</option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <br/>
                        <input className="btn mt-10 w-full max-w-xs bg-slate-200" type="submit" value="SignUp" />
                    </form>

                    <h1 className=" mt-10">
                        Already have an account?{" "}
                        <Link className="underline underline-offset-1" to="/login">
                            logIn
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Signup;
