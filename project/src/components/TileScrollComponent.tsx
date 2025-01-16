// // TileScrollComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import { TilesGrid } from './TilesGrid';

// interface TileScrollComponentProps {
//   images: string[]; // Define the prop type
// }
// const TileScrollComponent: React.FC<TileScrollComponentProps> = ({ images }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const scrollInstance = useRef<LocomotiveScroll | null>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollInstance.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//       });

//       return () => {
//         if (scrollInstance.current) {
//           scrollInstance.current.destroy();
//         }
//       };
//     }
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       <main>
//         <section id="header" className="content content--numbered" data-scroll-section>
//           <div className="frame">
//             <div className="frame__title-wrap">
//               <h1 className="frame__title">TheSkyLens Studios</h1>
//             </div>
//             <div className="frame__links">
//               <a href="https://tympanus.net/Development/videoTransitions/">Home</a>
//               <a href="index2.html" target="_blank" rel="noopener noreferrer">Gallery</a>
//               <a href="https://github.com/codrops/TileScroll/">Article</a>
//             </div>
//             <div className="frame__demos">
//               <a href="index.html" className="frame__demo frame__demo--current">Demo 1</a>
//               <a href="index2.html" className="frame__demo">Demo 2</a>
//               <a href="index3.html" className="frame__demo">Contact</a>
//             </div>
//           </div>
//           <p className="content__pretitle">Unseeing the seen</p>
//           <h1 className="content__title" data-scroll data-scroll-speed="2">TheSkyLens Studios.</h1>
//         </section>

//         <section className="tiles tiles--rotated" id="grid2" data-scroll-section>
//           <div className="tiles__wrap">
//             {/* Repeat the tiles structure as per your original HTML */}
//             <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
//               <div className="tiles__line-img"></div>
//               <div className="tiles__line-img"></div>
//               <div className="tiles__line-img"></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/4.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/5.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/6.jpg)' }}></div>
//             </div>
//             {/* Add more tiles lines as per your original HTML */}
//             <div data-scroll-container ref={scrollRef}>
//               <TilesGrid
//                 id="grid1"
//                 images={images} // Now TypeScript recognizes images
//                 className="tiles--rotated"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="content content--numbered" data-scroll-section>
//           <p className="content__text" data-scroll data-scroll-speed="2">
//             The human world is exploding at the seams. Human creativity and the implementation of human inventions and technology is now at an accelerated fever pitch like nothing ever before seen in the history of the world. Well, where is it leading, and how does one integrate this stuff into one’s own life? What does it mean about the experience of being human? I have proposed the existence of an invisible, permeating <em>Something</em> that is throughout all being, all time, all space, all bodies, all thought, which I call <em>Novelty</em>; and the interesting thing about novelty is that it’s increasing constantly.
//           </p>
//         </section>

//         <section className="tiles" id="grid" data-scroll-section>
//           <div className="tiles__wrap">
//             <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid" data-scroll-direction="horizontal">
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/1.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/2.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/3.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/4.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/5.jpg)' }}></div>
//               <div className="tiles__line-img" style={{ backgroundImage: 'url(img/demo1/6.jpg)' }}></div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default TileScrollComponent;