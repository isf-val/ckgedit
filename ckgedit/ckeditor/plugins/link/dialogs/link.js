var update_ckgeditInternalLink,update_ckgeditMediaLink;var fckgInternalInputId,fckgMediaInputId;window.onbeforeunload=function(){};CKEDITOR.dialog.add("link",function(b){oDokuWiki_FCKEditorInstance.Lang=b.lang;var v=oDokuWiki_FCKEditorInstance.dwiki_doku_base;var O=CKEDITOR.plugins.link;var f=new Object();f.doku_base=new RegExp("^"+v.replace(/\//g,"\\/"),"g");f.media_internal=/lib\/exe\/fetch\.php\/(.*)/;f.media_rewrite_1=/^_media\/(.*)/;f.media_rewrite_1Doku_Base=new RegExp("^"+v+"_media/(.*)");f.media_rewrite_2=/exe\/fetch.php\?media=(.*)/;f.internal_link=/doku.php\?id=(.*)/;f.internal_link_rewrite_2=/doku.php\/(.*)/;f.internal_link_rewrite_1=new RegExp("^"+v+"(?!_media)(.*)");f.samba=/file:\/\/\/\/\/(.*)/;f.samba_unsaved=/^\\\\\w+(\\\w.*)/;var z;var F={InternalLink:"internal link",InternalMedia:"internal media",MediaFileLink:"link to media file",SMBLabel:"Samba Share",GetHeadingsLabel:"Get Headings",QStringLabel:"Query String (For example: value_1=1&value_2=2) ",ResetQS:"Reset Query String",NotSetOption:"Not Set",AdvancedInfo:"To create anchors from Dokuwiki headers, click on the Get Headings button, select the header, click OK. You can go back, select a new page and get new headers.",AdvancedTabPrompt:"Use the advanced tab to create page anchors and query strings",SMBExample:"Enter your share as: \\\\Server\\directory\\file",};var p=b.lang.fbrowser?b.lang.fbrowser:F;var j=function(R){if(p[R]&&p[R]!=""){return p[R]}return F[R]};var L=function(){var U=this.getDialog();var W=U.getContentElement("advanced","internalAnchor").getInputElement().$.id;var R=document.getElementById(W);var T=U.getContentElement("info","internal").getInputElement().$.id;T=document.getElementById(T).value;if(!T){return}var S={push:function(Y,X){this.stack[this.Index]=(new Option(Y,X,false,false));this.Index++},Index:0,stack:undefined,selection:"",ini:function(X){this.stack=R.options;this.stack.length=0;this.Index=0;this.push(X,"")}};var V="dw_id="+T;b.config.jquery.post(b.config.ckedit_path+"get_headers.php",V,function(ab,X){if(X=="success"){var ac=decodeURIComponent(ab);if(ac.match(/^\s*__EMPTY__\s*$/)){S.ini("No Headers Found");S.selection="";return}S.ini("Headings Menu");var aa=ac.split("@@");for(var Z in aa){var Y=aa[Z].split(/;;/);S.push(Y[0],Y[1])}}},"html")};var P=function(){return z};var m=function(){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;oDokuWiki_FCKEditorInstance.isUrlExtern=false;oDokuWiki_FCKEditorInstance.isDwikiMediaFile=false;var U=this.getDialog(),X=["urlOptions","anchorOptions","emailOptions","internalOptions","mediaOptions","sambaOptions"],W=this.getValue(),V=U.definition.getContents("upload"),R=V&&V.hidden;U.hidePage("advanced");if(W=="internal"){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=true;U.showPage("advanced")}else{if(W=="media"){oDokuWiki_FCKEditorInstance.isDwikiMediaFile=true}}if(W=="url"){oDokuWiki_FCKEditorInstance.isUrlExtern=true;if(!R){U.showPage("upload")}}else{if(!R){U.hidePage("upload")}}for(var T=0;T<X.length;T++){var S=U.getContentElement("info",X[T]);if(!S){continue}S=S.getElement().getParent().getParent();if(X[T]==W+"Options"){S.show()}else{S.hide()}}U.layout()};var H=/^javascript:/,I=/^mailto:([^?]+)(?:\?(.+))?$/,h=/subject=([^;?:@&=$,\/]*)/,Q=/body=([^;?:@&=$,\/]*)/,s=/^#(.*)$/,c=/^((?:http|https|ftp|news):\/\/)?(.*)$/,t=/^(_(?:self|top|parent|blank))$/,o=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,E=/^javascript:([^(]+)\(([^)]+)\)$/;var a=/doku.php\?id=(.*)$/;var l=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;var x=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;var n=function(Y,V){var S=(V&&(V.data("cke-saved-href")||V.getAttribute("href")))||"",ab,X,W,U,T={};if((ab=S.match(H))){if(k=="encode"){S=S.replace(o,function(ae,ag,af){return"mailto:"+String.fromCharCode.apply(String,ag.split(","))+(af&&r(af))})}else{if(k){S.replace(E,function(ak,am,ah){if(am==G.name){T.type="email";var al=T.email={};var af=/[^,\s]+/g,ag=/(^')|('$)/g,ae=ah.match(af),an=ae.length,aj,ao;for(var ai=0;ai<an;ai++){ao=decodeURIComponent(r(ae[ai].replace(ag,"")));aj=G.params[ai].toLowerCase();al[aj]=ao}al.address=[al.name,al.domain].join("@")}})}}}if(!T.type){if((W=S.match(s))){T.type="anchor";T.anchor={};T.anchor.name=T.anchor.id=W[1]}else{if((X=S.match(I))){var ad=S.match(h),R=S.match(Q);T.type="email";var aa=(T.email={});aa.address=X[1];ad&&(aa.subject=decodeURIComponent(ad[1]));R&&(aa.body=decodeURIComponent(R[1]))}else{if((U=S.match(a))||(U=S.match(f.internal_link_rewrite_2))||(U=S.match(f.internal_link_rewrite_1))){T.type="internal";T.url={};T.url.selected=U[1];T.url.protocol="";T.url.url=""}else{if((U=S.match(f.media_internal))||(U=S.match(f.media_rewrite_1))||(U=S.match(f.media_rewrite_2))||(U=S.match(f.media_rewrite_1Doku_Base))){T.type="media";T.url={};T.url.protocol="";T.url.url="";T.url.selected=U[1]}else{if(U=S.match(f.samba)){T.type="samba";T.url={};T.url.url="";T.url.protocol="";T.url.selected="\\\\"+U[1].replace(/\//g,"\\")}else{if(U=S.match(f.samba_unsaved)){T.type="samba";T.url={};T.url.url="";T.url.protocol="";T.url.selected=U[0]}else{if(S&&(U=S.match(c))){T.type="url";T.url={};T.url.protocol=U[1];T.url.url=U[2]}else{T.type="url"}}}}}}}}if(V){var Z=V.getAttribute("target");T.target={};T.adv={};var ac=this}this._.selectedElement=V;return T};var A=function(R){if(!R){return}R=R.replace(/^[\/\:]/,"");R=R.replace(/\//g,":");R=":"+R;document.getElementById(fckgInternalInputId).value=R};update_ckgeditInternalLink=A;var d=function(R){if(!R){return}R=R.replace(/^[\/\:]/,"");R=R.replace(/\//g,":");R=":"+R;document.getElementById(fckgMediaInputId).value=R};update_ckgeditMediaLink=d;var q=function(R){for(i in R){msg=i+"="+R[i];if(!confirm(msg)){break}}};var w=function(S,R){if(R[S]){this.setValue(R[S][this.id]||"")}};var K=function(R){return w.call(this,"target",R)};var J=function(R){return w.call(this,"adv",R)};var M=function(S,R){if(!R[S]){R[S]={}}R[S][this.id]=this.getValue()||""};var y=function(R){return M.call(this,"target",R)};var N=function(R){return M.call(this,"adv",R)};function r(R){return R.replace(/\\'/g,"'")}function B(R){return R.replace(/'/g,"\\$&")}var k=b.config.emailProtection||"";if(k&&k!="encode"){var G={};k.replace(/^([^(]+)\(([^)]+)\)$/,function(R,S,T){G.name=S;G.params=[];T.replace(/[^,\s]+/g,function(U){G.params.push(U)})})}function e(T){var R,S=G.name,X=G.params,V,W;R=[S,"("];for(var U=0;U<X.length;U++){V=X[U].toLowerCase();W=T[V];U>0&&R.push(",");R.push("'",W?B(encodeURIComponent(T[V])):"","'")}R.push(")");return R.join("")}function u(S){var R,V=S.length,T=[];for(var U=0;U<V;U++){R=S.charCodeAt(U);T.push(R)}return"String.fromCharCode("+T.join(",")+")"}function D(S){var R=S.getAttribute("class");return R?R.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var C=b.lang.common,g=b.lang.link;return{title:g.title,minWidth:375,minHeight:250,contents:[{id:"info",label:g.info,title:g.info,elements:[{id:"linkType",type:"select",label:g.type,"default":"url",items:[[g.toUrl,"url"],[j("InternalLink"),"internal"],[j("InternalMedia"),"media"],[g.toEmail,"email"],["Samba share","samba"]],onChange:m,setup:function(R){if(R.type){this.setValue(R.type)}},commit:function(R){R.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:C.protocol,"default":"http://",items:[["http://\u200E","http://"],["https://\u200E","https://"],["ftp://\u200E","ftp://"],["news://\u200E","news://"]],setup:function(R){if(R.url){this.setValue(R.url.protocol||"")}},commit:function(R){if(!R.url){R.url={}}R.url.protocol=this.getValue()}},{type:"text",id:"url",label:C.url,required:true,onLoad:function(){this.allowOnChange=true},onKeyUp:function(){this.allowOnChange=false;var T=this.getDialog().getContentElement("info","protocol"),R=this.getValue(),S=/^(http|https|ftp|news):\/\/(?=.)/i,V=/^((javascript:)|[#\/\.\?])/i;var U=S.exec(R);if(U){this.setValue(R.substr(U[0].length));T.setValue(U[0].toLowerCase())}else{if(V.test(R)){T.setValue("")}}this.allowOnChange=true},onChange:function(){if(this.allowOnChange){this.onKeyUp()}},validate:function(){var R=this.getDialog();if(R.getContentElement("info","linkType")&&R.getValueOf("info","linkType")!="url"){return true}if(this.getDialog().fakeObj){return true}var S=CKEDITOR.dialog.validate.notEmpty(g.noUrl);return S.apply(this)},setup:function(R){this.allowOnChange=false;if(R.url){this.setValue(R.url.url)}this.allowOnChange=true},commit:function(R){this.onChange();if(!R.url){R.url={}}R.url.url=this.getValue();this.allowOnChange=false}}],setup:function(R){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()}}},{type:"button",id:"browse0",filebrowser:"info:url",label:C.browseServer},]},{type:"vbox",id:"internalOptions",children:[{type:"button",id:"browse1",hidden:"true",filebrowser:"info:url",label:C.browseServer},{type:"text",id:"internal",label:j("InternalLink"),required:true,setup:function(R){if(R){if(R.url&&R.url.selected){var S=R.url.selected.replace(/^\:/,"");this.setValue(":"+S)}}},},{id:"anchorsmsg",type:"html",html:j("AdvancedTabPrompt"),}]},{type:"vbox",id:"mediaOptions",children:[{type:"button",id:"browse2",filebrowser:"info:url",label:C.browseServer},{type:"text",id:"media",label:j("MediaFileLink"),required:true,setup:function(R){if(R){if(R.url&&R.url.selected){var S=R.url.selected.replace(/^\:/,"");this.setValue(":"+S)}}},},]},{type:"vbox",id:"sambaOptions",children:[{type:"html",id:"smb_msg",html:j("SMBExample"),},{type:"text",id:"samba",width:"50",label:j("SMBLabel"),required:true,setup:function(R){if(R.url&&R.url.selected){this.setValue(R.url.selected)}},},]},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:g.emailAddress,required:true,validate:function(){var R=this.getDialog();if(!R.getContentElement("info","linkType")||R.getValueOf("info","linkType")!="email"){return true}var S=CKEDITOR.dialog.validate.notEmpty(g.noEmail);return S.apply(this)},setup:function(S){if(S.email){this.setValue(S.email.address)}var R=this.getDialog().getContentElement("info","linkType");if(R&&R.getValue()=="email"){this.select()}},commit:function(R){if(!R.email){R.email={}}R.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:g.emailSubject,setup:function(R){if(R.email){this.setValue(R.email.subject)}},commit:function(R){if(!R.email){R.email={}}R.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:g.emailBody,rows:3,"default":"",setup:function(R){if(R.email){this.setValue(R.email.body)}},commit:function(R){if(!R.email){R.email={}}R.email.body=this.getValue()}}],setup:function(R){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()}}}]},{id:"upload",label:g.upload,title:g.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:C.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:C.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:g.advanced,title:g.advanced,elements:[{id:"msg",type:"html",html:"<p style='max-width:350px; white-space: pre-wrap;'>"+j("AdvancedInfo")+"</p>"},{id:"internalAnchor",type:"select","default":"",items:[["Not Set",""],],setup:function(R){if(R.hash){this.setValue(R.hash)}},commit:function(R){R.hash=this.getValue()}},{type:"button",id:"getheaders",onClick:L,label:j("GetHeadingsLabel"),},{type:"html",html:"<br />",},{type:"text",id:"queryString",label:j("QStringLabel"),setup:function(R){if(R.qstring){this.setValue(R.qstring)}},commit:function(R){R.qstring=this.getValue()}},{type:"button",id:"clearquerystring",onClick:function(){var S=this.getDialog();var T=S.getContentElement("advanced","queryString").getInputElement().$.id;var R=document.getElementById(T);R.value=""},label:j("ResetQS"),},{type:"vbox",padding:1,hidden:true,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:g.cssClasses,"default":"",id:"advCSSClasses",setup:J,commit:N},{type:"text",label:g.charset,"default":"",id:"advCharset",setup:J,commit:N}]},]}]}],onShow:function(){var T=this.getParentEditor(),S=T.getSelection(),R=null;if((R=O.getSelectedLink(T))&&R.hasAttribute("href")){S.selectElement(R)}else{R=null}this.setupContent(n.apply(this,[T,R]))},onOk:function(){var Z=new RegExp(oDokuWiki_FCKEditorInstance.imageUploadAllowedExtensions);var ab={},U=[],ap={},ao=this,W=this.getParentEditor();this.commitContent(ap);var ak=false;switch(ap.type||"url"){case"media":if(document.getElementById(fckgMediaInputId).value){ap.url.url=document.getElementById(fckgMediaInputId).value}ap.adv.advTitle=ap.url.url;var an=ap.url.url.match(/(\.(\w+))$/);ap.url.url=W.config.doku_url+"doku.php?id="+ap.url.url;if(an[1].match(Z)){ap.adv.advContentType="linkonly"}else{ap.adv.advContentType="other_mime";ak=true}ap.adv.advCSSClasses="media mediafile";if(an){ap.adv.advCSSClasses+=" mf_"+an[2]}var af=(ap.url&&ap.url.protocol!=undefined)?ap.url.protocol:"http://",X=(ap.url&&CKEDITOR.tools.trim(ap.url.url))||"";ab["data-cke-saved-href"]=(X.indexOf("/")===0)?X:af+X;break;case"internal":if(!ap.url.url){ap.url.url=document.getElementById(fckgInternalInputId).value}ap.url.url=ap.url.url.replace(/^.*?\/data\/pages\//,"");ap.url.url=ap.url.url.replace(/^\:/,"");ap.url.url=":"+ap.url.url.replace(/\//g,":");ap.adv.advCSSClasses="wikilink1";ap.adv.advTitle=ap.url.url;ap.url.url=W.config.doku_url+"doku.php?id="+ap.url.url;if(ap.hash){ap.url.url+="#"+ap.hash}if(ap.qstring){ap.url.url+="&"+ap.qstring}case"url":var af=(ap.url&&ap.url.protocol!=undefined)?ap.url.protocol:"http://",X=(ap.url&&CKEDITOR.tools.trim(ap.url.url))||"";ab["data-cke-saved-href"]=(X.indexOf("/")===0)?X:af+X;break;case"anchor":var ar=(ap.anchor&&ap.anchor.name),ag=(ap.anchor&&ap.anchor.id);ab["data-cke-saved-href"]="#"+(ar||ag||"");break;case"samba":if(!ap.url.url){ap.url.url=document.getElementById(P()).value}if(!ap.url.url){alert("Missing Samba Url");return false}ap.url.protocol="";var af="";X=(ap.url&&CKEDITOR.tools.trim(ap.url.url))||"";ab["data-cke-saved-href"]=(X.indexOf("/")===0)?X:af+X;ap.adv.advCSSClasses="windows";ap.adv.advTitle=ap.url.url;break;case"email":var T,ai=ap.email,V=ai.address;switch(k){case"":case"encode":var Y=encodeURIComponent(ai.subject||""),ac=encodeURIComponent(ai.body||"");var aa=[];Y&&aa.push("subject="+Y);ac&&aa.push("body="+ac);aa=aa.length?"?"+aa.join("&"):"";if(k=="encode"){T=["javascript:void(location.href='mailto:'+",u(V)];aa&&T.push("+'",B(aa),"'");T.push(")")}else{T=["mailto:",V,aa]}break;default:var ah=V.split("@",2);ai.name=ah[0];ai.domain=ah[1];T=["javascript:",e(ai)]}ab["data-cke-saved-href"]=T.join("");break}if(ap.adv){var aj=function(at,au){var av=ap.adv[at];if(av){ab[au]=av}else{U.push(au)}};aj("advId","id");aj("advLangDir","dir");aj("advAccessKey","accessKey");if(ap.adv.advName){ab.name=ab["data-cke-saved-name"]=ap.adv.advName}else{U=U.concat(["data-cke-saved-name","name"])}aj("advLangCode","lang");aj("advTabIndex","tabindex");if(!ak){aj("advTitle","title")}aj("advContentType","type");aj("advCSSClasses","class");aj("advCharset","charset");aj("advStyles","style");aj("advRel","rel")}var aq=W.getSelection();ab.href=ab["data-cke-saved-href"];if(!this._.selectedElement){var S=aq.getRanges(true);if(S.length==1&&S[0].collapsed){var ae=new CKEDITOR.dom.text(ap.type=="email"?ap.email.address:ab["data-cke-saved-href"],W.document);S[0].insertNode(ae);S[0].selectNodeContents(ae);aq.selectRanges(S)}var am=new CKEDITOR.style({element:"a",attributes:ab});am.type=CKEDITOR.STYLE_INLINE;am.apply(W.document)}else{var R=this._.selectedElement,al=R.data("cke-saved-href"),ad=R.getHtml();R.setAttributes(ab);R.removeAttributes(U);if(ap.adv&&ap.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){R.addClass(R.getChildCount()?"cke_anchor":"cke_anchor_empty")}if(al==ad||ap.type=="email"&&ad.indexOf("@")!=-1){R.setHtml(ap.type=="email"?ap.email.address:ab["data-cke-saved-href"])}aq.selectElement(R);delete this._.selectedElement}if(ae&&ap.adv.advTitle){ae.setText(ap.adv.advTitle)}},onLoad:function(){oDokuWiki_FCKEditorInstance.isDwikiImage=false;fckgInternalInputId=this.getContentElement("info","internal").getInputElement().$.id;fckgMediaInputId=this.getContentElement("info","media").getInputElement().$.id;z=this.getContentElement("info","samba").getInputElement().$.id;this.hidePage("advanced");this.showPage("info");var S=this._.tabs.advanced&&this._.tabs.advanced[0];var R=this;var T=j("NotSetOption");S.on("focus",function(V){var W=R.getContentElement("advanced","internalAnchor").getInputElement().$.id;var U=document.getElementById(W);U.selectedIndex=-1;U.options.length=0;U.options[0]=new Option(T,"",false,false)})},onFocus:function(){var R=this.getContentElement("info","linkType"),S;if(R&&R.getValue()=="url"){S=this.getContentElement("info","url");S.select()}}}});