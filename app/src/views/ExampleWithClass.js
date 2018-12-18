import React from 'react';

import { ClassExample } from 'components/ClassExample';
import { LanguageContext } from 'context/Language';
import { ThemeContext } from 'context/Theme';

import { commonClasses } from './commonExample';

export default () => (
    <div className="d-flex flex-fill">
        <ThemeContext.Provider
            value={`${commonClasses} bg-white`}
        >
            <LanguageContext.Provider value="gb">
                <ClassExample />
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    </div>
);
