/**
 *  CEScormAPI 
 */

import GenericScorm from './generic_scrom'
import Scorm2004 from './2004_scorm'
import PlatformScorm from './platform_scorm'

function ScormFactory ($http,CEScormAPI)    {
    this.api = CEScormAPI;
    this.http = $http;
    
}

ScormFactory.prototype.getScorm = function()    {
    switch(this.api.version)    {
        case '1.2' :
            return new GenericScorm(this.http,this.api)
        break;
        case '2004' :
            return new Scorm2004(this.http,this.api)
        break;
        case '3rd2004' :

        break;
        case 'PLATFORM' :
            return new PlatformScorm(this.http,this.api)
        break;
    }
}

ScormFactory.$inject = ['$http','CEScormAPI' ];

export default ScormFactory;