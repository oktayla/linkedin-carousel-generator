import * as htmlToImage from 'html-to-image';

const elementToImage = async (el) => {
    return await htmlToImage.toJpeg(el, {
        pixelRatio: 5,
        quality: 1,
        width: 1080,
        height: 1080,
        backgroundColor: 'white',
    })
};

export default elementToImage;