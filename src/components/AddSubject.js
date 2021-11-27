// AddSubject.js
// Subject의 값을 추가하는 Componenet입니다.

import React, { useContext } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import subjectContext from './context/subject';
import { useState } from 'react';

const Input = () => {
    const [count, setcount] = useState(0);
    const {dispatch} = useContext(subjectContext);

    return(
        <TextInput 
            value = {count}
            onChangeText = {text => setcount(text)}
            onSubmitEditing = {() => {
                dispatch(count);
                setcount();
            }}
            placeholder = "How many lectures do you take?"
            autoCapitalize = "none"
            autoCorrect = {false}
            returnKeyType = "done"
            keyboardType = "number-pad"
        />
    )
}

export default Input;