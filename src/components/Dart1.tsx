import React, { useState } from 'react';
import './Dart1.css';

// Importing all 21 images from the legacy assets folder
import img1 from '../assets/Dart1legacy/Copy_of_DSC_3918.JPG';
import img2 from '../assets/Dart1legacy/Copy_of_DSC_4096.JPG';
import img3 from '../assets/Dart1legacy/Copy_of_DSC_4115.JPG';
import img4 from '../assets/Dart1legacy/Copy_of_DSC_4167.JPG';
import img5 from '../assets/Dart1legacy/Copy_of_DSC_4231.JPG';
import img6 from '../assets/Dart1legacy/Copy_of_DSC_4259.JPG';
import img7 from '../assets/Dart1legacy/Copy_of_DSC_4265.JPG';
import img8 from '../assets/Dart1legacy/DSC00434.JPG';
import img9 from '../assets/Dart1legacy/DSC00483.JPG';
import img10 from '../assets/Dart1legacy/DSC00505.JPG';
import img11 from '../assets/Dart1legacy/DSC00518.JPG';
import img12 from '../assets/Dart1legacy/DSC_3695.JPG';
import img13 from '../assets/Dart1legacy/DSC_3734.JPG';
import img14 from '../assets/Dart1legacy/DSC_3768.JPG';
import img15 from '../assets/Dart1legacy/DSC_3796.JPG';
import img16 from '../assets/Dart1legacy/DSC_3900.JPG';
import img17 from '../assets/Dart1legacy/DSC_5118.JPG';
import img18 from '../assets/Dart1legacy/DSC_5127.JPG';
import img19 from '../assets/Dart1legacy/DSC_5176.JPG';
import img20 from '../assets/Dart1legacy/DSC_5291.JPG';
import img21 from '../assets/Dart1legacy/DSC_5298.JPG';

const row1Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
const row2Images = [img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];

const LegacyImageCard: React.FC<{ 
    src: string; 
    isExpanded: boolean; 
    onClick: () => void;
}> = ({ src, isExpanded, onClick }) => {
    return (
        <div 
            className={`legacy-card image-card ${isExpanded ? 'is-expanded' : ''}`}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
        >
            <div className="full-img-wrap">
                <img src={src} alt="DART 1.0 Heritage" className="full-img" loading="lazy" />
            </div>
        </div>
    );
};

const Dart1: React.FC = () => {
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const closeZoom = () => setZoomedImage(null);

    return (
        <section id="dart1" className="dart1-legacy-section">
            <div className="legacy-header delay-1 animated">
                <h2 className="section-title">The Legacy: <span className="text-gradient">DART 1.0</span></h2>
                <p className="section-subtitle">Visual highlights from the first volume of autonomous exploration.</p>
            </div>

            <div className="marquee-container delay-2 animated">
                {/* Row 1 - Leftward Motion */}
                <div className={`marquee-row marquee-top ${zoomedImage ? 'is-paused' : ''}`}>
                    {[...row1Images, ...row1Images].map((src, i) => (
                        <LegacyImageCard 
                            key={`r1-${i}`}
                            src={src} 
                            isExpanded={false}
                            onClick={() => setZoomedImage(src)}
                        />
                    ))}
                </div>

                {/* Row 2 - Rightward Motion */}
                <div className={`marquee-row marquee-bottom ${zoomedImage ? 'is-paused' : ''}`}>
                    {[...row2Images, ...row2Images].map((src, i) => (
                        <LegacyImageCard 
                            key={`r2-${i}`}
                            src={src} 
                            isExpanded={false}
                            onClick={() => setZoomedImage(src)}
                        />
                    ))}
                </div>
            </div>

            {/* Cinematic Fullscreen Zoom Modal */}
            {zoomedImage && (
                <div className="image-zoom-overlay" onClick={closeZoom}>
                    <div className="zoom-backdrop"></div>
                    <div className="zoomed-image-container" onClick={(e) => e.stopPropagation()}>
                        <img src={zoomedImage} alt="DART Legacy Zoom" className="zoomed-image" />
                        <button className="close-zoom-btn cursor-target" onClick={closeZoom}>
                           <span>×</span>
                        </button>
                    </div>
                </div>
            )}
            
            <div className="background-decor">
                <div className="decor-line-v"></div>
                <div className="decor-text">EST. 2024</div>
            </div>
        </section>
    );
};

export default Dart1;
