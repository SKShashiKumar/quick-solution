import React from 'react'
import FAQ from './FAQ'
import './Collapsetab.scss'

const Collapsetab = () => {
  return (
    <div className="Collapsetab">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center mainHeading">
                <div className="col-10">
                    <h2>We partner with the world's leading universities</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 MainFAQ">
                    <FAQ/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center RightContents">
                    <div className="row">
                        <div className="col-10 PJ">
                            <img src="images/PJ.jpeg" alt="PJ" />
                        </div>
                        <div className="col-10 Descr">
                            <p>Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus et netus et malesuada fames. Sem fringilla ut morbi tincidunt augue interdum velit.</p>
                        </div>
                        <div className="col-10 ContactUsBtn">
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collapsetab