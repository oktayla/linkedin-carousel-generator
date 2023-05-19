const createCarousel = (text) => {
    const sections = text.split('\n\n');

    return sections.map(section => {
        const trimmedSection = section.trim();
        const lines = trimmedSection
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(line => line.trim());

        return lines.map(line => {
            const levelMatch = line.match(/^#+/);
            const headingLevel = levelMatch ? levelMatch[0].length : 0;
            const content = line.replace(/^#+/, '').trim();

            let sectionMarkup;
            if (headingLevel === 1) {
                sectionMarkup = `<h1 class="text-5xl font-extrabold mt-8 mb-6 font-SF Pro Display">${content}</h1>`;
            } else if (headingLevel === 2) {
                sectionMarkup = `<h2 class="text-2xl font-semibold mt-8 mb-6">${content}</h2>`;
            } else {
                sectionMarkup = `<p class="text-zinc-700">${content}</p>`;
            }

            return sectionMarkup;
        }).join('');
    });
}

export default createCarousel;