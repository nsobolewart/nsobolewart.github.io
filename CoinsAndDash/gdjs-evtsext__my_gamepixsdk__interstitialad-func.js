
if (typeof gdjs.evtsExt__My_GamePixSDK__InterstitialAd !== "undefined") {
  gdjs.evtsExt__My_GamePixSDK__InterstitialAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__My_GamePixSDK__InterstitialAd = {};

gdjs.evtsExt__My_GamePixSDK__InterstitialAd.conditionTrue_0 = {val:false};
gdjs.evtsExt__My_GamePixSDK__InterstitialAd.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__My_GamePixSDK__InterstitialAd.userFunc0xaff078 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var result = runtimeScene.getGame().getVariables().get("GamePixSDK_interstitialAdResult"); 
window.GamePix.interstitialAd().then(function (res) {

    // IMPORTANT: *** RESUME YOUR GAME ***

    if (res.success) {
      // Log the success if you want
      result = true;
      console.warn("interstitialAdYes")
    } else {
      // Log the error if you want
      result = false;
      console.warn("interstitialAdNo")
    }
  });
};
gdjs.evtsExt__My_GamePixSDK__InterstitialAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__My_GamePixSDK__InterstitialAd.userFunc0xaff078(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__My_GamePixSDK__InterstitialAd.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__My_GamePixSDK__InterstitialAd.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__My_GamePixSDK__InterstitialAd.registeredGdjsCallbacks = [];