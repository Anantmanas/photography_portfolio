import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

interface TilesGridProps {
    id: string;
    className?: string;
    title?: string;
}

export const TilesGridVertical: React.FC<TilesGridProps> = ({ id, className = '', title }) => {
    const { scroll } = useLocomotiveScroll();

    // Define the images array directly in the component
    const images = Array.from({ length: 30 }, (_, i) => `assets/img/demo2/${i + 1}.jpg`);

    // Helper function to import images dynamically
    const getImageUrl = (path: string) => {
        const url = `/${path}`;
        return url;
    };

    const renderTilesLine = (startIdx: number, speed: number) => (
        <div
            className="tiles__line"
            data-scroll
            data-scroll-speed={speed}
            data-scroll-target={`#${id}`}
            data-scroll-direction="vertical"
        >
            {images.slice(startIdx, startIdx + 6).map((img, idx) => {
                // console.log('Current img:', img); // Log the current image path
                return (
                    <div
                        key={`${id}-${startIdx}-${idx}`}
                        className="tiles__line-img"
                        style={{ backgroundImage: `url(${getImageUrl(img)})` }} // Ensure img is defined
                    />
                );
            })}
        </div>
    );

    return (
        <>
            {renderTilesLine(0, 1)}
            {renderTilesLine(6, -1)}
            {renderTilesLine(12, 1)}
            {renderTilesLine(18, -1)}

            {title && <h2 className="tiles__title">{title}</h2>}
        </>
    );
}; 