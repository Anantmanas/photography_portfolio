import React, { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { TilesGrid } from '../components/TilesGrid';
import { preloadImages, preloadFonts } from '../utils/preload';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../App.css';
import { Link } from 'react-router-dom';

const TileGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<any>(null);

    useEffect(() => {
        Promise.all([
            preloadImages('.tiles__line-img'),
            preloadFonts('rmd7deq'),
        ]).then(() => {
            document.body.classList.remove('loading');
        });
    }, []);

    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo('#header_1', {
                duration: 1000,
                easing: [0.25, 0.1, 0.25, 1],
            });
        } else {
            console.warn('Locomotive Scroll instance not found!');
        }
    };

    // Image sets for different sections
    const sectionImages = {
        section1: Array.from({ length: 8 }, (_, i) => `assets/img/demo1/${i + 1}.jpg`),
        section2: Array.from({ length: 8 }, (_, i) => `assets/img/demo1/${7 + i}.jpg`),
        section3: Array.from({ length: 8 }, (_, i) => `assets/img/demo1/${13 + i}.jpg`),
        section4: Array.from({ length: 4 }, (_, i) => `assets/img/demo3/${i + 1}.jpg`),
        section5: Array.from({ length: 4 }, (_, i) => `assets/img/demo3/${5 + i}.jpg`),
        section6: Array.from({ length: 4 }, (_, i) => `assets/img/demo2/${9 + i}.jpg`),


    };


    console.log('section4 images:', sectionImages.section1);
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
            }}
        >
            <main id="main" data-scroll-container ref={containerRef}>
                {/* Header Section */}
                <section id="header" className="content content--auto">
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
                    </div>
                </section>

                {/* Tiles Sections */}
                <section className="tiles tiles--perspective tiles--darker">

                    <TilesGrid
                        id="section1"
                        images={sectionImages.section1}
                        imgClassName="tiles__line-img"
                        scrollSpeeds={[2, -2, 2, -2]}
                        scrollDirection="horizontal"
                    />

                    <h2 className="tiles__title tiles__title--intro" data-scroll data-scroll-speed="4">
                        Neurotic<br />culture
                    </h2>
                </section>

                <section className="content">
                    <p className="content__text" data-scroll data-scroll-speed="2">We have the money, the power, the medical understanding, the scientific know-how, the love and the community to produce a kind of human paradise. But we are led by the least among us – the least intelligent, the least noble, the least visionary. We are led by the least among us and we do not fight back against the dehumanizing values that are handed down as control icons.</p>
                </section>
                {/* One Line Tiles Sections */}
                <section className="tiles tiles--oneline" id="grid2">

                    <TilesGrid
                        id="grid2"
                        images={sectionImages.section4}
                        scrollSpeeds={[2]}
                        scrollDirection="horizontal"
                        scrollTarget="grid2"
                    />

                    <h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">
                        Civilization
                    </h2>
                </section>

                <section className="tiles tiles--oneline" id="grid3">

                    <TilesGrid
                        id="grid3"
                        images={sectionImages.section5}
                        scrollSpeeds={[-2]}
                        scrollDirection="horizontal"
                        scrollTarget="grid3"
                    />

                    <h2 className="tiles__title tiles__title--left tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">
                        Empowerment
                    </h2>
                </section>

                <section className="tiles tiles--oneline" id="grid4">

                    <TilesGrid
                        id="grid4"
                        images={sectionImages.section6}
                        scrollSpeeds={[2]}
                        scrollDirection="horizontal"
                        scrollTarget="grid4"
                    />

                    <h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">
                        Apocalypse
                    </h2>
                </section>
                <section className="content">
                    <p className="content__text content__text--wide" data-scroll data-scroll-speed="1">We have to create culture, don’t watch TV, don’t read magazines, don’t even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe, and if you’re worrying about Michael Jackson or Bill Clinton or somebody else, then you are <em>disempowered</em>, you’re giving it all away to icons, icons which are maintained by an electronic media so that you want to dress like X or have lips like Y. </p>
                </section>
                <section className="content content--feature">
                    <p className="content__breakout content__breakout--big" data-scroll data-scroll-speed="20" data-scroll-direction="horizontal">Culture is not your friend</p>
                    <p className="content__breakout content__breakout--medium" data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">express ourselves through creative activity</p>
                </section>
                <section className="content">
                    <p className="content__text content__text--right content__text--wide" data-scroll data-scroll-speed="1">This is shit-brained, this kind of thinking. That is all cultural diversion, and what is real is you and your friends and your associations, your highs, your orgasms, your hopes, your plans, your fears. And we are told ‘no’, we’re unimportant, we’re peripheral. ‘Get a degree, get a job, get a this, get a that.’ And then you’re a player, you don’t want to even play in that game. You want to reclaim your mind and get it out of the hands of the cultural engineers who want to turn you into a half-baked moron consuming all this trash that’s being manufactured out of the bones of a dying world.</p>
                </section>

                <section className="tiles tiles--fixed">
                    <TilesGrid
                        id="grid00"
                        images={sectionImages.section6}
                        scrollSpeeds={[3, 2, 1, -1, -2, -3]}
                        scrollDirection="horizontal"
                        imgClassName='tiles__line-img'
                    />

                </section>
                {/* Footer Section */}
                <section className="content">
                    <a className="backtop" data-scroll data-scroll-speed="4" onClick={scrollToTop}>
                        Back to the top
                    </a>
                    <div className="frame frame--footer">
                        <a href="https://twitter.com/codrops" className="frame__author">@codrops</a>
                        <div className="frame__demos">
                            <a href="index.html" className="frame__demo">Demo 1</a>
                            <a href="index2.html" className="frame__demo">Demo 2</a>
                            <a href="index3.html" className="frame__demo frame__demo--current">Demo 3</a>
                        </div>
                    </div>
                </section>
            </main>
        </LocomotiveScrollProvider>
    );
};

export default TileGallery;
