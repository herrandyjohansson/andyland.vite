import dayjs from "dayjs";

export default class DateUtils {
  public static getTodaysDatePlusDays(days: number) {
    return {
      date: dayjs().add(days, "day").format("DD.MM.YYYY"),
      weekDay: dayjs().add(days, "day").format("dddd").toUpperCase(),
    };
  }
}
