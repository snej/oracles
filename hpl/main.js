var NumItems = 4; // constant
var Oracle;
var Heading, Result, ResultList;

function setup() {
  Heading = document.getElementById("heading");
  ResultList = document.getElementById("result");
  if (Oracles.length > 1)
    showIndex();
  else
    showOracle(0);
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
  document.body.className = "oracle_"+index;
  Heading.innerText = Heading.textContent = OracleNames[index];
  Oracle = Oracles[index];
  reloadOracle();
}
  
function reloadOracle() {
  clearOracle();
  var sayings = choose(Oracle, NumItems);
  for (var i=0; i<sayings.length; ++i) {
    ResultList.appendChild(layoutSaying(sayings[i]));
  }
}

function layoutSaying(saying) {
  if (typeof saying == "string")
    saying = {"text": saying};
  span = document.createElement("SPAN");
  span.innerText = span.textContent = saying.text;
  item = document.createElement("LI");
  item.appendChild(span);
  if (saying.style)
    item.className = saying.style;
  var rot = (Math.random() - 0.5) * 10;
  item.style["-webkit-transform"] = item.style.MozTransform = "rotate("+rot+"deg)";
  
  return item;
}
  
function clearOracle() {
  while (ResultList.firstChild)
    ResultList.removeChild(ResultList.firstChild);
}
  
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function choose(oracle, n) {
  n = Math.min(n, oracle.length);
  result = n > 1 ? choose(oracle, n-1) : [];
  
  var lastStyle;
  if (result.length > 0) {
    var last = result[result.length - 1];
    if (typeof last == "object")
      lastStyle = last.style;
  }
  
  var choice;
  do {
    choice = randomItem(oracle);
    var sameStyle = (lastStyle && typeof choice == "object" && choice.style == lastStyle);
  } while (sameStyle || result.indexOf(choice) >= 0);
  return result.concat(choice);
}
