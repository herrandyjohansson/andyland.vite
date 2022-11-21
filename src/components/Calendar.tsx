import dayjs from "dayjs";
import React from "react";
import { GiWinterGloves } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";

interface CalendarItems {
  title: JSX.Element | string;
  date: string;
  week: number;
  color: string;
}

const calendarAppointments: CalendarItems[] = [
  {
    title: "Göteborg weekend!",
    date: "2022-11-25",
    week: 47,
    color: "text-green-500",
  },
  {
    title: "Veronica kommer!",
    date: "02.12.2022",
    week: 48,
    color: "text-blue-500",
  },
  {
    title: "Andy åker till Malmö!",
    date: "07.12.2022",
    week: 49,
    color: "text-red-500",
  },
  {
    title: "Leffan kommer till Oslo",
    date: "08.12.2022",
    week: 49,
    color: "text-yellow-500",
  },
  {
    title: "Avfärd till Linkan och fest hos Jossan!",
    date: "16.12.2022",
    week: 50,
    color: "text-purple-500",
  },
  {
    title: <div>Nyår - Avfärd från Linkan och Champagne i Malmö!</div>,
    date: "30.12.2022",
    week: 52,
    color: "text-pink-500",
  },
  {
    title: <div>NYTT ÅR! 🎉🎉</div>,
    date: "01.01.2023",
    week: 1,
    color: "text-red-500",
  },
];

const Calendar = () => {
  return (
    <section>
      {calendarAppointments.map((item): any => (
        <div className="flex mb-4">
          <div className="bg-grey-800 border-4 border-grey-600 rounded-3xl p-4">
            <div className="h-full flex justify-center align-middle items-center w-24">
              <span className={`text-5xl ${item.color}`}>{item.week}</span>
            </div>
          </div>
          <div className="pl-2">
            <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
              <span className="text-xs p-1 tracking-widest">{item.date}</span>
            </div>
            <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4  hover:bg-transparent hover:bg-slate-800 hover">
              <div className="flex text-5xl pt-4 pb-4">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Calendar;
