(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{267:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a(0),r=a(7),s=a(29),c=a(240),o=a(1);var i=Object(r.connect)((function(e){var t=e.state,a=e.item,n=t.source.author[a.author],l=new Date(a.date);return Object(o.jsx)("article",null,Object(o.jsx)(s.a,{link:a.link},Object(o.jsx)(b,{dangerouslySetInnerHTML:{__html:a.title.rendered}})),Object(o.jsx)("div",null,n&&Object(o.jsx)(u,{link:n.link},Object(o.jsx)(j,null,Object(o.jsx)("b",null,n.name))),Object(o.jsx)(x,null," ","on ",Object(o.jsx)("b",null,l.toDateString()))),t.theme.featured.showOnList&&Object(o.jsx)(c.a,{id:a.featured_media}),a.excerpt&&Object(o.jsx)(d,{dangerouslySetInnerHTML:{__html:a.excerpt.rendered}}))})),b=Object(n.a)("h1",{target:"e8eavdr0",label:"Title"})({name:"m6r8cl",styles:"font-size:2rem;color:rgba(12,17,43);margin:0;padding-top:24px;padding-bottom:8px;box-sizing:border-box;"}),j=Object(n.a)("span",{target:"e8eavdr1",label:"AuthorName"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),u=Object(n.a)(s.a,{target:"e8eavdr2",label:"StyledLink"})({name:"qar1bk",styles:"padding:15px 0;"}),x=Object(n.a)("span",{target:"e8eavdr3",label:"PublishDate"})({name:"s9xu3a",styles:"color:rgba(12,17,43,0.9);font-size:0.9em;"}),d=Object(n.a)("div",{target:"e8eavdr4",label:"Excerpt"})({name:"11j6eo1",styles:"line-height:1.6em;color:rgba(12,17,43,0.8);"});var O=Object(r.connect)((function(e){var t=e.state,a=e.actions,n=t.source.get(t.router.link),r=n.next,c=n.previous;return Object(l.useEffect)((function(){r&&a.source.fetch(r)}),[]),Object(o.jsx)("div",null,r&&Object(o.jsx)(s.a,{link:r},Object(o.jsx)(m,null,"← Older posts")),c&&r&&" - ",c&&Object(o.jsx)(s.a,{link:c},Object(o.jsx)(m,null,"Newer posts →")))})),m=Object(n.a)("em",{target:"exykzzo0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(r.connect)((function(e){var t=e.state,a=t.source.get(t.router.link);return Object(o.jsx)(g,null,a.isTaxonomy&&Object(o.jsx)(p,null,a.taxonomy,":"," ",Object(o.jsx)("b",null,Object(r.decode)(t.source[a.taxonomy][a.id].name))),a.isAuthor&&Object(o.jsx)(p,null,"Author: ",Object(o.jsx)("b",null,Object(r.decode)(t.source.author[a.id].name))),a.items.map((function(e){var a=e.type,n=e.id,l=t.source[a][n];return Object(o.jsx)(i,{key:l.id,item:l})})),Object(o.jsx)(O,null))}));var g=Object(n.a)("section",{target:"e1lcxeca0",label:"Container"})({name:"447sei",styles:"width:800px;margin:0;padding:24px;list-style:none;"}),p=Object(n.a)("h3",{target:"e1lcxeca1",label:"Header"})({name:"p2cv",styles:"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);"})}}]);