var words = ['Electrozone...', "India's No.1 Electronics Shopping Website", 'One stop solution to all your Electronics needs..'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 110;
  // speed = 500;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        console.log("skip count "+skip_count);
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
        console.log("forward offset "+offset);
      }
      else {
        offset--;
        console.log("backward offset "+offset);
      }
    }
    $('.word').text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});