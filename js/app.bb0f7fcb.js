(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],f=0,d=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vinh-introduction/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"014e":function(t,e,i){"use strict";i("f9ef")},"034f":function(t,e,i){"use strict";i("85ec")},"0a5e":function(t,e,i){t.exports=i.p+"img/kissme.b9a6173e.jpg"},1771:function(t,e,i){var n={"./avatar.jpg":"915e","./kissme.jpg":"0a5e","./logo.png":"cf05","./momo.png":"6bfa","./thumbnailFB.jpg":"3e56","./thumbnailGithub.jpg":"de91","./thumbnailLinkedin.jpg":"38af"};function a(t){var e=o(t);return i(e)}function o(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="1771"},"1ccf":function(t,e,i){"use strict";i("21d3")},"21d3":function(t,e,i){},2756:function(t,e,i){"use strict";i("f3f2")},"2d1c":function(t,e,i){"use strict";i("408c")},"38af":function(t,e,i){t.exports=i.p+"img/thumbnailLinkedin.ce638d2b.jpg"},"3e56":function(t,e,i){t.exports=i.p+"img/thumbnailFB.d03d703f.jpg"},"408c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"background-color",attrs:{id:"app"}},[i("div",{staticClass:"menu"},[i("XyzTransition",{attrs:{appear:"",xyz:"fade small duration-20"}},[i("div",[i("h1",[t._v("Huỳnh Bá Vinh")])])]),i("div",[i("XyzTransition",{staticClass:"item-group",attrs:{appear:"",xyz:"fade front-3 flip-down-50% duration-10 stagger-5 appear duration-20"}},[i("ul",[i("li",{staticClass:"item-group"},[i("router-link",{attrs:{to:{name:"hello"}}},[t._v(" About me! ")])],1),i("li",{staticClass:"item-group"},[i("router-link",{attrs:{to:{name:"social"}}},[t._v(" Me on Social ")])],1),i("li",{staticClass:"item-group"},[i("router-link",{attrs:{to:{name:"donate"}}},[t._v(" Tks for coffee :3 ")])],1)])])],1)],1),i("XyzTransition",{staticClass:"item-group",attrs:{appear:"",xyz:"fade down-100% back-5"}},[i("router-view")],1)],1)},o=[],s={name:"App"},r=s,c=(i("034f"),i("2877")),l=Object(c["a"])(r,a,o,!1,null,null,null),u=l.exports,f=i("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("div",{staticClass:"avatar-container"},[n("div",{staticClass:"box-shadow-for-overflow"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:i("1771")("./"+t.avatar)}}),n("div",{staticClass:"image-alt"},[n("h1",[t._v("VinhHB")]),n("div",{staticClass:"social"},[n("p",[t._v(" Follow Me At:")]),n("div",[n("a",{staticClass:"icon-social",attrs:{href:t.facebook,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n("a",{staticClass:"icon-social",attrs:{href:t.github,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),n("a",{staticClass:"icon-social",attrs:{href:t.linkedin,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])])])])]),n("XyzTransition",{attrs:{appear:"",xyz:"fade small duration-20"}},[n("div",{staticClass:"content"},[n("span",{staticClass:"big-word"},[t._v("Hello")]),n("h1",[t._v("Huỳnh Bá Vinh")]),n("span",{staticClass:"sub-title"},[t._v(" Software Engineer")]),n("p",[t._v("I'm Vinh, I'm 21yo, studying at VLU as a last-year student, and my major is Software Engineer. I'm interested in technology, coding, and motorcycles. "),n("br"),t._v(" It's my pleasure to be your friend ")])])])],1)},h=[],b={facebook:"https://www.facebook.com/toilabavinh/",github:"https://github.com/huynhbavinh",linkedin:"https://www.linkedin.com/in/toilabavinh1107/",momo:"https://me.momo.vn/huynhbavinhIsME"},p={data:function(){return{avatar:"avatar.jpg",facebook:b.facebook,github:b.github,linkedin:b.linkedin}}},m=p,v=(i("6b81"),Object(c["a"])(m,d,h,!1,null,"716ff0b4",null)),g=v.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"body"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"menu-vertical"},[i("XyzTransition",{attrs:{appear:"",xyz:"fade rotate-right ease-out-back duration-15"}},[i("h2",{staticClass:"btn-social",on:{click:t.showSubMenu}},[t._v(" Meet me on Social ")])]),t.show?i("ul",[i("XyzTransition",{attrs:{appear:"",xyz:"fade small duration-10"}},[i("li",[i("button-switch")],1)])],1):t._e()],1),i("div",{staticClass:"content"},[i("XyzTransition",{attrs:{appear:"",xyz:"fade small duration-10"}},[i("router-view")],1)],1)])])},w=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"button-flex list-social"},[t._m(0),i("div",{staticClass:"switch-toggle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.facebook,expression:"facebook"}],attrs:{type:"checkbox",id:"facebook"},domProps:{checked:Array.isArray(t.facebook)?t._i(t.facebook,null)>-1:t.facebook},on:{change:function(e){var i=t.facebook,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);n.checked?s<0&&(t.facebook=i.concat([o])):s>-1&&(t.facebook=i.slice(0,s).concat(i.slice(s+1)))}else t.facebook=a}}}),i("label",{attrs:{for:"facebook"}})])]),i("div",{staticClass:"button-flex list-social"},[t._m(1),i("div",{staticClass:"switch-toggle "},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.github,expression:"github"}],attrs:{type:"checkbox",id:"github"},domProps:{checked:Array.isArray(t.github)?t._i(t.github,null)>-1:t.github},on:{change:function(e){var i=t.github,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);n.checked?s<0&&(t.github=i.concat([o])):s>-1&&(t.github=i.slice(0,s).concat(i.slice(s+1)))}else t.github=a}}}),i("label",{attrs:{for:"github"}})])]),i("div",{staticClass:"button-flex list-social"},[t._m(2),i("div",{staticClass:"switch-toggle"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.linkedin,expression:"linkedin"}],attrs:{type:"checkbox",id:"linkedin"},domProps:{checked:Array.isArray(t.linkedin)?t._i(t.linkedin,null)>-1:t.linkedin},on:{change:function(e){var i=t.linkedin,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);n.checked?s<0&&(t.linkedin=i.concat([o])):s>-1&&(t.linkedin=i.slice(0,s).concat(i.slice(s+1)))}else t.linkedin=a}}}),i("label",{attrs:{for:"linkedin"}})])])])},A=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"switch-label"},[i("span",[t._v("Facebook")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"switch-label"},[i("span",[t._v("Github")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"switch-label"},[i("span",[t._v("Linkedin")])])}],_={data:function(){return{facebook:!1,github:!1,linkedin:!1}},updated:function(){this.selectOnlyone()},methods:{selectOnlyone:function(){this.facebook==this.github==this.linkedin==0&&this.$router.push({name:"social"}),this.facebook&&(this.github=!1,this.linkedin=!1,this.showFacebook()),this.github&&(this.linkedin=!1,this.facebook=!1,this.showGithub()),this.linkedin&&(this.github=!1,this.facebook=!1,this.showLinkedin())},showFacebook:function(){this.$router.push({name:"facebook"})},showGithub:function(){this.$router.push({name:"github"})},showLinkedin:function(){this.$router.push({name:"linkedin"})}}},C=_,x=(i("a3c6"),Object(c["a"])(C,y,A,!1,null,"e90d44a8",null)),j=x.exports,O={components:{buttonSwitch:j},data:function(){return{show:!1}},methods:{showSubMenu:function(){this.show=!this.show}}},E=O,L=(i("2d1c"),Object(c["a"])(E,k,w,!1,null,"1d114b20",null)),U=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("h2",[n("font-awesome-icon",{attrs:{icon:["fas","mug-hot"]}}),t._v(" Tks for your hot Coffee ")],1),n("div",{staticClass:"container-flex"},[n("figure",{staticClass:"snip0057 blue boder"},[n("figcaption",[t._m(0),n("p",[t._v(" That's the whole appreciate for me, thanks for your supporting, you can set-up a meeting if you want we can sit down and drink coffee together :3 ")]),n("div",{staticClass:"icons"},[n("a",{staticClass:"momo-btn",attrs:{href:t.momoLink,target:"_blank"}},[t._v(" Send the coffee! ")])])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:i("0a5e"),alt:"kiss me! moeee"}})]),n("div",{staticClass:"position"},[t._v("Huỳnh Bá Vinh")])])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",[t._v("Vinh "),i("span",[t._v("hb")])])}],T={data:function(){return{momoLink:b.momo}}},M=T,B=(i("9fbb"),Object(c["a"])(M,P,S,!1,null,"603605c4",null)),N=B.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("h1",[n("a",{attrs:{href:t.facebookLink,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}}),t._v("acebook ")],1)]),n("div",{staticClass:"content",staticStyle:{overflow:"auto"}},[n("div",{staticClass:"image"},[n("img",{attrs:{src:i("1771")("./"+t.facebook),alt:"huynhbavinh facebook"}})])])])},z=[],Z={data:function(){return{facebook:"thumbnailFB.jpg",facebookLink:b.facebook}}},G=Z,R=(i("1ccf"),Object(c["a"])(G,V,z,!1,null,"6d37fd7f",null)),Y=R.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("h1",[n("a",{attrs:{href:t.githubLink,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v("Github ")],1)]),n("div",{staticClass:"content",staticStyle:{overflow:"auto"}},[n("div",{staticClass:"image"},[n("img",{attrs:{src:i("1771")("./"+t.github),alt:"huynhbavinh-github"}})])])])},Q=[],J={data:function(){return{github:"thumbnailGithub.jpg",githubLink:b.github}}},D=J,X=(i("2756"),Object(c["a"])(D,H,Q,!1,null,"df777730",null)),F=X.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("h1",[n("a",{attrs:{href:t.linkedinLink,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}}),t._v("Linkedin ")],1)]),n("div",{staticClass:"content",staticStyle:{overflow:"auto"}},[n("div",{staticClass:"image"},[n("img",{attrs:{src:i("1771")("./"+t.linkedin),alt:"huynhbavinh-linkedin"}})])])])},I=[],q={data:function(){return{linkedin:"thumbnailLinkedin.jpg",linkedinLink:b.linkedin}}},W=q,$=(i("014e"),Object(c["a"])(W,K,I,!1,null,"0091862a",null)),tt=$.exports,et=[{path:"/",component:g,props:!0,name:"hello"},{path:"/social",component:U,props:!0,name:"social",children:[{path:"/social/facebook",component:Y,props:!0,name:"facebook"},{path:"/social/github",component:F,props:!0,name:"github"},{path:"/social/linkedin",component:tt,props:!0,name:"linkedin"}]},{path:"/donate",component:N,props:!0,name:"donate"}],it=et,nt=i("5496"),at=(i("bbf4"),i("ecee")),ot=i("ad3d"),st=i("f2d1"),rt=i("c074"),ct=i("5f35");at["c"].add(st["a"],st["b"],st["c"],rt["a"]),n["a"].component("font-awesome-icon",ot["a"]),n["a"].use(f["a"]),n["a"].use(nt["a"]),n["a"].config.productionTip=!1;var lt=new f["a"]({mode:"history",base:ct["publicPath"],routes:it});new n["a"]({render:function(t){return t(u)},router:lt}).$mount("#app")},"5f35":function(t,e,i){t.exports={publicPath:"/vinh-introduction/"}},"6b81":function(t,e,i){"use strict";i("875f")},"6bfa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARGSURBVFhH7Zl9TE1hHMfPvbrSy00RFdHVC6YwtlII4Sa5iXmdDZsxhnlLM+9vqT+8Z2xe/mD9aZO8lFqkZliSSCtqk1VkUZQUt7p+93l+J+fennNuaUd3+Oz07Pv7nd8959vzPOc5TzcFx3NNswVVj7Kx6so7fZ3R1up+YZFOY2nWSlDCj7V5AhRWMnZmGHvLCrHQW8HnV3mEj8aA45KHbaVi/puTVABVqc9zN1zGQARhPdB+HTFEbTkNd5+RvgODTpAxJa6x4hMGAswMCZEwxx5EVV/7LnkCwnP2qNR2GBAcNK4SngA4q7BhG2BndQVHUHUF3Yt4VITwrN2oxJlXehyVKQxb9kP6oeoG0v0khFnJsDUrZy8qQtP7zzAJOs4DmmzTt2JMmJEWi8qU9NDDtB6OB8vOYlYc9iAKqUjOQ8Wi+NQdVASlrQraeaXHaEi5E3LwW2UtBhxX86is8EgKBoTI3EOoeCzb+g0UNr1QEZqqP6PiKbt0HxXBdoAaFY8strrPv2RL39CMijDx8lpUPBEP96MiVN7IR8Uji61bY3aiIrhNHam9+ysT/eqonYczBoQnm5NQ8fyhQXT0HgjrEz2UvW0wK45ctmB9QmUJZqWMvdUZZ2I18g6itDOJs7LPLbg3HBUpTzHmuNIL92gSYxb/N81dwXJvRRUm2Dj2AVF8Iq3kTAZNBuya67cmDETL1+abo01WKSajYiJHbNRS/TL+RunFLKrFkLLF3An9qGvs7eKAgQCxucK8CEVieokOotjlmJ4AZr2EJ0DiLNuW9OXEMPtUZy4iViPXlO/8L8asZNjSZu1CxcNcZpjJKVc3oTLle00DrYfD0GKyz2bCsOWoGYCK8PpcJioWRUdvoyLY9neEVvcigYaU2vzy1KB9GHDcdb/tzTUNGBACTy9HxSPLIKrUxgWlnewFp1HxpAlcAp5zx6PikWtudZN/yZbZpFY5mXwJAGiWBqMi6OubUPHIYgsmNSqC7nm8qu8vZ84BnuMSlmBAuDXW/Nn/Q4OoK4iH9YkeYTdjMCuOXLY6LmliMCtl7K2MMMtf+1z3Y/ecjLYayz8me2/DgAVZ8dswMEXmuWUwwL1TRph/jQPPhPQo/xWbZoUS/+tBd11ie6/uw7AFu2H/7ZEggs6upJlZD/AVZjfIxUMbAMJrYRC0c/LjoHUN8RX+oQwvOPeZxpppyTgOsx8foELt4xaYuILqSUnroKU7b9oKYdiCfXrRsVRYYJz9PSEEkT75ELSg4faapSG0xlhKGBwxpv3GgM/K0OrMl1Bf86gMQhBpwQfoxwN2R3tGjaPJwrgUta9b5e0CCGuflUMrRGoQDW0GKrwWT/iQXQJCe3en+/RRNNmO9/JQ5mi2ftdTMXRBoP6L8fVSX1xFM4CDl2tD2Yemd3Vg8VPeG8zy9PCUH75+pn/snI5PpbU+iYveJqK0JpStBvY625Nw3E+fEF426/GE2QAAAABJRU5ErkJggg=="},7510:function(t,e,i){},"85ec":function(t,e,i){},"875f":function(t,e,i){},"915e":function(t,e,i){t.exports=i.p+"img/avatar.061fb1dd.jpg"},"9fbb":function(t,e,i){"use strict";i("d785")},a3c6:function(t,e,i){"use strict";i("7510")},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d785:function(t,e,i){},de91:function(t,e,i){t.exports=i.p+"img/thumbnailGithub.1e7c2c1e.jpg"},f3f2:function(t,e,i){},f9ef:function(t,e,i){}});
//# sourceMappingURL=app.bb0f7fcb.js.map