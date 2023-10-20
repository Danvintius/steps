import React, { useState } from 'react'
import Training from './Training';
import nanoid from 'nanoid';

export default function Form(form: any, setForm: any, setTrainings: any) {
      
    const handleSubmit = (evt: any) => {
        evt.preventDefault()
        console.log(form)
        const train = new Training(nanoid(), form.date, form.dist)
        console.log(train)
        setTrainings = (prevTrains: any) => {
            console.log(prevTrains)
            for(let key of prevTrains) {
                if(key.date === train.date) {
                    key.dist = train.dist + key.dist
                    return prevTrains.sort(sortTrain)
                }
            }
            return [...prevTrains, train].sort(sortTrain);
        }
        setForm({date: '', dist: ''});
    }

    const sortTrain = (date1: any, date2: any) => {
        if (date1.date > date2.date) return 1;
        if (date1.date < date2.date) return -1;
        return 0;
    }

    const handleChange = (evt: any) => {
        const {name, value} = evt.target
        setForm = (prevForm: any) => ({...prevForm, [name]: value})
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="menu">
                <div className="block">
                    <h2>Дата (ДД.ММ.ГГ)</h2>
                    <div className="interiorBlock">
                        <input name="date" type="date" value={form.date} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="block">
                    <h2>Пройдено км</h2>
                    <div className="interiorBlock">
                    <input name="dist" type="number" value={form.distanc} onChange={handleChange} required/>
                    </div>
                </div>
                <div className="blockOk">
                    <button className="ok">
                        <h2>OK</h2>
                    </button>                  
                </div>
            </div>
        </form>
    )
}