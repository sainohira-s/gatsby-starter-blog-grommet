(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var r,a=n(8),o=n.n(a),i=n(0),l=n.n(i),c=n(196),u=n.n(c),s=n(154),d=n(198),m=n.n(d),f=n(346),h=n(349),b=n(347),p=n(151),g=n(348),v=n(153),y=n(144),E=n(217),w=n(325),x=n(326),j=n(324),O=((r=["\n  ","\n"]).raw=["\n  ","\n"],r);var k=Object(y.a)(["opacity:",";cursor:default;"],function(e){return e.theme.button.disabled.opacity});var C=Object(y.a)(["&:hover{"," "," ","}"],function(e){return e.hoverIndicator&&(t=e.hoverIndicator,n=e.theme,r=void 0,r=!0===t||"background"===t?n.global.hover.background:t,Object(y.a)([""," color:",";"],Object(w.b)(r,n),Object(E.d)(n.global.hover.color,n)));var t,n,r},function(e){return!e.plain&&Object(y.a)(["box-shadow:0px 0px 0px 2px ",";"],function(e){return e.colorValue?Object(E.a)(e.colorValue,e.theme):Object(E.d)(e.theme.button.border.color||e.theme.global.control.color,e.theme)}(e))},function(e){return!e.plain&&!e.primary&&Object(y.a)(["svg{fill:",";stroke:",";transition:none;}"],e.theme.global.hover.textColor,e.theme.global.hover.textColor)}),I=Object(y.a)(["color:inherit;border:none;padding:0;text-align:inherit;"]),S=y.b.button.withConfig({displayName:"StyledButton"})(["display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," "," "," "," ",""],function(e){return e.plain&&I},function(e){return!e.plain&&function(e){return Object(y.a)(["border:"," solid ",";border-radius:",";color:",";"],e.theme.button.border.width,Object(E.a)(Object(E.d)(e.colorValue||e.theme.button.border.color||e.theme.global.control.color||"brand",e.theme),e.theme),e.theme.button.border.radius,(e.theme.button.color||e.theme.global.text.color)[e.theme.dark?"dark":"light"])}(e)},function(e){return e.primary&&function(e){return Object(y.a)([""," border-radius:",";svg{fill:",";stroke:",";transition:none;}"],Object(w.b)(Object(E.d)(e.colorValue||e.theme.button.primary.color||e.theme.global.control.color||"brand",e.theme),e.theme),e.theme.button.border.radius,e.theme.global.text.color[Object(E.b)(Object(E.a)("brand",e.theme))?"dark":"light"],e.theme.global.text.color[Object(E.b)(Object(E.a)("brand",e.theme))?"dark":"light"])}(e)},function(e){return!e.disabled&&!e.focus&&C},function(e){return!e.disabled&&e.active&&x.a},function(e){return e.disabled&&k},function(e){return!e.plain&&"padding: "+e.theme.button.padding.vertical+" "+e.theme.button.padding.horizontal+";"},function(e){return e.focus&&(!e.plain||e.focusIndicator)&&x.e},Object(j.a)("\n    transition: 0.1s ease-in-out;\n  "),function(e){return e.fillContainer&&"\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n"},function(e){return e.hasIcon&&!e.hasLabel&&!e.plain&&"\n    padding: "+e.theme.global.edgeSize.small+";\n  "}).extend(O,function(e){return e.theme.button.extend}),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var G=S.withComponent("a"),T=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));n.children,n.icon,n.label;return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.a11yTitle,n=e.color,r=e.forwardRef,a=e.children,o=e.icon,c=e.fill,u=e.focus,s=e.href,d=e.label,m=e.onClick,h=e.plain,b=e.reverse,p=e.theme,v=e.type,y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["a11yTitle","color","forwardRef","children","icon","fill","focus","href","label","onClick","plain","reverse","theme","type"]),E=s?G:S,w="string"==typeof d?l.a.createElement(g.a,null,l.a.createElement("strong",null,d)):d,x=b?w:o,j=b?o:w,O=!s&&!m&&-1===["reset","submit"].indexOf(v);return l.a.createElement(E,R({},y,{innerRef:r,"aria-label":t,colorValue:n,disabled:O,hasIcon:!!o,hasLabel:!!d,fillContainer:c,focus:u,href:s,onClick:m,plain:void 0!==h?h:i.Children.count(a)>0||o&&!d,theme:p,type:s?void 0:v}),x||j?l.a.createElement(f.a,{direction:"row",align:"center",justify:"center",gap:"small",pad:o&&!h?"small":void 0},x,j):a)},t}(i.Component);T.defaultProps={type:"button",focusIndicator:!0};var P=Object(p.a)(v.a,v.d,v.b)(T),q=n(327),L=n(328),_=n(193);n.d(t,"pageQuery",function(){return B});var z=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=m()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,r=this.props.pageContext,a=r.previous,o=r.next;return l.a.createElement(_.a,{location:this.props.location},l.a.createElement("article",null,l.a.createElement(f.a,{round:"small",margin:"small"},l.a.createElement("header",null,l.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),l.a.createElement(f.a,{basis:"medium",fill:"true"},l.a.createElement(h.a,{round:"small",fit:"cover",title:e.frontmatter.title,alt:e.frontmatter.title,src:e.frontmatter.cover.childImageSharp.fluid.src})),l.a.createElement(f.a,{pad:"medium"},l.a.createElement(b.a,{level:"1"},e.frontmatter.title),l.a.createElement("p",null,e.frontmatter.date))),l.a.createElement(f.a,{pad:"medium"},l.a.createElement("main",null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))),l.a.createElement("aside",null,l.a.createElement(f.a,{direction:"row",justify:"center",gap:"large",margin:"medium"},a&&l.a.createElement(s.Link,{to:a.fields.slug},l.a.createElement(P,{onClick:!0,icon:l.a.createElement(q.a,null),label:"Previous"})),o&&l.a.createElement(s.Link,{to:o.fields.slug},l.a.createElement(P,{onClick:!0,icon:l.a.createElement(L.a,null),label:"Next",reverse:!0}))))))},t}(l.a.Component),B=(t.default=z,"361753566")},147:function(e,t){e.exports={title:"Starter Gatsby Blog",description:"This is a DEMO site! SSG - Gatsby JS, UI - Grommet v2",siteUrl:"https://ganevru.github.io/gatsby-starter-blog-grommet/",footerText:"2018",author:"Ivan Ganev",authorImage:"https://pbs.twimg.com/profile_images/986603715732934656/7A4Nt68k_400x400.jpg",authorBio:"Hello, I'm Ivan Ganev and I made this blog starter for Gatsby js using UI Grommet v2. <br><br>Repo of this starter: [github.com/ganevru/gatsby-starter-blog-grommet](https://github.com/ganevru/gatsby-starter-blog-grommet)",font:"Merriweather",fontHeadings:"Merriweather",brandColor:"#7D4CDB",backgroundColor:"#fff"}},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return b}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(145),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(164),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(40);n.d(t,"parsePath",function(){return m.a});var f=a.a.createContext({}),h=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},164:function(e,t,n){var r;e.exports=(r=n(175))&&r.default||r},175:function(e,t,n){"use strict";n.r(t);n(38);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(56),c=n(1),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},193:function(e,t,n){"use strict";var r=n(8),a=n.n(r),o=n(202),i=n.n(o),l=n(0),c=n.n(l),u=n(345),s=n(346),d=n(144),m=n(147),f=n.n(m),h={global:{font:{family:f.a.font},heading:{font:{family:f.a.fontHeadings}},colors:{brand:f.a.brandColor}}},b=n(347),p=n(348),g=n(154),v=function(){return c.a.createElement("header",null,c.a.createElement(s.a,{margin:"small"},c.a.createElement(g.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},c.a.createElement(b.a,{textAlign:"center",color:"brand",margin:"small"},f.a.title)),c.a.createElement(p.a,{textAlign:"center",color:"brand"},f.a.description)))},y=n(349),E=n(344),w=function(){return c.a.createElement("section",null,c.a.createElement(s.a,{round:"small",pad:"medium",margin:"small",background:"light-2"},c.a.createElement(s.a,{direction:"row"},c.a.createElement(s.a,{pad:{top:"none",bottom:"medium",right:"medium",left:"none"},round:"large",height:"xsmall",width:"xsmall"},c.a.createElement(y.a,{fit:"contain",title:f.a.author,alt:f.a.author,src:f.a.authorImage})),c.a.createElement(s.a,null,c.a.createElement(p.a,{weight:"bold",size:"large"},f.a.author))),c.a.createElement(p.a,{size:"small"},c.a.createElement(E.a,null,f.a.authorBio))))},x=function(){return c.a.createElement("footer",null,c.a.createElement(s.a,{background:"light-2",pad:"large",align:"center"},c.a.createElement(E.a,null,f.a.footerText)))};function j(){var e=i()(["\n  img {\n    border-radius: 12px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.8;\n  }\n"]);return j=function(){return e},e}n.d(t,"a",function(){return O}),Object(d.c)(j());var O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement(u.a,{theme:h},c.a.createElement(s.a,{background:f.a.backgroundColor,style:{minHeight:"100vh"},responsive:!0,margin:"small",align:"center"},c.a.createElement(v,null),c.a.createElement(s.a,{direction:"row-responsive"},c.a.createElement(s.a,{width:"large"},this.props.children),c.a.createElement("aside",null,c.a.createElement(s.a,{width:"medium"},c.a.createElement(w,null))))),c.a.createElement(x,null)))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cb96beba1595f5a9c7b3.js.map