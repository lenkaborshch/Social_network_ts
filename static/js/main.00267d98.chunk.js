(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],[,,,,,function(e,a,t){e.exports={nav:"Navbar_nav__3IGaR",item:"Navbar_item__h95WS",active:"Navbar_active__1PjXT"}},,,,function(e,a,t){e.exports={wrapperMessage:"Message_wrapperMessage__2vPAI",message:"Message_message__1yLU-",avatar:"Message_avatar__3rc1s",author:"Message_author__iUgK8",messageText:"Message_messageText__18eup"}},,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2GIgq",dialogsItems:"Dialogs_dialogsItems__U9Eac",messages:"Dialogs_messages__2Eq2K",dialog:"Dialogs_dialog__s_4VI",active:"Dialogs_active__2mBfT",sendingMessage:"Dialogs_sendingMessage__qt9Rj"}},function(e,a,t){e.exports={sidebarWrapper:"Sidebar_sidebarWrapper__pTjk7",sidebarFriend:"Sidebar_sidebarFriend__--or2",friendName:"Sidebar_friendName__1Z1q2"}},,,,function(e,a,t){e.exports={dialog:"DialogItem_dialog__3tYG5",active:"DialogItem_active__1CKxp"}},function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/planet.1ab0b265.png"},function(e,a,t){e.exports={header:"Header_header__2mPf9"}},,function(e,a,t){},function(e,a,t){e.exports={item:"Post_item__1qEXI"}},function(e,a,t){e.exports=t.p+"static/media/penguin.20594e02.png"},function(e,a,t){e.exports=t.p+"static/media/cover.258dc82d.jpg"},function(e,a,t){e.exports={cover:"ProfileInfo_cover__32cUv"}},function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a),t.d(a,"rerenderEntireThree",(function(){return R}));t(17);var s=t(42),n={_state:{profilePage:{posts:[{id:Object(s.a)(),message:"Hey",likesCount:"20"},{id:Object(s.a)(),message:"How are you?",likesCount:"2"}],newPostText:""},dialogsPage:{dialogs:[{id:Object(s.a)(),name:"Vadim"},{id:Object(s.a)(),name:"Mama"},{id:Object(s.a)(),name:"Papa"},{id:Object(s.a)(),name:"Yurii"},{id:Object(s.a)(),name:"Nik"}],messages:[{id:Object(s.a)(),message:"Hey",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}},{id:Object(s.a)(),message:"How are you?",author:{name:"Me",src:"https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg"}},{id:Object(s.a)(),message:"Good luck",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}}],newMessageText:""},sidebar:{friends:[{id:Object(s.a)(),name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"},{id:Object(s.a)(),name:"Busya",src:"https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg"},{id:Object(s.a)(),name:"Freud",src:"https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg"}]}},_callSubscriber:function(e){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){switch(e.type){case"ADD_POST":var a={id:Object(s.a)(),message:this._state.profilePage.newPostText,likesCount:"0"};this._state.profilePage.posts.push(a),this._state.profilePage.newPostText="",this._callSubscriber(this._state);break;case"UPDATE_NEW_POST_TEXT":this._state.profilePage.newPostText=e.newText,this._callSubscriber(this._state);break;case"ADD_MESSAGE":var t={id:Object(s.a)(),message:this._state.dialogsPage.newMessageText,author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}};this._state.dialogsPage.messages.push(t),this._state.dialogsPage.newMessageText="",this._callSubscriber(this._state);break;case"UPDATE_NEW_MESSAGE_TEXT":this._state.dialogsPage.newMessageText=e.newMessageText,this._callSubscriber(this._state);break;default:throw new Error("Bad action")}}},i=n,r=t(0),c=t.n(r),l=t(20),o=t.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);var m=t(21),d=t.n(m),g=t(22),u=t.n(g);var p=function(){return c.a.createElement("header",{className:u.a.header},c.a.createElement("img",{src:d.a,alt:"logoImage"}))},_=t(5),v=t.n(_),E=t(6),f=t(12),b=t.n(f);var h=function(e){var a=e.state.friends.map((function(e){return c.a.createElement("div",{className:b.a.sidebarFriend,key:e.id},c.a.createElement("img",{src:e.src,alt:"friendsPhoto"}),c.a.createElement("p",{className:b.a.friendName},e.name," "))}));return c.a.createElement("div",{className:b.a.sidebarWrapper},c.a.createElement("h3",null,"Friends"),a)};var N=function(e){return c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/profile",activeClassName:v.a.active},"Profile")),c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/dialogs",activeClassName:v.a.active},"Messages")),c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/news",activeClassName:v.a.active},"News")),c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/music",activeClassName:v.a.active},"Music")),c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/settings",activeClassName:v.a.active},"Settings")),c.a.createElement("div",{className:v.a.item},c.a.createElement(E.b,{to:"/users",activeClassName:v.a.active},"Users")),c.a.createElement("div",null,c.a.createElement(h,{state:e.state})))},P=t(24),w=t.n(P),T=t(25),x=t.n(T),M=t(26),S=t.n(M);var k=function(e){return c.a.createElement("div",{className:x.a.item},c.a.createElement("img",{src:S.a,alt:"postImage"}),e.message,c.a.createElement("div",null,e.likesCount," ",c.a.createElement("span",null,"\u2764")))};var j=function(e){var a=e.profilePage.posts.map((function(e){return c.a.createElement(k,{key:e.id,message:e.message,likesCount:e.likesCount})}));return c.a.createElement("div",null,"My posts",c.a.createElement("div",null,c.a.createElement("textarea",{placeholder:"Write your post message",value:e.profilePage.newPostText,onChange:function(a){e.dispatch(function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e.currentTarget.value}}(a))}}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD_POST"})}},"Add post"),c.a.createElement("button",null,"Remove"))),c.a.createElement("div",{className:w.a.posts},a))},y=t(27),C=t.n(y),D=t(28),O=t.n(D);var I=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{className:O.a.cover,src:C.a,alt:"coverImage"})),c.a.createElement("div",null,"ava + description"))};var A=function(e){return c.a.createElement("div",null,c.a.createElement(I,null),c.a.createElement(j,{profilePage:e.profilePage,dispatch:e.dispatch}))},W=t(11),U=t.n(W),G=t(16),V=t.n(G);var X=function(e){return c.a.createElement("div",{className:V.a.dialog},c.a.createElement(E.b,{to:"/dialogs/"+e.id,activeClassName:V.a.active},e.name))},q=t(9),B=t.n(q);var F=function(e){return c.a.createElement("div",{className:B.a.wrapperMessage},c.a.createElement("img",{src:e.author.src,className:B.a.avatar,alt:"authorImage"}),c.a.createElement("div",{className:B.a.message},c.a.createElement("div",{className:B.a.author},e.author.name),c.a.createElement("div",null,c.a.createElement("span",{className:B.a.messageText},e.message))))};var H=function(e){var a=e.dialogsPage.dialogs.map((function(e){return c.a.createElement(X,{key:e.id,id:e.id,name:e.name})})),t=e.dialogsPage.messages.map((function(e){return c.a.createElement(F,{key:e.id,message:e.message,author:e.author})}));return c.a.createElement("div",{className:U.a.dialogs},c.a.createElement("div",{className:U.a.dialogsItems},a),c.a.createElement("div",{className:U.a.messages},t,c.a.createElement("div",{className:U.a.sendingMessage},c.a.createElement("textarea",{placeholder:"Write your message",value:e.dialogsPage.newMessageText,onChange:function(a){e.dispatch(function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessageText:e.currentTarget.value}}(a))}}),c.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD_MESSAGE"})}},"Sent"))))},J=t(1);var K=function(e){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(p,null),c.a.createElement(N,{state:e.state.sidebar}),c.a.createElement("div",{className:"app-wrapper-content"},c.a.createElement(J.a,{path:"/profile",render:function(){return c.a.createElement(A,{profilePage:e.state.profilePage,dispatch:e.dispatch})}}),c.a.createElement(J.a,{path:"/dialogs",render:function(){return c.a.createElement(H,{dialogsPage:e.state.dialogsPage,dispatch:e.dispatch})}})))},R=function(e){o.a.render(c.a.createElement(E.a,null,c.a.createElement(K,{state:e,dispatch:i.dispatch.bind(i)})),document.getElementById("root"))};R(i.getState()),i.subscribe(R),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.00267d98.chunk.js.map