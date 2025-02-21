import React from 'react'
import './Diseases.css'
import BackImg from './Images/BackMedicalImg.jpeg'
import Heart from './Images/HeartDiseases.jpeg';

const Diseases = () => {
    return (
        <div>
            <h1>Rising Cases Of Mosquito Borne Diseases</h1>
            <img className='image_1' src={BackImg} alt="" />
            <p className='p'>Maharashtra has seen a huge surge in mosquito-borne
                diseases in the first half of 2024. As per the
                state health department data, the number of
                chikungunya cases has more than doubled, while
                dengue cases have shot up to 3736 this year, again
                a significant increase over the past year. </p>

            <div>
                <h1>Heart Diseases in Maharashtra on Rise</h1>
                <img className='image_1' src={Heart} alt="" />
                <p className='p'>Heart diseases are the leading causes of
                    death worldwide claiming several million
                    lives each year. WHO Report predicts that
                    in the year 2020, 2.6 million Indians will
                    die of coronary heart diseases (CHDs), which
                    constitute 54.1% of all CVD deaths. </p>
            </div>
        </div>

    )
}

export default Diseases