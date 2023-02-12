gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2_1final = [];

gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3_1final = [];

gdjs.Main_32MenuCode.GDCoin_95iconObjects1= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects2= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects3= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects4= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects5= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects6= [];
gdjs.Main_32MenuCode.GDCoin_95iconObjects7= [];
gdjs.Main_32MenuCode.GDHeroObjects1= [];
gdjs.Main_32MenuCode.GDHeroObjects2= [];
gdjs.Main_32MenuCode.GDHeroObjects3= [];
gdjs.Main_32MenuCode.GDHeroObjects4= [];
gdjs.Main_32MenuCode.GDHeroObjects5= [];
gdjs.Main_32MenuCode.GDHeroObjects6= [];
gdjs.Main_32MenuCode.GDHeroObjects7= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects1= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6= [];
gdjs.Main_32MenuCode.GDMainMenuButtonObjects7= [];
gdjs.Main_32MenuCode.GDDebugTextObjects1= [];
gdjs.Main_32MenuCode.GDDebugTextObjects2= [];
gdjs.Main_32MenuCode.GDDebugTextObjects3= [];
gdjs.Main_32MenuCode.GDDebugTextObjects4= [];
gdjs.Main_32MenuCode.GDDebugTextObjects5= [];
gdjs.Main_32MenuCode.GDDebugTextObjects6= [];
gdjs.Main_32MenuCode.GDDebugTextObjects7= [];
gdjs.Main_32MenuCode.GDBackObjects1= [];
gdjs.Main_32MenuCode.GDBackObjects2= [];
gdjs.Main_32MenuCode.GDBackObjects3= [];
gdjs.Main_32MenuCode.GDBackObjects4= [];
gdjs.Main_32MenuCode.GDBackObjects5= [];
gdjs.Main_32MenuCode.GDBackObjects6= [];
gdjs.Main_32MenuCode.GDBackObjects7= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects1= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects3= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects4= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects5= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects6= [];
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects7= [];
gdjs.Main_32MenuCode.GDLogoObjects1= [];
gdjs.Main_32MenuCode.GDLogoObjects2= [];
gdjs.Main_32MenuCode.GDLogoObjects3= [];
gdjs.Main_32MenuCode.GDLogoObjects4= [];
gdjs.Main_32MenuCode.GDLogoObjects5= [];
gdjs.Main_32MenuCode.GDLogoObjects6= [];
gdjs.Main_32MenuCode.GDLogoObjects7= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects1= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects2= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects5= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects6= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects7= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects1= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects4= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects5= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects6= [];
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects7= [];

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


