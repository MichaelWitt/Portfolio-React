(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OqMM:function(n,e,t){"use strict";t.r(e);var a=t("9Hrx"),i=t("q1tI"),o=t.n(i),r=t("TJpk"),c=t.n(r),s=t("I/Ru"),l=t("AcpX"),p=t("Wbzz"),u=t("vOnD"),m=t("T58H"),d=t.n(m),h=t("aQOR");function f(){var n=Object(l.a)(["\n      position: absolute;\n      height: 50px;\n      &.move-up {\n        animation: "," 3s infinite alternate;\n      }\n      &.move-down {\n        animation: "," 3s infinite alternate;\n      }\n      @media (max-width: 767px) {\n        height: 20px;\n      }\n    "]);return f=function(){return n},n}function g(){var n=Object(l.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        "]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-40px);\n            }\n        "]);return b=function(){return n},n}function w(){var n=Object(l.a)(["\n      color: #fff;\n      text-decoration: none;\n      border-bottom: 2px solid;\n      font-weight: 300;\n      transition: 0.5s;\n      margin-top: 40px;\n      &:hover {\n        color: #fff;\n        text-decoration: none;\n        border-color: #04e5e5;\n      }\n    "]);return w=function(){return n},n}function x(){var n=Object(l.a)(['\n      height: 500px;\n      width: 900px;\n      margin: auto;\n      position: relative;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      position: relative;\n      &:after {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 5px;\n        background: linear-gradient(\n          120deg,\n          #04e5e5,\n          #f37055,\n          #ef4e7b,\n          #a166ab,\n          #5073b8,\n          #1098ad,\n          #07b39b,\n          #6fba82\n        );\n        background-size: 300% 300%;\n        clip-path: polygon(\n          0% 100%,\n          10px 100%,\n          10px 10px,\n          calc(100% - 10px) 10px,\n          calc(100% - 10px) calc(100% - 10px),\n          10px calc(100% - 10px),\n          10px 100%,\n          100% 100%,\n          100% 0%,\n          0% 0%\n        );\n      }\n      &.animate:after {\n        animation: '," 2s ease-in-out infinite;\n      }\n      @media (max-width: 767px) {\n        height: 350px;\n      }\n    "]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n            0% {\n              background-position: 15% 0%;\n            }\n            50% {\n              background-position: 85% 100%;\n            }\n            100% {\n              background-position: 15% 0%;\n            }\n          "]);return v=function(){return n},n}function E(){var n=Object(l.a)(["\n      font-size: 50px;\n      line-height: 50px;\n      color: #fff;\n      text-transform: uppercase;\n      margin-left: 6px;\n      @media (min-width: 768px) and (max-width: 1500px) {\n        font-size: 23px;\n        line-height: 20px;\n      }\n      @media (max-width: 767px) {\n        font-size: 20px;\n        line-height: 20px;\n      }\n      span {\n        font-family: Teko;\n      }\n    "]);return E=function(){return n},n}function k(){var n=Object(l.a)(["\n      font-size: 18px;\n      font-weight: 300;\n      color: #ccc;\n      text-transform: uppercase;\n      letter-spacing: 4px;\n    "]);return k=function(){return n},n}function y(){var n=Object(l.a)(["\n      .glitch {\n        font-size: 140px;\n        line-height: 140px;\n        font-weight: 600;\n        color: #fff;\n        @media (max-width: 767px) {\n          font-size: 40px;\n          line-height: 50px;\n        }\n      }\n    "]);return y=function(){return n},n}function O(){var n=Object(l.a)(["\n      width: 100%;\n      display: flex;\n      align-items: center;\n      background-color: rgba(0, 0, 0, 0.7);\n    "]);return O=function(){return n},n}function H(){var n=Object(l.a)(["\n      position: relative;\n      .particles {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      background-image: url(",");\n      background-size: cover;\n      background-repeat: no-repeat;\n    "]);return H=function(){return n},n}var j=function(n){function e(e){var t;return(t=n.call(this,e)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(a.a)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions),window.pageYOffset<window.innerHeight&&document.body.addEventListener("mousemove",(function(n){var e,t=-.05*n.clientX/8,a=-.05*n.clientY/8,i=document.getElementsByClassName("parallax-hero-item");for(e=0;e<i.length;e++)i[e].style.transform="translate("+t+"px, "+a+"px)"}))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var n=u.b.section.withConfig({displayName:"HeroPersonal__Section",componentId:"wka24b-0"})(H(),this.props.background.childImageSharp.fluid.src),e=u.b.div.withConfig({displayName:"HeroPersonal__Overlay",componentId:"wka24b-1"})(O()),t=u.b.div.withConfig({displayName:"HeroPersonal__Heading",componentId:"wka24b-2"})(y()),a=u.b.h2.withConfig({displayName:"HeroPersonal__SubHeading",componentId:"wka24b-3"})(k()),i=u.b.div.withConfig({displayName:"HeroPersonal__Type",componentId:"wka24b-4"})(E()),r=Object(u.c)(v()),c=u.b.div.withConfig({displayName:"HeroPersonal__HeadingBox",componentId:"wka24b-5"})(x(),r),s=u.b.a.withConfig({displayName:"HeroPersonal__Resume",componentId:"wka24b-6"})(w());return o.a.createElement(n,{id:"home"},o.a.createElement(e,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},o.a.createElement(c,{className:"parallax-hero-item animate"},o.a.createElement(a,{className:"parallax-hero-item"},"Hello, I'm"),o.a.createElement(t,{className:"parallax-hero-item"},o.a.createElement(h.a,{text:"Michael"})),o.a.createElement(i,{className:"parallax-hero-item"},o.a.createElement(d.a,{options:{strings:["App Developer","Web Designer","UX Developer"],autoStart:!0,loop:!0}})),o.a.createElement(s,{href:"./"},"Download Resume")),this.shapes()))},t.shapes=function(){var n=Object(u.c)(b()),e=Object(u.c)(g()),t=u.b.img.withConfig({displayName:"HeroPersonal__Shape",componentId:"wka24b-7"})(f(),n,e);return this.props.shapes.map((function(n,e){return o.a.createElement(t,{style:{left:10*(e+1)+"%",bottom:Math.random()*(+((e+1)%2==0?10:90)-+((e+1)%2==0?5:80))+ +((e+1)%2==0?5:80)+"%"},key:e,src:n.node.childImageSharp.fluid.src,alt:"shape",className:Math.floor(10*Math.random())%2==0?"move-up":"move-down"})}))},e}(o.a.Component),_=function(n){return o.a.createElement(p.a,{query:"3914203281",render:function(e){var t=e.background,a=e.shapes;return o.a.createElement(j,Object.assign({background:t,shapes:a.edges},n))}})},N=t("cJaV"),I=t("PgA9"),z=t("Codp"),C=t("3Aop"),D=t("Nq0h"),P=t("YVUD"),S=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this.props.data.site;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,n.meta.title),o.a.createElement("meta",{name:"description",content:n.meta.description})),o.a.createElement(s.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","clients","contact"]},o.a.createElement(_,null),o.a.createElement(N.a,null),o.a.createElement(I.a,null),o.a.createElement(z.a,null),o.a.createElement(C.a,null),o.a.createElement(D.a,null),o.a.createElement(P.a,null)))},e}(o.a.Component);e.default=S}}]);
//# sourceMappingURL=component---src-pages-personal-index-js-2dbedbb1c2afb1a181ec.js.map