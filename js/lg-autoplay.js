!function(o,t,e,r){"use strict";var s={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},a=function(t){return this.core=o(t).data("lightGallery"),this.$el=o(t),this.core.$items.length<2?!1:(this.core.s=o.extend({},s,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};a.prototype.init=function(){var o=this;o.core.s.autoplayControls&&o.controls(),o.core.s.progressBar&&o.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),o.progress(),o.core.s.autoplay&&o.startlAuto(),o.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){o.interval&&(o.cancelAuto(),o.canceledOnTouch=!0)}),o.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!o.interval&&o.canceledOnTouch&&(o.startlAuto(),o.canceledOnTouch=!1)})},a.prototype.progress=function(){var o,t,e=this;e.$el.on("onBeforeSlide.lg.tm",function(){e.core.s.progressBar&&e.fromAuto&&(o=e.core.$outer.find(".lg-progress-bar"),t=e.core.$outer.find(".lg-progress"),e.interval&&(t.removeAttr("style"),o.removeClass("lg-start"),setTimeout(function(){t.css("transition","width "+(e.core.s.speed+e.core.s.pause)+"ms ease 0s"),o.addClass("lg-start")},20))),e.fromAuto||e.core.s.fourceAutoplay||e.cancelAuto(),e.fromAuto=!1})},a.prototype.controls=function(){var t=this,e='<span class="lg-autoplay-button lg-icon"></span>';o(this.core.s.appendAutoplayControlsTo).append(e),t.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){o(t.core.$outer).hasClass("lg-show-autoplay")?(t.cancelAuto(),t.core.s.fourceAutoplay=!1):t.interval||(t.startlAuto(),t.core.s.fourceAutoplay=t.fourceAutoplayTemp)})},a.prototype.startlAuto=function(){var o=this;o.core.$outer.find(".lg-progress").css("transition","width "+(o.core.s.speed+o.core.s.pause)+"ms ease 0s"),o.core.$outer.addClass("lg-show-autoplay"),o.core.$outer.find(".lg-progress-bar").addClass("lg-start"),o.interval=setInterval(function(){o.core.index+1<o.core.$items.length?o.core.index++:o.core.index=0,o.fromAuto=!0,o.core.slide(o.core.index,!1,!1)},o.core.s.speed+o.core.s.pause)},a.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},a.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},o.fn.lightGallery.modules.autoplay=a}(jQuery,window,document);