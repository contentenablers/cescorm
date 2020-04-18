/**
  * Scorm Version 2004
  */
 import GenericScorm from './generic_scrom';
  
 function Scorm2004($http, CEScormAPI)    {
    GenericScorm.call(this,$http, CEScormAPI)
}
Scorm2004.prototype = Object.create(GenericScorm.prototype)
Scorm2004.prototype.setCompletion = function(value)  {
    console.log(value + ' Completed ' +this.api.version)
}

export default Scorm2004;

