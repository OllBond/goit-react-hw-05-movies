"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{970:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(686),i=t(791),o=t(689),p=t(543),f="reviewsPage_author__x+r7E",v=t(184),h=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,i.useState)(!1),l=(0,a.Z)(h,2),d=l[0],m=l[1],x=(0,i.useState)(null),w=(0,a.Z)(x,2),g=w[0],k=w[1],b=(0,o.UO)().movieId;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,p.Hu)(b);case 4:0!==(r=e.sent).length||g?u(r):s.Notify.info("We don`t have any reviews for this movie"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,g]);var y=t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{className:f,children:["Author: ",t]}),(0,v.jsx)("p",{children:n})]},r)}));return(0,v.jsxs)(v.Fragment,{children:[d&&(0,v.jsx)("p",{children:"...loading"}),g&&(0,v.jsx)("p",{children:"Error"}),t.length>0&&(0,v.jsx)("div",{children:(0,v.jsx)("ul",{children:y})})]})},l=h;h.defaultProps={movies:[]}},543:function(e,r,t){t.d(r,{Eb:function(){return p},Hu:function(){return f},Je:function(){return s},gH:function(){return o},mU:function(){return i}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"4a2018560b79424f21a897c5cf387007",language:"en-US"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,c.get("/trending/movie/day",{params:{page:r}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=970.725cafe5.chunk.js.map