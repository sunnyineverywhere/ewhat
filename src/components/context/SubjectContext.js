import React, {createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const SubjectContext = createContext();

export function SubjectContextProvider({children}) {
    const [subjects, setSubjects] =useState('');

    const onCreate = ({}) => {
        const subject ={
            id: uuidv4(),
        };
        setSubjects([subject, ...subject])
    };

    return (
        <SubjectContext.Provider value={{subjects, onCreate}}>
            {children}
        </SubjectContext.Provider>
    );
}

export default SubjectContext;