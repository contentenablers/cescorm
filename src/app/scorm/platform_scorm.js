/**
  * Scorm Version 2004
  */
 import GenericScorm from './generic_scrom';
  
 function PlatformScorm(http, api)    {
    GenericScorm.call(this,http, api)
}
PlatformScorm.prototype = Object.create(GenericScorm.prototype)
PlatformScorm.prototype.setCompletion = function(value)  {

    console.log(value + ' Completed ' +this.api.version)
    
    let emoji = this.getEmoji();
    emoji.then(function(data)   {
        console.log(data.data)
    })

}

PlatformScorm.prototype.getEmoji = function()  {
    return this.http.get('https://api.github.com/emojis')
}

export default PlatformScorm;

