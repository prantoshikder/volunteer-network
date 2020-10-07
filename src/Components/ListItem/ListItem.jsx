import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Image/logos/Group 1329.png'
import List from '../List/List';

const ListItem = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [listItem, setListItem] = useState([]);
    const [deleteList, setDeleteList] = useState(false);

    useEffect(() =>{
        fetch('https://polar-citadel-33954.herokuapp.com/listItem')
        .then(res => res.json())
        .then(data => setListItem(data))
    }, [deleteList])
    const handleDelete = () => {
        setDeleteList(!deleteList)
    }
    return (
        <div className="volunteerList">
            <div className="container">
                <div className="top-menubar">
                    <nav className="navbar navbar-expand-lg">
                        <Link to="/home">
                            <a className="navbar-brand" href="#"><img src={logo} height="45px" alt=""/></a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Donation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <Link to="/login">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Login</a>
                                    </li>
                                </Link>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">{loggedInUser.name}</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <hr/>
                </div>
                <div className="list">
                    <div className="row">
                        {
                            listItem.map(listItem => <List handleDelete={handleDelete} key={listItem._id} listItem={listItem}></List>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;