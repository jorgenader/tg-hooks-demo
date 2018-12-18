import React, { useContext } from 'react';

import { LocaleContext } from 'context/Language';
import { ThemeContext } from 'context/Theme';
import { useDocumentTitle, useFormFieldState, useWindowWidth } from 'hooks';


export const HookExample = () => {
    const width = useWindowWidth();
    const themeClasses = useContext(ThemeContext);
    const language = useContext(LocaleContext);
    const [firstName, setFirstName] = useFormFieldState('Dorothy');
    const [lastName, setLastName] = useFormFieldState('Gale');
    useDocumentTitle(`${firstName} ${lastName}`);

    return (
        <div className={themeClasses}>
            <div className="form-group w-50">
                <label htmlFor="first-name">
                    First name:
                </label>
                <input
                    id="first-name"
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={setFirstName}
                />
            </div>
            <div className="form-group w-50">
                <label htmlFor="last-name">
                    Last name:
                </label>
                <input
                    id="last-name"
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={setLastName}
                />
            </div>
            <div className="mb-2">
                Window width: {width}
            </div>
            <div className="mb-2">
                Locale: <span className={`flag-icon flag-icon-${language}`} />
            </div>
        </div>
    );
};
