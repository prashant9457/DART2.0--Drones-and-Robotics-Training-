import React, { useEffect } from 'react';
import KeyInsightsSkills from './keyinsightsskills';

const InsightsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content" style={{ padding: '80px 20px', minHeight: '100vh' }}>
            <KeyInsightsSkills />
        </div>
    );
};

export default InsightsPage;
