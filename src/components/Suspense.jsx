import React from 'react';
import { connect } from 'react-redux';

import './Suspense.css';

const SuspenseLoading = ({ theme }) => {
    // Credit: https://dribbble.com/shots/5092176-Newton-Loader

    return (
        <section className={`loading ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    );
};

export default connect(({ theme }) => ({ theme }))(SuspenseLoading);
