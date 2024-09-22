import './login.css'
import {useState} from "react";
import {toast} from "react-toastify";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../lib/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload.js";

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    })

    const [loading, setLoading] = useState(false);

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        const {email, password} = Object.fromEntries(formData);


        try {
            await signInWithEmailAndPassword (auth, email, password);
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        } finally {
            setLoading(false);
        }

    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const imgUrl = await upload(avatar.file);

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success("Account created! You can login now!");
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin} action="">
                    <input name={"email"} placeholder={"Email"} type="text"/>
                    <input name={"password"} placeholder={"Password"} type="password"/>
                    <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "../../../../public/avatar.png"} alt=""/>
                        Upload image
                    </label>
                    <input
                        onChange={handleAvatar}
                        id={"file"}
                        type="file"
                        style={{ display: 'none' }}
                    />
                    <input name={"username"} placeholder={"Username"} type="text"/>
                    <input name={"email"} placeholder={"Email"} type="email"/>
                    <input name={"password"} placeholder={"Password"} type="password"/>
                    <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login