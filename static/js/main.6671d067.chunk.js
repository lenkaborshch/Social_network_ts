(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{13:function(e,a,t){e.exports={wrapperMessage:"Message_wrapperMessage__2PR9y",message:"Message_message__1xARY",avatar:"Message_avatar__2YUgg",author:"Message_author__27nww",messageText:"Message_messageText__35SWP"}},16:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3r3JM",dialogsItems:"Dialogs_dialogsItems__3TVHB",messages:"Dialogs_messages__IgtER",dialog:"Dialogs_dialog__1igoW",active:"Dialogs_active__1GCOK",sendingMessage:"Dialogs_sendingMessage__ZrzXj"}},20:function(e,a,t){e.exports={sidebarWrapper:"Sidebar_sidebarWrapper__2ASsN",sidebarFriend:"Sidebar_sidebarFriend__UFX9C",friendName:"Sidebar_friendName__6VNDb"}},25:function(e,a,t){e.exports={currentPage:"Users_currentPage__1vt-F",pages:"Users_pages__1BN_F"}},27:function(e,a,t){e.exports={dialog:"DialogItem_dialog__Bw4WD",active:"DialogItem_active__3BwCn"}},29:function(e,a,t){},41:function(e,a,t){e.exports=t.p+"static/media/cover.258dc82d.jpg"},42:function(e,a,t){e.exports={cover:"ProfileInfo_cover__1xOCn"}},43:function(e,a,t){},44:function(e,a,t){e.exports={item:"Post_item__2muiw"}},45:function(e,a,t){e.exports=t.p+"static/media/penguin.20594e02.png"},46:function(e,a,t){e.exports=t.p+"static/media/planet.1ab0b265.png"},47:function(e,a,t){e.exports={header:"Header_header__1EQNb"}},52:function(e,a,t){e.exports=t(80)},61:function(e,a,t){},8:function(e,a,t){e.exports={nav:"Navbar_nav__qDSm_",item:"Navbar_item__Ol8Vw",active:"Navbar_active__1ovz8"}},80:function(e,a,t){"use strict";t.r(a);t(29);var n=t(15),s=t(19),r=t(2),c=t(81),o={posts:[{id:Object(c.a)(),message:"Hey",likesCount:"20"},{id:Object(c.a)(),message:"How are you?",likesCount:"2"}],newPostText:""},i={dialogs:[{id:Object(c.a)(),name:"Vadim"},{id:Object(c.a)(),name:"Mama"},{id:Object(c.a)(),name:"Papa"},{id:Object(c.a)(),name:"Yurii"},{id:Object(c.a)(),name:"Nik"}],messages:[{id:Object(c.a)(),message:"Hey",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}},{id:Object(c.a)(),message:"How are you?",author:{name:"Me",src:"https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg"}},{id:Object(c.a)(),message:"Good luck",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}}],newMessageText:""},l={friends:[{id:Object(c.a)(),name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"},{id:Object(c.a)(),name:"Busya",src:"https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg"},{id:Object(c.a)(),name:"Freud",src:"https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg"}]},u={users:[],totalCount:0,pageSize:5,currentPage:1},m=t(9),d=Object(n.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_POST":var t={id:Object(c.a)(),message:e.newPostText,likesCount:"0"};return Object(r.a)(Object(r.a)({},e),{},{newPostText:"",posts:[t].concat(Object(s.a)(e.posts))});case"UPDATE_NEW_POST_TEXT":return Object(r.a)(Object(r.a)({},e),{},{newPostText:a.newText});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEND_MESSAGE":var t={id:Object(c.a)(),message:e.newMessageText,author:{name:"Me",src:"https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg"}};return Object(r.a)(Object(r.a)({},e),{},{newMessageText:"",messages:[].concat(Object(s.a)(e.messages),[t])});case"UPDATE_NEW_MESSAGE_TEXT":return Object(r.a)(Object(r.a)({},e),{},{newMessageText:a.newMessageText});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===a.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(r.a)(Object(r.a)({},e),{},{users:e.users.map((function(e){return e.id===a.userId?Object(r.a)(Object(r.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(r.a)(Object(r.a)({},e),{},{users:a.users});case"SET_TOTAL_COUNT":return Object(r.a)(Object(r.a)({},e),{},{totalCount:a.totalCount});case"SET_CURRENT_PAGE":return Object(r.a)(Object(r.a)({},e),{},{currentPage:a.currentPage});default:return e}}}),g=Object(n.c)(d);var p=t(0),f=t.n(p),v=t(18),E=t.n(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(61);var _=t(3),b=t(8),h=t.n(b),w=t(10),O=t(20),N=t.n(O);var P=Object(m.b)((function(e){return{friends:e.sidebar.friends}}))((function(e){var a=e.friends.map((function(e){return f.a.createElement("div",{className:N.a.sidebarFriend,key:e.id},f.a.createElement("img",{src:e.src,alt:"friendsPhoto"}),f.a.createElement("p",{className:N.a.friendName},e.name," "))}));return f.a.createElement("div",{className:N.a.sidebarWrapper},f.a.createElement("h3",null,"Friends"),a)}));function T(){return f.a.createElement("nav",{className:"nav"},f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/profile",activeClassName:h.a.active},"Profile")),f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/dialogs",activeClassName:h.a.active},"Messages")),f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/news",activeClassName:h.a.active},"News")),f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/music",activeClassName:h.a.active},"Music")),f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/settings",activeClassName:h.a.active},"Settings")),f.a.createElement("div",{className:h.a.item},f.a.createElement(w.b,{to:"/users",activeClassName:h.a.active},"Users")),f.a.createElement("div",null,f.a.createElement(P,null)))}var j=t(41),C=t.n(j),x=t(42),y=t.n(x);var S=function(){return f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("img",{className:y.a.cover,src:C.a,alt:"coverImage"})),f.a.createElement("div",null,"ava + description"))},M=t(43),k=t.n(M),D=t(44),U=t.n(D),A=t(45),W=t.n(A);var I=function(e){return f.a.createElement("div",{className:U.a.item},f.a.createElement("img",{src:W.a,alt:"postImage"}),e.message,f.a.createElement("div",null,e.likesCount," ",f.a.createElement("span",null,"\u2764")))};var F=Object(m.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),(function(e){return{updateNewPostText:function(a){e({type:"UPDATE_NEW_POST_TEXT",newText:a})},addPost:function(){e({type:"ADD_POST"})}}}))((function(e){var a=e.posts.map((function(e){return f.a.createElement(I,{key:e.id,message:e.message,likesCount:e.likesCount})}));return f.a.createElement("div",null,"My posts",f.a.createElement("div",null,f.a.createElement("textarea",{placeholder:"Write your post message",value:e.newPostText,onChange:function(a){e.updateNewPostText(a.currentTarget.value)},onKeyPress:function(a){"Enter"===a.key&&(a.preventDefault(),e.addPost())}}),f.a.createElement("div",null,f.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"),f.a.createElement("button",null,"Remove"))),f.a.createElement("div",{className:k.a.posts},a))}));function z(e){return f.a.createElement("div",null,f.a.createElement(S,null),f.a.createElement(F,null))}var L=t(46),R=t.n(L),G=t(47),B=t.n(G);function V(){return f.a.createElement("header",{className:B.a.header},f.a.createElement("img",{src:R.a,alt:"logoImage"}))}var H=t(48),X=t(49),J=t(51),K=t(50),Y=t(25),q=t.n(Y),Q=function(e){Math.ceil(e.totalCount/e.pageSize);for(var a=[],t=1;t<=15;t++)a.push(t);return f.a.createElement("div",null,f.a.createElement("div",null,a.map((function(a){return f.a.createElement("span",{className:"".concat(q.a.pages," ").concat(e.currentPage===a?q.a.currentPage:""),onClick:function(){return e.onPageChanged(a)},key:a},a)}))),e.users.map((function(a){return f.a.createElement("div",{key:a.id},f.a.createElement("div",null,f.a.createElement("img",{width:"200px",alt:"userPhoto",src:a.photos.small?a.photos.small:"https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg"})),a.followed?f.a.createElement("button",{onClick:function(){return e.unfollow(a.id)}},"Unfollow"):f.a.createElement("button",{onClick:function(){return e.follow(a.id)}},"Follow"),f.a.createElement("div",null,a.name),f.a.createElement("div",null,a.status),f.a.createElement("div",null,"u.location.city"),f.a.createElement("div",null,"u.location.country"))})))},Z=t(26),$=t.n(Z),ee=function(e){Object(J.a)(t,e);var a=Object(K.a)(t);function t(){var e;Object(H.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).onPageChanged=function(a){e.props.setCurrentPage(a),$.a.get("https://social-network.samuraijs.com/api/1.0/users?count=".concat(e.props.pageSize,"&page=").concat(a)).then((function(a){e.props.setUsers(a.data.items)}))},e}return Object(X.a)(t,[{key:"componentDidMount",value:function(){var e=this;$.a.get("https://social-network.samuraijs.com/api/1.0/users?count=".concat(this.props.pageSize,"&page=").concat(this.props.currentPage)).then((function(a){e.props.setUsers(a.data.items),e.props.setTotalCount(a.data.totalCount)}))}},{key:"render",value:function(){return f.a.createElement(Q,{users:this.props.users,totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged})}}]),t}(f.a.Component),ae=Object(m.b)((function(e){return{users:e.usersPage.users,totalCount:e.usersPage.totalCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(a){e(function(e){return{type:"FOLLOW",userId:e}}(a))},unfollow:function(a){e(function(e){return{type:"UNFOLLOW",userId:e}}(a))},setUsers:function(a){e(function(e){return{type:"SET_USERS",users:e}}(a))},setTotalCount:function(a){e(function(e){return{type:"SET_TOTAL_COUNT",totalCount:e}}(a))},setCurrentPage:function(a){e(function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}}(a))}}}))(ee),te=t(16),ne=t.n(te),se=t(27),re=t.n(se);function ce(e){return f.a.createElement("div",{className:re.a.dialog},f.a.createElement(w.b,{to:"/dialogs/"+e.id,activeClassName:re.a.active},e.name))}var oe=t(13),ie=t.n(oe);function le(e){return f.a.createElement("div",{className:ie.a.wrapperMessage},f.a.createElement("img",{src:e.author.src,className:ie.a.avatar,alt:"authorImage"}),f.a.createElement("div",{className:ie.a.message},f.a.createElement("div",{className:ie.a.author},e.author.name),f.a.createElement("div",null,f.a.createElement("span",{className:ie.a.messageText},e.message))))}var ue=Object(m.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{updateNewMessageText:function(a){e({type:"UPDATE_NEW_MESSAGE_TEXT",newMessageText:a})},addMessage:function(){e({type:"SEND_MESSAGE"})}}}))((function(e){var a=e.dialogs.map((function(e){return f.a.createElement(ce,{key:e.id,id:e.id,name:e.name})})),t=e.messages.map((function(e){return f.a.createElement(le,{key:e.id,id:e.id,message:e.message,author:e.author})}));return f.a.createElement("div",{className:ne.a.dialogs},f.a.createElement("div",{className:ne.a.dialogsItems},a),f.a.createElement("div",{className:ne.a.messages},f.a.createElement("div",null,t),f.a.createElement("div",{className:ne.a.sendingMessage},f.a.createElement("textarea",{placeholder:"Write your message",value:e.newMessageText,onChange:function(a){e.updateNewMessageText(a.currentTarget.value)},onKeyDown:function(a){"Enter"===a.key&&(a.preventDefault(),e.addMessage())}}),f.a.createElement("div",null,f.a.createElement("button",{onClick:function(){e.addMessage()}},"Send")))))}));function me(){return f.a.createElement("div",{className:"app-wrapper"},f.a.createElement(V,null),f.a.createElement(T,null),f.a.createElement("div",{className:"app-wrapper-content"},f.a.createElement(_.a,{path:"/profile",render:function(){return f.a.createElement(z,null)}}),f.a.createElement(_.a,{path:"/dialogs",render:function(){return f.a.createElement(ue,null)}}),f.a.createElement(_.a,{path:"/users",render:function(){return f.a.createElement(ae,null)}})))}E.a.render(f.a.createElement(w.a,null,f.a.createElement(m.a,{store:g},f.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.6671d067.chunk.js.map