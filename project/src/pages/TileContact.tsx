import React, { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const TileContact: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<any>(null);

    const scrollToTop = () => {
        if (scrollRef.current) {
            gsap.to(window, {
                scrollTo: { y: 0 },
                duration: 1,
                ease: 'power2.inOut',
            });
        } else {
            console.warn('Locomotive Scroll instance not found!');
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            console.log('Container ref is set:', containerRef.current);
        }
    }, []);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                lerp: 0.1,
                multiplier: 1,
                class: 'is-reveal',
            }}
            containerRef={containerRef}
            watch={[containerRef.current]}
            onInit={(scroll: any) => {
                scrollRef.current = scroll;
                console.log('Locomotive Scroll initialized:', scroll);
            }}
        >
            <main data-scroll-container ref={containerRef}>
                <h1>Test Locomotive Scroll</h1>
                <div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #ccc)' }}>
                    Scroll down to test
                </div>
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Back to Top
                </button>
            </main>
        </LocomotiveScrollProvider>
    );
};

export default TileContact;