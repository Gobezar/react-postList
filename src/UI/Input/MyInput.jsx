import React from 'react'
import classes from '../Input/MyInput.module.css'

const MyInput = (props) => {
    return (
        <div>
            <input className={classes.MyInput} {...props} />
        </div>
    )
}
export default MyInput