webpackJsonp([124],{1999:function(n,e,l){"use strict";function View_AddonModChatIndexPage_0(n){return a._57(0,[a._52(402653184,1,{chatComponent:0}),(n()(),a._31(1,0,null,null,18,"ion-header",[],null,null,null,null,null)),a._30(2,16384,null,0,L.a,[k.a,a.t,a.V,[2,T.a]],null,null),(n()(),a._55(-1,null,["\n    "])),(n()(),a._31(4,0,null,null,14,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),a._30(5,49152,null,0,G.a,[H.a,[2,T.a],[2,J.a],k.a,a.t,a.V],null,null),a._30(6,212992,null,0,K.a,[G.a,N.a,U.a,q.b],null,null),(n()(),a._55(-1,3,["\n        "])),(n()(),a._31(8,0,null,3,3,"ion-title",[],null,null,null,z.b,z.a)),a._30(9,49152,null,0,B.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),(n()(),a._31(10,16777216,null,0,1,"core-format-text",[["contextLevel","module"]],null,null,null,null,null)),a._30(11,540672,null,0,Q.a,[a.t,S.a,W.a,X.a,U.a,N.a,Y.b,Z.a,$.b,nn.a,en.b,ln.a,[2,J.a],[2,an.a],[2,tn.a],on.a,q.b,un.a,dn.a,rn.a,a._11,_n.a],{text:[0,"text"],contextLevel:[1,"contextLevel"],contextInstanceId:[2,"contextInstanceId"],courseId:[3,"courseId"]},null),(n()(),a._55(-1,3,["\n\n        "])),(n()(),a._31(13,0,null,2,4,"ion-buttons",[["end",""]],null,null,null,null,null)),a._30(14,16384,null,1,cn.a,[k.a,a.t,a.V,[2,E.a],[2,G.a]],null,null),a._52(603979776,2,{_buttons:1}),(n()(),a._55(-1,null,["\n            "])),(n()(),a._55(-1,null,["\n        "])),(n()(),a._55(-1,3,["\n    "])),(n()(),a._55(-1,null,["\n"])),(n()(),a._55(-1,null,["\n"])),(n()(),a._31(21,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,sn.b,sn.a)),a._30(22,4374528,null,0,an.a,[k.a,N.a,fn.a,a.t,a.V,H.a,hn.a,a.M,[2,T.a],[2,J.a]],null,null),(n()(),a._55(-1,1,["\n    "])),(n()(),a._31(24,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(n,e,l){var a=!0;if("ionRefresh"===e){a=!1!==n.component.chatComponent.doRefresh(l)&&a}return a},null,null)),a._30(25,212992,null,0,bn.a,[N.a,an.a,a.M,pn.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(n()(),a._55(-1,null,["\n        "])),(n()(),a._31(27,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,mn.b,mn.a)),a._30(28,114688,null,0,gn.a,[bn.a,k.a],{pullingText:[0,"pullingText"]},null),a._47(131072,xn.a,[U.a,a.j]),(n()(),a._55(-1,null,["\n    "])),(n()(),a._55(-1,1,["\n\n    "])),(n()(),a._31(32,0,null,1,1,"addon-mod-chat-index",[],null,[[null,"dataRetrieved"]],function(n,e,l){var a=!0;if("dataRetrieved"===e){a=!1!==n.component.updateData(l)&&a}return a},D.c,D.b)),a._30(33,245760,[[1,4]],0,r.a,[a.C,vn.a,In.a,J.a],{module:[0,"module"],courseId:[1,"courseId"]},{dataRetrieved:"dataRetrieved"}),(n()(),a._55(-1,1,["\n"])),(n()(),a._55(-1,null,["\n"]))],function(n,e){var l=e.component;n(e,6,0);n(e,11,0,l.title,"module",l.module.id,l.courseId);n(e,25,0,l.chatComponent.loaded);n(e,28,0,a._34(1,"",a._56(e,28,0,a._44(e,29).transform("core.pulltorefresh")),""));n(e,33,0,l.module,l.courseId)},function(n,e){n(e,4,0,a._44(e,5)._hidden,a._44(e,5)._sbPadding);n(e,21,0,a._44(e,22).statusbarPadding,a._44(e,22)._hasRefresher);n(e,24,0,"inactive"!==a._44(e,25).state,a._44(e,25)._top);n(e,27,0,a._44(e,28).r.state)})}Object.defineProperty(e,"__esModule",{value:!0});var a=l(0),t=l(5),o=l(3),u=l(32),d=l(734),r=l(496),_=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},i=this&&this.__metadata||function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},c=function(){function AddonModChatIndexPage(n){this.module=n.get("module")||{},this.courseId=n.get("courseId"),this.title=this.module.name}return AddonModChatIndexPage.prototype.updateData=function(n){this.title=n.name||this.title},_([Object(a._9)(r.a),i("design:type",r.a)],AddonModChatIndexPage.prototype,"chatComponent",void 0),AddonModChatIndexPage=_([Object(a.m)({selector:"page-addon-mod-chat-index",templateUrl:"index.html"}),i("design:paramtypes",[t.t])],AddonModChatIndexPage)}(),s=this&&this.__decorate||function(n,e,l,a){var t,o=arguments.length,u=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(n,e,l,a);else for(var d=n.length-1;d>=0;d--)(t=n[d])&&(u=(o<3?t(u):o>3?t(e,l,u):t(e,l))||u);return o>3&&u&&Object.defineProperty(e,l,u),u},f=function(){function AddonModChatIndexPageModule(){}return AddonModChatIndexPageModule=s([Object(a.I)({declarations:[c],imports:[u.a,d.a,t.l.forChild(c),o.b.forChild()]})],AddonModChatIndexPageModule)}(),h=l(1527),b=l(1528),p=l(1529),m=l(1530),g=l(1531),x=l(1532),v=l(1533),I=l(1534),C=l(1535),M=l(1536),P=l(1537),R=l(1538),y=l(1539),j=l(1542),A=l(1543),O=l(1540),V=l(1541),w=l(1544),D=l(1562),L=l(373),k=l(8),T=l(40),F=l(721),G=l(214),H=l(35),J=l(20),K=l(471),N=l(15),U=l(18),q=l(9),z=l(722),B=l(317),E=l(250),Q=l(49),S=l(1),W=l(4),X=l(11),Y=l(2),Z=l(22),$=l(6),nn=l(17),en=l(10),ln=l(14),an=l(29),tn=l(28),on=l(43),un=l(41),dn=l(30),rn=l(36),_n=l(39),cn=l(374),sn=l(183),fn=l(34),hn=l(109),bn=l(161),pn=l(45),mn=l(215),gn=l(175),xn=l(25),vn=l(281),In=l(24),Cn=l(70),Mn=a._29({encapsulation:2,styles:[],data:{}}),Pn=a._27("page-addon-mod-chat-index",c,function View_AddonModChatIndexPage_Host_0(n){return a._57(0,[(n()(),a._31(0,0,null,null,1,"page-addon-mod-chat-index",[],null,null,null,View_AddonModChatIndexPage_0,Mn)),a._30(1,49152,null,0,c,[Cn.a],null,null)],null,null)},{},{},[]),Rn=l(7),yn=l(23),jn=l(369),An=l(370),On=l(372),Vn=l(371),wn=l(470),Dn=l(720),Ln=l(108),kn=l(26),Tn=l(273),Fn=l(76),Gn=l(272);l.d(e,"AddonModChatIndexPageModuleNgFactory",function(){return Hn});var Hn=a._28(f,[],function(n){return a._40([a._41(512,a.o,a._21,[[8,[h.a,b.a,p.a,m.a,g.a,x.a,v.a,I.a,C.a,M.a,P.a,R.a,y.a,j.a,A.a,O.a,V.a,w.a,D.a,Pn]],[3,a.o],a.K]),a._41(4608,Rn.m,Rn.l,[a.G,[2,Rn.w]]),a._41(4608,yn.x,yn.x,[]),a._41(4608,yn.d,yn.d,[]),a._41(4608,jn.b,jn.a,[]),a._41(4608,An.a,An.b,[]),a._41(4608,On.b,On.a,[]),a._41(4608,Vn.b,Vn.a,[]),a._41(4608,U.a,U.a,[wn.a,jn.b,An.a,On.b,Vn.b,U.b,U.c]),a._41(512,u.a,u.a,[]),a._41(512,Rn.b,Rn.b,[]),a._41(512,yn.v,yn.v,[]),a._41(512,yn.i,yn.i,[]),a._41(512,yn.s,yn.s,[]),a._41(512,Dn.a,Dn.a,[]),a._41(512,o.b,o.b,[]),a._41(512,Ln.a,Ln.a,[]),a._41(512,kn.a,kn.a,[]),a._41(512,Tn.a,Tn.a,[]),a._41(512,Fn.a,Fn.a,[]),a._41(512,d.a,d.a,[]),a._41(512,Dn.b,Dn.b,[]),a._41(512,f,f,[]),a._41(256,U.c,void 0,[]),a._41(256,U.b,void 0,[]),a._41(256,Gn.a,c,[])])})}});