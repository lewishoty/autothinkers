"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,r,n)=>{n.r(r),n.d(r,{default:()=>O});var a=n(1319),t=n(4647),s=n(9281),i=n(3614),l=n(5043),o=n(6545);const d={name:"",email:"",message:"",phone:""};function h(e){let r={};return e.name||(r.name="Name is required"),e.phone||(r.phone="Phone number is required"),r}var m=n(5639),p=n(9);const c=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=n(579);const y=(0,s.C)()((e=>{let{title:r,content:n,t:a}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{style:{fontSize:"3rem"},children:a(r)}),(0,g.jsx)(u,{children:(0,g.jsx)(c,{style:{whiteSpace:"pre-line"},children:a(n)})})]})})),j=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,p.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,p.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,s.C)()((e=>{let{name:r,placeholder:n,onChange:a,t:t}=e;return(0,g.jsxs)(j,{children:[(0,g.jsx)(f,{htmlFor:r,children:t(r)}),(0,g.jsx)(v,{placeholder:t(n),name:r,id:r,onChange:a})]})})),C=(0,s.C)()((e=>{let{name:r,placeholder:n,onChange:a,t:t}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(f,{htmlFor:r,children:t(r)}),(0,g.jsx)(A,{placeholder:t(n),id:r,name:r,onChange:a})]})})),k=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,S=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,q=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,O=(0,s.C)()((e=>{let{title:r,content:n,id:s,t:p}=e;const{values:c,errors:x,handleChange:u,handleSubmit:j}=(e=>{const[r,n]=(0,l.useState)({values:{...d},errors:{...d}});return{handleChange:e=>{e.persist();const{name:r,value:a}=e.target;n((e=>({...e,values:{...e.values,[r]:a},errors:{...e.errors,[r]:""}})))},handleSubmit:async a=>{a.preventDefault();const t=r.values,s=e(t);n((e=>({...e,errors:s})));try{Object.values(s).every((e=>""===e))&&((await fetch("https://api.telegram.org/bot6219383439:AAHpWp7eOb0c1KaoDyyuS7JGVq_rwv10B-c/sendMessage?chat_id=-1002259367304&text="+JSON.stringify(t))).ok?(a.target.reset(),n((()=>({values:{...d},errors:{...d}}))),o.A.success({message:"Success",description:"Your message has been sent!"})):o.A.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(i){o.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:r.values,errors:r.errors}})(h),v=e=>{let{type:r}=e;const n=x[r];return(0,g.jsx)(q,{children:n})};return(0,g.jsx)(k,{id:s,children:(0,g.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(t.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(y,{title:r,content:n})})}),(0,g.jsx)(t.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(S,{autoComplete:"off",onSubmit:j,children:[(0,g.jsxs)(t.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"name",placeholder:"Your Name*",value:c.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(t.A,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"phone",placeholder:"Phone Number*",value:c.phone||"",onChange:u}),(0,g.jsx)(v,{type:"phone"})]}),(0,g.jsx)(t.A,{span:24,children:(0,g.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:c.email||"",onChange:u})}),(0,g.jsx)(t.A,{span:24,children:(0,g.jsx)(C,{placeholder:"Describe your task",value:c.message||"",name:"message",onChange:u})}),(0,g.jsx)(z,{children:(0,g.jsx)(m.$,{name:"submit",children:p("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.2edc5c2f.chunk.js.map