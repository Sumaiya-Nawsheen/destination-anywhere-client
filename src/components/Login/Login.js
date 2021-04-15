import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Card, CardGroup, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import  './Login.css';
import { Col, Container, Row } from 'react-bootstrap';
import LoginPic from '../../images/login.jpg';


if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig); }

const Login = () => {
    const { value1, value2, value3 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;
    const [newUser, setNewUser] = value3; 

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/dashboard" } };


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (e) => {

        if (newUser && registeredUser.email && registeredUser.password) {
            firebase.auth().createUserWithEmailAndPassword(registeredUser.email, registeredUser.password)
                .then(res => {
                    const newUserInfo = { ...registeredUser };
                    const signedUser = {
                        name: registeredUser.name,
                        email: registeredUser.email,
                        password: registeredUser.password
                    };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setRegisteredUser(newUserInfo, signedUser);
                    console.log(registeredUser)
                    updateUserName(registeredUser.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...registeredUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setRegisteredUser(newUserInfo);
                });
        }

        if (!newUser && registeredUser.email && registeredUser.password) {
            firebase.auth().signInWithEmailAndPassword(registeredUser.email, registeredUser.password)
                .then(res => {
                    const newUserInfo = { ...registeredUser };
                    const signedUser = {
                        name: registeredUser.name,
                        email: registeredUser.email,
                        password: registeredUser.password
                    };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedIn = true;
                    setRegisteredUser(newUserInfo, signedUser);
                    history.replace(from);
                    console.log('sign in user info', registeredUser);
                })
                .catch(function (error) {
                    const newUserInfo = { ...registeredUser };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setRegisteredUser(newUserInfo);
                });
        }
    }


    const handleBlur = (event) => {
        console.log(event.target.value);
        const newUser = { ...registeredUser };
        newUser[event.target.name] = event.target.value;
        setRegisteredUser(newUser);
    }


    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            userName: name
        }).then(function () {
            console.log('user name updated successfully')
        }).catch(function (error) {
            console.log(error)
        });
    }


    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setLoggedInUser(signedUser)
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <NavBar/>


<CardGroup style={{marginTop:'50px'}}>
  <Card>
    <Card.Img variant="top" src={LoginPic}
    alt="" style={{width:'100%',height:'500px'}}/>
  </Card>
  <Card>
   
    <Card.Body>
    <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                <h3> {newUser ? 'Create an account' : 'Login'}</h3>

                {
                    newUser && <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <input placeholder="Name" type="text" onBlur={handleBlur} id="formBasicEmail" className="form-control" name="name" ref={register({ required: true })} />
                        {errors.name && <span style={{ color: 'red' }}>Name is required</span>}
                    </Form.Group>
                }

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <input placeholder="Enter email" onBlur={handleBlur} type="email" id="formBasicEmail" className="form-control" name="email" ref={register({ required: true })} />
                    {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <input placeholder="Password" onBlur={handleBlur} type="password" id="formBasicPassword1" className="form-control" name="password" ref={register({
                        required: true,
                        validate: {
                            minLength: (value) => value.length > 6,
                            maxLength: (value) => value.length < 16,
                            pattern: (value) => /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) === true
                        }
                    })} />
                    {errors.password?.type === "minLength" && <span style={{ color: 'red' }}>Password is required more than 6 characters</span>}
                    {errors.password?.type === "maxLength" && <span style={{ color: 'red' }}>Password is required less then 16 characters</span>}
                    {errors.password?.type === "pattern" && <span style={{ color: 'red' }}>Pattern doesn't match </span>}
                </Form.Group>

                {newUser && <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <input placeholder="Password" onBlur={handleBlur} type="password" id="formBasicPassword2" className="form-control" name="confirmPassword" ref={register({ required: true })} />
                    {errors.password?.type === "required" && <span style={{ color: 'red' }}>Password is required</span>}
                </Form.Group>
                }


                <input style={{ width: "100%", textAlign: "center" }} type="submit" value={newUser ? "Create an account" : 'Sign in'} />

                {/* <div><span> Haven't sign up yet? </span><Link to="/login">Login</Link></div> */}

                <div className="mt-3" style={{ textAlign: "center" }}>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
                <label htmlFor="newUser">Haven't sign up yet? Click on checkbox.</label>
            </div>

            </Form>


            <p style={{ color: 'red', textAlign: "center" }}>{registeredUser.error}</p>
            { registeredUser.success && <p style={{ color: 'green', textAlign: "center" }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}


            {/* google, facebook sign in */}
            <div className="mt-3" style={{ textAlign: "center" }}>
                <button onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} className="fa-google"/> Continue with Google</button>
             
            </div>
    </Card.Body>
  </Card>
</CardGroup>

</div>



      
    );
};

export default Login;