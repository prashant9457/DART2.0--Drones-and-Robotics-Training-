import React, { useEffect } from 'react';
import { StaggeredMenu, type StaggeredMenuItem } from './StaggeredMenu';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'what-is-dart', 'why-attend', 'skills', 'timeline', 'speakers', 'team', 'dart1', 'faqs'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        // setActiveSection logic removed as it's currently unused in UI
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems: StaggeredMenuItem[] = [
        { label: 'Home', ariaLabel: 'Go to Home', link: '#home' },
        { label: 'About', ariaLabel: 'Go to About', link: '#what-is-dart' },
        { label: 'Key Insights', ariaLabel: 'Go to Key Insights', link: '#why-attend' },
        { label: 'Skills', ariaLabel: 'Go to Skills', link: '#skills' },
        { label: 'Timeline', ariaLabel: 'Go to Timeline', link: '#timeline' },
        { id: 'speakers', label: 'Speakers', ariaLabel: 'Go to Speakers', link: '#speakers' },
        { label: 'Taskforce', ariaLabel: 'Go to Taskforce', link: '#team' },
        { label: 'Legacy', ariaLabel: 'Go to Legacy', link: '#dart1' },
        { label: 'FAQs', ariaLabel: 'Go to FAQs', link: '#faqs' },
    ].map(item => ({
        ...item,
        // We can't easily pass custom styles per item to StaggeredMenu, 
        // but we'll manage the active state through the items array if needed or via CSS
    }));

    return (
        <div className="sidebar-staggered-wrapper">
            <StaggeredMenu
                position="left"
                items={menuItems}
                isFixed={true}
                accentColor="#ffffffff"
                colors={['#f4f4f4ff', '#ddddddff', '#1f0101ff']}
                logoUrl="/DART_LOGO.png" // placeholder or correct path
                displayItemNumbering={true}
                displaySocials={true}
                socialItems={[
                    { label: 'Instagram', link: 'https://instagram.com' },
                    { label: 'LinkedIn', link: 'https://linkedin.com' }
                ]}
            />
        </div>
    );
};

export default Sidebar;
