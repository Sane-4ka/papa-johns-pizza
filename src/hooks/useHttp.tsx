import {useState, useCallback } from 'react';

export const useHttp = () => {
    const [process, setProcess] = useState<String>('waiting');

    const request = useCallback(async (url: RequestInfo | URL, method = 'GET', body = null, mode = 'cors' as RequestMode, headers = {"Content-Type": "application/json"}) => {
        
        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, mode, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return(data);
        } catch(e) {
            setProcess('error');
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setProcess('loading');
    }, []);

    return {request, clearError, process, setProcess}
}