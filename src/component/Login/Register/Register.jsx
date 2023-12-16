import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const { register, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        firebaseerr: '',
    });

    const hendleEmail = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: 'Please provide valid a email' })
            setUserInfo({ ...userInfo, email: '' })
        }
        else {
            setErrors({ ...errors, email: '' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }
    }

    const hendlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setErrors({ ...errors, password: 'Password must be 6 character' })
            setUserInfo({ ...userInfo, password: "" })
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setErrors({ ...errors, password: 'Password must be at least one upper case' })
            setUserInfo({ ...userInfo, password: "" })
        }
        else if (!/(?=.*[!#$@%&?"])/.test(password)) {
            setErrors({ ...errors, password: 'Password must be Special character' })
            setUserInfo({ ...userInfo, password: "" })
        }
        else {
            setErrors({ ...errors, password: '' });
            setUserInfo({ ...userInfo, password: e.target.value })
        }
    }


    const hendleSubmit = e => {
        e.preventDefault();
        const name = e.target.username.value;
        const photoUrl = e.target.photoUrl.value;
        register(userInfo.email, userInfo.password)
            .then(result => {
                const createdUser = result.user;
                hendleUpdateUser(name, photoUrl)
                console.log(createdUser);
                e.target.reset();
                toast('Success');
                navigate('/login')
            })
            .catch(err => {
                setErrors({ ...errors, firebaseerr: err.message })
                console.log(err);
            })
    }
    const hendleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(() => {
                // Profile updated!
                // ...
            }).catch((err) => {
                console.log(err);
                // An error occurred
                // ...
            });
    }
    return (
        <div className="md:w-1/2 lg:w-1/4 mx-auto py-12">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={hendleSubmit} noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-400">Username</label>
                        <input required type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-b-4 border-indigo-500 bg-gray-900 text-gray-100 focus:border-gray-700" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input required onChange={hendleEmail} type="text" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-b-4 border-indigo-500 bg-gray-900 text-gray-100 focus:border-gray-700" />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Photo URL</label>
                        <input type="text" name="photoUrl" id="photoUrl" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-b-4 border-indigo-500 bg-gray-900 text-gray-100 focus:border-gray-700" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input onChange={hendlePassword} required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md focus:border-gray-700 bg-gray-900 text-gray-100 border-b-4 border-indigo-500" />
                        {
                            errors.password && <p className="text-red-500">{errors.password}</p>
                        }
                        <div className="flex justify-end text-xs dark:text-gray-400 ">
                            <a className="underline" rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" className="block w-full p-3 mt-4 text-center rounded-sm text-gray-900 bg-violet-400">Sign Up</button>

                </form>
                {
                    errors.firebaseerr && <p className="text-red-500">{errors.firebaseerr}</p>
                }
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>

                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>

                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link rel="noopener noreferrer" to="/login" className="underline text-gray-100">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;