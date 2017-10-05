var x = document.getElementById("myNav");

activateHome = "";
activateAbout = "";
activateProjects = "";
activateTutorials = "";
if (x.classList.contains("home")) {
	activateHome = "active";
}
else if (x.classList.contains("about")) {
	activateAbout = "active";
}
else if (x.classList.contains("projects")) {
	activateProjects = "active";
}
else if (x.classList.contains("tutorials")) {
    activateTutorials = "active";
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
            	'<a href="index.html" class="navbar-brand" id="AK-brand">AK</a>'+
            '</div>'+
            '<!-- menu -->'+
            '<div class="collapse navbar-collapse" id="mainNavBar">'+
            	'<ul class="nav navbar-nav">'+
                	'<li class="' + activateHome + '"><a href="index.html">Home</a></li>'+
                    	'<li class="' + activateAbout + '"><a href="about_me.html">About Me</a></li>'+
                        '<li class="dropdown ' + activateTutorials + '">'+
                            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Tutorials<span class="caret"></span></a>'+
                            '<ul class="dropdown-menu">'+
                                '<li><a href="I2C.html">I<sup>2</sup>C</a></li>'+
                                '<li><a href="MPU6050.html">MPU6050</a></li>'+
				'<li><a href="tictoc.html">Measuring Time on AVRs</a></li>'+
                                '<li><a href="MRI.html">MRI</a></li>'+
                            '</ul>'+
                        '</li>'+
                    	'<li class="dropdown ' + activateProjects + '">'+
                    		'<a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects<span class="caret"></span></a>'+
                        	'<ul class="dropdown-menu">'+
                        		'<li><a href="quad.html">ATmega Quadcopter</a></li>'+
                   			    '<li><a href="SGM.html">Serial Grahing Monitor</a></li>'+
                        	'</ul>'+
                    	'</li>'+
			'<li><a href="https://github.com/axkralj990">GitHub Page</a></li>'+
                '</ul>'+
            '</div>'+
    	'</div>'+
    '</nav>';
