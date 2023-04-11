import React, { useState } from 'react';
import matchupImg from '../img/matchupimg.png'

function Portfolio() {
    return (
        <div className='text-center mb-5'>

            <section className='main-project text-center'>
                <h2><u>My Work</u></h2>

                <br />

                <h3>Elite Matchups</h3>

                <figure>
                    <a href='https://elite-matchups.herokuapp.com' target='_blank' rel='noreferrer'><img className='figure-img img-fluid rounded' src={matchupImg} alt='Matchup app, Paul McCartney vs John Lennon' width={560} height={315}></img></a>
                    <figcaption style={{ color: 'whitesmoke' }}>Matchup app powered by HTML, CSS, JS</figcaption>
                </figure>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>Social Media API</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/_9QMaGcVVWM" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>MongoDB data storage & retrieval</figcaption>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>E-Commerce Back-End</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/suPdpcR-5OY" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>Database communication using Sequelize</figcaption>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>SQL Database Tracker</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/jJTQS-aa_f0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>Track database items using mySQL</figcaption>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>myTeam App</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/JoxPK37G1w0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>Generate HTML pages using node.js & inquirer npm</figcaption>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>ReadMe Machine</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/FiDq-eSe_e0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>Generate ReadMe files using node.js & inquirer npm</figcaption>

            </section>

            <br />

            <section className='projects col-xl'>

                <h3>The Venue</h3>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/SAl53Z5xNDk" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <figcaption>Discover, share, & conversate about music using the Spotify Web API</figcaption>

            </section>

        </div >
    )
};






// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption,
// } from 'reactstrap';

// const items = [
//     {
//         id: 1,
//         altText: 'Matchup App using HTML, CSS, & JS',
//         caption: 'Elite Matchups',
//     },
//     {
//         id: 2,
//         altText: 'MongoDB data storage & retrieval',
//         caption: 'Social Media API',
//     },
//     {
//         id: 3,
//         altText: 'Database communication using Sequelize',
//         caption: 'E-Commerce Back-End',
//     },
//     {
//         id: 4,
//         altText: 'Track database items using mySQL',
//         caption: 'SQL Database Tracker',
//     },
//     {
//         id: 5,
//         altText: 'Generate HTML page using node.js & inquirer npm',
//         caption: 'myTeam App',
//     },
//     {
//         id: 6,
//         altText: 'Generate ReadMe files using node.js & inquirer npm',
//         caption: 'ReadMe Machine',
//     },
// ];

// function Portfolio(props) {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);

//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     };

//     const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     };

//     const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//     };

//     const slides = items.map((item) => {
//         return (
//             <CarouselItem
//                 className="custom-tag"
//                 tag="div"
//                 key={item.id}
//                 onExiting={() => setAnimating(true)}
//                 onExited={() => setAnimating(false)}
//             >
//                 <CarouselCaption
//                     className="text-danger"
//                     captionText={item.altText}
//                     captionHeader={item.caption}
//                 />
//             </CarouselItem>
//         );
//     });

//     return (
//         <div>
//             <style>
//                 {`.custom-tag {
//               max-width: 100%;
//               height: 500px;
//               background: black;
//             }`}
//             </style>
//             <h2 className='section-headers'>My Work</h2>
//             <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//                 <CarouselIndicators
//                     items={items}
//                     activeIndex={activeIndex}
//                     onClickHandler={goToIndex}
//                 />
//                 {slides}
//                 <CarouselControl
//                     direction="prev"
//                     directionText="Previous"
//                     onClickHandler={previous}
//                 />
//                 <CarouselControl
//                     direction="next"
//                     directionText="Next"
//                     onClickHandler={next}
//                 />
//             </Carousel>
//         </div>
//     );
// }

// carousel code found at https://reactstrap.github.io/?path=/docs/components-carousel--carousel 

export default Portfolio;