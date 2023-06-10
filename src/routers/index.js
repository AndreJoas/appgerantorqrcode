import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Inicio,Gerador } from '../Pages/index';

export default function Index() {
    return (
        <Routes>
           <Route path="/" element={<Inicio />}></Route>
            <Route path="home" element={<Inicio />} ></Route>
            <Route path="gerador" element={<Gerador />} ></Route>
        </Routes>
    )
}
