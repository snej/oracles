var NumItems = 4; // constant
var Oracle;
var Heading, Result, ResultList;

function setup() {
  Heading = document.getElementById("heading");
  ResultList = document.getElementById("result");
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
  document.body.className = "oracle_"+index;
  Heading.innerText = Heading.textContent = OracleNames[index];
  Oracle = Oracles[index];
  reloadOracle();
}
  
function reloadOracle() {
  clearOracle();
  var sayings = choose(Oracle, NumItems);
  for (var i=0; i<sayings.length; ++i) {
    item = document.createElement("LI");
    item.innerText = item.textContent = "…" + sayings[i] + "…";
    ResultList.appendChild(item);
  }
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
