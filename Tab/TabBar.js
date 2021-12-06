import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TapBarItem'

const TabBar = ({ setType, type }) => (
    <View style={styles.container}>
        <TabBarItem type={type} title='Home' 
            setType={() => setType('All')} />
        <TabBarItem type={type} border title='AddSubject' 
            setType={() => setType('Active')} />
        
    </View>
)
const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default TabBar

