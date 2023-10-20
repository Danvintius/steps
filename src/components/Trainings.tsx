import React, { useState } from 'react'
import Training from './Training'


export default function Trainings(trainings: any, setTrainings: any) {
    const edit = '🖉'
    const delet = '✗'
    const handleRemove = (id: number) => {
        setTrainings = (prevTrains: any) => prevTrains.filter((o: any) => o.id !== id)
    }
    
    return (
        <div className="feature">
            <ul className="head">
                <li>Дата (ДД.ММ.ГГ)</li>
                <li>Пройдено км 🐾</li>
                <li>Действия</li>
            </ul>
            
            <div className="contentBlock">
                {trainings.map((o: any) => <ul className="content" key={o.id}>
                    <li>{o.date}</li>
                    <li>{o.distanc}</li>
                    <li><button>{edit}</button> 
                    <button onClick={() => handleRemove(o.id)}>{delet}</button> </li>
                </ul>)}
            </div>
        </div>    
    )
}