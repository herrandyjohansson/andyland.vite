import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Api from "../utils/api";

interface Props {
  date: SaunaDate;
}
interface SaunaDate {
  date: string;
  weekDay: string;
}
export const SaunaCard: React.FC<Props> = ({ date }) => {
  const { data, isLoading, refetch } = useQuery<Date[]>(
    ["sauna" + date.date],
    async () => Api.fetchAvailableSaunaTimesForSpecificDate(date.date),
    {
      refetchInterval: 1000 * 60 * 60,
    }
  );

  if (!data) return <></>;

  if (isLoading)
    return (
      <div className="bg-grey-800 rounded-3xl p-4 mt-3">
        <div className="w-12"></div>
        <div className="flex flex-row gap-3 align-middle">
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse h-12 w-16"></span>
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse h-12 w-16"></span>
          <span className="bg-grey-600 rounded-3xl p-2 animate-pulse h-12 w-16"></span>
        </div>
      </div>
    );

  return (
    <div
      className="bg-grey-800 rounded-3xl p-4 mt-3"
      onClick={() => {
        refetch();
      }}
    >
      <div className="w-12"></div>
      <div className="flex flex-row gap-3 align-middle">
        <span className="bg-grey-100 text-stone-900 rounded-3xl p-2">
          {date.weekDay}
        </span>
        {data &&
          data.map((timeslot: Date) => {
            // dayjs add one more hour, wtf?
            const dayjsCorrectedTimeslot = dayjs(timeslot).add(-1, "h");

            const getCorrectTimeSlotFormatting = (timeslot: any) => {
              const date = dayjs(timeslot).format("m");
              return date === "30"
                ? dayjsCorrectedTimeslot.format("H" + ".5")
                : dayjsCorrectedTimeslot.format("HH");
            };

            return (
              <a
                className="flex flex-row items-center justify-center"
                target="_blank"
                href={`https://oslobadstuforening.no/dropin-ledig-tid/?planyo_lang=NO&mode=reserve&prefill=true&one_date=${
                  date.date
                }&start_date=${
                  date.date
                }&start_time=${getCorrectTimeSlotFormatting(
                  timeslot
                )}&resource_id=184637`}
              >
                <span
                  className="bg-grey-600 rounded-3xl p-2 hover:bg-grey-100 hover:text-stone-900"
                  key={dayjsCorrectedTimeslot.toString()}
                >
                  {dayjsCorrectedTimeslot.format("HH:mm")}
                </span>
              </a>
            );
          })}
      </div>
    </div>
  );
};
