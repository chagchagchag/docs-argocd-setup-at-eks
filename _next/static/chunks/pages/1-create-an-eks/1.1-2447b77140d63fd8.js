(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{9004:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/1-create-an-eks/1.1",function(){return t(7455)}])},7455:function(e,a,t){"use strict";t.r(a),t.d(a,{__toc:function(){return d}});var s=t(5893),n=t(2673),r=t(373),c=t(8426);t(9128);var o=t(2643);let d=[{depth:2,value:"1. eksctl 을 사용해 EKS Cluster 생성",id:"1-eksctl-을-사용해-eks-cluster-생성"}];function _createMdxContent(e){let a=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span",img:"img"},(0,o.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"1-eksctl-을-사용해-eks-cluster-생성",children:"1. eksctl 을 사용해 EKS Cluster 생성"}),"\n",(0,s.jsxs)(a.p,{children:["eksctl 을 이용해 gitops-study-k8scluster 라는 이름의 클러스터를 생성한다.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(a.pre,{"data-language":"bash","data-theme":"default",filename:"terminal",hasCopyCode:!0,children:(0,s.jsx)(a.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"eksctl"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"create"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"cluster"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"--name"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"gitops-study-k8scluster"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"--region"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string)"},children:"ap-northeast-2"})]})})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["생성중인 모습 (Cloud 9)\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/1.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["생성 완료\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/2.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["클러스터를 생성하면 클러스터에 대한 VPC 도 하나 생성된다.",(0,s.jsx)("br",{}),"\r\n(매니지먼트 콘솔 → VPC 메뉴)\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/3.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["클러스터에 대한 서브넷이 생성된 모습",(0,s.jsx)("br",{}),"\r\npublic 서브넷 3기, private 서브넷 3기가 생성되어 있다.\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/4.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["EKS 대시보드로 이동한다.\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/5.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["생성된 클러스터의 모습\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/6.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["생성된 노드 그룹의 모습\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/7.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(a.p,{children:["노드 그룹 상세 화면이다.\r\n",(0,s.jsx)(a.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/1-create-an-eks/img/CLUSTER-SETUP-1-EKSCTL-CLUSTER-CREATION/8.png",alt:""})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(a.p,{children:"인스턴스의 크기가 m5.large 로 비교적 크다. 이 사이즈를 다시 작은 사이즈의 노드그룹으로 바꿔줘야 추가적인 비용과금을 최소화할 수 있다. 다음 문서에서는 이 m5.large 인스턴스를 t3.small 인스턴스로 교체하는 작업을 수행한다."})]})}let i={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,o.a)(),e.components);return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/1-create-an-eks/1.1.mdx",route:"/1-create-an-eks/1.1",timestamp:1706489834e3,pageMap:[{kind:"Folder",name:"0-setup-access-tools",route:"/0-setup-access-tools",children:[{kind:"MdxPage",name:"0.1",route:"/0-setup-access-tools/0.1"},{kind:"MdxPage",name:"0.2",route:"/0-setup-access-tools/0.2"},{kind:"MdxPage",name:"0.3",route:"/0-setup-access-tools/0.3"},{kind:"MdxPage",name:"0.4",route:"/0-setup-access-tools/0.4"},{kind:"MdxPage",name:"0.5",route:"/0-setup-access-tools/0.5"},{kind:"Meta",data:{"0.1":"1.Administrator 권한의 IAM User, Access Key, Access Key Secret 생성","0.2":"2.AWS Cloud 9 셋업","0.3":"3.EKS, k8s 접근 도구 셋업","0.4":"4.Cloud9 의 Access Key, Access Key Secret 새로고침문제 해결방법","0.5":"5.ArgoCD ALB 용도의 Ingress 에 서브넷 지정, 보안 그룹 생성"}}]},{kind:"Folder",name:"1-create-an-eks",route:"/1-create-an-eks",children:[{kind:"MdxPage",name:"1.0",route:"/1-create-an-eks/1.0"},{kind:"MdxPage",name:"1.1",route:"/1-create-an-eks/1.1"},{kind:"MdxPage",name:"1.2",route:"/1-create-an-eks/1.2"},{kind:"MdxPage",name:"1.3",route:"/1-create-an-eks/1.3"},{kind:"MdxPage",name:"1.4",route:"/1-create-an-eks/1.4"},{kind:"MdxPage",name:"1.5",route:"/1-create-an-eks/1.5"},{kind:"MdxPage",name:"1.6",route:"/1-create-an-eks/1.6"},{kind:"Meta",data:{"1.0":"0. 소개","1.1":"1. eksctl 을 사용해 EKS Cluster 생성","1.2":"2. eksctl 을 사용해 EKS Nodegroup 생성","1.3":"3. Managed Nodegroup 삭제","1.4":"4. EKS 추가기능 (VPC CNI, CSI 드라이버, kube-proxy, CoreDNS) 설치","1.5":"5. oidc 조회 및 클러스터 service account 생성","1.6":"6. helm 을 이용해 aws-load-balancer-controller 생성"}}]},{kind:"Folder",name:"2-setup-argocd",route:"/2-setup-argocd",children:[{kind:"MdxPage",name:"2.1",route:"/2-setup-argocd/2.1"},{kind:"MdxPage",name:"2.2",route:"/2-setup-argocd/2.2"},{kind:"MdxPage",name:"2.3",route:"/2-setup-argocd/2.3"},{kind:"MdxPage",name:"2.4",route:"/2-setup-argocd/2.4"},{kind:"Meta",data:{"2.1":"1. ArgoCD 공식 제공 yml 을 이용해 ArgoCD 설치","2.2":"2. ArgoCD 구축 (2) ArgoCD 에 HTTP 허용","2.3":"3. 80포트 허용된 ArgoCD 에 Ingress URL 을 통해 접속해보기","2.4":"4. ArgoCD 의 Default Password 변경"}}]},{kind:"Folder",name:"3-etc",route:"/3-etc",children:[{kind:"MdxPage",name:"3.1",route:"/3-etc/3.1"},{kind:"MdxPage",name:"3.2",route:"/3-etc/3.2"},{kind:"Meta",data:{"3.1":"주요 공식자료들","3.2":"(트러블슈팅) Cloud9 에서 AWS Credential 이 자주 Refresh 되는 이슈"}}]},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"satori",route:"/advanced/satori"},{kind:"Meta",data:{satori:"Satori"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"MdxPage",name:"another",route:"/another"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"0-setup-access-tools":"접근 환경 구성","1-create-an-eks":"EKS 생성 & 셋업","2-setup-argocd":"EKS 내에 ArgoCD 구축","3-etc":"etc",index:"Introduction",another:"Another Page",advanced:"Advanced (A Folder)",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"1.1",headings:d},pageNextRoute:"/1-create-an-eks/1.1",nextraLayout:r.ZP,themeConfig:c.Z};a.default=(0,n.j)(i)},8426:function(e,a,t){"use strict";var s=t(5893);t(7294);let n={logo:(0,s.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-argocd-setup-at-eks"},docsRepositoryBase:"https://github.com/chagchagchag/docs-argocd-setup-at-eks",footer:{text:"Nextra Docs Template"}};a.Z=n},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=9004)}),_N_E=e.O()}]);