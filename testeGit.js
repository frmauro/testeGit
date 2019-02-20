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


	Task.prototype.getDocument = function () {
         return this.Document;
     };

	Task.prototype.setDocument = function (_document) {
         this.Document = _document;
     };

	 
})()