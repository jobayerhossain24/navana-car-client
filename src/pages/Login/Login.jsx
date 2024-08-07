import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
// import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  // const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(location?.state ? location?.state : "/");
      })

      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-xl"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctors
              <Link
                className="text-orange-600 font-bold text-xl ml-2"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
            <p className="my-4 text-center ">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-warning btn-wide text-green-600 text-xl"
              >
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
