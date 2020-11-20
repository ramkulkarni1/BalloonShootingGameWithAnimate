// Author : Ram Kulkarni (http://www.ramkulkarni.com)

(function() {
    var EVENTS = {
        'UPDATE': 'update',
        'COLLISION': 'collision',
        'DESTROY': 'destroy',
    };

    function isSymInstance(obj) {
        return obj && obj.hasOwnProperty('startPosition');
    }

    /**
     * Main class to manage the game.
     * Supported Events: update
     */
    var AnimateGameManager = function() {
        var self = this;
        var rigidBodies = [];
        var listenerManager = new EventListenerManager();
        var collisionDetector = new SimpleBoxCollisionDetector();
        var soundManager = new SoundManager();

        self.createGameObject = function (sym, initialX=0, initialY=0, parentSym=null, tweens=null, rigidBody=true, scaleX=1, scaleY=1) {
            if (!symFunc) {
                throw ('Error creating Game Object. Symbol function is not defined or null');
            }

            if (tweens == null) {
                return _createGameObject(sym, rigidBody, initialX, initialY, scaleX, scaleY, parentSym);
            } else {
                var go = null;
                if (parentSym == null) {
                    //create a wrapper symbol in which to tween the actual symbol
                    var wrapper = _createGameObject(null, false);
                    go = _createGameObject(sym, rigidBody, initialX, initialY, scaleX, scaleY, wrapper);
                    var tween = go.addTweens(tweens, wrapper); 
                    tween.loop = 1;
                    tween.call(function() {
                        go.destroy();
                        wrapper.destroy();
                    });
                } else {
                    go = _createGameObject(sym, rigidBody, initialX, initialY, scaleX, scaleY, parentSym);
                    var tween = go.addTweens(tweens, parentSym); 
                    tween.loop = 1;     
                }
                return go;
            }
        }

        self.addEventListener = function(type, listener) {
            listenerManager.addEventListener(listener, type);
        }

        self.removeEventListener = function(type, listener) {
            listenerManager.removeEventListener(listener, type);
        }

        self.detectCollisions = function() {
            for (var i = 0; i < rigidBodies.length; i++) {
                for (var j = i+1; j < rigidBodies.length; j++) {
                    if (collisionDetector.detectCollision(rigidBodies[i], rigidBodies[j])) {
                        var obj1 = rigidBodies[i], obj2 = rigidBodies[j];
                        obj1._onCollision(obj2);
                        obj2._onCollision(obj1);
                    }
                }
            }
        }

        self._setRigidBody = function(gameObj, flag) {
            if (flag) {
                if (rigidBodies.indexOf(gameObj) < 0)
                    rigidBodies.push(gameObj);
            } else {
                var index = rigidBodies.indexOf(gameObj);
                if (index >= 0)
                    rigidBodies.splice(index, 1);
            }
        }

        self._drawRect = function(rect, color, parent=exportRoot) {
            var rectShape = new createjs.Shape();
            rectShape.graphics.beginStroke(color).drawRect(rect.x, rect.y, rect.width, rect.height).endStroke();
            parent.addChild(rectShape);
            return rectShape;
        }    
        
        self.hideObjectsOnMaintTimeline = function(objsToHide=null) {
            exportRoot.children.forEach(function(child){
                if (objsToHide && objsToHide.indexOf(child) < 0)
                    return;

                if (child.hasOwnProperty('visible')) child.visible = false;
            });
        }

        self.removeObjectsOnMaintTimeline = function(objsToRemove=null) {
            var toRemove = [];
            exportRoot.children.forEach(function(child){
                if (objsToRemove && objsToRemove.indexOf(child) < 0)
                    return;

                if (child.hasOwnProperty('visible')) {
                    child.stop();
                    toRemove.push(child);
                    //child.parent.removeChild(child);
                    child.visible = false;
                }
            });

            while(toRemove.length > 0) {
                var child = toRemove.pop();
                if (child.parent) child.parent.removeChild(child);
            }
        }

        self.getRandomNumber = function(min, max) {
            return Math.random() * (max - min) + min; 
        }

        self.registerSound = function(path, id, callback) {
            soundManager.registerSound(path, id, callback);
        }

        self.playSound = function(id, loopCount=-2) {
            soundManager.play(id, loopCount);
        }

        self.stopSound = function(id) {
            soundManager.stop(id);
        }

        self.resumeSound = function(id, loopCount=-2) {
            soundManager.resume(id, loopCount);
        }        

        function onTickUpdate(evt) {
            self.detectCollisions();
            listenerManager.fireEvent(evt, EVENTS.UPDATE);
        }

        _createGameObject = function (symFunc, rigidBody = true, initialX = 0, initialY = 0, scaleX = 1, scaleY = 1, parentSym = null) {
            var gameObj = new GameObject(symFunc);
            var instance = gameObj.getSymInstance();
            var isInstance = isSymInstance(symFunc);

            if (!isInstance) {
                instance.x = initialX;
                instance.y = initialY;
                instance.scaleX = scaleX;
                instance.scaleY = scaleY;
            }

            if (!parentSym) {
                exportRoot.addChild(instance);
            } else if (!isSymInstance(symFunc)) {
                if (isGameObject(parentSym)) 
                    parentSym.getSymInstance().addChild(instance);
                else 
                    parentSym.addChild(instance);
            }

            gameObj.setRigidBody(rigidBody);

            return gameObj;
        }

        function init() {
            listenerManager.addEventType(EVENTS.UPDATE);
            createjs.Ticker.on('tick', onTickUpdate);
        }

        init();
    }

    var gameObjectEvents = [EVENTS.COLLISION];

    /**
     * Game Object wrapper for Animate Symbols
     * Supported Events : collision
     * @param animSymFunction Animate symbol function, for example lib.sym1 or instance
     */
    var GameObject = function(animSymFunction=null) {
        var self = this;
        var rigidBody = false;
        var symInstance = null;
        var eventManager = new EventListenerManager();
        var tagName = null;
        var timelineTweens = [];

        self.isRigidBody = function() { return rigidBody }
        self.setRigidBody = function(flag) { 
            rigidBody = flag;
            _gameManager._setRigidBody(self, flag);
        }

        // Don't remove this method. Used to check if object is GameObject
        self.getSymInstance = function() { return symInstance } 

        self.getTagName = function() { return tagName }
        self.setTagName = function(name) { tagName = name }

        self._onCollision = function(collidedWith) {
            var evt = {
                'obj1': this,
                'obj2': collidedWith
            }

            eventManager.fireEvent(evt, EVENTS.COLLISION);
        }

        self.getAbsolutePosition = function() {
            var x = symInstance.x, y = symInstance.y;

            var currParent = symInstance.parent;
            while(currParent != null) {
                x += currParent.x;
                y += currParent.y;
                currParent = currParent.parent;
            }

            return {
                x: x, y: y
            };
        }

        self.getBoundingRect = function() {
            var obj = symInstance;
            var rect = new createjs.Rectangle();
            var bounds = obj.nominalBounds;
            var transformedBounds = obj.getTransformedBounds();

            if (transformedBounds) {
                return transformedBounds;
            }

            if (!bounds) {
                console.log('Object ', obj, ' has no bounding rect');
                return rect;
            }

            var pos = self.getAbsolutePosition();

            rect.x = pos.x + (bounds.x * obj.scaleX); 
            rect.y = pos.y + (bounds.y * obj.scaleY);
            rect.width = bounds.width * obj.scaleX;
            rect.height = bounds.height * obj.scaleY;	
            
            if (rect.width < 0) {
                rect.width = Math.abs(rect.width);
                rect.x -= rect.width;
            }
            if (rect.height < 0) {
                rect.height = Math.abs(rect.height);
                rect.y -= rect.height;
            }
            return rect;
        }

        self.addEventListener = function(type, listener) {
            if (gameObjectEvents.indexOf(type) < 0) {
                symInstance.addEventListener(type, listener);
            } else {
                eventManager.addEventListener(listener, type);
            }
        }

        self.removeEventListener = function(type, listener) {
            if (gameObjectEvents.indexOf(type) < 0) {
                symInstance.removeEventListener(type, listener);
            } else {
                eventManager.removeEventListener(listener, type);
            }
        }

        self.destroy = function(stop=true) {
            self.setRigidBody(false);
            if (symInstance.parent) symInstance.parent.removeChild(symInstance);
            if (stop) self.stop();
        }

        self.getTween = function() {
            return createjs.Tween.get(symInstance);
        }

        self.addTweens = function (tweenPropArray, addTo=null) {
            var t1 = self.getTween();

            tweenPropArray.forEach(function(props) {
                t1.to(props[0], props[1]);
            });

            var timelineToAddTo = null;
            if (!addTo) {
                timelineToAddTo = symInstance.timeline;
            } else {
                if (addTo.hasOwnProperty('getSymInstance')) { // this is GameObject
                    timelineToAddTo = addTo.getSymInstance().timeline;
                } else if (addTo.hasOwnProperty('timeline')) {
                    timelineToAddTo = addTo.timeline;
                }
            }

            if (timelineToAddTo) {
                timelineToAddTo.addTween(t1);
                timelineTweens.push([timelineToAddTo, t1]);
            }
            return t1;
        }

        self.stop = function() {
            symInstance.stop();
            //remove all tweens
            timelineTweens.forEach(function(timelineTween) {
                timelineTween[0].removeTween(timelineTween[1]);
            });
            timelineTweens = [];
        }

        function init() {
            //if (!sym) throw "GameObject requires symbol function";
            if (animSymFunction) {
                // check if we are passed and instance
                if (isSymInstance(animSymFunction)) {
                    // it is an instance
                    self.instance = symInstance = animSymFunction;
                } else {
                    self.instance = symInstance = new animSymFunction();
                }
            } else {
                self.instance = symInstance = new createjs.MovieClip({loop:1});
            }
            eventManager.addEventType(EVENTS.COLLISION);
        }

        init();
    }

    var isGameObject = function (obj) {
        return obj.hasOwnProperty('getSymInstance');
    }

    var EventListenerManager = function() {
        var self = this;
        var listeners = {
            'default': [],
        };

        self.addEventListener = function (listener, eventType='default') {
            var ary = getListenerArray(eventType);
            if (ary.indexOf(listener) < 0)
                ary.push(listener);
        }

        self.removeEventListener = function(listener, eventType='default') {
            var ary = getListenerArray(eventType, false);
            if (ary)
                ary.splice(ary.indexOf(listener), 1);
        }

        self.fireEvent = function (eventData, eventType='default') {
            var ary = getListenerArray(eventType, false);
            if (ary) {
                ary.forEach(function(listener) {
                    if (typeof listener == 'function') {
                        listener(eventData);
                    }
                });
            }
        }

        self.addEventType = function(eventType) {
            getListenerArray(eventType);
        }

        function getListenerArray(type, create=true) {
            if (!listeners.hasOwnProperty(type)) {
                if (create) 
                    listeners[type] = [];
                else
                    return null;
            }
            
            return listeners[type];
        }
    }

    var SimpleBoxCollisionDetector = function() {
        var self = this;

        function rectsIntersect(rect1, rect2) {
            var result =  pointInRect(rect1.x, rect1.y, rect2) ||
                pointInRect(rect1.x, rect1.y + rect1.height, rect2) ||
                pointInRect(rect1.x + rect1.width, rect1.y, rect2) ||
                pointInRect(rect1.x + rect1.width, 
                            rect1.y + rect1.height, rect2);
            return result;
        }

        function pointInRect(x, y, rect) {
            return x >= rect.x && x <= rect.x + rect.width && 
                    y >= rect.y && y <= rect.y + rect.height;
        }       
        
        self.detectCollision = function (gameObj1, gameObj2) {
            var rect1 = gameObj1.getBoundingRect();
            var rect2 = gameObj2.getBoundingRect();
            
            return rectsIntersect(rect1, rect2) || rectsIntersect(rect2, rect1);
        }
    }

    var SoundClipProps = function() {
        var self = this;
        self.clipPath = null;
        self.loopCount = -1;
        self.soundInstance = null;
        self.id = null;
        self.callback = null;
    }

    var SoundManager = function() {
        var self = this;
        var soundInstances = {};

        self.registerSound = function(src, id, callback) {
            var props = getClipProperties(id);
            if (props && props.clipPath == src) {
                if (callback) callback(id);
                return;
            }

            props = new SoundClipProps();
            props.clipPath = src;
            props.id = id;
            props.callback = callback;
            soundInstances[props.id] = props;
            createjs.Sound.registerSound(src, id);
        }

        self.play = function(id, loopCount=-2) {
            var clipProps = getClipProperties(id)
            if (!clipProps) return;
            if (!clipProps.soundInstance) {
                clipProps.soundInstance = createjs.Sound.play(id);
            } else {
                clipProps.soundInstance.position = 0;
                clipProps.soundInstance.play();
            }
            if (loopCount > -2) {
                clipProps.soundInstance.loop = loopCount;
            }
        }

        self.stop = function(id) {
            var clipProps = getClipProperties(id)
            if (!clipProps) return;
            if (clipProps.soundInstance)
                clipProps.soundInstance.stop();
        }

        self.resume = function(id, loopCount=-2) {
            var clipProps = getClipProperties(id)
            if (!clipProps) return;
            if (loopCount > -2) {
                clipProps.soundInstance.loop = loopCount;
            }
            clipProps.soundInstance.paused = false;
        }

        var onSoundFileLoad = function(evt) {
            var props = getClipProperties(evt.id);
            if (!props) return null;
            if (props.callback) props.callback(evt.id);
        }

        var getClipProperties = function(id) {
            var clipProps = soundInstances[id];
            if (clipProps == null) {
                console.log('Clip id ' + id + ' not found');
                return null;
            }
            return clipProps;
        }

        var init = function() {
            createjs.Sound.on("fileload", onSoundFileLoad);
        }

        init();
    }

    var _gameManager = new AnimateGameManager();
    window.AdobeAnimateGM = _gameManager;
})();
