
if (typeof gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked = {};

gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{


gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__CrazyGamesExtension").getChild("adBlocker"), true);
}if (gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CrazyGamesAdApi__IsAdBlocked.registeredGdjsCallbacks = [];