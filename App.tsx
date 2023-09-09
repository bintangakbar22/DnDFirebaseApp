import {RouteApp} from '@components/atoms/RouteApp';
import React from 'react';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.locale('id');
dayjs.extend(timezone);
dayjs.extend(utc);

function App(): JSX.Element {
  return <RouteApp />;
}

export default App;
