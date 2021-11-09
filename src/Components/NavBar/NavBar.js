import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
//import { useStateValue } from "../StateProvider";
//import { auth } from "../firebase";
//import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
    paddingBottom: "3rem",
    backgroundColor: "#7fc9a4",
  },
  appBar: {
    backgroundColor: "#7fc9a4",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing,
    padding: "1rem",
  },
  image: {
    marginRight: "10px",
    borderRadius: "5px",
  },
}));

/* export default function NavBar (){
    const classes = useStyles()
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory()

    const handleAuth =()=>{
        if (user){
            auth.signOut()
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            history.push("/")
        }
    };

    return(
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <ToolBar>
                    <Link to="/">
                        <IconButton>
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        </IconButton>
                    </Link>
                    <div className={classes.grow}/>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Hola {user ? user.email : "Guest"}
                    </Typography>
                    <div className={classes.button}>
                        <Link to={!user && "/signin"}>
                            <Button onClick={handleAuth} variant="outlined">
                                <strong>{user ? "sign Out" : "Sign In"}</strong>
                            </Button>
                        </Link>

                        <Link to="/checkout-page">
                            <IconButton aria-label="show cart items" color="inherit">
                                <Badge badgeContent={basket?.length} color="secondary">
                                    <ShoppingCart frontSize="large" color="primary"/>
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    )*/

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <ToolBar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <img
                src={logo}
                alt="Commerce.js"
                height="80px"
                className={classes.image}
              />
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Hola User
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
              <strong>Iniciar Sesion</strong>
            </Button>
            <Link to="/carrito">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default NavBar;
