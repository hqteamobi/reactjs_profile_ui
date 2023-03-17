import { MdArrowBackIosNew } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    return <div className="flex justify-between items-center">

        <div className="bg-[#4a4989] p-[10px] rounded-[100%]">
            <MdArrowBackIosNew color="#fff" size='14' />
        </div>
        <div>
            <AiOutlineMenu color="#fff" size='24' />
        </div>
    </div>
}

export default Header