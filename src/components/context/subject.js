// subject numbers context(global value) hold
// subject.js
// subject의 개수를 관리합니다.

import React, {createContext, Component, useState} from "react";

const SubjectContext = createContext({
    subject: {number: 6},
    dispatch: () => {},
});

const SubjectProvider = ({children}) => {
    const [count, setcount] = useState(0);

    const value = {subject: {count}, dispatch: setcount};
    return <SubjectContext.Provider value = {value}>{children}</SubjectContext.Provider>
};

const SubjectConsumer = SubjectContext.Consumer;

export {SubjectConsumer, SubjectProvider};
export default SubjectContext;