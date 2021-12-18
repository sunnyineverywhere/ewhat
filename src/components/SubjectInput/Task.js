import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types'
import IconButton from "../Main/IconButton";
import { images } from "../Main/image";
import { theme } from "../theme";
import { InputAccessoryView } from "react-native";
import { useState } from "react";
import Inputs from './Inputs'
import { View } from "react-native";



const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: #63855d;
`;

const SubjectTask= ({ item, deleteTask, toggleTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);
  
    const _handleUpdateButtonPress = () => {
      setIsEditing(true);
    };
    const _onSubmitEditing = () => {
      if (isEditing) {
        const editedTask = Object.assign({}, item, { text });
        setIsEditing(false);
        updateTask(editedTask);
      }
    };
    const _onBlur = () => {
      if (isEditing) {
        setIsEditing(false);
        setText(item.text);
      }
    };
  
    return isEditing ? (
      <Inputs
        value={text}
        onChangeText={text => setText(text)}
        onSubmitEditing={_onSubmitEditing}
        onBlur={_onBlur}
      />
    ) : (
      <View>
        <IconButton
          type={item.completed ? images.completed : images.uncompleted}
          id={item.id}
          onPressOut={toggleTask}
          completed={item.completed}
        />
        <Contents completed={item.completed}>{item.text}</Contents>
        {item.completed || (
          <IconButton
            type={images.update}
            onPressOut={_handleUpdateButtonPress}
          />
        )}
        <IconButton
          type={images.delete}
          id={item.id}
          onPressOut={deleteTask}
          completed={item.completed}
        />
      </View>
    );
  };

SubjectTask.prototype = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};

export default SubjectTask;