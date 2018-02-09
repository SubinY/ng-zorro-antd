webpackJsonp([29],{"+PAa":function(l,n){l.exports="import {Component} from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'nz-demo-collapse-basic',\r\n  template: `\r\n    <nz-collapseset>\r\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\"\r\n                   [nzDisabled]=\"panel.disabled\">\r\n        <p>{{panel.name}}\u5185\u5bb9</p>\r\n      </nz-collapse>\r\n    </nz-collapseset>\r\n  `,\r\n  styles: []\r\n})\r\nexport class NzDemoCollapseBasicComponent {\r\n  panels = [\r\n    {\r\n      active: true,\r\n      name: 'This is panel header 1',\r\n      disabled: false,\r\n      childPanel: [\r\n        {\r\n          active: false,\r\n          name: 'This is panel header 1-1'\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: true,\r\n      name: 'This is panel header 2'\r\n    },\r\n    {\r\n      active: true,\r\n      disabled: false,\r\n      name: 'This is panel header 3'\r\n    }\r\n  ];\r\n}\r\n"},ArLt:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'nz-demo-collapse-custom',\r\n  template: `\r\n    <nz-collapseset [nzBordered]=\"false\">\r\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\"\r\n                   [ngStyle]=\"panel.customStyle\">\r\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\r\n      </nz-collapse>\r\n    </nz-collapseset>\r\n  `,\r\n  styles: []\r\n})\r\nexport class NzDemoCollapseCustomComponent {\r\n  panels = [\r\n    {\r\n      active: true,\r\n      disabled: false,\r\n      name: 'This is panel header 1',\r\n      customStyle: {\r\n        'background': '#f7f7f7',\r\n        'border-radius': '4px',\r\n        'margin-bottom': '24px',\r\n        'border': '0px'\r\n      }\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: true,\r\n      name: 'This is panel header 2',\r\n      customStyle: {\r\n        'background': '#f7f7f7',\r\n        'border-radius': '4px',\r\n        'margin-bottom': '24px',\r\n        'border': '0px'\r\n      }\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: false,\r\n      name: 'This is panel header 3',\r\n      customStyle: {\r\n        'background': '#f7f7f7',\r\n        'border-radius': '4px',\r\n        'margin-bottom': '24px',\r\n        'border': '0px'\r\n      }\r\n    }\r\n  ];\r\n}\r\n"},KG6z:function(l,n){l.exports="import {Component, OnInit} from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'nz-demo-collapse-nest',\r\n  template: `\r\n    <nz-collapseset>\r\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\r\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\r\n        <div *ngIf=\"panel.childPanel&&panel.childPanel.length>0\">\r\n          <nz-collapseset>\r\n            <nz-collapse *ngFor=\"let childPanel of panel.childPanel\" [nzTitle]=\"childPanel.name\"\r\n                         [nzActive]=\"childPanel.active\">\r\n              <p>{{childPanel.name}} \u7684\u5185\u5bb9</p>\r\n            </nz-collapse>\r\n          </nz-collapseset>\r\n        </div>\r\n      </nz-collapse>\r\n    </nz-collapseset>\r\n  `,\r\n  styles: []\r\n})\r\nexport class NzDemoCollapseNestComponent {\r\n  panels = [\r\n    {\r\n      active: true,\r\n      disabled: false,\r\n      name: 'This is panel header 1',\r\n      childPanel: [\r\n        {\r\n          active: true,\r\n          name: 'This is panel header 1-1'\r\n        },\r\n        {\r\n          active: false,\r\n          name: 'This is panel header 1-2'\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: true,\r\n      name: 'This is panel header 2'\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: false,\r\n      name: 'This is panel header 3'\r\n    }\r\n  ];\r\n}\r\n"},RXka:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),a=function(){},t=u("XQ86"),o=u("94s6"),i=u("QYLS"),r=u("sVuO"),s=u("WKJP"),c=u("9Q3e"),_=u("4e8C"),p=u("g3ta"),d=u("QJaU"),m=u("HzDP"),f=u("88JB"),z=u("d0SC"),b=u("Un6q"),h=u("Z29M"),v=u("yUkG"),g=e._5({encapsulation:2,styles:[],data:{animation:[{type:7,name:"collapseState",definitions:[{type:0,name:"inactive",styles:{type:6,styles:{opacity:"0",height:0},offset:null},options:void 0},{type:0,name:"active",styles:{type:6,styles:{opacity:"1",height:"*"},offset:null},options:void 0},{type:1,expr:"inactive => active",animation:{type:4,styles:null,timings:"150ms ease-in"},options:null},{type:1,expr:"active => inactive",animation:{type:4,styles:null,timings:"150ms ease-out"},options:null}],options:{}}]}});function x(l){return e._31(0,[(l()(),e._29(0,null,["\n        ","\n      "]))],null,function(l,n){l(n,0,0,n.component.nzTitle)})}function T(l){return e._31(0,[(l()(),e._29(-1,null,["\n        "])),e._19(null,0),(l()(),e._29(-1,null,["\n      "]))],null,null)}function C(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,9,"div",[["class","ant-collapse-header"],["role","tab"]],[[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.clickHeader(u)&&e),e},null,null)),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(3,0,null,null,0,"i",[["class","arrow"]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n      "])),(l()(),e._2(16777216,null,null,1,null,x)),e._6(6,16384,null,0,b.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._29(-1,null,["\n      "])),(l()(),e._2(16777216,null,null,1,null,T)),e._6(9,16384,null,0,b.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(12,0,null,null,8,"div",[],[[24,"@collapseState",0]],null,null,null,null)),e._6(13,278528,null,0,b.k,[e.r,e.s,e.l,e.D],{ngClass:[0,"ngClass"]},null),e._24(14,{"ant-collapse-content":0,"ant-collapse-content-status-active":1,"ant-collapse-contents-status-inactive":2}),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(16,0,null,null,3,"div",[["class","ant-collapse-content-box"]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),e._19(null,1),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,6,0,u.nzTitle),l(n,9,0,!u.nzTitle),l(n,13,0,l(n,14,0,!0,u._active,!u._active))},function(l,n){var u=n.component;l(n,1,0,u._active),l(n,12,0,u._active?"active":"inactive")})}var y=e._5({encapsulation:2,styles:[['\n\n.ant-collapse{background-color:#f7f7f7;border-radius:4px;border:1px solid #d9d9d9;border-bottom:0}.ant-collapse>.ant-collapse-item{border-bottom:1px solid #d9d9d9}.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:0 0 4px 4px}.ant-collapse>.ant-collapse-item>.ant-collapse-header{line-height:22px;padding:8px 0 8px 32px;color:rgba(0,0,0,.85);cursor:pointer;position:relative;-webkit-transition:all .3s;transition:all .3s}.ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow{font-size:12px;font-size:9px\\9;-webkit-transform:scale(.75) rotate(0);transform:scale(.75) rotate(0);\n  -ms-filter:"progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=1, M12=0, M21=0, M22=1)";zoom:1;font-style:normal;vertical-align:baseline;text-align:center;text-transform:none;line-height:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;color:rgba(0,0,0,.43);display:inline-block;font-weight:700;line-height:40px;vertical-align:top;-webkit-transition:-webkit-transform .24s;transition:-webkit-transform .24s;transition:transform .24s;transition:transform .24s,-webkit-transform .24s;top:0;left:16px}:root .ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow{-webkit-filter:none;filter:none;font-size:12px}.ant-collapse>.ant-collapse-item>.ant-collapse-header .arrow:before{display:block;font-family:anticon!important;content:"\\E61F"}.ant-collapse-anim-active{-webkit-transition:height .2s cubic-bezier(.215,.61,.355,1);transition:height .2s cubic-bezier(.215,.61,.355,1)}.ant-collapse-content{overflow:hidden;color:rgba(0,0,0,.65);padding:0 16px;background-color:#fff}.ant-collapse-content>.ant-collapse-content-box{padding-top:16px;padding-bottom:16px}.ant-collapse-content-inactive{display:none}.ant-collapse-item:last-child>.ant-collapse-content{border-radius:0 0 4px 4px}.ant-collapse>.ant-collapse-item>.ant-collapse-header[aria-expanded=true] .arrow{display:inline-block;font-size:12px;font-size:9px\\9;-webkit-transform:scale(.75) rotate(90deg);transform:scale(.75) rotate(90deg);\n  -ms-filter:"progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.00000000000000006123, M12=-1, M21=1, M22=0.00000000000000006123)";zoom:1}:root .ant-collapse>.ant-collapse-item>.ant-collapse-header[aria-expanded=true] .arrow{-webkit-filter:none;filter:none;font-size:12px}.ant-collapse-borderless{background-color:#fff;border:0}.ant-collapse-borderless>.ant-collapse-item:last-child,.ant-collapse-borderless>.ant-collapse-item:last-child .ant-collapse-header{border-radius:0}.ant-collapse-borderless>.ant-collapse-item-active{border:0}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content{background-color:transparent;border-top:1px solid #d9d9d9}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-header{-webkit-transition:all .3s;transition:all .3s}.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-header:hover{background-color:#f7f7f7}.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header,.ant-collapse .ant-collapse-item-disabled>.ant-collapse-header>.arrow{cursor:not-allowed;color:rgba(0,0,0,.25);background-color:#f7f7f7}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:active{background-color:#eee}'],["nz-collapse{display:block}"]],data:{}});function k(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,3,"div",[["class","ant-collapse"]],[[2,"ant-collapse-borderless",null]],null,null,null,null)),(l()(),e._29(-1,null,["\n      "])),e._19(null,0),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],null,function(l,n){l(n,1,0,!n.component.nzBordered)})}var P=function(){this.panels=[{active:!0,name:"This is panel header 1",disabled:!1,childPanel:[{active:!1,name:"This is panel header 1-1"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!0,disabled:!1,name:"This is panel header 3"}]},A=e._5({encapsulation:2,styles:[],data:{}});function D(l){return e._31(0,[(l()(),e._7(0,0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzDisabled:[1,"nzDisabled"],nzActive:[2,"nzActive"]},null),(l()(),e._29(-1,1,["\n        "])),(l()(),e._7(3,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(4,null,["","\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.disabled,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function w(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,5,"nz-collapseset",[],null,null,null,k,y)),e._6(2,49152,null,0,v.a,[],null,null),(l()(),e._29(-1,0,["\n      "])),(l()(),e._2(16777216,null,0,1,null,D)),e._6(5,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){l(n,5,0,n.component.panels)},null)}var M=function(){this.panels=[{active:!0,name:"This is panel header 1",childPanel:[{active:!1,name:"This is panel header 1-1"}]},{active:!1,name:"This is panel header 2"},{active:!1,name:"This is panel header 3"}]},F=e._5({encapsulation:2,styles:[],data:{}});function O(l){return e._31(0,[(l()(),e._7(0,0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),e._29(-1,1,["\n        "])),(l()(),e._7(3,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(4,null,[""," \u7684\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function S(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,5,"nz-collapseset",[["nzAccordion",""]],null,null,null,k,y)),e._6(2,49152,null,0,v.a,[],{nzAccordion:[0,"nzAccordion"]},null),(l()(),e._29(-1,0,["\n      "])),(l()(),e._2(16777216,null,0,1,null,O)),e._6(5,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,""),l(n,5,0,u.panels)},null)}var N=function(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",childPanel:[{active:!0,name:"This is panel header 1-1"},{active:!1,name:"This is panel header 1-2"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!1,disabled:!1,name:"This is panel header 3"}]},B=e._5({encapsulation:2,styles:[],data:{}});function $(l){return e._31(0,[(l()(),e._7(0,0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),e._29(-1,1,["\n              "])),(l()(),e._7(3,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(4,null,[""," \u7684\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n            "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function I(l){return e._31(0,[(l()(),e._7(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(2,0,null,null,5,"nz-collapseset",[],null,null,null,k,y)),e._6(3,49152,null,0,v.a,[],null,null),(l()(),e._29(-1,0,["\n            "])),(l()(),e._2(16777216,null,0,1,null,$)),e._6(6,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n          "])),(l()(),e._29(-1,null,["\n        "]))],function(l,n){l(n,6,0,n.parent.context.$implicit.childPanel)},null)}function L(l){return e._31(0,[(l()(),e._7(0,0,null,null,8,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),e._29(-1,1,["\n        "])),(l()(),e._7(3,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(4,null,[""," \u7684\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n        "])),(l()(),e._2(16777216,null,1,1,null,I)),e._6(7,16384,null,0,b.m,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e._29(-1,1,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active),l(n,7,0,n.context.$implicit.childPanel&&n.context.$implicit.childPanel.length>0)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function G(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,5,"nz-collapseset",[],null,null,null,k,y)),e._6(2,49152,null,0,v.a,[],null,null),(l()(),e._29(-1,0,["\n      "])),(l()(),e._2(16777216,null,0,1,null,L)),e._6(5,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){l(n,5,0,n.component.panels)},null)}var j=function(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",childPannel:[{active:!1,disabled:!0,name:"This is panel header 1-1"}]},{active:!1,disabled:!0,name:"This is panel header 2"},{active:!1,disabled:!1,name:"This is panel header 3"}]},Q=e._5({encapsulation:2,styles:[],data:{}});function q(l){return e._31(0,[(l()(),e._7(0,0,null,null,5,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),(l()(),e._29(-1,1,["\n        "])),(l()(),e._7(3,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(4,null,[""," \u7684\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,4,0,n.context.$implicit.name)})}function K(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,5,"nz-collapseset",[],null,null,null,k,y)),e._6(2,49152,null,0,v.a,[],{nzBordered:[0,"nzBordered"]},null),(l()(),e._29(-1,0,["\n      "])),(l()(),e._2(16777216,null,0,1,null,q)),e._6(5,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,!1),l(n,5,0,u.panels)},null)}var U=function(){this.panels=[{active:!0,disabled:!1,name:"This is panel header 1",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}},{active:!1,disabled:!0,name:"This is panel header 2",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}},{active:!1,disabled:!1,name:"This is panel header 3",customStyle:{background:"#f7f7f7","border-radius":"4px","margin-bottom":"24px",border:"0px"}}]},R=e._5({encapsulation:2,styles:[],data:{}});function Z(l){return e._31(0,[(l()(),e._7(0,0,null,null,6,"nz-collapse",[],[[2,"ant-collapse-item",null],[2,"ant-collapse-item-disabled",null]],null,null,C,g)),e._6(1,49152,null,0,h.a,[v.a,e.l],{nzTitle:[0,"nzTitle"],nzActive:[1,"nzActive"]},null),e._6(2,278528,null,0,b.p,[e.s,e.l,e.D],{ngStyle:[0,"ngStyle"]},null),(l()(),e._29(-1,1,["\n        "])),(l()(),e._7(4,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),e._29(5,null,[""," \u7684\u5185\u5bb9"])),(l()(),e._29(-1,1,["\n      "]))],function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.active),l(n,2,0,n.context.$implicit.customStyle)},function(l,n){l(n,0,0,!0,e._20(n,1).nzDisabled),l(n,5,0,n.context.$implicit.name)})}function H(l){return e._31(0,[(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(1,0,null,null,5,"nz-collapseset",[],null,null,null,k,y)),e._6(2,49152,null,0,v.a,[],{nzBordered:[0,"nzBordered"]},null),(l()(),e._29(-1,0,["\n      "])),(l()(),e._2(16777216,null,0,1,null,Z)),e._6(5,802816,null,0,b.l,[e.P,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._29(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,!1),l(n,5,0,u.panels)},null)}var J=function(){return function(){this.NzDemoCollapseBasicCode=u("+PAa"),this.NzDemoCollapseNestCode=u("KG6z"),this.NzDemoCollapseAccordionCode=u("YycQ"),this.NzDemoCollapseBorderCode=u("uE0U"),this.NzDemoCollapseCustomCode=u("ArLt")}}(),V=e._5({encapsulation:2,styles:[[""]],data:{}});function Y(l){return e._31(0,[(l()(),e._7(0,0,null,null,266,"article",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n  "])),(l()(),e._7(2,0,null,null,31,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),e._7(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e._29(-1,null,["Collapse \u6298\u53e0\u9762\u677f"])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(6,0,null,null,22,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),e._7(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u53ef\u4ee5\u6298\u53e0/\u5c55\u5f00\u7684\u5185\u5bb9\u533a\u57df\u3002"])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(10,0,null,null,4,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),e._7(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n\n      "])),(l()(),e._7(16,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(18,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e._7(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u5bf9\u590d\u6742\u533a\u57df\u8fdb\u884c\u5206\u7ec4\u548c\u9690\u85cf\uff0c\u4fdd\u6301\u9875\u9762\u7684\u6574\u6d01\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(22,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e._7(23,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e._7(24,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u624b\u98ce\u7434"])),(l()(),e._29(-1,null,[" \u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6298\u53e0\u9762\u677f\uff0c\u53ea\u5141\u8bb8\u5355\u4e2a\u5185\u5bb9\u533a\u57df\u5c55\u5f00\u3002"])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(30,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),e._7(32,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n  "])),(l()(),e._29(-1,null,["\n  "])),(l()(),e._7(35,0,null,null,71,"div",[["nz-row",""]],null,null,null,p.b,p.a)),e._6(36,114688,null,0,d.a,[e.l,e.D],{nzGutter:[0,"nzGutter"]},null),(l()(),e._29(-1,0,["\n    "])),(l()(),e._7(38,0,null,0,67,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),e._6(39,606208,null,0,m.a,[e.l,[2,d.a],e.D],{nzSpan:[0,"nzSpan"]},null),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(41,0,null,null,11,"nz-code-box",[["id","components-collapse-demo-basic"]],null,null,null,f.b,f.a)),e._6(42,114688,null,0,z.a,[b.d,e.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(44,0,null,0,1,"nz-demo-collapse-basic",[["demo",""]],null,null,null,w,A)),e._6(45,49152,null,0,P,[],null,null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(47,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(49,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u53ef\u4ee5\u540c\u65f6\u5c55\u5f00\u591a\u4e2a\u9762\u677f\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u9ed8\u8ba4\u5c55\u5f00\u4e86\u7b2c\u4e00\u4e2a\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(54,0,null,null,11,"nz-code-box",[["id","components-collapse-demo-accordion"]],null,null,null,f.b,f.a)),e._6(55,114688,null,0,z.a,[b.d,e.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(57,0,null,0,1,"nz-demo-collapse-accordion",[["demo",""]],null,null,null,S,F)),e._6(58,49152,null,0,M,[],null,null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(60,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(62,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u624b\u98ce\u7434\uff0c\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2atab\u3002\u9ed8\u8ba4\u6253\u5f00\u7b2c\u4e00\u4e2a\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(67,0,null,null,11,"nz-code-box",[["id","components-collapse-demo-nest"]],null,null,null,f.b,f.a)),e._6(68,114688,null,0,z.a,[b.d,e.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(70,0,null,0,1,"nz-demo-collapse-nest",[["demo",""]],null,null,null,G,B)),e._6(71,49152,null,0,N,[],null,null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(73,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(75,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u5d4c\u5957\u6298\u53e0\u9762\u677f\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(80,0,null,null,11,"nz-code-box",[["id","components-collapse-demo-border"]],null,null,null,f.b,f.a)),e._6(81,114688,null,0,z.a,[b.d,e.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(83,0,null,0,1,"nz-demo-collapse-border",[["demo",""]],null,null,null,K,Q)),e._6(84,49152,null,0,j,[],null,null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(86,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(88,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u4e00\u5957\u6ca1\u6709\u8fb9\u6846\u7684\u7b80\u6d01\u6837\u5f0f\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(93,0,null,null,11,"nz-code-box",[["id","components-collapse-demo-custom"]],null,null,null,f.b,f.a)),e._6(94,114688,null,0,z.a,[b.d,e.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(96,0,null,0,1,"nz-demo-collapse-custom",[["demo",""]],null,null,null,H,R)),e._6(97,49152,null,0,U,[],null,null),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(99,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(101,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u81ea\u5b9a\u4e49\u5404\u4e2a\u9762\u677f\u7684\u80cc\u666f\u8272\u3001\u5706\u89d2\u548c\u8fb9\u8ddd\u3002"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,0,["\n  "])),(l()(),e._29(-1,null,["\n  "])),(l()(),e._7(108,0,null,null,157,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(110,0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),e._7(111,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._29(-1,null,["API"])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(116,0,null,null,4,"h3",[["id","nz-collapseset"]],null,null,null,null,null)),(l()(),e._7(117,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nz-collapseset"])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(122,0,null,null,52,"table",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(124,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(126,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(128,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u53c2\u6570"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(131,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u8bf4\u660e"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(134,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u7c7b\u578b"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(137,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(142,0,null,null,31,"tbody",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(144,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(146,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nzBordered"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(149,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u662f\u5426\u6709\u8fb9\u6846"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(152,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["Boolean"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(155,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["true"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(159,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(161,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nzAccordion"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(164,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u662f\u5426\u662f\u624b\u98ce\u7434\u7c7b\u578b"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(167,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["Boolean"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["false"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(176,0,null,null,4,"h3",[["id","Collapse.Panel"]],null,null,null,null,null)),(l()(),e._7(177,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nz-collapse"])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._7(182,0,null,null,82,"table",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(184,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(186,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(188,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u53c2\u6570"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(191,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u8bf4\u660e"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(194,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u7c7b\u578b"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(197,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._7(202,0,null,null,61,"tbody",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(204,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(206,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nzTitle"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(209,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u9762\u677f\u5934\u5185\u5bb9"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(212,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["String"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(215,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["-"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(219,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(221,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nzActive"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(224,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u5f53\u524dtab\u662f\u5426\u88ab\u9009\u4e2d"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(227,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["Boolean"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(230,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["false"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(234,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(236,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["nzDisabled"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(239,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u5f53\u524dtab\u662f\u5426\u7981\u6b62\u9009\u4e2d"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(242,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["Boolean"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(245,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["false"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._7(249,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(251,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["[collapse-title]"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(254,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u4e0enzTitle\u4e8c\u9009\u4e00\uff0c\u5b9a\u4e49\u9762\u677f\u5934\u5185\u5bb9"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(257,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["ng-content"])),(l()(),e._29(-1,null,["\n          "])),(l()(),e._7(260,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e._29(-1,null,["\u65e0"])),(l()(),e._29(-1,null,["\n        "])),(l()(),e._29(-1,null,["\n      "])),(l()(),e._29(-1,null,["\n    "])),(l()(),e._29(-1,null,["\n  "])),(l()(),e._29(-1,null,["\n"])),(l()(),e._29(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,36,0,8),l(n,39,0,24),l(n,42,0,"\u6298\u53e0\u9762\u677f",u.NzDemoCollapseBasicCode),l(n,55,0,"\u624b\u98ce\u7434",u.NzDemoCollapseAccordionCode),l(n,68,0,"\u9762\u677f\u5d4c\u5957",u.NzDemoCollapseNestCode),l(n,81,0,"\u7b80\u6d01\u98ce\u683c",u.NzDemoCollapseBorderCode),l(n,94,0,"\u81ea\u5b9a\u4e49\u9762\u677f",u.NzDemoCollapseCustomCode)},function(l,n){l(n,38,0,e._20(n,39).paddingLeft,e._20(n,39).paddingRight)})}var E=e._3("nz-demo-collapse",J,function(l){return e._31(0,[(l()(),e._7(0,0,null,null,1,"nz-demo-collapse",[],null,null,null,Y,V)),e._6(1,49152,null,0,J,[],null,null)],null,null)},{},{},[]),X=u("7rz8"),W=u("PqOC"),ll=u("md/V"),nl=u("0nO6"),ul=u("l6RC"),el=u("V8+5"),al=u("4jwp"),tl=u("OFGE"),ol=u("7bMD"),il=u("71yQ"),rl=u("jhj7"),sl=u("ppgG"),cl=u("Hjq/"),_l=u("hNpP"),pl=u("f42N"),dl=u("AKwh"),ml=u("LTvz"),fl=u("v3Ml"),zl=u("KvRT"),bl=u("fFfs"),hl=u("CZgk"),vl=u("ICnb"),gl=u("nQgM"),xl=u("AMM9"),Tl=u("x9cu"),Cl=u("Abwc"),yl=u("Gb4R"),kl=u("ATGq"),Pl=u("rMvC"),Al=u("PIhm"),Dl=u("G5xS"),wl=u("tGoV"),Ml=u("Bd7q"),Fl=u("+dpF"),Ol=u("t6og"),Sl=u("0oag"),Nl=u("0MmT"),Bl=u("0SjK"),$l=u("UWIb"),Il=u("FP9i"),Ll=u("8zAG"),Gl=u("OtIO"),jl=u("V5qy"),Ql=u("BGFw"),ql=u("qa79"),Kl=u("DJ6J"),Ul=u("A6WS"),Rl=u("nGV/"),Zl=u("4I7f"),Hl=u("LLhl"),Jl=u("+35O"),Vl=u("TRYS"),Yl=u("NGUZ"),El=u("Cjk6"),Xl=u("6eTp"),Wl=u("pORy"),ln=u("aQzP"),nn=u("LpTC"),un=u("YeNB"),en=u("x7DS"),an=u("//KT"),tn=u("h8LI"),on=u("1OKL"),rn=u("Pgvs"),sn=u("UHIZ"),cn=function(){},_n=u("jlvU"),pn=u("ZgIK"),dn=u("mQB5"),mn=u("9rok");u.d(n,"NzDemoCollapseModuleNgFactory",function(){return fn});var fn=e._4(a,[],function(l){return e._16([e._17(512,e.k,e.Z,[[8,[t.a,o.a,i.a,r.a,s.a,c.a,_.a,E]],[3,e.k],e.w]),e._17(5120,X.b,X.a,[[3,X.b],X.c]),e._17(5120,W.b,W.a,[[3,W.b],ll.a,X.b]),e._17(4608,b.o,b.n,[e.t,[2,b.w]]),e._17(4608,nl.u,nl.u,[]),e._17(6144,ul.b,null,[b.d]),e._17(4608,ul.c,ul.c,[[2,ul.b]]),e._17(4608,el.a,el.a,[]),e._17(5120,al.c,al.a,[[3,al.c],e.y,el.a]),e._17(5120,al.f,al.e,[[3,al.f],el.a,e.y]),e._17(4608,tl.g,tl.g,[al.c,al.f,e.y]),e._17(5120,tl.d,tl.h,[[3,tl.d],b.d]),e._17(4608,tl.l,tl.l,[al.f,b.d]),e._17(5120,tl.e,tl.k,[[3,tl.e],b.d]),e._17(4608,tl.c,tl.c,[tl.g,tl.d,e.k,tl.l,tl.e,e.g,e.q,e.y,b.d]),e._17(5120,tl.i,tl.j,[tl.c]),e._17(4608,ol.a,ol.a,[]),e._17(4608,il.a,il.a,[e.g,e.k,W.b]),e._17(4608,rl.a,rl.a,[]),e._17(4608,sl.b,sl.b,[]),e._17(5120,e.d,function(l,n){return[cl.b(l,n)]},[b.d,[2,_l.a]]),e._17(5120,pl.a,pl.b,[b.d,[3,pl.a]]),e._17(512,dl.a,dl.a,[]),e._17(512,ml.a,ml.a,[]),e._17(512,b.c,b.c,[]),e._17(512,fl.a,fl.a,[]),e._17(512,zl.a,zl.a,[]),e._17(512,bl.a,bl.a,[]),e._17(512,nl.s,nl.s,[]),e._17(512,nl.i,nl.i,[]),e._17(512,ul.a,ul.a,[]),e._17(512,hl.c,hl.c,[]),e._17(512,el.b,el.b,[]),e._17(512,al.b,al.b,[]),e._17(512,tl.f,tl.f,[]),e._17(512,vl.a,vl.a,[]),e._17(512,gl.a,gl.a,[]),e._17(512,xl.a,xl.a,[]),e._17(512,Tl.a,Tl.a,[]),e._17(512,Cl.a,Cl.a,[]),e._17(512,yl.a,yl.a,[]),e._17(512,kl.a,kl.a,[]),e._17(512,Pl.a,Pl.a,[]),e._17(512,Al.a,Al.a,[]),e._17(512,Dl.a,Dl.a,[]),e._17(512,wl.a,wl.a,[]),e._17(512,Ml.a,Ml.a,[]),e._17(512,Fl.a,Fl.a,[]),e._17(512,Ol.a,Ol.a,[]),e._17(512,Sl.a,Sl.a,[]),e._17(512,Nl.a,Nl.a,[]),e._17(512,Bl.a,Bl.a,[]),e._17(512,$l.a,$l.a,[]),e._17(512,Il.a,Il.a,[]),e._17(512,Ll.a,Ll.a,[]),e._17(512,Gl.a,Gl.a,[]),e._17(512,jl.a,jl.a,[]),e._17(512,Ql.a,Ql.a,[]),e._17(512,ql.a,ql.a,[]),e._17(512,Kl.a,Kl.a,[]),e._17(512,sl.c,sl.c,[]),e._17(512,Ul.a,Ul.a,[]),e._17(512,Rl.a,Rl.a,[]),e._17(512,Zl.a,Zl.a,[]),e._17(512,Hl.a,Hl.a,[]),e._17(512,Jl.a,Jl.a,[]),e._17(512,Vl.a,Vl.a,[]),e._17(512,Yl.a,Yl.a,[]),e._17(131584,cl.a,cl.a,[b.d,e.q,e.k]),e._17(512,El.a,El.a,[]),e._17(512,Xl.a,Xl.a,[]),e._17(512,Wl.a,Wl.a,[]),e._17(512,ln.a,ln.a,[]),e._17(512,nn.a,nn.a,[]),e._17(512,un.a,un.a,[]),e._17(512,en.a,en.a,[]),e._17(512,an.a,an.a,[]),e._17(512,tn.a,tn.a,[]),e._17(512,on.a,on.a,[]),e._17(512,rn.a,rn.a,[]),e._17(512,sn.o,sn.o,[[2,sn.t],[2,sn.l]]),e._17(512,cn,cn,[]),e._17(512,_n.a,_n.a,[]),e._17(512,pn.a,pn.a,[]),e._17(512,a,a,[]),e._17(256,X.c,!1,[]),e._17(256,ll.a,ml.b,[]),e._17(256,dn.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e._17(256,mn.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[]),e._17(1024,sn.j,function(){return[[{path:"",component:J}]]},[])])})},YycQ:function(l,n){l.exports="import {Component} from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'nz-demo-collapse-accordion',\r\n  template: `\r\n    <nz-collapseset nzAccordion>\r\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\r\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\r\n      </nz-collapse>\r\n    </nz-collapseset>\r\n  `,\r\n  styles: []\r\n})\r\nexport class NzDemoCollapseAccordionComponent {\r\n  panels = [\r\n    {\r\n      active: true,\r\n      name: 'This is panel header 1',\r\n      childPanel: [\r\n        {\r\n          active: false,\r\n          name: 'This is panel header 1-1'\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      active: false,\r\n      name: 'This is panel header 2'\r\n    },\r\n    {\r\n      active: false,\r\n      name: 'This is panel header 3'\r\n    }\r\n  ];\r\n}\r\n"},uE0U:function(l,n){l.exports="import {Component} from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'nz-demo-collapse-border',\r\n  template: `\r\n    <nz-collapseset [nzBordered]=\"false\">\r\n      <nz-collapse *ngFor=\"let panel of panels\" [nzTitle]=\"panel.name\" [nzActive]=\"panel.active\">\r\n        <p>{{panel.name}} \u7684\u5185\u5bb9</p>\r\n      </nz-collapse>\r\n    </nz-collapseset>\r\n  `,\r\n  styles: []\r\n})\r\nexport class NzDemoCollapseBorderComponent {\r\n  panels = [\r\n    {\r\n      active: true,\r\n      disabled: false,\r\n      name: 'This is panel header 1',\r\n      childPannel: [\r\n        {\r\n          active: false,\r\n          disabled: true,\r\n          name: 'This is panel header 1-1'\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: true,\r\n      name: 'This is panel header 2'\r\n    },\r\n    {\r\n      active: false,\r\n      disabled: false,\r\n      name: 'This is panel header 3'\r\n    }\r\n  ];\r\n}\r\n"}});