(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Bnpz:function(e,t,n){"use strict";n.r(t);n("pJf4"),n("rzGZ"),n("Dq+y"),n("8npG"),n("cxuS"),n("zGcK");var a=n("q1tI"),l=n.n(a),i=n("Bl7J"),r=n("X3x9"),c=n("AO0C"),o=n("1VNF"),s=(n("Y9L4"),n("1dQC")),u=n.n(s),m=n("R/WZ"),d=(n("AqHK"),n("wx14")),p=n("Ff2n"),f=(n("TOwV"),n("iuhU")),h=n("H2TA"),g=a.forwardRef((function(e,t){var n=e.cellHeight,l=void 0===n?180:n,i=e.children,r=e.classes,c=e.className,o=e.cols,s=void 0===o?2:o,u=e.component,m=void 0===u?"ul":u,h=e.spacing,g=void 0===h?4:h,v=e.style,b=Object(p.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return a.createElement(m,Object(d.a)({className:Object(f.a)(r.root,c),ref:t,style:Object(d.a)({margin:-g/2},v)},b),a.Children.map(i,(function(e){if(!a.isValidElement(e))return null;var t=e.props.cols||1,n=e.props.rows||1;return a.cloneElement(e,{style:Object(d.a)({width:"".concat(100/s*t,"%"),height:"auto"===l?"auto":l*n+g,padding:g/2},e.props.style)})})))})),v=Object(h.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(g),b=(n("HQhv"),n("KQm4")),w=n("l3Wi"),E=n("ucBr"),O=function(e,t){var n,a,l,i;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((n=e.classList).remove.apply(n,Object(b.a)(t.imgFullWidth.split(" "))),(a=e.classList).add.apply(a,Object(b.a)(t.imgFullHeight.split(" ")))):((l=e.classList).remove.apply(l,Object(b.a)(t.imgFullHeight.split(" "))),(i=e.classList).add.apply(i,Object(b.a)(t.imgFullWidth.split(" ")))))};var j=a.forwardRef((function(e,t){var n=e.children,l=e.classes,i=e.className,r=(e.cols,e.component),c=void 0===r?"li":r,o=(e.rows,Object(p.a)(e,["children","classes","className","cols","component","rows"])),s=a.useRef(null);return a.useEffect((function(){!function(e,t){e&&(e.complete?O(e,t):e.addEventListener("load",(function(){O(e,t)})))}(s.current,l)})),a.useEffect((function(){var e=Object(w.a)((function(){O(s.current,l)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[l]),a.createElement(c,Object(d.a)({className:Object(f.a)(l.root,i),ref:t},o),a.createElement("div",{className:l.tile},a.Children.map(n,(function(e){return a.isValidElement(e)?"img"===e.type||Object(E.a)(e,["Image"])?a.cloneElement(e,{ref:s}):e:null}))))})),y=Object(h.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(j),x=function(e){var t=e.images,n=Object(a.useState)(0),i=n[0],r=n[1],s=Object(a.useState)(!1),d=s[0],p=s[1],f=Object(m.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",overflow:"hidden",backgroundColor:e.palette.background.paper}}}))();return l.a.createElement(c.m,{className:"mt-3"},l.a.createElement("div",{className:"mdb-lightbox"},l.a.createElement("div",{className:f.root},l.a.createElement(v,{cellHeight:"250",cols:window.innerWidth>=992?3:1},function(){var e=-1;return t.map((function(t,n){var a=++e;return l.a.createElement(y,{key:t},l.a.createElement("img",{src:t,alt:"Gallery",onClick:function(){r(a),p(!0)},className:u.a.figBox}))}))}()))),d&&l.a.createElement(o.a,{mainSrc:t[i],nextSrc:t[(i+1)%t.length],prevSrc:t[(i+t.length-1)%t.length],imageTitle:i+1+"/"+t.length,onCloseRequest:function(){return p(!1)},onMovePrevRequest:function(){return r((i+t.length-1)%t.length)},onMoveNextRequest:function(){return r((i+1)%t.length)}}))};t.default=function(e){var t=e.location,n=Object(a.useState)([]),c=n[0],o=n[1];return Object(a.useEffect)((function(){delete t.state.key,o(Object.values(t.state).sort((function(e,t){return e.name<t.name?1:-1})).map((function(e){return"https://drive.google.com/uc?export=view&id="+e.id})))}),[t.state]),l.a.createElement(i.a,null,l.a.createElement(r.a,{title:"Watercolour paintings"},l.a.createElement(x,{images:c})))}}}]);
//# sourceMappingURL=component---src-pages-watercolour-js-17e0404d5963220040cb.js.map