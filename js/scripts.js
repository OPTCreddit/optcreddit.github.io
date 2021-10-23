var pname = '';
var choice = '';
var sheet = '';

//workaround to get checkbox and text box working together
function globalText() {
 txt = (document.getElementById("text").value);
}

//set same flair text
function setSame(checkbox) {
  var flairText = (document.getElementById("text").value);
  if (checkbox.checked) {
    txt = ">!same<";
  } else {
    txt = flairText;
  }
}

//send flair selection to bot
function sendflair() {
  //checks if flair is selected
  if (choice === '') {
    alert ("Select a flair first!");
    //prevents window from opening
    return;
  }

  if (txt == ">!same<") {
    //do nothing
  } else {
    txt = (document.getElementById("text").value);
  }

  window.open("http://www.reddit.com/message/compose/?to=aotius_bot&subject=flair&message=" + choice + "," + txt);
}

//CURRENT SELECTION
function fselect(vnum) {

  var current = document.getElementsByName(vnum)[0];

  //Remove all
  $('.selected').removeClass('selected');

  //Add to current
  current.className += " selected";

  //modulo to 'reset' the flair number
  if (modNum = vnum % 700 == 0)
    modNum = 700;
  else
    modNum = vnum % 700;

  //assigns correct spritesheet
  if (vnum > 2700) {
    sheet = 's5';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (vnum > 2100) {
    sheet = 's4';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (vnum > 1400) {
    sheet = 's3';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (vnum > 700) {
    sheet = 's2';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else {
    pname = 'flair-' + vnum;
    choice = modNum;
  }

  //Updates current flair selection preview
   document.getElementById("flair").className = "flair " + pname;
}


//SEARCH FORM
function fsearch() {
  var search = document.getElementById("search").value;

  //modulo to 'reset' the flair number
  if (modNum = search % 700 == 0)
    modNum = 700;
  else
    modNum = search % 700;

  //assigns correct spritesheet
  if (search > 2800) {
    sheet = 's5';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (search > 2100) {
    sheet = 's4';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (search > 1400) {
    sheet = 's3';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (search > 700) {
    sheet = 's2';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else {
    pname = 'flair-' + search;
    choice = modNum;
  }

  document.getElementById("flair").className = "flair " + pname;
}

$(document).ready(function() {
  $('#backtop').hide();

  //back to top scroll button
  $(window).scroll(function() {

      if ($(this).scrollTop()>0)
       {
          $('#backtop').fadeIn();
       }
      else
       {
        $('#backtop').fadeOut();
       }
   });

  //clears search form after enter
  $('form').submit(function() {
      $('#search').val(''); // clear the message box
  });
});
