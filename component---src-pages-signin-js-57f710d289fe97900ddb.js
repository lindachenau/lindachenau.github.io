(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{HsDK:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("Bl7J"),o=a("o0o1"),i=a.n(o),l=(a("ls82"),a("HaE+")),c=a("dI71"),u=a("Wbzz"),p=a("YwZP"),d=a("v4IS"),m=a("wC9Q"),g=a("g4YY"),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={username:"",email:"",password:"",error:"",loading:!1},t.handleUpdate=function(e){var a,n;"email"===e.target.name&&t.setState(((n={})[e.target.name]=e.target.value,n.username=e.target.value,n.error="",n));t.setState(((a={})[e.target.name]=e.target.value,a.error="",a))},t.getRole=function(e){return new Promise((function(t,a){e.getUserAttributes((function(e,n){e&&a({error:e.message||JSON.stringify(e)}),t(n[2].Value)}))}))},t.login=function(){var e=Object(l.a)(i.a.mark((function e(a){var n,r,s,o,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=t.state,r=n.username,s=n.password,e.prev=2,t.setState({loading:!0}),e.next=6,d.a.signIn(r,s);case 6:return e.next=8,d.a.currentAuthenticatedUser();case 8:return o=e.sent,e.next=11,t.getRole(o);case 11:l=e.sent,c=Object.assign({},o.attributes,{username:o.username,role:l}),Object(m.c)(c),t.setState({loading:!1}),Object(p.navigate)("/"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),t.setState({error:e.t0,loading:!1}),console.log("error...: ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(c.a)(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(g.a,{title:"Sign in to your account",error:this.state.error},r.a.createElement(g.c,{handleUpdate:this.handleUpdate,email:this.state.email,autoComplete:"on"}),r.a.createElement(g.d,{handleUpdate:this.handleUpdate,password:this.state.password,autoComplete:"on"}),r.a.createElement("p",{className:"text-center"},"Forgot your password? ",r.a.createElement(u.Link,{to:"/reset"},"Reset password")),r.a.createElement("button",{onClick:function(t){return e.login(t)},type:"submit",className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading?null:"Sign In",this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})),r.a.createElement("p",{style:{marginTop:40},className:"text-center"},"No account? ",r.a.createElement(u.Link,{to:"/signup"},"Create account")))},t}(r.a.Component),f=a("AL3R"),b=a("rzrB");f.default.configure(b.a);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-signin-js-57f710d289fe97900ddb.js.map