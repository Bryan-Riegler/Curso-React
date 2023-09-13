import React from 'react'

const Form = ({ label, name, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input name={name} type="text" onChange={onChange} />
        </div>
    )
}

export default Form