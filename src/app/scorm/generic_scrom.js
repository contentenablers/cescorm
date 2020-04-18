var moment = require('moment')
 /**
  * Scorm version 1.2
  */
 function GenericScorm($http, CEScormAPI)  {
      
     this.api = CEScormAPI || window.API
     this.http = $http;
 
     this.llocation = {}
     this.lsuspendData = '';
     this.ml_spdata = '';
     this.ttime = moment.duration();
 
     this.initializeScorm()
     this.initialize()
 }

 
 
 GenericScorm.prototype.initialize        = function() {
     var l = this.getLessonLocation()
     this.llocation = l.split('^');
 } 
 
 GenericScorm.prototype.initializeScorm   = function() {
     this.api.LMSInitialize()
 } 
 GenericScorm.prototype.setCompletion     = function(value) {
     console.log(value + ' Completed ' +this.api.version)
 }    
 GenericScorm.prototype.setRawScore       = function(value) {}    
 GenericScorm.prototype.setMinScore       = function(value) {}    
 GenericScorm.prototype.setMaxScore       = function(value) {}    
 GenericScorm.prototype.setStudentName    = function(value) {} 
 GenericScorm.prototype.setLessonLocation = function(value) {} 
 GenericScorm.prototype.setTotalTime      = function(value) {} 
 GenericScorm.prototype.setAcknowledgement = function(value) {} 
 GenericScorm.prototype.setStartDate       = function(value) {} 
 GenericScorm.prototype.setLastAccessedDate = function(value) {} 
 GenericScorm.prototype.setCompletedDate    = function(value) {} 
 
 GenericScorm.prototype.exitCourse          = function(value) {
     console.log(this.api.version+' Course exited from '+ value)
 } 
 
 GenericScorm.prototype.getLessonLocation = function(value) {
     return this.api.LMSGetValue('cmi.core.lesson_location')
 }

 export default GenericScorm;
 
 
 