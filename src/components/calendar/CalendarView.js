import React from 'react';
import {Agenda, calendarTheme} from 'react-native-calendars';
import {StyleSheet, View} from 'react-native';

function CalendarView() {
  const markedDate = {
        '2017-12-03' : {
            selected: true,
        },
    };

  return (
   <Agenda 
     markedDates={markedDate}
     items={{
      '2012-05-22': [{name: 'item 1 - any js object'}],
      '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
      '2012-05-24': [],
      '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
     }}
      // Callback that gets called when items for a certain month should be loaded (month became visible)
     loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      // Callback that fires when the calendar is opened or closed
     onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
     // Callback that gets called on day press
     onDayPress={(day) => {console.log('day pressed')}}
     // Callback that gets called when day changes while scrolling agenda list
     onDayChange={(day) => {console.log('day changed')}}
     // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
     minDate={'2012-05-10'}
     // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
     maxDate={'2022-12-31'}
      // Max amount of months allowed to scroll to the past. Default = 50
     pastScrollRange={100}
     // Max amount of months allowed to scroll to the future. Default = 50
     futureScrollRange={100}
     // Specify how each item should be rendered in agenda
     renderItem={(item, firstItemInDay) => {return (<View />);}}
     // Specify how each date should be rendered. day can be undefined if the item is not first in that day
     renderDay={(day, item) => {return (<View />);}}
     // Specify how empty date content with no items should be rendered
     renderEmptyDate={() => {return (<View />);}}
     // Specify how agenda knob should look like
     renderKnob={() => {return (<View />);}}
     // Specify what should be rendered instead of ActivityIndicator
     renderEmptyData = {() => {return (<View />);}}
     // Specify your item comparison function for increased performance
     rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
     // Hide knob button. Default = false
     hideKnob={false}
     // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
     showClosingKnob={false}
     // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
     onRefresh={() => console.log('refreshing...')}
      // Set this true while waiting for new data from a refresh
     refreshing={false}
     // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
     refreshControl={null}
     // Agenda theme
     theme={{
      ...calendarTheme,
      agendaDayTextColor: 'yellow',
      agendaDayNumColor: 'green',
      agendaTodayColor: 'red',
      agendaKnobColor: 'blue'
     }}
     // Agenda container style
     style={{}}

   />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
