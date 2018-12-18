import React, { Component } from 'react';

import { LanguageContext } from 'context/Language';
import { ThemeContext } from 'context/Theme';


export class ClassExample extends Component {
    state = {
        width: typeof window === 'undefined' ? 0 : window.innerWidth,
        firstName: 'Mary',
        lastName: 'Poppins',
    };

    componentDidMount() {
        this.handleDocumentTitle();
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(_0, prevState) {
        if (this.state.firstName !== prevState.firstName || this.state.lastName !== prevState.lastName) {
            this.handleDocumentTitle();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleDocumentTitle = () => {
        document.title = `${this.state.firstName} ${this.state.lastName}`;
    };

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    handleFirstName = (evt) => (
        this.setState({ firstName: evt.target.value })
    );

    handleLastName = (evt) => (
        this.setState({ lastName: evt.target.value })
    );

    render() {
        return (
            <ThemeContext.Consumer>
                {(themeClasses) => (
                    <div className={themeClasses}>
                        <div className="form-group w-50">
                            <label htmlFor="first-name">First name:</label>
                            <input
                                id="first-name"
                                type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.handleFirstName}
                            />
                        </div>
                        <div className="form-group w-50">
                            <label htmlFor="last-name">Last name:</label>
                            <input
                                id="last-name"
                                type="text"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.handleLastName}
                            />
                        </div>
                        <div className="mb-2">
                            Window width: {this.state.width}
                        </div>
                        <LanguageContext.Consumer>
                            {(language) => (
                                <div className="mb-2">
                                    Language: <span className={`flag-icon flag-icon-${language}`} />
                                </div>
                            )}
                        </LanguageContext.Consumer>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
