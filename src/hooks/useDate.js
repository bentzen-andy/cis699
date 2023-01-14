export function formatDate(d) {
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  let hours = d.getHours();
  let minutes = addLeadingZero(d.getMinutes());
  let amOrPm = +hours >= 12 ? "PM" : "AM";
  hours = hours <= 12 ? hours : hours % 12;
  return `${month + 1}/${day}/${year} ${hours}:${minutes} ${amOrPm}`;
}

function addLeadingZero(n) {
  return n < 10 ? `0${n}` : n;
}
