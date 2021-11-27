// subject numbers context(global value) hold
// subject.js
// subject의 개수를 관리합니다.

import React, {createContext, Component, useState} from "react";

const subjectContext = createContext({
    subject: {number: 0},
    dispatch: () => {},
});

const subjectProvider = ({children}) => {
    const [count, setcount] = useState(0);

    const value = {subject: {count}, dispatch: setcount};
    return <subjectContext.Provider value = {value}></subjectContext.Provider>
};

const subjectConsumer = subjectContext.Consumer;

export {subjectConsumer, subjectProvider};
export default subjectContext;