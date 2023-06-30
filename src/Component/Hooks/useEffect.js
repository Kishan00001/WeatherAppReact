import React, { useEffect } from 'react';
import "./style.css";

const UseEffect = () => {
    const initialData = 21;
    const [myNum,setMyNum] = React.useState(initialData);//always should be on the top
    useEffect(()=>{
        document.title = `Chats(${myNum})`
    })
    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={()=>setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect;