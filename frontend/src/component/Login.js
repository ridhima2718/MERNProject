import { useContext, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({

  body: {
    color:"#0D4008",
    fontFamily:"garamond",
    backgroundColor:"#f7f7f0",
    width:"500px",
    marginTop:"30px",
    marginBottom:"30px",
    borderRadius:"10px",
    margin:"auto",
  },
  inputBox: {
    width: "300px",
    borderColor:"#0D4008",
    fontFamily:"garamond",
  },
  submitButton: {
    width: "300px",
    fontFamily:"garamond",
    backgroundColor:"black",
    colour:"#f7f7f0",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
    <Grid style={{backgroundColor:"#0D4008",width:"100%"}}>
      <Grid item container direction="column" spacing={9} alignItems="center" className={classes.body}>
        <Grid item>
          <Typography style={{fontFamily:"garamond",fontSize:"55px"}}>
            Login
          </Typography>
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={loginDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={loginDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="grey"
            onClick={() => handleLogin()}
            className={classes.submitButton}
            
          ><Typography style={{color:"white",fontFamily:"garamond",}}>Login</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
