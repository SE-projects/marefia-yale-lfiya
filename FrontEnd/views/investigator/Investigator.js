//new reservation display

dp.onTimeRangeSelected = function (args) {
  //var name = prompt("New event name:", "Event");
  //if (!name) return;

  var modal = new DayPilot.Modal();
  modal.closed = function() {
      dp.clearSelection();
      
      // reload all events
      var data = this.result;
      if (data && data.result === "OK") {
          loadEvents();
      }
  };
  modal.showUrl("reservation_new.php?start=" + args.start + "&end=" + args.end + "&resource=" + args.resource);
  
};














//load reservations

function loadEvents() {
  var start = dp.visibleStart();
  var end = dp.visibleEnd();

  $.post("backend_events.php", 
      {
          start: start.toString(),
          end: end.toString()
      },
      function(data) {
          dp.events.list = data;
          dp.update();
      }
  );













//function which is called on Submit button pressed

function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}
}












//function for validating userid
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}