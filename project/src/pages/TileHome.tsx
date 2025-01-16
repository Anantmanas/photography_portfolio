import React, { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { TilesGrid } from '../components/TilesGrid';
import { preloadImages, preloadFonts } from '../utils/preload';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TileHome: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<any>(null);
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        Promise.all([
            preloadImages('.tiles__line-img'),
            preloadFonts('rmd7deq')
        ]).then(() => {
            document.body.classList.remove('loading');
        });
    }, []);




    // Image paths
    const images = Array.from({ length: 30 }, (_, i) => `assets/img/demo1/${i + 1}.jpg`);
    const imagesColums = Array.from({ length: 30 }, (_, i) => `assets/img/demo2/${i + 1}.jpg`);

    useEffect(() => {
        console.log('Locomotive Scroll instance:', scrollRef.current);
    }, [scrollRef]);

    // Custom scrollToTop function
    const scrollToTop = () => {
        if (scroll) {
            scroll.scrollTo('#header', {
                duration: 1000, // Smooth scrolling duration in milliseconds
                easing: [0.25, 0.1, 0.25, 1], // Smooth easing
            });
        } else {
            console.warn('Locomotive Scroll instance not found!');
        }
    };


    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.1,
                multiplier: 1,
            }}
            containerRef={containerRef}
            onInit={(scroll: any) => {
                scrollRef.current = scroll;
                console.log('Locomotive Scroll initialized:', scroll);
            }}
            watch={[] /* Add any dependencies here that should trigger a scroll update */}
        >
            <main data-scroll-container ref={containerRef}>
                <section id="header" className="content content--numbered">
                    <div className="frame">
                        <div className="frame__title-wrap">
                            <h1 className="frame__title">TheSkyLens Studios</h1>
                        </div>
                        <div className="frame__links">
                            <Link to="/">Home</Link>
                            <Link to="/gallery" target="_blank">Our Work</Link>
                            {/* <a href="https://www.behance.net/kingakash4aeac" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBehance} />
                            </a> */}
                        </div>
                        <div className="frame__demos">
                            {/* <a href="index.html" className="frame__demo frame__demo--current">Demo 1</a>
                            <a href="../index2.html" className="frame__demo">Demo 2</a> */}
                            <Link to="/contact" target="_blank">Contact</Link>
                        </div>
                    </div>
                    <p className="content__pretitle">Unseeing the seen</p>
                    <h1 className="content__title" data-scroll data-scroll-speed="2">TheSkyLens Studios.</h1>
                </section>

                <section className="tiles tiles--rotated" id="grid2">

                    <TilesGrid
                        id="grid2"
                        images={images}
                        wrapperClassName="tiles__wrap"
                        lineClassName="tiles__line is-inview"
                        imgClassName="tiles__line-img"
                        scrollSpeeds={[1, -1, 1, -1, 1]} // Different speeds for each line
                        scrollDirection="horizontal"
                        scrollTarget="grid2"
                        imagesPerLine={6}
                    />


                </section>

                <section className="content content--numbered">
                    <p className="content__text" data-scroll data-scroll-speed="2">
                        The human world is exploding at the seams. Human creativity and the implementation of human inventions and technology is now at an accelerated fever pitch like nothing ever before seen in the history of the world.
                    </p>
                </section>

                <section className="tiles" id="grid">

                    <TilesGrid
                        id="grid"
                        images={images}
                        lineClassName="tiles__line"
                        scrollSpeeds={[1, -1, 1, -1]}
                        scrollDirection="horizontal"
                        scrollTarget="grid"
                    />

                </section>

                <section className="content content--feature">
                    <p className="content__breakout content__breakout--big" data-scroll data-scroll-speed="3" data-scroll-direction="horizontal">endless acceleration toward infinity</p>
                    <p className="content__breakout content__breakout--medium" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">the greatest barrier to your enlightenment</p>
                </section>

                <section className="content content--numbered">
                    <p className="content__text" data-scroll data-scroll-speed="2">
                        The conservation of novelty is simply that, over time, the universe has become more complicated. New levels of complexity become the foundations for yet deeper levels of complexity. And this phenomenon of the production and conservation of what I call novelty is not something which goes on only in the biological domain or only in the cultural domain or only in the domain of physics. It is a trans-categorical impulse in reality, meaning: it’s everywhere. <em>Everywhere!</em>
                    </p>
                </section>

                <section className="tiles tiles--columns" id="grid3">
                    <div className="tiles--column">
                        <TilesGrid
                            id="grid3"
                            images={imagesColums}
                            lineClassName="tiles__line"
                            scrollSpeeds={[1, -1, 1, -1]}
                            scrollDirection="vertical"
                            scrollTarget="grid3"
                            imagesPerLine={6}
                        />
                    </div>
                </section>

                <section className="content">
                    <a className="backtop" data-scroll data-scroll-speed="4" onClick={scrollToTop}>Back to the top</a>
                    <div className="frame frame--footer">
                        <a href="https://twitter.com/codrops" className="frame__author">@codrops</a>
                        <div className="frame__demos">
                            <a href="https://www.behance.net/kingakash4aeac" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBehance} />
                            </a>
                            <a href="https://www.instagram.com/retouching_machine" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/akash-singh-5a87041bb/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </LocomotiveScrollProvider>
    );
};

export default TileHome;