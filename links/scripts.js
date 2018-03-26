function extensioncheck() {
  if (localStorage.getItem('deg') === null && localStorage.getItem('text') === null && localStorage.getItem('logourl') === null && localStorage.getItem('flagurl') === null) return;
  document.getElementById('html').setAttribute("style", "background:linear-gradient(" + localStorage.getItem('deg') + "," + localStorage.getItem('grad1') + "," + localStorage.getItem('grad2') + ");");
  for (var i = 0; i < document.getElementsByClassName('textbox').length; i++) {
    document.getElementsByClassName('textbox')[i].setAttribute("style", "color:" + localStorage.getItem('text') + ";");
  }
  document.getElementById('img1').setAttribute("src", localStorage.getItem('logourl'));
  document.getElementById('progflag').setAttribute("src", localStorage.getItem('flagurl'));
  document.getElementById('incount').setAttribute("value", localStorage.getItem('countval'));
  document.getElementById('help').setAttribute("style", "color:" + localStorage.getItem('text') + ';');
}

function tS2I(val) {
  if (val === '') '' === 0;
  var mins_secs = val.split(':');
  var mins = mins_secs[0];
  return (mins ? parseInt(mins) * 60 : 0) + parseInt(mins_secs[1]);
}

function flashy(name) {
  if (document.getElementById('timer' + name).style.color === '') {
    document.getElementById('timer' + name).style.color = '#ffffff';
    if (localStorage.getItem('grad1') === null) {
      document.getElementById('timer' + name).style.background = '#ff0000';
    }
    else {
      document.getElementById('timer' + name).style.background = localStorage.getItem('grad1');
    }
  }
  else {
    document.getElementById('timer' + name).style = '';
  }
}

function setIntervalX(callback, delay, repetitions) {
  var x = 0;
  var intervalID = window.setInterval(function() {
    callback();
    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
}

function tI2S(val) {
  return Math.floor(val / 60) + ':' + (val % 60 < 10 ? '0' : '') + (val % 60);
}

function loadTime(val) {
  document.getElementById('timermain').value = document.getElementById(val + 'box').value;
  localStorage.setItem('gavel', localStorage.getItem('gavel' + val));
}

function pauseTimer(name) {
  clearInterval(intervals[name]);
  intervals[name] = null;
}
var timer = document.getElementsByClassName('timer');
for (var i = 0; i < timer.length; i++) {
  timer[i].addEventListener('keyup', function(e) {
    if (this.value.length == 2) this.value = this.value + ":";
    if (this.value.length > 5) this.value = this.value.substr(0, this.value.length - 1);
  });
}
var counter1 = 1;

function imagechange() {
    if (localStorage.getItem('flagchange') === '') {
        if (removeNumber(document.getElementById('inp' + counter1).value.toLowerCase()) === null || removeNumber(document.getElementById('inp' + counter1).value.toLowerCase()) === '') return;
        incount.value = document.getElementById('inp' + counter1).value;
        document.getElementById('inp' + counter1).setAttribute('style', 'background-color:rgba(255,255,0,0.3)');
        if (counter1 != 1) {
            document.getElementById('inp' + (counter1 - 1)).setAttribute('style', 'text-decoration:line-through;');
            document.getElementById('inp' + (counter1 - 1)).setAttributeNode(document.createAttribute("disabled"));
        }
        counter1++;
        return;
    }
    else {
        var flagImage = document.querySelector('#flagarea > img');
        var flagInput = document.getElementById('inp' + counter1);
        var flagSelect = removeNumber(flagInput.value.toLowerCase());
        if (flagSelect === null || flagSelect === '') return;
        flagImage.src = 'images/flags/' + flagSelect + '.svg';
        flagImage.onerror = function() {
            scell(flagInput);
        };
        incount.value = flagInput.value;
        flagInput.setAttribute('style', 'background-color:rgba(255,255,0,0.3)');
        if (counter1 != 1) {
            document.getElementById('inp' + (counter1 - 1)).setAttribute('style', 'text-decoration:line-through;');
            counter1++;
            return;
        }
        counter1++;
    }
}

function scell(val) {
  $.ajax({
    type: 'GET',
    url: "https://api.gettyimages.com:443/v3/search/images?exclude_nudity=true&page_size=1&phrase=" + val.value + "&sort_order=most_popular",
    beforeSend: function(request) {
      request.setRequestHeader("Api-Key", 'qbzsagxxtxh8ssyacqe4xqjw');
    }
  }).done(function(data) {
    $('datalist').append("<option value='" + val.value + "'>");
    $("#progflag").attr("src", data.images[0].display_sizes[0].uri);
  });
}

function removeNumber(s) {
  i = s.lastIndexOf(' ');
  if (isNaN(parseInt(s.substring(i + 1)))) {
    return s;
  }
  else {
    return s.substring(0, i);
  }
}
var counter2 = 21;

function addspeakers() {
  for (i = 0; i < 10; i++) {
    input = document.getElementById('sprow').appendChild(document.createElement('input'));
    input.setAttribute('list', 'speakers');
    input.placeholder = 'Speaker ' + counter2;
    input.id = 'inp' + counter2;
    counter2++;
  }
}

function initaddspeakers() {
  for (i = 1; i < 21; i++) {
    input = document.getElementById('sprow').appendChild(document.createElement('input'));
    input.setAttribute('list', 'speakers');
    input.placeholder = 'Speaker ' + i;
    input.id = 'inp' + i;
  }
}

function startTimer(name) {
  var timer = document.getElementById('timer' + name);
  if (intervals[name] || timer.value === 0) return;
  intervals[name] = setInterval(function() {
    var rem = tS2I(timer.value);
    if (isNaN(rem) === true) return;
    if (rem <= 0) {
      setIntervalX(function() {
        flashy(name);
      }, 500, 4);
      if (localStorage.getItem('gavel') === 'x' || name === 'caucus') {
        new Audio('links/audio.mp3').play();
      }
      clearInterval(intervals[name]);
      intervals[name] = null;
      return;
    }
    rem--;
    timer.value = tI2S(rem);
  }, 1000);
}

document.getElementById("morespeakers").onclick = function() {
  addspeakers();
};
document.getElementById("rightbottom").onclick = function() {
  pauseTimer("main");
  loadTime("speech");
  imagechange();
};
document.getElementById("startmainbutton").onclick = function() {
  startTimer("main");
};
document.getElementById("pausemainbutton").onclick = function() {
  pauseTimer("main");
};
document.getElementById("speechbutton").onclick = function() {
  pauseTimer("main");
  loadTime("speech");
};
document.getElementById("commentbutton").onclick = function() {
  pauseTimer("main");
  loadTime("comment");
};
document.getElementById("starttopbutton").onclick = function() {
  startTimer("caucus");
};
document.getElementById("pausetopbutton").onclick = function() {
  pauseTimer("caucus");
};
document.getElementById("help").onclick = function() {
  window.open('links/help.html');
};
document.getElementById("sc").addEventListener("dragstart", function(e) {
  var img = document.createElement("img");
  img.src = ("data:image/jpeg;base64,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");
  e.dataTransfer.setDragImage(img, 80, 244);
}, false);
var intervals = {
  'main': null,
  'caucus': null
};
window.onbeforeunload = function(event) {
    event.returnValue = "Heyya thanks for checkin out my code! U+1F609";
};
initaddspeakers();
extensioncheck();