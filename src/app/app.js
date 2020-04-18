import angular from 'angular';

import ScoAPIFactory from './scorm/scoapifactory'
import ScormFactory from './scorm/scormfactory'

import '../style/app.css';

/**
 * Initializations
 */

const MODULE_NAME = 'scormapp';
let core_module = angular.module(MODULE_NAME, [ ]);

/**
 * Core directive for the application
 */
let coreDirective = () => {
  return {
    template: require('./app.html'),
    controller: 'CoreController',
    controllerAs: 'CoreController'
  }
};

/**
 * Core Controller
 */
class CoreController {
  constructor(ScormFactory) {
    this.url = 'https://google.com';

    /**
     * CEScormAPI added as a value
     * will privde the fake scorm, the whole Object 
     * (ScoAPIFactory ) to interact with
     * or the window.scrom from the LMS
     * 
     * This object will be given to ScormFactory to 
     * get the scrom object, which the application then
     * interacts with
     */

    // console.log(CEScormAPI)
     var sco = ScormFactory.getScorm()
     sco.setCompletion('YES')
     sco.exitCourse('DONE')
    // console.log(sco)
    
    // this.parentSer.options = {data:'1234'}
    // this.getServiceCall();
  }

  getServiceCall () {
    this.parentSer.foo();
    let res = this.parentSer.getEmoji();
    res.then(function(data) {
      console.log(data.data)
    })
  }
}

 

core_module.directive('coreScormContainer', coreDirective)
core_module.controller('CoreController', CoreController);

core_module.service('ScoAPIFactory', ScoAPIFactory);
core_module.service('ScormFactory',ScormFactory);
core_module.value('CEScormAPI',new ScoAPIFactory().getScormAPI());





export default MODULE_NAME;