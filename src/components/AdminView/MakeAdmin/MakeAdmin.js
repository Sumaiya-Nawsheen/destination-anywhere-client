import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
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
                <h1>Make Admin</h1> 
                </div>

            </div>
      </section>
    );
};

export default MakeAdmin;