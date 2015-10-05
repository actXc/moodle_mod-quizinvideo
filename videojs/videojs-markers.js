/*! videojs-markers - v0.5.0 - 2015-08-01
* Copyright (c) 2015 ; Licensed  */
"use strict";!function(a,b){function c(){var a=(new Date).getTime(),b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:3&c|8).toString(16)});return b}function d(b){function d(){s.sort(function(a,b){return q.markerTip.time(a)-q.markerTip.time(b)})}function f(b){a.each(b,function(a,b){b.key=c(),t.find(".vjs-progress-control").append(h(b)),r[b.key]=b,s.push(b)}),d()}function g(a){return q.markerTip.time(a)/v.duration()*100}function h(b){var c=a("<div class='vjs-marker'></div>");return c.css(q.markerStyle).css({"margin-left":-parseFloat(c.css("width"))/2+"px",left:g(b)+"%"}).attr("data-marker-key",b.key).attr("data-marker-time",q.markerTip.time(b)),b["class"]&&c.addClass(b["class"]),c.on("click",function(){var c=!1;if("function"==typeof q.onMarkerClick&&(c=0==q.onMarkerClick(b)),!c){var d=a(this).data("marker-key");v.currentTime(q.markerTip.time(r[d]))}}),q.markerTip.display&&k(c),c}function i(){for(var a=0;a<s.length;a++){var b=s[a],c=t.find(".vjs-marker[data-marker-key='"+b.key+"']"),e=q.markerTip.time(b);c.data("marker-time")!=e&&c.css({left:g(b)+"%"}).attr("data-marker-time",e)}d()}function j(a){x&&(y=-1,x.css("visibility","hidden")),u=-1;for(var b=0;b<a.length;b++){var c=a[b],e=s[c];e&&(delete r[e.key],s[c]=null,t.find(".vjs-marker[data-marker-key='"+e.key+"']").remove())}for(var b=s.length-1;b>=0;b--)null===s[b]&&s.splice(b,1);d()}function k(b){}function l(){w=a("<div class='vjs-tip'><div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div></div>"),t.find(".vjs-progress-control").append(w)}function m(a){if(!(0>u)){var b=s[u],c=q.markerTip.time(b);a>=c&&a<=c+q.breakOverlay.displayTime?(y!=u&&(y=u,x.find(".vjs-break-overlay-text").text(q.breakOverlay.text(b))),x.css("visibility","visible")):(y=-1,x.css("visibility","hidden"))}}function n(){x=a("<div class='vjs-break-overlay'><div class='vjs-break-overlay-text'></div></div>").css(q.breakOverlay.style),t.append(x),y=-1}function o(){var a,c=function(a){return a<s.length-1?q.markerTip.time(s[a+1]):v.duration()},d=v.currentTime();if(-1!=u){var e=c(u);if(d>=q.markerTip.time(s[u])&&e>d)return}if(s.length>0&&d<q.markerTip.time(s[0]))a=-1;else for(var f=0;f<s.length;f++)if(e=c(f),d>=q.markerTip.time(s[f])&&e>d){a=f;break}a!=u&&(-1!=a&&b.onMarkerReached&&b.onMarkerReached(s[a]),u=a),q.breakOverlay.display&&m(d)}function p(){q.markerTip.display&&l(),v.markers.removeAll(),f(b.markers),q.breakOverlay.display&&n(),o(),v.on("timeupdate",o)}var q=a.extend(!0,{},e,b),r={},s=[],t=a(this.el()),u=-1,v=this,w=null,x=null,y=-1;v.on("loadedmetadata",function(){p()}),v.markers={getMarkers:function(){return s},next:function(){for(var a=v.currentTime(),b=0;b<s.length;b++){var c=q.markerTip.time(s[b]);if(c>a){v.currentTime(c);break}}},prev:function(){for(var a=v.currentTime(),b=s.length-1;b>=0;b--){var c=q.markerTip.time(s[b]);if(a>c+.5){v.currentTime(c);break}}},add:function(a){f(a)},remove:function(a){j(a)},removeAll:function(){for(var a=[],b=0;b<s.length;b++)a.push(b);j(a)},updateTime:function(){i()},reset:function(a){v.markers.removeAll(),f(a)},destroy:function(){v.markers.removeAll(),x.remove(),w.remove(),v.off("timeupdate",m),delete v.markers}}}var e={markerStyle:{width:"7px","border-radius":"30%","background-color":"red"},markerTip:{display:!0,text:function(a){return"Break: "+a.text},time:function(a){return a.time}},breakOverlay:{display:!1,displayTime:3,text:function(a){return"Break overlay: "+a.overlayText},style:{width:"100%",height:"20%","background-color":"rgba(0,0,0,0.7)",color:"white","font-size":"17px"}},onMarkerClick:function(){},onMarkerReached:function(){},markers:[]};b.plugin("markers",d)}(jQuery,window.videojs);