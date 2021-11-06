import React from "react";
import { makeStyles } from "@mui/material";
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import { Typography } from "@mui/material/Typography";
import { IconButton } from "@mui/material/IconButton";
import logo from "../../assets/logo.png"
import {Badge, Button} from "@material-ui/core"
import { ShoppingCart } from "@mui/icons-material"; 
import { useStateValue } from "../StateProvider";
import {Link, useHistory} from "react-router-dom"
import {auth} from "../firebase"
import {actionTypes} from "../reducer"


const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "whitesmoke",
        bocShadow: "none"
    },
    grow:{
        flexGrow: 1,
    },
    button:{
        marginLeft: theme.spacing(2)
    },
    image:{
        marginRight: "10px"
    },
})),

const NavBar =()=>{
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
    )
}

export default NavBar;