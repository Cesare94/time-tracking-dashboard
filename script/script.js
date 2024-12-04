document.addEventListener('DOMContentLoaded', function() {

 
  const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

console.log(data)
const btnDaily = document.getElementById('daily');
const btnWeekly = document.getElementById('weekly');
const btnMonthly = document.getElementById('monthly');
const work = document.getElementById('work');
const play = document.getElementById('play');
const study = document.getElementById('study');
const exercise = document.getElementById('exercise');
const social = document.getElementById('social');
const self = document.getElementById('self');


btnDaily.onclick = function() {
  work.innerHTML = `<h5>${data[0].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[0].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[0].timeframes.daily.previous}hrs</span>`;

  play.innerHTML = `<h5>${data[1].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[1].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[1].timeframes.daily.previous}hrs</span>`;

  study.innerHTML = `<h5>${data[2].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[2].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[2].timeframes.daily.previous}hrs</span>`;

  exercise.innerHTML = `<h5>${data[3].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[3].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[3].timeframes.daily.previous}hrs</span>`;

  social.innerHTML = `<h5>${data[4].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[4].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[4].timeframes.daily.previous}hrs</span>`;

  self.innerHTML = `<h5>${data[5].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[5].timeframes.daily.current}hrs</h1>` + `<span> Last week - ${data[5].timeframes.daily.previous}hrs</span>`;
  

}


btnWeekly.onclick = function() {
  work.innerHTML = `<h5>${data[0].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[0].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[0].timeframes.weekly.previous}hrs</span>`;

  play.innerHTML = `<h5>${data[1].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[1].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[1].timeframes.weekly.previous}hrs</span>`;

  study.innerHTML = `<h5>${data[2].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[2].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[2].timeframes.weekly.previous}hrs</span>`;

  exercise.innerHTML = `<h5>${data[3].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[3].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[3].timeframes.weekly.previous}hrs</span>`;

  social.innerHTML = `<h5>${data[4].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[4].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[4].timeframes.weekly.previous}hrs</span>`;

  self.innerHTML = `<h5>${data[5].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[5].timeframes.weekly.current}hrs</h1>` + `<span> Last week - ${data[5].timeframes.weekly.previous}hrs</span>`;
}



btnMonthly.onclick = function() {
  work.innerHTML = `<h5>${data[0].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[0].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[0].timeframes.monthly.previous}hrs</span>`;

  play.innerHTML = `<h5>${data[1].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[1].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[1].timeframes.monthly.previous}hrs</span>`;

  study.innerHTML = `<h5>${data[2].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[2].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[2].timeframes.monthly.previous}hrs</span>`;

  exercise.innerHTML = `<h5>${data[3].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[3].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[3].timeframes.monthly.previous}hrs</span>`;

  social.innerHTML = `<h5>${data[4].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[4].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[4].timeframes.monthly.previous}hrs</span>`;

  self.innerHTML = `<h5>${data[5].title}</h5>` +  `<img src="images/icon-ellipsis.svg">` + `<h1>${data[5].timeframes.monthly.current}hrs</h1>` + `<span> Last week - ${data[5].timeframes.monthly.previous}hrs</span>`;
}



}); 


  
