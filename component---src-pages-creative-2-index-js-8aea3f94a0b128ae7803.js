(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"52u9":function(e,n,t){"use strict";var i=t("AcpX"),a=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("JI6e"),c=t("7vrA"),m=t("3Z9Z"),u=t("Wbzz"),d=t("vOnD"),s=t("T58H"),p=t.n(s);function h(){var e=Object(i.a)(["\n            font-size: 14px;\n            font-weight: 300;\n            color: #c5c5c5;\n        "]);return h=function(){return e},e}function f(){var e=Object(i.a)(["\n            margin-bottom: 20px;\n            img {\n                max-height: 70px;\n            }\n        "]);return f=function(){return e},e}function b(){var e=Object(i.a)(["\n            height: 5px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 10px;\n        "]);return b=function(){return e},e}function g(){var e=Object(i.a)(["\n            font-size: 30px;\n            font-weight: 400;\n            font-family: Teko;\n        "]);return g=function(){return e},e}function w(){var e=Object(i.a)(["\n            padding: 40px;\n            color: #fff;\n        "]);return w=function(){return e},e}function x(){var e=Object(i.a)(["\n            min-height: 300px;\n            background-color: #111;\n            transition: .2s;\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n            &:hover {\n                background-color: #222;\n            }\n        "]);return x=function(){return e},e}function v(){var e=Object(i.a)(["\n            padding: 0;\n            border-right: #444;\n            &.no-border {\n                border-right: none;\n            }\n            @media (max-width:500px) {\n                border-right:none;\n            }\n        "]);return v=function(){return e},e}function E(){var e=Object(i.a)(["\n            position: absolute;\n            width: 100%;\n            bottom: -14%;\n            z-index: 2;\n            @media (min-width:1025px) and (max-width: 1400px) {    \n                bottom: -35%;\n            }\n            @media (max-width:767px) {\n                position: relative;\n                bottom: 0;\n            } \n            @media (min-width:768px) and (max-width: 1023px) {    \n                bottom: -25%;\n            }\n        "]);return E=function(){return e},e}function I(){var e=Object(i.a)(["\n            height: 5px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 30px;\n            @media (min-width:768px) {\n                margin-left: 6px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n        "]);return I=function(){return e},e}function y(){var e=Object(i.a)(["\n            position: relative;\n            z-index: 10\n        "]);return y=function(){return e},e}function _(){var e=Object(i.a)(["\n            font-size: 50px;\n            line-height: 50px;\n            color: #fff;\n            text-transform: uppercase;\n            @media (min-width:768px) {\n                margin-left: 6px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 23px;\n                line-height: 20px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n            span {\n                font-family: Teko;\n            }\n        "]);return _=function(){return e},e}function k(){var e=Object(i.a)(["\n            font-size: 120px;\n            color: #fff;\n            font-weight: 700;\n            text-transform: uppercase;\n            background: -webkit-linear-gradient(left, #00ffff , #007a7a);\n            background: -o-linear-gradient(right, #00ffff, #007a7a);\n            background: -moz-linear-gradient(right, #00ffff, #007a7a);\n            background: linear-gradient(to right, #00ffff , #007a7a); \n           -webkit-background-clip: text;\n           -webkit-text-fill-color: transparent;\n            @media (max-width:767px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n           @media (min-width:768px) and (max-width:1500px) {\n                font-size: 70px;\n            }\n        "]);return k=function(){return e},e}function H(){var e=Object(i.a)(["\n            font-size: 80px;\n            font-family: Teko;\n            line-height: 40px;\n            color: #fff;\n            font-weight: 400;\n            text-transform: uppercase;\n            @media (min-width:768px) {\n                margin-left: 4px;\n            }\n            @media (max-width:767px) {\n                margin-left: 2px;\n            }\n            @media (min-width:768px) and (max-width:1500px) {\n                font-size: 40px;\n            }\n            @media (max-width:767px) {\n                font-size: 20px;\n                line-height: 20px;\n            }\n        "]);return H=function(){return e},e}function O(){var e=Object(i.a)(["\n            width: 100%;\n            display: flex;\n            align-items: center;\n            background-color: rgba(0,0,0,.5);\n        "]);return O=function(){return e},e}function C(){var e=Object(i.a)(["\n            position: relative;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n            background-image: url(",");\n            background-size: cover;\n            background-repeat: no-repeat;\n        "]);return C=function(){return e},e}var j=function(e){function n(n){var t;return(t=e.call(this,n)||this).updateDimensions=function(){t.state.height!==window.innerHeight&&t.setState({height:window.innerHeight}),t.state.width!==window.innerWidth&&t.setState({width:window.innerWidth})},t.state={height:0,width:0},t}Object(a.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.setState({height:window.innerHeight,width:window.innerWidth}),window.addEventListener("resize",this.updateDimensions)},t.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},t.render=function(){var e=d.b.section.withConfig({displayName:"Hero__Section",componentId:"sc-1e5bw89-0"})(C(),this.props.background.childImageSharp.fluid.src),n=d.b.div.withConfig({displayName:"Hero__Overlay",componentId:"sc-1e5bw89-1"})(O()),t=d.b.h1.withConfig({displayName:"Hero__Heading1",componentId:"sc-1e5bw89-2"})(H()),i=d.b.h2.withConfig({displayName:"Hero__Heading2",componentId:"sc-1e5bw89-3"})(k()),a=d.b.div.withConfig({displayName:"Hero__Type",componentId:"sc-1e5bw89-4"})(_()),r=d.b.div.withConfig({displayName:"Hero__Content",componentId:"sc-1e5bw89-5"})(y()),u=d.b.div.withConfig({displayName:"Hero__Separator",componentId:"sc-1e5bw89-6"})(I()),s=d.b.div.withConfig({displayName:"Hero__BottomContent",componentId:"sc-1e5bw89-7"})(E()),j=Object(d.b)(l.a).withConfig({displayName:"Hero__ServiceCol",componentId:"sc-1e5bw89-8"})(v()),z=d.b.div.withConfig({displayName:"Hero__Service",componentId:"sc-1e5bw89-9"})(x()),S=d.b.div.withConfig({displayName:"Hero__ServiceContent",componentId:"sc-1e5bw89-10"})(w()),N=d.b.h4.withConfig({displayName:"Hero__ServiceHeading",componentId:"sc-1e5bw89-11"})(g()),D=d.b.div.withConfig({displayName:"Hero__ServiceSeparator",componentId:"sc-1e5bw89-12"})(b()),W=d.b.div.withConfig({displayName:"Hero__ServiceIcon",componentId:"sc-1e5bw89-13"})(f()),T=d.b.p.withConfig({displayName:"Hero__ServiceText",componentId:"sc-1e5bw89-14"})(h());return o.a.createElement(e,{id:"home"},o.a.createElement(n,{style:{height:(this.state.width>500?this.state.height:350)+"px"}},o.a.createElement(c.a,null,o.a.createElement(r,null,o.a.createElement(t,null,"Creative"),o.a.createElement(i,null,"Digital Agency"),o.a.createElement(u,null),o.a.createElement(a,null,o.a.createElement(p.a,{options:{strings:["App Developers","Web Designers","UX Designers"],autoStart:!0,loop:!0}}))))),o.a.createElement(s,null,o.a.createElement(c.a,null,o.a.createElement(m.a,null,o.a.createElement(j,{md:4,style:{borderRight:this.state.width>500?"1px solid #444":"none"}},o.a.createElement(z,null,o.a.createElement(S,null,o.a.createElement(W,null,o.a.createElement("img",{src:this.props.webexpertIcon.childImageSharp.fluid.src,alt:"web experts"})),o.a.createElement(N,null,"Web Experts"),o.a.createElement(D,null),o.a.createElement(T,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum.")))),o.a.createElement(j,{md:4,style:{borderRight:this.state.width>500?"1px solid #444":"none"}},o.a.createElement(z,null,o.a.createElement(S,null,o.a.createElement(W,null,o.a.createElement("img",{src:this.props.mobileIcon.childImageSharp.fluid.src,alt:"mobile experts"})),o.a.createElement(N,null,"Mobile Experts"),o.a.createElement(D,null),o.a.createElement(T,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum.")))),o.a.createElement(j,{md:4},o.a.createElement(z,null,o.a.createElement(S,null,o.a.createElement(W,null,o.a.createElement("img",{src:this.props.seoIcon.childImageSharp.fluid.src,alt:"seo experts"})),o.a.createElement(N,null,"SEO Experts"),o.a.createElement(D,null),o.a.createElement(T,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ultricies lacus, vitae varius velit. Pellentesque blandit libero eu turpis condimentum bibendum."))))))))},n}(o.a.Component);n.a=function(e){return o.a.createElement(u.a,{query:"1841624728",render:function(n){var t=n.background,i=n.webexpertIcon,a=n.mobileIcon,r=n.seoIcon;return o.a.createElement(j,Object.assign({background:t,webexpertIcon:i,mobileIcon:a,seoIcon:r},e))}})}},R0vg:function(e,n,t){"use strict";t.r(n);var i=t("9Hrx"),a=t("q1tI"),r=t.n(a),o=t("TJpk"),l=t.n(o),c=t("I/Ru"),m=t("52u9"),u=t("LWfO"),d=t("veJG"),s=t("mzbz"),p=t("WF05"),h=t("lZ3g"),f=t("0joV"),b=t("mGfl"),g=function(e){function n(){return e.apply(this,arguments)||this}return Object(i.a)(n,e),n.prototype.render=function(){var e=this.props.data.site;return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement("title",null,e.meta.title),r.a.createElement("meta",{name:"description",content:e.meta.description})),r.a.createElement(c.a,{isHome:!0,sections:["home","about","services","portfolio","testimonials","team","clients","contact"]},r.a.createElement(m.a,null),r.a.createElement(u.a,null),r.a.createElement(d.a,null),r.a.createElement(s.a,null),r.a.createElement(p.a,null),r.a.createElement(h.a,null),r.a.createElement(f.a,null),r.a.createElement(b.a,null)))},n}(r.a.Component);n.default=g}}]);
//# sourceMappingURL=component---src-pages-creative-2-index-js-8aea3f94a0b128ae7803.js.map