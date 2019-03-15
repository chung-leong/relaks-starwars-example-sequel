(window.webpackJsonp=window.webpackJsonp||[]).push([["species-page"],{137:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SpeciesPageSync=n.SpeciesPage=n.default=void 0;var a=f(t(36)),i=f(t(37)),l=f(t(61)),s=f(t(21)),r=f(t(22)),u=f(t(62)),o=f(t(63)),p=t(11),c=t(64),d=t(142),h=f(t(143));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function n(){return(0,s.default)(this,n),(0,u.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,o.default)(n,e),(0,r.default)(n,[{key:"renderAsync",value:function(){var e=(0,i.default)(a.default.mark(function e(n){var t,i,l,s;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,i=t.route,l=t.swapi,s={route:i},n.show((0,p.h)(v,s)),e.next=5,l.fetchOne("/species/"+i.params.id+"/");case 5:return s.species=e.sent,n.show((0,p.h)(v,s)),e.next=9,l.fetchMultiple(s.species.films,{minimum:"60%"});case 9:return s.films=e.sent,n.show((0,p.h)(v,s)),e.next=13,l.fetchMultiple(s.species.people,{minimum:"60%"});case 13:return s.people=e.sent,n.show((0,p.h)(v,s)),e.next=17,l.fetchOne(s.species.homeworld);case 17:return s.homeworld=e.sent,e.abrupt("return",(0,p.h)(v,s));case 19:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}]),n}(c.AsyncComponent);m.displayName="SpeciesPage";var v=function(e){function n(){return(0,s.default)(this,n),(0,u.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,o.default)(n,e),(0,r.default)(n,[{key:"render",value:function(){var e=this.props,n=e.route,t=e.species,a=e.homeworld,i=e.people,l=e.films;return t?(0,p.h)("div",{className:"character-page"},(0,p.h)("h1",null,t.name),(0,p.h)("div",null,"Classification: ",t.classification),(0,p.h)("div",null,"Designation: ",t.designation),(0,p.h)("div",null,"Average height: ",t.average_height),(0,p.h)("div",null,"Skin colors: ",t.skin_colors),(0,p.h)("div",null,"Hair colors: ",t.hair_colors),(0,p.h)("div",null,"Eye colors: ",t.eye_colors),(0,p.h)("div",null,"Average lifespan: ",t.average_lifespan),(0,p.h)("div",null,"Language: ",t.language),(0,p.h)("h2",null,"Homeworld"),(0,p.h)(d.List,{urls:t.homeworld,items:a,pageName:"planet-summary",route:n}),(0,p.h)("h2",null,"Members"),(0,p.h)(d.List,{urls:t.people,items:i,pageName:"character-summary",route:n}),(0,p.h)("h2",null,"Films"),(0,p.h)(d.List,{urls:t.films,items:l,field:"title",pageName:"film-summary",route:n})):(0,p.h)(h.default,null)}}]),n}(p.Component);v.displayName="SpeciesPageSync",n.default=m,n.SpeciesPage=m,n.SpeciesPageSync=v},142:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.List=n.default=void 0;var a=t(11);function i(e){var n=e.route,t=e.urls,i=e.items,l=e.field,s=e.pageName;return t&&("string"==typeof t&&(t=[t],i=[i]),i=t.map(function(e,n){var t=i?i[n]:null;return t||(t={url:e,pending:!0}),t})),i?0===i.length?(0,a.h)("ul",{className:"empty"},(0,a.h)("li",null,(0,a.h)("span",null,"none"))):(0,a.h)("ul",null,i.map(function(e){var t=n.extractID(e.url),i=n.find(s,{id:t}),r=e.pending?"...":e[l],u={href:i,className:e.pending?"pending":void 0};return(0,a.h)("li",null,(0,a.h)("a",u,r))})):null}i.defaultProps={field:"name"},i.displayName="List",n.default=i,n.List=i},143:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Loading=n.default=void 0;var a=t(11);function i(){return(0,a.h)("div",{className:"loading"},(0,a.h)("div",null,(0,a.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}i.displayName="Loading",n.default=i,n.Loading=i}}]);