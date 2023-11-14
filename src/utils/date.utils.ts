import dayjs from 'dayjs';

export class DateUtils {
  static formatString(date: Date, format = 'DD/MM/YYYY') {
    return dayjs(new Date(date)).format(format);
  }
}
