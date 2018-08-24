var pname = '';
var choice = '';
var sheet = '';



//send flair selection to bot
function sendflair() {
  //checks if flair is selected
  if (choice === '') {
    alert ("Select a flair first!");
    //prevents window from opening
    return;
  }

  txt = (document.getElementById("text").value);
  window.open("http://www.reddit.com/message/compose/?to=anton_bot&subject=flair&message=" + choice + "," + txt);
}



//CURRENT SELECTION
function fselect(vnum) {

  var current = document.getElementsByName(vnum)[0];

  //Remove all
  $('.selected').removeClass('selected');

  //Add to current
  current.className += " selected";

  //modulo to 'reset' the flair number
  if (modNum = vnum % 800 == 0)
    modNum = 800;
  else
    modNum = vnum % 800;

  //assigns correct spritesheet
  if (isNaN(vnum) || vnum >= 4000) {
    sheet = 'z';
    choice = vnum+' '+sheet;

    //get classes and split
    zpre = current.className;
    zpos = zpre.split(' flair-');

    choice = zpos[1]+' '+sheet;
    pname = 'flair-'+zpos[1]+' flair-'+sheet;
  }
  else if (vnum > 2400) {
    sheet = 's4';
    pname = 'flair-'+modNum+' flair-'+sheet;

    //get classes and split
    zpre = current.className;
    zpos = zpre.split(' flair-');

    choice = zpos[1]+' '+sheet;
    pname = 'flair-'+zpos[1]+' flair-'+sheet;
  }
  else if (vnum > 1600) {
    sheet = 's3';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (vnum > 800) {
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
  if (modNum = search % 800 == 0)
    modNum = 800;
  else
    modNum = search % 800;

  //assigns correct spritesheet
  if (search > 2400) {
    sheet = 's4';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (search > 1600) {
    sheet = 's3';
    pname = 'flair-'+modNum+' flair-'+sheet;
    choice = modNum+' '+sheet;
  }
  else if (search > 800) {
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




//show donation text
function show(){
  document.getElementById('donate').style.height = "190px";
  document.getElementById('show').style.height = "0";
  document.getElementById('show').style.overflow = "hidden";
}

//hide donation text
function hide(){
  document.getElementById('donate').style.height = "60px";
  document.getElementById('show').style.visibility = "visible";
  document.getElementById('show').style.height = "16px";
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
