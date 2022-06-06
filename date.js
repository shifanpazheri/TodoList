
module.exports.getDate=getDate;

function getDate(){
  const event = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let day=event.toLocaleDateString('en-US', options);
  return day;
}

module.exports.getDay=function(){
  const event = new Date();
  const options = { weekday: 'long' };

  let day=event.toLocaleDateString('en-US', options);
  return day;
}

exports.getYear=function(){
  const event = new Date();
  const options = {year: 'numeric'};

  let day=event.toLocaleDateString('en-US', options);
  return day;
}
