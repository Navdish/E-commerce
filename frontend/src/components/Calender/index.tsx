// import { Dispatch, FC, SetStateAction, useState } from 'react'
// import { Stack,Divider} from '@mui/material'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// interface DurationProps {
//     duration : Value,
//     setDuration:  Dispatch<SetStateAction<Value>>
//     setDisplayCalender: Dispatch<SetStateAction<Boolean>>
// }

// const Calender = (props: DurationProps) => {
//     const handleDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
//         console.log(e.target.value)
//         // props.setDuration(new Date(e.target.value));
//         props.setDisplayCalender(false);
//     }
//     return (
//         <div>
//       <Calendar onChange={(e) => handleDuration} value={props.duration} selectRange={true} goToRangeStartOnSelect={true}/>
//     </div>
//     )
// }

// export default Calender;

import * as React from 'react';
import  { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

interface CalenderProps {
    duration : DateRange<Dayjs>,
    setDuration:  React.Dispatch<React.SetStateAction< DateRange<Dayjs>>>
}

export default function Calender(props: CalenderProps) {
//   const [value, setValue] = React.useState<DateRange<Dayjs>>([
//     dayjs(new Date()),
//     dayjs(new Date()),
//   ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        
        <DemoItem  component="DateRangePicker">
          <DateRangePicker
            value={props.duration}
            onChange={(newValue) => {props.setDuration(newValue); console.log(newValue && newValue.length > 0 && newValue[0]?.format('YYYY-MM-DD HH:mm:ss'));}}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}