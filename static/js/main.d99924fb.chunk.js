(this["webpackJsonpstop-light-state-machine"]=this["webpackJsonpstop-light-state-machine"]||[]).push([[0],{20:function(t,e,r){t.exports=r(36)},27:function(t,e,r){},28:function(t,e,r){},35:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var n,a,i,s,o,l,c,u,f=r(0),h=r.n(f),g=r(18),y=r.n(g),b=r(3),d=r(4),p=r(8),w=r(7),m=r(2),k=(r(27),Object(m.a)((function(t){var e=t.arrow;return f.createElement("div",{className:"turnSignalBackground"},f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-50 0 600 600",version:"1.1"},f.createElement("g",null,f.createElement("path",{className:e.style,d:"M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"}))))}))),v=Object(m.a)((function(t){var e=t.light;return f.createElement("div",{className:"container"},f.createElement("div",{className:e.red.style}),f.createElement("div",{className:e.yellow.style}),f.createElement("div",{className:e.green.style}))})),O=(r(28),Object(m.a)((function(t){var e=t.store;return f.createElement("div",{style:{display:"inline-flex",paddingLeft:"20%"}},f.createElement("button",{type:"button",onClick:e.systemError},"Throw Wrench"))}))),j=Object(m.a)((function(t){var e=t.store;return f.createElement("div",{style:{display:"block"}},f.createElement("div",{style:{display:"flex",paddingRight:"20%"}},f.createElement(k,{arrow:e.state.arrow}),f.createElement(v,{light:e.state.light})),f.createElement(O,{store:e}))})),E=r(5),B=r(6),L=(r(29),r(1)),T=r(19),N=r(10),x=r.n(N),z=function(t){throw new Error("Unexpected object: ".concat(t))},I=function(t){return x.a.succeed({}).assign("duration",Object(T.readVarT)("REACT_APP_GREEN_TO_YELLOW_DURATION")).andThen((function(t){var e,r=t.duration;return e=r,new x.a((function(t,r){var n=parseInt(e,10);return isNaN(n)?t("not a number"):r(n),function(){}}))})).fork(t.systemError,function(t){return function(e){return setTimeout((function(){t.warning()}),e)}}(t))},A=function(t){return setTimeout((function(){t.prohibiting()}),1200)},R=function(t){return setTimeout((function(){t.priorityLeft()}),3e3)},S=function(t){return setTimeout((function(){t.warningLeft()}),1e3)},W=function(t){return setTimeout((function(){t.priorityStraight()}),1e3)},_=(n=Object(d.a)((function t(){Object(b.a)(this,t),Object(E.a)(this,"state",a,this),Object(E.a)(this,"priorityStraight",i,this),Object(E.a)(this,"warning",s,this),Object(E.a)(this,"prohibiting",o,this),Object(E.a)(this,"priorityLeft",l,this),Object(E.a)(this,"warningLeft",c,this),Object(E.a)(this,"systemError",u,this)})),a=Object(B.a)(n.prototype,"state",[L.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{kind:"prohibiting",arrow:{color:"red",status:"on",style:"red"},light:{red:{status:"on",style:"lightBase red"},yellow:{status:"off",style:"lightBase"},green:{status:"off",style:"lightBase"}}}}}),i=Object(B.a)(n.prototype,"priorityStraight",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){switch(t.state.kind){case"priority-straight":case"warning":case"priority-left":case"prohibiting":break;case"warning-left":case"system-error":t.state={kind:"priority-straight",arrow:{color:"yellow",status:"flashing",style:"turnSignal"},light:{red:{status:"off",style:"lightBase"},yellow:{status:"off",style:"lightBase"},green:{status:"on",style:"lightBase green"}}};break;default:z(t.state)}}}}),s=Object(B.a)(n.prototype,"warning",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){switch(t.state.kind){case"priority-straight":t.state={kind:"warning",arrow:{color:"yellow",status:"on",style:"yellow"},light:{red:{status:"off",style:"lightBase"},yellow:{status:"on",style:"lightBase yellow"},green:{status:"off",style:"lightBase"}}};break;case"system-error":case"warning":case"prohibiting":case"priority-left":case"warning-left":break;default:z(t.state)}}}}),o=Object(B.a)(n.prototype,"prohibiting",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){switch(t.state.kind){case"priority-straight":case"prohibiting":case"priority-left":case"warning-left":break;case"warning":case"system-error":t.state={kind:"prohibiting",arrow:{color:"red",status:"on",style:"red"},light:{red:{status:"on",style:"lightBase red"},yellow:{status:"off",style:"lightBase"},green:{status:"off",style:"lightBase"}}};break;default:z(t.state)}}}}),l=Object(B.a)(n.prototype,"priorityLeft",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){switch(t.state.kind){case"priority-straight":break;case"prohibiting":t.state={kind:"priority-left",arrow:{color:"green",status:"on",style:"green"},light:{red:{status:"on",style:"lightBase red"},yellow:{status:"off",style:"lightBase"},green:{status:"off",style:"lightBase"}}};break;case"priority-left":case"warning-left":case"warning":case"system-error":break;default:z(t.state)}}}}),c=Object(B.a)(n.prototype,"warningLeft",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){switch(t.state.kind){case"priority-straight":case"prohibiting":break;case"priority-left":t.state={kind:"warning-left",arrow:{color:"yellow",status:"on",style:"yellow"},light:{red:{status:"on",style:"lightBase red"},yellow:{status:"off",style:"lightBase"},green:{status:"off",style:"lightBase"}}};break;case"warning-left":case"warning":case"system-error":break;default:z(t.state)}}}}),u=Object(B.a)(n.prototype,"systemError",[L.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){t.state={kind:"system-error",arrow:{status:"off",style:"black"},light:{red:{status:"flashing",style:"blinker"},yellow:{status:"off",style:"lightBase"},green:{status:"off",style:"lightBase"}}}}}}),n),C=function(t){Object(p.a)(r,t);var e=Object(w.a)(r);function r(){var t;Object(b.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).tester=function(){return t.props.store.state},t.effect=function(e){var r=t.props.store;switch(console.log(e.kind),e.kind){case"priority-straight":I(r);break;case"warning":A(r);break;case"prohibiting":R(r);break;case"priority-left":S(r);break;case"warning-left":W(r);break;case"system-error":console.warn("Error state has been entered, please resolve.");break;default:z(e)}},t}return Object(d.a)(r)}(function(t){Object(p.a)(r,t);var e=Object(w.a)(r);function r(t){var n;return Object(b.a)(this,r),(n=e.call(this,t)).tester=void 0,n.effect=void 0,n.comparer=L.e.default,n.running=void 0,n.state={},n}return Object(d.a)(r,[{key:"options",get:function(){return{fireImmediately:this.props.fireImmediately,delay:this.props.debounceDelay,equals:this.comparer}}},{key:"componentDidMount",value:function(){this.running=this.run()}},{key:"componentWillUnmount",value:function(){this.running&&this.running()}},{key:"render",value:function(){return f.createElement(f.Fragment,null)}},{key:"run",value:function(){return Object(L.m)(this.tester,this.effect,this.options)}}]),r}(f.Component)),D=Object(m.a)(C),U=function(t){Object(p.a)(r,t);var e=Object(w.a)(r);function r(){var t;Object(b.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).store=new _,t}return Object(d.a)(r,[{key:"render",value:function(){return f.createElement(f.Fragment,null,f.createElement(j,{store:this.store}),f.createElement(D,{store:this.store,fireImmediately:!0}))}}]),r}(f.Component),F=Object(m.a)(U);r(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.createRoot(document.getElementById("root")).render(h.a.createElement(F,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d99924fb.chunk.js.map