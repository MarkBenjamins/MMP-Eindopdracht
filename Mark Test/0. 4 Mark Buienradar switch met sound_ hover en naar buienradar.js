(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1", frames: [[0,830,1438,232],[0,0,980,828],[1440,0,550,512],[1440,514,550,512],[1440,1028,550,512],[0,1064,550,512],[552,1064,550,512]]},
		{name:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2", frames: [[0,0,550,512],[552,0,550,512],[1104,0,550,512],[0,514,550,512],[0,1028,550,512],[552,514,550,512],[1104,514,550,512],[552,1028,550,512],[1104,1028,550,512]]},
		{name:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3", frames: [[1066,0,398,232],[552,514,552,232],[0,1542,1008,212],[1466,0,40,1698],[0,0,550,512],[0,514,550,512],[1066,352,98,116],[552,748,98,116],[0,1028,550,512],[652,748,76,81],[552,0,512,512],[1066,234,128,116]]}
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



(lib.CachedBmp_11 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4ab34e87f5bfa51e06dfb5961b497d74 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_0 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_1 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_10 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_12 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_11 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_14 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_13 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_16 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_15 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_3 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_2 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_5 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_6 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_7 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_8 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_9 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._7ef88eb8ecac4f7dbfd7ff93438fee00_4 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.talin = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.playbutton = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(ss["0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2658,1738);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2658,1738);// helper functions:

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


(lib.PlayBuienradar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("MouseClickSoundEffectHDAudioTrimmercommp3copy");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// hover
	this.text = new cjs.Text("Play", "50px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 246;
	this.text.parent = this;
	this.text.setTransform(140.0657,396,0.9608,1);

	this.text_1 = new cjs.Text("", "50px 'Calibri'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 63;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(2263,-313.6);

	this.text_2 = new cjs.Text("Play", "50px 'Calibri'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 63;
	this.text_2.lineWidth = 246;
	this.text_2.parent = this;
	this.text_2.setTransform(140.0657,396,0.9608,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{scaleX:0.9608,x:140.0657,y:396,text:"Play",lineWidth:246}}]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text,p:{scaleX:1,x:2612,y:-564.6,text:"",lineWidth:100}}]},1).wait(1));

	// Button
	this.instance = new lib.playbutton();
	this.instance.setTransform(0,0,0.5176,0.5176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-566.6,2664,1032.6);


(lib.Klok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Klok, new cjs.Rectangle(0,0,276,116), null);


(lib.DatumWeekNr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
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

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199,116);


(lib._2300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,512);


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
		playSound("MouseClickSoundEffectHDAudioTrimmercom");
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
(lib._04MarkBuienradarswitchmetsoundhoverennaarbuienradar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0,1,221];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.WeatherBtn.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(2);
		}
	}
	this.frame_1 = function() {
		
	}
	this.frame_221 = function() {
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.PlayBuienradar.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(220).call(this.frame_221).wait(223));

	// Playbutton
	this.PlayBuienradar = new lib.PlayBuienradar();
	this.PlayBuienradar.name = "PlayBuienradar";
	this.PlayBuienradar.setTransform(349.5,658.5,1,1,0,0,0,132.5,132.5);
	this.PlayBuienradar._off = true;
	new cjs.ButtonHelper(this.PlayBuienradar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.PlayBuienradar).wait(221).to({_off:false},0).to({_off:true},1).wait(222));

	// BuienradarGif
	this.buttoBuienradar = new lib._2300();
	this.buttoBuienradar.name = "buttoBuienradar";
	this.buttoBuienradar.setTransform(350,656,1,1,0,0,0,275,256);
	new cjs.ButtonHelper(this.buttoBuienradar, 0, 1, 2);

	this.instance = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_1();
	this.instance.setTransform(75,400);

	this.instance_1 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_2();
	this.instance_1.setTransform(75,400);

	this.instance_2 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_3();
	this.instance_2.setTransform(75,400);

	this.instance_3 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_4();
	this.instance_3.setTransform(75,400);

	this.instance_4 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_5();
	this.instance_4.setTransform(75,400);

	this.instance_5 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_6();
	this.instance_5.setTransform(75,400);

	this.instance_6 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_7();
	this.instance_6.setTransform(75,400);

	this.instance_7 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_8();
	this.instance_7.setTransform(75,400);

	this.instance_8 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_9();
	this.instance_8.setTransform(75,400);

	this.instance_9 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_10();
	this.instance_9.setTransform(75,400);

	this.instance_10 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_11();
	this.instance_10.setTransform(75,400);

	this.instance_11 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_12();
	this.instance_11.setTransform(75,400);

	this.instance_12 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_13();
	this.instance_12.setTransform(75,400);

	this.instance_13 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_14();
	this.instance_13.setTransform(75,400);

	this.instance_14 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_15();
	this.instance_14.setTransform(75,400);

	this.instance_15 = new lib._7ef88eb8ecac4f7dbfd7ff93438fee00_16();
	this.instance_15.setTransform(75,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buttoBuienradar}]},1).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance_2}]},13).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},13).to({state:[{t:this.instance_6}]},13).to({state:[{t:this.instance_7}]},13).to({state:[{t:this.instance_8}]},13).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.instance_10}]},13).to({state:[{t:this.instance_11}]},13).to({state:[{t:this.instance_12}]},13).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_14}]},13).to({state:[{t:this.instance_15}]},13).to({state:[]},13).wait(222));

	// Buienradar
	this.text = new cjs.Text("Buienradar", "100px 'Calibri'", "#696767");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 525;
	this.text.parent = this;
	this.text.setTransform(336.25,239);

	this.instance_16 = new lib.CachedBmp_1();
	this.instance_16.setTransform(19,178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.text}]},1).to({state:[]},221).wait(222));

	// UserIcon
	this.instance_17 = new lib.Bitmap17();
	this.instance_17.setTransform(1381,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},222).wait(222));

	// KleurAanwezigheid
	this.instance_18 = new lib.CachedBmp_2();
	this.instance_18.setTransform(1390,187.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},222).wait(222));

	// DocentAanwezigheid
	this.instance_19 = new lib.talin();
	this.instance_19.setTransform(1415,955);

	this.text_1 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.lineWidth = 333;
	this.text_1.parent = this;
	this.text_1.setTransform(1697.5,953.5);

	this.instance_20 = new lib.CachedBmp_9();
	this.instance_20.setTransform(1381,941.5,0.5,0.5);

	this.instance_21 = new lib.talin();
	this.instance_21.setTransform(1415,828);

	this.text_2 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 75;
	this.text_2.lineWidth = 333;
	this.text_2.parent = this;
	this.text_2.setTransform(1697.5,833);

	this.instance_22 = new lib.CachedBmp_9();
	this.instance_22.setTransform(1381,816,0.5,0.5);

	this.instance_23 = new lib.talin();
	this.instance_23.setTransform(1415,701);

	this.text_3 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 75;
	this.text_3.lineWidth = 333;
	this.text_3.parent = this;
	this.text_3.setTransform(1697.5,705.5);

	this.instance_24 = new lib.CachedBmp_9();
	this.instance_24.setTransform(1381,688.5,0.5,0.5);

	this.instance_25 = new lib.talin();
	this.instance_25.setTransform(1415,573);

	this.text_4 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 75;
	this.text_4.lineWidth = 333;
	this.text_4.parent = this;
	this.text_4.setTransform(1697.5,578);

	this.instance_26 = new lib.CachedBmp_9();
	this.instance_26.setTransform(1381,561,0.5,0.5);

	this.instance_27 = new lib.talin();
	this.instance_27.setTransform(1415,446);

	this.text_5 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 75;
	this.text_5.lineWidth = 333;
	this.text_5.parent = this;
	this.text_5.setTransform(1697.5,450.5);

	this.instance_28 = new lib.CachedBmp_9();
	this.instance_28.setTransform(1381,433.5,0.5,0.5);

	this.instance_29 = new lib.talin();
	this.instance_29.setTransform(1415,318);

	this.text_6 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 75;
	this.text_6.lineWidth = 333;
	this.text_6.parent = this;
	this.text_6.setTransform(1697.5,323);

	this.instance_30 = new lib.CachedBmp_9();
	this.instance_30.setTransform(1381,306,0.5,0.5);

	this.instance_31 = new lib.talin();
	this.instance_31.setTransform(1415,190);

	this.text_7 = new cjs.Text("name docent", "60px 'Calibri'", "#696767");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 75;
	this.text_7.lineWidth = 333;
	this.text_7.parent = this;
	this.text_7.setTransform(1697.5,195.5);

	this.instance_32 = new lib.CachedBmp_9();
	this.instance_32.setTransform(1381,178.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32},{t:this.text_7},{t:this.instance_31},{t:this.instance_30},{t:this.text_6},{t:this.instance_29},{t:this.instance_28},{t:this.text_5},{t:this.instance_27},{t:this.instance_26},{t:this.text_4},{t:this.instance_25},{t:this.instance_24},{t:this.text_3},{t:this.instance_23},{t:this.instance_22},{t:this.text_2},{t:this.instance_21},{t:this.instance_20},{t:this.text_1},{t:this.instance_19}]}).to({state:[]},222).wait(222));

	// Klok
	this.text_8 = new cjs.Text("10:00", "60px 'Calibri'", "#696767");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 75;
	this.text_8.lineWidth = 167;
	this.text_8.parent = this;
	this.text_8.setTransform(157,53.4);

	this.instance_33 = new lib.Klok();
	this.instance_33.setTransform(129,90,1,1,0,0,0,110,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.text_8}]}).to({state:[]},222).wait(222));

	// Darkmodelogo
	this.instance_34 = new lib.Bitmap4();
	this.instance_34.setTransform(1250,32);

	this.instance_35 = new lib.Bitmap5();
	this.instance_35.setTransform(1250,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34}]}).to({state:[]},222).wait(222));

	// DatumWeekNr
	this.text_9 = new cjs.Text("monday 1 may weeknr. 21", "60px 'Calibri'", "#696767");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 75;
	this.text_9.lineWidth = 681;
	this.text_9.parent = this;
	this.text_9.setTransform(872.55,50);

	this.instance_36 = new lib.DatumWeekNr();
	this.instance_36.setTransform(889.1,90,1,1,0,0,0,371.1,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.text_9}]}).to({state:[]},222).wait(222));

	// GradenWeer
	this.WeatherBtn = new lib.GradenWeer();
	this.WeatherBtn.name = "WeatherBtn";
	this.WeatherBtn.setTransform(446,90,1,1,0,0,0,138,58);
	new cjs.ButtonHelper(this.WeatherBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WeatherBtn).wait(444));

	// Newsfeed
	this.text_10 = new cjs.Text("Newsfeed", "100px 'Calibri'", "#696767");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 124;
	this.text_10.lineWidth = 525;
	this.text_10.parent = this;
	this.text_10.setTransform(717,518.45);

	this.instance_37 = new lib.CachedBmp_10();
	this.instance_37.setTransform(19,178,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.text_10}]}).to({state:[]},1).wait(443));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(979,499.4,1902,548.1);
// library properties:
lib.properties = {
	id: 'CDC45C8BB00F8D4BA5800961AC080F3C',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#6298BC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1591618411766", id:"CachedBmp_10"},
		{src:"images/CachedBmp_1.png?1591618411766", id:"CachedBmp_1"},
		{src:"images/0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1.png?1591618411710", id:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_1"},
		{src:"images/0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2.png?1591618411710", id:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_2"},
		{src:"images/0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3.png?1591618411710", id:"0. 4 Mark Buienradar switch met sound_ hover en naar buienradar_atlas_3"},
		{src:"sounds/MouseClickSoundEffectHDAudioTrimmercommp3copy.mp3?1591618411766", id:"MouseClickSoundEffectHDAudioTrimmercommp3copy"},
		{src:"sounds/MouseClickSoundEffectHDAudioTrimmercom.mp3?1591618411766", id:"MouseClickSoundEffectHDAudioTrimmercom"}
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