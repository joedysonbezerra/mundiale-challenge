import { format } from 'date-fns-tz';

export default function createTimestamp() {
  const timeZone = 'America/Sao_Paulo';
  return format(new Date(), 'dd/MM/yyyy HH:mm', { timeZone });
}
