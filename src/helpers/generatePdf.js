import jsPDF from 'jspdf';
import randomstring from 'randomstring';
import elementToImage from "./elementToImage";

const generatePdf = async (items) => {
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [1080, 1080],
    });

    const totalItems = items.length;
    await Promise.all(items.map(async (item, index) => {
        const imageDataURL = await elementToImage(item);
        doc.addImage(imageDataURL, "JPEG", 0, 0, 3034.8, 3034.8);

        if (index !== totalItems - 1) {
            doc.addPage();
        }
    }));

    doc.save(`linkedin-${randomstring.generate(9)}.pdf`);
}

export default generatePdf;