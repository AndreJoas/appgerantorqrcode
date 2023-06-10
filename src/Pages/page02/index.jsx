import React from 'react'
import Card from '../../components/cardComponent'
import "./styles.css";

export default function index() {
    return (
        <div className='containerQr'>
            <div className='div1'><h2>Ultiliza os inputs com qualquer forma de escrita e o QRCord será gerado</h2>
                <p>Não se esqueça de Baixar a imagem logo depois!!</p>
            </div>
            <div className='subqr'>
                <div className='div2' >
                    <Card />
                </div>
                <div className='div2' >
                    <Card />
                </div>
                <div className='div2' >
                    <Card />
                </div>
                <div className='div2' >
                    <Card />
                </div>
            </div>
            <div className='voltar'><a href="/home"><button className='voltab'> Voltar para Home</button></a></div>
        </div>
    )
}
