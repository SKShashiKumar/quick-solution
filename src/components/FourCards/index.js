import React from 'react'
import Cards from './Cards'
import './FourCards.scss'

const FourCards = () => {
  return (
    <div className="FourCards">
        <div className="container-fluid ">
            <div className="row justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 MainBlock">
                    <div className="container-fluid g-5">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <Cards imgURL={"fa-solid fa-mobile-screen-button"} Heading={"UNLIMITED"} Desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <Cards imgURL={"fa-solid fa-star"} Heading={"UNLIMITED"} Desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <Cards imgURL={"fa-solid fa-gear"} Heading={"UNLIMITED"} Desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <Cards imgURL={"fa-solid fa-user"} Heading={"UNLIMITED"} Desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices."}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourCards