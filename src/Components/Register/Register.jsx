import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../Image/logos/Group 1329.png';
import './Register.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {title} = useParams();

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    }); 

    const handleCheckInDate =(date) => {
        const newDate = {...selectedDate}
        newDate.checkIn = date;
        setSelectedDate(newDate);
    }

    const handleSubmit = () =>{
        const newBooking = {...loggedInUser, ...selectedDate, title};
        fetch('https://polar-citadel-33954.herokuapp.com/addList', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="registerPart">
            <div className="container">
                <div className="top-logo">
                    <img className="logo" src={logo} alt=""/>
                </div>
                <div className="register">
                    <h3>Register as a Volunteer</h3>
                    <form>
                        <input type="text" name="Name" value={loggedInUser.name} required/>
                        <input type="text" name="email" value={loggedInUser.email} required/>  
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                format="dd/MM/yyyy"
                                value={selectedDate.checkIn}
                                onChange={handleCheckInDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>   
                        <input type="text" name="description" placeholder="Description" required/>                    
                        <input type="text" name="description" value={title} required/>                    
                    </form>
                    <Link to="/list">
                        <button onClick={handleSubmit} style={{width:'22rem',textAlign:'center'}} className="btn btn-primary font-weight-bold btn-lg">Registration</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default Register;