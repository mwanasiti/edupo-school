import React from "react";

function Footer() {
  return (
    <div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">ABOUT US</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">OUR MOTTO</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div style={{marginTop:'-50px'}} className="col">
          <div className="card h-100">
            
            <div className="card-body">
              <h5 style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'25px', color:'#000080'}} className="card-title">CONTACT US</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
