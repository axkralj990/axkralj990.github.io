var x = document.getElementById("myNav");

activateHome = "";
activateAbout = "";
activateProjects = "";
if (x.classList.contains("home")) {
	activateHome = "active";
}
else if (x.classList.contains("about")) {
	activateAbout = "active";
}
else if (x.classList.contains("projects")) {
	activateProjects = "active";
}

x.innerHTML = 
	'<nav class="navbar navbar-inverse navbar-fixed-top">'+
    	'<div class="container">'+
        	'<!-- navbar header -->'+
            '<div class="navbar-header">'+
        		'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '</button>'+
            	'<a href="index.html" class="navbar-brand" id="AK-brand">A-K</a>'+
            '</div>'+
            '<!-- menu -->'+
            '<div class="collapse navbar-collapse" id="mainNavBar">'+
            	'<ul class="nav navbar-nav">'+
                	'<li class="' + activateHome + '"><a href="index.html">Home</a></li>'+
                    	'<li class="' + activateAbout + '"><a href="about_me.html">About Me</a></li>'+
                    	'<!-- drop down menu -->'+
                    	'<li class="dropdown ' + activateProjects + '">'+
                    		'<a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects<span class="caret"></span></a>'+
                        	'<ul class="dropdown-menu">'+
                        		'<li><a href="quad.html">ATmega Quadcopter</a></li>'+
                   			'<li><a href="SGM_cs.html">Serial Grahing Monitor - C#</a></li>'+
                            		'<li><a href="SGM_python.html">Serial Graphing Monitor - Python</a></li>'+
                   			'<li><a href="AVR_misc.html">Smaller AVR Projects</a></li>'+
                        	'</ul>'+
                    	'</li>'+
			'<li><a href="https://github.com/axkralj990">GitHub Page</a></li>'+
                '</ul>'+
            '</div>'+
    	'</div>'+
    '</nav>';
