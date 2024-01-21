(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"1G4o":function(module,e,i){"use strict";var n=i("q1tI"),t=i("eJMc"),r=i.n(t),a=i("BVC1"),s=i("yhVA"),o=i.n(s);e.a=function(e){var i=e.computedItem;return n.createElement("div",{className:"rc-AssignmentSubmitBeforeReviewWarning"},n.createElement("div",{className:"bgcolor-warn-light color-warn-dark",style:{padding:16,margin:"12px 0px"}},o()("Submit your project before reviewing classmates.")),n.createElement("div",{className:"vertical-box align-items-vertical-center"},n.createElement(r.a,{to:a.a.join(i.resourcePath,"submit"),className:"link-button primary"},o()("Go to my project"))))}},QvzW:function(module,e,i){"use strict";i.r(e);var n,t,r,a,s,o,c,d,u,l,m,v,b,p=i("VbXa"),g=i.n(p),f=i("q1tI"),h=i("17x9"),w=i.n(h),S=i("F/us"),k=i.n(S),y=i("8cuT"),I=i("pR6o"),E=i("BVC1"),N=i("L1vm"),O=i("sQ/U"),R=i("EdUP"),j=i("welz"),P=i.n(j),A=i("eLAd"),x=i.n(A),D=i("vlZc"),L=i.n(D),F=i("wd/R"),G=i.n(F),V=i("15pW"),T=i("Dob0"),C=L.a.AssociatedModel.extend({relations:[{type:L.a.One,key:"creator",relatedModel:T.a}],getReviewLink:function(){return E.a.join(this.collection.getItemLink(),"review",this.get("id"))},getTimestampString:function(){return this.timestampString=G()(this.get("createdAt")).fromNow()},getUserName:function(){return this.get("creator.fullName")},getUserPhoto:function(){return this.get("creator.photoUrl")},getTruncatedTitle:function(){return x()(this.get("title"),{length:V.d.gallery.maxTitleLength,separator:" ",omission:"…"})}}),W=P.a.Collection.extend({model:C,initialize:function(e,i){this.metadata=i.metadata},getItemLink:function(){return this.metadata.getBaseLink()},parse:function(e,i){return k()(e.submissionSummaries).map((function(i){var n=k()(e.userProfiles).findWhere({userId:i.creatorId});return k()(i).extend({creator:n})}))}}),q=i("1G4o"),U=i("VMeS"),Q=i("eJMc"),B=i.n(Q),Y=i("kvW3"),z=i("NXYo"),M=i("hbUA"),J=i("kWps"),H=i("Zz7k"),X=i("g0DA"),Z=i("yhVA"),K=i.n(Z),GiveFeedbackNoList_WithAvailableSubmissions=function(e){var i=e.computedItem.requiredReviewCount,t=e.reviewNextLink,r=Object(X.b)().isAssignmentAiGradingEligible;return r.loading||void 0===r.value?n||(n=f.createElement(U.a,null)):f.createElement("div",{className:"rc-GiveFeedbackNoList c-peer-card"},f.createElement("div",{className:"body-2-text"},K()("Review fellow learners")),r.value&&f.createElement("p",null,K()("Grading your classmates’ work aids your own learning process. It allows you to reflect on your own knowledge and discover the different ways your classmates responded to the assignment prompt. Considering different perspectives and approaches can inform your learning.")),f.createElement("p",null,K()("Award points and give constructive feedback using the grading criteria provided (if any). Follow these tips to make the most of your learning experience:")),f.createElement("ul",null,f.createElement("li",null,K()("Offer specific ideas or suggestions that the learner can apply right away. Be encouraging and supportive.")),f.createElement("li",null,K()("Use a translation tool if you have a preferred language that’s different from the learner you’re reviewing. Language usage is never a grading criteria.")),f.createElement("li",null,K()("Review #{requiredReviewCount} or more assignment submissions to receive a grade. Help more learners complete this course by giving more reviews.",{requiredReviewCount:i}))),f.createElement(B.a,{className:"link-button primary","data-js":"open-course-link",to:t},K()("Start Reviewing")))},GiveFeedbackNoList_WithoutAvailableSubmissions=function(e){var i=e.displayablePhaseSchedule,n=e.computedItem,t=i&&"submit"===i.currentPhase&&i.phaseStarts.review,r=t&&J.a.getFormattedDeadline(t);return r&&n.isPeerAssignmentReviewComplete?f.createElement("div",{className:"rc-GiveFeedbackNoList c-peer-card"},f.createElement("div",{className:"body-2-text"},K()("No Submissions Available")),f.createElement("div",null,f.createElement(Y.b,{message:K()("\n              There are no submissions available for you to review right now. We'll send you an email when\n              classmates' submissions are available to review. Classmates' submissions will be available to review by\n              {reviewsAvailableTime}."),reviewsAvailableTime:f.createElement("span",{className:"body-2-text"},r)}))):f.createElement("div",{className:"rc-GiveFeedbackNoList c-peer-card"},f.createElement("div",{className:"body-2-text"},K()("No Submissions Available")),f.createElement("div",null,K()("\n            There are no submissions available for you to review right now. Come back later if you want to review\n            more classmates' submissions!")))},GiveFeedbackNoList_MentorGradedMessage=function(e){return f.createElement("div",{className:"rc-GiveFeedbackNoList"},f.createElement("div",{className:"c-peer-card"},f.createElement("p",null,K()("All grading for this assignment will be done by course mentors."))),f.createElement(z.a,{requestedCapability:H.e.viewSubmissionList},e.isSubmissionAvailableForReview?f.createElement(GiveFeedbackNoList_WithAvailableSubmissions,{computedItem:e.computedItem,reviewNextLink:e.reviewNextLink}):f.createElement(GiveFeedbackNoList_WithoutAvailableSubmissions,{computedItem:e.computedItem,displayablePhaseSchedule:e.displayablePhaseSchedule})))},components_GiveFeedbackNoList=function(e){var i=e.isSubmissionAvailableForReview,n=e.computedItem,t=e.reviewNextLink,r=e.displayablePhaseSchedule;return Object(M.u)(n)?f.createElement(GiveFeedbackNoList_MentorGradedMessage,e):i?f.createElement(GiveFeedbackNoList_WithAvailableSubmissions,{computedItem:n,reviewNextLink:t}):f.createElement(GiveFeedbackNoList_WithoutAvailableSubmissions,{computedItem:n,displayablePhaseSchedule:r})},ee=i("Ef0b"),ie=i("lSNA"),ne=i.n(ie),te=i("3tO9"),re=i.n(te),ae=i("AeFk"),se=i("rzCt"),oe=i("fguj"),ce=i("BbiL"),de=i("fw5G"),ue=i.n(de),le=i("S+eF"),me=i.n(le),ve=i("DnuM"),be=Object(ve.a)("/api/onDemandPeerAuthoredReviewSummaries.v1",{type:"rest"}),pe=["submissionId","isMentorReview","creatorId","createdAt"],ge=["userId","externalUserId","fullName","photoUrl","courseRole","isSuperuser"],fe=["summary","computed"],onDemandPeerAuthoredReviewSummariesApi_getReviewedSubmissions=function(e){var i=e.userId,n=e.courseId,t=e.itemId,r=(new ue.a).addQueryParam("userId",i.toString()).addQueryParam("courseId",n).addQueryParam("itemId",t).addQueryParam("q","byItem").addQueryParam("includes",["submissionSummaries","onDemandPeerSubmissionSummaries.v2(profiles)"].join(",")).addQueryParam("fields",[pe.join(","),"onDemandPeerSubmissionSummaries.v2(".concat(fe.join(","),")"),"onDemandSocialProfiles.v1(".concat(ge.join(","),")")].join(","));return me()(be.get(r.toString()))},he=i("beWW"),we=i("VkAN"),Se=i.n(we),ke=i("wC8J"),ye=i("8Hdl"),Ie=i("ca6j"),Ee={container:function(){return Object(ae.c)(t||(t=Se()(["\n    display: block;\n    height: 210px;\n    padding-top: var(--cds-spacing-400);\n    padding-left: var(--cds-spacing-100);\n    min-width: 200px;\n    border: 1px solid var(--cds-color-neutral-stroke-primary-weak);\n    position: relative;\n    text-decoration: none;\n    color: inherit;\n\n    &:hover {\n      text-decoration: none;\n      background-color: var(--cds-color-interactive-background-primary-hover-weak);\n    }\n  "])))},header:function(){return Object(ae.c)(r||(r=Se()(["\n    height: 112px;\n    padding: var(--cds-spacing-150);\n    margin-bottom: 0;\n  "])))},footer:function(){return Object(ae.c)(a||(a=Se()(["\n    height: 56px;\n    padding: 0 var(--cds-spacing-150);\n    display: flex;\n  "])))},profileImage:function(){return Object(ae.c)(s||(s=Se()(["\n    margin-right: var(--cds-spacing-150);\n  "])))},fullName:function(){return Object(ae.c)(o||(o=Se()(["\n    line-height: 1.2em;\n  "])))},submissionTime:function(){return Object(ae.c)(c||(c=Se()(["\n    line-height: 0.9em;\n  "])))},needsReviewBanner:function(){return Object(ae.c)(d||(d=Se()(["\n    position: absolute;\n    left: var(--cds-spacing-200);\n    top: var(--cds-spacing-200);\n  "])))}},listFeedback_NextUpSubmissionTile=function(e){var i=e.submissionSummary,n=e.itemResourcePath,t=i.title,r=i.creator,a=i.createdAt,s=n+"/review/"+i.id;return Object(ae.d)("a",{href:s,css:Ee.container},Object(ae.d)(ke.a,{variant:"status",priority:"primary",color:"success",css:Ee.needsReviewBanner},K()("Needs review")),Object(ae.d)(ye.a,{css:Ee.header,variant:"h1",component:"div"},t),Object(ae.d)("div",{css:Ee.footer},Object(ae.d)("div",{css:Ee.profileImage},Object(ae.d)(Ie.a,{profile:r,size:40})),Object(ae.d)("div",null,Object(ae.d)(ye.a,{className:"pii-hide",variant:"h3semibold",component:"strong",css:Ee.fullName},r.fullName),Object(ae.d)(ye.a,{component:"div"},Object(ae.d)(Y.b,{message:K()("Submitted {submissionTime}"),submissionTime:G()(a).fromNow()})))))},Ne={container:function(){return Object(ae.c)(u||(u=Se()(["\n    position: relative;\n    width: 33%;\n    margin-bottom: var(--cds-spacing-100);\n    padding: 0 var(--cds-spacing-50);\n  "])))},link:function(){return Object(ae.c)(l||(l=Se()(["\n    border: 1px solid var(--cds-color-neutral-stroke-primary-weak);\n    display: block;\n    height: 200px;\n    min-width: 200px;\n    text-decoration: none;\n    color: inherit;\n\n    &:hover {\n      text-decoration: none;\n      background-color: var(--cds-color-interactive-background-primary-hover-weak);\n    }\n  "])))},header:function(){return Object(ae.c)(m||(m=Se()(["\n    height: 154px;\n    padding: var(--cds-spacing-150);\n    margin-bottom: 0;\n  "])))},footer:function(){return Object(ae.c)(v||(v=Se()(["\n    height: 46px;\n    padding-left: var(--cds-spacing-150);\n    padding-right: var(--cds-spacing-150);\n    padding-bottom: var(--cds-spacing-100);\n    display: flex;\n    align-items: center;\n  "])))},profileImage:function(){return Object(ae.c)(b||(b=Se()(["\n    margin-right: var(--cds-spacing-100);\n  "])))}},listFeedback_SubmissionTile=function(e){var i=e.submissionSummary,n=e.itemResourcePath,t=i.title,r=i.creator,a=i.createdAt,s=n+"/review/"+i.id;return Object(ae.d)("div",{css:Ne.container},Object(ae.d)("a",{href:s,css:Ne.link},Object(ae.d)("div",{css:Ne.header},Object(ae.d)(ye.a,{component:"div",variant:"body2",color:"supportText"},G()(a).fromNow()),Object(ae.d)(ye.a,{component:"div",variant:"h2"},t)),Object(ae.d)("div",{css:Ne.footer},Object(ae.d)("div",{css:Ne.profileImage},Object(ae.d)(Ie.a,{profile:r,size:30})),Object(ae.d)("div",null,Object(ae.d)(ye.a,{className:"pii-hide",component:"div",variant:"body1"},r.fullName)))))},Oe=i("Hk9X"),Re={LOADING:"LOADING",LOAD_ERROR:"LOAD_ERROR",READY:"READY"},je={REVIEWED:"REVIEWED",NOT_REVIEWED:"NOT_REVIEWED"},ListFeedbackView_getSubmissionSummaryWithProfile=function(e,i){var n=i.reduce((function(e,i){return re()(re()({},e),{},ne()({},i.userId,i))}),{});return e.map((function(e){return re()(re()({},e),{},{creator:n[e.creatorId]})}))},Pe={filter:Object(ae.c)({display:"flex",alignItems:"center",margin:"12px 0"}),filterSelect:function(e){return Object(ae.c)({flexDirection:"row",alignItems:"center","& label":{color:e.palette.gray[700],marginBottom:e.spacing(0),span:{display:"none !important"}},"& > div":{marginTop:"".concat(e.spacing(0)," !important"),marginLeft:e.spacing(8)}})},submissionContainer:Object(ae.c)({display:"flex",flexWrap:"wrap"})},Ae=function(e){function ListFeedbackView(){for(var i,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return(i=e.call.apply(e,[this].concat(t))||this).state={filter:je.NOT_REVIEWED,reviewedSubmissionSummaries:[],notReviewedSubmissionSummaries:[],networkState:Re.READY,announcement:""},i.onFilterChange=function(e){i.setState({filter:e.target.value})},i.onReviewedSubmissionsFetchSuccess=function(e){var n=Object(Oe.c)(e);i.setState({reviewedSubmissionSummaries:ListFeedbackView_getSubmissionSummaryWithProfile(n.submissionSummaries,n.userProfiles),networkState:Re.READY,announcement:K()("Submissions filtered by projects I have reviewed.")})},i.onNotReviewedSubmissionsFetchSuccess=function(e){var n=Object(Oe.b)(e);i.setState({notReviewedSubmissionSummaries:ListFeedbackView_getSubmissionSummaryWithProfile(n.submissionSummaries,n.userProfiles),networkState:Re.READY,announcement:K()("Submissions filtered by projects I have not reviewed.")})},i.onFetchError=function(){i.setState({networkState:Re.LOAD_ERROR})},i.getSubmissionSummariesForDisplay=function(){var e=i.getNextUpSubmissionThatNeedReviews(),n=i.state,t=n.filter,r=n.reviewedSubmissionSummaries,a=n.notReviewedSubmissionSummaries;return t===je.NOT_REVIEWED?a.filter((function(i){return i.id!==(null==e?void 0:e.id)})):r},i.getNextUpSubmissionThatNeedReviews=function(){return i.props.submissionSummaries.filter((function(e){return!e.reviewTargetReached}))[0]},i.fetchReviewedSubmissions=function(){var e=i.props.computedItem;return i.setState({networkState:Re.LOADING,reviewedSubmissionSummaries:[]}),onDemandPeerAuthoredReviewSummariesApi_getReviewedSubmissions({userId:O.a.get().id,courseId:e.courseId,itemId:e.id}).then(i.onReviewedSubmissionsFetchSuccess).catch(i.onFetchError)},i.fetchNotReviewedSubmissions=function(){var e=i.props.computedItem;return i.setState({networkState:Re.LOADING,notReviewedSubmissionSummaries:[]}),Object(he.a)({userId:O.a.get().id,courseId:e.courseId,itemId:e.id}).then(i.onNotReviewedSubmissionsFetchSuccess).catch(i.onFetchError)},i}g()(ListFeedbackView,e);var i=ListFeedbackView.prototype;return i.componentDidMount=function(){this.fetchNotReviewedSubmissions()},i.componentDidUpdate=function(_,e){var i=this.state.filter;e.filter!==i&&(i===je.NOT_REVIEWED?this.fetchNotReviewedSubmissions():this.fetchReviewedSubmissions())},i.render=function(){var e=this.props.computedItem,i=this.state,n=i.filter,t=i.networkState,r=i.announcement,a=this.getNextUpSubmissionThatNeedReviews(),s=this.getSubmissionSummariesForDisplay();return Object(ae.d)("div",null,0===s.length&&Object(ae.d)("div",null,K()("There are no submissions left for you to review. Please check again later!")),!a&&0!==s.length&&Object(ae.d)("div",null,K()("You have reviewed all ungraded submissions. You may review graded submissions, but the authors will not receive your reviews, and your reviews will not count towards their grade. If possible, please check later for new submissions to review.")),a&&Object(ae.d)(listFeedback_NextUpSubmissionTile,{itemResourcePath:e.resourcePath,submissionSummary:a}),Object(ae.d)("div",{css:Pe.filter},Object(ae.d)(se.a,{css:Pe.filterSelect,value:n,label:K()("Filter:"),optional:!0,onChange:this.onFilterChange},[{label:K()("Projects I have reviewed"),value:je.REVIEWED},{label:K()("Projects I have not reviewed"),value:je.NOT_REVIEWED}].map((function(e){return Object(ae.d)(oe.a,{key:e.value,value:e.value},e.label)})))),Object(ae.d)("div",{css:Pe.submissionContainer},Object(ae.d)("div",{role:"alert"},t!==Re.READY&&Object(ae.d)("p",null,function(e){return{LOADING:K()("Loading..."),LOAD_ERROR:K()("Load error!")}[e]}(t)),Object(ae.d)(ce.a,{tagName:"span"},t!==Re.LOADING?r:null),t===Re.READY&&Object(ae.d)("div",null,0===s.length?K()("There are no submissions in this list."):Object(ae.d)(ce.a,{tagName:"span"},K()("There are #{submissionCount} submissions in this list.",{submissionCount:s.length})))),s.map((function(i){return Object(ae.d)(listFeedback_SubmissionTile,{key:i.id,itemResourcePath:e.resourcePath,submissionSummary:i})}))))},ListFeedbackView}(f.Component),xe=(i("Wvfg"),function(e){function PeerItemGiveFeedback(){return e.apply(this,arguments)||this}g()(PeerItemGiveFeedback,e);var i=PeerItemGiveFeedback.prototype;return i.renderGiveFeedbackView=function(){var e=this.props,i=e.submissionSummariesCollection,n=e.computedItem,t=e.submissionSummaries;return i&&t?f.createElement(Ae,{computedItem:n,submissionSummaries:t}):null},i.renderGiveFeedbackNoListView=function(){var e=this.props,i=e.computedItem,n=e.submissionSummariesCollection,t=e.itemProgress,r=e.displayablePhaseSchedule;if(!n)return null;var a=n.length>0,s=E.a.join(i.resourcePath,"review-next");return t?f.createElement(components_GiveFeedbackNoList,{computedItem:i,isSubmissionAvailableForReview:a,reviewNextLink:s,displayablePhaseSchedule:r,itemProgress:t}):null},i.renderSubmitWarning=function(){return f.createElement(q.a,{computedItem:this.props.computedItem})},i.renderErrorState=function(e){return"mustSubmitBeforeReviewing"===e?this.renderSubmitWarning():f.createElement("div",{className:"rc-PeerItemGiveFeedback"},K()("An unknown error has occurred. Please refresh and try again."))},i.render=function(){var e=this,i=this.props,n=i.assignment,t=i.capabilities,r=i.error;return function(){if(null!=r)return e.renderErrorState(r);var i=n&&n.definition&&n.definition.closureType;return k()(t).contains("reviewPeers")&&k()(t).contains("listSubmissions")?e.renderGiveFeedbackView():k()(t).contains("reviewPeers")&&!k()(t).contains("listSubmissions")?e.renderGiveFeedbackNoListView():null==i?e.renderSubmitWarning():null}()},PeerItemGiveFeedback}(f.Component));xe.contextTypes={executeAction:w.a.func.isRequired};var De=k.a.compose(N.b.createTrackedContainer((function(){return{namespace:{page:"peer_review_review_peers"}}})),Object(y.a)(["PeerAssignmentStore","PeerPermissionsAndProgressesStore","PeerReviewQueueStore","DisplayablePhaseScheduleStore","ProgressStore"],(function(e,i){var n,t,r=e.PeerAssignmentStore,a=e.PeerPermissionsAndProgressesStore,s=e.PeerReviewQueueStore,o=e.DisplayablePhaseScheduleStore,c=e.ProgressStore,d=s.getState(),u=d.loaded,l=d.loadState,m=d.submissions,v=d.errorType,b=d.itemId;u&&("loaded"===l&&i.computedItem.id===b?n=new W(m,{parse:!0,metadata:i.itemMetadata}):"loadError"===l&&(t=v));var p=a.getState(),g=p.capabilities,f=p.isSubmitted;return{assignment:r.getState().assignment,capabilities:g,isSubmitted:f,submissionSummariesCollection:n,submissionSummaries:null==m?void 0:m.submissionSummaries,error:t,displayablePhaseSchedule:o.getState().displayablePhaseSchedule,itemProgress:c.courseProgress.getItemProgress(i.computedItem.id),hasLoadedPermissions:"loaded"===a.getState().loadState,canReviewPeers:k()(g).contains("reviewPeers"),canListSubmissions:k()(g).contains("listSubmissions")}})),Object(R.a)((function(e){return e.hasLoadedPermissions}),f.createElement(U.a,{className:"rc-PeerItemGiveFeedback"})),Object(I.a)((function(e,i){var n=i.canListSubmissions,t=i.canReviewPeers,r=i.computedItem,a=i.courseId;if(t){var s=n?20:1;e.executeAction(ee.c,{userId:O.a.get().id,itemId:r.id,courseId:a,start:0,limit:s})}})))(xe);e.default=De},Wvfg:function(module,exports,e){e("wLLo")},eryu:function(module,exports){var e={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAiGradingEligibility"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"assignmentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"assignmentVersion"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"courseId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"itemId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"PeerReviewAi"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAiGradingEligibility"},arguments:[{kind:"Argument",name:{kind:"Name",value:"assignmentId"},value:{kind:"Variable",name:{kind:"Name",value:"assignmentId"}}},{kind:"Argument",name:{kind:"Name",value:"assignmentVersion"},value:{kind:"Variable",name:{kind:"Name",value:"assignmentVersion"}}},{kind:"Argument",name:{kind:"Name",value:"courseId"},value:{kind:"Variable",name:{kind:"Name",value:"courseId"}}},{kind:"Argument",name:{kind:"Name",value:"itemId"},value:{kind:"Variable",name:{kind:"Name",value:"itemId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isEligible"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:317}};e.loc.source={body:"query GetAiGradingEligibility($assignmentId: ID!, $assignmentVersion: Int!, $courseId: ID!, $itemId: ID!) {\n  PeerReviewAi {\n    getAiGradingEligibility(\n      assignmentId: $assignmentId\n      assignmentVersion: $assignmentVersion\n      courseId: $courseId\n      itemId: $itemId\n    ) {\n      isEligible\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function findOperation(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}e.definitions.forEach((function(e){if(e.name){var n=new Set;!function collectFragmentReferences(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){collectFragmentReferences(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){collectFragmentReferences(e,i)})),e.definitions&&e.definitions.forEach((function(e){collectFragmentReferences(e,i)}))}(e,n),i[e.name.value]=n}})),module.exports=e,module.exports.GetAiGradingEligibility=function(e,n){var t={kind:e.kind,definitions:[findOperation(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,a=new Set,s=new Set;for(r.forEach((function(e){s.add(e)}));s.size>0;){var o=s;s=new Set,o.forEach((function(e){a.has(e)||(a.add(e),(i[e]||new Set).forEach((function(e){s.add(e)})))}))}return a.forEach((function(i){var n=findOperation(e,i);n&&t.definitions.push(n)})),t}(e,"GetAiGradingEligibility")},g0DA:function(module,e,i){"use strict";i.d(e,"b",(function(){return useAiGradingContext}));var n=i("J4zp"),t=i.n(n),r=i("q1tI"),a=i("+TN3"),s=i("eryu"),o=i.n(s),c=i("exjt"),d=r.createContext(void 0);function useAiGradingContext(){var e=Object(r.useContext)(d);if(void 0===e)throw new Error("`useAiGradingContext` was used outside of `AiGradingProvider`. Ensure your component is nested under `<AiGradingContext>`.");return e}e.a=function(e){var i,n,s,u=e.courseId,l=e.itemId,m=e.assignmentId,v=e.assignmentVersion,b=e.children,p=Object(c.b)(),g=Object(r.useState)(!0),f=t()(g,2),h=f[0],w=f[1],S=Object(a.b)(o.a,{variables:{assignmentId:m,assignmentVersion:v,courseId:u,itemId:l},skip:!p,context:{clientName:"gatewayGql"},onCompleted:function(){w(!1)},onError:function(){w(!1)}}),k=p&&!(null===(i=S.data)||void 0===i||null===(n=i.PeerReviewAi)||void 0===n||null===(s=n.getAiGradingEligibility)||void 0===s||!s.isEligible),y=p&&h;return r.createElement(d.Provider,{value:{isAiEpicEnabled:p,isAssignmentAiGradingEligible:{loading:y,value:k}}},b)}},wLLo:function(module,exports,e){}}]);
//# sourceMappingURL=85.09d0ba559a3dcd770298.js.map