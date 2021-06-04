(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,h=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return a?n.a.createElement(h,s(s({ref:t},d),{},{components:a})):n.a.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),i=(a(0),a(108)),o={id:"businessDataDashbord",title:"Dashbord statistical rule description",sidebar_label:"Dashbord statistical rule description"},s={unversionedId:"businessDataDashbord",id:"businessDataDashbord",isDocsHomePage:!1,title:"Dashbord statistical rule description",description:"Dashbord statistical rule description",source:"@site/docs/businessDataDashbord.md",slug:"/businessDataDashbord",permalink:"/docs/jp/docs/businessDataDashbord",editUrl:"https://github.com/DODOEX/docs/edit/master/docs/businessDataDashbord.md",version:"current",sidebar_label:"Dashbord statistical rule description",sidebar:"someSidebar",previous:{title:"DODO Trade API",permalink:"/docs/jp/docs/tradeApi"},next:{title:"\u30c8\u30fc\u30af\u30f3\u306e\u7d4c\u6e08\u30e2\u30c7\u30eb",permalink:"/docs/jp/docs/dodonomics"}},c=[{value:"Dashbord statistical rule description",id:"dashbord-statistical-rule-description",children:[{value:"Related Subgraph data statistics table description",id:"related-subgraph-data-statistics-table-description",children:[]},{value:"\u6838\u5fc3\u6307\u6807",id:"\u6838\u5fc3\u6307\u6807",children:[]},{value:"\u4ea4\u6613\u5bf9\u6570\u636e",id:"\u4ea4\u6613\u5bf9\u6570\u636e",children:[]}]}],d={toc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"dashbord-statistical-rule-description"},"Dashbord statistical rule description"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://app.dodoex.io/dashboard"},"Dodoex Dashbords")),Object(i.b)("h3",{id:"related-subgraph-data-statistics-table-description"},"Related Subgraph data statistics table description"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All of the data for the core metric comes from the Subgraph, which gets its data from the events thrown when the contract is invoked."),Object(i.b)("li",{parentName:"ul"},"When it comes to the statistics of date dimension in Subgraph, the international standard time is used to make the data statistics for one day. Therefore, when the horizontal axis is the date on Dashbord, it represents the date of the international standard time."),Object(i.b)("li",{parentName:"ul"},"There are several basic pools when we calculate the dollar-related price. The first is the stablecoin trading pool. We take the trading pool with the highest locked position as the benchmark pool and calculate the dollar price of the stablecoin according to the weight of the trading volume. In addition, the chain's base token-to-stablecoin trading pool will also be considered as the base pool to offer dollar prices.")),Object(i.b)("h3",{id:"\u6838\u5fc3\u6307\u6807"},"\u6838\u5fc3\u6307\u6807"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use PairdayData to track daily data for each transaction and TokenDayData to track daily trading data for each token."),Object(i.b)("li",{parentName:"ul"},"For some pools with poor liquidity, we used filtering conditions to discard their data, and pools with current cumulative trading times less than 10 or cumulative trading volume less than $1,000 were not included in the statistics.")),Object(i.b)("h3",{id:"\u4ea4\u6613\u5bf9\u6570\u636e"},"\u4ea4\u6613\u5bf9\u6570\u636e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The trade pair data provides information about the trade pairs that have been traded at Dodo. Since Dodo intelligent routing helps users find the best price, the volume in the external pool is user-initiated transactions that do not enter the Dodo flow pool.")))}l.isMDXComponent=!0}}]);