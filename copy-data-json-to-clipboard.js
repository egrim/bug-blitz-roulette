// Paste this into the javascript console in the blitz doc to get the data-id's
// needed in data.json
var data_ids = JSON.stringify(Array.from(document.querySelectorAll('div[data-id="KYFACA0fbER"] ~ div[data-section-style="3"')).map(x => x.getAttribute('data-id')));

var dummy = document.createElement("input");
document.body.appendChild(dummy);
dummy.setAttribute("id", "dummy_id");
document.getElementById("dummy_id").value=data_ids;
dummy.select();
document.execCommand("copy");
document.body.removeChild(dummy);
