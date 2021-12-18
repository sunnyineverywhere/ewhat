import {format} from 'date-fns';
import React ,{useContext, useMemo, useState} from 'react';
import CalendarView from '../../components/CalendarView';
<<<<<<< HEAD:src/navigation/pages/Calendar.js
import LogContext from '../../components/context/LogContext'
import SearchContext from '../../components/context/SearchContext';
=======
import LogContext from  '../../components/context/LogContext';
import SearchList from '../../components/SearchSceen/SearchList';
>>>>>>> 2b96549b428ced7fe952e230abc0a01915c981a4:src/navigation/pages/Calendars.js

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

export default CalendarScreen;
