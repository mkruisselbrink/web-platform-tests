/*
Distributed under both the W3C Test Suite License [1] and the W3C
3-clause BSD License [2]. To contribute to a W3C Test Suite, see the
policies and contribution forms [3].

[1] http://www.w3.org/Consortium/Legal/2008/04-testsuite-license
[2] http://www.w3.org/Consortium/Legal/2008/03-bsd-license
[3] http://www.w3.org/2004/10/27-testcases
*/

var A_05_05_01 = {
    name:'A_05_05_01',
    assert:'Event Dispatch: ' +
		'At the time of event dispatch:' +
		'The Event target and currentTarget attributes must return the relative target for the node ' + 
		'on which event listeners are invoked',
    highlight:'[[At the time of event dispatch:]][\\s\\S]*' +
    	'[[The Event target and currentTarget attributes must return the relative target for the node ' + 
		'on which event listeners are invoked]]'
};


var A_05_05_01_T01 = async_test('A_05_05_01_T01', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T01.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-slider-thumb relative target	#volume-slider-thumb
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').addEventListener('click', 
	    A_05_05_01_T01.step_func(function(event) {
	    	invoked = true;
	    	assert_equals(event.target.getAttribute('id'), 'volume-slider-thumb', 
	    			'Point 1: Wrong target');
	    	assert_equals(event.currentTarget.getAttribute('id'), 'volume-slider-thumb', 
	    			'Point 1: Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
    assert_true(invoked, 'Event listener was not invoked');
    
    A_05_05_01_T01.done();
}));


var A_05_05_01_T02 = async_test('A_05_05_01_T02', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T02.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-shadow-root relative target	#volume-slider-thumb
    roots.volumeShadowRoot.addEventListener('click', 
    		A_05_05_01_T02.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'volume-slider-thumb', 
		    			'Wrong target');
		    	assert_true(event.currentTarget == roots.volumeShadowRoot, 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
    assert_true(invoked, 'Event listener was not invoked');
    
    A_05_05_01_T02.done();
}));


var A_05_05_01_T03 = async_test('A_05_05_01_T03', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T03.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-slider relative target #volume-slider
    roots.playerShadowRoot.querySelector('#volume-slider').addEventListener('click', 
    		A_05_05_01_T03.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'volume-slider', 
		    			'Wrong target');
		    	assert_true(event.currentTarget.getAttribute('id'), 'volume-slider', 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
   	assert_true(invoked, 'Event listener was not invoked');
    
    A_05_05_01_T03.done();
}));



var A_05_05_01_T04 = async_test('A_05_05_01_T04', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T04.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #volume-slider-container relative target #volume-slider
    roots.playerShadowRoot.querySelector('#volume-slider-container').addEventListener('click', 
    		A_05_05_01_T04.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'volume-slider', 
		    			'Wrong target');
		    	assert_true(event.currentTarget.getAttribute('id'), 'volume-slider', 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
   	assert_true(invoked, 'Event listener was not invoked');
    
   	A_05_05_01_T04.done();
}));


var A_05_05_01_T05 = async_test('A_05_05_01_T05', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T05.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #controls relative target #volume-slider
    roots.playerShadowRoot.querySelector('#controls').addEventListener('click', 
    		A_05_05_01_T05.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'volume-slider', 
		    			'Wrong target');
		    	assert_true(event.currentTarget.getAttribute('id'), 'volume-slider', 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
   	assert_true(invoked, 'Event listener was not invoked');
    
   	A_05_05_01_T05.done();
}));


var A_05_05_01_T06 = async_test('A_05_05_01_T06', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T06.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #player-shadow-root relative target #volume-slider
    roots.playerShadowRoot.addEventListener('click', 
    		A_05_05_01_T06.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'volume-slider', 
		    			'Wrong target');
		    	assert_true(event.currentTarget.getAttribute('id'), 'volume-slider', 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
   	assert_true(invoked, 'Event listener was not invoked');
    
   	A_05_05_01_T06.done();
}));



var A_05_05_01_T07 = async_test('A_05_05_01_T07', PROPS(A_05_05_01, {
    author:'Sergey G. Grekhov <sgrekhov@unipro.ru>',
    reviewer:''
}));

A_05_05_01_T07.step(unit(function (ctx) {	
	
    var d = newRenderedHTMLDocument(ctx);
    
    var invoked = false;
    
    roots = createTestMediaPlayer(d);
    
    //expected result of what relative target should be see
    //see at http://www.w3.org/TR/shadow-dom/#event-retargeting-example
    
    //For #player relative target #player
    d.querySelector('#player').addEventListener('click', 
    		A_05_05_01_T07.step_func(function(event) {
    			invoked = true;
		    	assert_equals(event.target.getAttribute('id'), 'player', 
		    			'Wrong target');
		    	assert_true(event.currentTarget.getAttribute('id'), 'player', 
		    			'Wrong currentTarget');
	    }), false);
    
    var event = d.createEvent('HTMLEvents');
    event.initEvent ('click', true, false);
    roots.volumeShadowRoot.querySelector('#volume-slider-thumb').dispatchEvent(event);
    
   	assert_true(invoked, 'Event listener was not invoked');
    
   	A_05_05_01_T07.done();
}));