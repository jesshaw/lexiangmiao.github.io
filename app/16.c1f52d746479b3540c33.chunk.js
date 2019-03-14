(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{FH5R:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-8"},[t.userAccount?a("form",{attrs:{name:"editForm",role:"form",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.save()}}},[a("h2",{attrs:{id:"myUserLabel"},domProps:{textContent:t._s(t.$t("userManagement.home.createOrEditLabel"))}},[t._v("\n                Create or edit a User\n            ")]),t._v(" "),a("div",[a("div",{staticClass:"form-group",attrs:{hidden:!t.userAccount.id}},[a("label",{domProps:{textContent:t._s(t.$t("global.field.id"))}},[t._v("ID")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userAccount.id,expression:"userAccount.id"}],staticClass:"form-control",attrs:{type:"text",name:"id",readonly:""},domProps:{value:t.userAccount.id},on:{input:function(e){e.target.composing||t.$set(t.userAccount,"id",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",domProps:{textContent:t._s(t.$t("userManagement.login"))}},[t._v("Login")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.userAccount.login.$model,expression:"$v.userAccount.login.$model"}],staticClass:"form-control",class:{valid:!t.$v.userAccount.login.$invalid,invalid:t.$v.userAccount.login.$invalid},attrs:{type:"text",name:"login",required:"",minlength:"1",maxlength:"50"},domProps:{value:t.$v.userAccount.login.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.userAccount.login,"$model",e.target.value)}}}),t._v(" "),t.$v.userAccount.login.$anyDirty&&t.$v.userAccount.login.$invalid?a("div",[t.$v.userAccount.login.required?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("entity.validation.required"))}},[t._v("\n                            This field is required.\n                        ")]),t._v(" "),t.$v.userAccount.login.maxLength?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("entity.validation.maxlength"))}},[t._v("\n                            This field cannot be longer than 50 characters.\n                        ")]),t._v(" "),t.$v.userAccount.login.pattern?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("entity.validation.patternLogin"))}},[t._v("\n                            This field can only contain letters, digits and e-mail addresses.\n                        ")])]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"firstName"},domProps:{textContent:t._s(t.$t("userManagement.firstName"))}},[t._v("First Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.userAccount.firstName.$model,expression:"$v.userAccount.firstName.$model"}],staticClass:"form-control",class:{valid:!t.$v.userAccount.firstName.$invalid,invalid:t.$v.userAccount.firstName.$invalid},attrs:{type:"text",id:"firstName",name:"firstName",placeholder:t.$t("settings.form['firstname.placeholder']"),maxlength:"50"},domProps:{value:t.$v.userAccount.firstName.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.userAccount.firstName,"$model",e.target.value)}}}),t._v(" "),t.$v.userAccount.firstName.$anyDirty&&t.$v.userAccount.firstName.$invalid?a("div",[t.$v.userAccount.firstName.maxLength?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("entity.validation.maxlength"))}},[t._v("\n                            Your first name cannot be longer than 50 characters.\n                        ")])]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"lastName"},domProps:{textContent:t._s(t.$t("userManagement.lastName"))}},[t._v("Last Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.userAccount.lastName.$model,expression:"$v.userAccount.lastName.$model"}],staticClass:"form-control",class:{valid:!t.$v.userAccount.lastName.$invalid,invalid:t.$v.userAccount.lastName.$invalid},attrs:{type:"text",id:"lastName",name:"lastName",placeholder:t.$t("settings.form['lastname.placeholder']"),maxlength:"50"},domProps:{value:t.$v.userAccount.lastName.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.userAccount.lastName,"$model",e.target.value)}}}),t._v(" "),t.$v.userAccount.lastName.$anyDirty&&t.$v.userAccount.lastName.$invalid?a("div",[t.$v.userAccount.lastName.maxLength?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("entity.validation.maxlength"))}},[t._v("\n                            Your last name cannot be longer than 50 characters.\n                        ")])]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-control-label",attrs:{for:"email"},domProps:{textContent:t._s(t.$t("userManagement.email"))}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.userAccount.email.$model,expression:"$v.userAccount.email.$model"}],staticClass:"form-control",class:{valid:!t.$v.userAccount.email.$invalid,invalid:t.$v.userAccount.email.$invalid},attrs:{type:"email",id:"email",name:"email",placeholder:t.$t("global.form['email.placeholder']"),minlength:"5",maxlength:"254",email:"",required:""},domProps:{value:t.$v.userAccount.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.userAccount.email,"$model",e.target.value)}}}),t._v(" "),t.$v.userAccount.email.$anyDirty&&t.$v.userAccount.email.$invalid?a("div",[t.$v.userAccount.email.required?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("global.messages.validate.email.required"))}},[t._v("\n                            Your email is required.\n                        ")]),t._v(" "),t.$v.userAccount.email.email?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("global.messages.validate.email.invalid"))}},[t._v("\n                            Your email is invalid.\n                        ")]),t._v(" "),t.$v.userAccount.email.minLength?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("global.messages.validate.email.minlength"))}},[t._v("\n                            Your email is required to be at least 5 characters.\n                        ")]),t._v(" "),t.$v.userAccount.email.maxLength?t._e():a("small",{staticClass:"form-text text-danger",domProps:{textContent:t._s(t.$t("global.messages.validate.email.maxlength"))}},[t._v("\n                            Your email cannot be longer than 100 characters.\n                        ")])]):t._e()]),t._v(" "),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label",attrs:{for:"activated"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userAccount.activated,expression:"userAccount.activated"}],staticClass:"form-check-input",attrs:{disabled:null===t.userAccount.id,type:"checkbox",id:"activated",name:"activated"},domProps:{checked:Array.isArray(t.userAccount.activated)?-1<t._i(t.userAccount.activated,null):t.userAccount.activated},on:{change:function(e){var a=t.userAccount.activated,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=t._i(a,null);n.checked?i<0&&t.$set(t.userAccount,"activated",a.concat([null])):-1<i&&t.$set(t.userAccount,"activated",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.userAccount,"activated",s)}}}),t._v(" "),a("span",{domProps:{textContent:t._s(t.$t("userManagement.activated"))}},[t._v("Activated")])])]),t._v(" "),t.languages&&0<Object.keys(t.languages).length?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"langKey"},domProps:{textContent:t._s(t.$t("userManagement.langKey"))}},[t._v("Language")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.userAccount.langKey,expression:"userAccount.langKey"}],staticClass:"form-control",attrs:{id:"langKey",name:"langKey"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userAccount,"langKey",e.target.multiple?a:a[0])}}},t._l(t.languages,function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(t._s(e.name))])}),0)]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{domProps:{textContent:t._s(t.$t("userManagement.profiles"))}},[t._v("Profiles")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.userAccount.authorities,expression:"userAccount.authorities"}],staticClass:"form-control",attrs:{multiple:"",name:"authority"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.userAccount,"authorities",e.target.multiple?a:a[0])}}},t._l(t.authorities,function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])}),0)])]),t._v(" "),a("div",[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.previousState()}}},[a("font-awesome-icon",{attrs:{icon:"ban"}}),t._v(" "),a("span",{domProps:{textContent:t._s(t.$t("entity.action.cancel"))}},[t._v("Cancel")])],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.$v.userAccount.$invalid||t.isSaving}},[a("font-awesome-icon",{attrs:{icon:"save"}}),t._v(" "),a("span",{domProps:{textContent:t._s(t.$t("entity.action.save"))}},[t._v("Save")])],1)])]):t._e()])])};n._withStripped=!0;var s=a("mrSG"),i=a("ta7f"),r=a("YKMj"),o=function(t,e,a,n,s,i,r,o,l,c,u,m,v){this.id=t,this.login=e,this.firstName=a,this.lastName=n,this.email=s,this.activated=i,this.langKey=r,this.authorities=o,this.createdBy=l,this.createdDate=c,this.lastModifiedBy=u,this.lastModifiedDate=m,this.password=v},l={userAccount:{login:{required:i.required,minLength:Object(i.minLength)(1),maxLength:Object(i.maxLength)(254),loginValidator:function(t){return null==t||""===t||/^[_.@A-Za-z0-9-]*$/.test(t)}},firstName:{maxLength:Object(i.maxLength)(50)},lastName:{maxLength:Object(i.maxLength)(50)},email:{required:i.required,email:i.email,minLength:Object(i.minLength)(5),maxLength:Object(i.maxLength)(254)}}},c=function(t){function e(){var e=t.call(this)||this;return e.isSaving=!1,e.authorities=[],e.languages=e.$store.getters.languages,e.userAccount=new o,e.userAccount.authorities=[],e}return s.c(e,t),e.prototype.beforeRouteEnter=function(t,e,a){a(function(e){e.initAuthorities(),t.params.userId&&e.init(t.params.userId)})},e.prototype.initAuthorities=function(){var t=this;this.userManagementService().retrieveAuthorities().then(function(e){t.authorities=e.data})},e.prototype.init=function(t){var e=this;this.userManagementService().get(t).then(function(t){e.userAccount=t.data})},e.prototype.previousState=function(){this.$router.go(-1)},e.prototype.save=function(){var t=this;this.isSaving=!0,this.userAccount.id?this.userManagementService().update(this.userAccount).then(function(e){t.returnToList(),t.alertService().showAlert(t.getMessageFromHeader(e),"info")}):this.userManagementService().create(this.userAccount).then(function(e){t.returnToList(),t.alertService().showAlert(t.getMessageFromHeader(e),"success")})},e.prototype.returnToList=function(){this.isSaving=!1,this.$router.go(-1)},e.prototype.getMessageFromHeader=function(t){return this.$t(t.headers["x-webusinessapp-alert"],{param:t.headers["x-webusinessapp-params"]})},s.b([Object(r.b)("alertService"),s.d("design:type",Function)],e.prototype,"alertService",void 0),s.b([Object(r.b)("userService"),s.d("design:type",Function)],e.prototype,"userManagementService",void 0),s.b([Object(r.a)({validations:l}),s.d("design:paramtypes",[])],e)}(r.d),u=a("KHd+"),m=Object(u.a)(c,n,[],!1,null,null,null);m.options.__file="src/main/webapp/app/admin/user-management/user-management-edit.vue",e.default=m.exports}}]);
//# sourceMappingURL=16.c1f52d746479b3540c33.chunk.js.map