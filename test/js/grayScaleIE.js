/*! Gray v1.4.5 https://github.com/karlhorky/gray) | MIT */
/*! Modernizr 2.8.3 (Custom Build) | MIT & BSD */
;window.Modernizr=window.Modernizr||function(a,b,c){function d(a){n.cssText=a}function f(a,b){return typeof a===b}var o,x,z,i="2.8.3",j={},k=b.documentElement,l="modernizr",m=b.createElement(l),n=m.style,q=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),r={svg:"http://www.w3.org/2000/svg"},s={},v=[],w=v.slice,y={}.hasOwnProperty;z=f(y,"undefined")||f(y.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return y.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=w.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(w.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(w.call(arguments)))};return d}),s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg};for(var A in s)z(s,A)&&(x=A.toLowerCase(),j[x]=s[A](),v.push((j[x]?"":"no-")+x));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)z(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(k.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),m=o=null,j._version=i,j._prefixes=q,j}(this,this.document),Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("svgfilters",function(){var a=!1;try{a=void 0!==typeof SVGFEColorMatrixElement&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(b){}return a}),function(a,b,c,d){function g(b,c){var d,g;c=c||{},d=c.classes||{},g=d.fade||f.classes.fade,c.fade=c.fade||b.className.indexOf(g)>-1,this.element=b,this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="gray",f={fade:!1,classes:{fade:"grayscale-fade"}};a.extend(g.prototype,{init:function(){var b;!Modernizr.cssfilters&&Modernizr.inlinesvg&&Modernizr.svgfilters&&(b=a(this.element),(this.cssFilterDeprecated(b)||this.settings.fade)&&this.switchImage(b))},cssFilterDeprecated:function(a){return"none"===a.css("filter")},elementType:function(a){return"IMG"===a.prop("tagName")?"Img":"Bg"},pxToNumber:function(a){return parseInt(a.replace("px",""))},getComputedStyle:function(a){var c={},d={};c=b.getComputedStyle(a,null);for(var e=0,f=c.length;f>e;e++){var g=c[e],h=c.getPropertyValue(g);d[g]=h}return d},extractUrl:function(a){var b;return startRegex=/^url\(["']?/,endRegex=/["']?\)$/,b=a.replace(startRegex,"").replace(endRegex,"")},positionToNegativeMargin:function(a){var b,c,d;return b=a.match(/^(-?\d+\S+)/)[0],c=a.match(/\s(-?\d+\S+)$/)[0],d="margin:"+c+" 0 0 "+b},getBgSize:function(b,c){var d,e,f,g,h,i,j;if(d=new Image,d.src=b,"auto"!==c&&"cover"!==c&&"contain"!==c&&"inherit"!==c){var k=a(this.element);e=d.width/d.height,g=parseInt((c.match(/^(\d+)px/)||[0,0])[1]),i=parseInt((c.match(/\s(\d+)px$/)||[0,0])[1]),f=k.height()*e,h=k.width()/e,g=g||f,i=i||h}return j=g||i?{width:g,height:i}:{width:d.width,height:d.height}},getImgParams:function(a){var b={};b.styles=this.getComputedStyle(a[0]);var c={top:this.pxToNumber(b.styles["padding-top"]),right:this.pxToNumber(b.styles["padding-right"]),bottom:this.pxToNumber(b.styles["padding-bottom"]),left:this.pxToNumber(b.styles["padding-left"])},d={top:this.pxToNumber(b.styles["border-top-width"]),right:this.pxToNumber(b.styles["border-right-width"]),bottom:this.pxToNumber(b.styles["border-bottom-width"]),left:this.pxToNumber(b.styles["border-left-width"])};return b.image={width:this.pxToNumber(b.styles.width),height:this.pxToNumber(b.styles.height)},b.svg={url:a[0].src,padding:c,borderWidth:d,width:b.image.width+c.left+c.right+d.left+d.right,height:b.image.height+c.top+c.bottom+d.top+d.bottom,offset:""},b},getBgParams:function(b){var d,c={};return d=this.extractUrl(b.css("background-image")),bgSize=this.getBgSize(d,b.css("background-size")),offset=this.positionToNegativeMargin(b.css("background-position")),c.styles=this.getComputedStyle(b[0]),c.svg=a.extend({url:d},bgSize,{offset:offset}),c.image={width:c.svg.width,height:c.svg.height},c},setStyles:function(a,b,c,d){return b.display="inline-block",b.overflow=b["overflow-x"]=b["overflow-y"]="hidden",b["background-image"]='url("'+c.url+'")',b["background-size"]=d.width+"px "+d.height+"px","Img"===a&&(b["background-repeat"]="no-repeat",b["background-position"]=c.padding.left+"px "+c.padding.top+"px",b.width=c.width,b.height=c.height),delete b.filter,b},addSVGFilterOnce:function(){$body=a("body"),$body.data("plugin_"+e+"_has_filter")||$body.data("plugin_"+e+"_has_filter","true").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute"><defs><filter id="gray"><feColorMatrix type="saturate" values="0"/></filter></defs></svg>')},switchImage:function(b){var c,d,e,f;c=this.elementType(b),d=this["get"+c+"Params"](b),e=this.settings.fade?this.settings.classes.fade:"",f=a('<div class="grayscale grayscale-replaced '+e+'"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+d.svg.width+" "+d.svg.height+'" width="'+d.svg.width+'" height="'+d.svg.height+'" style="'+d.svg.offset+'"><image filter="url(&quot;#gray&quot;)" x="0" y="0" width="'+d.image.width+'" height="'+d.image.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+d.svg.url+'" /></svg></div>'),d.styles=this.setStyles(c,d.styles,d.svg,d.image),f.css(d.styles),this.addSVGFilterOnce(),b.replaceWith(f)}}),a.fn[e]=function(b){return this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new g(this,b))}),this},a(b).on("load",function(){a(".grayscale:not(.grayscale-replaced)")[e]()})}(jQuery,window,document);
