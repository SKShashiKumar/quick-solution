import React from 'react'
import './HowDoesItWork.scss'

const HowDoesCards = ({imgClass, Heading, Desc}) => {
  return (
    <div className="HowDoesCards">
        <div className="container-fluid justify-content-center align-items-center">
            <div className="row">
                <div className="col-12">
                <i class={imgClass}></i>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>{Heading}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{Desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowDoesCards
