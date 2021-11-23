import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.background,  
    },
    header:{
        flexDirection: 'row',
    },
    button:{
        color: theme.main,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export const textStyles = StyleSheet.create({
    title:{
        fontSize: 35,
        fontWeight: '600',
        color: theme.main,
        marginTop: 0,
        marginLeft: 3,
    },
    menu:{
        fontSize: 25,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    menuText:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        margin: 10,
    }
});
