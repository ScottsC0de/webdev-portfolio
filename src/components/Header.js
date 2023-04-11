import React from 'react'

import emailLogo from '../img/emaillogo.png'
import phoneLogo from '../img/phonelogo.png'
import textLogo from '../img/textlogo.png'
// import resumeLogo from '../img/resumelogo.jpg'
import daftGit from '../img/daftgit.gif'


function Header() {
    return (
        <div className='text-center'>
            <header>
                <h1><strong>Scott George</strong></h1>

                <p className='col'><em>Hamden, CT</em></p>

                <a className='logos' href='https://github.com/ScottsC0de' target='_blank' rel='noreferrer'><img src={daftGit} alt='Daft Github mascot gif' width={100} height={100}></img></a>

                <section className='col'>
                    <a className='logos' href='tel:203-695-1813'><img src={phoneLogo} alt='Phone app logo linked to my phone number' weight={70} height={70}></img></a>
                    <a className='logos' href='mailto:scott5902@gmail.com' target='_blank' rel='noreferrer'><img src={emailLogo} alt='Email App Logo linked to my email' weight={70} height={70}></img></a>
                    <a className='logos' href='sms:203-695-1813'><img src={textLogo} alt='Text app logo linked to my phone number' weight={70} height={70}></img></a>
                </section>

            </header>
        </div>
    );
};

export default Header;