import imagesLoaded from 'imagesloaded';

// Preload images
export const preloadImages = (selector = 'img'): Promise<void> => {
  return new Promise((resolve, reject) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      (instance) => {
        if (instance) {
          resolve();
        } else {
          reject(new Error('Images failed to load'));
        }
      }
    );
  });
};

// Preload fonts
export const preloadFonts = (id: string): Promise<void> => {
  return new Promise((resolve) => {
    (window as any).WebFont.load({
      typekit: {
        id: id
      },
      active: resolve
    });
  });
};