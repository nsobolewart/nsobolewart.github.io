gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDCoin_95iconObjects1= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects2= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects3= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects4= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects5= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects1= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5= [];
gdjs.Main_32MenuCode.GDDebugTextObjects1= [];
gdjs.Main_32MenuCode.GDDebugTextObjects2= [];
gdjs.Main_32MenuCode.GDDebugTextObjects3= [];
gdjs.Main_32MenuCode.GDDebugTextObjects4= [];
gdjs.Main_32MenuCode.GDDebugTextObjects5= [];
gdjs.Main_32MenuCode.GDBackObjects1= [];
gdjs.Main_32MenuCode.GDBackObjects2= [];
gdjs.Main_32MenuCode.GDBackObjects3= [];
gdjs.Main_32MenuCode.GDBackObjects4= [];
gdjs.Main_32MenuCode.GDBackObjects5= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects1= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects3= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects4= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects5= [];
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDLogoObjects3= [];
gdjs.Main_32MenuCode.GDLogoObjects4= [];
gdjs.Main_32MenuCode.GDLogoObjects5= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
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


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


{
{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "en");
}}

}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


{
{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "ru");
}}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "ru-RU";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("en");
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "ru-RU";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("ru");
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("CoinAndDash_Storage", "Lang"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtsExt__Language__Language.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("CoinAndDash_Storage", "Lang");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("CoinAndDash_Storage", "Lang", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(1));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "en";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("PLAY").setString("PLAY");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SKIN_SHOP").setString("SKIN SHOP");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SETTINGS").setString("SETTINGS");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("LANG").setString("LANG: English");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("CLEAR_DATA").setString("CLEAR DATA");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK").setString("BACK");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects2[i].setAnimationName("en");
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "ru";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("PLAY").setString("ИГРАТЬ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SKIN_SHOP").setString("МАГАЗИН СКИНОВ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SETTINGS").setString("НАСТРОЙКИ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("LANG").setString("ЯЗЫК: Русский");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("CLEAR_DATA").setString("ОЧИСТИТЬ ДАННЫЕ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK").setString("НАЗАД");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects1[i].setAnimationName("ru");
}
}}

}


};gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11469268);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}}

}


};gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11472380);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}}

}


};gdjs.Main_32MenuCode.eventsList11 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.Main_32MenuCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackObjects2[i].setXOffset(gdjs.Main_32MenuCode.GDBackObjects2[i].getXOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackObjects2[i].setYOffset(gdjs.Main_32MenuCode.GDBackObjects2[i].getYOffset() + (0.5));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getWidth()) / 2);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main Menu", 100, 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Play" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("PLAY")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "SkinShop" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SKIN_SHOP")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), true);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11470156);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Skin Shop", 0, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Settings" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SETTINGS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), true);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11473268);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Settings", 0, 0);
}}

}


{


{
}

}


};gdjs.Main_32MenuCode.asyncCallback11476276 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("ru");
}{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "ru");
}}
gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11476276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback11477484 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("en");
}{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "en");
}}
gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11477484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "en";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "ru";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList15 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11475908);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11479308);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("CoinAndDash_Storage");
}}

}


};gdjs.Main_32MenuCode.eventsList17 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11480732);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}}

}


};gdjs.Main_32MenuCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Lang" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("LANG")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Clear Data" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("CLEAR_DATA")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Settings Back" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(2), false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11481908);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main Menu", 0, 0);
}}

}


};gdjs.Main_32MenuCode.eventsList19 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Coin_total_text"), gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Coin_count_total", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)));
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.Main_32MenuCode.eventsList20 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11485588);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}}

}


};gdjs.Main_32MenuCode.eventsList21 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList19(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].getVariables().getFromIndex(0)) == "Skin Shop Back" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects2[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition2IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11486764);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main Menu", 0, 0);
}}

}


};gdjs.Main_32MenuCode.eventsList22 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DebugText"), gdjs.Main_32MenuCode.GDDebugTextObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDDebugTextObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDebugTextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


};gdjs.Main_32MenuCode.eventsList23 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList7(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList11(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList18(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList21(runtimeScene);
}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11487940);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("Storage");
}}

}


{


gdjs.Main_32MenuCode.eventsList22(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDCoin_95iconObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects3.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects4.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects5.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects4.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects5.length = 0;
gdjs.Main_32MenuCode.GDBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackObjects5.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects3.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects4.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects5.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects4.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects5.length = 0;

gdjs.Main_32MenuCode.eventsList23(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
