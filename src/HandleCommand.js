import { help, invalid, dir, files } from "./Response.js";

function handleCommand(path, input, setPath) {
  input = input.trimLeft().trimRight();
  switch (input) {
    case 'help':
      return input + '\n' + help;
    case 'cls':
      return '0';
    case 'clear':
      return '0';
    case 'date':
      return input + '\n' + getDate();
    case 'pwd':
      return input + '\n' + path;
    case 'reboot':
      location.reload();
      break;
    case 'cd':
      setPath('~');
      return input;
    default:
      return helper(path, input, setPath);
  }
}
function helper(path, input, setPath) {
  if (input.slice(0, 4) === 'echo') {
    return input + '\n' + input.slice(4,);
  }
  if (input === 'ls') {
    let res = ''
    if (dir[path]) {
      dir[path].map((item) => {
        if (item[item.length - 1] == '*') {
          res += item + '\t';
        } else {
          res += item + '\t';
        }
      })
      return input + '\n' + res;
    }
    else {
      return input;
    }
  }
  if (input.slice(0, 2) === 'cd') {
    const newPath = input.slice(2,).trimLeft().trimRight();
    if (newPath !== '..' && dir[path].find(obj => obj === newPath + '/')) {
      setPath(path + '/' + newPath);
      return input;
    }
    else if (newPath === '..') {
      console.log('Path: ', path);
      const lastSlash = path.lastIndexOf('/');
      console.log(lastSlash);
      if (lastSlash != -1) {
        setPath(path.slice(0, lastSlash));
      }
      return input;
    }
    else {
      return input + "\ncd: The directory '" + newPath + "' does not exists";
    }
  }
  if (input.slice(0, 3) === 'cat') {
    const newPath = input.slice(3,).trimLeft().trimRight();
    if (files[path + '/' + newPath]) {
      return input + '\n' + files[path + '/' + newPath];
    }
    else {
      return input + '\n' + 'cat: ' + newPath + 'either file does not exist or not a valid file for cat.'
    }
  }
  if (input.slice(0, 2) === './' || input.slice(0, 2) === '.\\') {
    const executable = input.slice(2,).trimRight();
    if (dir[path].find(obj => obj == executable + '*') || (dir[path].find(obj => obj == executable) && executable.slice(executable.length - 3,) === '.ln')) {
      window.open(files[path + '/' + executable], '_blank');
      return input + '\n' + 'If you are unable to see a pop-up, kindly allow us to send pop-ups.'
    }

  }


  return input + '\n' + invalid;
}

function getDate() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDay();
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let res = '';
  res += daysOfWeek[day] + ' ';
  res += date + ' ';
  res += monthsOfYear[month] + ' ';
  res += year + ' ';
  res += hours + ':' + minutes + ':' + seconds + ' ' + timeZone;
  return res;
}


export default handleCommand;
