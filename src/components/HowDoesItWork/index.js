import React from 'react'
import HowDoesCards from './HowDoesCards'

const HowDoesItWork = () => {
  return (
    <div className="HowDoesItWork">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 HeadingRow">
                    <h1>How does it work</h1>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 SubHeadingRow">
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <HowDoesCards imgClass={"fa-solid fa-mobile-screen-button"} Heading={'STEP 1'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 Men">
                    <img src="images/Men.jpg" alt="Men" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <HowDoesCards imgClass={"fa-solid fa-user"} Heading={'STEP 1'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 Men">
                    <img src="images/Men.jpg" alt="Men" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <HowDoesCards imgClass={"fa-solid fa-list-check"} Heading={'STEP 1'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowDoesItWork