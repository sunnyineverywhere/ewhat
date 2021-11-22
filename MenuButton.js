import React from "react";
import { Pressable,StyleSheet,View,Image } from "react-native";
import { theme } from "../theme";
import PropTypes from 'prop-types';
import { images } from "../image";

const MenuButton = ({type, onPressOut, id}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };
    return(
        <Pressable onPressOut={_onPressOut}>
            <Image source={type} style={menuStyle.menu}/>
        </Pressable>
    );
};
MenuButton.defaultProps = {
    onPressOut: () => {},
};




const menuStyle = StyleSheet.create({
    menu:{
        tintColor: theme.text,
        width: 200,
        height: 40,
        margin: 10,
    },
});

MenuButton.PropTypes ={
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
};

export default MenuButton;