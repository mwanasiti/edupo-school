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
          <footer className="bg-light text-center text-lg-start">
 
            <div className="container p-4">
              
              <div className="row">
                
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Footer text</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                  </p>
                </div>
                

                
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Footer text</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                  </p>
                </div>
                
              </div>
            
            </div>
            

            
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
              © 2020 Copyright:
              <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
 
</footer>
          </div>

      </div>

    </div>
  )
}

export default Home