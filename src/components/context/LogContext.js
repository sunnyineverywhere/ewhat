import {createContext, useState} from 'react';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import React from 'react';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([
        //임의의 로그들
        {
            id: uuidv4(),
            title: '컴퓨터 구조 복습',
            body: '1강 듣고 필기하기',
            date: '2021-12-17',
        },
        {
            id: uuidv4(),
            title: '자료 구조 복습',
            body: '1강 듣고 필기하기',
            date: '2021-12-18',
        },
        {
            id: uuidv4(),
            title: '산책',
            body: '8시에 일어나서 가볍게 산책',
            date: new Date().toISOString(),
        },
    ]);

    const onCreate = ({}) => {
        setLogs([logs, ...logs]);
    };

    return (
        <LogContext.Provider value={{logs, onCreate}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;