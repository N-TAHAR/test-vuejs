class dateService {
  constructor() {
    this.datesArray = [];
  }
  getDates(dates) {
    this.datesArray = dates;
  }
}

module.exports = new dateService();


