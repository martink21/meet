(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(21),s=n.n(o),c=(n(28),n(2)),i=n(6),u=n(4),l=n(3),h=(n(29),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={showMore:!1},e}return Object(i.a)(n,[{key:"showMore",value:function(){!1===this.state.showMore?this.setState({showMore:!0}):this.setState({showMore:!1})}},{key:"showText",value:function(){return!1===this.state.showMore?"Show More":"Show Less"}},{key:"desc",value:function(e){return!1===this.state.showMore?"":e.description}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h2",{children:t.summary}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Creator:"})," ",t.creator.email]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Start Time:"})," ",t.start.dateTime]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Location:"})," ",t.location]}),Object(h.jsx)("p",{className:"description",children:this.desc(t)}),Object(h.jsx)("button",{className:"details-btn",onClick:function(){e.showMore(t)},children:this.showText()})]})})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{className:"EventItem",children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(r.Component),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color}},r.color=null,r}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,fontWeight:"500",fontSize:"1em",height:"45px"}},r.color="#365c89",r}return n}(m),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,fontWeight:"500",fontSize:"1em"}},r.color="red",r}return n}(m),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var r=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==r.length)return e.setState({query:n,suggestions:r,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(p,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(r.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={numberOfEvents:32,infoText:""},e}return Object(i.a)(n,[{key:"handleInputChanged",value:function(e){var t=e.target.value;if(this.props.updateNumberOfEvents(e.target.value),!(e.target.value>32))return this.setState({numberOfEvents:t,infoText:""});this.setState({infoText:"Please enter a number between 1 and 32",numberOfEvents:0})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsx)(v,{text:this.state.infoText}),Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"fname",children:" Number of Events:"}),Object(h.jsx)("input",{type:"text",className:"EventsNumber",value:this.props.numberOfEvents,onChange:function(t){return e.handleInputChanged(t)}})]})]})}}]),n}(r.Component),g=n(7),w=n.n(g),O=n(8),x=n(23),y=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(11),S=n.n(k),T=n(9),E=n.n(T),C=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},Z=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://lh3m6oobs8.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return r=e.sent,(a=r.access_token)&&localStorage.setItem("access_token",a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},N=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return E.a.done(),e.abrupt("return",y);case 4:return e.next=6,I();case 6:if(!(t=e.sent)){e.next=16;break}return M(),n="https://lh3m6oobs8.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,S.a.get(n);case 12:return(r=e.sent).data&&(a=C(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(a))),E.a.done(),e.abrupt("return",r.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,r,a,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,Z(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,S.a.get("https://lh3m6oobs8.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",a&&q(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=(n(49),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).updateEvents=function(e,t){N().then((function(n){var a="all"===e?n:n.filter((function(t){return t.location===e}));r.mounted&&r.setState({events:a.slice(0,t),currentLocation:e})}))},r.state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},r}return Object(i.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberOfEvents:e}),this.updateEvents(this.state.currentLocation,e)}},{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,N().then((function(t){e.mounted&&e.setState({events:t,locations:C(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(h.jsx)(j,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)},numberOfEvents:this.state.numberOfEvents}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))},F=n(22);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),R(),F.config("6152c26edb7649e099d84dd1108a4ff8").install()}},[[51,1,2]]]);
//# sourceMappingURL=main.0e2b706d.chunk.js.map