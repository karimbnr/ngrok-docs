"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[87898],{6470:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(59496),a=r(13352),i=r(7426);function c(e){let{name:t}=e;const r=(0,i.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),c=[];let s=[];for(let i=0;i<r.docs.length;i++){const{contentTitle:e,excerpt:t,path:o,frontMatter:l}=r.docs[i];s.push(n.createElement(a.Z,{to:o,size:"sm",title:l?.title||e,description:l?.description||t})),(2==s.length||r.docs.length<2||i==r.docs.length-1)&&(c.push(n.createElement("div",{className:"ngrok--cards ngrok--cards-row"},s)),s=[])}return n.createElement(n.Fragment,null,c)}},13352:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(59496),a=r(45924),i=r(62515);function c(e){let{size:t,title:r}=e;switch(t){case"xs":case"sm":return n.createElement("h4",{className:"fw-600"},r);case"xl":return n.createElement("h2",{className:"fw-600"},r);default:return n.createElement("h3",{className:"fw-600"},r)}}function s(e){let{size:t,title:r,icon:a}=e;return a?n.createElement("div",{className:"ngrok--card-heading jc-space-between"},r&&n.createElement(c,{size:t,title:r}),a):r?n.createElement("div",{className:"ngrok--card-heading"},n.createElement(c,{size:t,title:r})):null}function o(e){let{to:t,note:r=!1,size:c="",title:o,img:l="",icon:d=!1,description:u=!1,descriptionLink:m=!1}=e;c=c.toLowerCase();let g=(0,a.W)("ngrok--card",{"ngrok--card-note":r,"ngrok--card-sm":"sm"==c,"ngrok--card-lg":"lg"==c,"ngrok--card-xl":"xl"==c});return n.createElement(i.Z,{to:t},n.createElement("div",{className:g},l&&n.createElement("img",{src:l}),n.createElement(s,{size:c,title:o,icon:d}),u&&n.createElement("p",null,u),m&&n.createElement("a",null,m)))}},64329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=r(51163),a=(r(59496),r(49613)),i=r(6470);const c={name:"azure-ad-b2c",title:"Azure AD B2C Integration Hub",sidebar_label:"Azure AD B2C",description:"Secure access to ngrok tunnels with Azure Active Directory B2C. \nNo VPNs, Firewalls, or complex network rules required.\n",excerpt:"Secure access to ngrok tunnels with Azure Active Directory B2C.\n"},s=void 0,o={unversionedId:"integrations/azure-ad-b2c/index",id:"integrations/azure-ad-b2c/index",title:"Azure AD B2C Integration Hub",description:"Secure access to ngrok tunnels with Azure Active Directory B2C. \nNo VPNs, Firewalls, or complex network rules required.\n",source:"@site/docs/integrations/azure-ad-b2c/index.mdx",sourceDirName:"integrations/azure-ad-b2c",slug:"/integrations/azure-ad-b2c/",permalink:"/docs/integrations/azure-ad-b2c/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/azure-ad-b2c/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"azure-ad-b2c",title:"Azure AD B2C Integration Hub",sidebar_label:"Azure AD B2C",description:"Secure access to ngrok tunnels with Azure Active Directory B2C. \nNo VPNs, Firewalls, or complex network rules required.\n",excerpt:"Secure access to ngrok tunnels with Azure Active Directory B2C.\n"},sidebar:"docs",previous:{title:"Azure Active Directory SSO (SAML)",permalink:"/docs/integrations/azure-ad/sso-saml"},next:{title:"Azure Active Directory B2C SSO (SAML)",permalink:"/docs/integrations/azure-ad-b2c/sso-saml"}},l={},d=[],u={toc:d},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,c.description),(0,a.kt)(i.Z,{name:c.name,mdxType:"IntegrationPageList"}))}g.isMDXComponent=!0}}]);