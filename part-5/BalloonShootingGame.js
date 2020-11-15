(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"BalloonShootingGame_atlas_1", frames: [[429,185,129,79],[429,104,294,79],[429,0,322,102],[0,512,518,130],[429,266,147,55],[560,185,126,55],[0,0,427,510]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_73 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.balloon = function() {
	this.initialize(ss["BalloonShootingGame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.toygun = function() {
	this.initialize(img.toygun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3522,2000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.toy_gun_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(6));

	// gun
	this.instance = new lib.toygun();
	this.instance.setTransform(36.95,-64.95,0.0369,0.0369,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// flash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag4A4IiqgFICHhmIgwikICLBhICMhhIgwCkICHBmIiqAFIg5Cgg");
	this.shape.setTransform(22.175,-61.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgvAvIiPgEIByhWIgqiKIB2BRIB2hRIgoCKIBxBWIiQAEIgvCHg");
	this.shape_1.setTransform(22.2,-61.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeAeIhbgDIBIg2IgahYIBLA0IBLg0IgaBYIBJA2IhcADIgeBWg");
	this.shape_2.setTransform(22.25,-61.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJAKIgegBIAXgRIgIgdIAYARIAYgRIgIAdIAYARIgeABIgKAcg");
	this.shape_3.setTransform(22.3,-61.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAAAVIgXARIAIgdIgYgRIAegBIAJgcIAKAcIAeABIgYARIAJAdg");
	this.shape_4.setTransform(22.3,-61.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-83.3,81.8,148.3);


(lib.start_btn_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(-35.75,-22.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_72();
	this.instance_1.setTransform(-80.5,-25.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-25.5,161,51);


(lib.play_again_btn_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-73.55,-19.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_72();
	this.instance_1.setTransform(-80.5,-25.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-25.5,161,51);


(lib.bullet_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000CC").ss(1,1,1).p("AAyAAQAAAqgPAdQgOAdgVAAQgUAAgPgdQgOgdAAgqQAAgpAOgdQAPgdAUAAQAVAAAOAdQAPAdAAApg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgiBGQgPgdAAgpQAAgpAPgdQAOgdAUAAQAVAAAOAdQAPAdAAApQAAApgPAdQgOAegVAAQgUAAgOgeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullet_sym, new cjs.Rectangle(-6,-11,12,22), null);


(lib.balloon_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(1));

	// balloon
	this.instance = new lib.balloon();
	this.instance.setTransform(-19.5,-23.3,0.0913,0.0913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.0784,scaleY:0.0784,x:-17,y:-20},0).wait(1).to({scaleX:0.0456,scaleY:0.0456,x:-10,y:-12},0).wait(1).to({scaleX:0.0012,scaleY:0.0012,skewY:180,x:-0.5,y:-1},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-23.3,39,46.6);


(lib.start_game_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.start_btn = new lib.start_btn_sym();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(-30.5,4.5);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000CC").ss(1,1,1).p("Egj7gUTMBH3AAAMAAAAonMhH3AAAg");
	this.shape.setTransform(-20.5,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Egj7AUUMAAAgonMBH3AAAMAAAAong");
	this.shape_1.setTransform(-20.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start_game_sym, new cjs.Rectangle(-251.5,-121.5,462,262), null);


(lib.game_over = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-149,-92.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.play_again_btn = new lib.play_again_btn_sym();
	this.play_again_btn.name = "play_again_btn";
	this.play_again_btn.setTransform(-10,90);
	new cjs.ButtonHelper(this.play_again_btn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("Egj7AUUMAAAgonMBH3AAAMAAAAong");
	this.shape.setTransform(-20.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.play_again_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.game_over, new cjs.Rectangle(-250.5,-120.5,460,260), null);


// stage content:
(lib.BalloonShootingGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		initApp(lib);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// start_game
	this.start_game = new lib.start_game_sym();
	this.start_game.name = "start_game";
	this.start_game.setTransform(445.35,299.35,1,1,0,0,0,-20.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.start_game).wait(1));

	// score
	this.ammo_txt = new cjs.Text("0", "21px 'Times New Roman'", "#0000FF");
	this.ammo_txt.name = "ammo_txt";
	this.ammo_txt.lineHeight = 25;
	this.ammo_txt.lineWidth = 51;
	this.ammo_txt.parent = this;
	this.ammo_txt.setTransform(87.05,28.5);

	this.instance = new lib.CachedBmp_54();
	this.instance.setTransform(8.55,26.4,0.5,0.5);

	this.score_txt = new cjs.Text("0", "21px 'Times New Roman'", "#0000FF");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 25;
	this.score_txt.lineWidth = 51;
	this.score_txt.parent = this;
	this.score_txt.setTransform(822.05,28.5);

	this.instance_1 = new lib.CachedBmp_53();
	this.instance_1.setTransform(748.55,26.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.score_txt},{t:this.instance},{t:this.ammo_txt}]}).wait(1));

	// gun
	this.balloon = new lib.balloon_sym();
	this.balloon.name = "balloon";
	this.balloon.setTransform(109.5,313.3);

	this.gun = new lib.toy_gun_sym();
	this.gun.name = "gun";
	this.gun.setTransform(454.9,519.95);

	this.bullet = new lib.bullet_sym();
	this.bullet.name = "bullet";
	this.bullet.setTransform(478,450);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bullet},{t:this.gun},{t:this.balloon}]}).wait(1));

	// game_over
	this.end_game = new lib.game_over();
	this.end_game.name = "end_game";
	this.end_game.setTransform(430,300,1,1,0,0,0,-20.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.end_game).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(458.6,326.4,416.6,258.6);
// library properties:
lib.properties = {
	id: '052F4CB443DB407A83060B50AF7776FC',
	width: 900,
	height: 600,
	fps: 24,
	color: "#99CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/toygun.png?1605422658170", id:"toygun"},
		{src:"images/BalloonShootingGame_atlas_1.png?1605422658123", id:"BalloonShootingGame_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['052F4CB443DB407A83060B50AF7776FC'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;