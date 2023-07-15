import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
        return (
                <div className="md:max-w-[440px] text-xs max-w-[100px] flex items-center justify-between w-full h-[38px] border-solid border-[1px] rounded-[92px] pl-3">
                        <input type="text" className="focus-input-none border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-xs h-full focus:outline-none focus:border-[transparent] flex items-center placeholder-gray-600" placeholder='Tìm kiếm sản phẩm' />
                        <span className="w-[1px] h-[60%] border-[1px]"></span>
                        <AiOutlineSearch fontSize={21} className="w-[38px] text-[#ccc] cursor-pointer text-2xl" />
                </div>
        )
}

export default Search
