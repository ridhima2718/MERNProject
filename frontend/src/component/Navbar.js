import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily:"garamond",
    color:"#0D4008",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed">
      <Toolbar style={{fontFamily:"garamond",color:"#0D4008",backgroundColor:"#f7f7f0"}}>
        <Typography variant="h5" styles={{fontFamily:"garamond"}} className={classes.title}>
          JobScapes
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="#0D4008" onClick={() => handleClick("/home")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Home</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/addjob")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Add Jobs</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/myjobs")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>My Jobs</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/employees")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Employee</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/profile")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Profile</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/logout")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Logout</Typography>
              </Button>
            </>
          ) : (
            <>
              <Button color="#0D4008" onClick={() => handleClick("/home")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Home</Typography>
              </Button>
              <Button
                color="#0D4008"
                onClick={() => handleClick("/applications")}
              >
                <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Applications</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/profile")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Profile</Typography>
              </Button>
              <Button color="#0D4008" onClick={() => handleClick("/logout")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Logout</Typography>
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="#0D4008" onClick={() => handleClick("/login")}>
              <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Login</Typography>
            </Button>
            <Button color="#0D4008" onClick={() => handleClick("/signup")}>
            <Typography style={{fontFamily:"garamond",color:"#0D4008"}}>Signup</Typography>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
