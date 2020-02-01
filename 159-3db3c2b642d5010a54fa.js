(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{"./.linaria-cache/src/components/contribute/Contribute.linaria.css":function(e,a,t){},"./src/components/contribute/Contribute.tsx":function(e,a,t){"use strict";t.r(a),function(e){var s,r=t("./node_modules/@babel/runtime/helpers/defineProperty.js"),l=t.n(r),n=t("./node_modules/@babel/runtime/regenerator/index.js"),i=t.n(n),c=t("./node_modules/@babel/runtime/helpers/slicedToArray.js"),o=t.n(c),m=t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),d=t.n(m),u=t("./node_modules/formik/dist/formik.esm.js"),b=t("./node_modules/linaria/lib/index.js"),g=t("./node_modules/linaria/react.js"),f=t("./node_modules/ramda/es/index.js"),p=t("./node_modules/ramda/es/pathEq.js"),v=t("./node_modules/ramda/es/uniq.js"),k=t("./node_modules/react/index.js"),E=t.n(k),h=t("./node_modules/react-syntax-highlighter/dist/esm/prism-async-light.js"),N=t("./node_modules/react-syntax-highlighter/dist/esm/languages/prism/yaml.js"),w=t("./node_modules/react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light.js"),y=t("./node_modules/js-yaml/index.js"),x=t.n(y),j=t("./src/lib/stickers.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);var _,S="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},O=Object(g.styled)("div")({name:"Contribute",class:"c1b6b6t9"}),A=/^https:\/\/signal.art\/addstickers\/#pack_id=([A-Za-z0-9]+)&pack_key=([A-Za-z0-9]+)$/g,C=/^(?:([\w\d-_ ]+))+(?:, ([\w\d-_ ]+))*$/g,L={signalArtUrl:"",source:"",tags:"",isNsfw:void 0},U={signalArtUrl:(_=d()(i.a.mark((function e(a){var t,s,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return","This field is required.");case 2:if(t=new RegExp(A).exec(a)){e.next=5;break}return e.abrupt("return","Invalid signal.art URL.");case 5:return s=o()(t,3),r=s[1],l=s[2],e.t0=f,e.t1=p.a(["meta","id"],r),e.next=10,Object(j.e)();case 10:if(e.t2=e.sent,!e.t0.find.call(e.t0,e.t1,e.t2)){e.next=13;break}return e.abrupt("return","A sticker pack with that ID already exists in the directory.");case 13:return e.prev=13,e.next=16,Object(j.d)(r,l);case 16:e.next=21;break;case 18:return e.prev=18,e.t3=e.catch(13),e.abrupt("return","Invalid sticker pack. Please check the pack ID and key.");case 21:case"end":return e.stop()}}),e,null,[[13,18]])}))),function(e){return _.apply(this,arguments)}),source:function(e){if(e&&e.length>320)return"This field must be no longer than 320 characters."},tags:function(e){if(""!==e&&!new RegExp(C).test(e))return"Invalid value. Tags must be a list of comma-delimited strings."},isNsfw:function(e){if(void 0===e)return"This field is required."}};h.a.registerLanguage("yaml",N.a);var G=function(){var e=Object(k.useState)(!1),a=o()(e,2),t=a[0],s=a[1],r=Object(k.useState)(""),n=o()(r,2),i=n[0],c=n[1],m=Object(k.useState)(""),d=o()(m,2),g=d[0],f=d[1],p=function(){s(!0),c(""),f("")};return E.a.createElement(O,{className:"my-4 p-lg-3 px-lg-4"},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12"},E.a.createElement("p",{className:"mt-lg-3 mb-4"},"Getting your sticker pack listed in the Signal Stickers directory is easy! First, paste the ",E.a.createElement("code",null,"signal.art")," link for your sticker pack, including the ",E.a.createElement("code",null,"pack_id")," and ",E.a.createElement("code",null,"pack_key")," values, into the form below. Then, answer a few questions about your sticker pack and add optional metadata."))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},E.a.createElement(u.d,{initialValues:L,onSubmit:function(e){var a=new RegExp(A).exec(e.signalArtUrl);if(!a)throw new Error("Unable to extract pack ID and pack key from signal.art URL.");var t=o()(a,3),s=t[1],r=t[2],n=v.a(e.tags.split(",").map((function(e){return e.trim()})).filter((function(e){return e.length})));return c(x.a.safeDump(l()({},s,{key:r,source:e.source,tags:n,nsfw:"true"===e.isNsfw}),{indent:2}).trim()),f("https://signalstickers.com/pack/".concat(s,"?key=").concat(r)),!0},validateOnChange:t,validateOnBlur:t},(function(e){var a=e.values,t=e.errors,s=e.isValidating,r=e.isSubmitting;return E.a.createElement(u.c,{noValidate:!0},E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-row"},E.a.createElement("label",{className:Object(b.cx)("col-12",t.signalArtUrl&&"text-danger"),htmlFor:"signal-art-url"},"Signal Art URL:",E.a.createElement(u.b,{type:"text",id:"signal-art-url",name:"signalArtUrl",validate:U.signalArtUrl,className:Object(b.cx)("form-control",t.signalArtUrl&&"is-invalid"),placeholder:"https://signal.art/addstickers/#pack_id=<your pack id>&pack_key=<your pack key>"}),E.a.createElement("div",{className:"invalid-feedback"},E.a.createElement(u.a,{name:"signalArtUrl"})," ")))),E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-row"},E.a.createElement("label",{className:Object(b.cx)("col-12",t.source&&"text-danger"),htmlFor:"source"},"(Optional) Source:",E.a.createElement(u.b,{type:"text",id:"source",name:"source",validate:U.source,className:Object(b.cx)("form-control",t.source&&"is-invalid")}),E.a.createElement("small",{className:"form-text text-muted"},"Original author, website, company, etc."),E.a.createElement("div",{className:"invalid-feedback"},E.a.createElement(u.a,{name:"source"})," ")))),E.a.createElement("div",{className:"form-group mb-4"},E.a.createElement("div",{className:"form-row"},E.a.createElement("label",{className:Object(b.cx)("col-12",t.tags&&"text-danger"),htmlFor:"tags"},"(Optional) Tags:",E.a.createElement(u.b,{type:"text",id:"tags",name:"tags",validate:U.tags,className:Object(b.cx)("form-control",t.tags&&"is-invalid")}),E.a.createElement("small",{className:"form-text text-muted"},"Comma-separated list of words."),E.a.createElement("div",{className:"invalid-feedback"},E.a.createElement(u.a,{name:"tags"})," ")))),E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-row"},E.a.createElement("label",{className:Object(b.cx)("col-12","mb-2",t.isNsfw&&"text-danger")},"Is your sticker pack ",E.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term=NSFW",target:"_blank",rel:"noreferrer"},"NSFW"),"?")),E.a.createElement("div",{className:"form-row"},E.a.createElement("div",{className:"col-12 mb-1"},E.a.createElement("div",{className:"custom-control custom-radio"},E.a.createElement(u.b,{type:"radio",id:"is-nsfw-true",name:"isNsfw",validate:U.isNsfw,className:Object(b.cx)("custom-control-input",t.isNsfw&&"is-invalid"),value:"true",checked:"true"===a.isNsfw}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-true"},"Yes"))),E.a.createElement("div",{className:"col-12 mb-1"},E.a.createElement("div",{className:"custom-control custom-radio"},E.a.createElement(u.b,{type:"radio",id:"is-nsfw-false",name:"isNsfw",validate:U.isNsfw,className:Object(b.cx)("custom-control-input",t.isNsfw&&"is-invalid"),value:"false",checked:"false"===a.isNsfw}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"is-nsfw-false"},"No")),E.a.createElement("div",{className:"invalid-feedback"},E.a.createElement(u.a,{name:"isNsfw"})," ")))),E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-row"},E.a.createElement("div",{className:"col-12"},E.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:r||s,onClick:p},"Generate YML")))))})))),i?E.a.createElement(E.a.Fragment,null,E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12"},E.a.createElement("hr",null),E.a.createElement("p",{className:"mt-4 mb-4"},"Great! Below is the YML blob you will need to add at the end of ",E.a.createElement("code",null,"stickers.yml")," in the ",E.a.createElement("a",{href:"https://github.com/signalstickers/signalstickers/edit/master/stickers.yml",target:"_blank",rel:"noreferrer"},"Signal Stickers repository"),"."))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},E.a.createElement("div",{className:"card"},E.a.createElement(h.a,{language:"yaml",style:w.a,customStyle:{margin:"0"}},i)))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12"},E.a.createElement("p",{className:"mt-4 mb-4"},"Please also include this link in your Pull Request description, as it allows us to review your pack easily!"))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"col-12 col-md-10 offset-md-1"},E.a.createElement("div",{className:"card mb-3"},E.a.createElement(h.a,{language:"yaml",style:w.a,customStyle:{margin:"0"}},g))))):null)};S(G,"useState{[hasBeenSubmitted, setHasBeenSubmitted](false)}\nuseState{[ymlBlob, setYmlBlob]('')}\nuseState{[previewUrl, setPreviewUrl]('')}");var T,R,F=G;a.default=F,t("./.linaria-cache/src/components/contribute/Contribute.linaria.css"),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(T.register(O,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(A,"SIGNAL_ART_URL_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(C,"TAGS_PATTERN","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(L,"initialValues","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(U,"validators","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(G,"ContributeComponent","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx"),T.register(F,"default","/home/travis/build/signalstickers/signalstickers/src/components/contribute/Contribute.tsx")),(R="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&R(e)}.call(this,t("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=159-3db3c2b642d5010a54fa.js.map