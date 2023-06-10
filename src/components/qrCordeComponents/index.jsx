import React, { useEffect, useRef } from 'react'
import  QRCode from 'qrcode'
import "./styles.css";
export default function QRCodeCanvas({text}) {


    const canvasRef =  useRef()


    useEffect(()=>{
        QRCode.toCanvas(canvasRef.current,text,(error)=>{
            console.log(error)
        })
    },[text])

    const handleDownload = ()=>{
        const canvas = canvasRef.current;
        const imagemUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        link.href = imagemUrl;
        link.download = 'qrcode.png'
        link.click()
    }

  return (
    <div className='qrcode'>
        {/* ref= faz uma referencia a uma variavel  */}
        <h1>Gere seu QRCode</h1>

        <canvas ref={canvasRef} id="canvas"></canvas>
        <button id="botao" onClick={handleDownload}>Baixar QRCode Gerado</button>
    </div>


    )
}

