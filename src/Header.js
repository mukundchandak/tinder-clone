import React from 'react';
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


export default function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon className="header-icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header-icon" fontSize="large" />
                </IconButton>
            )}
            
            <Link to="/">
                <img className="header-logo" src="./tinder-logo.png" alt="tinder-logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header-icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}
