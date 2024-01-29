(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{7690:function(e,s,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/0-setup-access-tools/0.1",function(){return c(7458)}])},7458:function(e,s,c){"use strict";c.r(s),c.d(s,{__toc:function(){return d}});var t=c(5893),a=c(2673),n=c(373),r=c(8426);c(9128);var o=c(2643);let d=[{depth:2,value:"AdministratorAccess 권한의 IAM User 생성",id:"administratoraccess-권한의-iam-user-생성"},{depth:3,value:"사용자 그룹 생성, 사용자 생성",id:"사용자-그룹-생성-사용자-생성"},{depth:3,value:"csv 파일 다운로드",id:"csv-파일-다운로드"},{depth:3,value:"IAM 사용자 로그인",id:"iam-사용자-로그인"},{depth:2,value:"IAM User 에 대한 Access Key 생성",id:"iam-user-에-대한-access-key-생성"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",blockquote:"blockquote",img:"img",ul:"ul",li:"li"},(0,o.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"1. Administrator 권한의 IAM User, Access Key, Access Key Secret 생성"}),"\n",(0,t.jsxs)(s.p,{children:["Cloud9 의 경우 따로 IAM User 를 따로 생성할 필요 없이 Cloud9 자체가 스스로 권한을 가지고 있다. AWS CLI 를 사용할 수 있도록 Credentials (",(0,t.jsx)(s.code,{children:"~/.aws/credentials"}),") 를 미리 세팅해서 제공해준다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(s.p,{children:["그런데 Cloud9 에서 미리 세팅된 환경으로 제공해주는 credential 은 부족한 권한들도 있다. Cloud 9 내의 Credentials (",(0,t.jsx)(s.code,{children:"~/.aws/credentials"})," ) 는 Cloud 9 내부적으로 주기적으로 secret key, secret access, session token 을 업데이트한다. 따라서 이 것들을 수정해서 권한이 높은 계정으로 바꿔준다거나 하는 작업을 하면 토큰 값들을 업데이트하고 하는 것들이 불가능하다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(s.p,{children:["따라서 직접 관리자 권한(AdministratorAccess)을 가진 IAM User 로부터 Access Key, Access Key Secret 을 발급하고 이것을 외부의 스크립트로 기존 환경변수를 덮어쓰게 해주면 되는데, 이번 문서에서는 Access Key, Access Key Secret 을 발급하는 절차를 정리해두었다. 외부의 스크립트로 기존 환경변수를 덮어쓰게 해주는 방식은 ",(0,t.jsx)(s.a,{href:"https://github.com/chagchagchag/eks-k8s-docker-study-archive/blob/main/eks-by-argocd",children:"Step1.접근환경구성 (4) Cloud9 의 Access Key, Access Key Secret 새로고침문제 해결방법"})," 에 정리해두었다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h2,{id:"administratoraccess-권한의-iam-user-생성",children:"AdministratorAccess 권한의 IAM User 생성"}),"\n",(0,t.jsxs)(s.p,{children:["Cloud 9 은 자체적으로 Access Key, Access Key Secret 이 ",(0,t.jsx)(s.code,{children:"~/.aws/credentials"})," 파일 내에 환경변수로 적용되어 있는데, 이 Access Key, Access Key Secret 은 Cloud 9 내부적으로 주기적으로 업데이트하면서 매번 다른 값들이 적용된다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(s.p,{children:["따라서 Cloud 9 이 기본적으로 제공하는 Access Key, Access Key Secret 을 사용해서 EKS 클러스터, 워커노드 들을 구성하면, 일정 시간이 지나서 접근이 불가능해지는 현상이 발생한다. 왜냐하면 EKS 클러스터 생성시에 적용한 Access Key, Access Key Secret 은 더 이상 사용할 수 없는 Access Key, Access Key Secret 이 되어 버리기 때문이다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(s.p,{children:["따라서 별도로 IAM 계정을 생성하고 이 계정에 ",(0,t.jsx)(s.code,{children:"AdministratorAccess"})," 권한을 부여하려고 한 후 Access Key, Access Key Secret 을 추출한 후, 이 Access Key, Access Key Secret 을 환경변수로 등록하는 스크립트를 통해 Cloud 9 의 Access Key, Access Key Secret 문제를 해결했다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h3,{id:"사용자-그룹-생성-사용자-생성",children:"사용자 그룹 생성, 사용자 생성"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"시간문제로 인해 설명은 가급적 생략했다."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/1.png",alt:"img"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["사용자 생성\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/2.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.p,{children:"세부 정보 입력"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["참고로 ",(0,t.jsx)(s.code,{children:"Identity Center 에서 사용자 지정- 권장"})," 을 선택하지 말고 ",(0,t.jsx)(s.code,{children:"IAM 사용자를 생성하고 싶음"}),"을 선택해야 CLI 에서 접근이 가능해진다.\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/3.png",alt:"img"})]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["그룹에 사용자 추가\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/4.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["검토 및 생성\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/5.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h3,{id:"csv-파일-다운로드",children:"csv 파일 다운로드"}),"\n",(0,t.jsxs)(s.p,{children:["csv 파일을 다운로드 받아둬야 한다.\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/6.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h3,{id:"iam-사용자-로그인",children:"IAM 사용자 로그인"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/7.png",alt:"img"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/8.png",alt:"img"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.h2,{id:"iam-user-에-대한-access-key-생성",children:"IAM User 에 대한 Access Key 생성"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"이번에도 설명을 가급적 생략."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["액세스 관리/사용자 → 액세스 키 만들기\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/9.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["Command Line Interface(CLI) 선택 → 다음\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/10.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["태그 지정\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/11.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(s.p,{children:["csv 파일 다운로드\r\n",(0,t.jsx)(s.img,{src:"https://raw.githubusercontent.com/chagchagchag/docs-argocd-setup-at-eks/main/pages/0-setup-access-tools/img/1-CREATE-ADMIN-IAM/12.png",alt:"img"})]}),"\n",(0,t.jsx)("br",{})]})}let i={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/0-setup-access-tools/0.1.mdx",route:"/0-setup-access-tools/0.1",timestamp:1706509797e3,pageMap:[{kind:"Folder",name:"0-setup-access-tools",route:"/0-setup-access-tools",children:[{kind:"MdxPage",name:"0.1",route:"/0-setup-access-tools/0.1"},{kind:"MdxPage",name:"0.2",route:"/0-setup-access-tools/0.2"},{kind:"MdxPage",name:"0.3",route:"/0-setup-access-tools/0.3"},{kind:"MdxPage",name:"0.4",route:"/0-setup-access-tools/0.4"},{kind:"MdxPage",name:"0.5",route:"/0-setup-access-tools/0.5"},{kind:"Meta",data:{"0.1":"1.Administrator 권한의 IAM User, Access Key, Access Key Secret 생성","0.2":"2.AWS Cloud 9 셋업","0.3":"3.EKS, k8s 접근 도구 셋업","0.4":"4.Cloud9 의 Access Key, Access Key Secret 새로고침문제 해결방법","0.5":"5.ArgoCD ALB 용도의 Ingress 에 서브넷 지정, 보안 그룹 생성"}}]},{kind:"Folder",name:"1-create-an-eks",route:"/1-create-an-eks",children:[{kind:"MdxPage",name:"1.0",route:"/1-create-an-eks/1.0"},{kind:"MdxPage",name:"1.1",route:"/1-create-an-eks/1.1"},{kind:"MdxPage",name:"1.2",route:"/1-create-an-eks/1.2"},{kind:"MdxPage",name:"1.3",route:"/1-create-an-eks/1.3"},{kind:"MdxPage",name:"1.4",route:"/1-create-an-eks/1.4"},{kind:"MdxPage",name:"1.5",route:"/1-create-an-eks/1.5"},{kind:"MdxPage",name:"1.6",route:"/1-create-an-eks/1.6"},{kind:"Meta",data:{"1.0":"0. 소개","1.1":"1. eksctl 을 사용해 EKS Cluster 생성","1.2":"2. eksctl 을 사용해 EKS Nodegroup 생성","1.3":"3. Managed Nodegroup 삭제","1.4":"4. EKS 추가기능 (VPC CNI, CSI 드라이버, kube-proxy, CoreDNS) 설치","1.5":"5. oidc 조회 및 클러스터 service account 생성","1.6":"6. helm 을 이용해 aws-load-balancer-controller 생성"}}]},{kind:"Folder",name:"2-setup-argocd",route:"/2-setup-argocd",children:[{kind:"MdxPage",name:"2.1",route:"/2-setup-argocd/2.1"},{kind:"MdxPage",name:"2.2",route:"/2-setup-argocd/2.2"},{kind:"MdxPage",name:"2.3",route:"/2-setup-argocd/2.3"},{kind:"MdxPage",name:"2.4",route:"/2-setup-argocd/2.4"},{kind:"Meta",data:{"2.1":"1. ArgoCD 공식 제공 yml 을 이용해 ArgoCD 설치","2.2":"2. ArgoCD 구축 (2) ArgoCD 에 HTTP 허용","2.3":"3. 80포트 허용된 ArgoCD 에 Ingress URL 을 통해 접속해보기","2.4":"4. ArgoCD 의 Default Password 변경"}}]},{kind:"Folder",name:"3-etc",route:"/3-etc",children:[{kind:"MdxPage",name:"3.1",route:"/3-etc/3.1"},{kind:"MdxPage",name:"3.2",route:"/3-etc/3.2"},{kind:"Meta",data:{"3.1":"주요 공식자료들","3.2":"(트러블슈팅) Cloud9 에서 AWS Credential 이 자주 Refresh 되는 이슈"}}]},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"satori",route:"/advanced/satori"},{kind:"Meta",data:{satori:"Satori"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"MdxPage",name:"another",route:"/another"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"0-setup-access-tools":"접근 환경 구성","1-create-an-eks":"EKS 생성 & 셋업","2-setup-argocd":"EKS 내에 ArgoCD 구축","3-etc":"etc",index:"Introduction",another:"Another Page",advanced:"Advanced (A Folder)",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"1. Administrator 권한의 IAM User, Access Key, Access Key Secret 생성",headings:d},pageNextRoute:"/0-setup-access-tools/0.1",nextraLayout:n.ZP,themeConfig:r.Z};s.default=(0,a.j)(i)},8426:function(e,s,c){"use strict";var t=c(5893);c(7294);let a={logo:(0,t.jsx)("span",{children:"ArgoCD를 EKS설치하는 과정들"}),project:{link:"https://github.com/chagchagchag/docs-argocd-setup-at-eks"},docsRepositoryBase:"https://github.com/chagchagchag/docs-argocd-setup-at-eks",footer:{text:"Nextra Docs Template"}};s.Z=a},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=7690)}),_N_E=e.O()}]);