import React, { useState, useEffect } from 'react'

function Slider() {

    const images = [
        "https://media.istockphoto.com/id/2174681156/photo/sunrise-on-the-ciucas-peak-ciucas-mountains-romania.webp?a=1&b=1&s=612x612&w=0&k=20&c=nKiKMPc4c2uuI88CxmSU1fQMMImzpAp5RV6HwzRfbKk=",
        "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRlc2t0b3AlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
    ]

    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((index + 1) % images.length)
    }

useEffect(()=>{
    const interval = setInterval(()=>{
        setIndex((index) => (index + 1 ) % images.length);
    },2000);

    return () => clearInterval(interval);
},[])

    const pre = () => {
        setIndex((index - 1 + images.length) % images.length)
    };

    console.log(index)

    return (
        <div>
            <div className='slider'><img src={images[index]} alt="" /></div>
            <button onClick={pre}>preview</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Slider