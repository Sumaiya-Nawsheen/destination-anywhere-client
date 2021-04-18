import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height:"100%"
}
const DashBoard = () => {
    return (

      <section>
        <div style={containerStyle} className="container-fluid row">
                <div className="col-md-4 col-xs-6">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 col-xs-6 d-flex justify-content-center" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              
                </div>
                {/* <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div> */}
            </div>
      </section>
    
    

    );
};

export default DashBoard;