(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{KZxz:function(n,e,t){"use strict";t.r(e);var a=t("9Hrx"),i=t("q1tI"),o=t.n(i),r=t("TJpk"),c=t.n(r),s=t("I/Ru"),l=t("AcpX"),p=t("Wbzz"),d=t("vOnD"),u=t("T58H"),m=t.n(u),h=t("P4Lp"),f=t.n(h),x=t("aQOR");function g(){var n=Object(l.a)(["\n            position: absolute;\n            height: 50px;\n            &.move-up {\n                animation: "," 5s infinite  alternate;\n            }\n            &.move-down {\n                animation: "," 5s infinite  alternate;\n            }\n            @media (max-width: 767px) {\n                height: 20px;\n            }\n        "]);return g=function(){return n},n}function b(){var n=Object(l.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(40px);\n            }\n        "]);return b=function(){return n},n}function w(){var n=Object(l.a)(["\n            0% { \n                transform: translateY(0);\n            }\n            100% {\n                transform: translateY(-40px);\n            }\n        "]);return w=function(){return n},n}function v(){var n=Object(l.a)(["\n            color: #fff;\n            text-decoration: none;\n            border-bottom: 2px solid;\n            font-weight: 300;\n            transition: .5s;\n            margin-top: 40px;\n            &:hover {\n                color: #fff;\n                text-decoration: none;\n                border-color: #04e5e5;\n            }\n        "]);return v=function(){return n},n}function E(){var n=Object(l.a)(["\n            height: 500px;\n            width: 900px;\n            margin: auto;\n            position: relative;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            &:after {\n                content: '';\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                border-radius: 5px;\n                background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);\n                background-size: 300% 300%;\n                clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);\n            }\n            &.animate:after {\n                animation: "," 2s ease-in-out infinite;\n            }\n            @media (max-width: 767px) {\n                height: 350px;\n            }\n        "]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n            0% {\n              background-position: 15% 0%;\n            }\n            50% {\n              background-position: 85% 100%;\n            }\n            100% {\n              background-position: 15% 0%;\n            }\n          "]);return y=function(){return n},n}function j(){var n=Object(l.a)(["\n            font-size: 50px;\n            line-height: 50px;\n            color: #fff;\n            text-transform: uppercase;\n            margin-left: 6px;\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 23px;\n                line-height: 20px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n            span {\n                font-family: Teko;\n            }\n        "]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n            font-size: 18px;\n            font-weight: 300;\n            color: #ccc;\n            text-transform: uppercase;\n            letter-spacing: 4px;\n        "]);return O=function(){return n},n}function H(){var n=Object(l.a)(["\n            .glitch {\n                font-size: 140px;\n                line-height: 140px;\n                font-weight: 600;\n                color: #fff;\n                @media (max-width: 767px) {\n                    font-size: 40px;\n                    line-height: 50px;\n                }\n            }\n        "]);return H=function(){return n},n}function _(){var n=Object(l.a)(["\n            width: 100%;\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            position: relative;\n            video {\n                position: absolute;\n            }\n        "]);return _=function(){return n},n}function N(){var n=Object(l.a)(["\n            position: relative;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n\n            background-size: cover;\n            background-repeat: no-repeat;\n        "]);return N=function(){return n},n}var z=function(n){function e(e){var t;return(t=n.call(this,e)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(a.a)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions),document.body.addEventListener("mousemove",(function(n){var e,t=-.1*n.clientX/8,a=-.1*n.clientY/8,i=document.getElementsByClassName("parallax-hero-item");for(e=0;e<i.length;e++)i[e].style.transform="translate("+t+"px,"+a+"px)"}))},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var n=d.b.section.withConfig({displayName:"HeroPersonalVideo__Section",componentId:"ej280d-0"})(N()),e=d.b.div.withConfig({displayName:"HeroPersonalVideo__VideoContainer",componentId:"ej280d-1"})(_()),t=d.b.div.withConfig({displayName:"HeroPersonalVideo__Heading",componentId:"ej280d-2"})(H()),a=d.b.h2.withConfig({displayName:"HeroPersonalVideo__SubHeading",componentId:"ej280d-3"})(O()),i=d.b.div.withConfig({displayName:"HeroPersonalVideo__Type",componentId:"ej280d-4"})(j()),r=Object(d.c)(y()),c=d.b.div.withConfig({displayName:"HeroPersonalVideo__HeadingBox",componentId:"ej280d-5"})(E(),r),s=d.b.a.withConfig({displayName:"HeroPersonalVideo__Resume",componentId:"ej280d-6"})(v());return o.a.createElement(n,{id:"home"},o.a.createElement(e,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},o.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,style:{height:this.state.width>=1024&&this.state.width<1200?"100%":"auto"}},o.a.createElement("source",{src:f.a,type:"video/mp4"})),o.a.createElement(c,{className:"parallax-hero-item animate"},o.a.createElement(a,{className:"parallax-hero-item"},"Hello, I'm"),o.a.createElement(t,{className:"parallax-hero-item"},o.a.createElement(x.a,{text:"John Doe"})),o.a.createElement(i,{className:"parallax-hero-item"},o.a.createElement(m.a,{options:{strings:["App Developer","Web Designer","UX Developer"],autoStart:!0,loop:!0}})),o.a.createElement(s,{href:"./"},"Download Resume")),this.shapes()))},t.shapes=function(){var n=Object(d.c)(w()),e=Object(d.c)(b()),t=d.b.img.withConfig({displayName:"HeroPersonalVideo__Shape",componentId:"ej280d-7"})(g(),n,e);return this.props.shapes.map((function(n,e){return o.a.createElement(t,{style:{left:10*(e+1)+"%",bottom:Math.random()*(+((e+1)%2==0?10:90)-+((e+1)%2==0?5:80))+ +((e+1)%2==0?5:80)+"%"},key:e,src:n.node.childImageSharp.fluid.src,alt:"shape",className:Math.floor(10*Math.random())%2==0?"move-up":"move-down"})}))},e}(o.a.Component),C=function(n){return o.a.createElement(p.a,{query:"102623836",render:function(e){var t=e.shapes;return o.a.createElement(z,Object.assign({shapes:t.edges},n))}})},k=t("cJaV"),I=t("PgA9"),P=t("Codp"),D=t("3Aop"),V=t("Nq0h"),S=t("YVUD"),W=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this.props.data.site;return o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,n.meta.title),o.a.createElement("meta",{name:"description",content:n.meta.description})),o.a.createElement(s.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","clients","contact"]},o.a.createElement(C,null),o.a.createElement(k.a,null),o.a.createElement(I.a,null),o.a.createElement(P.a,null),o.a.createElement(D.a,null),o.a.createElement(V.a,null),o.a.createElement(S.a,null)))},e}(o.a.Component);e.default=W},P4Lp:function(n,e,t){n.exports=t.p+"static/loop-5735d771367ec151ce5345d25cbeb808.mp4"}}]);
//# sourceMappingURL=component---src-pages-personal-video-index-js-eabe47809ba5e7f5980a.js.map