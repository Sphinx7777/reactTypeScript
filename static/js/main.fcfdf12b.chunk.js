(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{124:function(e,t,a){e.exports={headerWrapper:"Header_headerWrapper__KbmV0"}},130:function(e,t,a){e.exports=a(261)},135:function(e,t,a){},136:function(e,t,a){e.exports=a.p+"static/media/lamp.b4166a32.ico"},137:function(e,t,a){e.exports=a.p+"static/media/telegram.5e18d520.ico"},138:function(e,t,a){e.exports=a.p+"static/media/linkedIn.b3148231.ico"},139:function(e,t,a){e.exports=a.p+"static/media/burger.a2bd2bac.ico"},20:function(e,t,a){e.exports={contactsLinkWrapper:"ContactLinks_contactsLinkWrapper__QIktf",link:"ContactLinks_link__2T5oz",linkImg:"ContactLinks_linkImg__3lyY9",linkTitle:"ContactLinks_linkTitle__1xhZ7"}},24:function(e,t,a){e.exports={inputLabel:"ValidatorsComponents_inputLabel__2WYSr",areaLabel:"ValidatorsComponents_areaLabel__AoiBU",errorInputLabel:"ValidatorsComponents_errorInputLabel__jB6zH",errorAreaLabel:"ValidatorsComponents_errorAreaLabel__30JwG",inputField:"ValidatorsComponents_inputField__2_zwd",areaField:"ValidatorsComponents_areaField__fy4fr",errorInputField:"ValidatorsComponents_errorInputField__28u2Y",errorAreaField:"ValidatorsComponents_errorAreaField__2-Hg2",areaError:"ValidatorsComponents_areaError__3D9EC",inputError:"ValidatorsComponents_inputError__2uiRZ"}},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),l=(a(135),a(34)),i=a(86),c=a.n(i),d=a(59),m=a(32),u=a(60),_=a(61),p=a(64),f=a(4),k=a.n(f),E=a(20),T=a.n(E),C=a(136),b=a(137),N=a(138),v=function(){return r.a.createElement("div",{className:T.a.contactsLinkWrapper},r.a.createElement("a",{className:T.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://djinni.co/q/03c688fb54"},r.a.createElement("img",{className:T.a.linkImg,src:C,alt:"\u0414\u0436\u0438\u043d\u043d\u0438"}),r.a.createElement("span",{className:T.a.linkTitle},"Djinni")),r.a.createElement("a",{className:T.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://t.me/S_f_i_n_x"},r.a.createElement("img",{className:T.a.linkImg,src:b,alt:"\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c"}),r.a.createElement("span",{className:T.a.linkTitle},"Telegram")),r.a.createElement("a",{className:T.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/onishchenkosergei/"},r.a.createElement("img",{className:T.a.linkImg,src:N,alt:"\u041b\u0438\u043d\u043a\u0435\u0434\u0438\u043d"}),r.a.createElement("span",{className:T.a.linkTitle},"linkedin")))},S=a(65),D=a.n(S),h=a(139),g=function(e){var t=e.setShowSidebar,a=e.showSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.burgerMenuWrapper,onClick:function(){t(!a)}},r.a.createElement("img",{className:D.a.burgerMenuImg,src:h,alt:""}),r.a.createElement("span",{className:D.a.burgerMenuTitle},"Menu")))},w=a(66),O=a.n(w),y=a(121),F=a.n(y),A=a(87),j=a.n(A),P=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){return a.props.setDateForPlane(e)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=new Date;return r.a.createElement("div",{className:j.a.calendarWrapper,onKeyPress:function(t){"Enter"===t.key&&e.props.setStatusCalendar(!1)}},r.a.createElement(F.a,{minDate:t,onChange:this.onChange,value:this.props.dateForPlane}),r.a.createElement("div",{className:j.a.closeCalendar,onClick:function(){e.props.setStatusCalendar(!1)}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"))}}]),t}(n.Component),W=function(e){var t=e.setStatusCalendar,a=e.dateForPlane,n=e.setDateForPlane;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.modal+" "+O.a.overlay},r.a.createElement("div",{className:O.a.modalContent},r.a.createElement(P,{setStatusCalendar:t,setDateForPlane:n,dateForPlane:a}))))},L=a(281),M=a(280),B=function(e){if(!(e&&e.length>=1))return"Required field"},I=function(e){return function(t){if(t&&t.length>e)return"Max ".concat(e," symbols")}},R=a(24),x=a.n(R),V=function(e){var t=e.input,a=e.label,n=e.size,o=e.type,s=(e.placeholder,e.autoFocus),l=e.meta,i=l.error,c=(l.warning,l.touched);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.inputLabel+" "+(c&&i?x.a.errorInputLabel:"")},c&&i?i:a),r.a.createElement("input",Object.assign({className:x.a.inputField+" "+(c&&i?x.a.errorInputField:"")},t,{autoFocus:s,size:n,type:o})))},K=function(e){var t=e.input,a=e.label,n=e.rows,o=e.cols,s=e.meta,l=s.error,i=(s.warning,s.touched);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.inputLabel+" "+(i&&l?x.a.errorInputLabel:"")},i&&l?l:a),r.a.createElement("textarea",Object.assign({className:x.a.areaField+" "+(i&&l?x.a.errorAreaField:"")},t,{rows:n,cols:o})))},H=I(200),z=I(30),U=Object(M.a)({form:"toDoForm"})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.reset,o=e.submitting;return r.a.createElement("div",{className:k.a.formWrapper},r.a.createElement("div",{className:k.a.formDate},r.a.createElement("span",null,e.dateForPlaneString)),r.a.createElement("form",{onSubmit:t,className:k.a.form,onKeyPress:function(e){"Enter"===e.key&&t(e)}},r.a.createElement("div",{className:k.a.formName},r.a.createElement(L.a,{name:"name",type:"text",component:V,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",validate:[B,z]})),r.a.createElement("div",{className:k.a.formDescription},r.a.createElement(L.a,{name:"description",cols:"30",component:K,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",validate:[B,H]})),e.error&&r.a.createElement("span",{className:k.a.formError},e.error),r.a.createElement("div",{className:k.a.formBtn},r.a.createElement("button",{className:k.a.formSubmitBtn,type:"submit",disabled:o},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("button",{className:k.a.formClearBtn,type:"button",disabled:a||o,onClick:n},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),r.a.createElement("button",{className:k.a.formCancelBtn,type:"button",onClick:function(){e.setStatusAddTask(null),e.setStatusCalendar(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))))})),Y=I(200),Z=I(30),G=Object(M.a)({form:"toDoFormNewContent"})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.reset,o=e.submitting,s=t(e.submitNewContent);return r.a.createElement("div",{className:k.a.formWrapper},r.a.createElement("form",{onSubmit:s,className:k.a.form,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())}},r.a.createElement("div",{className:k.a.taskDate},e.dateForNewContent),r.a.createElement("div",{className:k.a.formName},r.a.createElement(L.a,{name:"name",type:"text",component:V,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",autoFocus:!0,validate:[B,Z]})),r.a.createElement("div",{className:k.a.formDescription},r.a.createElement(L.a,{name:"description",cols:"30",component:K,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",validate:[B,Y]})),e.error&&r.a.createElement("span",{className:k.a.formError},e.error),r.a.createElement("div",{className:k.a.formBtn},r.a.createElement("button",{className:k.a.formSubmitBtn,type:"submit",disabled:o},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("button",{className:k.a.formClearBtn,type:"button",disabled:a||o,onClick:n},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),r.a.createElement("button",{className:k.a.formCancelBtn,type:"button",onClick:function(){return e.setTaskIdForNewContent(null)}},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))))})),J=a(279),Q=a(283),X=["\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0412\u0442\u043e\u0440\u043d\u0438\u043a","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041f\u044f\u0442\u043d\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043e\u0442\u0430"],q=function(e){var t=e.removeCompletedTaskToContent,a=e.toSetStatusCompletedTask,o=e.removeAllTaskContent,s=e.removeTaskContent,i=e.toggleShowTaskContent,c=e.showSidebar,d=e.tasks,m=e.setShowSidebar,u=e.addNewTask,_=(e.editMode,e.addNewTaskContent),p=Object(n.useState)(!1),f=Object(l.a)(p,2),E=f[0],T=f[1],C=Object(n.useState)(new Date),b=Object(l.a)(C,2),N=b[0],S=b[1],D=Object(n.useState)(!1),h=Object(l.a)(D,2),w=h[0],O=h[1],y=Object(n.useState)(null),F=Object(l.a)(y,2),A=F[0],j=F[1],P=Object(n.useState)(""),L=Object(l.a)(P,2),M=L[0],B=L[1],I=N.toLocaleDateString(),R=X[N.getDay()];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e TypeScript...\u043d\u0430\u0447\u0430\u043b\u043e..."),r.a.createElement("div",{className:k.a.toDoWrapper},r.a.createElement("div",{className:k.a.toDoHeader},r.a.createElement("div",{className:k.a.taskFilter},r.a.createElement("span",{className:k.a.filterItem},"\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"),r.a.createElement("span",{className:k.a.filterItem},"\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),r.a.createElement("span",{className:k.a.filterItem},"\u0432\u0441\u0435")),r.a.createElement("input",{type:"text",className:k.a.search,placeholder:"\u041f\u043e\u0438\u0441\u043a"})),r.a.createElement("div",{className:k.a.taskControl},r.a.createElement("div",{className:k.a.addNewTask,onClick:function(){E||(O(!0),T(!E)),T(!E)}},E?"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u044b \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0434\u0430\u0442\u0443"),r.a.createElement("div",{className:k.a.dellAllFinishedTask},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")),E&&r.a.createElement(U,{onSubmit:function(e){var t={dateForPlane:I,id:Math.random(),deyOfWeek:R,editStatus:!1,taskContent:[{idContent:Math.random(),name:e.name,description:e.description,editStatusDescription:!1,editStatusName:!1,completed:!1,createDate:(new Date).toLocaleDateString()}]};u(t),T(!1)},setStatusAddTask:T,setStatusCalendar:O,dateForPlaneString:I}),A&&r.a.createElement(G,{dateForNewContent:M,submitNewContent:function(e){var t={idContent:Math.random(),name:e.name,description:e.description,editStatusDescription:!1,editStatusName:!1,completed:!1,createDate:(new Date).toLocaleDateString()};_(A,t),j(null)},setTaskIdForNewContent:j}),d.map((function(e){return r.a.createElement("div",{className:k.a.toDoItem,key:e.id},r.a.createElement("div",{className:k.a.itemHeader},r.a.createElement("div",{className:k.a.dateAndTaskStatus},r.a.createElement("div",null,e.editStatus?r.a.createElement("span",{title:"\u0414\u0430\u0431\u043b \u043a\u043b\u0438\u043a \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",className:k.a.dateForPlaneEdit},e.dateForPlane):r.a.createElement("span",{className:k.a.dateForPlane},e.dateForPlane),r.a.createElement("span",{className:k.a.dayForPlane},e.deyOfWeek)),r.a.createElement("div",{className:k.a.totalAndCompletedTask},r.a.createElement("span",{className:k.a.totalTasks},"\u0412\u0441\u0435\u0433\u043e \u0434\u0435\u043b : ",r.a.createElement("b",null,e.taskContent.length?e.taskContent.length:0)),r.a.createElement("span",{className:k.a.completedTasks},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e : ",r.a.createElement("b",null,e.taskContent.length?e.taskContent.filter((function(e){return e.completed})).length:0)))),r.a.createElement("div",{className:k.a.action},r.a.createElement("div",{className:k.a.addTask,onClick:function(){return t=e.id,a=e.dateForPlane,j(t),void B(a);var t,a}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("div",{className:k.a.openList,onClick:function(){i(e.id,!e.editStatus)}},e.editStatus?"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"),r.a.createElement("div",{className:k.a.dellFinishedTask,onClick:function(){return a=e.id,void t(a);var a}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"),r.a.createElement("div",{className:k.a.dellAllTask,onClick:function(){return t=e.id,void o(t);var t}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435"))),r.a.createElement("div",{className:e.editStatus?k.a.itemContents+" "+k.a.active:k.a.itemContents+" "+k.a.none},e.taskContent.map((function(e){return r.a.createElement("div",{className:k.a.task,key:e.idContent},r.a.createElement("div",{className:k.a.taskHeader},r.a.createElement("div",{className:k.a.createDateAndFinished},r.a.createElement("span",{className:k.a.createDate},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f : ",r.a.createElement("b",null,e.createDate)),r.a.createElement(Q.a,{className:k.a.finished,checked:e.completed,onChange:function(){return t=e.idContent,n=!e.completed,void a(t,n);var t,n},control:r.a.createElement(J.a,{color:"primary"}),label:"\u0421\u0442\u0430\u0442\u0443\u0441",labelPlacement:"start"})),r.a.createElement("div",{className:k.a.taskName},e.name)),r.a.createElement("div",{className:k.a.taskContent},e.description),r.a.createElement("div",{className:k.a.dellContent},r.a.createElement("span",{className:k.a.dellContentBtn,onClick:function(){return t=e.idContent,void s(t);var t}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))))})),w&&r.a.createElement("div",{className:k.a.calendar},r.a.createElement(W,{setStatusCalendar:O,dateForPlane:N,setDateForPlane:S})),r.a.createElement("div",{className:k.a.footerWrapper},r.a.createElement(g,{showSidebar:c,setShowSidebar:m}),r.a.createElement(v,null))))},$=a(31),ee=a(37),te=a(63);function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(a,!0).forEach((function(t){Object(ee.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re="/todoReducer___ADD_NEW_TASK",oe=Object(te.load)({namespace:"TasksTs-list"}).toDo;oe&&oe.tasks&&oe.tasks.length||(oe={tasks:[{dateForPlane:"10.11.2019",id:.9040531789451176,deyOfWeek:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",editStatus:!1,taskContent:[{idContent:.9040532789251176,name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",description:"\u041e\u0431\u0440\u0430\u0437\u0435\u0446",editStatusDescription:!1,editStatusName:!1,completed:!1,createDate:"06.10.2019"}]}],editMode:!1});var se=function(e,t,a){for(var n=e.length;n--;)e[n]&&e[n].hasOwnProperty(t)&&arguments.length>2&&e[n][t]===a&&e.splice(n,1);return e},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return ne({},e,{},e.tasks.unshift(ne({},t.newTask)));case"/todoReducer___TOGGLE_SHOW_TASK_CONTENT":return ne({},e,{},e.tasks=e.tasks.map((function(e){return e.id===t.id&&(e.editStatus=t.status),e})));case"/todoReducer___ADD_NEW_TASK_CONTENT":return ne({},e,{},e.tasks.map((function(e){return e.id===t.payload.idContent&&e.taskContent.unshift(t.payload.newTaskContent),e})));case"/todoReducer___REMOVE_TASK_CONTENT":var a=e.tasks.map((function(e){return se(e.taskContent,"idContent",t.idContent),e.taskContent}));return ne({},e,{},e.tasks=e.tasks.filter((function(e){return e.taskContent})),{},e.tasks.taskContent=a);case"/todoReducer___REMOVE_ALL_TASK_CONTENT":return ne({},e,{},e.tasks=e.tasks.filter((function(e){return e.id!==t.id})));case"/todoReducer___SET_STATUS_COMPLETED_TASK":return ne({},e,{},e.tasks=e.tasks.map((function(e){return e.taskContent.map((function(e){return e.idContent===t.id?(e.completed=t.status,e):e})),e})));case"/todoReducer___REMOVE_COMPLETED_TASK_TO_CONTENT":var n=e.tasks.filter((function(e){return e.id===t.id})),r=n[0].taskContent.filter((function(e){return!1===e.completed}));return ne({},e,{},e.tasks=e.tasks.map((function(e){return e.id===t.id?(e.taskContent=r,e):e})));default:return e}},ie=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.removeCompletedTaskToContent,a=e.toSetStatusCompletedTask,n=e.removeAllTaskContent,o=e.removeTaskContent,s=e.toggleShowTaskContent,l=e.addNewTask,i=e.showSidebar,c=e.setShowSidebar,d=e.editMode,m=e.tasks,u=e.addNewTaskContent;return r.a.createElement("div",null,r.a.createElement(q,{removeCompletedTaskToContent:t,toSetStatusCompletedTask:a,removeAllTaskContent:n,removeTaskContent:o,toggleShowTaskContent:s,addNewTask:l,showSidebar:i,setShowSidebar:c,editMode:d,tasks:m,addNewTaskContent:u}))}}]),t}(n.Component),ce=Object($.b)((function(e){return{editMode:e.toDo.editMode,tasks:e.toDo.tasks}}),{addNewTask:function(e){return function(t){t(function(e){return{type:re,newTask:e}}(e))}},addNewTaskContent:function(e,t){return function(a){a(function(e,t){return{type:"/todoReducer___ADD_NEW_TASK_CONTENT",payload:{idContent:e,newTaskContent:t}}}(e,t))}},removeCompletedTaskToContent:function(e){return function(t){t(function(e){return{type:"/todoReducer___REMOVE_COMPLETED_TASK_TO_CONTENT",id:e}}(e))}},toggleShowTaskContent:function(e,t){return function(a){a(ne({type:"/todoReducer___TOGGLE_SHOW_TASK_CONTENT"},{id:e,status:t}))}},removeTaskContent:function(e){return function(t){t(function(e){return{type:"/todoReducer___REMOVE_TASK_CONTENT",idContent:e}}(e))}},removeAllTaskContent:function(e){return function(t){t(function(e){return{type:"/todoReducer___REMOVE_ALL_TASK_CONTENT",id:e}}(e))}},toSetStatusCompletedTask:function(e,t){return function(a){a(ne({type:"/todoReducer___SET_STATUS_COMPLETED_TASK"},{id:e,status:t}))}}})(ie),de=a(124),me=a.n(de),ue=function(e){var t=e.showSidebar,a=e.setShowSidebar;return r.a.createElement("div",{className:me.a.headerWrapper},r.a.createElement(g,{showSidebar:t,setShowSidebar:a}),r.a.createElement(v,null))},_e=a(68),pe=a.n(_e),fe=function(e){var t=e.showSidebar,a=e.setShowSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t?pe.a.sideBarWrapper:pe.a.sideBarWrapper+" "+pe.a.hide},r.a.createElement("div",null,"sideBardfdfdfdfdsdsds"),r.a.createElement("div",null,"sideBardfdfdfdfdsdsds"),r.a.createElement("div",null,"sideBardfdfdfdfdsdsds"),r.a.createElement("div",null,"sideBardfdfdfdfdsdsds"),r.a.createElement("div",null,"sideBardfdfdfdfdsdsds"),r.a.createElement("span",{onClick:function(){a(!t)}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))},ke=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:c.a.app},r.a.createElement(ue,{showSidebar:a,setShowSidebar:o}),r.a.createElement(fe,{showSidebar:a,setShowSidebar:o}),r.a.createElement("div",{className:c.a.content},r.a.createElement(ce,{showSidebar:a,setShowSidebar:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(8),Te=a(125),Ce=a(282),be=Object(Ee.c)({toDo:le,form:Ce.a}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.d,ve=Object(Ee.e)(be,Object(Ee.d)(Ne(Object(Ee.a)(Te.a,Object(te.save)({namespace:"TasksTs-list"}))))),Se=a(127);s.a.render(r.a.createElement(Se.a,null,r.a.createElement($.a,{store:ve},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports={toDoWrapper:"ToDo_toDoWrapper__3rpq3",formWrapper:"ToDo_formWrapper__z_onT",taskDate:"ToDo_taskDate__1S5Jv",form:"ToDo_form__xr2BU",formName:"ToDo_formName__1Y8RC",formDescription:"ToDo_formDescription__3NzVX",formBtn:"ToDo_formBtn__3OZeR",formSubmitBtn:"ToDo_formSubmitBtn__2RNvr",formCancelBtn:"ToDo_formCancelBtn__yXsRF",calendar:"ToDo_calendar__1iFSb",taskControl:"ToDo_taskControl__2y5Rd",addNewTask:"ToDo_addNewTask__3_rsP",dellAllFinishedTask:"ToDo_dellAllFinishedTask__15mZ6",toDoHeader:"ToDo_toDoHeader__1iPLK",taskFilter:"ToDo_taskFilter__vtPme",filterItem:"ToDo_filterItem__1Qv-K",search:"ToDo_search__1_L1k",toDoItem:"ToDo_toDoItem__32Py8",itemHeader:"ToDo_itemHeader__2Zh0Q",dateAndTaskStatus:"ToDo_dateAndTaskStatus__gaCpZ",totalAndCompletedTask:"ToDo_totalAndCompletedTask__vYUT6",completedTasks:"ToDo_completedTasks__3H55w",action:"ToDo_action__1xs31",addTask:"ToDo_addTask__2QAYV",dellAllTask:"ToDo_dellAllTask__i70ia",dellFinishedTask:"ToDo_dellFinishedTask__rhRON",openList:"ToDo_openList__35Ybb",dateForPlane:"ToDo_dateForPlane__3h1s7",dateForPlaneEdit:"ToDo_dateForPlaneEdit__2EzSd",dayForPlane:"ToDo_dayForPlane__3BIpD",itemContents:"ToDo_itemContents__1UMXH",task:"ToDo_task__1uvgN",taskHeader:"ToDo_taskHeader__19O7J",taskName:"ToDo_taskName__2b5VO",createDateAndFinished:"ToDo_createDateAndFinished__27pzT",createDate:"ToDo_createDate__2b5I6",finished:"ToDo_finished__1cvrk",taskContent:"ToDo_taskContent__Bd2ZF",dellContent:"ToDo_dellContent__1ty-L",dellContentBtn:"ToDo_dellContentBtn__3ghWf",none:"ToDo_none__sQgnt",footerWrapper:"ToDo_footerWrapper__Ar2UP",burgerMenuWrapper:"ToDo_burgerMenuWrapper__1YTHR"}},65:function(e,t,a){e.exports={burgerMenuWrapper:"BurgerMenu_burgerMenuWrapper__3mvL1",burgerMenuImg:"BurgerMenu_burgerMenuImg__11C0y",burgerMenuTitle:"BurgerMenu_burgerMenuTitle__Ja8GQ"}},66:function(e,t,a){e.exports={modal:"ModalWindow_modal__3eWvn",overlay:"ModalWindow_overlay__1tH_4"}},68:function(e,t,a){e.exports={sideBarWrapper:"SideBar_sideBarWrapper__Umien",hide:"SideBar_hide__2yTlM"}},86:function(e,t,a){e.exports={app:"App_app__3_1hL",content:"App_content__1y3dX"}},87:function(e,t,a){e.exports={calendarWrapper:"NewCalendar_calendarWrapper__2jADW",closeCalendar:"NewCalendar_closeCalendar__1rwq4"}}},[[130,1,2]]]);
//# sourceMappingURL=main.fcfdf12b.chunk.js.map