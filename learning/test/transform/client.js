'use strict';
const repl=require('repl');
const InitAction=require('./action/initAction');
const NumberAction=require('./action/numberAction');
const LetterAction=require('./action/letterAction');
const ContinueNumber=require('./action/continueNumber');
const ContinueLetter=require('./action/continueLetter');
const WelcomeAction=require('./action/welcomeAction');
const Router=require('./router');
const routers=[
    new InitAction(),
    new NumberAction(),
    new LetterAction(),
    new ContinueNumber(),
    new ContinueLetter(),
    new WelcomeAction()
];
const router=new Router(routers);
function handleCmd(cmd,context,filename,done){
    // switchRouter({
    //     cmd:cmd.trim()
    // },done);
    router.SwitchRouter(cmd.trim(),done);
    done(null);
}
var replServer=repl.start({prompt:'>',eval:handleCmd});
let currentAction = 'welcome';
console.log(routers.find(item => item.name === currentAction).help);
