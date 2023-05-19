import React, { useRef, useState, useEffect } from 'react';
import {generateJSXMeshGradient} from 'meshgrad';
import generatePdf from "./helpers/generatePdf";
import createCarousel from "./helpers/createCarousel";

const CarouselGenerator = () => {
    const pages = useRef();
    const textArea = useRef();

    const meshStyle = generateJSXMeshGradient(8);
    const preMadeText = `#Grow Your Business with These Social Media Strategies\nMake an impact on social media with these powerful tips 🎯\n\n##1. Define Your Goals and Objectives\nBefore you start advertising on social media, define your business objectives and goals for the campaign. Know your target audience, set measurable objectives, and ensure that your social media strategy aligns with your business goals.\n\n##2. Create Quality Content\nContent is king in social media marketing. Use high-quality graphics, videos, and engaging captions to attract your audience's attention and communicate your brand message effectively.\n\n##3. Leverage Social Ads\nSocial media ads are a great way to attract new customers and reach a broader audience. Use precise targeting techniques to showcase your products or services to the right people to generate more leads and sales.\n\n##4. Engage with Your Audience\nEngagement is vital to maintaining a strong presence on social media. Respond quickly and positively to comments, messages, and feedback from your customers to foster a loyal following.\n\n##5. Track Metrics and Optimize\nTrack the metrics of your social media performance, such as likes, shares, clicks, and follower growth. Analyze the data, optimize your strategy based on your findings, and continually refine your approach to maximize ROI.\n\n##6. Collaborate with Influencers\nInfluencers are social media users with significant followings who can help promote your brand and increase awareness. Identify influencers who align with your brand values and collaborate with them to expand your reach.\n\n#That's All for Now!\n##We hope these strategies help you elevate your social media marketing efforts and grow your business. Don't forget to like and share this post to help others too!`;
    const [background, setBackground] = useState(meshStyle);
    const [text, setText] = useState(preMadeText);
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        setCarousel(createCarousel(text));
    }, [text]);

    const generatePdfHandle = async () => {
        await generatePdf([...pages.current.querySelectorAll('.item')]);
    }

    const changeBackground = () => {
        setBackground(generateJSXMeshGradient(Math.floor(Math.random()*5)+1));
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="container mx-auto p-4">
            <section className="py-10 mb-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">LinkedIn Carousel Generator</h1>
                    <p className="text-lg">Create stunning carousel posts for LinkedIn with ease!</p>
                </div>
            </section>

            <div className="flex flex-row align-middle justify-between mb-3">
                <div className="preview-label">
                    <h2 className="text-2xl font-bold mb-4 inline-block mb-0">Preview & Download ⚡️</h2>
                    <p className="text-lg">Preview of your carousel post and download it instantly!</p>
                </div>
                <button className="inline-block text-2xl" onClick={changeBackground}>🎨</button>
            </div>

            <div ref={pages} className="flex overflow-scroll flex-nowrap justify-between shrink-0 w-full">
                { carousel.map((item, index) => {
                    return (
                        <div className="mr-1" key={index}>
                            <div className="item">
                                <div style={background} className="w-96 h-96 bg-blue-500 text-dark p-4 aspect-square" dangerouslySetInnerHTML={{ __html: item }} />
                            </div>
                        </div>
                    )
                }) }
            </div>

            <div className="text-editor my-4">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-800">Your Content</label>
                <textarea
                    ref={textArea}
                    id="message"
                    className="border-2 block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-96"
                    placeholder="Write your content here..."
                    value={text}
                    onChange={handleTextChange}
                ></textarea>
            </div>

            <div className="mt-4 text-center">
                <button style={generateJSXMeshGradient(3)} className="shadow-xl font-medium py-2 px-4 rounded inline-flex items-center" onClick={generatePdfHandle}>
                    <svg fill="currentColor" className="w-4 h-4 mr-1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                    </svg>
                    <span>Generate PDF</span>
                </button>
            </div>
        </div>
    );
};

export default CarouselGenerator;
