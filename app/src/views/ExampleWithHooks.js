import React from 'react';

import { HookExample } from 'components/ClassExampleToConvert';
import { LanguageContext } from 'context/Language';
import { ThemeContext } from 'context/Theme';

import { commonClasses } from './commonExample';


export default () => (
    <div className="d-flex flex-row">
        <div className="justify-content-center flex-fill">
            <ThemeContext.Provider
                value={`${commonClasses} bg-dark text-white`}
            >
                <LanguageContext.Provider value="us">
                    <HookExample />
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        </div>
    </div>
);
