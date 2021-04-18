import React from 'react';

import BookingShortList from '../BookingShortList/BookingShortList';

const BookingsByEmail = ({ bookings }) => {
   
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                bookings.length ?
                 <BookingShortList bookings={bookings} ></BookingShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default BookingsByEmail;