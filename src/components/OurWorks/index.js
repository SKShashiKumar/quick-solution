import React from 'react'
import './OurWorks.scss'

const OurWorks = () => {
  return (
    <div className="OurWorks">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 subHeading">
                    <h6>OUR WORKS</h6>
                </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 Waves">
                    <img src="images/LongWaves.png" alt="" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 mainHeading">
                    <h2>Build Great Projects</h2>
                </div>
            </div>
            <div className="row ImagesRow row justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/Cub.jpg" alt="Cub" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/CardsFall.jpg" alt="Cub" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/Lion.jpg" alt="Cub" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/MinBadge.jpg" alt="Cub" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/NewYork.jpeg" alt="Cub" />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 g-5 Cub">
                            <img src="images/TemplateCard.jpg" alt="Cub" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 ContactUsBtn">
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurWorks