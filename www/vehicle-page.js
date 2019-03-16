(window.webpackJsonp=window.webpackJsonp||[]).push([["vehicle-page"],{124:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VehiclePage=t.default=void 0;var a,n=o(l(26)),u=o(l(47)),r=o(l(27)),i=(a=(0,r.default)(n.default.mark(function e(t){var l,a,r,i,c,o,p,v,g;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g=function(){c(o?d.default.createElement("div",null,d.default.createElement("h1",null,o.name),d.default.createElement("div",null,"Model: ",o.model),d.default.createElement("div",null,"Manufacturer: ",o.manufacturer),d.default.createElement("div",null,"Cost in credits: ",o.cost_in_credits),d.default.createElement("div",null,"Length: ",o.length," m"),d.default.createElement("div",null,"Max atmosphering speed: ",o.max_atmosphering_speed," km/h"),d.default.createElement("div",null,"Crew: ",o.crew),d.default.createElement("div",null,"Passengers: ",o.passenger),d.default.createElement("div",null,"Cargo capacity: ",o.cargo_capacity," kg"),d.default.createElement("div",null,"Consumables: ",o.consumables),d.default.createElement("div",null,"Vehicle class: ",o.vehicle_class),d.default.createElement("h2",null,"Pilots"),d.default.createElement(f.List,{urls:o.pilots,items:v,pageName:"character-summary",route:l}),d.default.createElement("h2",null,"Films"),d.default.createElement(f.List,{urls:o.films,items:p,field:"title",pageName:"film-summary",route:l})):d.default.createElement(m.default,null))},l=t.route,a=t.swapi,r=(0,s.useProgress)(),i=(0,u.default)(r,1),c=i[0],g(),e.next=6,a.fetchOne("/vehicles/"+l.params.id+"/");case 6:return o=e.sent,g(),e.next=10,a.fetchMultiple(o.films,{minimum:"60%"});case 10:return p=e.sent,g(),e.next=14,a.fetchMultiple(o.pilots,{minimum:"60%"});case 14:v=e.sent,g();case 16:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)}),d=o(l(8)),s=l(48),c=o(s),f=l(127),m=o(l(128));function o(e){return e&&e.__esModule?e:{default:e}}var p=(0,c.default)(i);t.default=p,t.VehiclePage=p},127:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a,n=l(8),u=(a=n)&&a.__esModule?a:{default:a};function r(e){var t=e.route,l=e.urls,a=e.items,n=e.field,r=e.pageName;return l&&("string"==typeof l&&(l=[l],a=[a]),a=l.map(function(e,t){var l=a?a[t]:null;return l||(l={url:e,pending:!0}),l})),a?0===a.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,a.map(function(e,l){var a=t.extractID(e.url),i=t.find(r,{id:a}),d=e.pending?"...":e[n],s={href:i,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:l},u.default.createElement("a",s,d))})):null}r.defaultProps={field:"name"},t.default=r,t.List=r},128:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a,n=l(8),u=(a=n)&&a.__esModule?a:{default:a};function r(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}t.default=r,t.Loading=r}}]);
//# sourceMappingURL=vehicle-page.js.map