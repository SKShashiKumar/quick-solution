const Cards = ({imgURL, Heading, Desc}) => {
  return (
    <div className="Cards">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-6 col-sm-4 col-4 imgCol">
                    <i className={imgURL}></i>
                </div>
                <div className="col-xs-6 col-sm-8 col-8">
                    <h6>{Heading}</h6>
                    <p>{Desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards