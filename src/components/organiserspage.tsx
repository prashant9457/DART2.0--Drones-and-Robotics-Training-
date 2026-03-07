import React, { useEffect } from 'react';
import HearfromOrganisers from './hearfromorganisers';

const OrganisersPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content" style={{ padding: '80px 20px', minHeight: '100vh' }}>
            <HearfromOrganisers />
        </div>
    );
};

export default OrganisersPage;
