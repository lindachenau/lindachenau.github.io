(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Bnpz:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),l=(n("ls82"),n("HaE+")),i=n("q1tI"),o=n.n(i),c=n("Bl7J"),s=n("X3x9"),u=n("AO0C"),p=n("1VNF"),d=(n("Y9L4"),n("1dQC")),m=n.n(d),f=n("R/WZ"),h=n("wx14"),g=n("Ff2n"),v=(n("USxY"),n("iuhU")),w=n("H2TA"),b=i.forwardRef((function(e,t){var n=e.cellHeight,a=void 0===n?180:n,r=e.children,l=e.classes,o=e.className,c=e.cols,s=void 0===c?2:c,u=e.component,p=void 0===u?"ul":u,d=e.spacing,m=void 0===d?4:d,f=e.style,w=Object(g.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return i.createElement(p,Object(h.a)({className:Object(v.a)(l.root,o),ref:t,style:Object(h.a)({margin:-m/2},f)},w),i.Children.map(r,(function(e){if(!i.isValidElement(e))return null;var t=e.props.cols||1,n=e.props.rows||1;return i.cloneElement(e,{style:Object(h.a)({width:"".concat(100/s*t,"%"),height:"auto"===a?"auto":a*n+m,padding:m/2},e.props.style)})})))})),E=Object(w.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(b),j=n("KQm4"),O=n("l3Wi"),y=n("ucBr"),x=function(e,t){var n,a,r,l;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((n=e.classList).remove.apply(n,Object(j.a)(t.imgFullWidth.split(" "))),(a=e.classList).add.apply(a,Object(j.a)(t.imgFullHeight.split(" ")))):((r=e.classList).remove.apply(r,Object(j.a)(t.imgFullHeight.split(" "))),(l=e.classList).add.apply(l,Object(j.a)(t.imgFullWidth.split(" ")))))};var N=i.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,l=(e.cols,e.component),o=void 0===l?"li":l,c=(e.rows,Object(g.a)(e,["children","classes","className","cols","component","rows"])),s=i.useRef(null);return i.useEffect((function(){!function(e,t){e&&(e.complete?x(e,t):e.addEventListener("load",(function(){x(e,t)})))}(s.current,a)})),i.useEffect((function(){var e=Object(O.a)((function(){x(s.current,a)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[a]),i.createElement(o,Object(h.a)({className:Object(v.a)(a.root,r),ref:t},c),i.createElement("div",{className:a.tile},i.Children.map(n,(function(e){return i.isValidElement(e)?"img"===e.type||Object(y.a)(e,["Image"])?i.cloneElement(e,{ref:s}):e:null}))))})),k=Object(w.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(N),S=function(e){var t=e.images,n=Object(i.useState)(0),a=n[0],r=n[1],l=Object(i.useState)(!1),c=l[0],s=l[1],d=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",overflow:"hidden",backgroundColor:e.palette.background.paper}}}))();return o.a.createElement(u.m,{className:"mt-3"},o.a.createElement("div",{className:"mdb-lightbox"},o.a.createElement("div",{className:d.root},o.a.createElement(E,{cellHeight:"250",cols:"undefined"!=typeof window&&window.innerWidth>=992?3:1},function(){var e=-1;return t.map((function(t){var n,a=++e;return o.a.createElement(k,{key:t},o.a.createElement("img",{src:t,srcset:(n=t,n+"?tr=w-600 600w, "+n+"?tr=w-900 900w, "+n+"?tr=w-1200 1200w"),alt:"Gallery",loading:"lazy",onClick:function(){r(a),s(!0)},className:m.a.imgBox}))}))}()))),c&&o.a.createElement(p.a,{mainSrc:t[a],nextSrc:t[(a+1)%t.length],prevSrc:t[(a+t.length-1)%t.length],imageTitle:a+1+"/"+t.length,onCloseRequest:function(){return s(!1)},onMovePrevRequest:function(){return r((a+t.length-1)%t.length)},onMoveNextRequest:function(){return r((a+1)%t.length)}}))},W=n("vDqi"),L=n.n(W);t.default=function(){var e=Object(i.useState)([]),t=e[0],n=e[1];return Object(i.useEffect)((function(){(function(){var e=Object(l.a)(r.a.mark((function e(){var t,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"post",headers:{"Content-Type":"application/json"},url:"https://9vhgj5shzc.execute-api.ap-southeast-2.amazonaws.com/dev/api/files",data:{path:"watercolour"}},e.next=4,L()(t);case 4:a=e.sent,l=a.data,n(l.sort((function(e,t){return e.substring(51,55)<t.substring(51,55)?1:-1}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(c.a,null,o.a.createElement(s.a,{title:"Watercolour paintings"},o.a.createElement(S,{images:t})))}}}]);
//# sourceMappingURL=component---src-pages-watercolour-js-5b5642e5beed61ea7897.js.map