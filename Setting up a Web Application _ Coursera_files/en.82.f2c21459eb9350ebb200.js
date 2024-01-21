(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{D77H:function(module,exports,e){},F9YM:function(module,e,t){"use strict";t.d(e,"c",(function(){return formatTime})),t.d(e,"e",(function(){return getTimeFromDuration})),t.d(e,"a",(function(){return buildParagraphs})),t.d(e,"b",(function(){return findCuesAroundTime})),t.d(e,"d",(function(){return getAdjacentCues}));var n=t("wd/R"),a=t.n(n),findCueIndexForTime=function(e,t){return function findCueIndexForTimeHelper(e,t,n,a){if(t>n)return-1;var r=n-Math.floor((n-t)/2);return a<e[r].startTime?findCueIndexForTimeHelper(e,t,r-1,a):r!==e.length-1&&a>=e[r+1].startTime?findCueIndexForTimeHelper(e,r+1,n,a):r}(e,0,e.length-1,t)},formatTime=function(e){var t="m:ss",n=1e3*e;return a.a.duration(n).hours()>0&&(t="h:m"+t),a.a.utc(n).locale("en").format(t)},getTimeFromDuration=function(e){var t=1e3*e,n=a.a.duration(t),r=n.hours(),o=n.minutes();return{seconds:n.seconds(),minutes:o,hours:r}},buildParagraphs=function(e){var t,n,a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=[];return e.forEach((function(e){n&&(a=e.startTime-n.endTime),(!t||a>=r)&&(t=[],o.push(t)),t.push(e),n=e})),o},findCuesAroundTime=function(e,t){var n=e[findCueIndexForTime(e,t)];return n?[n]:[]},getAdjacentCues=function(e,t,n){var a=findCueIndexForTime(e,t);return-1===a&&e.length>2?[0,1,2].map((function(t){return e[t]})):a<0||a>=e.length?[]:"en"===n?function(e,t){for(var n=[],a=e-1;-1!==a;){var r=t[a];if("."===r.text[r.text.length-1])break;n.unshift(a),a-=1}for(var o=e;o<=t.length-1;){var i=t[o];if(n.push(o),"."===i.text[i.text.length-1])break;o+=1}return n}(a,e).map((function(t){return e[t]})):function(e,t){var n=[],a=[];return e>=2&&a.push(e-2),e>=1&&a.push(e-1),e<t-1&&n.push(e+1),e<t-2&&n.push(e+2),[].concat(a,[e],n)}(a,e.length).map((function(t){return e[t]}))}},Ne6o:function(module,exports,e){var t=e("OIEB"),n=t.default?t.default:{},a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},OIEB:function(module,exports){exports.default={"ar":true,"de":true,"el":true,"es":true,"fr":true,"hi":true,"hu":true,"id":true,"it":true,"ja":true,"kk":true,"ko":true,"nl":true,"pl":true,"pt":true,"ru":true,"sv":true,"th":true,"tr":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},c5cO:function(module,e,t){"use strict";t.r(e);var n,a,r,o,i,c,s,u,d,l,m,g,p,f=t("VkAN"),b=t.n(f),v=t("J4zp"),h=t.n(v),x=t("AeFk"),O=t("q1tI"),j=t.n(O),N=t("HOoY"),T=t("kgYC"),I=t("8Hdl"),S=t("1HaE"),y=t("Ns7p"),E=t("Gcrz"),C=t("UYTu"),w=Object(C.a)(n||(n=b()(['\n  query VideoCourseMaterialsQuery($slug: String!) {\n    OnDemandCourseMaterialsV2 @naptime {\n      slug(slug: $slug, showHidden: true, includes: "modules") {\n        elements {\n          id\n          name\n        }\n        linked {\n          onDemandCourseMaterialModulesV1 {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n']))),data_CourseContentDataProvider=function(e){var t=e.courseSlug,n=e.children;return(j.a.createElement(E.c,{query:w,variables:{slug:t}},(function(e){var a,r=e.loading,o=e.error,i=e.data;if(o||r)return n({course:null,modules:null,error:!!o,loading:!!r});var c=((null==i?void 0:i.OnDemandCourseMaterialsV2)||{}).slug,s=null==c?void 0:null===(a=c.elements)||void 0===a?void 0:a[0].id,u=(c||{}).elements[0].name,d=((c||{}).linked||{}).onDemandCourseMaterialModulesV1;return n({course:{id:s,name:u,slug:t},modules:d,error:!1,loading:!1})})))},P=t("cVIm"),U=t("TOZ3"),k=t("CsdX"),D=t("wwtN"),V=t("8WNh"),M=t("Ne6o"),W=t.n(M),z=(t("nS3k"),"".concat(P.a.url.resource_assets,"learner/icon_note.svg")),L="".concat(P.a.url.resource_assets,"learner/icon_highlight.svg"),private_NotesReviewPageDataState=function(e){var t=e.dataState;return(j.a.createElement(U.b,{"aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text",rootClassName:"rc-NotesReviewPageDataState",flexDirection:"column",justifyContent:"start",alignItems:"center"},"error"===t&&[j.a.createElement(D.a,{key:"icon",size:84,color:k.b.error}),j.a.createElement("div",{key:"message",className:"data-state-message headline-5-text","aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text"},W()("There was an issue loading your notes data. Please try refreshing the page."))],"loading"===t&&[a||(a=j.a.createElement(V.a,{key:"icon",size:84})),j.a.createElement("div",{key:"message",className:"data-state-message headline-5-text"},W()("Loading notes..."))],"empty"===t&&[j.a.createElement(U.b,{justifyContent:"center",rootClassName:"state-icons"},j.a.createElement("img",{src:z,alt:W()("Take notes"),className:"placeholder-icon"}),j.a.createElement("img",{src:L,alt:W()("Highlight"),className:"placeholder-icon"})),j.a.createElement("div",{"aria-live":"assertive","aria-atomic":!0,"aria-relevant":"text",key:"message",className:"data-state-message headline-5-text"},W()("You have not added any notes yet. Notes can be created from video pages."))]))},A=t("3tO9"),F=t.n(A),Q=t("RIqP"),q=t.n(Q),Y=t("6/Gu"),H=t("ZJgU"),R=t("fsL8"),B=t.n(R),G=t("yXPU"),J=t.n(G),Z=t("mDxB"),cloneData=function(e){return JSON.parse(JSON.stringify(e))},X=Object(C.a)(r||(r=b()(["\n  query NotesDataQuery($courseId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseWithContentSort(courseId: $courseId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]))),CourseNotesDataProvider_CourseNotesQueryProvider=function(e){var t=e.course,n=e.pageSize,a=e.children;return(j.a.createElement(E.c,{query:X,variables:{courseId:t.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},(function(e){var t,r=e.loading,o=e.error,i=e.data,c=e.fetchMore;if(o)return a({notes:null,onLastPage:!1,error:!0,fetchNextPage:(t=J()(B()().mark((function _callee(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee)}))),function(){return t.apply(this,arguments)}),loadingInitialPage:!1,loadingNextPage:!1});var s,u=((i||{}).UserNotesV1||{}).courseWithContentSort;if(r&&!(u||{}).elements)return a({notes:null,onLastPage:!1,error:!1,fetchNextPage:(s=J()(B()().mark((function _callee2(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee2)}))),function(){return s.apply(this,arguments)}),loadingInitialPage:!0,loadingNextPage:!1});var d=((u||{}).elements||[]).map(Z.e),l=(u||{}).paging,m=!l||!l.next||l.total&&l.next>=l.total,g=function(){var e=J()(B()().mark((function _callee3(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({variables:{start:d.length,limit:n},updateQuery:function(e,t){var n=t.fetchMoreResult,a=cloneData(e);if(!n)return a;var r=a;r.UserNotesV1.courseWithContentSort.elements=[].concat(q()(e.UserNotesV1.courseWithContentSort.elements),q()(n.UserNotesV1.courseWithContentSort.elements));var o=n.UserNotesV1.courseWithContentSort.paging;return r.UserNotesV1.courseWithContentSort.paging=o,r}});case 2:case"end":return e.stop()}}),_callee3)})));return function(){return e.apply(this,arguments)}}();return d.length-n>=0&&(d[d.length-n].shouldFocusOn=!0),a({notes:d,fetchNextPage:g,onLastPage:m,error:!1,loadingInitialPage:!1,loadingNextPage:r})})))},K=Object(C.a)(o||(o=b()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]))),CourseNotesDataProvider_CourseNotesDeletionProvider=function(e){var t=e.course,n=e.pageSize,a=e.children;return(j.a.createElement(E.b,{mutation:K},(function(e){return a({deleteNote:function(a){e({variables:{noteId:a},update:function(e){var r=e.readQuery({query:X,variables:{courseId:t.id,start:0,limit:n}}),o=cloneData(r),i=((((r||{}).UserNotesV1||{}).courseWithContentSort||{}).elements||[]).filter((function(e){return e.id!==a})),c=o;c.UserNotesV1.courseWithContentSort.elements=i,e.writeQuery({query:X,variables:{courseId:t.id,start:0,limit:n},data:c})}})}})})))},ee=Object(C.a)(i||(i=b()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]))),CourseNotesDataProvider_CourseNotesUpdateProvider=function(e){var t=e.children;return(j.a.createElement(E.b,{mutation:ee},(function(e){return t({updateNote:function(t,n){e({variables:{noteId:t,noteDraft:n}})}})})))},data_CourseNotesDataProvider=function(e){var t=e.course,n=e.pageSize,a=e.children;return(j.a.createElement(CourseNotesDataProvider_CourseNotesQueryProvider,{course:t,pageSize:n},(function(e){var r=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,s=e.loadingNextPage,u=e.onLastPage;return(j.a.createElement(CourseNotesDataProvider_CourseNotesDeletionProvider,{course:t,pageSize:n},(function(e){var t=e.deleteNote;return(j.a.createElement(CourseNotesDataProvider_CourseNotesUpdateProvider,null,(function(e){var n=e.updateNote;return a({notes:r,onLastPage:u,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:s})})))})))})))},ModuleNotesDataProvider_cloneData=function(e){return JSON.parse(JSON.stringify(e))},te=Object(C.a)(c||(c=b()(["\n  query NotesModuleQuery($courseId: String!, $moduleId: String!, $start: Int, $limit: Int) {\n    UserNotesV1 @naptime {\n      courseModuleWithContentSort(courseId: $courseId, moduleId: $moduleId, start: $start, limit: $limit) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n        paging\n      }\n    }\n  }\n"]))),ModuleNotesDataProvider_ModuleNotesQueryProvider=function(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return(j.a.createElement(E.c,{query:te,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},notifyOnNetworkStatusChange:!0},(function(e){var t,r,o=e.loading,i=e.error,c=e.data,s=e.fetchMore;if(i)return a({notes:null,onLastPage:!1,fetchNextPage:(t=J()(B()().mark((function _callee(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee)}))),function(){return t.apply(this,arguments)}),error:!0,loadingInitialPage:!1,loadingNextPage:!1});if(o&&!(((c||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements)return a({notes:null,onLastPage:!1,fetchNextPage:(r=J()(B()().mark((function _callee2(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),_callee2)}))),function(){return r.apply(this,arguments)}),error:!1,loadingInitialPage:!0,loadingNextPage:!1});var u=((c||{}).UserNotesV1||{}).courseModuleWithContentSort,d=((u||{}).elements||[]).map(Z.e),l=(u||{}).paging,m=!l||!l.next||l.total&&l.next>=l.total,g=function(){var e=J()(B()().mark((function _callee3(){return B()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({variables:{start:d.length,limit:n},updateQuery:function(e,t){var n=t.fetchMoreResult,a=ModuleNotesDataProvider_cloneData(e);if(!n)return a;var r=a;r.UserNotesV1.courseModuleWithContentSort.elements=[].concat(q()(e.UserNotesV1.courseModuleWithContentSort.elements),q()(n.UserNotesV1.courseModuleWithContentSort.elements));var o=n.UserNotesV1.courseModuleWithContentSort.paging;return r.UserNotesV1.courseModuleWithContentSort.paging=o,r}});case 2:case"end":return e.stop()}}),_callee3)})));return function(){return e.apply(this,arguments)}}();return d.length-n>=0&&(d[d.length-n].shouldFocusOn=!0),a({notes:d,fetchNextPage:g,onLastPage:m,error:!1,loadingInitialPage:!1,loadingNextPage:!!o})})))},ne=Object(C.a)(s||(s=b()(["\n  mutation DeleteNoteMutation($noteId: String!) {\n    UserNotesV1 @naptime {\n      delete(id: $noteId) {\n        id\n      }\n    }\n  }\n"]))),ModuleNotesDataProvider_ModuleNotesDeletionProvider=function(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return(j.a.createElement(E.b,{mutation:ne},(function(e){return a({deleteNote:function(a){e({variables:{noteId:a},update:function(e){var r=e.readQuery({query:te,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n}}),o=ModuleNotesDataProvider_cloneData(r),i=((((r||{}).UserNotesV1||{}).courseModuleWithContentSort||{}).elements||[]).filter((function(e){return e.id!==a})),c=o;c.UserNotesV1.courseModuleWithContentSort.elements=i,e.writeQuery({query:te,variables:{courseId:t.id,moduleId:module.id,start:0,limit:n},data:c})}})}})})))},ae=Object(C.a)(u||(u=b()(["\n  mutation UpdateNoteMutation($noteId: String!, $noteDraft: DataMap!) {\n    UserNotesV1 @naptime {\n      update(id: $noteId, input: $noteDraft) {\n        elements {\n          id\n          userText\n          createdAt\n          updatedAt\n          details\n        }\n      }\n    }\n  }\n"]))),ModuleNotesDataProvider_ModuleNotesUpdateProvider=function(e){var t=e.children;return(j.a.createElement(E.b,{mutation:ae},(function(e){return t({updateNote:function(t,n){e({variables:{noteId:t,noteDraft:n}})}})})))},data_ModuleNotesDataProvider=function(e){var t=e.course,module=e.module,n=e.pageSize,a=e.children;return(j.a.createElement(ModuleNotesDataProvider_ModuleNotesQueryProvider,{course:t,module:module,pageSize:n},(function(e){var r=e.notes,o=e.fetchNextPage,i=e.error,c=e.loadingInitialPage,s=e.loadingNextPage,u=e.onLastPage;return(j.a.createElement(ModuleNotesDataProvider_ModuleNotesDeletionProvider,{course:t,module:module,pageSize:n},(function(e){var t=e.deleteNote;return(j.a.createElement(ModuleNotesDataProvider_ModuleNotesUpdateProvider,null,(function(e){var n=e.updateNote;return a({notes:r,onLastPage:u,fetchNextPage:o,deleteNote:t,updateNote:n,error:i,loadingInitialPage:c,loadingNextPage:s})})))})))})))},data_ContentNotesDataProvider=function(e){var t=e.contentType,n=e.course,module=e.module,a=e.pageSize,r=void 0===a?10:a,o=e.children;return"module"===t?module?j.a.createElement(data_ModuleNotesDataProvider,{course:n,module:module,pageSize:r},(function(e){return o(e)})):null:j.a.createElement(data_CourseNotesDataProvider,{course:n,pageSize:r},(function(e){return o(e)}))},re=t("p6CZ"),review_page_Divider=function(){var e=Object(T.a)();return Object(x.d)("div",{css:Object(x.c)(d||(d=b()(["\n        width: 100%;\n        margin: ",";\n        border-top: 1px solid ",";\n      "])),e.spacing(24,0),e.palette.gray[300])})},oe=t("F9YM");!function(e){e[e.VIEW=0]="VIEW",e[e.EDIT=1]="EDIT",e[e.DELETE=2]="DELETE"}(l||(l={}));var ie,ce,se,ue,de,le,me,ge,pe,fe,be,ve,he,xe,Oe,je,Ne,Te,Ie,Se,ye,Ee,Ce,we,Pe,Ue,ke,De,Ve,note_NoteDelete=function(e){var t=e.setCurrentState,n=e.onDelete,a=e.text,r=e.note,o=Object(T.a)(),i=Object(oe.c)(r.noteStartTs),c=r.noteEndTs?Object(oe.c)(r.noteEndTs):"",s=r.itemName;return Object(x.d)(j.a.Fragment,null,a&&Object(x.d)(j.a.Fragment,null,Object(x.d)(I.a,{component:"p",css:Object(x.c)(m||(m=b()(["\n              margin: ",";\n            "])),o.spacing(16,0,8)),variant:"h3semibold"},W()("Your Notes")),Object(x.d)(I.a,{variant:"body1"},a)),Object(x.d)(Y.a,{container:!0,alignItems:"flex-end",css:{flexGrow:1}},Object(x.d)(Y.a,{item:!0,container:!0,justifyContent:"flex-start",alignItems:"center"},Object(x.d)(Y.a,{item:!0,css:{margin:o.spacing(16,32,0,0)}},Object(x.d)(I.a,{variant:"body1","aria-live":"polite"},W()("Are you sure you want to delete the entire note?"))),Object(x.d)(Y.a,{item:!0,container:!0,css:Object(x.c)(g||(g=b()(["\n              flex-basis: 0;\n              flex-wrap: nowrap;\n              margin: ",";\n            "])),o.spacing(16,0,0))},Object(x.d)(Y.a,{item:!0,css:Object(x.c)(p||(p=b()(["\n                margin: ",";\n              "])),o.spacing(0,16,0,0))},Object(x.d)(H.a,{onClick:function(){n(),t(l.VIEW)},size:"small",variant:"primary","aria-label":W()("Delete your notes for #{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:s,noteStartTimestamp:i,noteEndTimestamp:c})},W()("Delete"))),Object(x.d)(Y.a,{item:!0},Object(x.d)(H.a,{onClick:function(){return t(l.VIEW)},size:"small",variant:"secondary","aria-label":W()("Cancel deleting your notes for #{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:s,noteStartTimestamp:i,noteEndTimestamp:c})},W()("Cancel")))))))},note_NoteEdit=function(e){var t=e.setCurrentState,n=e.text,a=e.onSave,r=Object(T.a)(),o=Object(O.useState)(n),i=h()(o,2),c=i[0],s=i[1],u=n.split(" ",20).join(" ");return Object(x.d)(j.a.Fragment,null,Object(x.d)(I.a,{component:"p",css:Object(x.c)(ie||(ie=b()(["\n          margin: ",";\n        "])),r.spacing(16,0,8)),variant:"h3semibold"},W()("Your Notes")),Object(x.d)("textarea",{"aria-label":W()("Your Notes"),autoFocus:!0,css:F()({width:"100%",maxHeight:"175px",overflowY:"scroll",margin:r.spacing(0,0,0),padding:r.spacing(16),border:"1px solid ".concat(r.palette.gray[500]),borderRadius:2},r.typography.body1),id:"edit-note",defaultValue:c,onChange:function(e){return s(e.target.value)},rows:3}),Object(x.d)(Y.a,{container:!0,justifyContent:"flex-start",css:{margin:r.spacing(16,0,0)}},Object(x.d)(Y.a,{item:!0},Object(x.d)(H.a,{onClick:function(){a(c),t(l.VIEW)},size:"small",variant:"primary","aria-label":W()("Save your notes for #{text}",{text:u})},W()("Save"))),Object(x.d)(Y.a,{item:!0},Object(x.d)(H.a,{css:Object(x.c)(ce||(ce=b()(["\n              margin: ",";\n            "])),r.spacing(0,0,0,16)),onClick:function(){return t(l.VIEW)},size:"small",variant:"secondary","aria-label":W()("Cancel editing notes for #{text}",{text:u})},W()("Cancel")))))},Me=t("GUMY"),We=t("Ys1X"),_e=t("9A5E"),NoteInformation_VideoSnapshot=function(e){var t=e.snapshotUrl,n=Object(T.a)(),a=Object(x.c)(se||(se=b()(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    background: ",";\n    transition: opacity 0.2s linear;\n\n    :hover {\n      opacity: 0.6;\n    }\n  "])),n.palette.black[500]),r=Object(x.c)(ue||(ue=b()(["\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n  "])));return Object(x.d)("div",{css:Object(x.c)(de||(de=b()(["\n        width: 197px;\n        position: relative;\n      "])))},Object(x.d)("div",{css:a},Object(x.d)(I.a,{color:"invertBody",css:r},W()("Go to video"))),Object(x.d)("img",{css:Object(x.c)(le||(le=b()(["\n          width: 100%;\n          border: 1px solid ",";\n        "])),n.palette.gray[400]),src:t,alt:W()("note")}))},note_NoteInformation=function(e){var t,n,a,r,o=e.note,i=e.course,c=Object(T.a)(),s=Object(oe.c)(o.noteStartTs),u=o.noteEndTs?Object(oe.c)(o.noteEndTs):"",d=u?W()("#{itemName}, video starts at #{videoNoteStartTimestamp} to #{videoNoteEndTimestamp}",{itemName:o.itemName,videoNoteStartTimestamp:s,videoNoteEndTimestamp:u}):W()("#{itemName}, video starts at #{videoNoteStartTimestamp}",{itemName:o.itemName,videoNoteStartTimestamp:s});return Object(x.d)(O.Fragment,null,Object(x.d)(Y.a,{container:!0,alignItems:"center",wrap:"nowrap"},!o.snapshotUrl&&Object(x.d)("div",{css:Object(x.c)(me||(me=b()(["\n              flex-shrink: 0;\n              height: ",";\n            "])),c.spacing(24))},ge||(ge=Object(x.d)(Me.a,{size:"large"}))),Object(x.d)(_e.a,{trackingName:"highlight_link",data:{itemId:o.itemId},href:(n=i.slug,a=null!==(t=o.itemId)&&void 0!==t?t:"",r=o.noteStartTs,"".concat(Object(We.c)(n),"/lecture/").concat(a,"?t=").concat(Math.trunc(r))),target:"_blank",role:"link",rel:"noopener noreferrer",css:Object(x.c)(pe||(pe=b()(["\n            margin: ",";\n          "])),c.spacing(0,0,0,o.snapshotUrl?0:8)),ariaLabel:d},o.snapshotUrl&&Object(x.d)("div",{"data-e2e":"snapshot-container",css:Object(x.c)(fe||(fe=b()(["\n                margin: ",";\n              "])),c.spacing(0,0,16,0))},Object(x.d)(NoteInformation_VideoSnapshot,{snapshotUrl:o.snapshotUrl})),Object(x.d)(I.a,{color:"inherit"},o.itemName))),Object(x.d)(I.a,{css:Object(x.c)(be||(be=b()(["\n          margin: ",";\n\n          "," {\n            margin: ",";\n          }\n        "])),c.spacing(4,0,0,o.snapshotUrl?0:32),c.breakpoints.down("sm"),c.spacing(4,0,16,o.snapshotUrl?0:32)),variant:"body2",color:"supportText","aria-label":W()("Duration"),dir:"ltr"},function(e){var t=e.noteStartTs,n=e.noteEndTs,a=e.captureTs;return t&&n?"".concat(Object(oe.c)(t)," - ").concat(Object(oe.c)(n)):"".concat(Object(oe.c)(a))}(o)))},ze=t("UIee"),Le=t("rGs/"),note_NoteView=function(e){var t=e.text,n=e.setCurrentState,a=e.note,r=Object(T.a)(),formatAriaLabelForButton=function(e){var t=a.itemName,n=Object(oe.c)(a.noteStartTs),r=a.noteEndTs?Object(oe.c)(a.noteEndTs):"";return t?"EDIT"===e?r?W()("Edit your notes for #{videoName} from time #{videoNoteStartTimestamp} to #{videoNoteEndTimestamp}",{videoName:t,videoNoteStartTimestamp:n,videoNoteEndTimestamp:r}):W()("Edit your notes for #{videoName} from time #{videoNoteStartTimestamp}",{videoName:t,videoNoteStartTimestamp:n}):r?W()("Delete your notes for #{videoName} from time #{videoNoteStartTimestamp} to #{videoNoteEndTimestamp}",{videoName:t,videoNoteStartTimestamp:n,videoNoteEndTimestamp:r}):W()("Delete your notes for #{videoName} from time #{videoNoteStartTimestamp}",{videoName:t,videoNoteStartTimestamp:n}):"EDIT"===e?W()("Edit your notes"):W()("Delete your notes")};return Object(x.d)(j.a.Fragment,null,t&&Object(x.d)(j.a.Fragment,null,Object(x.d)(I.a,{component:"p",css:Object(x.c)(ve||(ve=b()(["\n              margin: ",";\n            "])),r.spacing(16,0,8)),variant:"h3semibold","data-e2e":"video-note-label"},W()("Your Notes")),Object(x.d)(I.a,{variant:"body1","data-e2e":"video-note-text"},t)),Object(x.d)(Y.a,{container:!0,alignItems:"flex-end",css:{flexGrow:1}},Object(x.d)(Y.a,{container:!0,justifyContent:"flex-start",css:{margin:r.spacing(16,0,0)}},Object(x.d)(Y.a,{item:!0,css:Object(x.c)(he||(he=b()(["\n              /* Required to align the text in the button correctly with the rest of the notes */\n              margin-left: -8px;\n            "])))},Object(x.d)(H.a,{icon:xe||(xe=Object(x.d)(ze.a,{size:"small"})),iconPosition:"before",onClick:function(){return n(l.EDIT)},size:"small",variant:"ghost","aria-label":formatAriaLabelForButton("EDIT")},W()("Edit"))),Object(x.d)(Y.a,{css:Object(x.c)(Oe||(Oe=b()(["\n              margin: ",";\n            "])),r.spacing(0,0,0,16)),item:!0},Object(x.d)(H.a,{icon:je||(je=Object(x.d)(Le.a,{size:"small"})),iconPosition:"before",onClick:function(){return n(l.DELETE)},size:"small",variant:"ghost","aria-label":formatAriaLabelForButton("DELETE")},W()("Delete"))))))},$e=Object(O.forwardRef)((function(e,t){var n=e.note,a=e.course,r=e.onSave,o=e.onDelete,i=Object(O.useState)(l.VIEW),c=h()(i,2),s=c[0],u=c[1],d=Object(T.a)(),m=n.itemName,g=Object(oe.c)(n.noteStartTs),p=n.noteEndTs?Object(oe.c)(n.noteEndTs):"";return Object(x.d)("li",{css:Object(x.c)(Ne||(Ne=b()(["\n        width: 100%;\n        list-style: none;\n      "]))),ref:t},Te||(Te=Object(x.d)(review_page_Divider,null)),Object(x.d)(Y.a,{container:!0,"data-e2e":"note-card"},Object(x.d)(Y.a,{item:!0,xs:12,sm:5,md:5,lg:4,xl:3,css:{padding:d.spacing(0,32,0,0)}},Object(x.d)(note_NoteInformation,{note:n,course:a})),Object(x.d)(Y.a,{item:!0,xs:12,sm:7,md:7,lg:8,xl:9},Object(x.d)(Y.a,{container:!0,direction:"column",css:{height:"100%"}},Object(x.d)(Y.a,{item:!0,css:{marginLeft:d.spacing(4)}},Object(x.d)(I.a,{variant:"body1","data-e2e":"video-section-text"},n.transcriptText)),s===l.VIEW&&Object(x.d)(note_NoteView,{setCurrentState:u,text:n.noteText,note:n}),s===l.EDIT&&Object(x.d)(note_NoteEdit,{setCurrentState:u,text:n.noteText,onSave:function(e){return r(n.id,e)}}),s===l.DELETE&&Object(x.d)(note_NoteDelete,{setCurrentState:u,onDelete:function(){return o(n.id)},note:n,text:p?W()("#{itemName} from time #{noteStartTimestamp} to #{noteEndTimestamp}",{itemName:m,noteStartTimestamp:g,noteEndTimestamp:p}):W()("#{itemName} from time #{noteStartTimestamp}",{itemName:m,noteStartTimestamp:g})})))))})),NoteList_NoteList=function(e){var t=function(){var e=Object(O.useRef)(null);return[Object(O.useCallback)((function(t){t&&t.querySelectorAll("a")[0].focus();e.current=t}),[])]}(),n=h()(t,1)[0];return Object(x.d)(data_ContentNotesDataProvider,{pageSize:20,contentType:e.module?"module":"course",course:e.course,module:e.module},(function(t){var a=t.notes,r=t.onLastPage,o=t.fetchNextPage,i=t.error,c=t.loadingInitialPage,s=t.loadingNextPage,u=t.updateNote,d=t.deleteNote;if(i)return Ie||(Ie=Object(x.d)(private_NotesReviewPageDataState,{dataState:"error"}));if(c)return Se||(Se=Object(x.d)(private_NotesReviewPageDataState,{dataState:"loading"}));if(!a||0===a.length)return ye||(ye=Object(x.d)(private_NotesReviewPageDataState,{dataState:"empty"}));var l=function(e){for(var t,n,a,r,o,i,c=0,s=c+1;s<e.length;){for(;s<e.length&&e[s].itemName===e[s-1].itemName;)s+=1;n=c,a=s,r=void 0,o=void 0,i=void 0,r=(t=e).slice(0,n),o=t.slice(a),i=t.slice(n,a).sort(Z.a),t.length=0,t.push.apply(t,q()(r.concat(i).concat(o))),e=t,s=(c=s)+1}return e}(a);return Object(x.d)(j.a.Fragment,null,Object(x.d)("ul",{css:Object(x.c)(Ee||(Ee=b()(["\n                margin: 0;\n                padding: 0;\n              "])))},l.map((function(t){return Object(x.d)($e,{course:e.course,key:t.id,note:t,onSave:function(n,a){var r;u(n,Object(re.d)({itemId:t.itemId,courseId:e.course.id,highlight:F()(F()({},t),{},{noteText:null!==(r=null!=a?a:t.noteText)&&void 0!==r?r:""}),languageCode:t.languageCode}))},onDelete:function(e){return d(e)},ref:t.shouldFocusOn?n:void 0})}))),Ce||(Ce=Object(x.d)(review_page_Divider,null)),!r&&Object(x.d)(Y.a,{container:!0,justifyContent:"center"},Object(x.d)(H.a,{variant:"secondary",disabled:s,onClick:o},s?W()("Loading Notes..."):W()("See More Notes"))))}))},Ae=t("rzCt"),Fe=t("fguj"),NotesPageFilterDropdown_FilterDropdownItem=function(e){var t=e.content,n=t&&"course"!==t.contentType?t.name:W()("All notes");return Object(x.d)("div",{css:Object(x.c)(we||(we=b()(["\n        width: 100%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n      "])))},n)},review_page_NotesPageFilterDropdown=function(e){var t=e.course,n=e.modules,a=e.selectedContentId,r=e.onSelect,o=void 0===r?function(){}:r,i=Object(T.a)(),c=a||t.id,s=F()({contentType:"course"},t),u=n.map((function(module){return F()({contentType:"module"},module)})),d=[s].concat(q()(u));return Object(x.d)("div",{css:Object(x.c)(Pe||(Pe=b()(["\n        margin: ",";\n        "," {\n          max-width: 306px;\n        }\n      "])),i.spacing(12,0,24),i.breakpoints.up("sm")),className:"rc-NotesPageFilterDropdown"},Object(x.d)(Ae.a,{label:W()("Filter"),value:c,onChange:function(e){return o(e.target.value)},fullWidth:!0},d.map((function(e){return Object(x.d)(Fe.a,{key:e.id,value:e.id},Object(x.d)(NotesPageFilterDropdown_FilterDropdownItem,{content:e}))}))))};t.d(e,"NotesReviewPageWithCourseData",(function(){return NotesReviewPage_NotesReviewPageWithCourseData}));var NotesReviewPage_NotesReviewPageWithCourseData=function(e){var t=Object(O.useState)(),n=h()(t,2),a=n[0],r=n[1];O.useEffect((function(){y.a.get("LearnerNotesPendoSampleIncluded")&&Object(S.a)()}),[]);var o=Object(T.a)();return Object(x.d)("div",{css:Object(x.c)(Ue||(Ue=b()(["\n        "," {\n          margin: ",";\n        }\n\n        "," {\n          margin: ",";\n        }\n\n        a:focus {\n          outline-offset: 2px;\n        }\n\n        /* \n          We are setting the typography of components that are not yet migrated to CDS and that are still being used by the original page \n          We don't want to override the font if the rest of the page is not using CDS\n        */\n        .rc-NotesReviewPageDataState * {\n          ",";\n        }\n\n        .rc-NotesReviewPageDataState {\n          margin: ",";\n        }\n      "])),o.breakpoints.up("md"),o.spacing(32,48),o.breakpoints.down("sm"),o.spacing(16,0),o.typography.h2,o.spacing(48,0,0))},Object(x.d)(I.a,{variant:"h1semibold",css:Object(x.c)(ke||(ke=b()(["\n          margin: ",";\n          "," {\n            margin: ",";\n          }\n        "])),o.spacing(0,0,48),o.breakpoints.down("sm"),o.spacing(0,0,32))},W()("Notes")),Object(x.d)(review_page_NotesPageFilterDropdown,{modules:e.modules,course:e.course,selectedContentId:a,onSelect:r}),Object(x.d)(NoteList_NoteList,{course:e.course,module:e.modules.find((function(e){return e.id===a}))||null}))},Qe=N.a.createTrackedContainer((function(e){return{namespace:{page:"notes_review"},courseId:e.course.id}}))(NotesReviewPage_NotesReviewPageWithCourseData);e.default=function(e){var t=e.params.courseSlug;return Object(x.d)(data_CourseContentDataProvider,{courseSlug:t},(function(e){var t=e.course,n=e.modules,a=e.error,r=e.loading;return a?De||(De=Object(x.d)(private_NotesReviewPageDataState,{dataState:"error"})):r?Ve||(Ve=Object(x.d)(private_NotesReviewPageDataState,{dataState:"loading"})):Object(x.d)(Qe,{course:t,modules:n})}))}},mDxB:function(module,e,t){"use strict";t.d(e,"e",(function(){return reshapeHighlightForClient})),t.d(e,"f",(function(){return updateHighlight})),t.d(e,"b",(function(){return g})),t.d(e,"c",(function(){return deleteHighlight})),t.d(e,"a",(function(){return compareHighlightsByStartTimestamp})),t.d(e,"d",(function(){return p}));var n=t("fsL8"),a=t.n(n),r=t("yXPU"),o=t.n(r),i=t("fw5G"),c=t.n(i),s=t("DnuM"),u=t("sQ/U"),d=t("p6CZ"),l=Object(s.a)("/api/userNotes.v1",{type:"rest"}),m=function(){var e=o()(a()().mark((function _callee(e,t,n,r,o){var i,u,m,g,p;return a()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=(new c.a).addQueryParam("action","getScreenShotUploadUrlV2").addQueryParam("courseId",e).addQueryParam("itemId",t).addQueryParam("userId",r).addQueryParam("timestamp",n),a.next=3,l.post(i.toString());case 3:return u=a.sent,m=u.split("?")[0],g=Object(d.c)(o),p=Object(s.a)(u,{type:"rest"}),a.next=9,p.put("",{contentType:"image/png",data:g,processData:!1});case 9:return a.abrupt("return",m);case 10:case"end":return a.stop()}}),_callee)})));return function(t,n,a,r,o){return e.apply(this,arguments)}}(),reshapeHighlightForClient=function(e){var t=e.id,n=e.createdAt,a=e.updatedAt,r=e.userText,o=e.shouldFocusOn,i=e.details.definition,c=i.noteEndTs,s=i.noteStartTs,u=i.captureTs,d=i.snapshotUrl,l=i.transcriptTextStartIndex,m=i.transcriptTextEndIndex,g=i.transcriptText;return{id:t,itemId:i.itemId,itemName:i.itemName,clientId:t,createdAt:n,updatedAt:a,languageCode:i.languageCode,noteText:r,noteEndTs:c&&c/1e3,noteStartTs:s&&s/1e3,captureTs:u&&u/1e3,snapshotUrl:d,transcriptTextStartIndex:l,transcriptTextEndIndex:m,transcriptText:g,pendingCreate:!1,pendingUpdate:!1,shouldFocusOn:o}},updateHighlight=function(e){var t=e.itemId,n=e.courseId,a=e.languageCode,r=e.id,o=e.highlight,i=new c.a(r),s=Object(d.d)({itemId:t,courseId:n,highlight:o,languageCode:a});return l.put(i.toString(),{data:s})},g=function(){var e=o()(a()().mark((function _callee2(e){var t,n,r,o,i,c,s,g,p,f,b;return a()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=e.itemId,i=e.courseId,c=e.languageCode,s=e.highlight,g=Object(d.d)({itemId:o,courseId:i,highlight:s,languageCode:c}),p=u.a.get().id,!s.snapshotDataUrl){a.next=8;break}return a.next=6,m(i,o,g.details.definition.noteStartTs,p,s.snapshotDataUrl);case 6:f=a.sent,g.details.definition.snapshotUrl=f;case 8:return a.next=10,l.post("",{data:g});case 10:return b=a.sent,a.abrupt("return",{id:b.elements[0].id,snapshotUrl:(null===(t=b.elements[0])||void 0===t?void 0:null===(n=t.details)||void 0===n?void 0:null===(r=n.definition)||void 0===r?void 0:r.snapshotUrl)||""});case 12:case"end":return a.stop()}}),_callee2)})));return function(t){return e.apply(this,arguments)}}(),deleteHighlight=function(e){var t=e.id,n=new c.a(t);return l.delete(n.toString())},compareHighlightsByStartTimestamp=function(e,t){return e.noteStartTs<t.noteStartTs?-1:e.noteStartTs>t.noteStartTs?1:0},p=function(){var e=o()(a()().mark((function _callee3(e){var t,n,r,o,i;return a()().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.itemId,n=e.courseId,r=e.languageCode,o=(new c.a).addQueryParam("itemId",t).addQueryParam("courseId",n).addQueryParam("languageCode",r).addQueryParam("q","courseItemLanguageCode").addQueryParam("fields","id, userText, createdAt, updatedAt, details"),a.next=4,l.get(o.toString());case 4:return i=a.sent,a.abrupt("return",i.elements.map(reshapeHighlightForClient).sort(compareHighlightsByStartTimestamp));case 6:case"end":return a.stop()}}),_callee3)})));return function(t){return e.apply(this,arguments)}}()},nS3k:function(module,exports,e){e("D77H")},p6CZ:function(module,e,t){"use strict";var n=t("k8gO"),a=t("F9YM");t.d(e,"c",(function(){return getBlobFromDataURI})),t.d(e,"b",(function(){return highlightUtils_generateHighlightFromTranscriptSelection})),t.d(e,"a",(function(){return highlightUtils_generateHighlightFromCaptureButton})),t.d(e,"d",(function(){return getDraftFromHighlight}));var getBlobFromDataURI=function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],a=new ArrayBuffer(t.length),r=new Uint8Array(a),o=0;o<t.length;o+=1)r[o]=t.charCodeAt(o);return new Blob([a],{type:n})},highlightUtils_generateHighlightFromTranscriptSelection=function(e,t){var a=e.transcriptTextStartIndex,r=e.transcriptTextEndIndex,o=t.cues.filter((function(e){return e.index>=a.cueIndex&&e.index<=r.cueIndex})),i=o.reduce((function(e,t){var n=t.index,o=t.text,i=a.cueIndex,c=a.textIndex,s=r.cueIndex,u=r.textIndex;return n===i?n===s?"".concat(e).concat(o.substring(c,u+1)):"".concat(e).concat(o.substring(c)):n===s?"".concat(e," ").concat(o.substring(0,u+1)):"".concat(e," ").concat(o)}),""),c=Object(n.a)(),s=c,u=o[0],d=o[o.length-1].endTime;return{id:c,clientId:s,captureTs:u.startTime,noteStartTs:u.startTime,noteEndTs:d,transcriptText:i,noteText:"",languageCode:t.languageCode,transcriptTextStartIndex:a,transcriptTextEndIndex:r,pendingCreate:!0,pendingUpdate:!1}},highlightUtils_generateHighlightFromCaptureButton=function(e,t){var r=Object(n.a)(),o=r,i=e.languageCode,c=t.currentTime(),s=Object(a.d)(e.cues,c,i),u=s[0],d=s[s.length-1],l=s.reduce((function(e,t){return t.index===u.index?"".concat(e).concat(t.text):"".concat(e," ").concat(t.text)}),""),m={textIndex:0,cueIndex:u.index},g={textIndex:d.text.length-1,cueIndex:d.index},p=d.endTime;return{id:r,clientId:o,captureTs:c,noteStartTs:u.startTime,noteEndTs:p,transcriptText:l,noteText:"",languageCode:i,transcriptTextStartIndex:m,transcriptTextEndIndex:g,snapshotDataUrl:function(e){var t=document.createElement("canvas");t.width=960,t.height=540;var n=e.el().querySelector("video"),a=t.getContext("2d");return a&&n&&a.drawImage(n,0,0,t.width,t.height),t.toDataURL("image/jpeg")}(t),pendingCreate:!0,pendingUpdate:!1}},getDraftFromHighlight=function(e){var t=e.itemId,n=e.courseId,a=e.highlight,r=e.languageCode,o=a.noteStartTs,i=a.noteEndTs,c=a.captureTs,s=a.snapshotUrl,u=a.transcriptText,d=a.noteText,l=a.transcriptTextEndIndex;return{details:{typeName:"video",definition:{itemId:t,courseId:n,snapshotUrl:s||"",transcriptTextStartIndex:a.transcriptTextStartIndex,transcriptTextEndIndex:l,languageCode:r,transcriptText:u,noteEndTs:i&&1e3*i,captureTs:c&&1e3*c,noteStartTs:o&&1e3*o}},userNote:d}}}}]);
//# sourceMappingURL=en.82.f2c21459eb9350ebb200.js.map