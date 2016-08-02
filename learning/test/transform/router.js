'use strict'
class Router{
    constructor(actions){
        this.currentState='welcome';
        this.actions=actions;
    }
    SwitchRouter(cmd,done){
        let action=this.actions.find(v=>v.name===this.currentState);
        let nextState=action.doAction(cmd);
        let newAction=this.actions.find(v=>v.name===nextState);
        this.currentState=newAction.name;
        console.log(this.actions.find(v=>v.name===this.currentState).help);
        done(null);
    }
}
module.exports=Router;