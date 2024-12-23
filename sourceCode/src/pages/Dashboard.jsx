import BarChart from "../components/charts/BarChart"
import { useEffect, useState } from "react"
import Data from "../components/charts/Data"
import { UserData2 } from "../components/charts/Data"
import LineChart from "../components/charts/LineChart"
import DoughnutChart from "../components/charts/DoughnutChart"

function Dashboard() {

  const [cardValue, setCardValue] = useState({
    likes: 90,
    shares: 30,
    earnings: 50,
    rating: 4.5
  });

  useEffect(() => {

    let likes = 90
      , shares = 30
      , earnings = 50
      , ratings = 8.9;

    setInterval(() => {
      setCardValue({
        likes: ++likes,
        earnings: ++earnings,
        rating: 8.9,
        shares: ++shares,
      })
    }, 3000)

  }, [])

  const [userData, setUserData] = useState({
    labels: Data.map(data => data.year),
    datasets: [{
      label: "Orders",
      data: Data.map(data => data.subscribers),
      backgroundColor: ['orange'],
      pointRadius: 1,
      borderJoinStyle: 'bevel',
      tension: 0.3,
      text: '45'
    }, {
      label: "Confirms",
      data: UserData2.map(data => data.subscribers),
      backgroundColor: ['#001d3d'],
      pointRadius: 1,
      borderJoinStyle: 'bevel',
      tension: 0.3,
      text: '45'
    }
    ],
  })
  return (<div className="grid grid-cols-[0_1fr_0]">

    <div className=" col-start-2  col-end-3 grid grid-cols-12">

      <div className="col-start-1 hidden   md:col-end-5  lg:col-end-4 h-screen bg-[#001d3d] 
            md:flex flex-col items-center
            ">
        <div className="w-[180px]">
          <img src="/img2.png" alt="" />
        </div>

        <div>
          <div className="text-white text-center text-2xl font-[700]">Group1</div>
          <div className="text-white text-center text-[12px] ">Z.A Islamiya Collage of Technology & Management</div>
        </div>
        <div className="mt-9 w-[90%]">
          <List label={"Home"} className={"fa-solid fa-house"} />
          <List label={"File"} className={"fa-solid fa-folder"} />
          <List label={"Message"} className={"fa-solid fa-envelope"} />
          <List label={"Notification"} className={"fa-solid fa-bell"} />
          <List label={"Location"} className={"fa-solid fa-location"} />
          <List label={"Graph"} className={"fa-solid fa-chart-pie"} />
        </div>

      </div>

      <div className=" col-start-1 md:col-start-5 lg:col-start-4 col-end-13 ">

        <div className="flex justify-between w-[90%] m-auto py-5 font-[500]">
          <div className="md:text-4xl">Dashboard User</div>
          {/* <div><i className=" md:text-4xl fa-solid fa-bars"></i></div> */}
        </div>

        <div className="Mainboard grid 
                    sm:grid-rows-[max-content_max-content_max-content]  md:gap-x-10 xl:gap-x-10 gap-y-10  sm:gap-y-10 px-6 gap-5
                    sm:grid-cols-2 sm:gap-8
                    xl:grid-cols-4
                    ">

          <DashBox label="Earnings" symbol="💲" value={cardValue.earnings} dark={true} />
          <DashBox label="Share" symbol="🔥" value={cardValue.shares} />
          <DashBox label="Likes" symbol="👍" value={cardValue.likes} />
          <DashBox label="Rating" symbol="⭐️" value={cardValue.rating} />

          <div className="sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4
                        xl:row-start-2 xl:row-end-3
                        xl:col-start-1 xl:col-end-4
                        shadow-[5px_5px_40px_rgba(0,0,0,.3)] p-5
                        ">
            <BarChart userData={userData} />
          </div>
          <div className="line sm:col-start-1 sm:col-end-3 sm:row-start-4 sm:row-end-5
                        xl:row-start-3 xl:row-end-4
                        xl:col-start-1 xl:col-end-4
                        shadow-[5px_5px_40px_rgba(0,0,0,.3)] p-5
                        ">
            <LineChart userData={userData} />
          </div>
          <div className="dougnut sm:col-start-1 sm:col-end-3 sm:row-start-5 sm:row-end-6
                        xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-4
                        shadow-[5px_5px_40px_rgba(0,0,0,.3)] p-5
                        ">
            <DoughnutChart userData={userData} />
            <div className="grid gap-2 w-[90%] m-auto mt-5">
              {/* <div className="py-2 px-3 border border-b-gray-200">Sunil Kumar</div> */}
              <div className="py-2 px-1">
                This dashboard displays key user metrics, including $900 in earnings, 3432 likes, 632 shares, and a rating of 232. The bar chart shows a growth trend in orders and confirmations from 2017 to 2021.</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>)
}

export default Dashboard


function DashBox({ label, symbol, value, dark }) {
  return <>

    <div className={` ${dark ? 'bg-sky-900 text-white' : ''} p-4
        shadow-[10px_10px_20px_rgba(0,0,0,.2)]
        `}>

      <div className="flex justify-between">
        <span className="font-bold text-xl ">{label}</span>
        <span className="font-bold text-4xl">{symbol}</span>
      </div>
      <div className="box text-[70px]">{value}</div>
    </div>

  </>
}
function List({ label, className, button }) {
  return <>

    <div className="p-4  justify-self-start hover:cursor-pointer">
      <i className={`text-xl text-white ${className}`}></i>
      <span className="mx-4 text-[18px] text-white">{label}</span>
    </div>
  </>
}
