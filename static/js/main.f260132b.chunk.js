(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},2:function(e,t,n){e.exports={contactForm:"contactForm_contactForm__2PvQZ",submit_form:"contactForm_submit_form__1Zals",input:"contactForm_input__niVbo"}},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=n(11),i=n(3),l=n(4),m=n(6),s=n(5);var b=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,t&&r.a.createElement("h2",null,t),n)},h=n(9),f=n.n(h),d=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t},r.a.createElement("span",null,a," : ",c),r.a.createElement("button",{type:"button",className:f.a.onDelete,onClick:function(){return n(t)}},"Delete"))})))},p=n(10),v=n(2),C=n.n(v),E=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state.name,e.state.number),e.setState({name:""}),e.setState({number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:C.a.contactForm,onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("p",{className:C.a.input},"Name"),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,name:"name",required:!0})),r.a.createElement("p",{className:C.a.input},"Namber"),r.a.createElement("input",{type:"tel",value:n,onChange:this.handleChange,name:"number",required:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:C.a.submit_form},"Add contact"))}}]),n}(a.Component);function g(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"TaskEditor-input",value:t,onChange:function(e){return n(e.target.value)}}))}var j=n(1),O=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:Object(j.uuid)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(j.uuid)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(j.uuid)(),name:"Eden Clements",number:"645-17-79"},{id:Object(j.uuid)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t,n){var a={id:Object(j.uuid)(),name:t,number:n},r=e.state.contacts.map((function(e){return e.name})).includes(t);e.setState((function(e){if(!r)return{contacts:[].concat(Object(u.a)(e.contacts),[a])};alert("\u0418\u043c\u044f ".concat(t," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"))}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return r.a.createElement(b,{title:"Phonebook"},r.a.createElement(E,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(g,{value:e,onChangeFilter:this.changeFilter}),t.length>0&&r.a.createElement(d,{contacts:t,onRemoveContact:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(O,null),document.querySelector("#root"))},9:function(e,t,n){e.exports={onDelete:"contactList_onDelete__1ZJrs"}}},[[12,1,2]]]);
//# sourceMappingURL=main.f260132b.chunk.js.map