"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[522],{238:function(t,e,n){n.d(e,{Hj:function(){return l},R8:function(){return s},Yc:function(){return m},dU:function(){return i},gW:function(){return h}});var r=n(861),c=n(757),a=n.n(c),o="17c4970d0921f1b7b3b06c6448785e5d";function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat(o)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?query=").concat(e,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"?api_key=").concat(o));case 3:if(!(n=t.sent).ok){t.next=6;break}return t.abrupt("return",n.json());case 6:return t.abrupt("return",Promise.reject(new Error(" Error: 404")));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/credits?api_key=").concat(o)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},522:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(885),c=n(238),a=n(791),o=n(501),i=n(871),u=n(184);function s(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],p=(0,i.TH)();return(0,a.useEffect)((function(){(0,c.dU)().then((function(t){s(t.results)})),window.localStorage.removeItem("films_in_search")}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Trending today"}),n&&(0,u.jsx)("ul",{children:n.map((function(t){var e=t.id,n=t.title,r=t.name;return(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"/films/".concat(e),state:{from:p,label:"Go back Home"},children:n||r})},e)}))})]})}}}]);
//# sourceMappingURL=522.69a60097.chunk.js.map