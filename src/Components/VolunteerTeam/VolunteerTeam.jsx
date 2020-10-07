import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerTeam.css'

const VolunteerTeam = (props) => {
    const {image, title} = props.volunteer;
    return (
        <div className="col-md-3">
                <Link to={`/register/${title}`}>
                    <div className="card" style={{width: "17rem", margin: "5px", borderRadius: "20px"}}>
                        <img src={image} className="card-img-top w-100" width="100px" height="200px" alt=""/>
                        <div className="card-body">
                            <h3 className="card-text text-center font-weight-bold">{title}</h3>
                        </div>
                    </div>
                </Link>
        </div>
    );
};

export default VolunteerTeam;