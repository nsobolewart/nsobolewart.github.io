
gdjs.evtsExt__Alert__Alert = gdjs.evtsExt__Alert__Alert || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Alert__Alert.Alert = class Alert extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Alert__Alert.Alert.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Alert_onpause = behaviorData.Alert_onpause !== undefined ? behaviorData.Alert_onpause : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Alert_onpause !== newBehaviorData.Alert_onpause)
      this._behaviorData.Alert_onpause = newBehaviorData.Alert_onpause;

    return true;
  }

  // Properties:
  
  _getAlert_onpause() {
    return this._behaviorData.Alert_onpause !== undefined ? this._behaviorData.Alert_onpause : false;
  }
  _setAlert_onpause(newValue) {
    this._behaviorData.Alert_onpause = newValue;
  }
  _toggleAlert_onpause() {
    this._setAlert_onpause(!this._getAlert_onpause());
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Alert__Alert.Alert.SharedData = class AlertSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Alert__Alert.Alert.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Alert_AlertSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Alert_AlertSharedData = new gdjs.evtsExt__Alert__Alert.Alert.SharedData(
      initialData
    );
  }
  return instanceContainer._Alert_AlertSharedData;
}

// Methods:
gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext = {};
gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("Alert_timer");
}
}}

}


};

gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Alert__Alert.Alert.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Pause"), true);
}if ( gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(12201500);
}
}}
if (gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].pauseTimer("Alert_timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAlert_onpause(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("Pause"), false);
}if ( gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAlert_onpause() ) {
        gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_1 = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition2IsTrue_0;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(12202532);
}
}}
}
if (gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].unpauseTimer("Alert_timer");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Alert_timer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("FireBall_alert_time")) ) {
        gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Alert__Alert.Alert.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Alert::Alert", gdjs.evtsExt__Alert__Alert.Alert);
