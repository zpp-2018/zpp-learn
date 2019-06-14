function StopWatch()
{
	this.startTime = null;
	this.stopTime = null;
	this.time = null;

	this.Start = function(){
		this.startTime = new Date();
	}

	this.Stop = function(){
		this.stopTime = new Date();
		this.time = this.stopTime - this.startTime;
	}
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}