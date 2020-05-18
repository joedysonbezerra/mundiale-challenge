import fs from 'fs';
import { format } from 'date-fns-tz';
import createTimestamp from './createTimestamp';

export default function createLog(message) {
  const log = `[${createTimestamp()}]${message}`;
  fs.appendFileSync(`./logs/${format(new Date(), 'dd-MM-yyyy')}.log`, log);
  return log;
}
