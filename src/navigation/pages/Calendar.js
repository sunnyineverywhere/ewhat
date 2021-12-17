import React from "react";
import { Component } from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';
import { View, ToastAndroid } from "react-native";


LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['SUN', 'MON','THU','WED','TUR','FRI','SAT'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

 


class Calendars extends Component{
    render(){
        return(
            <View style={{ paddingTop: 50, flex: 1 }}>
            <CalendarList
                  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                  // Max amount of months allowed to scroll to the past. Default = 50
                  showScrollIndicator={true}
                  horizontal = {true}
                  pagingEnabled = {true}
                  calendarWidth={600}
               // Initially visible month. Default = now
                current={'2021-12-17'}
                // Minimum date that can be selected, dates before minDate will be  grayed out. Default = undefined
                minDate={'2012-05-10'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2021-12-30'}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={(day) => {console.log('selected day', day)}}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={(day) => {console.log('selected day', day)}}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={(month) => {console.log('month changed', month)}}
                // Hide month navigation arrows. Default = false
                hideArrows={true}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={(direction) => (<Arrow/>)}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={true}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={true}
                // Show week numbers to the left. Default = false
                showWeekNumbers={true}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={subtractMonth => subtractMonth()}
                // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}
                // Disable left arrow. Default = false
                disableArrowLeft={true}
                // Disable right arrow. Default = false
                disableArrowRight={true}
                // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                disableAllTouchEventsForDisabledDays={true}
                // Replace default month and year title with custom one. the function receive a date as parameter
                renderHeader={(date) => {/*Return JSX*/}}
                // Enable the option to swipe between months. Default = false
                enableSwipeMonths={true}
                />

          </View>
        )
    }
}

export default Calendars;