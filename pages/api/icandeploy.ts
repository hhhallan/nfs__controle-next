import { NextApiRequest, NextApiResponse } from 'next';
import dayjs from 'dayjs';

type Response = {
    date: string,
    validated: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const date = req.query.date ? dayjs(req.query.date as string) : dayjs();

    res.status(200).json({
        date: date.toISOString(),
        validated: date.day() !== 5 || date.day() !== 6 || date.day() !== 0
    });
}