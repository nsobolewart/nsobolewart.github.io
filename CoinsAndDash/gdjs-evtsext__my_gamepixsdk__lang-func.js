
if (typeof gdjs.evtsExt__My_GamePixSDK__Lang !== "undefined") {
  gdjs.evtsExt__My_GamePixSDK__Lang.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__My_GamePixSDK__Lang = {};

gdjs.evtsExt__My_GamePixSDK__Lang.conditionTrue_0 = {val:false};
gdjs.evtsExt__My_GamePixSDK__Lang.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__My_GamePixSDK__Lang.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var lang_variable = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("lang"));
var l = window.GamePix.lang();
console.log(l);
lang_variable.setString(l);
};
gdjs.evtsExt__My_GamePixSDK__Lang.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__My_GamePixSDK__Lang.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__My_GamePixSDK__Lang.func = function(runtimeScene, lang, parentEventsFunctionContext) {
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
if (argName === "lang") return lang;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__My_GamePixSDK__Lang.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__My_GamePixSDK__Lang.registeredGdjsCallbacks = [];