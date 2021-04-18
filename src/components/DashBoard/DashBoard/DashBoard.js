import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingsByEmail from '../../BookingsByEmail/BookingsByEmail';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const DashBoard = () => {
  const { value1, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value1;
  const [registeredUser, setRegisteredUser] = value2;
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/bookingsByEmail', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-4 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
               
                <div className="col-md-8 col-sm-12 col-12">
                    <BookingsByEmail bookings={bookings}></BookingsByEmail>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;