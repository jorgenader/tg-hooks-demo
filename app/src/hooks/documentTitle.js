import { useLayoutEffect } from 'react';


export const useDocumentTitle = (title) => {
    useLayoutEffect(() => {
        document.title = title;
    }, [title]);
};
