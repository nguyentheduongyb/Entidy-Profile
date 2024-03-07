'use client'
import axios from 'axios';
import React, { useRef, useState } from 'react'

const Love = () => {
        const [position, setPosition] = useState({ x: 200, y: 535 });
        const [positionTrue, setPositionTrue] = useState({ x: 80, y: 535 });
        const [quantity, setQuantity] = useState(0)
        const [agree, setAgree] = useState(false)
        const handleAgree = () => {
                axios.post('https://sheetdb.io/api/v1/j85jh39itpinw', {
                        quantity
                })
                        .then(function (response) {
                                console.log(response);
                        })
                        .catch(function (error) {
                                console.log(error);
                        });

                setAgree(true)
        }
        const handleDeny = () => {
                setQuantity(quantity + 1)
                const newX = Math.random() * window.innerWidth;
                const newY = Math.random() * window.innerHeight;
                setPosition({ x: newX, y: newY });
        }
        return (
                <div className="w-full h-screen relative">
                        {agree === true ? (<div className="h-full flex flex-col items-center justify-center">{quantity > 0 && <h1 className="text-3xl text-center font-bold text-blue-500">Cảm on cậu đã đồng ý sau {quantity} từ chối</h1>}<img src="1.gif" alt="" /><h1 className="text-4xl text-center font-bold text-[#F70707]">Tôi yêu em Tôi sẽ quan tâm và chăm sóc cho e</h1></div>) : (<div className="h-full flex flex-col items-center justify-center gap-12">
                                <h1 className="text-4xl text-center font-bold text-[#F70707]">Cho tớ 1 danh phận để quan tâm và chăm sóc cậu được không?</h1>
                                <img src="6.gif" alt="" />
                                <div className="flex gap-8">
                                        <button onClick={handleAgree} style={{
                                                position: 'absolute',
                                                left: positionTrue.x + 'px',
                                                top: positionTrue.y + 'px',
                                                cursor: 'pointer',
                                        }} className={`absolute  px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-white `}>Tớ đồng ý</button>
                                        <button id="deny" onClick={handleDeny} style={{
                                                position: 'absolute',
                                                left: position.x + 'px',
                                                top: position.y + 'px',
                                                cursor: 'pointer',
                                        }} className={`px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-white `}>Khum</button>
                                </div>
                        </div>)}


                </div >
        )
}

export default Love
