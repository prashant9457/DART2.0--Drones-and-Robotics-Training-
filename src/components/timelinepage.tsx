import React, { useEffect } from 'react';
import EventTimeline from './eventtimeline';

const TimelinePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content" style={{ padding: '80px 20px', minHeight: '100vh' }}>
            <EventTimeline />
        </div>
    );
};

export default TimelinePage;
