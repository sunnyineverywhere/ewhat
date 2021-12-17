
import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "white",  
    },
    header:{    
        marginTop: 10,
        flexDirection: 'row',
        
    },
    complete: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: theme.itemBackground,
        marginHorizontal:166,
        marginVertical: 22,
        borderRadius: 55
        
    },
    completeTXT: {
        fontWeight: "600",
    },

    doneListText:{
        textAlign: 'center',
        marginVertical: 2,
        marginHorizontal: 3,
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
    }
});
export const textStyles = StyleSheet.create({
    title:{
        
        fontSize: 35,
        fontWeight: '600',
        color: theme.main,
        marginTop: 3,
        marginLeft: 3,
        marginRight: 33,
    },
    
});

export const calendarstyles= StyleSheet.create({
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
});
export  const searchstyles = StyleSheet.create({
        block: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        input: {
            flex: 1,
        },
        button: {
            marginLeft: 8,
        },
    });