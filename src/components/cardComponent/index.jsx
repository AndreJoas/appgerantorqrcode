
import { useState } from 'react';
import QRCodeCanvas from '../qrCordeComponents';
import "./styles.css";

export default function Card(){
    
    
    const [text, setText] = useState('')
    
    
    return (
        <div className="card">
            <input onChange={(element)=>{setText(element.target.value)}} value={text}></input>
            <QRCodeCanvas text={text}></QRCodeCanvas>
        </div>
    )
}