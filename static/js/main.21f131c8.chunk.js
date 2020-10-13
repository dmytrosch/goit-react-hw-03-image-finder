(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,a,t){e.exports={App:"App_App__1pJxV"}},15:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__160Ej"}},16:function(e,a,t){e.exports={Button:"Button_Button__1k58L"}},18:function(e,a,t){e.exports={Loader:"Loader_Loader__2eVRG"}},19:function(e,a,t){e.exports=t(48)},24:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),c=t.n(o),l=(t(24),t(7)),i=t.n(l),s=t(10),u=t(13),m=t(2),h=t(3),g=t(5),p=t(4),d=t(14),f=t.n(d),y=function(e,a){var t="https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("18005645-026721a3bcbfec7c434912a10","&image_type=photo&orientation=horizontal&per_page=12");return fetch(t).then((function(e){return e.json()})).then((function(e){return e.hits}))};var v=t(6),b=t.n(v);function I(e){return r.a.createElement("header",{className:b.a.Searchbar},r.a.createElement("form",{className:b.a.SearchForm,onSubmit:e.submitHandler},r.a.createElement("button",{type:"submit",className:b.a.SearchFormButton},r.a.createElement("span",{className:b.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query"})))}var _=t(15),S=t.n(_),k=t(8),E=t.n(k);function L(e){var a=e.imageObj,t=a.webformatURL,n=a.largeImageURL,o=e.searchQuery,c=e.clickHandler;return r.a.createElement("li",{className:E.a.ImageGalleryItem},r.a.createElement("img",{src:t,alt:o,className:E.a.ImageGalleryItemImage,onClick:c,"data-full":n}))}function j(e){return r.a.createElement("ul",{className:S.a.ImageGallery},e.images.map((function(a){return r.a.createElement(L,{key:a.id,imageObj:a,searchQuery:e.searchQuery,clickHandler:e.onImageClickHandler})})))}var O=t(16),w=t.n(O);function C(e){return r.a.createElement("button",{className:w.a.Button,onClick:e.handler},"Load more")}var F=t(17),H=t.n(F),B=t(18),x=t.n(B),G=(t(47),function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.Loader},r.a.createElement(H.a,{type:"Oval",color:"#3f51b5",height:100,width:100,timeout:1e4}))}}]),t}(r.a.Component)),N=t(9),U=t.n(N),Q=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.closeEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.closeEsc)}},{key:"render",value:function(){return r.a.createElement("div",{className:U.a.Overlay,onClick:this.props.onBackDropClick},r.a.createElement("div",{className:U.a.Modal},r.a.createElement("img",{src:this.props.imageUrl,alt:"",width:"800"})))}}]),t}(r.a.Component),D=function(e){Object(g.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={searchQuery:"",images:[],page:1,loading:!1,overlay:!1,overlayImg:null},e.searchFormHandler=function(a){a.preventDefault();var t=a.target.elements.query.value;e.setState({searchQuery:t,page:1,images:[]})},e.onLoadMoreBtnHandler=function(){e.setState((function(e){return{page:e.page+1}}))},e.onImageClickHandler=function(a){a.preventDefault(),e.toggleLoadingState();var t=a.target.dataset.full;e.setState({overlay:!0,overlayImg:t}),e.hideSpinner()},e.onEscClickHandler=function(a){console.log("e"),"Escape"===a.code&&e.setState({overlay:!1})},e.onBackDropClickHandler=function(a){console.log(a.target,a.currentTarget),a.target===a.currentTarget&&e.setState({overlay:!1})},e}return Object(h.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.page!==this.state.page&&this.getImages().then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})),a.searchQuery!==this.state.searchQuery&&this.getImages()}},{key:"componentDidMount",value:function(){this.getImages()}},{key:"removeOverlay",value:function(){this.setState({overlay:!1})}},{key:"getImages",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.state,t=a.page,n=a.searchQuery,this.toggleLoadingState(),e.next=4,y(n,t);case 4:r=e.sent,o=r.map((function(e){return{id:(a=e).id,webformatURL:a.webformatURL,largeImageURL:a.largeImageURL};var a})),this.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(o))}})),this.hideSpinner();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hideSpinner",value:function(){var e=this,a=setInterval((function(){"complete"===document.readyState&&(clearInterval(a),e.toggleLoadingState())}),500)}},{key:"toggleLoadingState",value:function(){this.setState((function(e){return{loading:!e.loading}}))}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.loading,n=e.overlayImg,o=e.overlay;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(G,null),o&&r.a.createElement(Q,{imageUrl:n,closeEsc:this.onEscClickHandler,onBackDropClick:this.onBackDropClickHandler}),r.a.createElement("div",{className:"".concat(f.a.App),"data-lay":t&&"semitransparent"},r.a.createElement(I,{submitHandler:this.searchFormHandler}),r.a.createElement("main",null,a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{images:a,searchQuery:this.state.searchQuery,onImageClickHandler:this.onImageClickHandler}),r.a.createElement(C,{handler:this.onLoadMoreBtnHandler})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(D,null),document.querySelector("#root"))},6:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__3ccPZ",SearchForm:"Searchbar_SearchForm__2-jR6",SearchFormButton:"Searchbar_SearchFormButton__330dv",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__We__0",SearchFormInput:"Searchbar_SearchFormInput__zbIRd"}},8:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3hj5j",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__b3pk2"}},9:function(e,a,t){e.exports={Overlay:"Lightbox_Overlay__1l2UI",Modal:"Lightbox_Modal__1ijea"}}},[[19,1,2]]]);
//# sourceMappingURL=main.21f131c8.chunk.js.map