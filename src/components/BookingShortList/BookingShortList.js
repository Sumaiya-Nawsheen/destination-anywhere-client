import React from 'react';

const BookingShortList = ({bookings}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                  bookings.map((bookings, index) => 
                        
                    <tr>
                        <td>{bookings.name}</td>
                        <td>{bookings.phone}</td>
                        <td>{bookings.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingShortList;