const UpcomProd = (props) => {
    return (
    <div className="upcomProd px-2">
        {props.upcomProds.map((curr, index) => 
        <div>
            <img src={curr.productImage} alt="" className="rounded-lg w-[100%]"/>
        </div>
        )}
    </div>
    )
}

export default UpcomProd;