"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1472,3402],{13660:(ge,D,a)=>{var t,f=a(4293),x=a(78920);t={value:!0},D.A=void 0;var S=x(a(14041)),T=f(a(74044)),V=(0,T.default)(S.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");D.A=V},33402:(ge,D,a)=>{a.d(D,{b:()=>Re,W:()=>$e});var t=a(14041),f=a(18690),x=a(82326),S=a(11618),T=a(66839),V=a(50460),M=a(93285),w=a(42899),Z=a(4387),Q=a(13660),A=a(15246),u=a(699),P=a(37281),F=a(14158),_=a(97214),H=a(64398),J=a(79182),ee=a(18139),ce=a(54195),de=a(72814),me=a(45250),O=a(17749);const W=t.createElement(Z.A,{animation:"wave",variant:"text",height:40}),se=Y=>{const{children:z}=Y,j=(0,S.YR)(),le=(0,ee.gf)(ce.U),{title:K,setTitle:p,subtitle:k,setSubtitle:X,entityRef:ne,metadata:{value:C,loading:U},entityMetadata:{value:y,loading:I}}=(0,T.V)();(0,t.useEffect)(()=>{C&&(p(C.site_name),X(()=>{let{site_description:ye}=C;return(!ye||ye==="None")&&(ye=""),ye}))},[C,p,X]);const we=le.getOptional("app.title")||"Backstage",he=[K,k,we].filter(Boolean).join(" | "),{locationMetadata:fe,spec:Ne}=y||{},De=Ne?.lifecycle,Me=y?(0,u.t)(y,_.vv):[],Ve=(0,de.S)(O.rQ)(),Fe=t.createElement(t.Fragment,null,t.createElement(H.S,{label:(0,me.capitalize)(y?.kind||"entity"),value:t.createElement(P.z,{color:"inherit",entityRef:ne,title:y?.metadata.title,defaultKind:"Component"})}),Me.length>0&&t.createElement(H.S,{label:"Owner",value:t.createElement(F.i,{color:"inherit",entityRefs:Me,defaultKind:"group"})}),De?t.createElement(H.S,{label:"Lifecycle",value:String(De)}):null,fe&&fe.type!=="dir"&&fe.type!=="file"?t.createElement(H.S,{label:"",value:t.createElement(w.A,{container:!0,direction:"column",alignItems:"center"},t.createElement(w.A,{style:{padding:0},item:!0},t.createElement(Q.A,{style:{marginTop:"-25px"}})),t.createElement(w.A,{style:{padding:0},item:!0},"Source")),url:fe.target}):null);return!I&&y===void 0||!U&&C===void 0?null:t.createElement(J.Y,{type:"Documentation",typeLink:Ve,title:K||W,subtitle:k===""?void 0:k||W},t.createElement(M.A,{titleTemplate:"%s"},t.createElement("title",null,he)),Fe,z,j.renderComponentsByLocation(A.e.Header))};var Ee=a(84893),Ie=a(76888),xe=a(85408),be=a(12554),ue=a(95208),Oe=a(64947),Be=a(95159),Se=a(61617),Pe=a(91042),He=a(76842),ze=a(71834);const Te="/.backstage/auth/v1/cookie",Ue=365*24*36e5;function pe(Y){const{pluginId:z}=Y??{},j=(0,ee.gf)(Be.a),le=(0,ee.gf)(Se.I),K=(0,t.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${z}-auth-cookie-expires-at`):null,[z]),[p,k]=(0,Pe.Y)(async()=>{const U=`${await le.getBaseUrl(z)}${Te}`,y=await j.fetch(`${U}`,{credentials:"include"});if(!y.ok){if(y.status===404)return{expiresAt:new Date(Date.now()+Ue)};throw await ze.o.fromResponse(y)}const I=await y.json();if(!I.expiresAt)throw new Error("No expiration date found in response");return I});(0,He.u)(k.execute);const X=(0,t.useCallback)(()=>{k.execute()},[k]),ne=(0,t.useCallback)(C=>{const U=(1+3*Math.random())*6e4,y=Date.parse(C.expiresAt)-Date.now()-U,I=setTimeout(X,y);return()=>clearTimeout(I)},[X]);return(0,t.useEffect)(()=>{if(p.status!=="success"||!p.result)return()=>{};K?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:p.result});let C=ne(p.result);const U=y=>{const{action:I,payload:we}=y.data;I==="COOKIE_REFRESH_SUCCESS"&&(C(),C=ne(we))};return K?.addEventListener("message",U),()=>{C(),K?.removeEventListener("message",U)}},[p,ne,K]),p.status==="not-executed"?{status:"loading"}:p.status==="loading"&&!p.result?{status:"loading"}:p.status==="loading"&&p.error?{status:"loading"}:p.status==="error"&&p.error?{status:"error",error:p.error,retry:X}:{status:"success",data:p.result}}function te(Y){const{children:z,...j}=Y,le=(0,ue.n)(),{Progress:K}=le.getComponents(),p=pe(j);return p.status==="loading"?t.createElement(K,null):p.status==="error"?t.createElement(be.b,{error:p.error},t.createElement(Oe.A,{variant:"outlined",onClick:p.retry},"Retry")):t.createElement(t.Fragment,null,z)}var ve=a(54917),Ce=a(98392),Le=a(50868);const Re=Y=>{const{withSearch:z,withHeader:j=!0}=Y;return t.createElement(x.Y,{themeId:"documentation"},j&&t.createElement(se,null),t.createElement(Ee.Z,null),t.createElement(V.p,{withSearch:z}))},$e=Y=>{const z=(0,ve.A)(),j=(0,Ce.A)({...z,...Y.overrideThemeOptions||{}}),{kind:le,name:K,namespace:p}=(0,Ie.K)(O.Oc),{children:k,entityRef:X={kind:le,name:K,namespace:p}}=Y,ne=(0,f.P1)();if(!k){const y=(ne?t.Children.toArray(ne.props.children):[]).flatMap(I=>I?.props?.children??[]).find(I=>!(0,xe.E)(I,S.AF)&&!(0,xe.E)(I,S.Wm));return t.createElement(Le.A,{theme:j},t.createElement(te,{pluginId:"techdocs"},t.createElement(T.R,{entityRef:X},y||t.createElement(Re,null))))}return t.createElement(Le.A,{theme:j},t.createElement(te,{pluginId:"techdocs"},t.createElement(T.R,{entityRef:X},({metadata:C,entityMetadata:U,onReady:y})=>t.createElement("div",{className:"techdocs-reader-page"},t.createElement(x.Y,{themeId:"documentation"},k instanceof Function?k({entityRef:X,techdocsMetadataValue:C.value,entityMetadataValue:U.value,onReady:y}):k)))))}},41472:(ge,D,a)=>{a.r(D),a.d(D,{TechDocsSearchResultListItem:()=>Z});var t=a(14041),f=a(46423),x=a(5951),S=a(58837),T=a(72501),V=a(75202),M=a(51470);const w=(0,S.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),Z=Q=>{const{result:A,highlight:u,lineClamp:P=5,asListItem:F=!0,asLink:_=!0,title:H,icon:J}=Q,ee=w(),ce=({children:O})=>_?t.createElement(V.N_,{noTrack:!0,to:A.location},O):t.createElement(t.Fragment,null,O),de=()=>{const O=u?.fields.title?t.createElement(M.e,{text:u.fields.title,preTag:u.preTag,postTag:u.postTag}):A.title,W=u?.fields.entityTitle?t.createElement(M.e,{text:u.fields.entityTitle,preTag:u.preTag,postTag:u.postTag}):A.entityTitle,se=u?.fields.name?t.createElement(M.e,{text:u.fields.name,preTag:u.preTag,postTag:u.postTag}):A.name;return A?t.createElement(x.A,{className:ee.itemText,primaryTypographyProps:{variant:"h6"},primary:t.createElement(ce,null,H||t.createElement(t.Fragment,null,O," | ",W??se," docs")),secondary:t.createElement(T.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:P,overflow:"hidden"},color:"textSecondary",variant:"body2"},u?.fields.text?t.createElement(M.e,{text:u.fields.text,preTag:u.preTag,postTag:u.postTag}):A.text)}):null},me=({children:O})=>F?t.createElement(t.Fragment,null,J&&t.createElement(f.A,null,typeof J=="function"?J(A):J),t.createElement("div",{className:ee.flexContainer},O)):t.createElement(t.Fragment,null,O);return t.createElement(me,null,t.createElement(de,null))}},50460:(ge,D,a)=>{a.d(D,{p:()=>en});var t=a(14041),f=a(42899),x=a(58837),S=a(66839),T=a(9394),V=a(91360),M=a(22856);const w="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",Z=e=>{(0,t.useEffect)(()=>{if(!e)return()=>{};const n=e.querySelectorAll('head > link[rel="stylesheet"]');let o=n?.length??0;const r=new CustomEvent(w);if(!o)return e.dispatchEvent(r),()=>{};const s=()=>{--o===0&&e.dispatchEvent(r)};return n?.forEach(l=>{l.addEventListener("load",s)}),()=>{n?.forEach(l=>{l.removeEventListener("load",s)})}},[e])},Q=e=>{const[n,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(!e)return()=>{};o(!0);const r=e.style;r.setProperty("opacity","0");const s=()=>{o(!1),r.setProperty("opacity","1")};return e.addEventListener(w,s),()=>{e.removeEventListener(w,s)}},[e]),n},A=e=>{const{element:n,onAppend:o,children:r}=e,[s,l]=(0,t.useState)((0,T.vt)({...(0,M.A)(),insertionPoint:void 0}));Z(n);const i=(0,t.useCallback)(c=>{if(!n||!c)return;l((0,T.vt)({...(0,M.A)(),insertionPoint:n.querySelector("head")||void 0}));let d=c.shadowRoot;d||(d=c.attachShadow({mode:"open"})),d.replaceChildren(n),typeof o=="function"&&o(d)},[n,o]);return t.createElement(t.Fragment,null,t.createElement(V.Ay,{jss:s,sheetsManager:new Map},t.createElement("div",{ref:i,"data-testid":"techdocs-native-shadowroot"}),r))};var u=a(85639),P=a(16454),F=a(96872),_=a(87437),H=a(78467),J=a(61783),ee=a(33986);const ce=(0,x.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),de=e=>n=>t.createElement(_.Lt,{inheritParentContextIfAvailable:!0},t.createElement(e,{...n})),me=()=>{const e=ce();return t.createElement(H.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},O=de(function(n){const{loading:o,value:r,onChange:s=()=>{},options:l=[],getOptionLabel:i=b=>String(b),inputPlaceholder:c,inputDebounceTime:d,freeSolo:h=!0,fullWidth:m=!0,clearOnBlur:g=!1,"data-testid":B="search-autocomplete",...ae}=n,{setTerm:v}=(0,_.SQ)(),q=(0,t.useCallback)(b=>b?typeof b=="string"?b:i(b):"",[i]),oe=(0,t.useMemo)(()=>q(r),[r,q]),G=(0,t.useCallback)((b,re,L,R)=>{v(q(re)),s(b,re,L,R)},[q,v,s]),E=(0,t.useCallback)(({InputProps:{ref:b,className:re,endAdornment:L},InputLabelProps:R,...N})=>t.createElement(ee.I,{...N,ref:b,clearButton:!1,value:oe,placeholder:c,debounceTime:d,endAdornment:o?t.createElement(me,null):L,InputProps:{className:re}}),[o,oe,c,d]);return t.createElement(J.Ay,{...ae,"data-testid":B,value:r,onChange:G,options:l,getOptionLabel:i,renderInput:E,freeSolo:h,fullWidth:m,clearOnBlur:g})});var W=a(18690),se=a(41472);const Ee=e=>e?.document,Ie=e=>{const{entityId:n,entityTitle:o,debounceTime:r=150,searchResultUrlMapper:s}=e,[l,i]=(0,t.useState)(!1),c=(0,W.Zp)(),{setFilters:d,term:h,result:{loading:m,value:g}}=(0,_.SQ)(),[B,ae]=(0,t.useState)([]);(0,t.useEffect)(()=>{let E=!0;if(E&&g){const b=g.results.slice(0,10);ae(b)}return()=>{E=!1}},[m,g]);const{kind:v,name:q,namespace:oe}=n;(0,t.useEffect)(()=>{d(E=>({...E,kind:v,namespace:oe,name:q}))},[v,oe,q,d]);const G=(E,b)=>{if(Ee(b)){const{location:re}=b.document;c(s?s(re):re)}};return t.createElement(O,{"data-testid":"techdocs-search-bar",size:"small",open:l&&!!h,getOptionLabel:()=>"",filterOptions:E=>E,onClose:()=>{i(!1)},onOpen:()=>{i(!0)},onChange:G,blurOnSelect:!0,noOptionsText:"No results found",value:null,options:B,renderOption:({document:E,highlight:b})=>t.createElement(se.TechDocsSearchResultListItem,{result:E,lineClamp:3,asListItem:!1,asLink:!1,title:E.title,highlight:b}),loading:m,inputDebounceTime:r,inputPlaceholder:`Search ${o||n.name} docs`,freeSolo:!1})},xe=e=>{const n={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return t.createElement(_.Lt,{initialState:n},t.createElement(Ie,{...e}))};var be=a(64947),ue=a(74219),Oe=a(67296),Be=a(73845),Se=a(29365),Pe=a(72501),He=a(99703),ze=a(32881);const Te=(0,x.A)(e=>(0,He.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),Ue=({buildLog:e,onClose:n})=>{const o=Te(),r=e.length===0?"Waiting for logs...":e.join(`
`);return t.createElement(f.A,{container:!0,direction:"column",className:o.root,spacing:0,wrap:"nowrap"},t.createElement(f.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap"},t.createElement(Pe.A,{variant:"h5"},"Build Details"),t.createElement(Se.A,{key:"dismiss",title:"Close the drawer",onClick:n,color:"inherit"},t.createElement(ze.A,null))),t.createElement(f.A,{item:!0,xs:!0},t.createElement(Oe.r,{text:r,classes:{root:o.logs}})))},pe=({buildLog:e})=>{const n=Te(),[o,r]=(0,t.useState)(!1);return t.createElement(t.Fragment,null,t.createElement(be.A,{color:"inherit",onClick:()=>r(!0)},"Show Build Logs"),t.createElement(Be.Ay,{classes:{paper:n.paper},anchor:"right",open:o,onClose:()=>r(!1)},t.createElement(Ue,{buildLog:e,onClose:()=>r(!1)})))};var te=a(18139),ve=a(54195),Ce=a(52262),Le=a(41544);const Re=({errorMessage:e})=>{const n=(0,te.gf)(ve.U).getOptionalString("techdocs.builder"),o=(0,Ce.s)(),{entityRef:r}=(0,S.V)(),s=(0,W.zy)();(0,t.useEffect)(()=>{const{pathname:i,search:c,hash:d}=s;o.captureEvent("not-found",`${i}${c}${d}`,{attributes:r})},[o,r,s]);let l="";return[void 0,"local"].includes(n)||(l="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),t.createElement(Le.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:l})};var $e=a(73466),Y=a(28966),z=a(49707);function j({contentLoading:e,content:n,activeSyncState:o}){return e||o==="BUILD_READY_RELOAD"||!n&&o==="CHECKING"?"CHECKING":!n&&o==="BUILDING"?"INITIAL_BUILD":n?o==="BUILDING"?"CONTENT_STALE_REFRESHING":o==="BUILD_READY"?"CONTENT_STALE_READY":o==="ERROR"?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND"}function le(e,n){const o={...e};switch(n.type){case"sync":n.state==="CHECKING"&&(o.buildLog=[]),o.activeSyncState=n.state,o.syncError=n.syncError;break;case"contentLoading":o.contentLoading=!0,o.contentError=void 0;break;case"content":typeof n.path=="string"&&(o.path=n.path),o.contentLoading=!1,o.content=n.content,o.contentError=n.contentError;break;case"buildLog":o.buildLog=o.buildLog.concat(n.log);break;default:throw new Error}return["BUILD_READY","BUILD_READY_RELOAD"].includes(o.activeSyncState)&&["contentLoading","content"].includes(n.type)&&(o.activeSyncState="UP_TO_DATE",o.buildLog=[]),o}function K(e,n,o,r){const[s,l]=(0,t.useReducer)(le,{activeSyncState:"CHECKING",path:r,contentLoading:!0,buildLog:[]}),i=(0,te.gf)(z.s),{retry:c}=(0,Y.A)(async()=>{l({type:"contentLoading"});try{const m=await i.getEntityDocs({kind:e,namespace:n,name:o},r);return l({type:"content",content:m,path:r}),m}catch(m){l({type:"content",contentError:m,path:r})}},[i,e,n,o,r]),d=(0,t.useRef)({content:void 0,reload:()=>{}});d.current={content:s.content,reload:c},(0,$e.A)(async()=>{l({type:"sync",state:"CHECKING"});const m=setTimeout(()=>{l({type:"sync",state:"BUILDING"})},1e3);try{switch(await i.syncEntityDocs({kind:e,namespace:n,name:o},B=>{l({type:"buildLog",log:B})})){case"updated":d.current.content?l({type:"sync",state:"BUILD_READY"}):(d.current.reload(),l({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":l({type:"sync",state:"UP_TO_DATE"});break;default:l({type:"sync",state:"ERROR",syncError:new Error("Unexpected return state")});break}}catch(g){l({type:"sync",state:"ERROR",syncError:g})}finally{clearTimeout(m)}},[e,o,n,i,l,d]);const h=(0,t.useMemo)(()=>j({activeSyncState:s.activeSyncState,contentLoading:s.contentLoading,content:s.content}),[s.activeSyncState,s.content,s.contentLoading]);return(0,t.useMemo)(()=>({state:h,contentReload:c,path:s.path,content:s.content,contentErrorMessage:s.contentError?.toString(),syncErrorMessage:s.syncError?.toString(),buildLog:s.buildLog}),[h,c,s.path,s.content,s.contentError,s.syncError,s.buildLog])}const p=(0,t.createContext)({}),k=()=>(0,t.useContext)(p),X=e=>{const{children:n}=e,{"*":o=""}=(0,W.g)(),{entityRef:r}=(0,S.V)(),{kind:s,namespace:l,name:i}=r,c=K(s,l,i,o);return t.createElement(p.Provider,{value:c},n instanceof Function?n(c):n)},ne=e=>n=>t.createElement(X,null,t.createElement(e,{...n})),C=(0,x.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),U=()=>{let e=null;const n=C(),{state:o,contentReload:r,contentErrorMessage:s,syncErrorMessage:l,buildLog:i}=k();return o==="INITIAL_BUILD"&&(e=t.createElement(ue.A,{classes:{root:n.root},variant:"outlined",severity:"info",icon:t.createElement(H.A,{size:"24px"}),action:t.createElement(pe,{buildLog:i})},"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster.")),o==="CONTENT_STALE_REFRESHING"&&(e=t.createElement(ue.A,{variant:"outlined",severity:"info",icon:t.createElement(H.A,{size:"24px"}),action:t.createElement(pe,{buildLog:i}),classes:{root:n.root}},"A newer version of this documentation is being prepared and will be available shortly.")),o==="CONTENT_STALE_READY"&&(e=t.createElement(ue.A,{variant:"outlined",severity:"success",action:t.createElement(be.A,{color:"inherit",onClick:()=>r()},"Refresh"),classes:{root:n.root}},"A newer version of this documentation is now available, please refresh to view.")),o==="CONTENT_STALE_ERROR"&&(e=t.createElement(ue.A,{variant:"outlined",severity:"error",action:t.createElement(pe,{buildLog:i}),classes:{root:n.root,message:n.message}},"Building a newer version of this documentation failed."," ",l)),o==="CONTENT_NOT_FOUND"&&(e=t.createElement(t.Fragment,null,l&&t.createElement(ue.A,{variant:"outlined",severity:"error",action:t.createElement(pe,{buildLog:i}),classes:{root:n.root,message:n.message}},"Building a newer version of this documentation failed."," ",l),t.createElement(Re,{errorMessage:s}))),e};var y=a(5893),I=a(54917),we=a(38633),he=a(97519);const fe=/main\.[A-Fa-f0-9]{8}\.min\.css$/,Ne=/^https:\/\/fonts\.googleapis\.com/,De=/^https:\/\/fonts\.gstatic\.com/,Me=e=>e.nodeName==="LINK",Ve=e=>{const n=e?.getAttribute("href")||"",o=n.match(fe),r=n.match(Ne),s=n.match(De);return o||r||s},Fe=e=>(Me(e)&&!Ve(e)&&e.remove(),e),Ye=e=>e.nodeName==="IFRAME",je=(e,n)=>{const o=e.getAttribute("src")||"";try{const{host:r}=new URL(o);return n.includes(r)}catch{return!1}},ye=e=>n=>(Ye(n)&&!je(n,e)&&n.remove(),n),nt=()=>{const e=(0,te.gf)(ve.U);return(0,t.useMemo)(()=>e.getOptionalConfig("techdocs.sanitizer"),[e])},at=()=>{const e=nt();return(0,t.useCallback)(async n=>{const o=e?.getOptionalStringArray("allowedIframeHosts");he.A.addHook("beforeSanitizeElements",Fe);const r=["link","meta"];o&&(r.push("iframe"),he.A.addHook("beforeSanitizeElements",ye(o))),he.A.addHook("uponSanitizeElement",(i,c)=>{c.tagName==="meta"&&(i.getAttribute("http-equiv")==="refresh"&&i.getAttribute("content")?.includes("url=")||i.parentNode?.removeChild(i))}),he.A.addHook("uponSanitizeAttribute",(i,c)=>{i.tagName!=="meta"&&(c.attrName==="http-equiv"||c.attrName==="content")&&i.removeAttribute(c.attrName)});const s=e?.getOptionalString("allowedCustomElementTagNameRegExp"),l=e?.getOptionalString("allowedCustomElementAttributeNameRegExp");return he.A.sanitize(n.outerHTML,{ADD_TAGS:r,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0,CUSTOM_ELEMENT_HANDLING:{tagNameCheck:s?new RegExp(s):void 0,attributeNameCheck:l?new RegExp(l):void 0}})},[e])};var ot=a(65901),$=a(268),rt=({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,$.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,$.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,$.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,$.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,$.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,$.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.code?.background??e.palette.background.paper};
  --md-code-hl-color: ${(0,$.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${e.palette.type==="dark"?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${e.palette.type==="dark"?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${e.palette.type==="dark"?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${e.palette.type==="dark"?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,$.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${e.palette.type==="dark"?(0,$.X4)(e.palette.error.dark,.5):(0,$.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${e.palette.type==="dark"?(0,$.X4)(e.palette.success.dark,.5):(0,$.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${e.palette.type==="dark"?(0,$.X4)(e.palette.warning.dark,.5):(0,$.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,st=({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`;const lt="224px";var it=({theme:e,sidebar:n})=>`
/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${n.isPinned?`calc(-16rem + ${lt})`:"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`;const ct=["h1","h2","h3","h4","h5","h6"],Xe=/(em)|(rem)/gi,Ze=/var\(|\)/gi;var dt=({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${ct.reduce((n,o)=>{const r=e.typography.htmlFontSize??16,s=e.typography[o],{lineHeight:l,fontFamily:i,fontWeight:c,fontSize:d}=s,h=m=>{if(typeof m=="number")return h(`${m/r*.6}rem`);if(typeof m=="string"){if(m.match(Ze)){const g=window.getComputedStyle(document.body).getPropertyValue(m.replaceAll(Ze,""));if(g!=="")return h(g)}else if(m.match(Xe))return`calc(${m.replace(Xe,"")} * var(--md-typeset-font-size))`}return m};return n.concat(`
    .md-typeset ${o} {
      color: var(--md-default-fg-color);
      line-height: ${l};
      font-family: ${i};
      font-weight: ${c};
      font-size: ${h(d)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,mt=()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,ut=({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${e.palette.type==="dark"?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${e.palette.type==="dark"?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${e.palette.type==="dark"?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`;const ht={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]};var gt=({theme:e})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${ht[e.palette.type].map(n=>`img[src$="${n}"]`).join(", ")} {
  display: none;
}
`;const pt=[rt,st,it,dt,mt,ut,gt],vt=()=>(0,ot.Ut)(),ft=()=>{const e=vt(),n=(0,I.A)();return(0,t.useMemo)(()=>{const o={theme:n,sidebar:e};return pt.reduce((r,s)=>r+s(o),"")},[n,e])},yt=()=>{const e=ft();return(0,t.useCallback)(n=>(n.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${e}</style>`),n),[e])},Et=(e,n,o)=>{const r=e==="src"&&n.endsWith(".svg"),s=!n.match(/^([a-z]*:)?\/\//i),l=n.startsWith(o);return r&&(s||l)},bt=({techdocsStorageApi:e,entityId:n,path:o})=>async r=>{const s=await e.getApiOrigin(),l=async(i,c)=>{for(const d of i)if(d.hasAttribute(c)){const h=d.getAttribute(c);if(!h)return;const m=await e.getBaseUrl(h,n,o);if(Et(c,h,s))try{const B=await(await fetch(m,{credentials:"include"})).text();d.setAttribute(c,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(B)))}`)}catch{d.setAttribute("alt",`Error: ${h}`)}else d.setAttribute(c,m)}};return await Promise.all([l(r.querySelectorAll("img"),"src"),l(r.querySelectorAll("script"),"src"),l(r.querySelectorAll("source"),"src"),l(r.querySelectorAll("link"),"href"),l(r.querySelectorAll("a[download]"),"href")]),r};var wt=a(58167),At=a(90292),xt=a(52536),St=a.n(xt);let Qe;Qe=Promise.resolve().then(a.t.bind(a,25873,19));function ke(e,n){Qe.then(o=>{"createRoot"in o?o.createRoot(n).render(e):o.render(e,n)})}const Tt=e=>n=>{const o=n.querySelector('[title="Edit this page"]');if(!o||!o.href)return n;const r=new URL(o.href),s=e.byUrl(r);if(s?.type!=="github"&&s?.type!=="gitlab")return n;const l=n.querySelector("article>h1")?.childNodes[0].textContent||"",i=encodeURIComponent(`Documentation Feedback: ${l}`),c=encodeURIComponent(`Page source:
${o.href}

Feedback:`),d=s?.type==="github"?(0,wt.F)(r.href,"blob"):r.href,h=St()(d),m=`/${h.organization}/${h.name}`,g=o.cloneNode();switch(s?.type){case"gitlab":g.href=`${r.origin}${m}/issues/new?issue[title]=${i}&issue[description]=${c}`;break;case"github":g.href=`${r.origin}${m}/issues/new?title=${i}&body=${c}`;break;default:return n}return ke(t.createElement(At.A),g),g.style.paddingLeft="5px",g.title="Leave feedback for this page",g.id="git-feedback-link",o?.insertAdjacentElement("beforebegin",g),n};var Ct=a(27326);const Lt=()=>e=>{const n=e.querySelector('.md-header label[for="__drawer"]'),o=e.querySelector("article");if(!n||!o)return e;const r=n.cloneNode();return ke(t.createElement(Ct.A),r),r.id="toggle-sidebar",r.title="Toggle Sidebar",r.classList.add("md-content__button"),r.style.setProperty("padding","0 0 0 5px"),r.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),o?.prepend(r),e},Rt=()=>e=>(((o,r)=>{Array.from(o).filter(s=>s.hasAttribute(r)).forEach(s=>{const l=s.getAttribute(r);if(l){l.match(/^https?:\/\//i)&&s.setAttribute("target","_blank");try{const i=Je(window.location.href);s.setAttribute(r,new URL(l,i).toString())}catch{s.replaceWith(s.textContent||l)}}})})(Array.from(e.getElementsByTagName("a")),"href"),e);function Je(e){const n=new URL(e);return!n.pathname.endsWith("/")&&!n.pathname.endsWith(".html")&&(n.pathname+="/"),n.toString()}const Dt=({baseUrl:e,onClick:n})=>o=>(Array.from(o.getElementsByTagName("a")).forEach(r=>{r.addEventListener("click",s=>{const i=r.getAttribute("href");i&&i.startsWith(e)&&!r.hasAttribute("download")&&(s.preventDefault(),n(s,i))})}),o);var Mt=a(7031),kt=a(50868),It=a(10437),Ot=a(71677),Bt=a(36338);const Pt=(0,Mt.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(Ot.Ay),Ht=()=>t.createElement(It.A,null,t.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})),zt=({text:e})=>{const[n,o]=(0,t.useState)(!1),[,r]=(0,Bt.A)(),s=(0,t.useCallback)(()=>{r(e),o(!0)},[e,r]),l=(0,t.useCallback)(()=>{o(!1)},[o]);return t.createElement(Pt,{title:"Copied to clipboard",placement:"left",open:n,onClose:l,leaveDelay:1e3},t.createElement(Se.A,{style:{color:"inherit",position:"absolute"},className:"md-clipboard md-icon",onClick:s},t.createElement(Ht,null)))},Ut=e=>n=>{const o=n.querySelectorAll("pre > code");for(const r of o){const s=r.textContent||"",l=document.createElement("div");r?.parentElement?.prepend(l),ke(t.createElement(kt.A,{theme:e},t.createElement(zt,{text:s})),l)}return n},$t=()=>e=>(e.querySelector(".md-header")?.remove(),e),Nt=()=>e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),qe=({onLoading:e,onLoaded:n})=>o=>(e(),o.addEventListener(w,function r(){n(),o.removeEventListener(w,r)}),o),Vt=()=>e=>(setTimeout(()=>{const n=e?.querySelectorAll("li.md-nav__item--active");n.length!==0&&(n.forEach(r=>{const s=r?.querySelector("input");s?.checked||s?.click()}),n[n.length-1].scrollIntoView())},200),e),_e=async(e,n)=>{let o;if(typeof e=="string")o=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)o=e;else throw new Error("dom is not a recognized type");for(const r of n)o=await r(o);return o};var Ft=a(38097);const Wt=(0,x.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),Kt=({message:e,handleButtonClick:n,autoHideDuration:o})=>{const r=Wt(),[s,l]=(0,t.useState)(!0),i=()=>l(!1);return t.createElement(Ft.A,{open:s,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:o,color:"primary",onClose:i,message:e,action:t.createElement(be.A,{classes:{root:r.button},size:"small",onClick:()=>{i(),n()}},"Redirect now")})},Gt=(e,n)=>{const r=s=>{const l=Je(window.location.href),i=new URL(s,l);if(i.hostname!==window.location.hostname){const d=window.location.pathname,h=d.indexOf(n),m=d.slice(0,h+n.length);return new URL(m,l).href}return i.href};return s=>{for(const l of Array.from(s.querySelectorAll("meta")))if(l.getAttribute("http-equiv")==="refresh"){const i=l.getAttribute("content")?.split("url=");if(!i||i.length<2)return s;const c=i[1],d=r(c);if(window.location.href===d)return s;const h=document.createElement("div");return ke(t.createElement(Kt,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>e(d),autoHideDuration:3e3}),h),document.body.appendChild(h),setTimeout(()=>{e(d)},3e3),s}return s}};function Yt(e,n){const o=new URL(n),r=`${o.origin}${o.pathname.replace(/\/$/,"")}`,s=e.replace(r,"").replace(/^\/+/,""),l=new URL(`http://localhost/${s}`);return`${l.pathname}${l.search}${l.hash}`}function jt(){const e=(0,t.useRef)((0,W.Zp)()),o=(0,te.gf)(ve.U).getOptionalString("app.baseUrl");return(0,t.useCallback)(s=>{let l=s;if(o)try{l=Yt(s,o)}catch{}e.current(l)},[o])}const Xt="screen and (max-width: 76.1875em)",Zt=e=>{const n=jt(),o=(0,I.A)(),r=(0,y.A)(Xt),s=at(),l=yt(),i=(0,Ce.s)(),c=(0,te.gf)(z.s),d=(0,te.gf)(we.Y),h=(0,te.gf)(ve.U),{state:m,path:g,content:B}=k(),{"*":ae=""}=(0,W.g)(),[v,q]=(0,t.useState)(null),oe=Q(v),G=(0,t.useCallback)(()=>{if(!v)return;v.querySelectorAll(".md-sidebar").forEach(R=>{if(r)R.style.top="0px";else{const Ae=document?.querySelector(".techdocs-reader-page")?.getBoundingClientRect().top??0;let ie=v.getBoundingClientRect().top??0;const Ge=v.querySelector(".md-container > .md-tabs")?.getBoundingClientRect().height??0;ie<Ae&&(ie=Ae);const tt=Math.max(ie,0)+Ge;R.style.top=`${tt}px`;const tn=v.querySelector(".md-container > .md-footer")?.getBoundingClientRect().top??window.innerHeight;R.style.height=`${tn-tt}px`}R.style.setProperty("opacity","1")})},[v,r]);(0,t.useEffect)(()=>(window.addEventListener("resize",G),window.addEventListener("scroll",G,!0),()=>{window.removeEventListener("resize",G),window.removeEventListener("scroll",G,!0)}),[v,G]);const E=(0,t.useCallback)(()=>{if(!v)return;const L=v.querySelector(".md-footer");L&&(L.style.width=`${v.getBoundingClientRect().width}px`)},[v]);(0,t.useEffect)(()=>(window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}),[v,E]),(0,t.useEffect)(()=>{oe||(E(),G())},[m,oe,E,G]);const b=(0,t.useCallback)((L,R)=>_e(L,[s,bt({techdocsStorageApi:c,entityId:e,path:R}),Rt(),Lt(),$t(),Nt(),Tt(d),l]),[e,d,c,s,l]),re=(0,t.useCallback)(async L=>_e(L,[Gt(n,e.name),Vt(),Ut(o),Dt({baseUrl:h.getOptionalString("app.baseUrl")||window.location.origin,onClick:(R,N)=>{const Ae=R.ctrlKey||R.metaKey,ie=new URL(N),et=R.target?.innerText||N,Ge=N.replace(window.location.origin,"");i.captureEvent("click",et,{attributes:{to:Ge}}),ie.hash?Ae?window.open(N,"_blank"):(window.location.pathname!==ie.pathname?n(N):window.history.pushState(null,document.title,ie.hash),L?.querySelector(`[id="${ie.hash.slice(1)}"]`)?.scrollIntoView()):Ae?window.open(N,"_blank"):n(N)}}),qe({onLoading:()=>{},onLoaded:()=>{L.querySelector(".md-nav__title")?.removeAttribute("for")}}),qe({onLoading:()=>{Array.from(L.querySelectorAll(".md-sidebar")).forEach(N=>{N.style.setProperty("opacity","0")})},onLoaded:()=>{}})]),[o,n,i,e.name,h]);return(0,t.useEffect)(()=>{if(!B)return()=>{};let L=!0;return b(B,g).then(async R=>{if(!R?.innerHTML||!L||ae!==g)return;window.scroll({top:0});const N=await re(R);q(N)}),()=>{L=!1}},[B,ae,g,b,re]),v};var We=a(41883),Qt=a(11618),Ke=a(15246);const Jt=()=>{const e=(0,Qt.YR)(),{shadowRoot:n}=(0,S.V)(),o=n?.querySelector('[data-md-component="content"]'),r=n?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]');let s=r?.querySelector('[data-techdocs-addons-location="primary sidebar"]');s||(s=document.createElement("div"),s.setAttribute("data-techdocs-addons-location","primary sidebar"),r?.prepend(s));const l=n?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]');let i=l?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return i||(i=document.createElement("div"),i.setAttribute("data-techdocs-addons-location","secondary sidebar"),l?.prepend(i)),t.createElement(t.Fragment,null,t.createElement(We.A,{container:s},e.renderComponentsByLocation(Ke.e.PrimarySidebar)),t.createElement(We.A,{container:o},e.renderComponentsByLocation(Ke.e.Content)),t.createElement(We.A,{container:i},e.renderComponentsByLocation(Ke.e.SecondarySidebar)))};var qt=a(95208);const _t=(0,x.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),en=ne(e=>{const{withSearch:n=!0,searchResultUrlMapper:o,onReady:r}=e,s=_t(),{entityMetadata:{value:l,loading:i},entityRef:c,setShadowRoot:d}=(0,S.V)(),{state:h}=k(),m=Zt(c),g=window.location.pathname,B=window.location.hash,ae=Q(m),[v]=(0,u.$r)([`[id="${B.slice(1)}"]`]),q=(0,qt.n)(),{NotFoundErrorPage:oe}=q.getComponents();(0,t.useEffect)(()=>{ae||(B?v&&v.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[g,B,v,ae]);const G=(0,t.useCallback)(E=>{d(E),r instanceof Function&&r()},[d,r]);return i===!1&&!l?t.createElement(oe,null):m?t.createElement(P.U,null,t.createElement(f.A,{container:!0},t.createElement(f.A,{xs:12,item:!0},t.createElement(U,null)),n&&t.createElement(f.A,{className:s.search,xs:"auto",item:!0},t.createElement(xe,{entityId:c,entityTitle:l?.metadata?.title,searchResultUrlMapper:o})),t.createElement(f.A,{xs:12,item:!0},(h==="CHECKING"||ae)&&t.createElement(F.k,null),t.createElement(A,{element:m,onAppend:G},t.createElement(Jt,null))))):t.createElement(P.U,null,t.createElement(f.A,{container:!0},t.createElement(f.A,{xs:12,item:!0},t.createElement(U,null))))}),nn=null},84893:(ge,D,a)=>{a.d(D,{Z:()=>P});var t=a(14041),f=a(58837),x=a(29365),S=a(75173),T=a(71677),V=a(37757),M=a(77125),w=a(9684),Z=a(66839),Q=a(11618),A=a(15246);const u=(0,f.A)(F=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:F.spacing(3,3,0),"@media print":{display:"none"}}})),P=F=>{const _=u(),[H,J]=(0,t.useState)(null),ee=(0,t.useCallback)(Ee=>{J(Ee.currentTarget)},[]),ce=(0,t.useCallback)(()=>{J(null)},[]),{entityMetadata:{value:de,loading:me}}=(0,Z.V)(),O=(0,Q.YR)(),W=O.renderComponentsByLocation(A.e.Subheader),se=O.renderComponentsByLocation(A.e.Settings);return!W&&!se||me===!1&&!de?null:t.createElement(S.A,{classes:_,...F.toolbarProps},t.createElement(M.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap"},W,se?t.createElement(t.Fragment,null,t.createElement(T.Ay,{title:"Settings"},t.createElement(x.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:ee},t.createElement(w.A,null))),t.createElement(V.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:H,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!H,onClose:ce,keepMounted:!0},t.createElement("div",null,se))):null))}},90292:(ge,D,a)=>{var t,f=a(4293),x=a(78920);t={value:!0},D.A=void 0;var S=x(a(14041)),T=f(a(74044)),V=(0,T.default)(S.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined");D.A=V},91042:(ge,D,a)=>{a.d(D,{Y:()=>x});var t=a(14041),f=a(16261);function x(S,T){const[V,M]=(0,t.useState)({status:"not-executed",error:void 0,result:T}),w=(0,t.useRef)(),Z=(0,t.useRef)(),Q=(0,f.J)({execute(...A){Z.current=A;const u=S(...A);return w.current=u,M(P=>({...P,status:"loading"})),u.then(P=>{u===w.current&&M(F=>({...F,status:"success",error:void 0,result:P}))},P=>{u===w.current&&M(F=>({...F,status:"error",error:P}))}),u},reset(){M({status:"not-executed",error:void 0,result:T}),w.current=void 0,Z.current=void 0}});return[V,(0,t.useMemo)(()=>({reset(){Q.current.reset()},execute:(...A)=>Q.current.execute(...A)}),[]),{promise:w.current,lastArgs:Z.current}]}}}]);})();

//# sourceMappingURL=3402.4065d5c6.chunk.js.map