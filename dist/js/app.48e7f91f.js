(()=>{"use strict";var e={103:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var i=a(144),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"backgroundApp",attrs:{id:"app"}},[t("header",{attrs:{id:"nav"}},[t("NavLinks"),t("UserControls")],1),t("router-view"),t("Modal")],1)},r=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-links"},[t("router-link",{attrs:{to:{name:"main"},"active-class":"active-link"}},[e._v("All Recipes")]),t("router-link",{attrs:{to:{name:"about"},"active-class":"active-link"}},[e._v("About")]),t("router-link",{attrs:{to:{name:"search"},"active-class":"active-link"}},[e._v("Search")])],1)},o=[];const l={name:"NavLinks"},c=l;var u=a(1001),p=(0,u.Z)(c,n,o,!1,null,"29401ffd",null);const d=p.exports;var m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-controls"},[e.$root.store.username?t("span",{staticClass:"user-logged-in"},[t("button",{staticClass:"nav-button",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[e._v(" Create New Recipe ")]),t("div",{staticClass:"dropdown"},[t("a",{staticClass:"dropdown-toggle",attrs:{href:"#",role:"button"}},[e._v("Personal Area")]),t("div",{staticClass:"dropdown-content"},[t("router-link",{attrs:{to:{name:"favoriteRecipes"}}},[e._v("My favorite recipes")]),t("router-link",{attrs:{to:{name:"myRecipes"}}},[e._v("My recipes")]),t("router-link",{attrs:{to:{name:"familyRecipes"}}},[e._v("My family recipes")])],1)]),t("button",{staticClass:"log-button",on:{click:e.logout}},[e._v("Logout")])]):t("span",{staticClass:"guest-controls"},[t("router-link",{attrs:{to:{name:"register"}}},[t("b-button",{staticClass:"nav-button",attrs:{pill:"",variant:"outline-secondary"}},[e._v("Register")])],1),t("router-link",{attrs:{to:{name:"login"}}},[t("b-button",{staticClass:"nav-button",attrs:{pill:"",variant:"outline-secondary"}},[e._v("Login")])],1)],1)])},g=[];a(7658);const v={name:"UserControls",methods:{logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(t){console.error(t),e.$forceUpdate()}))}}},h=v;var f=(0,u.Z)(h,m,g,!1,null,"4ab53a74",null);const b=f.exports;a(9753),a(2222),a(7042);var y=function(){var e=this,t=e._self._c;return t("div",{ref:"recipeModal",staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[e._m(0),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:e.closeModal}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),t("div",{staticClass:"modal-body"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.saveChanges.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label",attrs:{for:"recipient-title"}},[e._v("Recipe's Name:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.title,expression:"recipeDetails.title"}],staticClass:"form-control",attrs:{type:"text",id:"recipient-title",required:""},domProps:{value:e.recipeDetails.title},on:{input:function(t){t.target.composing||e.$set(e.recipeDetails,"title",t.target.value)}}}),t("label",{staticClass:"col-form-label",attrs:{for:"recipient-image"}},[e._v("Image URL:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.image,expression:"recipeDetails.image"}],staticClass:"form-control",attrs:{type:"text",id:"recipient-image",placeholder:"https://example.example.com.jpg",required:""},domProps:{value:e.recipeDetails.image},on:{input:function(t){t.target.composing||e.$set(e.recipeDetails,"image",t.target.value)}}}),t("label",{staticClass:"col-form-label",attrs:{for:"recipient-readyInMinutes"}},[e._v("Preparation Time (minutes):")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.readyInMinutes,expression:"recipeDetails.readyInMinutes"}],staticClass:"form-control",attrs:{type:"number",id:"recipient-readyInMinutes",min:"1",step:"1",required:""},domProps:{value:e.recipeDetails.readyInMinutes},on:{input:function(t){t.target.composing||e.$set(e.recipeDetails,"readyInMinutes",t.target.value)}}}),t("label",{staticClass:"col-form-label",attrs:{for:"recipient-Instructions"}},[e._v("Instructions:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.Instructions,expression:"recipeDetails.Instructions"}],staticClass:"form-control",attrs:{type:"text",id:"recipient-Instructions"},domProps:{value:e.recipeDetails.Instructions},on:{input:function(t){t.target.composing||e.$set(e.recipeDetails,"Instructions",t.target.value)}}}),t("label",{staticClass:"col-form-label",attrs:{for:"recipient-servings"}},[e._v("Amount of Servings:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.servings,expression:"recipeDetails.servings"}],staticClass:"form-control",attrs:{type:"number",id:"recipient-servings",min:"1",step:"1",required:""},domProps:{value:e.recipeDetails.servings},on:{input:function(t){t.target.composing||e.$set(e.recipeDetails,"servings",t.target.value)}}}),t("div",{staticClass:"check-group"},[t("label",{staticClass:"form-check-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.vegetarian,expression:"recipeDetails.vegetarian"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.recipeDetails.vegetarian)?e._i(e.recipeDetails.vegetarian,null)>-1:e.recipeDetails.vegetarian},on:{change:function(t){var a=e.recipeDetails.vegetarian,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);i.checked?n<0&&e.$set(e.recipeDetails,"vegetarian",a.concat([r])):n>-1&&e.$set(e.recipeDetails,"vegetarian",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.recipeDetails,"vegetarian",s)}}}),e._v(" Vegetarian ")]),t("label",{staticClass:"form-check-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.vegan,expression:"recipeDetails.vegan"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.recipeDetails.vegan)?e._i(e.recipeDetails.vegan,null)>-1:e.recipeDetails.vegan},on:{change:function(t){var a=e.recipeDetails.vegan,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);i.checked?n<0&&e.$set(e.recipeDetails,"vegan",a.concat([r])):n>-1&&e.$set(e.recipeDetails,"vegan",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.recipeDetails,"vegan",s)}}}),e._v(" Vegan ")]),t("label",{staticClass:"form-check-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeDetails.glutenFree,expression:"recipeDetails.glutenFree"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.recipeDetails.glutenFree)?e._i(e.recipeDetails.glutenFree,null)>-1:e.recipeDetails.glutenFree},on:{change:function(t){var a=e.recipeDetails.glutenFree,i=t.target,s=!!i.checked;if(Array.isArray(a)){var r=null,n=e._i(a,r);i.checked?n<0&&e.$set(e.recipeDetails,"glutenFree",a.concat([r])):n>-1&&e.$set(e.recipeDetails,"glutenFree",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.recipeDetails,"glutenFree",s)}}}),e._v(" Gluten Free ")])])]),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:e.closeModal}},[e._v("Close")]),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Save changes")])])])])])])])},w=[function(){var e=this,t=e._self._c;return t("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t("b",[e._v("New Recipe")])])}];a(199),a(5352);function k(e){return{status:200,response:{data:{message:"The Recipe successfully saved as favorite",success:!0}}}}function C(e){return{status:200,response:{data:{message:"The Recipe successfully added to My Recipes",success:!0}}}}const _={data:function(){return{recipeDetails:{id:null,title:"",image:"",readyInMinutes:"",aggregateLikes:0,instructions:"",servings:"",vegetarian:!1,vegan:!1,glutenFree:!1}}},methods:{saveChanges:function(){if(this.recipeDetails.title&&this.recipeDetails.image&&this.recipeDetails.readyInMinutes&&this.recipeDetails.servings){var e=C(this.recipeDetails);e&&e.data&&e.data.success?(console.log(e.data.message),this.closeModal()):console.error("Failed to add recipe")}else alert("All fields must be filled out.")},closeModal:function(){this.recipeDetails={id:null,title:"",image:"",readyInMinutes:"",vegetarian:!1,vegan:!1,glutenFree:!1},this.$refs.recipeModal.hide()}}},S=_;var x=(0,u.Z)(S,y,w,!1,null,null,null);const I=x.exports,L={name:"App",components:{NavLinks:d,UserControls:b,Modal:I}},D=L;var F=(0,u.Z)(D,s,r,!1,null,null,null);const P=F.exports;var N=a(1939),R=a.n(N),T=a(9669),M=a.n(T),A=(a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-container"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticClass:"columns"},[t("div",{staticClass:"left-column"},[t("h2",[e._v("Explore This Recipe")]),t("RecipePreviewList",{staticClass:"RandomRecipes recipe-preview-list"})],1),t("div",{staticClass:"right-column"},[t("h2",[e._v("Last Watched Recipes")]),e.$root.store.username?t("div",[t("RecipePreviewList",{staticClass:"LastWatchedRecipes"})],1):t("div",[t("router-link",{attrs:{to:"/login"}},[t("b-button",{staticClass:"login-button",attrs:{pill:"",variant:"outline-secondary"}},[e._v(" You need to Login to view the last viewed recipes ")])],1)],1)])])])}),O=[],j=function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"card"},[t("h3",{staticClass:"title"},[e._v(" "+e._s(e.title)+": "),e._t("default")],2),e._l(e.recipes,(function(a){return t("b-col",{key:a.id},[t("RecipeCarousel",{staticClass:"recipeCarousel",attrs:{recipe:a}}),t("b-button",{staticClass:"refresh-button",attrs:{pill:"",variant:"outline-secondary"},on:{click:e.fetchRandomRecipes}},[e._v(" Show New Random Recipes ")])],1)}))],2)},Z=[],$=a(124),B=a(5957),E=a(8534),G=(a(1703),a(6647),function(){var e=this,t=e._self._c;return t("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[t("div",{staticClass:"carousel-inner"},e._l(e.carouselItems,(function(a,i){return t("div",{key:i,staticClass:"carousel-item",class:{active:0===i}},[t("div",{staticClass:"cards-wrapper"},e._l(a.cards,(function(e,a){return t("RecipePreview",{key:a,attrs:{card:e}})})),1)])})),0),e._m(0),e._m(1)])}),q=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[t("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"sr-only"},[e._v("Previous")])])},function(){var e=this,t=e._self._c;return t("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[t("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t("span",{staticClass:"sr-only"},[e._v("Next")])])}],U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"card"},[t("img",{staticClass:"card-img-top clickable-image",attrs:{src:e.card.image},on:{click:function(t){return e.navigateToRecipe(e.card.id)}}}),t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title",staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.card.title))]),t("p",{staticClass:"card-text"},[t("small",{staticClass:"text-muted"},[e._v("⏱️ Prep time: "+e._s(e.card.readyInMinutes))])]),e.card.vegan?t("p",{staticClass:"badge badge-success"},[e._v("🌿 Vegan")]):e._e(),e.card.vegetarian?t("p",{staticClass:"badge badge-warning"},[e._v("🥕 Vegetarian")]):e._e(),e.card.glutenFree?t("p",{staticClass:"badge badge-info"},[e._v("🚫 Gluten-Free")]):e._e(),e.card.viewed?t("p",{staticClass:"badge badge-secondary"},[e._v("👁️ Viewed")]):e._e()]),t("div",{staticClass:"card-footer bg-white"},[t("LikeButton",{attrs:{recipeId:e.card.id,initialLikes:e.card.aggregateLikes,initiallyLiked:e.card.aggregateLikes}}),e._v(" "),t("br"),t("FavoriteButton",{attrs:{recipeId:e.card.id,initiallyFavorited:e.isFavorite(e.card.recipeId)}})],1)])},z=[],V=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"wrapper"},[t("button",{staticClass:"like-button",class:{"is-active":e.liked},on:{click:e.toggleLike}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.liked,expression:"!liked"}],staticClass:"material-icons not-liked"},[e._v("favorite_border")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.liked,expression:"liked"}],staticClass:"material-icons is-liked"},[e._v("favorite")]),t("span",{staticClass:"like-overlay"})])]),t("span",{staticClass:"likes-text"},[e._v(e._s(e.likes)+" likes")])])},J=[];a(9653);const Y={name:"LikeButton",props:{recipeId:{type:Number,required:!0},initialLikes:{type:Number,required:!0},initiallyLiked:{type:Number,required:!0}},data:function(){return{likes:this.initialLikes,liked:this.initiallyLiked}},methods:{toggleLike:function(){this.liked?(this.likes--,this.liked=!1,localStorage.setItem("liked_".concat(this.recipeId),!1)):(this.likes++,this.liked=!0,localStorage.setItem("liked_".concat(this.recipeId),!0))}},created:function(){var e=localStorage.getItem("liked_".concat(this.recipeId));null!==e&&(this.liked=JSON.parse(e))}},H=Y;var Q=(0,u.Z)(H,V,J,!1,null,"a02c6144",null);const W=Q.exports;var K=function(){var e=this,t=e._self._c;return t("div",[t("button",{staticClass:"btn",class:{"btn-success":e.isFavorite},on:{click:e.toggleFavorite}},[t("i",{staticClass:"material-icons"},[e._v(e._s(e.isFavorite?"star":"star_border"))]),t("span",{staticClass:"like-overlay"})]),t("span",{staticClass:"fav-text"},[e._v(e._s(e.isFavorite?"Added to Favorites":"Add to Favorites"))])])},X=[];a(8862);const ee={name:"FavoriteButton",props:{recipeId:{type:Number,required:!0},initiallyFavorited:{type:Boolean,default:!0}},data:function(){return{isFavorite:this.initiallyFavorited}},methods:{toggleFavorite:function(){var e=this;return(0,E.Z)((0,$.Z)().mark((function t(){var a;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isFavorite=!e.isFavorite,t.prev=1,t.next=4,k(e.recipeId);case 4:a=t.sent,200===a.status&&a.response.data.success?(localStorage.setItem("favorite_".concat(e.recipeId),JSON.stringify(e.isFavorite)),e.$emit("updateFavorite",e.recipeId,e.isFavorite)):console.error("Failed to update favorite status"),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error("An error occurred while updating favorite status:",t.t0),e.isFavorite=!e.isFavorite;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},created:function(){var e=localStorage.getItem("favorite_".concat(this.recipeId));null!==e&&(this.isFavorite=JSON.parse(e))}},te=ee;var ae=(0,u.Z)(te,K,X,!1,null,"283a9b98",null);const ie=ae.exports,se={name:"RecipePreview",components:{LikeButton:W,FavoriteButton:ie},props:{card:{type:Object,required:!0}},methods:{navigateToRecipe:function(e){this.card.viewed=!0,localStorage.setItem("viewed_".concat(e),!0),this.$router.push({name:"RecipeViewPage",params:{recipeId:e}})},isFavorite:function(e){return JSON.parse(localStorage.getItem("favorite_".concat(e)))||!1}}},re=se;var ne=(0,u.Z)(re,U,z,!1,null,"fb49d42c",null);const oe=ne.exports;var le=a(9805);const ce={name:"RecipeCarousel",components:{RecipePreview:oe},props:{},data:function(){return{carouselItems:[]}},mounted:function(){var e=this;return(0,E.Z)((0,$.Z)().mark((function t(){return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadRecipes();case 2:case"end":return t.stop()}}),t)})))()},methods:{loadRecipes:function(){var e=this;return(0,E.Z)((0,$.Z)().mark((function t(){var a,i,s,r,n;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=6,i=(0,le.j)(a),s=i.data.recipes,r=3,e.carouselItems=[],n=0;n<s.length;n+=r)e.carouselItems.push({cards:s.slice(n,n+r)});case 6:case"end":return t.stop()}}),t)})))()}}},ue=ce;var pe=(0,u.Z)(ue,G,q,!1,null,"1e7cc751",null);const de=pe.exports,me={name:"RecipePreviewList",components:{RecipeCarousel:de},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.fetchRandomRecipes()},methods:{updateRecipes:function(){var e=this;return(0,E.Z)((0,$.Z)().mark((function t(){var a,i,s,r;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{i=1,s=(0,le.j)(i),e.recipes=s.data.recipes,console.log(s),r=s.data.recipes,console.log(r),e.recipes=[],(a=e.recipes).push.apply(a,(0,B.Z)(r))}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})))()},fetchRandomRecipes:function(){var e=this;return(0,E.Z)((0,$.Z)().mark((function t(){var a,i;return(0,$.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=2,i=(0,le.j)(3),e.recipes=e.getRandomSubset(i,a)}catch(s){console.error("Failed to fetch random recipes",s)}case 1:case"end":return t.stop()}}),t)})))()},getRandomSubset:function(e,t){var a=new Array(t),i=e.length,s=new Array(i);if(t>i)throw new RangeError("getRandomSubset: more elements taken than available");while(t--){var r=Math.floor(Math.random()*i);a[t]=e[r in s?s[r]:r],s[r]=--i in s?s[i]:i}return a}}},ge=me;var ve=(0,u.Z)(ge,j,Z,!1,null,"518fbefd",null);const he=ve.exports,fe={components:{RecipePreviewList:he}},be=fe;var ye=(0,u.Z)(be,A,O,!1,null,"6824fc32",null);const we=ye.exports;var ke=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},Ce=[],_e={},Se=(0,u.Z)(_e,ke,Ce,!1,null,null,null);const xe=Se.exports;var Ie=[{path:"/",name:"main",component:we},{path:"/register",name:"register",component:function(){return a.e(645).then(a.bind(a,645))}},{path:"/login",name:"login",component:function(){return a.e(349).then(a.bind(a,1349))}},{path:"/search",name:"search",component:function(){return a.e(887).then(a.bind(a,7887))}},{path:"/about",name:"about",component:function(){return a.e(425).then(a.bind(a,425))}},{path:"/recipe/:recipeId",name:"RecipeViewPage",component:function(){return a.e(893).then(a.bind(a,7893))}},{path:"*",name:"notFound",component:xe}];const Le=Ie;var De=a(8345),Fe=a(8620),Pe=(a(8702),a(7024),a(869)),Ne=a(3017),Re=a(508),Te=a(7563),Me=a(7419),Ae=a(1869),Oe=a(295),je=a(3090),Ze=a(794),$e=a(4063),Be=a(8793),Ee=a(7772);i["default"].use(De.ZP);var Ge=new De.ZP({routes:Le});[Re.E,Te.w6,Me.g,Ae.SY,Oe.xL,je.u3,Ze.v5,$e.F,Be.m$,Pe.XG7,Ee.A6,Ne.A7].forEach((function(e){return i["default"].use(e)})),i["default"].use(Fe.ZP),M().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),M().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i["default"].use(R(),M()),i["default"].config.productionTip=!1;var qe={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(qe),new i["default"]({router:Ge,data:function(){return{store:qe}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:i,autoHideDelay:3e3})}},render:function(e){return e(P)}}).$mount("#app")},9805:(e,t,a)=>{a.d(t,{i:()=>n,j:()=>r});a(7658);var i=a(199),s=a(5352);function r(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],a=s.length,i=0;i<e;i++){var r=Math.floor(Math.random()*a);t.push(s[r])}return{data:{recipes:t}}}function n(e){return{data:{recipe:i}}}},199:e=>{e.exports=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}')},5352:e=>{e.exports=JSON.parse('[{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":true,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."},{"id":555555,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":true,"glutenFree":false,"summary":"Noam meal!!!!!!!!!!"},{"id":9999999,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":true,"glutenFree":false,"summary":"Tomer meal!!!!!!!!!!"},{"id":11111,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":true,"glutenFree":false,"summary":"Tomer meal!!!!!!!!!!"}]')}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,a),r.exports}a.m=e,(()=>{var e=[];a.O=(t,i,s,r)=>{if(!i){var n=1/0;for(u=0;u<e.length;u++){for(var[i,s,r]=e[u],o=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](i[l])))?i.splice(l--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,s,r]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{349:"69ea778d",425:"4432204e",645:"ce9452d2",887:"227cd0f8",893:"51b64e2a"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{349:"c428b7e7",425:"2cd31206",645:"b806371f",887:"b5e053ea",893:"d4b996da"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(i,s,r,n)=>{if(e[i])e[i].push(s);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+r){o=p;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=i),e[i]=[s];var d=(t,a)=>{o.onerror=o.onload=null,clearTimeout(m);var s=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((e=>e(a))),t)return t(a)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,i,s)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=a=>{if(r.onerror=r.onload=null,"load"===a.type)i();else{var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=o,r.parentNode&&r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=n,r.href=t,a?a.parentNode.insertBefore(r,a.nextSibling):document.head.appendChild(r),r},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var n=document.getElementsByTagName("style");for(i=0;i<n.length;i++){s=n[i],r=s.getAttribute("data-href");if(r===e||r===t)return s}},i=i=>new Promise(((s,r)=>{var n=a.miniCssF(i),o=a.p+n;if(t(n,o))return s();e(i,o,null,s,r)})),s={143:0};a.f.miniCss=(e,t)=>{var a={349:1,425:1,645:1,887:1,893:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=i(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,i)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var r=new Promise(((a,i)=>s=e[t]=[a,i]));i.push(s[2]=r);var n=a.p+a.u(t),o=new Error,l=i=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,s[1](o)}};a.l(n,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var s,r,[n,o,l]=i,c=0;if(n.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(t&&t(i);c<n.length;c++)r=n[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},i=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[998],(()=>a(103)));i=a.O(i)})();
//# sourceMappingURL=app.48e7f91f.js.map