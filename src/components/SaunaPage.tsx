import React from "react";
import DateUtils from "../utils/date";
import { SaunaCard } from "./SaunaCard";

const SaunaPage = () => {
  return (
    <>
      <section>
        <div>Sukkerbiten</div>
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(1)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(2)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(3)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(4)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(5)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(6)} />
        <SaunaCard date={DateUtils.getTodaysDatePlusDays(7)} />
      </section>
    </>
  );
};

export default SaunaPage;
