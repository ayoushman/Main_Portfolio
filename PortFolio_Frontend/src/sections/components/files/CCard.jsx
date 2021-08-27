import { React, useState } from 'react'

import "../css/Ccard.css"
const CCard = (props) => {

    const [data, setData] = useState({ name: "", email: "", Message: "" })

    const handleChange = (e) => {

        const { name, value } = e.target


        setData({ ...data, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(data)
        setData({ ...data, name: "", email: "", Message: "" })
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div className="main_card">
            <div className="contact_card">
                <div className="form_content">
                    <form >

                        <label className="label">Name <input onChange={handleChange} type="text" value={data.name} name="name" className="input" /></label>
                        <br />
                        <label className="label">Email <input onChange={handleChange} type="email" value={data.email} name="email" className="input" /></label>
                        <br />
                        <label className="label">Message <input onChange={handleChange} type="text" value={data.Message} name="Message" className="input" /></label>
                        <button onClick={handleSubmit} className="sbm_btn">submit</button>

                    </form>


                </div>

            </div>
        </div>
    )
}

export default CCard
