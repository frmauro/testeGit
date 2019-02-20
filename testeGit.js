var Pessoa = (function(){
	
	//constructor function 
	function Task(){
	}
	
	Task.prototype.getName = function () {
         return this.Name;
     };

	Task.prototype.setName = function (name) {
         this.Name = name;
     };

	 
})()