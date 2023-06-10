import React from 'react'
import "./styles.css";

export default function index() {
    return (
        <div className='containerQr quad' style={{marginTop:'13rem', padding:'10px'}}>
            <h2 style={{padding:'6px'}}>Bem Bindo ao QRCode Generator</h2>
            <p  style={{padding:'6px'}}>Aqui você vai poder gerar vários QRCodes simultaneos e baixar todos de graça!! </p>
            <a href="/gerador"><button className="voltab"  style={{padding:'6px',margin:'5px'}}>Ir ao Gerador</button></a>
        </div>

    )
}
