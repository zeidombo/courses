(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{M8D5:function(e,a,t){"use strict";var n=t("lGur");function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,i,l){if(l!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},S1Ak:function(e,a,t){},SDNY:function(e,a,t){},eqDc:function(e,a,t){},foLx:function(e,a,t){"use strict";t("Z2Ku"),t("f3/d");var n=t("MVZn"),r=t.n(n),i=t("cDcd"),l=t.n(i),o=t("TSYQ"),s=t.n(o),c=t("eOGF"),u=(t("SDNY"),["http://cdn.hrcdn.net/hackerrank/assets/gravatar.jpg","https://hrcdn.net/s3_pub/hr-avatars/dea116b8-45f8-4915-9995-9e9d853100fd/150x150.png"]),m=function(e){var a=e.avatar,t=e.defaultAvatar,n=void 0!==a,i=t?a!==t:!u.includes(a);return n&&i?function(e){var a=e.avatar,t=e.defaultAvatar,n=void 0===t?u[0]:t,r=e.size,i=e.avatarClass;return l.a.createElement("img",{src:a,height:r,width:r,className:s()("ui-avatar__img",i),onError:function(e){e.target.src!==n&&(e.target.src=n)}})}(e):function(e){var a=e.name,t=e.size,n=e.avatarClass,i=e.customColor,o=e.customFontSize,u=e.customBg,m=i||Object(c.R)(a),p=Object(c.q)(a),d=o||"".concat(Math.max(Math.round(t/3),10),"px"),f=u?{backgroundImage:"url(".concat(u,")"),backgroundSize:"cover"}:{backgroundColor:m};return l.a.createElement("span",{className:s()("ui-avatar__initials",n),style:r()({},f,{width:"".concat(t,"px"),height:"".concat(t,"px"),fontSize:d})},l.a.createElement("span",{className:"ui-avatar__text absolute-center"},p))}(e)};m.defaultProps={size:25},a.a=m},kDgx:function(e,a,t){"use strict";t.d(a,"b",function(){return M}),t.d(a,"a",function(){return O});t("2Spj"),t("f3/d"),t("rGqo"),t("8+KV"),t("xfY5"),t("DNiP"),t("0l/t"),t("bWfx"),t("LK8F");var n=t("lwsE"),r=t.n(n),i=t("W8MJ"),l=t.n(i),o=t("a1gu"),s=t.n(o),c=t("Nsbk"),u=t.n(c),m=t("PJYZ"),p=t.n(m),d=t("7W2i"),f=t.n(d),h=t("pVnL"),g=t.n(h),v=t("MVZn"),y=t.n(v),k=t("lSNA"),C=t.n(k),b=t("cDcd"),E=t.n(b),N=t("TSYQ"),P=t.n(N),x=t("LD1s"),w=t("2Ica"),S=t("hF3m"),L=(t("eqDc"),function(){}),O=function(e){function a(){var e,t;r()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=s()(this,(e=u()(a)).call.apply(e,[this].concat(i))),C()(p()(t),"props",void 0),t}return f()(a,e),l()(a,[{key:"render",value:function(){return null}}]),a}(b.PureComponent);C()(O,"defaultProps",{renderCell:function(e){return e},renderHeaderCell:function(e){return e},onColumnSelect:L});var M=function(e){function a(e){var t;return r()(this,a),t=s()(this,u()(a).call(this,e)),C()(p()(t),"columnsConfig",void 0),C()(p()(t),"props",void 0),C()(p()(t),"getColumnsConfig",function(e){var a=e.children,t=e.flexLayout;if(!a)return[];Array.isArray(a)||(a=[a]);var n=a.filter(function(e){return!!e}).map(function(e){return y()({},e.props)});if(t){var r=n.reduce(function(e,a){return e+Number(a.flex)},0);n.forEach(function(e){e.flexRule="".concat(e.flex," 1 ").concat(100*Number(e.flex)/r,"%")})}return n}),C()(p()(t),"getColumnStyle",function(e){var a={},n=t.props.flexLayout?"flex":"width",r="width"===n?n:"flexRule";return a[n]=e[r],a}),C()(p()(t),"renderHeaderDropdown",function(e){var a=e.columnKey,t=e.onColumnSelect,n=e.columnOptions,r=e.header,i=e.dropdownProps;return E.a.createElement(x.a,g()({className:"header-dropdown",closeHandleSelector:".header-item"},i),E.a.createElement(w.a,null,E.a.createElement("span",{className:"selected-column"},r),E.a.createElement("i",{className:"ui-icon-chevron-down"})),E.a.createElement(S.a,null,E.a.createElement("ul",{className:"header-list"},n.map(function(e,n){var r=e.key,i=e.name;return E.a.createElement("li",{key:n,className:P()("header-item",{selected:r===a}),onClick:t.bind(null,r,i)},i)}))))}),C()(p()(t),"layoutClass",function(){return t.props.flexLayout?"flex":"table clearfix"}),C()(p()(t),"renderHeader",function(){var e=p()(t).columnsConfig;return E.a.createElement("div",{className:"table-header-wrapper"},E.a.createElement("header",{className:P()("table-header",t.layoutClass())},e.map(function(e,a){var n=e.headerClass,r=e.columnOptions,i=e.header,l=e.renderHeaderCell;return E.a.createElement("div",{key:a,className:P()("table-header-column",n),style:t.getColumnStyle(e)},r?t.renderHeaderDropdown(e):E.a.createElement("div",{className:"ellipsis"},l(i,e)))})))}),C()(p()(t),"renderRow",function(e,a,n){var r=p()(t).columnsConfig,i=n?n.className:null;return E.a.createElement("div",g()({key:a},n,{className:P()("table-row-wrapper",i)}),E.a.createElement("div",{className:P()("table-row",t.layoutClass())},r.map(function(a,r){var i=a.columnClass,l=a.columnKey,o=a.renderCell;return E.a.createElement("div",{key:r,className:P()("table-row-column ellipsis",i),style:t.getColumnStyle(a)},o(e[l],e,a,n))})))}),C()(p()(t),"renderBody",function(){var e=t.props,a=e.data,n=e.getRowProps;return E.a.createElement("div",{className:"table-body"},a.map(function(e,a){var r=n(e,a);return t.renderRow(e,a,r)}))}),t.columnsConfig=t.getColumnsConfig(e),t}return f()(a,e),l()(a,[{key:"componentWillReceiveProps",value:function(e){this.columnsConfig=this.getColumnsConfig(e)}},{key:"render",value:function(){var e=this.props,a=e.tableClass,t=e.noHeader,n=e.hover,r=e.data,i={"ui-table-hover":n,"first-col-raised":e.firstColRaised&&r.length};return E.a.createElement("div",{className:P()("ui-table",a,i)},!t&&this.renderHeader(),this.renderBody())}}]),a}(b.Component);C()(M,"defaultProps",{data:[],noHeader:!1,flexLayout:!0,hover:!1,getRowProps:L,firstColRaised:!0})},kPT0:function(e,a,t){e.exports=t("M8D5")()},lGur:function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"xxD/":function(e,a,t){"use strict";t("xfY5"),t("KKXr"),t("2Spj"),t("rGqo"),t("8+KV");var n=t("lwsE"),r=t.n(n),i=t("W8MJ"),l=t.n(i),o=t("a1gu"),s=t.n(o),c=t("Nsbk"),u=t.n(c),m=t("PJYZ"),p=t.n(m),d=t("7W2i"),f=t.n(d),h=t("pVnL"),g=t.n(h),v=t("MVZn"),y=t.n(v),k=t("lSNA"),C=t.n(k),b=t("cDcd"),E=t.n(b),N=(t("kPT0"),t("MGin")),P=t("TSYQ"),x=t.n(P),w=t("eOGF"),S=(t("S1Ak"),function(e){function a(){var e,t;r()(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return t=s()(this,(e=u()(a)).call.apply(e,[this].concat(i))),C()(p()(t),"props",void 0),C()(p()(t),"handleClick",function(e,a){t.props.currentPage===e&&a.preventDefault()}),C()(p()(t),"getQuery",function(e,a){var n=t.props,r=n.removeQueries,i=n.addQueries,l=y()({},e.query);return r.forEach(function(e){delete l[e]}),y()({},l,{page:a},i)}),C()(p()(t),"getLinkAttributes",function(e,a){var n,r=t.props,i=r.currentPage,l=r.pageOnQuery,o=r.nonUrlPages,s=(r.removeQueries,r.addQueries,t.getPath());return n=o?void 0:l?function(a){return y()({},a,{query:t.getQuery(a,e)})}:function(a){return y()({},a,{pathname:s+"/"+e})},{"data-analytics":"Pagination","data-attr1":a,"data-attr8":e,"data-attr7":i,onClick:t.handleClick.bind(p()(t),e),to:n}}),C()(p()(t),"onPageChange",function(e){e!==t.props.currentPage&&t.props.onPageChange(e)}),t}return f()(a,e),l()(a,[{key:"getPath",value:function(){var e=this.props.pageOnQuery,a=this.context.location.pathname;if(e)return a;var t=a.split("/");return Number(t[t.length-1])&&t.pop(),t.join("/")}},{key:"renderMetaInfo",value:function(e,a,t,n){var r=this.context.location,i=this.getLinkAttributes,l=i(t,"Left").to(r),o=Object(w.b)(l.pathname,l.query),s=i(n,"Right").to(r),c=Object(w.b)(s.pathname,s.query);return E.a.createElement("div",null,!e&&E.a.createElement("link",{rel:"prev",href:o}),!a&&E.a.createElement("link",{rel:"next",href:c}))}},{key:"renderEllipsis",value:function(){return E.a.createElement("li",{className:x()("page-item page-ellipsis")},E.a.createElement(N.Link,{className:"page-link"},"..."))}},{key:"render",value:function(){var e=this.props,a=this.getLinkAttributes,t=(this.onPageChange,e.totalItems),n=e.itemPerPage,r=e.maxPageCount,i=e.textControls,l=e.theme,o=e.nonUrlPages,s=Number(e.currentPage),c=Math.ceil(t/n),u=1===s,m=s===c,p=Math.max(1,s-1),d=Math.min(c,s+1),f=Math.max(2,Math.ceil(s-r/2));s>c-r&&(f=Math.max(2,c-r)),c<r&&(f=2);var h=[],v=Math.min(r+f,c);1===r&&2===s&&v!==c&&(v+=1),1===r&&s===c-1&&2!==f&&(f-=1);for(var y=f-1>1,k=c-(v-1)>1,C=f;C<v;C++)h.push(E.a.createElement("li",{key:C,className:x()("page-item number",{active:C===s,"first-item":C===f,"last-item":C===v})},E.a.createElement(N.Link,g()({className:"page-link"},a(C,"Page"),{onClick:this.onPageChange.bind(this,C)}),C)));return E.a.createElement("div",{className:x()("ui-pagination",l,this.props.className)},E.a.createElement("ul",null,E.a.createElement("li",{className:x()("page-item prev-page",{disabled:u})},E.a.createElement(N.Link,g()({className:"prev-page-link page-link"},a(p,"Left"),{onClick:this.onPageChange.bind(this,p)}),i?E.a.createElement("span",{className:"text-control"},"Prev"):E.a.createElement("span",{className:"icon ui-icon-arrow-left"}))),E.a.createElement("li",{className:x()("page-item first-page",{active:1===s,"first-item":1===f})},E.a.createElement(N.Link,g()({className:"page-link"},a(1,"Page"),{onClick:this.onPageChange.bind(this,1)}),1)),y&&this.renderEllipsis(),h,k&&this.renderEllipsis(),c>1&&E.a.createElement("li",{key:c,className:x()("page-item last-page",{active:c===s})},E.a.createElement(N.Link,g()({className:"page-link"},a(c,"Page"),{onClick:this.onPageChange.bind(this,c)}),c)),E.a.createElement("li",{className:x()("page-item next-page",{disabled:m})},E.a.createElement(N.Link,g()({className:"last-page-link page-link"},a(d,"Right"),{onClick:this.onPageChange.bind(this,d)}),i?E.a.createElement("span",{className:"text-control"},"Next"):E.a.createElement("span",{className:"icon ui-icon-arrow-right"})))),!o&&this.renderMetaInfo(u,m,p,d))}}]),a}(E.a.Component));C()(S,"contextTypes",{location:Object}),C()(S,"defaultProps",{itemPerPage:20,currentPage:1,maxPageCount:5,theme:"new",addQueries:{},removeQueries:[],onPageChange:function(){}}),a.a=S}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/vendors~hackerrank_r_challenge~hackerrank_r_contest~hackerrank_r_leaderboard~hackerrank_r_leaderboar~24db6d1d-2d4f1643ad9442f54955.js.map