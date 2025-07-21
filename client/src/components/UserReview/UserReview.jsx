const UserReview = (props) => {
    return (
    <>
    {
        props.review.map((curr, index) => 
            <div key={index} className="flex flex-col gap-2 border-[3px] border-[#353a3e] rounded-xl py-2 px-4">
                <div className="flex gap-2">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src={curr.userProfile} alt="" className="w-[50px] h-[50px] rounded-full"/>
                    </div>
                    <div>
                        <h1 className="text-xl">{curr.userName}</h1>
                        <p className="text-slate-700">{curr.reviewDate}</p>
                    </div>
                </div>
                <div>
                    <p className="sm:text-[22px] ">{curr.userReview}</p>
                </div>
            </div>
        )
    }
    </>
    )
}

export default UserReview;