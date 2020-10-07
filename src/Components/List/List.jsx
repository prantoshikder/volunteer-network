import React, { useState } from 'react';
import image from '../../Image/images/extraVolunteer.png';

const List = (props) => {
    const {_id, title, checkIn} = props.listItem;
    const handleDelete = props.handleDelete;

    const deleteListItem = (id) =>{
        fetch(`https://polar-citadel-33954.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            handleDelete();
            console.log("deleted successfully");
        })
    }

    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{maxWidth:"600px", marginTop:"40px", borderRadius:"15px", boxShadow:"5px 5px 10px gray"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img ml-2" height="155px" width="600px" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{(new Date(checkIn).toDateString('dd/MM/yyyy'))}</p>
                            <button onClick={() => deleteListItem(_id)} className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default List;