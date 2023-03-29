import { useState, useEffect } from 'react';

const useDate = (initialDate: string | null = null) => {
    const [date, setDate] = useState<string | null>(initialDate);

    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch('/api/icandeploy?date=' + (initialDate ?? ''));
            const { date } = await response.json();
            setDate(date);
        };

        fetchDate();
    }, [initialDate]);

    return date;
};

export default useDate;