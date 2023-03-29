import React, {useState} from 'react';
import dayjs from 'dayjs';
import useDate from '../hooks/useDate';
import {Select, Text, Alert, AlertIcon} from '@chakra-ui/react';
import {Stack} from '@chakra-ui/react'

const daysToSelect = 7;

const DeployPage = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs().toISOString());
    const date = useDate(selectedDate);

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(event.target.value);
        // console.log(selectedDate)
    };

    const isDeployable = () => {
        const dayOfWeek = dayjs(date).day();
        return dayOfWeek !== 5 && dayOfWeek !== 6 && dayOfWeek !== 0;
    };

    return (
        <Stack spacing={4}>
            <Text fontWeight="bold">Séléctionne un jour</Text>
            <Select value={selectedDate} onChange={handleDateChange}>
                {[...Array(daysToSelect)].map((_, i) => (
                    <option key={i} value={dayjs().add(i, 'day').toISOString()}>
                        {dayjs().add(i, 'day').format('dddd D MMMM')}
                    </option>
                ))}
            </Select>
            <Alert status={isDeployable() ? 'success' : 'error'}>
                <AlertIcon/>
                {isDeployable() ? 'Tu peux déployer ce jour-ci <3' : 'Tu ne peux pas déployer ce jour-ci !!'}
            </Alert>
        </Stack>
    );
};


export default DeployPage