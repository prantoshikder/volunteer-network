import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import Header from '../Header/Header';
import VolunteerTeam from '../VolunteerTeam/VolunteerTeam';
import './Home.css';

const Home = () => {
    const [volunteer, setVolunteer] = useState(FakeData);
    return (
        <div className="homePart">
            <div className="bg-banner">
                <div className="bg-overlay">
                    <Header></Header>
                    <div className="container">
                        <div className="bg-content">
                            <h1 className=" text-center">I GROW BY HELPING PEOPLE IN NEED.</h1>
                            <form action="">
                                <input className="form-control" type="search" placeholder="Search..." style={{width:'350px'}} aria-label="Search" />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="volunteer-list" style={{marginTop:"-180px"}}>
                <div className="container">
                    <div className="row">
                        {
                        volunteer.map(volunteer => <VolunteerTeam volunteer={volunteer}></VolunteerTeam>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;