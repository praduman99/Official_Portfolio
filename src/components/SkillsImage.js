import React from 'react'

const SkillsImage = ({ image, title, h, w }) => {
    return (
        <div className='p-2  text-center d-flex' >
            <img src={image} width={20} height={20} />
            &nbsp;
            <div> {title}</div>
        </div>
    )
}

export default SkillsImage