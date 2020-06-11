(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"V1_startscherm_atlas_", frames: [[0,0,1841,1124]]},
		{name:"V1_startscherm_atlas_2", frames: [[0,976,1084,974],[0,0,1084,974]]},
		{name:"V1_startscherm_atlas_3", frames: [[0,976,980,980],[0,0,1084,974]]},
		{name:"V1_startscherm_atlas_4", frames: [[0,0,1753,343],[0,345,1747,322]]}
];


// symbols:



(lib.Asset1 = function() {
	this.initialize(ss["V1_startscherm_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(img.CachedTexturedBitmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3125,1512);


(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["V1_startscherm_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["V1_startscherm_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["V1_startscherm_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(img.CachedTexturedBitmap_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3848,2160);


(lib.play_button = function() {
	this.initialize(ss["V1_startscherm_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SchermpieHalfknipper = function() {
	this.initialize(ss["V1_startscherm_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Schermpieknipper = function() {
	this.initialize(ss["V1_startscherm_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Play_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.play_button();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5533,0.5533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,542.2,542.2);


// stage content:
(lib.V1_startscherm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Play_Button.addEventListener("click", fl_GoToVideo);
		
		function fl_GoToVideo()
		{
			this.gotoAndPlay(97);
		}
	}
	this.frame_95 = function() {
		this.gotoAndPlay(19);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(95).call(this.frame_95).wait(1));

	// Playbutton
	this.movieClip_1 = new lib.Play_Button();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(1250.6,268.9);
	new cjs.ButtonHelper(this.movieClip_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(96));

	// Tekst
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(107.25,451.85,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.55,451.35,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-245.65,144.2,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.15,246.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3}]},18).wait(78));

	// Ogen
	this.instance_4 = new lib.Asset1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(60,100,0.9033,0.9033);

	this.instance_5 = new lib.SchermpieHalfknipper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(60,100,0.9033,0.9032);

	this.instance_6 = new lib.Schermpieknipper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(60,100,0.9033,0.9032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},87).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},2).wait(3));

	// Background
	this.instance_7 = new lib.CachedTexturedBitmap_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(714.4,539.5,1209.1999999999998,540);
// library properties:
lib.properties = {
	id: 'A83792A05283714DB59F95E4649528D4',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1.png?1591877142003", id:"CachedTexturedBitmap_1"},
		{src:"images/CachedTexturedBitmap_6.png?1591877142003", id:"CachedTexturedBitmap_6"},
		{src:"images/V1_startscherm_atlas_.png?1591877141864", id:"V1_startscherm_atlas_"},
		{src:"images/V1_startscherm_atlas_2.png?1591877141864", id:"V1_startscherm_atlas_2"},
		{src:"images/V1_startscherm_atlas_3.png?1591877141865", id:"V1_startscherm_atlas_3"},
		{src:"images/V1_startscherm_atlas_4.png?1591877141866", id:"V1_startscherm_atlas_4"}
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
an.compositions['A83792A05283714DB59F95E4649528D4'] = {
	getStage: function() { return exportRoot.getStage(); },
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;