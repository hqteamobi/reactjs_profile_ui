import { data } from './data'
const SocialMedia = () => {
    return <div className="mt-[20px]">
        <ul className="flex justify-between">

            {
                data.map(item => { 
                    return <li key ={item.id} className ="text-center">
                        <h3 className ="text-[#fff] font-bold">{item.name}</h3>
                        <h5 className ="text-[#A9A7D1]">{item.member}</h5>
                    </li>
                })
            }
        </ul>
    </div>
}

export default SocialMedia