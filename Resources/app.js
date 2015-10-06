// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Spesa Oggi',
    backgroundColor:'#fff',
    backgroundImage: 'postit1.jpg'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var casella = Ti.UI.createTextField({
	hintText:'Cosa devo comprare oggi?',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:20,
	height:60,
	color:'#009',
	width:'90%'
});

var table = Ti.UI.createTableView({
	backgroundColor:'transparent',
	top:80,
	left:20,
	right:20,
	bottom:40,
	editable:true
});

//win1.add(label1);
win1.add(casella);
win1.add(table);

casella.addEventListener('return', function() {
	table.appendRow({title:casella.value, backgroundColor:'transparent', color:'#009'});
	casella.value = '';
	casella.blur();
});

table.addEventListener('click', function(evento) {
	evento.row.hasCheck = true;
});

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Spesa Domani',
    backgroundColor:'#fff',
    backgroundImage:'postit2.jpg'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
