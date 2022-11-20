import React from "react";
import { GiWinterGloves } from "react-icons/gi";
import { TbTrain } from "react-icons/tb";
const Calendar = () => {
  return (
    <section>
      <div>
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase ">
          <span className="text-xs p-1 tracking-widest">
            FREDAG - 25.11.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span>Göteborg weekend!</span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
          <span className="text-xs p-1 tracking-widest">
            FREDAG - 02.12.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span>Veronica kommer!</span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
          <span className="text-xs p-1 tracking-widest">
            ONSDAG - 07.12.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span>Andy åker till Malmö!</span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
          <span className="text-xs p-1 tracking-widest">
            TORSDAG - 08.12.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span className="flex flex-row">
              <span className="ml-4">Leffan kommer till byn</span>
            </span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
          <span className="text-xs p-1 tracking-widest">
            TORSDAG - 16.12.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span className="flex flex-row">
              <TbTrain color="#fff" />
              <span className="pl-4">Avfärd till Linkan!</span>
            </span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="rounded-tr-3xl rounded-tl-3xl bg-grey-900 text-center uppercase">
          <span className="text-xs p-1 tracking-widest">
            TORSDAG - 30.12.2022
          </span>
        </div>
        <div className="rounded-br-3xl rounded-bl-3xl bg-grey-800 p-4">
          <div className="flex text-5xl pt-4 pb-4">
            <span>Nyår - Avfärd från Linkan och Champagne i Malmö!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
