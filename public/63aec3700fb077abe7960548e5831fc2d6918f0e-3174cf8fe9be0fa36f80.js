(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0joV":function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("7vrA"),c=t("3Z9Z"),m=t("JI6e"),s=t("Wbzz"),u=t("vOnD"),d=t("YNxu"),p=t("YZy7");function f(){var e=Object(a.a)(["\n            text-align: center;\n            padding: 20px 0;\n            border-color: #efefef;\n            border-left: none;\n            border-top: none;\n            transition: .1s;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            &:hover {\n              transform: scale(1.1);\n              background-color: #04e5e5;\n              z-index: 5;\n              border-radius: 10px;\n            }\n            @media (max-width: 500px) {\n              border: none !important;\n            }\n        "]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n            height: 150px;\n            @media (min-width: 768px) and (max-width: 1024px) {\n              height: 100px;\n            }\n        "]);return h=function(){return e},e}function x(){var e=Object(a.a)(["\n            margin: 40px auto;\n        "]);return x=function(){return e},e}function g(){var e=Object(a.a)(["\n            position: relative;\n            overflow: hidden;\n            background-color: #111;\n            background-size: cover;\n            padding: 100px 0;\n            .heading {\n                width: 100%;\n            }\n          }\n        "]);return g=function(){return e},e}var b=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(){return!1},t.render=function(){var e=u.b.section.withConfig({displayName:"ClientsTwo__Section",componentId:"sc-1euwmsx-0"})(g()),n=Object(u.b)(l.a).withConfig({displayName:"ClientsTwo__ClientsContainer",componentId:"sc-1euwmsx-1"})(x());return o.a.createElement(e,{id:"clients"},o.a.createElement(d.a,{text:"Honourable clients"}),o.a.createElement(n,null,o.a.createElement(c.a,null,o.a.createElement(m.a,{md:{span:10,offset:1}},o.a.createElement(c.a,null,this.clients())))))},t.clients=function(){return this.props.clients.map((function(e,n){var t=u.b.img.withConfig({displayName:"ClientsTwo__Client",componentId:"sc-1euwmsx-2"})(h()),a=Object(u.b)(m.a).withConfig({displayName:"ClientsTwo__ClientCol",componentId:"sc-1euwmsx-3"})(f());return o.a.createElement(a,{md:3,key:n,style:{borderRight:(n+1)%4==0?"none":"1px solid",borderBottom:n<8?"1px solid":"none"}},o.a.createElement(p.a,{animation:"fadeIn slower",delay:200*n},o.a.createElement(t,{src:e.node.childImageSharp.fluid.src,alt:"Client"})))}))},n}(o.a.Component);n.a=function(e){return o.a.createElement(s.a,{query:"1609424129",render:function(n){var t=n.clients;return o.a.createElement(b,Object.assign({clients:t.edges},e))}})}},LWfO:function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("JI6e"),c=t("3Z9Z"),m=t("7vrA"),s=t("Wbzz"),u=t("vOnD"),d=t("IVmY"),p=t("YZy7"),f=t("+i52"),h=t.n(f),x=t("50ek");function g(){var e=Object(a.a)(["\n          margin: 10px 0;\n          text-align: center;\n          @media (max-width:767px) {\n              margin: 50px 0;\n              text-align:center;\n          }\n          .value {\n              font-size: 120px;\n              font-family: Teko;\n              color: #fff;\n              line-height: 90px;\n          }\n          .text {\n              font-size: 20px;\n              color: #fff;\n          }\n          .symbol {\n              color: #04e5e5;\n              position: absolute;\n              font-size: 39px;\n              top: -28px;\n          }\n    "]);return g=function(){return e},e}function b(){var e=Object(a.a)(["\n          background-color: #000;\n          padding: 50px 0 100px 0;\n      "]);return b=function(){return e},e}function w(){var e=Object(a.a)(["\n          font-size: 14px;\n          font-weight: 300;\n          color: #c5c5c5;\n      "]);return w=function(){return e},e}function y(){var e=Object(a.a)(["\n            height: 5px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 20px;\n        "]);return y=function(){return e},e}function v(){var e=Object(a.a)(["\n            padding: 0 20%;\n            @media (max-width: 500px) {\n                padding: 0 5%;\n            }\n            @media (min-width: 501px) and (max-width:1600px) {\n                padding: 0 5%;\n            }\n        "]);return v=function(){return e},e}function E(){var e=Object(a.a)(["\n            max-height: 500px;\n            object-fit: cover;\n            border-radius: 10px;\n            box-shadow: 0 28px 60px rgb(4,229,229,.2);\n            @media (max-width: 767px) {\n                margin: 20px 0;\n                width: 90%;\n                max-height: 200px;\n            }\n            @media (min-width: 768px) and (max-width: 1024px) {\n                max-height: 300px;\n                max-width: 300px;\n            }\n          @media (min-width: 1025px) and (max-width: 1600px) {\n              max-height: 500px;\n              max-width: 500px;\n          }\n        "]);return E=function(){return e},e}function I(){var e=Object(a.a)(["\n            color: #04e5e5;\n            font-size: 75px;\n            line-height: 70px;\n            font-family: Teko;\n            text-transform: uppercase;\n            letter-spacing: 2px;\n            @media (min-width:768px) and (max-width:1600px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n            @media (max-width:767px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n        "]);return I=function(){return e},e}function _(){var e=Object(a.a)(["\n            font-size: 70px;\n            line-height: 70px;\n            font-family: Teko;\n            color: #fff;\n            text-transform: uppercase;\n            @media (min-width:768px) and (max-width:1600px) {\n                font-size: 35px;\n                line-height: 40px;\n            }\n            @media (max-width:767px) {\n                font-size: 30px;\n                line-height: 30px;\n                text-align: left;\n            }\n        "]);return _=function(){return e},e}function j(){var e=Object(a.a)(["\n            position: absolute;\n            height: 100%;\n            width: 100%;\n            top: 0;\n            background-color: rgba(0,0,0,.9);\n        "]);return j=function(){return e},e}function T(){var e=Object(a.a)(["\n            padding: 270px 0 150px 0;\n            @media (max-width: 767px) {\n                padding: 100px 0;\n            }\n            @media (min-width: 768px) and (max-width: 1500px) {\n                padding: 300px 0 0px 0;\n            }\n            @media (min-width: 1501px) and (max-width: 1600px) {\n                padding: 200px 0;\n            }\n        "]);return T=function(){return e},e}function C(){var e=Object(a.a)(["\n            @media (min-width: 768px) and (max-width: 1024px) {\n                height: 300px;\n                width: 300px;\n                display: flex;\n                align-items: center;\n            }\n\n            @media (min-width: 1025px) and (max-width: 1500px) {\n                height: 500px;\n                width: 500px;\n                display: flex;\n                align-items: center;\n            }\n            @media (max-width: 500px) {\n              * {\n                text-align: center;\n              }\n            }\n        "]);return C=function(){return e},e}function O(){var e=Object(a.a)(["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            @media (max-width: 767px) {\n              .image-col {\n                  text-align: center;\n              }\n          }\n        "]);return O=function(){return e},e}function k(){var e=Object(a.a)(["\n            display: flex;\n            align-items: center;\n        "]);return k=function(){return e},e}function N(){var e=Object(a.a)(["\n            position: relative;\n            overflow: hidden;\n            background-color: #000;\n            .particles {\n                position: absolute;\n                width: 100%;\n                height: 100%;\n            }\n        "]);return N=function(){return e},e}var z=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(){return!1},t.render=function(){var e=u.b.section.withConfig({displayName:"AboutTwo__Section",componentId:"sc-1495g7s-0"})(N()),n=Object(u.b)(l.a).withConfig({displayName:"AboutTwo__AboutCol",componentId:"sc-1495g7s-1"})(k()),t=Object(u.b)(l.a).withConfig({displayName:"AboutTwo__ImageCol",componentId:"sc-1495g7s-2"})(O()),a=u.b.div.withConfig({displayName:"AboutTwo__ImageWrapper",componentId:"sc-1495g7s-3"})(C()),i=u.b.div.withConfig({displayName:"AboutTwo__Main",componentId:"sc-1495g7s-4"})(T()),r=u.b.div.withConfig({displayName:"AboutTwo__Overlay",componentId:"sc-1495g7s-5"})(j()),s=u.b.h1.withConfig({displayName:"AboutTwo__Heading",componentId:"sc-1495g7s-6"})(_()),f=u.b.span.withConfig({displayName:"AboutTwo__Color",componentId:"sc-1495g7s-7"})(I()),z=u.b.img.withConfig({displayName:"AboutTwo__Image",componentId:"sc-1495g7s-8"})(E()),S=u.b.div.withConfig({displayName:"AboutTwo__AboutContent",componentId:"sc-1495g7s-9"})(v()),A=u.b.div.withConfig({displayName:"AboutTwo__Separator",componentId:"sc-1495g7s-10"})(y()),q=u.b.p.withConfig({displayName:"AboutTwo__Text",componentId:"sc-1495g7s-11"})(w()),L=Object(u.b)(c.a).withConfig({displayName:"AboutTwo__CounterRow",componentId:"sc-1495g7s-12"})(b()),D=u.b.div.withConfig({displayName:"AboutTwo__CounterComponent",componentId:"sc-1495g7s-13"})(g());return o.a.createElement(e,{id:"about"},o.a.createElement(r,null),o.a.createElement(h.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:2e3}},color:{value:["#03afaf","#04e5e5"]},shape:{type:"circle",stroke:{width:0,color:"#fff"}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:.5,opacity_min:.1,sync:!1}},size:{value:8.017060304327615,random:!0,anim:{enable:!0,speed:12.181158184520175,size_min:.1,sync:!0}},line_linked:{enable:!0,distance:150,color:"dark"===this.context.theme?"#fff":"#555",opacity:.5,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),o.a.createElement(i,null,o.a.createElement(c.a,null,o.a.createElement(n,{md:6},o.a.createElement(l.a,{md:12},o.a.createElement(p.a,{animation:"fadeIn",delay:1500},o.a.createElement(S,null,o.a.createElement(s,null,"Renowned ",o.a.createElement(f,null,"Software")," Company From ",o.a.createElement(f,null,"London")),o.a.createElement(A,null),o.a.createElement(q,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum quis urna a ullamcorper. Integer enim felis, pellentesque ac felis et, varius ornare nisl. Nunc mauris turpis, porttitor sit amet mattis ac, ultricies sit amet diam. Nunc aliquet tincidunt lobortis. Ut quis felis tincidunt, tincidunt ex quis, ultricies nisi. Duis in tortor porta, laoreet erat tristique, ornare augue."))))),o.a.createElement(t,{md:6},o.a.createElement(a,null,o.a.createElement(d.a,null,o.a.createElement(z,{src:this.props.image.childImageSharp.fluid.src,alt:"about"})))))),o.a.createElement(L,null,o.a.createElement(m.a,null,o.a.createElement(c.a,null,o.a.createElement(l.a,{md:3},o.a.createElement(p.a,{animation:"fadeIn",delay:1e3},o.a.createElement(D,null,o.a.createElement(x.a,{value:5,duration:5,delay:1e3,symbol:"+",text:"5 Years of Experience"})))),o.a.createElement(l.a,{md:3},o.a.createElement(p.a,{animation:"fadeIn",delay:1e3},o.a.createElement(D,null,o.a.createElement(x.a,{value:100,duration:5,delay:1e3,symbol:"+",text:"Clients Worked With"})))),o.a.createElement(l.a,{md:3},o.a.createElement(p.a,{animation:"fadeIn",delay:1e3},o.a.createElement(D,null,o.a.createElement(x.a,{value:5,duration:5,delay:1e3,text:"Certifications"})))),o.a.createElement(l.a,{md:3},o.a.createElement(p.a,{animation:"fadeIn",delay:1e3},o.a.createElement(D,null,o.a.createElement(x.a,{value:10,duration:5,delay:1e3,symbol:"+",text:"Honourable Awards"}))))))))},n}(o.a.Component);n.a=function(e){return o.a.createElement(s.a,{query:"2399762127",render:function(n){var t=n.image,a=n.abstract;return o.a.createElement(z,Object.assign({image:t,abstract:a},e))}})}},WF05:function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("7vrA"),c=t("3Z9Z"),m=t("JI6e"),s=t("Wbzz"),u=t("vOnD"),d=t("IVmY"),p=t("YZy7"),f=t("OS56"),h=t.n(f);t("tyWD"),t("K7k0");function x(){var e=Object(a.a)(["\n            margin-bottom: 0;\n        "]);return x=function(){return e},e}function g(){var e=Object(a.a)(["\n            margin-bottom: 0;\n            font-weight: 600;\n            font-size: 20px;\n        "]);return g=function(){return e},e}function b(){var e=Object(a.a)(["\n            display: flex;\n            justify-content: center;\n            flex-direction: column;\n            margin-left: 20px;\n        "]);return b=function(){return e},e}function w(){var e=Object(a.a)(["\n            height: 70px;\n            width: 70px;\n            border-radius: 40px;\n        "]);return w=function(){return e},e}function y(){var e=Object(a.a)(["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-top: 50px;\n        "]);return y=function(){return e},e}function v(){var e=Object(a.a)(["\n            color: #333;\n            font-size: 18px;\n            font-weight: 400;\n            line-height: 25px;\n            text-align: center;\n        "]);return v=function(){return e},e}function E(){var e=Object(a.a)(["\n        \n        "]);return E=function(){return e},e}function I(){var e=Object(a.a)(["\n            position: absolute;\n            height: 100px;\n            width: 100px;\n            bottom: 5px;\n            right: 10px;\n            object-fit: contain;\n            opacity: .7;\n        "]);return I=function(){return e},e}function _(){var e=Object(a.a)(["\n            position: absolute;\n            height: 100px;\n            width: 100px;\n            top: 5px;\n            left: 10px;\n            object-fit: contain;\n            opacity: .7;\n        "]);return _=function(){return e},e}function j(){var e=Object(a.a)(["\n            padding: 50px;\n            background-color: #04e5e5;\n            min-height: 500px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            position: relative;\n            @media (max-width:767px) {\n                min-height: 700px;\n                padding: 20px;\n            }\n        "]);return j=function(){return e},e}function T(){var e=Object(a.a)(["\n            color:  #04e5e5;\n            font-size: 155px;\n            line-height: 120px;\n            font-family: Teko;\n            text-transform: uppercase;\n            letter-spacing: 2px;\n            @media (min-width:768px) and (max-width:1399px) {\n                font-size: 70px;\n                line-height: 70px;\n            }\n            @media (max-width:767px) {\n                font-size: 40px;\n                line-height: 40px;\n            }\n        "]);return T=function(){return e},e}function C(){var e=Object(a.a)(["\n            font-size: 150px;\n            line-height: 120px;\n            font-family: Teko;\n            color: #fff;\n            text-transform: uppercase;\n            text-align: center;\n            width: 100%;\n            margin-bottom: 0;\n            @media (min-width:768px) and (max-width:1399px) {\n                font-size: 70px;\n                line-height: 70px;\n            }\n            @media (max-width:767px) {\n                font-size: 40px;\n                line-height: 40px;\n                text-align: center;\n            }\n        "]);return C=function(){return e},e}function O(){var e=Object(a.a)(["\n            padding: 100px 0;\n            @media (max-width: 767px) {\n                padding: 50px 10px;\n            }\n        "]);return O=function(){return e},e}function k(){var e=Object(a.a)(["\n            position: relative;\n            overflow: hidden;\n            background-color: #000;\n            background-size: cover;\n            .heading {\n                width: 100%;\n                min-height: 500px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                margin-top: 20px;\n                @media (max-width: 767px) {\n                    min-height: inherit;\n                    margin-bottom: 50px;\n                }\n            }\n          }\n        "]);return k=function(){return e},e}var N=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.render=function(){var e=u.b.section.withConfig({displayName:"TestimonialsTwo__Section",componentId:"kb9onj-0"})(k()),n=u.b.div.withConfig({displayName:"TestimonialsTwo__TestimonialContainer",componentId:"kb9onj-1"})(O()),t=u.b.h1.withConfig({displayName:"TestimonialsTwo__Heading",componentId:"kb9onj-2"})(C()),a=u.b.span.withConfig({displayName:"TestimonialsTwo__Color",componentId:"kb9onj-3"})(T()),i=u.b.div.withConfig({displayName:"TestimonialsTwo__TestimonialBox",componentId:"kb9onj-4"})(j()),r=u.b.img.withConfig({displayName:"TestimonialsTwo__QuotationUp",componentId:"kb9onj-5"})(_()),s=u.b.img.withConfig({displayName:"TestimonialsTwo__QuotationDown",componentId:"kb9onj-6"})(I()),f={dots:!0,swipe:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:1e4,loop:!0};return o.a.createElement(e,{id:"testimonials"},o.a.createElement(n,null,o.a.createElement(l.a,null,o.a.createElement(c.a,null,o.a.createElement(m.a,{md:6},o.a.createElement(d.a,{className:"heading"},o.a.createElement(t,null,o.a.createElement(a,null,"Reveiews")," By our clients"))),o.a.createElement(m.a,{md:6},o.a.createElement(i,null,o.a.createElement(r,{src:this.props.quotation_up.childImageSharp.fluid.src,alt:"quotation up"}),o.a.createElement(p.a,{animation:"fadeIn"},o.a.createElement(h.a,f,this.testimonials())),o.a.createElement(s,{src:this.props.quotation_down.childImageSharp.fluid.src,alt:"quotation down"})))))))},t.testimonials=function(){var e=u.b.div.withConfig({displayName:"TestimonialsTwo__TestimonialItem",componentId:"kb9onj-7"})(E()),n=u.b.p.withConfig({displayName:"TestimonialsTwo__TestimonialText",componentId:"kb9onj-8"})(v()),t=u.b.div.withConfig({displayName:"TestimonialsTwo__TestimonialClient",componentId:"kb9onj-9"})(y()),a=u.b.img.withConfig({displayName:"TestimonialsTwo__TestimonialImg",componentId:"kb9onj-10"})(w()),i=u.b.div.withConfig({displayName:"TestimonialsTwo__TestimonialClientInfo",componentId:"kb9onj-11"})(b()),r=u.b.p.withConfig({displayName:"TestimonialsTwo__TestimonialClientName",componentId:"kb9onj-12"})(g()),l=u.b.p.withConfig({displayName:"TestimonialsTwo__TestimonialClientProfession",componentId:"kb9onj-13"})(x());return this.props.testimonials.map((function(c,m){return o.a.createElement(e,{key:m},o.a.createElement(n,null,c.content.frontmatter.text),o.a.createElement(t,null,o.a.createElement(a,{src:c.content.frontmatter.image.childImageSharp.fluid.src,alt:c.content.frontmatter.name}),o.a.createElement(i,null,o.a.createElement(r,null,c.content.frontmatter.name),o.a.createElement(l,null,c.content.frontmatter.profession))))}))},n}(o.a.Component);n.a=function(e){return o.a.createElement(s.a,{query:"1858684615",render:function(n){var t=n.quotation_up,a=n.quotation_down,i=n.testimonials;return o.a.createElement(N,Object.assign({quotation_up:t,quotation_down:a,testimonials:i.edges},e))}})}},lZ3g:function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("Wbzz"),c=t("JI6e"),m=t("7vrA"),s=t("3Z9Z"),u=t("vOnD"),d=t("X2ck"),p=t("YNxu");function f(){var e=Object(a.a)(["\n            padding: 50px 0 0 0;\n            @media (max-width:767px) {\n              padding: 0 50px;\n            }\n        "]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          top: 0;\n          background-color: rgba(0,0,0,.8);\n        "]);return h=function(){return e},e}function x(){var e=Object(a.a)(["\n          background-image: url(",");\n          background-size: cover;\n          padding: 100px 0;\n          position: relative;\n\n        "]);return x=function(){return e},e}var g=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(){return!1},t.render=function(){var e=u.b.section.withConfig({displayName:"TeamTwo__Section",componentId:"sc-28m2cj-0"})(x(),this.props.background.childImageSharp.fluid.src),n=u.b.div.withConfig({displayName:"TeamTwo__Overlay",componentId:"sc-28m2cj-1"})(h()),t=u.b.div.withConfig({displayName:"TeamTwo__TeamContainer",componentId:"sc-28m2cj-2"})(f());return o.a.createElement(e,{id:"team"},o.a.createElement(n,null),o.a.createElement(c.a,{md:12},o.a.createElement(m.a,null,o.a.createElement(p.a,{text:"Team Members"})),o.a.createElement(t,null,o.a.createElement(m.a,null,o.a.createElement(s.a,null,this.team())))))},t.team=function(){return this.props.items.map((function(e,n){return o.a.createElement(c.a,{md:3,key:n},o.a.createElement(d.a,{index:n,image:e.content.frontmatter.image.childImageSharp.fluid.src,name:e.content.frontmatter.name,profession:e.content.frontmatter.profession,type:"col"}))}))},n}(o.a.Component);n.a=function(e){return o.a.createElement(l.a,{query:"1201895413",render:function(n){var t=n.items,a=n.background;return o.a.createElement(g,Object.assign({items:t.edges,background:a},e))}})}},mzbz:function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("Wbzz"),c=t("JI6e"),m=t("7vrA"),s=t("vOnD"),u=t("qG7g"),d=t("OS56"),p=t.n(d),f=(t("tyWD"),t("K7k0"),t("YNxu")),h=t("YZy7");function x(){var e=Object(a.a)(["\n            .slick-slide {\n              display: block;\n              margin: 0px 0 70px 0px;\n            }\n            .slick-dots {\n              bottom: 0;\n              li button:before,.slick-dots li.slick-active button:before {\n                color: #04e5e5;\n              }\n            }\n          }\n        "]);return x=function(){return e},e}function g(){var e=Object(a.a)(["\n          background-color: #050505;\n          padding: 100px 0;\n        "]);return g=function(){return e},e}var b=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.render=function(){var e=s.b.section.withConfig({displayName:"PortfolioTwo__Section",componentId:"sc-1iibz48-0"})(g()),n=s.b.div.withConfig({displayName:"PortfolioTwo__PortfolioContainer",componentId:"sc-1iibz48-1"})(x()),t={dots:!0,swipe:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:2,arrows:!1,autoplay:!0,autoplaySpeed:1e4,loop:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return o.a.createElement(e,{id:"portfolio"},o.a.createElement(c.a,{md:12,style:{padding:0}},o.a.createElement(m.a,null,o.a.createElement(f.a,{text:"Recent projects"})),o.a.createElement(n,null,o.a.createElement(h.a,{animation:"fadeIn"},o.a.createElement(p.a,t,this.portfolio())))))},t.portfolio=function(){return this.props.items.map((function(e,n){return o.a.createElement(u.a,{key:n,index:n,image:e.content.frontmatter.image.childImageSharp.fluid.src,text:e.content.frontmatter.title,category:e.content.frontmatter.category,link:e.content.frontmatter.link,type:"slider"})}))},n}(o.a.Component);n.a=function(e){return o.a.createElement(l.a,{query:"1588576821",render:function(n){var t=n.items;return o.a.createElement(b,Object.assign({items:t.edges},e))}})}},veJG:function(e,n,t){"use strict";var a=t("AcpX"),i=t("9Hrx"),r=t("q1tI"),o=t.n(r),l=t("3Z9Z"),c=t("7vrA"),m=t("JI6e"),s=t("vOnD"),u=t("YZy7"),d=t("YNxu");function p(){var e=Object(a.a)(["\n            font-size: 11px;\n            font-weight: 300;\n            color: #c5c5c5;\n            padding-right: 25px;\n         "]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n            margin-bottom: 90px;\n            border-radius: 20px;\n            transition: .2s;\n            position: relative;\n            &:hover "," {\n                opacity: .3 !important;\n                color: #04e5e5;\n            }\n        "]);return f=function(){return e},e}function h(){var e=Object(a.a)(["\n            position: absolute;\n            font-size: 60px;\n            color: #fff;\n            font-weight: 900;\n            top: -50px;\n            opacity: .1;\n            z-index: -1;\n            transition: .2s;\n         "]);return h=function(){return e},e}function x(){var e=Object(a.a)(["\n            height: 2px;\n            width: 50px;\n            background-color: #04e5e5;\n            margin-bottom: 5px;\n         "]);return x=function(){return e},e}function g(){var e=Object(a.a)(["\n            font-size: 22px;\n            font-weight: 500;\n            font-family: Teko;\n            color: #fff;\n            margin-bottom: 0px;\n        "]);return g=function(){return e},e}function b(){var e=Object(a.a)(["\n            margin-top: 100px;\n        "]);return b=function(){return e},e}function w(){var e=Object(a.a)(["\n            position: relative;\n            overflow: hidden;\n            background-color: #111;\n            padding: 100px 0 50px 0;\n            .heading {\n                width: 100%;\n            }\n          }\n        "]);return w=function(){return e},e}var y=function(e){function n(){return e.apply(this,arguments)||this}Object(i.a)(n,e);var t=n.prototype;return t.shouldComponentUpdate=function(){return!1},t.render=function(){var e=s.b.section.withConfig({displayName:"ServicesTwo__Section",componentId:"sc-18zst0c-0"})(w()),n=Object(s.b)(l.a).withConfig({displayName:"ServicesTwo__ServiceRow",componentId:"sc-18zst0c-1"})(b()),t=s.b.h4.withConfig({displayName:"ServicesTwo__ServiceHeading",componentId:"sc-18zst0c-2"})(g()),a=s.b.div.withConfig({displayName:"ServicesTwo__ServiceSeparator",componentId:"sc-18zst0c-3"})(x()),i=s.b.h5.withConfig({displayName:"ServicesTwo__ServiceNumber",componentId:"sc-18zst0c-4"})(h()),r=s.b.div.withConfig({displayName:"ServicesTwo__ServiceElement",componentId:"sc-18zst0c-5"})(f(),i),y=s.b.p.withConfig({displayName:"ServicesTwo__ServiceText",componentId:"sc-18zst0c-6"})(p());return o.a.createElement(e,{id:"services"},o.a.createElement(c.a,null,o.a.createElement(d.a,{text:"Our Services"}),o.a.createElement(n,null,o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInDown",delay:500},o.a.createElement(r,null,o.a.createElement(i,null,"01"),o.a.createElement(t,null,"Mobile App Development"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInDown",delay:1e3},o.a.createElement(r,null,o.a.createElement(i,null,"02"),o.a.createElement(t,null,"Web  Development"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInDown",delay:1500},o.a.createElement(r,null,o.a.createElement(i,null,"03"),o.a.createElement(t,null,"Email Marketing"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInDown",delay:2e3},o.a.createElement(r,null,o.a.createElement(i,null,"04"),o.a.createElement(t,null,"Search Engine Optimization"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInUp",delay:500},o.a.createElement(r,null,o.a.createElement(i,null,"05"),o.a.createElement(t,null,"Network Management"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInUp",delay:1e3},o.a.createElement(r,null,o.a.createElement(i,null,"06"),o.a.createElement(t,null,"UI/UX Development"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInUp",delay:1500},o.a.createElement(r,null,o.a.createElement(i,null,"07"),o.a.createElement(t,null,"Database Management"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))),o.a.createElement(m.a,{md:3},o.a.createElement(u.a,{animation:"fadeInUp",delay:2e3},o.a.createElement(r,null,o.a.createElement(i,null,"08"),o.a.createElement(t,null,"Machine Learning"),o.a.createElement(a,null),o.a.createElement(y,null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")))))))},n}(o.a.Component);n.a=y}}]);
//# sourceMappingURL=63aec3700fb077abe7960548e5831fc2d6918f0e-3174cf8fe9be0fa36f80.js.map