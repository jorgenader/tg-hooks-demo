import React from 'react';

import { ClassExample } from 'components/ClassExample';
import { LocaleContext } from 'context/Language';
import { ThemeContext } from 'context/Theme';

import { commonClasses } from './commonExample';

export default () => (
    <div className="d-flex flex-fill">
        <ThemeContext.Provider
            value={`${commonClasses} bg-white`}
        >
            <LocaleContext.Provider value="gb">
                <ClassExample />
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    </div>
);
