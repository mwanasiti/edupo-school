import React from 'react'

function Home() {
  return (
    <div className='container'>
      <div className='row'>
     
          <div
            className="bg-image hover-overlay ripple"
            style={{backgroundImage: "url('https://www.economist.com/sites/default/files/images/2019/01/articles/main/20190105_usp502.jpg')", 
            height: '100vh'}}>
          <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <h1 className="text-white mb-0" style={{fontWeight:'bold', fontFamily:'cursive', fontSize:'70px'}}>OUR MANAGEMENT SYSTEM</h1>
              </div>
            </div>
          </div>
          <div>
          
          </div>

      </div>

    </div>
  )
}

export default Home