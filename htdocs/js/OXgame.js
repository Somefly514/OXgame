(function () {
	'use strict';

	function createtable(number, h) {
	  var classdata = document.createElement(h);
	  classdata.id = number;
	  return classdata;
	}

	var turn = 0;
	var winarray = [["abox", "bbox", "cbox"], ["dbox", "ebox", "fbox"], ["gbox", "hbox", "ibox"], ["abox", "dbox", "gbox"], ["bbox", "ebox", "hbox"], ["cbox", "fbox", "ibox"], ["abox", "ebox", "ibox"], ["cbox", "ebox", "gbox"]];
	var OXarray = [];
	var Oarray = [];
	var Xarray = [];

	function cleartable(e) {
	  OXarray = [];
	  Oarray = [];
	  Xarray = [];
	  turn = 0;
	}

	function starttable(e) {
	  var gametext = createtable("gametext", "div");
	  var startBT = createtable("startBT", "button");
	  gametext.style.display = "flex";
	  gametext.style.border = "solid";
	  gametext.style.height = "40vh";
	  gametext.style.width = "75vh";
	  gametext.style.alignItems = "center";
	  gametext.style.textAlign = "center";
	  gametext.innerText = "這是一個廢廢的OOXX遊戲";
	  gametext.style.justifyContent = "center";
	  startBT.style.display = "flex";
	  startBT.style.height = "10vh";
	  startBT.style.width = "30vh";
	  startBT.style.alignItems = "center";
	  startBT.style.textAlign = "center";
	  startBT.style.fontWeight = "bold";
	  startBT.innerText = "開始遊戲";
	  document.body.appendChild(gametext);
	  document.body.appendChild(startBT);
	  document.body.style.display = "flex";
	  document.body.style.flexDirection = "column";
	  document.body.style.alignItems = "center";
	  startBT.addEventListener("click", function () {
	    document.body.removeChild(startBT);
	    document.body.removeChild(gametext);
	    gametable();
	  });
	}

	function Owintable(e) {
	  var Otext = createtable("Otext", "div");
	  var OBT = createtable("OBT", "button");
	  Otext.style.display = "flex";
	  Otext.style.border = "solid";
	  Otext.style.height = "40vh";
	  Otext.style.width = "75vh";
	  Otext.style.alignItems = "center";
	  Otext.style.textAlign = "center";
	  Otext.innerText = "O贏了";
	  Otext.style.justifyContent = "center";
	  OBT.style.display = "flex";
	  OBT.style.height = "10vh";
	  OBT.style.width = "30vh";
	  OBT.style.alignItems = "center";
	  OBT.style.textAlign = "center";
	  OBT.style.fontWeight = "bold";
	  OBT.innerText = "重新開始遊戲";
	  document.body.appendChild(Otext);
	  document.body.appendChild(OBT);
	  document.body.style.display = "flex";
	  document.body.style.flexDirection = "column";
	  document.body.style.alignItems = "center";
	  OBT.addEventListener('click', function () {
	    document.body.removeChild(Otext);
	    document.body.removeChild(OBT);
	    starttable();
	  });
	}

	function Xwintable(e) {
	  var Xtext = createtable("Xtext", "div");
	  var XBT = createtable("XBT", "button");
	  Xtext.style.display = "flex";
	  Xtext.style.border = "solid";
	  Xtext.style.height = "40vh";
	  Xtext.style.width = "75vh";
	  Xtext.style.alignItems = "center";
	  Xtext.style.textAlign = "center";
	  Xtext.innerText = "X贏了";
	  Xtext.style.justifyContent = "center";
	  XBT.style.display = "flex";
	  XBT.style.height = "10vh";
	  XBT.style.width = "30vh";
	  XBT.style.alignItems = "center";
	  XBT.style.textAlign = "center";
	  XBT.style.fontWeight = "bold";
	  XBT.innerText = "重新開始遊戲";
	  document.body.appendChild(Xtext);
	  document.body.appendChild(XBT);
	  document.body.style.display = "flex";
	  document.body.style.flexDirection = "column";
	  document.body.style.alignItems = "center";
	  XBT.addEventListener('click', function () {
	    document.body.removeChild(Xtext);
	    document.body.removeChild(XBT);
	    starttable();
	  });
	}

function Dtable(e) {
	  var Dtext = createtable("Dtext", "div");
	  var DBT = createtable("DBT", "button");
	  Dtext.style.display = "flex";
	  Dtext.style.border = "solid";
	  Dtext.style.height = "40vh";
	  Dtext.style.width = "75vh";
	  Dtext.style.alignItems = "center";
	  Dtext.style.textAlign = "center";
	  Dtext.innerText = "平局";
	  Dtext.style.justifyContent = "center";
	  DBT.style.display = "flex";
	  DBT.style.height = "10vh";
	  DBT.style.width = "30vh";
	  DBT.style.alignItems = "center";
	  DBT.style.textAlign = "center";
	  DBT.style.fontWeight = "bold";
	  DBT.innerText = "重新開始遊戲";
	  document.body.appendChild(Dtext);
	  document.body.appendChild(DBT);
	  document.body.style.display = "flex";
	  document.body.style.flexDirection = "column";
	  document.body.style.alignItems = "center";
	  DBT.addEventListener('click', function () {
	    document.body.removeChild(Dtext);
	    document.body.removeChild(DBT);
	    starttable();
	  });
	}

	function gametable(e) {
	  console.log("OXgame.js is work");
	  document.body.style.display = "flex";
	  document.body.style.flexDirection = "column";
	  document.body.style.alignItems = "center";

	 function createframe(number, h) {
	    var classname = document.createElement(h);
	    classname.id = number;
	    classname.style.borderStyle = "solid";
	    classname.style.height = "18vh";
	    classname.style.width = "18vh";
	    classname.style.textAlign = "center";
	    classname.style.align = "center";
	    classname.style.fontSize = "75px";
	    classname.style.lineHeight = "1.5";
	    classname.addEventListener("click", function () {
	      round(classname), wincheck(), tablefull();
	    });
	    classname.addEventListener("click", function () {
	      console.log(Oarray), console.log(Xarray);
	    });
	    return classname;
	  }

	  function round(e) {
	    if (e.innerText == "" && turn == 0) {
	      e.innerText = "O";
	      turn = 1;
	      Oarray.push(e.id);
	      OXarray.push(e.id);
	    } else if (e.innerText == "" && turn == 1) {
	      e.innerText = "X";
	      turn = 0;
	      Xarray.push(e.id);
	      OXarray.push(e.id);
	    }
	  }

	  function tablefull(e) {
	    for (var i = 0; i < winarray.length; i++) {
	      if (OXarray.length == 9)  
		  {
	        gameborder.addEventListener("click", function () {
	          document.body.removeChild(gameborder);
	          Dtable();
	        });
			
	        cleartable();
	      };
	    }
	  }

	  function wincheck(e) {
	    for (var i = 0; i < winarray.length; i++) {
	      var Owin = Oarray.includes(winarray[i][0]) && Oarray.includes(winarray[i][1]) && Oarray.includes(winarray[i][2]);
	      var Xwin = Xarray.includes(winarray[i][0]) && Xarray.includes(winarray[i][1]) && Xarray.includes(winarray[i][2]);

	      if (Owin == true) {
	        gameborder.addEventListener("click", function () {
	          document.body.removeChild(gameborder);
	          Owintable();
	        });
	        cleartable();
	      } else if (Xwin == true) {
	        gameborder.addEventListener("click", function () {
	          document.body.removeChild(gameborder);
	          Xwintable();
	        });
			
	        cleartable();
	      }
		  
	    }
	  }
	  /*let word = document.createTextNode("這是一段測試文字");
	  let word2 = document.createTextNode("這是二段測試文字");
	  let word3 = document.createTextNode("這是三段測試文字");
	  document.body.style.display = "flex";
	  
	  
	  //let awa = document.createElement('awadata');
	  let awa = createframe("awadata","div");
	  awa.appendChild(word);
	  awa.style.borderStyle = "solid";//使用flexbox這個類別
	  
	  awa.style.height = "30vh";
	  awa.style.width = "30vh";//假如遇到justify-content改成後面大寫
	  
	  
	  let bwb = createframe("bwbdata","div");
	  bwb.appendChild(word2);
	  bwb.style.borderStyle = "solid";
	  bwb.style.height = "30vh";
	  bwb.style.width = "30vh";
	  
	  let cwc = createframe("cwcdata","div");
	  cwc.appendChild(word3);
	  cwc.style.borderStyle = "solid";
	  cwc.style.width="30vh";
	  cwc.style.height = "30vh";
	  */

	  var gameborder = createtable("gameborder", "div");
	  var abox = createframe("abox", "div");
	  var bbox = createframe("bbox", "div");
	  var cbox = createframe("cbox", "div");
	  var dbox = createframe("dbox", "div");
	  var ebox = createframe("ebox", "div");
	  var fbox = createframe("fbox", "div");
	  var gbox = createframe("gbox", "div");
	  var hbox = createframe("hbox", "div");
	  var ibox = createframe("ibox", "div");
	  var startword = document.createTextNode("開始遊戲");
	  gameborder.appendChild(abox);
	  gameborder.appendChild(bbox);
	  gameborder.appendChild(cbox);
	  gameborder.appendChild(dbox);
	  gameborder.appendChild(ebox);
	  gameborder.appendChild(fbox);
	  gameborder.appendChild(gbox);
	  gameborder.appendChild(hbox);
	  gameborder.appendChild(ibox);
	  document.body.appendChild(gameborder);
	  gameborder.style.display = "flex";
	  gameborder.style.border = "solid";
	  gameborder.style.height = "66vh";
	  gameborder.style.width = "66vh";
	  gameborder.style.flexWrap = "wrap";
	  gameborder.style.justifyContent = "center";
	  gameborder.style.alignItems = "center"; //vh=view height 網頁觀看的高度,vw = view width 網頁觀看的寬度

	  /*	let startBT = createframe("startBT","button");
	  	startBT.style.display = "flex";
	  	startBT.style.border = "solid";
	  	startBT.style.height="10vh";
	  	startBT.style.width = "30vh";
	  	
	  	startBT.appendChild(startword);
	  	document.body.appendChild(startBT);
	  	*/
	}

	window.addEventListener('load', function () {
	  starttable();
	});

}());
//# sourceMappingURL=OXgame.js.map
