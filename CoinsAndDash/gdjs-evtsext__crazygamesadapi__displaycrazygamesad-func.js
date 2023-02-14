
if (typeof gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd = {};

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const AdType = eventsFunctionContext.getArgument("AdType").toString();

    crazysdk.requestAd(AdType);
    
    runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('adFinished').setBoolean(false);
    runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('adError').setBoolean(false);        
    
    crazysdk.addEventListener("adFinished", function() {
        runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('adFinished').setBoolean(true);
    });
    crazysdk.addEventListener("adError", function(error) {
        runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('adError').setBoolean(true);
        console.log({error});
    });

} catch(error) {
    runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('adError').setBoolean(true);
    console.log("Unable to display ad. Full error is:", error);
}
};
gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.func = function(runtimeScene, AdType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AdType") return AdType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayCrazyGamesAd.registeredGdjsCallbacks = [];