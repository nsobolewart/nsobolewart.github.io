gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDButtonObjects1= [];
gdjs.Main_32MenuCode.GDButtonObjects2= [];
gdjs.Main_32MenuCode.GDButtonObjects3= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1280, 720);
}}

}


};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDButtonObjects1 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDButtonObjects1[k] = gdjs.Main_32MenuCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDButtonObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Main_32MenuCode.GDButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDButtonObjects1[i].getVariableString(gdjs.Main_32MenuCode.GDButtonObjects1[i].getVariables().getFromIndex(0)) == "Play" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDButtonObjects1[k] = gdjs.Main_32MenuCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDButtonObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDButtonObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDButtonObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDButtonObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDButtonObjects1[i].SetLabelText("PLAY", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDButtonObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList3(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
