import React from 'react';

interface TilesGridProps {
  id: string;
  images: string[];
  wrapperClassName?: string; // Custom class for the wrapper
  lineClassName?: string; // Custom class for each line
  imgClassName?: string; // Custom class for each image
  scrollSpeeds: number[]; // Scroll speeds for each line
  scrollDirection?: 'horizontal' | 'vertical'; // Scroll direction
  scrollTarget?: string; // Scroll target (optional)
  imagesPerLine?: number; // Number of images per line (dynamic)
}

export const TilesGrid: React.FC<TilesGridProps> = ({
  id,
  images,
  wrapperClassName = 'tiles__wrap',
  lineClassName = 'tiles__line',
  imgClassName = 'tiles__line-img',
  scrollSpeeds,
  scrollDirection = 'horizontal',
  scrollTarget,
  imagesPerLine = 8, // Adjust default to 8 to match the HTML example
}) => {
  const getImageUrl = (path: string) => `/${path}`;

  return (
    <div className={wrapperClassName}>
      {scrollSpeeds.map((speed, index) => (
        <div
          key={`${id}-${index}`}
          className={lineClassName}
          data-scroll
          data-scroll-speed={speed}
          data-scroll-direction={scrollDirection}
          data-scroll-target={scrollTarget ? `#${scrollTarget}` : undefined}
        >
          {images.slice(index * imagesPerLine, (index + 1) * imagesPerLine).map((img, idx) => (
            <div
              key={`${id}-${index}-${idx}`}
              className={imgClassName}
              style={{ backgroundImage: `url(${getImageUrl(img)})` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
