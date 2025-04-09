class myMenstrationApp {
  constructor(
    startDay,
    startMonth,
    startYear,
    cycleDuration,
    shortestCycleDuration
  ) {
    this.startDay = startDay;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.cycleDuration = cycleDuration;
    this.shortestCycleDuration = shortestCycleDuration;
  }

   fetchDate() {
    let date = new Date(
      `${this.startMonth}/${this.startDay}/${this.startYear}`
    );
    return date;
  }

  nextFlowDate() {
    let nextFlowDate = this.fetchDate();
    nextFlowDate.setDate(nextFlowDate.getDate() + this.cycleDuration);

    return nextFlowDate;
  }

  nextOvulationDate() {
    let nextOvulationDate = this.fetchDate();
    nextOvulationDate.setDate(
      nextOvulationDate.getDate() + this.cycleDuration / 2
    );

    return nextOvulationDate;
  }

  fertilePeriod() {
    let fertilePeriodDate = this.fetchDate();
    fertilePeriodDate.setDate(
      fertilePeriodDate.getDate() + (this.shortestCycleDuration - 18)
    );

    return fertilePeriodDate;
  }
}

const hawanahPeriod = new myMenstrationApp(22, 3, 2025, 28, 24);
console.log(hawanahPeriod.nextFlowDate());
console.log(hawanahPeriod.nextOvulationDate());
console.log(hawanahPeriod.fertilePeriod());
