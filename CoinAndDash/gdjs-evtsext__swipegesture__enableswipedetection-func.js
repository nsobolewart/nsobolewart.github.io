
if (typeof gdjs.evtsExt__SwipeGesture__EnableSwipeDetection !== "undefined") {
  gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SwipeGesture__EnableSwipeDetection = {};

gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_0 = {val:false};
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_1 = {val:false};
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_1 = gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0;
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_1.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SwipeGesture").getChild("Enabled"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SwipeGesture").getChild("SwipeInProgress"), false);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "__SwipeGesture.TouchDuration");
}}

}


{


gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_1 = gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0;
gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
}if (gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("__SwipeGesture").getChild("Enabled"), true);
}}

}


};

gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func = function(runtimeScene, Value, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.registeredGdjsCallbacks = [];