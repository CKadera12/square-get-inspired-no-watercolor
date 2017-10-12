(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.squaretable = function() {
	this.initialize(img.squaretable);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,250);// helper functions:

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


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68290F").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKg");
	this.shape.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,350,350), null);


(lib.tastingeventmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape.setTransform(97.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgBgCIAAhRQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA+AAIABACIABACIAAAEIAAACIAAADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIACACIAAAEIAAACQAAAEgEAAIgbAAIgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_1.setTransform(89.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAuIgCAAQgEAAgBgDIAAhUIACgCIADgBIACAAIADAAQAEAAABADIAABTIgCADIgDABg");
	this.shape_2.setTransform(82.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWAtIgCgBIgBgBIgCgBIgPgXIgCgDIgEgBIgLAAIgDABIgCADIABAWQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDABIgDABIgDAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAhQQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIAlAAQAHAAAGACQAFADAFADQAEAEACAGQACAFABAHQAAAIgEAEQgCAEgDADIgHAFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAACIADAFIAFAHIAFAHIACAFIgBACIgDACIgDABIgDABgAgRgbQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAIAAAUQAAAAABABQAAAAAAABQAAAAABABQAAAAABABIADAAIASAAIAHAAIAEgDQADgBABgDQABgDAAgEQABgHgGgEIgEgCIgHgBIgSAAIgDABg");
	this.shape_3.setTransform(75.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_4.setTransform(65.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAdAsIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgoIgBgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgNAWQgCACgCABIgCgBIgCgCIgNgWQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCAAIgBACIAAAnQgBADgDAAIgFABIgDAAIgCgBIgBgBIgBgCIAAhPQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAgBIAFAAIADAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAABIAWAiQABADACAAIACAAIADgDIAUgiQADgDAFgBIADABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAABQIgBADIgDABIgDAAg");
	this.shape_5.setTransform(55.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIACACIABACIAAAEIAAACIgBADIgCACIguAAIgCACIgBADIAAALIABAEIADABIAdAAIACABIAAACIABAEIAAACQAAAEgDAAIgcAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAtAAQACABAAADIABAEIgBADIgBADIgCABg");
	this.shape_6.setTransform(46,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAsIgDgBQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgoIgBgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgOAWQgBACgCABIgCgBIgDgCIgMgWQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCAAIgBACIAAAnQgBADgDAAIgFABIgDAAIgCgBIgBgBIgBgCIAAhPQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAgBIAFAAIADAAQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAABIAWAiQABADACAAIACAAIADgDIAVgiQACgDAFgBIADABQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAABQIgBADIgDABIgDAAg");
	this.shape_7.setTransform(36.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape_8.setTransform(22.5,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOArQgHgDgGgFQgFgFgDgHIgCgHIgBgIIAAgXIAAgZIABgCIADgCIAEAAIACAAIAEABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAtQAAAFACAEQABAFADAEQADADAEACQAFACAEAAQAGAAAEgCQAEgCADgDQADgEABgFQACgEAAgFIAAgtQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAEgBIADgBIADABIADABIABADIAAAwIgBAIIgCAHQgDAHgFAFQgGAFgHADQgHADgIAAQgHAAgHgDg");
	this.shape_9.setTransform(13,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_10.setTransform(2.6,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAuIgCAAQgEAAgBgDIAAhUIACgCIADgBIACAAIADAAQAEAAABADIAABTIgCADIgDABg");
	this.shape_11.setTransform(-4.8,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAtIgJgDIgIgEQgEgCgDgEIgGgGIgEgIQgEgIAAgKQAAgJAEgIIAEgIIAGgHQAGgGAJgDIAJgDIAIgBIAKABIAKADIAJAGIAHAGIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDACIgDACIgDACQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgFgDIgHgFQgEgCgHAAQgFABgFACQgGACgEAEQgEAFgCAFQgDAGAAAFQAAAGADAGQACAFAEAEQAEAEAGADQAFACAFABQAHAAAGgDQAGgDAEgFIADAAIADAAIAEACIADADIABADIAAACIgIAHIgJAEIgJAEIgLABIgIgBg");
	this.shape_12.setTransform(-11.7,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAuIgCAAQgEAAgBgDIAAhUIACgCIADgBIACAAIADAAQAEAAABADIAABTIgCADIgDABg");
	this.shape_13.setTransform(-18.5,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAtIgDgCIAAgCIAAhQIAAgDIADgBIADgBIADAAIAEABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAAA+IABADIABACQACACADABIAnAAIADABIACACIABACIAAAEIgCAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_14.setTransform(-24.5,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIACACIABACIAAAEIAAACIgBADIgCACIguAAIgCACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgDAAIgcAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAtAAQACABAAADIABAEIgBADIgBADIgCABg");
	this.shape_15.setTransform(-33.2,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkAsIgEgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAhPQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAhAAIAIABIAJACQAJADAGAGQAHAGADAIIADAJIABAIQAAAKgEAIIgEAHIgGAHIgHAFIgIAEQgJADgIAAgAgXgaQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAwQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIADABIAQAAQAFAAAGgCQAFgDAFgDQAEgDACgGQADgFAAgHQAAgFgDgGQgCgFgEgEQgFgDgFgCQgGgCgFgBIgQAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_16.setTransform(-42.9,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIACACIAAACIAAAEIAAACIAAADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgDAAIgcAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIAAAEIAAADIgBADIgCABg");
	this.shape_17.setTransform(-56.5,-0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAVAtIgEgCIgVghIgDgCIgEgBIgEABQgBABAAAAQgBAAAAABQAAAAgBABQAAABAAABIAAAbIgBADIgDABIgEAAIgDAAQgFAAAAgDIAAhTIACgCIADgBIADAAIADAAQAEAAABADIAAAcQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIAEABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAYgeIABgBIACAAIADABIADACIADACIABACIgBACIgVAZIgBACIAAADIAAACIAAACIAcAlIABABIAAACIgBADIgDABIgEABIgDABg");
	this.shape_18.setTransform(-65.4,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_19.setTransform(-74.7,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeAsIgFgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgoIgBgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgNAWQgCACgCABIgDgBIgBgCIgNgWQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDAAIAAACIAAAnQgCADgCAAIgFABIgCAAIgDgBIgCgBIAAgCIAAhPQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAgBIAFAAIADAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAABABIAUAiQACADACAAIADAAIABgDIAVgiQADgDAEgBIAEABQAAAAABAAQAAAAAAABQABAAAAAAQABABAAABIAABQIgBADIgDABIgDAAg");
	this.shape_20.setTransform(-84.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tastingeventmc, new cjs.Rectangle(-91.1,-8.4,195.4,16.9), null);


(lib.subhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAqQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIADgFIADgEIAIgPQACgHAAgDIAAgEIgFgBQgHgDgEgFQgCgFAAgHQAAgJAFgGQAFgGAJAAQAIAAAHAIQAFAHAAANQAAAJgDAJQgEAKgJAOIgGAMQgDADgDAAQgEAAgCgBg");
	this.shape.setTransform(65.9,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKBHIgOgDIgFADIgDABIgEgBIgCgCQgFgEgEgKQgDgLAAgLQAAgEACgDQACgDAEAAQAGAAAHALIAFAIQAEAGAHADQAHADAHAAQAJAAAFgFQAFgEABgHQAAgMgXgLIgIgEQgUgKgIgIQgIgKAAgNQABgRAMgMQAMgLAUAAIAIABIAKABIAHgCIAEgBQAHAAAGALQAHAKAAAMQAAAFgDADQgCACgDAAQgEAAgDgCQgDgDgEgGQgFgIgGgEQgFgDgHAAQgHAAgGAFQgEADAAAIQAAAGAEAFQAFAFARAIIABABQAmASAAAWQABATgQANQgOANgWAAg");
	this.shape_1.setTransform(55.3,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBdQgGgCAAgGQgBgEAGgCIAHgEQADgDABgKQABgMAAghIAAgWQAAglgBgKQgCgLgDgDIgGgCQgIgDAAgEQAAgDADgCQACgDAGgCIATgGQAIgDAFAAQAEAAACADQACACgBAEIAAAHIABACIAAABIAGgDIAFgEQAJgGAGgDQAIgEAIAAQAZABARASQAQATAAAeQAAAfgSAWQgSAVgcAAQgMAAgEgDQgEgEAAgFQgBgEADgCQACgCAEAAIADABIAFABQAPgBAJgMQAJgNAAgUQAAgYgKgOQgKgOgPAAQgOAAgIAIQgIAHAAAVIAABXIABANQABAFABACQACACAGACIAFACIADACIABAEQAAAGgHABQgJACgTAAQgUAAgHgCg");
	this.shape_2.setTransform(40.5,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBiQgHgDAAgFQAAgFAGgDIAEgBQAEgCABgFQABgEAAgLIAAgJIAAgLIAAgOQAAgWgBgGQgBgGgDgCIgGgCQgIgDAAgEQAAgDACgCQADgDAGgCIAUgGIAOgEQADAAACAEQACACAAAGIAAAIIgBAGIgBAiIAAABIAAAiQAAANABAGQABAEADACIAFADQAHACAAAFQAAAFgGADQgHACgSAAQgUAAgGgCgAgQhEQgGgFAAgHQAAgIAHgGQAGgFAJAAQAIAAAGAFQAGAFAAAIQAAAHgGAFQgHAGgJAAQgIAAgGgFg");
	this.shape_3.setTransform(28.3,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBhQgIgCAAgGQAAgGAIgCQAHgDABgCQACgDABgWIABhAIgBgkIgBgWQgBgEgCgBQgCgBgGAAIgGAAQgJAAgFACQgGACgDAGIgFAJIgEAJIgEAEQgCACgDAAQgEAAgCgEQgBgDAAgJQAAgSAEgLQAEgLAHAAIABAAQALACAQAAIBQAAQARAAALgCIABAAQAHAAAEALQAEALAAASQAAAJgCADQgCAEgEAAIgFgCIgDgEIgFgJIgEgJQgEgGgFgCQgFgCgKAAIgFAAQgGAAgCABQgDABAAAEIgBAWIgBAkIABBAQABAWABADQACACAHADQAIACAAAGQAAAGgIACQgIADgVAAQgUAAgIgDg");
	this.shape_4.setTransform(15.1,25.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BbQgGgHAAgIQAAgHAFgEQAEgFAIgBIAFABIAFAEIADAEQAEAGADAAQAGAAAHgKQAIgKAAgLQAAgMgKgVIgBgEIgWgvIgNgbQgCgEgIgEIAAAAQgFgBgCgCQgBgDAAgDQAAgGAHgCQAHgCAUAAQAUAAAHACQAHACAAAGIgBAEIgDADIgEACQgGACAAADIADAKIALAbIALAaQADAGACAAQABAAADgGIAJgWIAKgbQADgJAAgEQABgEgIgEQgIgEAAgFQAAgEAGgCQAHgCAPAAQARAAAFACQAGACAAAGQAAAFgIACIgGABQgHAFgJAXIgEAKIgSAsQgWA5gOARQgOARgUAAQgKAAgHgFg");
	this.shape_5.setTransform(-9,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBAIgHgGIgGADQgQALgRgBQgUAAgMgLQgNgMAAgTQAAgVAQgLQAQgNAdAAQAGAAAEACQADACAAAFQAAAIgJgBQgNABgJAGQgIAHAAALQAAALAHAHQAHAGANAAQAMAAAGgGQAFgFAAgPIAAgzQAAgMgFgGQgFgHgJAAQgHAAgFADQgGADgFAGIgDAEQgJAKgJAAQgFAAgEgDQgDgEAAgGQAAgMAQgKQAQgIAZgBQAOAAALAFQALADAGAIQAEAFACAJQACAJAAATIAAArIABAMQABAEADAAIAEABQAJADAAAEQAAAHgJAGQgKAEgMAAQgGABgHgIg");
	this.shape_6.setTransform(-23.6,29);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BTQgQgTAAgdQAAgiASgUQATgVAdAAIAJACQAEABADADQACADAAADQAAAIgJAAIgDgBIgEAAQgPAAgJANQgJALAAAWQAAAXAKAOQAKAOAPAAQAOAAAIgHQAHgIAAgQIAAglIAAg+QAAgKgBgEQgCgDgFgCIgEgBQgIgDAAgEQAAgEADgDQADgCALgEIAPgFIANgBQAEAAACACQACADAAAGIAAAHIgBBUIABA5QABANACACIAJADQAHACAAAEQAAAHgTAGIgOAEIgKABQgEAAgCgCQgCgCAAgFIAAgHIAAgCIgBgBIgEADIgGAEQgIAGgHADQgIADgIAAQgaAAgQgSg");
	this.shape_7.setTransform(-39.2,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBiQgHgDAAgFQAAgFAGgDIAEgBQAEgCABgFQABgEAAgLIAAgJIAAgLIAAgOQAAgWgBgGQgBgGgDgCIgGgCQgIgDAAgEQAAgDACgCQADgDAGgCIAUgGIAOgEQADAAACAEQACACAAAGIAAAIIgBAGIgBAiIAAABIAAAiQAAANABAGQABAEADACIAFADQAHACAAAFQAAAFgGADQgHACgSAAQgUAAgGgCgAgQhEQgGgFAAgHQAAgIAHgGQAGgFAJAAQAIAAAGAFQAGAFAAAIQAAAHgGAFQgHAGgJAAQgIAAgGgFg");
	this.shape_8.setTransform(-52.2,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBiQgHgCAAgGQAAgFAGgCIAHgDQACgDABgIIABgbIAAgWIAAgYIAAgLQAAgjgCgKQgBgJgDgCIgIgDQgJgDAAgFQAAgCADgDQADgCAJgDIATgGIANgCQAEABACACQABACAAAHIAAAKQgBAxAAAxIABAvQAAAJADADIAHAEQAHADAAAEQAAAGgHACQgHACgSAAQgUAAgGgCg");
	this.shape_9.setTransform(-60.5,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgxAzQgTgUgBgfQABgdAUgVQAVgVAdAAQAdAAAUAUQASATABAeQAAAfgVAVQgUAWgdgBQgeABgTgVgAgagoQgHALgBATQAAAaAMASQAMASAPAAQANAAAIgLQAJgMAAgSQAAgagLgSQgMgSgPAAQgOAAgJALg");
	this.shape_10.setTransform(-72.3,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBgQgHgCAAgGQAAgGAJgDIAGgDQACgCABgIIABggIgBgTIgBgGQgBgDgHgBQgGgBgaAAIgcABQgIABgCACIgCAEIAAAKIAAAMIABAgQAAAIADACIAGADQAIADAAAGQAAAGgHACQgIADgWAAQgVAAgIgDQgHgCAAgGQAAgGAIgDIAGgDQADgCABgRQACgSAAgoIgCgzQgBgVgBgCQgCgCgHgDQgHgDAAgFQAAgGAGgCQAGgCAZAAQAYAAAGACQAGACAAAGQAAAFgIADIgGADQgDACgBAJIgBAoQAAAGAFABQAGACATAAIALAAIAdAAQAIgBADgCIABgDIABgFIAAgGIgBgiQgBgHgCgCIgGgDQgJgDAAgFQAAgGAGgCQAHgCAYAAQAYAAAGACQAGACAAAGQAAAFgIADIgGADQgDADgBASQgCASAAAlIACA0QABAVACADQABACAHADQAHACAAAGQAAAGgHACQgIADgVAAQgWAAgIgDg");
	this.shape_11.setTransform(-90.8,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subhead, new cjs.Rectangle(-103.1,7.6,175.1,36.5), null);


(lib.recipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBHIgPgCIgEACIgFABIgCgBIgDgCQgEgDgEgMQgFgKAAgLQABgEACgDQACgDADAAQAHAAAHALIAEAIQAEAGAIADQAHADAHAAQAJAAAGgEQAEgFAAgHQAAgMgVgLIgIgEQgVgLgIgIQgHgIAAgNQgBgSAMgLQANgMAUAAIAJABIAKACIAGgDIAEgBQAHAAAGALQAGAKAAAMQAAAFgCADQgBADgFgBQgDABgDgDQgDgCgEgHQgFgIgFgEQgGgDgIAAQgGAAgFAFQgGADAAAIQAAAGAGAFQAEAFAQAJIACAAQAnASAAAWQAAATgQANQgOANgWAAg");
	this.shape.setTransform(-43.2,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsA0QgTgVAAgdQAAgfAUgVQAUgUAegBQAaAAAQAQQAPAOAAAaQAAAJgCACQgDADgKAAIg0AAQgEAAgDgCQgCgCAAgEQAAgEACgCQADgCAEAAIAcAAIAHAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAPQgIAOAAATQAAAVALAQQALAPAQAAQAKABAHgDQAHgCAHgFIAFgDQAHgGAEAAQADAAACABQACACAAAEQAAACgEAGQgDAEgGAFQgMAKgLAEQgLAEgNABQgcgBgUgTg");
	this.shape_1.setTransform(-56.8,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCBeQgGgDAAgGQgBgEAGgDIAHgDQADgDABgLQABgKAAgjIAAgVQAAglgBgKQgCgMgDgCIgGgCQgIgCAAgFQAAgDADgCQACgDAGgCIATgGQAIgCAFgBQAEAAACACQACACgBAFIAAAHIABACIAAABIAGgDIAFgEQAJgGAGgEQAIgCAIgBQAZABARASQAQATAAAdQAAAhgSAUQgSAWgcAAQgMAAgEgEQgEgDAAgGQgBgDADgBQACgDAEAAIADABIAFABQAPAAAJgNQAJgNAAgUQAAgYgKgOQgKgOgPAAQgOAAgIAIQgIAIAAAUIAABXIABANQABAGABACQACACAGABIAFACIADADIABADQAAAGgHACQgJABgTAAQgUAAgHgBg");
	this.shape_2.setTransform(-72.9,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBhQgHgBAAgHQAAgFAGgCIAEgBQAEgCABgFQABgFAAgKIAAgJIAAgLIAAgOQAAgVgBgHQgBgGgDgCIgGgCQgIgCAAgFQAAgDACgCQADgDAGgCIAUgHIAOgDQADABACACQACADAAAGIAAAIIgBAHIgBAiIAAABIAAAhQAAANABAGQABAFADABIAFADQAHACAAAFQAAAFgGACQgHADgSAAQgUAAgGgDgAgQhEQgGgFAAgHQAAgIAHgGQAGgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgGAFQgHAGgJgBQgIABgGgFg");
	this.shape_3.setTransform(-85.1,26.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrA0QgTgVAAgdQAAgfAUgVQAVgUAegBQAXAAAPAMQAQAMAAAQQAAAGgFAFQgEADgHAAQgGAAgFgDQgEgDgFgMQgEgKgFgDQgFgEgJAAQgPAAgIALQgJAMAAAWQAAAXAMAPQAMAQAUgBQAGABAGgCQAHgCAEgEIAGgDQAHgGAEAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAAEgDAFIgIAIQgLAKgLAEQgMAEgOABQgbgBgUgTg");
	this.shape_4.setTransform(-96.3,29.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA0QgTgVAAgdQAAgfAUgVQAUgUAegBQAaAAAQAQQAPAOAAAaQAAAJgCACQgDADgKAAIg0AAQgEAAgDgCQgCgCAAgEQAAgEACgCQADgCAEAAIAcAAIAHAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAPQgIAOAAATQAAAVALAQQALAPAQAAQAKABAHgDQAHgCAHgFIAFgDQAHgGAEAAQADAAACABQACACAAAEQAAACgEAGQgDAEgGAFQgMAKgLAEQgLAEgNABQgcgBgUgTg");
	this.shape_5.setTransform(-111.1,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdBEQgMgrgKgJQgJgJgOAAQgLAAAAgIQAAgJAJAAQAWAAALgIQALgJAAgTQAAgSgLgJQgLgJgVAAQgKAAgEABQgEACgCADIgBANIgBAbIAAA8IABApQABAJADACIAGADQAIADAAAGQAAAGgHACQgIADgWAAQgVAAgIgDQgHgCAAgGQAAgGAIgDIAGgDQADgCABgRQACgQAAgqIgBg0QgCgUgBgCQgCgCgHgDQgHgDAAgFQAAgFAEgCQAEgDAJAAIAeAAIAbgBIAVAAQAeAAAQANQAQAMAAAZQAAASgLANQgKANgTAFIAAABQAPADAIAJQAIAJAHAWIADAOQAGAVAIAAIAEAAIAFAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQACACAAADQAAAGgHAEQgIAEgNAAQgbAAgKggg");
	this.shape_6.setTransform(-128.3,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.4,7.8,105.9,36.5);


(lib.mainbtngreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CC33").ss(1,1,1).p("A5Y1oMAyxAAAMAAAArRMgyxAAAg");
	this.shape.setTransform(0,0,0.922,0.903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("A5YVpMAAAgrRMAyxAAAMAAAArRg");
	this.shape_1.setTransform(0,0,0.922,0.903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A24y+MAtxAAAMAAAAl9MgtxAAAg");
	this.shape.setTransform(0,0,1.021,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-125.5,301,251), null);


(lib.getinspiredtrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.squaretable();
	this.instance.parent = this;
	this.instance.setTransform(-300,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspiredtrace, new cjs.Rectangle(-300,-125,600,250), null);


(lib.FindaStore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AglAqIAAhTIAdAAQAIAAAIACQAIADAHAFQAGAFAEAHQACAEABAFIACAKIgCAKQgBAFgCAEIgEAHIgGAGQgHAGgIACQgKACgGAAgAgZAgIAPAAQAIAAAGgCQAGgDAEgDQAFgEADgGIACgHIAAgHIAAgHIgCgGQgDgGgFgEQgEgEgGgCQgGgCgIAAIgPAAg");
	this.shape.setTransform(36.4,-27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgbAqIAAhTIA2AAIAAAKIgqAAIAAAaIAnAAIAAAJIgnAAIAAAcIArAAIAAAKg");
	this.shape_1.setTransform(28,-27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AAQAqIgVglIgNAAIAAAlIgLAAIAAhTIAbAAQAFAAAFABQAGABAEADQAEADADAEQACAFAAAGQAAAJgGAGIgGAEIgJADIAYAmgAgSgEIAOAAIAHgBQAEgBACgCIAFgDQABgDAAgEQAAgEgBgDIgFgEIgGgBIgGgBIgPAAg");
	this.shape_2.setTransform(20.7,-27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_3.setTransform(14.8,-27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgbAqIAAhTIAZAAQAGAAAGABQAGABAEADQAEADACAEQACAFAAAGQAAAHgCAEQgDAEgEADQgEACgGACIgLABIgOAAIAAAlgAgQgEIAOAAIAHAAIAFgDQADgBACgDQABgDAAgEQAAgEgBgCQgCgDgDgCIgFgBIgHgBIgOAAg");
	this.shape_4.setTransform(9.7,-27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgPAqQgIgEgFgFIAJgJQADAFAFADQAGACAFAAIAFgBQADAAADgCIAEgFQABgCAAgEQAAgEgBgCIgFgFIgGgDIgHgCIgIgEQgEAAgDgDQgDgDgCgEQgCgEAAgGQAAgGADgEQACgFAFgDQAEgDAFgBIAJgCIAIABIAGACQAHADAEAEIgJAIQgCgDgFgCQgEgCgFgBIgFABIgFADIgEAEQgCACAAAEQAAAEACACQABACACACIAGACIAGADIAIADQAFACADABQAEADACAEQADAFAAAGQAAAGgDAGQgCAEgEAEQgFACgFACIgKABQgIAAgHgCg");
	this.shape_5.setTransform(2.2,-27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AAVAqIgshEIAAAAIAABEIgMAAIAAhTIAPAAIArBCIABAAIAAhCIAMAAIAABTg");
	this.shape_6.setTransform(-5.9,-27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgFAqIAAhTIALAAIAABTg");
	this.shape_7.setTransform(-12.4,-27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D63900").s().p("AgFAqIAAhJIgbAAIAAgKIBBAAIAAAKIgbAAIAABJg");
	this.shape_8.setTransform(-20.8,-27.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D63900").s().p("AgbAqIAAhTIA2AAIAAAKIgqAAIAAAaIAnAAIAAAJIgnAAIAAAcIArAAIAAAKg");
	this.shape_9.setTransform(-27.8,-27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D63900").s().p("AgLAqQgIgEgGgGQgGgGgDgIQgEgJAAgJQAAgJAEgJQADgHAGgGIAHgGIAHgDQAJgEAIAAIAKABIAJADQAIACAFAGIgIAIQgEgEgGgCIgGgCIgHgBQgHAAgGADQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAFAGADQAGACAHAAIALgBIAJgDIAAgYIgTAAIAAgJIAfAAIAAAoQgHAEgIABIgRACQgJAAgJgCg");
	this.shape_10.setTransform(-36.7,-27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FindaStore, new cjs.Rectangle(-43.1,-36.7,86.2,18.8), null);


(lib.fadefromwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4NUjMAAAgpFMAwbAAAMAAAApFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fadefromwhite, new cjs.Rectangle(-154.9,-131.5,310,263), null);


(lib.ctawhiterectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApsCXIAAktITZAAIAAEtg");
	this.shape.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctawhiterectangle, new cjs.Rectangle(-62.1,-26.6,124.3,30.3), null);


(lib.ctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApsCXIAAktITZAAIAAEtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarectangle, new cjs.Rectangle(-62.1,-15.1,124.3,30.3), null);


(lib.more = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAzQgTgTAAgeQAAgfAUgVQAUgVAeABQAaAAAQAPQAPAOAAAbQAAAIgCACQgDADgKAAIg0AAQgEAAgDgCQgCgDAAgDQAAgDACgCQADgCAEAAIAcAAIAHgBQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAATQAAAVALAQQALAQAQAAQAKgBAHgCQAHgCAHgFIAFgEQAHgFAEAAQADAAACABQACACAAAEQAAADgEAEQgDAGgGAEQgMAKgLAEQgLAFgNAAQgcAAgUgVg");
	this.shape.setTransform(167.5,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBEQgHgCAAgGQAAgFAHgCIAEgCQADgCACgFQACgEgBgLIAAgJIAAgLIAAgIQAAgYgBgIQgBgHgDgCIgGgCQgJgDABgFQgBgDADgCQADgDAFgCIATgGIAMgCQAHAAACASIAAADIABABQAHgMAHgFQAIgGAIAAQAJAAAGAGQAGAFgBAKQABAKgFAFQgEAFgIAAIgHgBIgGgEIgCgFQgBgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgJAAgEANQgDANAAApQAAAMABAGQABAGAEABIAGACQAIADAAAFQAAAGgIACQgHACgSAAQgVAAgHgCg");
	this.shape_1.setTransform(154.9,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxAzQgTgUAAgeQAAgfAUgUQAVgUAdAAQAeAAATATQASATAAAeQABAfgVAVQgUAVgdABQgdgBgUgUgAgagoQgHALAAASQgBAbAMASQALASAQAAQANAAAIgLQAJgLAAgTQAAgagLgSQgNgSgOAAQgOAAgJALg");
	this.shape_2.setTransform(141.2,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBgQgHgCAAgGQAAgGAIgDIAGgDQADgCAAgGQABgGAAgSIAAgHIAAg6IAAgiIgSAtQgoBogIAAQgEAAgIgOQgIgPgTgsIgehEIgBA1IgBAlIABAZQABAGACACIAGADQAIADAAAGQAAAGgHACQgHADgQAAQgPAAgHgDQgHgDAAgFQAAgFAIgEQAHgDABgDQACgHACgjQACgiAAgrIAAgFQAAgOgBgFQgCgFgDgCIgGgCQgJgEAAgFQAAgGAGgCQAGgCAUAAIAUABIAFABQADACAJAYIAIATIAEAKQAhBSACAAQADAAANgeQAMgcARgxIACgIQAFgPAEgFQADgCAFgBIATgBQASAAAGACQAGACAAAGQAAAGgHACIgEACQgEACgCAFQgBAGAAAVIABBNQACAjABAFQABADAGACIADACIAFADQACACAAADQAAAGgIACQgIADgWAAQgVAAgHgDg");
	this.shape_3.setTransform(120.6,-8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BTQgQgTAAgdQAAgiASgUQATgVAdAAIAJACQAEABADADQACADAAADQAAAIgJAAIgDgBIgEAAQgPAAgJANQgJALAAAWQAAAXAKAOQAKAOAPAAQAOAAAIgHQAHgIAAgQIAAglIAAg+QAAgKgBgEQgCgDgFgCIgEgBQgIgDAAgEQAAgEADgDQADgCALgEIAPgFIANgBQAEAAACACQACADAAAGIAAAHIgBBUIABA5QABANACACIAJADQAHACAAAEQAAAHgTAGIgOAEIgKABQgEAAgCgCQgCgCAAgFIAAgHIAAgCIgBgBIgEADIgGAEQgIAGgHADQgIADgIAAQgaAAgQgSg");
	this.shape_4.setTransform(92.1,-8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhCBEQgHgCAAgGQAAgFAGgDIAEgBQAEgCABgFQABgEAAgLIAAgJIAAgLIAAgNQAAgVgBgHQgBgHgDgBIgGgCQgIgDAAgFQAAgDACgCQADgDAGgCIATgGIAOgDQAEAAACADQACACAAAEIAAAJIAAABIABABIABAAIAAgBIADgDIADgCQAPgOAQAAQAKAAAJAEQAJAEAHAIQAGAHADALQACAKAAAWIAAASIAAAJIAAAHQAAAKABAEQACAEADACIAEABQAGADAAAFQAAAFgGADQgGACgVAAQgTAAgHgCQgGgCAAgGQAAgFAGgCIAGgDQADgBABgGIABgVQAAgrgFgLQgGgLgOAAQgHAAgGAFQgHAEgDAHQgDAGgCALIgBAlIABASQABAEADABIAFADQAHACAAAFQAAAGgGACQgHACgSAAQgVAAgGgCg");
	this.shape_5.setTransform(74.9,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgMgMQgNgMAAgSQAAgXAQgLQAQgMAdAAQAGAAAEACQADACAAAGQAAAGgJABQgNgBgJAHQgIAGAAAMQAAALAHAGQAHAHANAAQAMAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgFADQgGADgFAGIgDADQgJALgJAAQgFAAgEgEQgDgDAAgGQAAgNAQgIQAQgJAZAAQAOAAALADQALAEAGAIQAEAGACAIQACAIAAAUIAAArIABALQABAFADAAIAEACQAJACAAAFQAAAGgJAGQgKAEgMABQgGgBgHgGg");
	this.shape_6.setTransform(59.1,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(49.7,-26.7,127.8,36.5);


(lib.WFM_Logo_White_RGBbrownbackgroundai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(175,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(305.4,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(163.9,260);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(305.6,233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(126.2,205.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(130.7,263.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(239.5,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(181.9,205.3);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);
	this.instance.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.thanksgiving = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.subhead();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.thanksgiving, new cjs.Rectangle(-159.3,7.6,175.1,36.5), null);


(lib.makedeliciousmemories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tastingeventmc();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,26);
	this.instance.alpha = 0.93;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,17.6,195.4,16.9);


(lib.wfmbrownbackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WFM_Logo_White_RGBbrownbackgroundai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


// stage content:
(lib.squaregetinspirednowatercolor = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//main button, go to specified website on click
		
		this.btn_main.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.wholefoodsmarket.com/stores/list", "_blank");
		}
	}
	this.frame_156 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(156).call(this.frame_156).wait(3));

	// button
	this.btn_main = new lib.mainbtngreen();
	this.btn_main.parent = this;
	this.btn_main.setTransform(149.7,124.5);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbtngreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(159));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,126.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159));

	// fade-from-white
	this.instance_1 = new lib.fadefromwhite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,125.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(150));

	// mask-make-delicious-memories (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Au5GJIAAk2If2AAIAAE2g");
	mask.setTransform(108.5,39.3);

	// make-delicious-memories
	this.instance_2 = new lib.makedeliciousmemories("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-82.9,34.4);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({mode:"independent"},0).to({x:113.5,alpha:1},10).to({x:109.5},8).wait(81));

	// and-more
	this.instance_3 = new lib.more("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(69.2,129.9);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({mode:"independent"},0).to({alpha:1},10).wait(40));

	// recipes
	this.instance_4 = new lib.recipes("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.5,94.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({mode:"independent"},0).to({alpha:1},10).wait(54));

	// holiday tips,
	this.instance_5 = new lib.subhead();
	this.instance_5.parent = this;
	this.instance_5.setTransform(116.7,123.7);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.thanksgiving();
	this.instance_6.parent = this;
	this.instance_6.setTransform(169.4,61.2);
	this.instance_6.alpha = 0;
	this.instance_6.shadow = new cjs.Shadow("#000000",0,0,16);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},81).to({state:[{t:this.instance_6}]},10).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81).to({_off:false},0).to({alpha:1},10).wait(68));

	// get-inspired-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnVNhIAAjIIT/AAIAADIg");
	mask_1.setTransform(81,86.5);

	// get inspired
	this.instance_7 = new lib.FindaStore();
	this.instance_7.parent = this;
	this.instance_7.setTransform(77.2,187.1);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125).to({x:-29.1},0).to({x:82.2,alpha:1},10,cjs.Ease.get(1)).to({x:77.2},8,cjs.Ease.get(1)).wait(16));

	// rectangle-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ArCOTIAAmkIYAAAIAAGkg");
	mask_2.setTransform(83,91.5);

	// cta-rectangle
	this.instance_8 = new lib.ctarectangle();
	this.instance_8.parent = this;
	this.instance_8.setTransform(76.9,171.8);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.ctawhiterectangle();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-47.6,171.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},125).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_9}]},8).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(125).to({_off:false},0).to({x:80.9,alpha:1},10,cjs.Ease.get(1)).to({x:76.9},8,cjs.Ease.get(1)).wait(16));

	// logo
	this.instance_10 = new lib.wfmbrownbackground("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(250.8,32.8,0.223,0.223);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({scaleX:0,scaleY:0},0).to({regX:0.2,scaleX:0.24,scaleY:0.24,alpha:1},6).to({regX:0,scaleX:0.22,scaleY:0.22},7).wait(137));

	// table
	this.instance_11 = new lib.getinspiredtrace();
	this.instance_11.parent = this;
	this.instance_11.setTransform(299.6,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:0},58,cjs.Ease.sineInOut).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,118.9,601.5,263.2);
// library properties:
lib.properties = {
	id: '92879F2740E34FB9890B82961B713FEA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/squaretable.jpg", id:"squaretable"}
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
an.compositions['92879F2740E34FB9890B82961B713FEA'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;