{


{
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
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) != "ru-RU";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("en");
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "ru-RU";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("ru");
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
{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtsExt__Language__Language.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
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
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
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
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "en";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects2[i].setAnimationName("en");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("PLAY").setString("PLAY");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SKIN_SHOP").setString("SKIN SHOP");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SETTINGS").setString("SETTINGS");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("LANG").setString("LANG: English");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("CLEAR_DATA").setString("CLEAR DATA");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK").setString("BACK");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS").setString("COINS");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT").setString("SELECT");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED").setString("SELECTED");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "ru";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Main_32MenuCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLogoObjects1[i].setAnimationName("ru");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("PLAY").setString("ИГРАТЬ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SKIN_SHOP").setString("МАГАЗИН СКИНОВ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("main_menu").getChild("SETTINGS").setString("НАСТРОЙКИ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("LANG").setString("ЯЗЫК: Русский");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("CLEAR_DATA").setString("ОЧИСТИТЬ ДАННЫЕ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("settings").getChild("BACK").setString("НАЗАД");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS").setString("МОНЕТ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT").setString("ВЫБРАТЬ");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED").setString("ВЫБРАН");
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11281652);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8525044);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8529524);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10745748);
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


};gdjs.Main_32MenuCode.asyncCallback11305700 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("ru");
}{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "ru");
}}
gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11305700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback11070732 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setString("en");
}{gdjs.evtTools.storage.writeStringInJSONFile("CoinAndDash_Storage", "Lang", "en");
}}
gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11070732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "en";
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "ru";
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11824140);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8954796);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10782052);
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10754756);
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


};gdjs.Main_32MenuCode.asyncCallback10944996 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/0/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback10944996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList21 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8853564);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList22 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList23 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8854188);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList24 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10488404);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList26 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback9497548 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/1/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback9497548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList28 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10433956);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList29 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList30 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9500732);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList31 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10197676);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList33 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList29(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback11539644 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/2/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList34 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11539644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList35 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8500428);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList34(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList36 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList37 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10431332);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList38 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11539364);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList39 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList37(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList38(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList40 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList39(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback11521484 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/3/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList41 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback11521484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList42 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11521412);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList43 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList42(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList44 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11531300);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList45 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9503180);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList46 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList44(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList45(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList47 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList43(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback8537972 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/4/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback8537972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList49 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11547564);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList48(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList50 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList49(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList51 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10358492);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList52 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8892108);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList53 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList51(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList52(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList54 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList50(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList53(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback7667884 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/5/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList55 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback7667884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList56 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8957916);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList55(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList57 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList56(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList58 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11557500);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList59 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11553972);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList60 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList58(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList59(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList61 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList57(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList60(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback8967892 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/6/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList62 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback8967892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList63 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8967772);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList62(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList64 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList63(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList65 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10684900);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList66 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10728996);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList67 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList65(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList66(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList68 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList64(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(6).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList67(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback7707100 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/7/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback7707100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList70 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11170204);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList69(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList71 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList70(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList72 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8946708);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList73 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10566340);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList74 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList72(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList73(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList75 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList71(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList74(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback10566636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/8/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList76 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback10566636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList77 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10566412);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList76(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList78 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList77(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList79 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11056460);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList80 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11544676);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList81 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList79(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList80(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList82 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList78(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList81(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback10485308 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/9/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback10485308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList84 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects6 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10563724);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList83(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList85 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects5, gdjs.Main_32MenuCode.GDMainMenuButtonObjects6);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects6[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList84(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList86 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7770876);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList87 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8884292);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects4.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects4[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList88 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects4, gdjs.Main_32MenuCode.GDHeroObjects5);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects5[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects5[k] = gdjs.Main_32MenuCode.GDHeroObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects5.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList86(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList87(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList89 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList85(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList88(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.asyncCallback10332420 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Purchased"), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Skins/10/Purchased", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Purchased")));
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}
gdjs.Main_32MenuCode.eventsList90 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback10332420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList91 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects5 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10332940);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList90(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList92 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects4, gdjs.Main_32MenuCode.GDMainMenuButtonObjects5);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects5[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList91(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Price"));
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].setOpacity(150);
}
}}

}


};gdjs.Main_32MenuCode.eventsList93 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects4 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12454892);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList94 = function(runtimeScene) {

{

/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects3 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12455364);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Main_32MenuCode.GDHeroObjects3.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDHeroObjects3[0].getAnimation()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}{gdjs.evtTools.storage.writeNumberInJSONFile("CoinAndDash_Storage", "Character_active", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


};gdjs.Main_32MenuCode.eventsList95 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Main_32MenuCode.GDHeroObjects3, gdjs.Main_32MenuCode.GDHeroObjects4);


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECTED")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList93(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Main_32MenuCode.GDHeroObjects3 */

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].SetLabelText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("SELECT")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList94(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList96 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Purchased"), false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3, gdjs.Main_32MenuCode.GDMainMenuButtonObjects4);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects4[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Price"))) + " " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("skin_shop").getChild("COINS")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList92(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Purchased"), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDMainMenuButtonObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList95(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList97 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 0 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 1 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList33(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 2 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList40(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 3 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList47(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 4 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList54(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 5 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList61(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 6 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList68(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 7 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList75(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 8 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList82(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects4);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects4[i].getAnimation() == 9 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects4[k] = gdjs.Main_32MenuCode.GDHeroObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects4.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList89(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() == 10 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList96(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList98 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() >= 0 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() <= 10 ) {
        gdjs.Main_32MenuCode.condition1IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDHeroObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDHeroObjects3[i].setAnimation(gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() + (1));
}
}}

}


};gdjs.Main_32MenuCode.eventsList99 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects2);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects2[i].getAnimation() >= 0 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects2[k] = gdjs.Main_32MenuCode.GDHeroObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects2.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects2[i].getAnimation() <= 10 ) {
        gdjs.Main_32MenuCode.condition1IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects2[k] = gdjs.Main_32MenuCode.GDHeroObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects2.length = k;}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDHeroObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDHeroObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDHeroObjects2[i].setAnimation(gdjs.Main_32MenuCode.GDHeroObjects2[i].getAnimation() - (1));
}
}}

}


};gdjs.Main_32MenuCode.eventsList100 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/0/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(0).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/1/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(1).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/2/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(2).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/3/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(3).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/4/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(4).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/5/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(5).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/7/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(7).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/8/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(8).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/9/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(9).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Skins/10/Purchased", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(10).getChild("Purchased"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("CoinAndDash_Storage", "Character_active", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].getVariableString(gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i].getVariables().getFromIndex(0)) == "Skin Shop Button" ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[k] = gdjs.Main_32MenuCode.GDMainMenuButtonObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList97(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonLeft"), gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonRight"), gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDHeroObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDHeroObjects3[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 20);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].getHeight()) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() == 0 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonLeft"), gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() >= 1 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() <= 9 ) {
        gdjs.Main_32MenuCode.condition1IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonLeft"), gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3);
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonRight"), gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].Activate(true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects3);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDHeroObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDHeroObjects3[i].getAnimation() == 10 ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDHeroObjects3[k] = gdjs.Main_32MenuCode.GDHeroObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDHeroObjects3.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonRight"), gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].Activate(false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3[i].setOpacity(150);
}
}}

}


