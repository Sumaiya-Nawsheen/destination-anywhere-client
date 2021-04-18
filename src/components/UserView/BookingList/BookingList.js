import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const BookingList = () => {

    const { value1, value2, value4 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [registeredUser, setRegisteredUser] = value2;
    const [orderedItem, setOrderedItem] = value4;

    return (

        <section>
        <div style={{
  backgroundColor: "#F4FDFB",
  height:"100%"
}} className="container-fluid row">
                <div className="col-md-4 col-xs-6">
                    <Sidebar/>
                </div>
                <div className="col-md-8 col-xs-6 d-flex justify-content-center" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h1>Booking List</h1>
                </div>

            </div>
      </section>
      
    );
};

export default BookingList;