/**
 * Scorm API factory provides fake scorm object
 * to play arond with
 */
function ScoAPIFactory()    {
    var s = 'nncnnnnnnnnnnnnnncnI108c|80c|89c|87n|68c|67c|66n|74n|84c|83c|82c|76c|108c|80c|89c|87n|68c|67c|66n|74n|92n|91n|101n|102n|100n|99n|98n|97n|96n|95n|80c|90c|'
    var l = '19487^1.2.1^^^010217030317030317^6.25'
    this.scormData = {
    'cmi.core.lesson_status' : 2,
    'cmi.suspend_data' :  s,
    'cmi.core.student_name': 'SomeOne',
    'cmi.core.lesson_location' : l,
    'cmi.core.score.raw' : '0',
    }
    this.version = 'PLATFORM' //1.2 //2004 // PLATFORM
    
}

ScoAPIFactory.prototype.LMSInitialize = function(){
    console.log('Initialising Scrom version '+this.version  )
}
ScoAPIFactory.prototype.LMSGetValue = function(type){
    return this.scormData[type]
}
ScoAPIFactory.prototype.LMSSetValue = function(type,data){
    this.scormData[type] = data;
}
ScoAPIFactory.prototype.LMSCommit = function(){
    console.log('Commit')
}


ScoAPIFactory.prototype.LMSFinish = function(){}
ScoAPIFactory.prototype.LMSGetLastError = function(){}
ScoAPIFactory.prototype.LMSGetErrorString = function(){}
ScoAPIFactory.prototype.LMSGetDiagnostic = function(){}

ScoAPIFactory.prototype.Initialize = function(){}
ScoAPIFactory.prototype.Terminate = function(){}
ScoAPIFactory.prototype.GetValue = function(){}
ScoAPIFactory.prototype.SetValue = function(){}
ScoAPIFactory.prototype.Commit = function(){}
ScoAPIFactory.prototype.GetLastError = function(){}
ScoAPIFactory.prototype.GetErrorString = function(){}
ScoAPIFactory.prototype.GetDiagnostic = function(){}

ScoAPIFactory.prototype.getScormAPI = function()   {
    return this.findAPI() || this;
}

ScoAPIFactory.prototype.findAPI = function()   {
    /**
     * Write API finder flow here
     * and return the window.api
     */

     return window.API;
}
/**
 * commented below to emulate the api
 */
// window.API = {version:'2003'};

export default ScoAPIFactory;



 
