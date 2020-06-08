(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mark Pogin2 basic template scherm_atlas_1", frames: [[982,0,552,232],[0,1278,398,232],[0,830,1438,232],[0,1064,1008,212],[1440,234,40,1698],[0,0,980,828],[1010,1064,98,116],[0,1512,76,81],[1536,0,128,116],[982,234,98,116]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._4ab34e87f5bfa51e06dfb5961b497d74 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.talin = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["Mark Pogin2 basic template scherm_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2658,1738);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2678,1738);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Klok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Klok, new cjs.Rectangle(0,0,276,116), null);


(lib.DatumWeekNr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.DatumWeekNr, new cjs.Rectangle(0,0,719,116), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._4ab34e87f5bfa51e06dfb5961b497d74();
	this.instance.setTransform(0,13,0.102,0.1172);

	this.text = new cjs.Text("15°C", "40px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 98;
	this.text.parent = this;
	this.text.setTransform(140,14.6);

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,116);


(lib.WeatherBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.WeatherBtn = new lib.button();
	this.WeatherBtn.name = "WeatherBtn";
	this.WeatherBtn.setTransform(99.5,58,1,1,0,0,0,99.5,58);
	new cjs.ButtonHelper(this.WeatherBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.WeatherBtn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,116);


(lib.GradenWeer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("MouseClickSoundEffectHD");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Text
	this.text = new cjs.Text("To Weather", "40px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 203;
	this.text.parent = this;
	this.text.setTransform(104,170.45);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(2));

	// WeatherBtn
	this.instance = new lib.WeatherBtn();
	this.instance.setTransform(100,58,1,1,0,0,0,99.5,58);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,207,251.6);


// stage content:
(lib.MarkPogin2basictemplatescherm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Buienradar
	this.text = new cjs.Text("Buienradar", "100px 'Calibri'", "#696767");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 525;
	this.text.parent = this;
	this.text.setTransform(320,219);

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(9,178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

	// UserIcon
	this.instance_1 = new lib.Bitmap17();
	this.instance_1.setTransform(1381,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// KleurAanwezigheid
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(1390,187.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// DocentAanwezigheid
	this.instance_3 = new lib.talin();
	this.instance_3.setTransform(1415,955);

	this.text_1 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.lineWidth = 333;
	this.text_1.parent = this;
	this.text_1.setTransform(1697.5,953.5);

	this.instance_4 = new lib.CachedBmp_17();
	this.instance_4.setTransform(1381,941.5,0.5,0.5);

	this.instance_5 = new lib.talin();
	this.instance_5.setTransform(1415,828);

	this.text_2 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 75;
	this.text_2.lineWidth = 333;
	this.text_2.parent = this;
	this.text_2.setTransform(1697.5,833);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(1381,816,0.5,0.5);

	this.instance_7 = new lib.talin();
	this.instance_7.setTransform(1415,701);

	this.text_3 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 75;
	this.text_3.lineWidth = 333;
	this.text_3.parent = this;
	this.text_3.setTransform(1697.5,705.5);

	this.instance_8 = new lib.CachedBmp_17();
	this.instance_8.setTransform(1381,688.5,0.5,0.5);

	this.instance_9 = new lib.talin();
	this.instance_9.setTransform(1415,573);

	this.text_4 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 75;
	this.text_4.lineWidth = 333;
	this.text_4.parent = this;
	this.text_4.setTransform(1697.5,578);

	this.instance_10 = new lib.CachedBmp_17();
	this.instance_10.setTransform(1381,561,0.5,0.5);

	this.instance_11 = new lib.talin();
	this.instance_11.setTransform(1415,446);

	this.text_5 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 75;
	this.text_5.lineWidth = 333;
	this.text_5.parent = this;
	this.text_5.setTransform(1697.5,450.5);

	this.instance_12 = new lib.CachedBmp_17();
	this.instance_12.setTransform(1381,433.5,0.5,0.5);

	this.instance_13 = new lib.talin();
	this.instance_13.setTransform(1415,318);

	this.text_6 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 75;
	this.text_6.lineWidth = 333;
	this.text_6.parent = this;
	this.text_6.setTransform(1697.5,323);

	this.instance_14 = new lib.CachedBmp_17();
	this.instance_14.setTransform(1381,306,0.5,0.5);

	this.instance_15 = new lib.talin();
	this.instance_15.setTransform(1415,190);

	this.text_7 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 75;
	this.text_7.lineWidth = 333;
	this.text_7.parent = this;
	this.text_7.setTransform(1697.5,195.5);

	this.instance_16 = new lib.CachedBmp_17();
	this.instance_16.setTransform(1381,178.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.text_7},{t:this.instance_15},{t:this.instance_14},{t:this.text_6},{t:this.instance_13},{t:this.instance_12},{t:this.text_5},{t:this.instance_11},{t:this.instance_10},{t:this.text_4},{t:this.instance_9},{t:this.instance_8},{t:this.text_3},{t:this.instance_7},{t:this.instance_6},{t:this.text_2},{t:this.instance_5},{t:this.instance_4},{t:this.text_1},{t:this.instance_3}]}).to({state:[{t:this.instance_16},{t:this.text_7},{t:this.instance_15},{t:this.instance_14},{t:this.text_6},{t:this.instance_13},{t:this.instance_12},{t:this.text_5},{t:this.instance_11},{t:this.instance_10},{t:this.text_4},{t:this.instance_9},{t:this.instance_8},{t:this.text_3},{t:this.instance_7},{t:this.instance_6},{t:this.text_2},{t:this.instance_5},{t:this.instance_4},{t:this.text_1},{t:this.instance_3}]},1).wait(1));

	// Klok
	this.text_8 = new cjs.Text("10:00", "60px 'Calibri'", "#696767");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 75;
	this.text_8.lineWidth = 167;
	this.text_8.parent = this;
	this.text_8.setTransform(157,53.4);

	this.instance_17 = new lib.Klok();
	this.instance_17.setTransform(129,90,1,1,0,0,0,110,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.text_8}]}).to({state:[{t:this.instance_17},{t:this.text_8}]},1).wait(1));

	// Darkmodelogo
	this.instance_18 = new lib.Bitmap4();
	this.instance_18.setTransform(1250,32);

	this.instance_19 = new lib.Bitmap5();
	this.instance_19.setTransform(1250,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).to({state:[{t:this.instance_19},{t:this.instance_18}]},1).wait(1));

	// DatumWeekNr
	this.text_9 = new cjs.Text("monday 1 may weeknr. 21", "60px 'Calibri'", "#696767");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 75;
	this.text_9.lineWidth = 681;
	this.text_9.parent = this;
	this.text_9.setTransform(872.55,50);

	this.instance_20 = new lib.DatumWeekNr();
	this.instance_20.setTransform(889.1,90,1,1,0,0,0,371.1,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.text_9}]}).to({state:[{t:this.instance_20},{t:this.text_9}]},1).wait(1));

	// GradenWeer
	this.instance_21 = new lib.GradenWeer();
	this.instance_21.setTransform(446,90,1,1,0,0,0,138,58);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2));

	// Newsfeed
	this.text_10 = new cjs.Text("Newsfeed", "100px 'Calibri'", "#696767");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 124;
	this.text_10.lineWidth = 525;
	this.text_10.parent = this;
	this.text_10.setTransform(717,518.45);

	this.instance_22 = new lib.CachedBmp_18();
	this.instance_22.setTransform(19,178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.text_10}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(969,572,916,475.5);
// library properties:
lib.properties = {
	id: 'CDC45C8BB00F8D4BA5800961AC080F3C',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#6298BC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_18.png?1591273773435", id:"CachedBmp_18"},
		{src:"images/CachedBmp_1.png?1591273773435", id:"CachedBmp_1"},
		{src:"images/Mark Pogin2 basic template scherm_atlas_1.png?1591273773394", id:"Mark Pogin2 basic template scherm_atlas_1"},
		{src:"sounds/MouseClickSoundEffectHD.mp3?1591273773435", id:"MouseClickSoundEffectHD"}
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
an.compositions['CDC45C8BB00F8D4BA5800961AC080F3C'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;