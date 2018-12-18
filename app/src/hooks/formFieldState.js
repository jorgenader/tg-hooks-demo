import { useState } from 'react';


export const useFormFieldState = (initial = '') => {
    const [value, setValue] = useState(initial);

    return [value, (evt) => setValue(evt.target.value)];
};
