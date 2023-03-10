import React from 'react'

const Sort = ({ options, defaultValue, value, onChange }) => {
    return (

        <select
            value={value}
            onChange={ event => onChange(event.target.value)}
            className='sort_select'>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

        

        
    )
}
export default Sort;