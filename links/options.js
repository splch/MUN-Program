function save(id, type) {
  var element = document.getElementById(id);
  if (type === 'toggle') {
    if (element.value === 'x') {
      element.value = '';
    }
    else {
      element.value = 'x';
    }
  }
  localStorage.setItem(id, element.value);
}

function reload(val) {
  if (val === 'all') {
    window.location.reload();
  }
  else {
    document.getElementById('index').contentWindow.location.reload();
  }
}

function changedesign() {
  var pref = document.getElementById('select').value;
  if (pref === 'default') {
    localStorage.setItem('grad1', '#0066cc');
    localStorage.setItem('grad2', '#cccccc');
    localStorage.setItem('deg', '135deg');
    localStorage.setItem('text', '#ffffff');
    localStorage.setItem('logourl', 'images/logos/logo.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Model United Nations');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'mvhs') {
    localStorage.setItem('grad1', '#000000');
    localStorage.setItem('grad2', '#990000');
    localStorage.setItem('deg', '25deg');
    localStorage.setItem('text', '#ffff00');
    localStorage.setItem('logourl', 'images/logos/mvhs.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Welcome to MVHS MUN!');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'thhs') {
    localStorage.setItem('grad1', '#000099');
    localStorage.setItem('grad2', '#666666');
    localStorage.setItem('deg', '25deg');
    localStorage.setItem('text', '#cccccc');
    localStorage.setItem('logourl', 'images/logos/thhs.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Welcome to THHS MUN!');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'eths') {
    localStorage.setItem('grad1', '#cc9933');
    localStorage.setItem('grad2', '#000099');
    localStorage.setItem('deg', '30deg');
    localStorage.setItem('text', '#ffffff');
    localStorage.setItem('logourl', 'images/logos/eths.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Welcome to El Toro MUN!');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'ucb') {
    localStorage.setItem('grad1', '#cc9900');
    localStorage.setItem('grad2', '#000066');
    localStorage.setItem('deg', '340deg');
    localStorage.setItem('text', '#cccccc');
    localStorage.setItem('logourl', 'images/logos/ucb.svg');
    localStorage.setItem('flagurl', 'images/flags/ucb.svg');
    localStorage.setItem('countval', 'Welcome to Berkeley MUN');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'su') {
    localStorage.setItem('grad1', '#990000');
    localStorage.setItem('grad2', '#003300');
    localStorage.setItem('deg', '30deg');
    localStorage.setItem('text', '#ffffff');
    localStorage.setItem('logourl', 'images/logos/su.svg');
    localStorage.setItem('flagurl', 'images/flags/su.svg');
    localStorage.setItem('countval', 'Welcome to Stanford MUN');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'cmu') {
    localStorage.setItem('grad1', '#cc0033');
    localStorage.setItem('grad2', '#333333');
    localStorage.setItem('deg', '120deg');
    localStorage.setItem('text', '#ffffff');
    localStorage.setItem('logourl', 'images/logos/cmu.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Carnegie Mellon MUN');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  if (pref === 'ivc') {
    localStorage.setItem('grad1', '#ffffff');
    localStorage.setItem('grad2', '#0000cc');
    localStorage.setItem('deg', '60deg');
    localStorage.setItem('text', '#ffffff');
    localStorage.setItem('logourl', 'images/logos/ivc.svg');
    localStorage.setItem('flagurl', 'images/flags/united%20nations.svg');
    localStorage.setItem('countval', 'Irvine Valley College MUN');
    localStorage.setItem('gavelspeech', 'x');
    localStorage.setItem('gavelcomment', '');
    localStorage.setItem('flagchange', 'x');
  }
  else {
    return;
  }
}

document.getElementById("grad1").onchange = function() {
  save('grad1'), reload();
};
document.getElementById("grad2").onchange = function() {
  save('grad2'), reload();
};
document.getElementById("deg").onchange = function() {
  save('deg'), reload();
};
document.getElementById("text").onchange = function() {
  save('text'), reload();
};
document.getElementById("logourl").onchange = function() {
  save('logourl'), reload();
};
document.getElementById("flagurl").onchange = function() {
  save('flagurl'), reload();
};
document.getElementById('countval').onchange = function() {
  save('countval'), reload();
};
document.getElementById("select").onchange = function() {
  changedesign(), reload('all');
};
document.getElementById('gavelspeech').onclick = function() {
  save('gavelspeech', 'toggle');
};
document.getElementById('gavelcomment').onclick = function() {
  save('gavelcomment', 'toggle');
};
document.getElementById('flagchange').onclick = function() {
  save('flagchange', 'toggle');
};

document.getElementById('grad1').setAttribute("value", localStorage.getItem('grad1'));
document.getElementById('grad2').setAttribute("value", localStorage.getItem('grad2'));
document.getElementById('deg').setAttribute("value", localStorage.getItem('deg'));
document.getElementById('text').setAttribute("value", localStorage.getItem('text'));
document.getElementById('gavelspeech').setAttribute("value", localStorage.getItem('gavelspeech'));
document.getElementById('gavelcomment').setAttribute("value", localStorage.getItem('gavelcomment'));
document.getElementById('flagchange').setAttribute("value", localStorage.getItem('flagchange'));
document.getElementById('logourl').setAttribute("value", localStorage.getItem('logourl'));
document.getElementById('flagurl').setAttribute("value", localStorage.getItem('flagurl'));
document.getElementById('countval').setAttribute("value", localStorage.getItem('countval'));