"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[787],{70349:function(e,n,i){var t,a;i.d(n,{FR:function(){return N},UO:function(){return c},Xx:function(){return s},YM:function(){return k},YR:function(){return v},bh:function(){return r},by:function(){return m},d3:function(){return f},fk:function(){return d},ib:function(){return u},qI:function(){return p},qq:function(){return l},wW:function(){return o},xj:function(){return t}}),(a=t||(t={})).Chat="CHAT",a.Completion="COMPLETION";let r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetRegistrationToken"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"registrationToken"}}]}}]},o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ResetRegistrationToken"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"resetRegistrationToken"}}]}}]},d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"MeQuery"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"me"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"authToken"}}]}}]}}]},l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ResetUserAuthToken"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"resetUserAuthToken"}}]}}]},u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateInvitation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createInvitation"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}}]}]}}]},s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListInvitations"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"invitations"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"email"}},{kind:"Field",name:{kind:"Name",value:"code"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}}]}}]}}]},k={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteInvitation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteInvitation"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}]}]}}]},m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListUsers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"}},{kind:"Field",name:{kind:"Name",value:"isAdmin"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}}]}}]}}]},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"tokenAuth"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tokenAuth"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"password"},value:{kind:"Variable",name:{kind:"Name",value:"password"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessToken"}},{kind:"Field",name:{kind:"Name",value:"refreshToken"}}]}}]}}]},v={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"register"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password1"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"password2"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"invitationCode"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"register"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"password1"},value:{kind:"Variable",name:{kind:"Name",value:"password1"}}},{kind:"Argument",name:{kind:"Name",value:"password2"},value:{kind:"Variable",name:{kind:"Name",value:"password2"}}},{kind:"Argument",name:{kind:"Name",value:"invitationCode"},value:{kind:"Variable",name:{kind:"Name",value:"invitationCode"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessToken"}},{kind:"Field",name:{kind:"Name",value:"refreshToken"}}]}}]}}]},f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetWorkers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"workers"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"kind"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"addr"}},{kind:"Field",name:{kind:"Name",value:"device"}},{kind:"Field",name:{kind:"Name",value:"arch"}},{kind:"Field",name:{kind:"Name",value:"cpuInfo"}},{kind:"Field",name:{kind:"Name",value:"cpuCount"}},{kind:"Field",name:{kind:"Name",value:"cudaDevices"}}]}}]}}]},N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"refreshToken"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"refreshToken"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"refreshToken"},arguments:[{kind:"Argument",name:{kind:"Name",value:"refreshToken"},value:{kind:"Variable",name:{kind:"Name",value:"refreshToken"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accessToken"}},{kind:"Field",name:{kind:"Name",value:"refreshToken"}}]}}]}}]},p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetIsAdminInitialized"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isAdminInitialized"}}]}}]}},58835:function(e,n,i){i.d(n,{BX:function(){return r}});var t=i(70349);let a={"\n  query GetRegistrationToken {\n    registrationToken\n  }\n":t.bh,"\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n":t.wW,"\n  query MeQuery {\n    me {\n      authToken\n    }\n  }\n":t.fk,"\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n":t.qq,"\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n":t.ib,"\n  query ListInvitations {\n    invitations {\n      id\n      email\n      code\n      createdAt\n    }\n  }\n":t.Xx,"\n  mutation DeleteInvitation($id: Int!) {\n    deleteInvitation(id: $id)\n  }\n":t.YM,"\n  query ListUsers {\n    users {\n      email\n      isAdmin\n      createdAt\n    }\n  }\n":t.by,"\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":t.UO,"\n  mutation register(\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n":t.YR,"\n  query GetWorkers {\n    workers {\n      kind\n      name\n      addr\n      device\n      arch\n      cpuInfo\n      cpuCount\n      cudaDevices\n    }\n  }\n":t.d3,"\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n":t.FR,"\n  query GetIsAdminInitialized {\n    isAdminInitialized\n  }\n":t.qI};function r(e){var n;return null!==(n=a[e])&&void 0!==n?n:{}}},88809:function(e,n,i){i.d(n,{Ho:function(){return N},X0:function(){return b},av:function(){return y},kP:function(){return T},zq:function(){return S},QJ:function(){return h}});var t,a,r=i(57437),o=i(2265),d=i(24033),l=i(53771),u=i(58835),s=i(7820);function k(e,n){switch(n.type){case a.Init:case a.SignIn:case a.Refresh:if(n.data)return{status:"authenticated",data:n.data};return{status:"unauthenticated",data:null};case a.SignOut:return m.reset(),{status:"unauthenticated",data:null}}}(t=a||(a={}))[t.Init=0]="Init",t[t.SignIn=1]="SignIn",t[t.SignOut=2]="SignOut",t[t.Refresh=3]="Refresh";class m{initialState(){let e=localStorage.getItem(m.authName);return e?JSON.parse(e):null}persist(e){localStorage.setItem(m.authName,JSON.stringify(e))}static reset(){localStorage.removeItem(m.authName)}}m.authName="_tabby_auth";let c=o.createContext(null),v=(0,u.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n");async function f(e,n){let i;try{i={type:a.Refresh,data:(await s.Nb.request(v,{refreshToken:e})).refreshToken}}catch(e){console.error("Failed to refresh token",e),i={type:a.SignOut}}n(i)}let N=e=>{let{children:n}=e,i=new m,[t,d]=o.useReducer(k,{status:"loading",data:null}),l=o.useRef(!1);return o.useEffect(()=>{if(l.current)return;l.current=!0;let e=i.initialState();(null==e?void 0:e.refreshToken)?f(e.refreshToken,d):d({type:a.Init,data:null})},[]),o.useEffect(()=>{t.data&&i.persist(t.data)},[t]),!function(e,n){let i=o.useRef(e),t=o.useRef(null);o.useEffect(()=>{i.current=e},[e]),o.useEffect(()=>("number"==typeof n&&(t.current=window.setInterval(()=>i.current(),6e4*n)),()=>{t.current&&window.clearTimeout(t.current)}),[n])}(async()=>{"authenticated"===t.status&&await f(t.data.refreshToken,d)},5),(0,r.jsx)(c.Provider,{value:{authState:t,dispatch:d},children:n})};function p(){let e=o.useContext(c);if(!e)throw Error("AuthProvider is missing. Please add the AuthProvider at root level");return e}function S(){let{dispatch:e}=p();return async n=>(e({type:a.SignIn,data:n}),!0)}function h(){let{dispatch:e}=p();return async()=>{e({type:a.SignOut})}}function T(){var e;let{authState:n}=p();if((null==n?void 0:n.status)=="authenticated"){let{sub:e,is_admin:i}=(0,l.o)(n.data.accessToken);return{data:{email:e,isAdmin:i,accessToken:n.data.accessToken},status:n.status}}return{status:null!==(e=null==n?void 0:n.status)&&void 0!==e?e:"loading",data:null}}let g=(0,u.BX)("\n  query GetIsAdminInitialized {\n    isAdminInitialized\n  }\n");function y(){let{data:e}=(0,s.ak)(g),n=(0,d.useRouter)(),{data:i,status:t}=T();return o.useEffect(()=>{"loading"!==t&&"authenticated"!==t&&((null==e?void 0:e.isAdminInitialized)===!1?n.replace("/auth/signup?isAdmin=true"):"unauthenticated"===t&&n.replace("/auth/signin"))},[e,t]),i}function b(e){let{data:n,status:i}=T();return e&&"authenticated"===i?[e,n.accessToken]:null}},7820:function(e,n,i){i.d(n,{J9:function(){return k},Nb:function(){return l},ak:function(){return s},bi:function(){return u}});var t,a=i(95054),r=i(30713),o=i(88809),d=i(62601);let l=new a.g6("".concat(null!==(t=d.env.NEXT_PUBLIC_TABBY_SERVER_URL)&&void 0!==t?t:"","/graphql"));function u(e,n){let{data:i}=(0,o.kP)(),t=null==i?void 0:i.accessToken,a=async i=>{let a;try{a=await l.request({document:e,variables:i,requestHeaders:t?{authorization:"Bearer ".concat(t)}:void 0})}catch(i){console.error("err",i);let{errors:e=[]}=i.response;for(let i of e)if(i.extensions&&i.extensions["validation-errors"]){let e=i.extensions["validation-errors"];for(let i of e.errors)(null==n?void 0:n.onError)&&(null==n||n.onError(i.path,i.message))}else(null==n?void 0:n.onError)&&(null==n||n.onError("root",i.message));return a}(null==n?void 0:n.onSuccess)&&n.onSuccess(a)};return{onSubmit:a}}function s(e,n,i){return(0,r.ZP)([e,n],e=>{let[n,i]=e;return l.request({document:n,variables:i})},i)}function k(e,n,i){let{data:t,status:a}=(0,o.kP)();return(0,r.ZP)("authenticated"===a?[e,n,null==t?void 0:t.accessToken]:null,e=>{let[n,i,t]=e;return l.request({document:n,variables:i,requestHeaders:{authorization:"Bearer ".concat(t)}})},i)}},39311:function(e,n,i){i.d(n,{aF:function(){return l},cn:function(){return o},x0:function(){return d}});var t=i(50348),a=i(28481),r=i(23986);function o(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return(0,r.m)((0,t.W)(n))}let d=(0,a.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);function l(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/[ ,.:;\n，。：；]/;if(!e)return"";if(e.length<=n)return e;let t=e.slice(0,n),a=-1;for(let e=n-1;e>=0;e--)if(i.test(t[e])){a=e;break}return -1!==a&&(t=t.slice(0,a)),t+"..."}}}]);