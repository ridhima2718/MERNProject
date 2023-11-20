import { Grid, Typography } from "@material-ui/core";
import Untitled from './Untitled.png';


const Welcome = (props) => {
  return (
    <Grid
      container
      item
      style={{minHeight: "93vh" }}
    >
      <Grid item>
      <img
      src={Untitled}
      style={{position:"absolute",
         maxWidth: "100%" }}
    />
      </Grid>
      <Grid item style={{color:"#f7f7f0", margin:"auto"}}>
        <Typography style={{position:"relative", textAlign:"center",fontSize:"40px",fontFamily:"garamond",fontWeight:"lighter",paddingBottom:"100px",letterSpacing:"6px"}}>Welcome to</Typography>
        <Typography style={{position:"relative",fontSize:"170px",fontFamily:"Helvetica-Oblique",letterSpacing:"20px"}}>JobScapes</Typography>
      </Grid>
      
    </Grid>
    
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
