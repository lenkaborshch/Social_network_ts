(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],{10:function(e,t,a){e.exports={nav:"Navbar_nav__qDSm_",item:"Navbar_item__Ol8Vw",active:"Navbar_active__1ovz8"}},19:function(e,t,a){e.exports={cover:"ProfileInfo_cover__1xOCn",descriptionBlock:"ProfileInfo_descriptionBlock__bFes7",userPhoto:"ProfileInfo_userPhoto__GLNwp",statusJob:"ProfileInfo_statusJob__3xCCN"}},20:function(e,t,a){e.exports={wrapperMessage:"Message_wrapperMessage__2PR9y",message:"Message_message__1xARY",avatar:"Message_avatar__2YUgg",author:"Message_author__27nww",messageText:"Message_messageText__35SWP"}},22:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3r3JM",dialogsItems:"Dialogs_dialogsItems__3TVHB",messages:"Dialogs_messages__IgtER",dialog:"Dialogs_dialog__1igoW",active:"Dialogs_active__1GCOK",sendingMessage:"Dialogs_sendingMessage__ZrzXj"}},25:function(e,t,a){e.exports={sidebarWrapper:"Sidebar_sidebarWrapper__2ASsN",sidebarFriend:"Sidebar_sidebarFriend__UFX9C",friendName:"Sidebar_friendName__6VNDb"}},26:function(e,t,a){e.exports={currentPage:"Users_currentPage__1vt-F",pages:"Users_pages__1BN_F",userPhoto:"Users_userPhoto__2mxbf"}},31:function(e,t,a){e.exports={header:"Header_header__1EQNb",loginBlock:"Header_loginBlock__1u_pe"}},32:function(e,t,a){e.exports={dialog:"DialogItem_dialog__Bw4WD",active:"DialogItem_active__3BwCn"}},34:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/cover.258dc82d.jpg"},49:function(e,t,a){},50:function(e,t,a){e.exports={item:"Post_item__2muiw"}},51:function(e,t,a){e.exports=a.p+"static/media/penguin.20594e02.png"},52:function(e,t,a){e.exports=a.p+"static/media/preloader.81210c49.svg"},53:function(e,t,a){e.exports=a.p+"static/media/planet.1ab0b265.png"},54:function(e,t,a){e.exports=a(82)},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);a(34);var n=a(18),r=a(15),s=a(1),o=a(83),i=a(45),c=a.n(i).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1b7c72fc-c879-4275-88e5-e33388eb8130"}}),l=function(e,t){return c.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},u=function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))},m=function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return c.get("profile/".concat(e))},d=function(){return c.get("auth/me").then((function(e){return e.data}))},p={posts:[{id:Object(o.a)(),message:"Hey",likesCount:"20"},{id:Object(o.a)(),message:"How are you?",likesCount:"2"}],newPostText:"",profile:null},f=function(e){return{type:"SET_USERS_PROFILE",profile:e}},E={dialogs:[{id:Object(o.a)(),name:"Vadim"},{id:Object(o.a)(),name:"Mama"},{id:Object(o.a)(),name:"Papa"},{id:Object(o.a)(),name:"Yurii"},{id:Object(o.a)(),name:"Nik"}],messages:[{id:Object(o.a)(),message:"Hey",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}},{id:Object(o.a)(),message:"How are you?",author:{name:"Me",src:"https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg"}},{id:Object(o.a)(),message:"Good luck",author:{name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"}}],newMessageText:""},b={friends:[{id:Object(o.a)(),name:"Vadim",src:"https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png"},{id:Object(o.a)(),name:"Busya",src:"https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg"},{id:Object(o.a)(),name:"Freud",src:"https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg"}]},_={users:[],totalCount:0,pageSize:5,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",userId:e,isFetching:t}},O=a(5),w={id:null,login:null,email:null,isAuth:!1},P=a(47),j=Object(n.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var a={id:Object(o.a)(),message:e.newPostText,likesCount:"0"};return Object(s.a)(Object(s.a)({},e),{},{newPostText:"",posts:[a].concat(Object(r.a)(e.posts))});case"UPDATE_NEW_POST_TEXT":return Object(s.a)(Object(s.a)({},e),{},{newPostText:t.newText});case"SET_USERS_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a={id:Object(o.a)(),message:e.newMessageText,author:{name:"Me",src:"https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg"}};return Object(s.a)(Object(s.a)({},e),{},{newMessageText:"",messages:[].concat(Object(r.a)(e.messages),[a])});case"UPDATE_NEW_MESSAGE_TEXT":return Object(s.a)(Object(s.a)({},e),{},{newMessageText:t.newMessageText});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(s.a)(Object(s.a)({},e),{},{users:t.users});case"SET_TOTAL_COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalCount:t.totalCount});case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(r.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_AUTH_DATA":return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),N=Object(n.d)(j,Object(n.a)(P.a));var T=a(0),C=a.n(T),y=a(24),S=a.n(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);var I=a(3),x=a(10),M=a.n(x),k=a(4),A=a(25),F=a.n(A);var U=Object(O.b)((function(e){return{friends:e.sidebar.friends}}))((function(e){var t=e.friends.map((function(e){return C.a.createElement("div",{className:F.a.sidebarFriend,key:e.id},C.a.createElement("img",{src:e.src,alt:"friendsPhoto"}),C.a.createElement("p",{className:F.a.friendName},e.name," "))}));return C.a.createElement("div",{className:F.a.sidebarWrapper},C.a.createElement("h3",null,"Friends"),t)}));function D(){return C.a.createElement("nav",{className:"nav"},C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/profile",activeClassName:M.a.active},"Profile")),C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/dialogs",activeClassName:M.a.active},"Messages")),C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/news",activeClassName:M.a.active},"News")),C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/music",activeClassName:M.a.active},"Music")),C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/settings",activeClassName:M.a.active},"Settings")),C.a.createElement("div",{className:M.a.item},C.a.createElement(k.b,{to:"/users",activeClassName:M.a.active},"Users")),C.a.createElement("div",null,C.a.createElement(U,null)))}var L=a(13),G=a(14),W=a(17),R=a(16),B=a(48),H=a.n(B),z=a(19),J=a.n(z);var V=function(e){var t=e.profile.photos.large?C.a.createElement("img",{className:J.a.userPhoto,src:e.profile.photos.large,alt:"userImage"}):C.a.createElement("img",{className:J.a.userPhoto,src:"https://www.meme-arsenal.com/memes/18fc6121a90eb592850a5722ee98a963.jpg",alt:"userImage"}),a=e.profile.aboutMe&&C.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",e.profile.aboutMe),n=e.profile.lookingForAJob?C.a.createElement("img",{src:"https://i.pinimg.com/originals/e2/02/4c/e2024c7b6af9d0b137ccc9918c36aac1.jpg",alt:"notJobImg"}):C.a.createElement("img",{src:"https://www.meme-arsenal.com/memes/8d9abed4e883de1f5b20a14386eb9d38.jpg",alt:"jobImg"});return C.a.createElement("div",null,C.a.createElement("div",null,C.a.createElement("img",{className:J.a.cover,src:H.a,alt:"coverImage"})),C.a.createElement("div",{className:J.a.descriptionBlock},C.a.createElement("div",null,t),C.a.createElement("div",null,C.a.createElement("p",null,"\u0418\u043c\u044f: ",e.profile.fullName),C.a.createElement("p",null,a),"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b: ",C.a.createElement("p",{className:J.a.statusJob},n))))},X=a(49),K=a.n(X),Y=a(50),q=a.n(Y),Q=a(51),Z=a.n(Q);var $=function(e){return C.a.createElement("div",{className:q.a.item},C.a.createElement("img",{src:Z.a,alt:"postImage"}),e.message,C.a.createElement("div",null,e.likesCount," ",C.a.createElement("span",null,"\u2764")))};var ee=Object(O.b)((function(e){return{newPostText:e.profilePage.newPostText,posts:e.profilePage.posts}}),{updateNewPostText:function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}},addPost:function(){return{type:"ADD_POST"}}})((function(e){var t=e.posts.map((function(e){return C.a.createElement($,{key:e.id,message:e.message,likesCount:e.likesCount})}));return C.a.createElement("div",null,"My posts",C.a.createElement("div",null,C.a.createElement("textarea",{placeholder:"Write your post message",value:e.newPostText,onChange:function(t){e.updateNewPostText(t.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(t.preventDefault(),e.addPost())}}),C.a.createElement("div",null,C.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"),C.a.createElement("button",null,"Remove"))),C.a.createElement("div",{className:K.a.posts},t))})),te=a(52),ae=a.n(te),ne=function(){return C.a.createElement("div",{style:{textAlign:"center"}},C.a.createElement("img",{src:ae.a,alt:"preloader"}))},re=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="7253"),this.props.getProfile(e)}},{key:"render",value:function(){return this.props.profile?C.a.createElement("div",null,C.a.createElement(V,{profile:this.props.profile}),C.a.createElement(ee,null)):C.a.createElement(ne,null)}}]),a}(C.a.Component),se=Object(I.e)(re),oe=Object(O.b)((function(e){return{profile:e.profilePage.profile}}),{setUserPage:f,getProfile:function(e){return function(t){g(e).then((function(e){t(f(e.data))}))}}})(se),ie=a(53),ce=a.n(ie),le=a(31),ue=a.n(le);function me(e){return C.a.createElement("header",{className:ue.a.header},C.a.createElement("img",{src:ce.a,alt:"logoImage"}),C.a.createElement("div",{className:ue.a.loginBlock},e.isAuth?e.login:C.a.createElement(k.b,{to:"/login"},"Login")))}var ge=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return C.a.createElement(me,this.props)}}]),a}(C.a.Component),de=Object(O.b)((function(e){return{id:e.auth.id,login:e.auth.login,email:e.auth.email,isAuth:e.auth.isAuth}}),{getAuthUserData:function(){return function(e){d().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,r=a.login,s=a.email;e(function(e,t,a){return{type:"SET_USER_AUTH_DATA",data:{id:e,login:t,email:a}}}(n,r,s))}}))}}})(ge),pe=a(26),fe=a.n(pe),Ee=function(e){Math.ceil(e.totalCount/e.pageSize);for(var t=[],a=1;a<=15;a++)t.push(a);var n=e.users.map((function(t){return C.a.createElement("div",{key:t.id},C.a.createElement("div",null,C.a.createElement(k.b,{to:"profile/".concat(t.id)},C.a.createElement("img",{className:fe.a.userPhoto,width:"200px",alt:"userPhoto",src:t.photos.small?t.photos.small:"https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg"}))),t.followed?C.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):C.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"),C.a.createElement("div",null,t.name),C.a.createElement("div",null,t.status),C.a.createElement("div",null,"u.location.city"),C.a.createElement("div",null,"u.location.country"))}));return C.a.createElement("div",null,C.a.createElement("div",null,t.map((function(t){return C.a.createElement("span",{className:"".concat(fe.a.pages," ").concat(e.currentPage===t?fe.a.currentPage:""),onClick:function(){return e.onPageChanged(t)},key:t},t)}))),e.isFetching?C.a.createElement(ne,null):C.a.createElement("div",null," ",n," "))},be=function(e){Object(W.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(L.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(e.props.pageSize,t)},e}return Object(G.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize,this.props.currentPage)}},{key:"render",value:function(){return C.a.createElement(Ee,{users:this.props.users,totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleIsFollowing:this.props.toggleIsFollowing})}}]),a}(C.a.Component),_e=Object(O.b)((function(e){return{users:e.usersPage.users,totalCount:e.usersPage.totalCount,pageSize:e.usersPage.pageSize,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(h(e,!0)),m(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"FOLLOW",userId:e}}(e)),t(h(e,!1))}))}},unfollow:function(e){return function(t){t(h(e,!0)),u(e).then((function(a){0===a.resultCode&&t(function(e){return{type:"UNFOLLOW",userId:e}}(e)),t(h(e,!1))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},toggleIsFollowing:h,getUsers:function(e,t){return function(a){a(v(!0)),l(e,t).then((function(e){a(v(!1)),a({type:"SET_USERS",users:e.items}),a({type:"SET_TOTAL_COUNT",totalCount:e.totalCount})}))}}})(be),ve=a(22),he=a.n(ve),Oe=a(32),we=a.n(Oe);function Pe(e){return C.a.createElement("div",{className:we.a.dialog},C.a.createElement(k.b,{to:"/dialogs/"+e.id,activeClassName:we.a.active},e.name))}var je=a(20),Ne=a.n(je);function Te(e){return C.a.createElement("div",{className:Ne.a.wrapperMessage},C.a.createElement("img",{src:e.author.src,className:Ne.a.avatar,alt:"authorImage"}),C.a.createElement("div",{className:Ne.a.message},C.a.createElement("div",{className:Ne.a.author},e.author.name),C.a.createElement("div",null,C.a.createElement("span",{className:Ne.a.messageText},e.message))))}var Ce=Object(O.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),{updateNewMessageText:function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessageText:e}},addMessage:function(){return{type:"SEND_MESSAGE"}}})((function(e){var t=e.dialogs.map((function(e){return C.a.createElement(Pe,{key:e.id,id:e.id,name:e.name})})),a=e.messages.map((function(e){return C.a.createElement(Te,{key:e.id,id:e.id,message:e.message,author:e.author})}));return C.a.createElement("div",{className:he.a.dialogs},C.a.createElement("div",{className:he.a.dialogsItems},t),C.a.createElement("div",{className:he.a.messages},C.a.createElement("div",null,a),C.a.createElement("div",{className:he.a.sendingMessage},C.a.createElement("textarea",{placeholder:"Write your message",value:e.newMessageText,onChange:function(t){e.updateNewMessageText(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&(t.preventDefault(),e.addMessage())}}),C.a.createElement("div",null,C.a.createElement("button",{onClick:function(){e.addMessage()}},"Send")))))}));function ye(){return C.a.createElement("div",{className:"app-wrapper"},C.a.createElement(de,null),C.a.createElement(D,null),C.a.createElement("div",{className:"app-wrapper-content"},C.a.createElement(I.a,{path:"/profile/:userId?",render:function(){return C.a.createElement(oe,null)}}),C.a.createElement(I.a,{path:"/dialogs",render:function(){return C.a.createElement(Ce,null)}}),C.a.createElement(I.a,{path:"/users",render:function(){return C.a.createElement(_e,null)}})))}S.a.render(C.a.createElement(k.a,null,C.a.createElement(O.a,{store:N},C.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.4b257b0b.chunk.js.map