// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const res = {
  days:document.querySelector("[data-days]"),
  hours:document.querySelector("[data-hours]"),
  minutes:document.querySelector("[data-minutes]"),
  seconds:document.querySelector("[data-seconds]")
}

function updateCountdownElements(res, remainingTime) {
  res.days.textContent = addLeadingZero(remainingTime.days);
  res.hours.textContent = addLeadingZero(remainingTime.hours);
  res.minutes.textContent = addLeadingZero(remainingTime.minutes);
  res.seconds.textContent = addLeadingZero(remainingTime.seconds);
}

const activeBtn = document.querySelector("[data-start]");
activeBtn.setAttribute("disabled", "disabled")

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

 
  function convertMs(ms) {
   
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
  
    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

 
  const datetimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onChange([selectedDate]) {
      
      if (selectedDate >= Date.now()) {
        activeBtn.removeAttribute("disabled");
      } else {
        activeBtn.setAttribute("disabled", "disabled");
        Notiflix.Notify.failure("Please choose a date in the future");
      }
    },
  });

 
 
  activeBtn.addEventListener("click", () => {
   
    const selectedDate = datetimePicker.selectedDates[0];
  
    const currentDate = Date.now();
   
    const timeDifference = selectedDate - currentDate;

   
    const timerInterval = setInterval(() => {
      
      if (Date.now() >= selectedDate) {
        clearInterval(timerInterval);       
        return;
      }
      
      const remainingTime = convertMs(selectedDate - Date.now());

      updateCountdownElements(res, remainingTime);
     
    }, 1000);
  });





