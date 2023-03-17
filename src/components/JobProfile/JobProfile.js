import { data } from './data'
const JobProfile = () => {

    return <div className="flex items-center mt-[30px] px-[30px] py-[20px] bg-[#3c3887] m-h-[400px] rounded-[20px]">

        <ul className="flex flex-col gap-y-[50px]">
            {
                data.map(item => {
                    return <li key={item.id} className="flex">
                        <div className ="mr-[15px]">
                            <img src={item.image} alt ="" />
                        </div>
                        <div>
                            <h3 className ="text-[#fff]">{item.title}</h3>
                            <p className ="text-[#a9a7d1] font-light">{item.describe}</p>

                        </div>
                    </li>
                })
            }
        </ul>
    </div>
}

export default JobProfile