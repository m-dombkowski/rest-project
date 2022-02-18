const e={Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer c397113043321c1304d7fb3a759310dcc61e8ef3fd4b0040dad3eb74b185192f"},t=document.querySelector(".show-all-users"),n=(document.querySelector(".btn-deleteU"),document.querySelector(".create-user")),o=(document.querySelector("#spinner"),document.querySelector(".hello-section")),i=document.querySelector(".details-section"),a=document.querySelector(".user-details-container"),s=document.querySelector(".users-list"),c=document.querySelector(".user-list-section"),r=document.querySelector(".user-details-container"),l=document.querySelector(".user-forms-container"),d=(document.querySelector(".create-form"),document.querySelector(".edit-form"),document.querySelector(".main"),document.getElementsByClassName("close-icon"),document.querySelector(".user-posts-list")),u=document.querySelector(".response-message-modal"),p=(document.querySelector(".post-list-header-container"),document.querySelector(".footer")),m=function(e){return e.target.classList},f=function(e){return e.target.parentElement.parentElement.children},h=function(e){return e.target.parentElement.parentElement},v=function(e,t){for(let n=0;n<e.length;n++)if(e[n].classList.contains(t))return e[n].textContent},b=function(e,t){for(let n=0;n<e.length;n++)if(e[n].classList.contains(t))return e[n].id},y=function(){const e=c.children;for(let t=0;t<e.length;t++)e[t].classList.contains("post-list-header-container")&&e[t].parentNode.removeChild(e[t])},g=function(e){e.innerHTML=""},C=function(e,t,n){const o=e.data;for(const e of o)if(e.name===S(t,n))return e.id},S=function(e,t){return v(f(e),t)},q=function(e){const t=e.data;let n=[];if(0===t.length)return ee("User haven't posted anything yet!"),t;for(let e=0;e<t.length;e++)n.push(t[e]);return n},E=function(e){e.classList.add("hide")},k=function(e){e.classList.remove("hide")},$=function(e){const t=e.split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].slice(1);return t.join(" ")},L=function(){spinner.removeAttribute("hidden")},w=function(){spinner.setAttribute("hidden","")},A=function(e,t,n){200===e.status||201===e.status||204===e.status?ee(t):(ee(n),u.style.color="red")},T=async function(t){return(await fetch(`${t}/users`,{method:"GET",headers:e})).json()},x=function(e){const t=V("h2",["comment-name"],{},`${$(e.name)}`),n=V("div",["comment-name-container"]);return n.appendChild(t),n},j=function(e){const t=V("p",["comment-text"],{},`${e.body}`),n=V("div",["comment-text-container"]);return n.appendChild(t),n},N=function(e,t){e.data.forEach((e=>{e.id==function(e){return b(function(e){return e.target.parentElement.parentElement.parentElement.children}(e),"user-id")}(t)&&Z(e)}))},P=function(){L(),p&&E(p),T("https://gorest.co.in/public/v1").then((e=>{k(c),g(s),console.log(e),X(e),k(p),w()}))},D=function(t,n,o){L(),async function(t,n){return(await fetch(`${t}/posts/${n}/comments`,{method:"GET",headers:e})).json()}("https://gorest.co.in/public/v1",t.id).then((e=>{const t=e.data;0===t.length&&Q(),t.forEach((e=>{!function(e,t,n){const o=x(e),i=j(e),a=V("div",["comment-container"]);a.appendChild(o),a.appendChild(i),n.prepend(a)}(e,0,o)})),w()}))},G=function(e){const t=document.querySelector(`#${e}-name`).value,n=document.querySelector(`#${e}-email`).value,o=document.querySelector(`#${e}-gender`).value,i=document.querySelector(`#${e}-status`).value;return{name:$(t),email:n,gender:o,status:i}},U=function(){const e=V("h1",["create-comment-form-title"],{},"Create Comment!"),t=V("p",["create-comment-form-title-instruction"],{},"Please fill all of the boxes."),n=V("div",["create-comment-form-title-container"]);return n.appendChild(e),n.appendChild(t),n},M=function(e){const t=document.querySelector(".go-back-to-posts"),n=document.querySelector(".all-comments-container"),o=document.querySelector(".add-comment-button"),i=V("button",["go-back-comment"],{},"🠖");i.addEventListener("click",(function(i){i.preventDefault(),g(l),k(d),E(l),k(t),k(o),k(c),D(e,0,n)}));const a=V("div",["go-back-btn-container"]);return a.appendChild(i),a},O=function(){const e=V("input",["add-comment-name-input"],{placeholder:"Your name",type:"text"}),t=V("div",["add-comment-name-input-container"]);return t.appendChild(e),t},H=function(){const e=V("input",["add-comment-email-input"],{placeholder:"Your email address",type:"email"}),t=V("div",["add-comment-email-input-container"]);return t.appendChild(e),t},Y=function(){const e=V("textarea",["add-comment-message-input"],{placeholder:"Your message",type:"text"}),t=V("div",["add-comment-message-input-container"]);return t.appendChild(e),t},z=function(t){document.querySelector(".go-back-to-posts"),document.querySelector(".add-comment-button"),document.querySelector(".all-comments-container");const n=V("input",["add-comment-submit"],{type:"submit",value:"Add Comment!"});return n.addEventListener("click",(function(n){n.preventDefault(),async function(t,n,o){const i=await fetch(`${t}/posts/${n}/comments`,{method:"POST",headers:e,body:JSON.stringify(o)});return A(i,"Comment added!","There was an error, please try again."),i.json()}("https://gorest.co.in/public/v1",t.id,{name:document.querySelector(".add-comment-name-input").value,email:document.querySelector(".add-comment-email-input").value,body:document.querySelector(".add-comment-message-input").value}).then((()=>{g(l),g(d),y(),k(r),E(l)}))})),n},B=function(e){const t=v(f(e),"active-user-name");return V("p",["post-list-header-title"],{},`${t}'s posts`)},J=function(){const e=V("button",["go-back-to-details","post"],{title:"Go Back"},"🠖");return e.addEventListener("click",(function(){const e=document.querySelector(".post-list-header-container");g(d),E(d),k(r),e.parentNode.removeChild(e)})),e},F=function(e){return V("h1",["post-title"],{},`${e.title}`)},I=function(e){const t=V("p",["post-body"],{},`${e.body}`),n=V("div",["post-body-container"]);return n.appendChild(t),n},R=function(e){const t=V("button",["show-comments-button"],{},"💬");t.addEventListener("click",(function(n){const o=document.querySelectorAll(".post-container");document.querySelector(".button-container");L(),o.forEach((e=>{E(e),k(h(n)),E(t)}));const i=V("div",["comments-buttons-container"]),a=V("button",["go-back-to-posts"],{},"🠖");a.addEventListener("click",(function(e){const n=document.querySelectorAll(".comment-container"),c=document.querySelector(".no-comment-message");e.preventDefault(),E(a),k(t),E(s),n.forEach((e=>{e.parentNode.removeChild(e)})),o.forEach((e=>{k(e)})),c&&c.parentNode.removeChild(c),i.parentNode.removeChild(i)}));const s=V("button",["add-comment-button"],{},"📝");console.log(c),s.addEventListener("click",(function(t){const n=document.querySelectorAll(".comment-container"),o=document.querySelector(".no-comment-message");console.log(e),function(e){return v(f(e),"post-title")}(t)===e.title&&(n.forEach((e=>{E(e)})),E(c),function(e){const t=U(),n=M(e),o=O(),i=H(),a=Y(),s=z(e),c=V("form",["add-comment-form"],{alt:"background image of a mountain with forrest at it's feet"});c.appendChild(t),c.appendChild(n),c.appendChild(o),c.appendChild(i),c.appendChild(a),c.appendChild(s),l.appendChild(c)}(e),E(d),k(l),E(s),E(a),o&&o.parentNode.removeChild(o))})),D(e,0,function(e){const t=e.target.parentElement.parentElement.children;for(let e=0;e<t.length;e++)if(t[e].classList.contains("all-comments-container"))return t[e]}(n)),i.appendChild(a),i.appendChild(s),h(n).appendChild(i)}));const n=V("div",["button-container"]);return n.appendChild(t),n},K=function(){return V("div",["all-comments-container"])},Q=function(){const e=document.querySelector(".all-comments-container"),t=V("p",["no-comment-message"],{},"There are no comments yet! Click button bellow to add one 😉 !");e.appendChild(t)},V=function(e,t=[],n={},o=""){const i=document.createElement(e);t.length>0&&i.classList.add(...t);for(const[e,t]of Object.entries(n))i.setAttribute(e,t);return"string"==typeof o&&""!==o&&(i.textContent=o),i},W=function(e){let t=`\n    <li class="user">\n        <h2 class="user-name">${e.name}</h2>\n        <div class=user-id id=${e.id}></div>\n        <div class="user-buttons">\n          <button class="user-details" id=${e.id}" title="Check user details">\n            <p class="details-icon">📖</p>\n          </button>\n          <button class="delete-user" title="Delete user">&#10008;</button>\n        </div>\n    </li>`;s.insertAdjacentHTML("beforeend",t)},X=function(e){const t=e.data;for(let e=0;e<t.length;e++)W(t[e])},Z=function(e){let t=`\n  <div class="detailed-user-info">   \n    <div class="details-buttons">\n     <button class="go-back" title="Go Back">&#129046</button>\n     <button class="edit-user" title="Edit User Information">&#x270E</button>\n     </div>\n    <h2 class="active-user-name">${e.name}</h2>\n    <p class="active-user-email">E-mail: ${e.email}</p>\n    <p class="active-user-gender">Gender: ${e.gender}</p>\n    <p class="active-user-status">Status: ${e.status}</p>\n    <div class="posts">\n      <button class="add-post" title="Add Post">+</button>\n      <button class="get-user-posts" title="Show user posts">\t\n      &#128366;</button>\n    </div>    \n  </div>  `;r.insertAdjacentHTML("afterbegin",t)},_=function(e,t){q(e).forEach((e=>{!function(e){const t=F(e),n=I(e),o=R(e),i=K(),a=V("li",["post-container"]);d.appendChild(a),a.appendChild(t),a.appendChild(n),a.appendChild(o),a.appendChild(i)}(e)})),console.log(e),function(e){const t=B(e),n=J(),o=V("div",["post-list-header-container"]);o.appendChild(t),o.appendChild(n),c.prepend(o)}(t)},ee=function(e){const t=V("p",["response-message"],{},`${e}`);u.style.display="block",u.appendChild(t)},te=function(t){m(t).contains("submit")&&(t.preventDefault(),L(),async function(t,n){const o=await fetch(`${t}/users`,{method:"POST",headers:e,body:JSON.stringify(n)});return A(o,"User Created Successfully!","Couldn't create user, please check information provided and try again (Remember, there can't be more than 1 user with the same email address, and all information must be provided!)"),o.json()}("https://gorest.co.in/public/v1",G("create")).then((()=>{w(),P(),g(l),E(l),k(s)}))),m(t).contains("edit-submit")&&(t.preventDefault(),L(),T("https://gorest.co.in/public/v1").then((n=>{(async function(t,n,o){const i=await fetch(`${t}/users/${n}`,{method:"PUT",headers:e,body:JSON.stringify(o)});return A(i,"User details edited successfully!","There was an error, please check information provided and try again (Remember, there can't be more than 1 user with the same email address!)"),i.json()})("https://gorest.co.in/public/v1",C(n,t,"current-user-name"),G("edit")).then((()=>{w(),g(l),P(),k(s)}))}))),m(t).contains("go-back-to-details")&&(g(l),E(l),k(r))},ne=function(t,n){const o=h(n);t.data.forEach((t=>{(function(e){return b(f(e),"user-id")})(n)==t.id&&async function(t,n){const o=await fetch(`${t}/users/${n}`,{method:"DELETE",headers:e});A(o,"User deleted successfully","Couldn't delete user, please try again")}("https://gorest.co.in/public/v1",t.id)})),o.parentNode.removeChild(o)},oe=function(e){const t=V("button",["go-back-to-details"],{},"🠖");t.addEventListener("click",(function(){l.innerHTML="",E(l),k(r)}));const n=V("h1",["form-title"],{},`Add post as ${S(e,"active-user-name")}`),o=V("div",["form-title-container"]);return o.appendChild(t),o.appendChild(n),o},ie=function(){const e=V("form",["add-post-form"]),t=ae(),n=se(),o=ce();return e.appendChild(t),e.appendChild(n),e.appendChild(o),e},ae=function(){const e=V("input",["add-post-title-input"],{placeholder:"Your post title",type:"text",required:!0},""),t=V("div",["add-post-title-container"]);return t.appendChild(e),t},se=function(){const e=V("textarea",["add-post-message-input"],{placeholder:"Place for your message",type:"text",required:!0},""),t=V("div",["add-post-message-container"]);return t.appendChild(e),t},ce=function(){const t=V("input",["submit-post-button"],{type:"submit",value:"Add Post"});t.addEventListener("click",(function(t){t.preventDefault(),L(),T("https://gorest.co.in/public/v1").then((t=>{(async function(t,n,o){const i=await fetch(`${t}/users/${n}/posts`,{method:"POST",headers:e,body:JSON.stringify(o)});return A(i,"Post created!","There was an error, please try again."),i.json()})("https://gorest.co.in/public/v1",function(e){const t=document.querySelector(".form-title").textContent.split(" ").slice(3).join(" "),n=e.data;for(const e of n)if(e.name===t)return e.id}(t),{name:document.querySelector(".form-title").textContent.split(" ").slice(3).join(" "),title:document.querySelector(".add-post-title-input").value,body:document.querySelector(".add-post-message-input").value}).then((()=>{w(),l.textContent="",k(r),E(l)}))}))}));const n=V("input",["clear-form-button"],{type:"reset",value:"Clear Form"}),o=V("div",["form-buttons-container"]);return o.appendChild(t),o.appendChild(n),o},re=function(t){m(t).contains("edit-user")&&(E(r),k(l),function(e){let t=`\n  <form class="edit-form">  \n  <button class='go-back-to-details'>&#129046</button>\n      <p class="edit-user-title">Current user: </p> \n      <h2 class="current-user-name">${S(e,"active-user-name")}</h2>    \n    <div class="name-input">\n      <label class="edit-name-label" for="name">Name: </label></br>\n      <input type="text" id="edit-name" name="name" required size="10"> \n    </div>\n    <div class="email-input">\n      <label class="edit-email-label" for="email">Email: </label></br>\n      <input type="email" id="edit-email" required size="10"> \n    </div>\n    <div class="gender-select">\n      <label class="edit-gender-label" for="gender">Gender: </label> </br>\n      <select name="gender" id="edit-gender" required>\n        <option value="">--Please choose an option--</option>\n        <option value="female">Female &#9792</option>\n        <option value="male">Male &#9794</option>\n      </select>\n    </div>\n    <div class="status-select">\n      <label class="edit-status-label" for="status">Status: </label> </br>\n      <select name="status" id="edit-status" required>\n        <option value="">--Please choose an option--</option>\n        <option value="active">Active</option>\n        <option value="inactive">Inactive</option>\n      </select>\n    </div>\n    <div class="submit-container">\n      <input type="submit" class="edit-submit" value="Edit">\n    </div>\n  </form>\n  `;l.insertAdjacentHTML("afterbegin",t)}(t)),m(t).contains("add-post")&&(t.preventDefault(),k(l),E(r),function(e,t){const n=V("div",["add-post-form-container"]),o=oe(e),i=ie(t);n.appendChild(o),n.appendChild(i),l.appendChild(n)}(t)),m(t).contains("get-user-posts")&&(E(r),k(d),k(c),L(),T("https://gorest.co.in/public/v1").then((n=>{(async function(t,n){return(await fetch(`${t}/users/${n}/posts`,{method:"GET",headers:e})).json()})("https://gorest.co.in/public/v1",C(n,t,"active-user-name")).then((e=>{_(e,t),w(),console.log(e)}))})))};t.addEventListener("click",(function(){g(s),y(),E(o),P(),k(c),k(s),E(l),E(d),E(i),E(a),g(l),g(r),g(d)})),n.addEventListener("click",(function(){g(l),E(i),E(a),E(o),l.insertAdjacentHTML("afterbegin",'\n      \n     \n      <form class="create-form"> \n        <button class="go-back-create" title="Go Back">&#129046</button>  \n        <div class="create-form-title-container">\n          <p class="create-form-title">Create your own user! </br> Please, fill all of the boxes</p>\n        </div> \n        <div class="name-input">        \n          <label for="name" class="create-name-label">Name: </label>\n          <input type="text" id="create-name" name="name" placeholder="Your username" required size="10"> \n        </div>\n        <div class="email-input">\n          <label for="email" class=\'create-email-label\'>Email: </label>       \n          <input type="email" id="create-email" placeholder="Your email address" required size="10"> \n        </div>\n        <div class="gender-select"> \n          <label for="gender" class=\'create-gender-label\'>Gender: </label>      \n          <select name="gender" id="create-gender" required>\n            <option value="">Please choose an option</option>\n            <option value="female">Female &#9792</option>\n            <option value="male">Male &#9794</option>\n          </select>\n        </div>\n        <div class="status-select"> \n          <label for="status" class=\'create-status-label\'>Status: </label>        \n          <select name="status" id="create-status" required>\n            <option value="">Please choose an option</option>\n            <option value="active">Active</option>\n            <option value="inactive">Inactive</option>\n          </select>\n        </div>\n        <input type="submit" class="submit" value="Create User">\n      </form>\n   \n  '),k(l),E(s),g(r),E(c),E(p)})),l.addEventListener("click",(function(e){te(e)})),s.addEventListener("click",(function(e){!function(e){m(e).contains("details-icon")&&(E(s),E(p),L(),T("https://gorest.co.in/public/v1").then((t=>{spinner.setAttribute("hidden",""),N(t,e),w(),E(l),k(r),E(d),k(a),k(i)}))),m(e).contains("delete-user")&&T("https://gorest.co.in/public/v1").then((t=>{ne(t,e)}))}(e)})),r.addEventListener("click",(function(e){re(e)})),window.addEventListener("click",(function(e){!function(e){m(e).contains("go-back")&&(g(r),g(l),P(),k(s),E(r),E(l),w()),m(e).contains("go-back-create")&&(g(l),k(s),k(c),P(),E(l),w())}(e),function(e){const t=document.querySelector(".response-message");e.target==u&&(t.parentNode.removeChild(t),u.style.display="none")}(e)}));
//# sourceMappingURL=index.a4160439.js.map
