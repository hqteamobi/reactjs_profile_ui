const Info = () => {
    return <div className="mt-[30px] flex flex-col items-center">

        <img src={require('../../assets/user.png')} alt="user image" />
        <h1 className="text-[30px] text-[#fff] mt-[10px] font-bold">Smith Tius</h1>
        <h4 className ="text-[#A9A7D1] font-light">Like to write code</h4>
        <span className ="mt-[10px] bg-[#fa31a3] p-[8px] rounded-[8px] text-[#fff] font-light text-[14px]">UI/UX Designer</span>
    </div>
}

export default Info