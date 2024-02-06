

const Exp =()=>{
    return(
        <><h1 className="text-3xl font-bold underline p-2 m-2">Experience</h1>
        <div className="flex">
            {/* Junior financial analyst - State Street Syntel - 2016 - 2017
            Financial analyst - Eclerx - 2017 -2019
            Research Associate - ASP Global Works - 2019- 2020
            Freelancing - Freelancing - 2021  */}
            
            <div className="w-3/12 shadow-xl m-2 p-4 rounded-lg text-center hover:bg-slate-100 hover:shadow-xl">
                <img className="w-52 h-40" src="syntel.jpg"/><br/>
                <h1 className="font-bold">State Street Syntel</h1>
                <h3>Junior Financial Analyst</h3>
                <h6 className="text-gray-600 text-xs">2016 June - 2017 Oct</h6><br/>
            </div>

            <div className="w-3/12 shadow-xl m-2 p-4 rounded-lg text-center hover:bg-slate-100 hover:shadow-xl">
            <img className="w-52 h-40" src="exlerx.jpg"/><br/>
                <h1 className="font-bold">Eclerx</h1>
                <h3 >Financial Analyst</h3>
                <h6 className="text-gray-600 text-xs">2017 July - 2019 May</h6><br/>
            </div>

            <div className="w-3/12 shadow-xl m-2 p-4 rounded-lg text-center hover:bg-slate-100 hover:shadow-xl">
            <img className="w-52 h-40" src="asp.png"/><br/>
                <h1 className="font-bold">ASP Global Works</h1>
                <h3>Research Analyst (React.js Developer) </h3>
                <h6 className="text-gray-600 text-xs">2019 August - 2020 Feb</h6><br/>
            </div>

            <div className="w-3/12 shadow-xl m-2 p-4 rounded-lg text-center hover:bg-slate-100 hover:shadow-xl">
            <img className="w-52 h-40" src="freelancer.jpg"/><br/>
                <h1 className="font-bold">Freelancing</h1>
                <h3>Taking Gigs</h3>
                <h6 className="text-gray-600 text-xs">2021</h6><br/>
            </div>
        </div>
        </>
    )
}

export default Exp;