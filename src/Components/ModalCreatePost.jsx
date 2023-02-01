import React from 'react'
import classes from '../styles/ModalCreatePost.module.css'

const ModalCreatePost = ({ children, visible, setVisible }) => {

    const rootClasses = [classes.ModalCreatePost]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.ModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalCreatePost;