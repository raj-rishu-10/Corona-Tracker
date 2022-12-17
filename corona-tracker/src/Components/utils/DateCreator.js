import moment from "moment";

const DateCreator = ()=>{
  var d = new Date();
  d.setDate(d.getDate() - 1);
  return moment(d).format('M/DD/YY');
}

export default DateCreator;
