(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{HsDK:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),s=(a("6kNP"),a("8npG"),a("o0o1")),i=a.n(s),c=(a("E5k/"),a("ls82"),a("pJf4"),a("Wbzz")),l=a("YwZP"),u=a("v4IS"),p=function(e){return window.localStorage.gatsbyUser=JSON.stringify(e)},d=a("g4YY");function m(e,t,a,n,r,o,s){try{var i=e[o](s),c=i.value}catch(l){return void a(l)}i.done?t(c):Promise.resolve(c).then(n,r)}function g(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function s(e){m(o,n,r,s,i,"next",e)}function i(e){m(o,n,r,s,i,"throw",e)}s(void 0)}))}}var h=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={username:"",email:"",password:"",error:"",loading:!1},t.handleUpdate=function(e){var a,n;"email"===e.target.name&&t.setState(((n={})[e.target.name]=e.target.value,n.username=e.target.value,n.error="",n));t.setState(((a={})[e.target.name]=e.target.value,a.error="",a))},t.login=function(){var e=g(i.a.mark((function e(a){var n,r,o,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=t.state,r=n.username,o=n.password,e.prev=2,t.setState({loading:!0}),e.next=6,u.a.signIn(r,o);case 6:return e.next=8,u.a.currentAuthenticatedUser();case 8:s=e.sent,c=Object.assign(Object.assign({},s.attributes),{},{username:s.username}),p(c),t.setState({loading:!1}),Object(l.navigate)("/"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t.setState({error:e.t0,loading:!1}),console.log("error...: ",e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement(d.a,{title:"Sign in to your account",error:this.state.error},r.a.createElement(d.c,{handleUpdate:this.handleUpdate,email:this.state.email,autoComplete:"on"}),r.a.createElement(d.d,{handleUpdate:this.handleUpdate,password:this.state.password,autoComplete:"on"}),r.a.createElement("p",{className:"text-center"},"Forgot your password? ",r.a.createElement(c.Link,{to:"/reset"},"Reset password")),r.a.createElement("button",{onClick:function(t){return e.login(t)},type:"submit",className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading?null:"Sign In",this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})),r.a.createElement("p",{style:{marginTop:40},className:"text-center"},"No account? ",r.a.createElement(c.Link,{to:"/signup"},"Create account")))},n}(r.a.Component),f=a("AL3R"),v=a("rzrB");f.default.configure(v.a);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-signin-js-0261ea967afcddd22902.js.map