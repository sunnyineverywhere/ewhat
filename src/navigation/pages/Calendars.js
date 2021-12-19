import React, {useState, useMemo, useContext} from 'react';
import {format} from 'date-fns';
import CalendarView from '../../components/CalendarView';
import LogContext from  '../../components/context/LogContext';
import SearchList from '../../components/SearchScreen/SearchList';

function Calendars() {
  return (
    <CalendarView

    />
  );
}

export default Calendars;

/**

import {format} from 'date-fns';
import React ,{useContext, useMemo, useState} from 'react';
import CalendarView from '../../components/CalendarView';
import LogContext from  '../../components/context/LogContext';
import SearchList from '../../components/SearchScreen/SearchList';

function Calendars() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
    
  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <SearchList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default Calendars; 

**/
