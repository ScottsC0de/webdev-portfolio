import React from 'react';

import meImg from '../img/me.JPEG'

// import PicOfMe from '../img/me.jpg'

function AboutMe() {
    return (
        <div className='text-center mb-5'>
            <figure className='figure'>
                <img src={meImg} class='figure-img img-fluid rounded' alt="A fantastic pic of me" width={400} height={400}></img>
                <figcaption class='figure-caption text-xs-right' style={{ color: 'whitesmoke' }}> 27 year old full-stack web developer & musician with a passion for excellence</figcaption>
            </figure>
        </div>
    );
};

export default AboutMe;