{

gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length = 0;


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3_1final.length = 0;gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonRight"), gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4);
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4[k] = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4.length = k;if( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4.length;j<jLen;++j) {
        if ( gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3_1final.indexOf(gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4[j]) === -1 )
            gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3_1final.push(gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4[j]);
    }
}
}
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3_1final, gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3);
}
}
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11220740);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList98(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2.length = 0;


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2_1final.length = 0;gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonLeft"), gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3);
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[k] = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length = k;if( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length;j<jLen;++j) {
        if ( gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2_1final.indexOf(gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[j]) === -1 )
            gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2_1final.push(gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3[j]);
    }
}
}
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
    gdjs.Main_32MenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2_1final, gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2);
}
}
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10923356);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList99(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList101 = function(runtimeScene) {

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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10956812);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(3), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true);
}}

}


};gdjs.Main_32MenuCode.eventsList102 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList19(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList100(runtimeScene);
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
gdjs.Main_32MenuCode.eventsList101(runtimeScene);} //End of subevents
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
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10302468);
}
}}
}
if (gdjs.Main_32MenuCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hero"), gdjs.Main_32MenuCode.GDHeroObjects1);
gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.Main_32MenuCode.GDMainMenuButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonLeft"), gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkinSelectButtonRight"), gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMainMenuButtonObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDHeroObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDHeroObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main Menu", 0, 0);
}}

}


};gdjs.Main_32MenuCode.eventsList103 = function(runtimeScene) {

{



}


};gdjs.Main_32MenuCode.eventsList104 = function(runtimeScene) {

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


gdjs.Main_32MenuCode.eventsList102(runtimeScene);
}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8881148);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("Storage");
}}

}


{


gdjs.Main_32MenuCode.eventsList103(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDCoin_95iconObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects3.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects4.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects5.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects6.length = 0;
gdjs.Main_32MenuCode.GDCoin_95iconObjects7.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects1.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects2.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects3.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects4.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects5.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects6.length = 0;
gdjs.Main_32MenuCode.GDHeroObjects7.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects5.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects6.length = 0;
gdjs.Main_32MenuCode.GDMainMenuButtonObjects7.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects4.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects5.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects6.length = 0;
gdjs.Main_32MenuCode.GDDebugTextObjects7.length = 0;
gdjs.Main_32MenuCode.GDBackObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackObjects5.length = 0;
gdjs.Main_32MenuCode.GDBackObjects6.length = 0;
gdjs.Main_32MenuCode.GDBackObjects7.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects3.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects4.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects5.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects6.length = 0;
gdjs.Main_32MenuCode.GDCoin_95total_95textObjects7.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects3.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects4.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects5.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects6.length = 0;
gdjs.Main_32MenuCode.GDLogoObjects7.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects1.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects2.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects3.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects4.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects5.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects6.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonRightObjects7.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects1.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects2.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects3.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects4.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects5.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects6.length = 0;
gdjs.Main_32MenuCode.GDSkinSelectButtonLeftObjects7.length = 0;

gdjs.Main_32MenuCode.eventsList104(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
