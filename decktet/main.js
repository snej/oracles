var Oracle;
var Heading, Result, ResultList;

function setup() {
  Heading = document.getElementById("heading");
  ResultList = document.getElementById("result");
  if (Oracles.length == 1)
      showOracle(0);
  else
      showIndex();
}

function showIndex() {
  document.body.className = "index";
  Heading.innerText = Heading.textContent = "Choose An Oracle:";
  clearOracle();
  for (var i = 0; i < OracleNames.length; ++i) {
    var link = document.createElement("A");
    link.href = "#";
    link.index = i;
    link.onclick = function() {showOracle(this.index);};
    link.innerText = link.textContent = OracleNames[i];
    item = document.createElement("LI");
    item.appendChild(link);
    ResultList.appendChild(item);
  }
}

function showOracle(index) {
  document.body.className = "oracle_"+ 1;//index;
  Heading.innerText = Heading.textContent = "";// OracleNames[index];
  Oracle = Oracles[index];
  reloadOracle();
}
  
function reloadOracle(delay) {
  clearOracle();
  setTimeout(function() {
      var sayings = choose(Oracle, NumItems);
      for (var i=0; i<sayings.length; ++i) {
        ResultList.appendChild(layoutSaying(sayings[i]));
      }
  }, delay);
}

function layoutSaying(saying) {
    if (typeof saying == "string") saying = {
        "text": saying
    };
    var item = document.createElement("LI");
    if (saying.title) {
        var title = document.createElement("H1");
        title.innerText = title.textContent = saying.title;
        item.appendChild(title);
        title.onclick = function(){reloadOracle(300);};
    }

    var span = document.createElement("SPAN");
    span.innerText = span.textContent = saying.text;
    item.appendChild(span);
    
    if (saying.img) {
        var card = document.createElement("IMG");
        card.src = "card_images/" + saying.img + ".jpg";
        var rot = (Math.random() - 0.5) * 10;
        card.style["-webkit-transform"] = card.style.MozTransform = "rotate(" + rot + "deg)";
        card.onclick = zoomCard;
        item.appendChild(card);
    }

    if (saying.style)
        item.className = saying.style;

    return item;
}


function zoomCard(event) {
    console.log("zoom");
    this.className = this.className ? "" : "zoomed";
    event.preventDefault();
    return false;
}
  
  
function clearOracle() {
  while (ResultList.firstChild)
    ResultList.removeChild(ResultList.firstChild);
}
  
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function choose(oracle, n) {
  result = n > 1 ? choose(oracle, n-1) : [];
  var choice;
  do {
    choice = randomItem(oracle);
  } while (result.indexOf(choice) >= 0);
  return result.concat(choice);
}
