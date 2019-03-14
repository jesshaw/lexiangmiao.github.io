(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"J+f9":function(s,r,e){"use strict";e.r(r);var t=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8 toastify-container"},[s.account?e("h2",{attrs:{id:"password-title"}},[e("span",{domProps:{innerHTML:s._s(s.$t("password.title",{username:s.username}))}},[s._v(">Password for ["),e("b",[s._v(s._s(s.username))]),s._v("]")])]):s._e(),s._v(" "),s.success?e("div",{staticClass:"alert alert-success",attrs:{role:"alert"},domProps:{innerHTML:s._s(s.$t("password.messages.success"))}},[e("strong",[s._v("Password changed!")])]):s._e(),s._v(" "),s.error?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"},domProps:{innerHTML:s._s(s.$t("password.messages.error"))}},[e("strong",[s._v("An error has occurred!")]),s._v(" The password could not be changed.\n            ")]):s._e(),s._v(" "),s.doNotMatch?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"},domProps:{textContent:s._s(s.$t("global.messages.error.dontmatch"))}},[s._v("\n                The password and its confirmation do not match!\n            ")]):s._e(),s._v(" "),e("form",{attrs:{name:"form",role:"form",id:"password-form"},on:{submit:function(r){return r.preventDefault(),s.changePassword()}}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label",attrs:{for:"currentPassword"},domProps:{textContent:s._s(s.$t("global.form.currentpassword"))}},[s._v("Current password")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.$v.resetPassword.currentPassword.$model,expression:"$v.resetPassword.currentPassword.$model"}],staticClass:"form-control",class:{valid:!s.$v.resetPassword.currentPassword.$invalid,invalid:s.$v.resetPassword.currentPassword.$invalid},attrs:{type:"password",id:"currentPassword",name:"currentPassword",placeholder:s.$t("global.form['currentpassword.placeholder']"),required:""},domProps:{value:s.$v.resetPassword.currentPassword.$model},on:{input:function(r){r.target.composing||s.$set(s.$v.resetPassword.currentPassword,"$model",r.target.value)}}}),s._v(" "),s.$v.resetPassword.currentPassword.$anyDirty&&s.$v.resetPassword.currentPassword.$invalid?e("div",[s.$v.resetPassword.currentPassword.required?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.newpassword.required"))}},[s._v("\n                            Your password is required.\n                        ")])]):s._e()]),s._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label",attrs:{for:"newPassword"},domProps:{textContent:s._s(s.$t("global.form.newpassword"))}},[s._v("New password")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.$v.resetPassword.newPassword.$model,expression:"$v.resetPassword.newPassword.$model"}],staticClass:"form-control",class:{valid:!s.$v.resetPassword.newPassword.$invalid,invalid:s.$v.resetPassword.newPassword.$invalid},attrs:{type:"password",id:"newPassword",name:"newPassword",placeholder:s.$t("global.form['newpassword.placeholder']"),minlength:"4",maxlength:"50",required:""},domProps:{value:s.$v.resetPassword.newPassword.$model},on:{input:function(r){r.target.composing||s.$set(s.$v.resetPassword.newPassword,"$model",r.target.value)}}}),s._v(" "),s.$v.resetPassword.newPassword.$anyDirty&&s.$v.resetPassword.newPassword.$invalid?e("div",[s.$v.resetPassword.newPassword.required?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.newpassword.required"))}},[s._v("\n                            Your password is required.\n                        ")]),s._v(" "),s.$v.resetPassword.newPassword.minLength?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.newpassword.minlength"))}},[s._v("\n                            Your password is required to be at least 4 characters.\n                        ")]),s._v(" "),s.$v.resetPassword.newPassword.maxLength?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.newpassword.maxlength"))}},[s._v("\n                            Your password cannot be longer than 50 characters.\n                        ")])]):s._e()]),s._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label",attrs:{for:"confirmPassword"},domProps:{textContent:s._s(s.$t("global.form.confirmpassword"))}},[s._v("New password confirmation")]),s._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.$v.resetPassword.confirmPassword.$model,expression:"$v.resetPassword.confirmPassword.$model"}],staticClass:"form-control",class:{valid:!s.$v.resetPassword.confirmPassword.$invalid,invalid:s.$v.resetPassword.confirmPassword.$invalid},attrs:{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:s.$t("global.form['confirmpassword.placeholder']"),minlength:"4",maxlength:"50",required:""},domProps:{value:s.$v.resetPassword.confirmPassword.$model},on:{input:function(r){r.target.composing||s.$set(s.$v.resetPassword.confirmPassword,"$model",r.target.value)}}}),s._v(" "),s.$v.resetPassword.confirmPassword.$anyDirty&&s.$v.resetPassword.confirmPassword.$invalid?e("div",[s.$v.resetPassword.confirmPassword.required?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.confirmpassword.required"))}},[s._v("\n                            Your confirmation password is required.\n                        ")]),s._v(" "),s.$v.resetPassword.confirmPassword.minLength?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.confirmpassword.minlength"))}},[s._v("\n                            Your confirmation password is required to be at least 4 characters.\n                        ")]),s._v(" "),s.$v.resetPassword.confirmPassword.maxLength?s._e():e("small",{staticClass:"form-text text-danger",domProps:{textContent:s._s(s.$t("global.messages.validate.confirmpassword.maxlength"))}},[s._v("\n                            Your confirmation password cannot be longer than 50 characters.\n                        ")])]):s._e()]),s._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s.$v.resetPassword.$invalid},domProps:{textContent:s._s(s.$t("password.form.button"))}},[s._v("Save")])])])])])};t._withStripped=!0;var a=e("mrSG"),o=e("ta7f"),n=e("vDqi"),d=e.n(n),i=e("L2JU"),l=e("Zdk5"),c=e.n(l),w=e("YKMj"),m={resetPassword:{currentPassword:{required:o.required},newPassword:{required:o.required,minLength:Object(o.minLength)(4),maxLength:Object(o.maxLength)(254)},confirmPassword:{required:o.required,minLength:Object(o.minLength)(4),maxLength:Object(o.maxLength)(254)}}},u=function(s){function r(){var r=null!==s&&s.apply(this,arguments)||this;return r.success=null,r.error=null,r.doNotMatch=null,r.resetPassword={currentPassword:null,newPassword:null,confirmPassword:null},r}return a.c(r,s),r.prototype.changePassword=function(){var s=this;this.resetPassword.newPassword!==this.resetPassword.confirmPassword?(this.error=null,this.success=null,this.doNotMatch="ERROR"):(this.doNotMatch=null,d.a.post("api/account/change-password",{currentPassword:this.resetPassword.currentPassword,newPassword:this.resetPassword.newPassword}).then(function(){s.success="OK",s.error=null}).catch(function(){s.success=null,s.error="ERROR"}))},Object.defineProperty(r.prototype,"username",{get:function(){return this.$store.getters.account?this.$store.getters.account.login:""},enumerable:!0,configurable:!0}),a.b([c()({validations:m,computed:a.a({},Object(i.b)(["account"]))})],r)}(w.d),v=e("KHd+"),P=Object(v.a)(u,t,[],!1,null,null,null);P.options.__file="src/main/webapp/app/account/change-password/change-password.vue",r.default=P.exports}}]);
//# sourceMappingURL=5.c1f52d746479b3540c33.chunk.js.map