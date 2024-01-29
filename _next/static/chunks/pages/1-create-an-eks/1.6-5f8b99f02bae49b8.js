(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{3406:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/1-create-an-eks/1.6",function(){return n(8244)}])},8244:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return a}});var r=n(5893),l=n(2673),o=n(373),i=n(8426);n(9128);var t=n(2643);let a=[{depth:2,value:"6. helm 을 이용해 aws-load-balancer-controller 생성",id:"6-helm-을-이용해-aws-load-balancer-controller-생성"},{depth:3,value:"Cloud9 에 helm 설치",id:"cloud9-에-helm-설치"},{depth:3,value:"helm 을 이용해 aws-load-balancer-controller 설치",id:"helm-을-이용해-aws-load-balancer-controller-설치"}];function _createMdxContent(s){let e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",pre:"pre",code:"code",span:"span"},(0,t.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"6-helm-을-이용해-aws-load-balancer-controller-생성",children:"6. helm 을 이용해 aws-load-balancer-controller 생성"}),"\n",(0,r.jsx)(e.h3,{id:"cloud9-에-helm-설치",children:"Cloud9 에 helm 설치"}),"\n",(0,r.jsxs)(e.p,{children:["helm 설치에 대한 명령어는 ",(0,r.jsx)(e.a,{href:"https://helm.sh/docs/intro/install/#from-script",children:"helm.sh - Installing Helm ## From Script"})," 의 내용을 발췌해왔다.",(0,r.jsx)("br",{}),"\r\nALB Ingress Controller 를 helm 을 이용해서 설치 예정이다. 따라서 Cloud9 에 helm 을 설치해야 한다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.pre,{"data-language":"bash","data-theme":"default",filename:"terminal",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## helm.sh 라는 이름으로 헬름 설치 파일을 curl 로 다운로드"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"curl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-fsSL"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-o"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"get_helm.sh"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3"})]}),"\n",(0,r.jsx)(e.span,{className:"line highlighted",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## 다운로드 받은 파일 확안"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"ls"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"README.md"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"download"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"get_helm.sh"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"minimum-cluster.yml"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## 실행 권한 변경"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"chmod"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0700"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"get_helm.sh"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## 설치파일 실행"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"./get_helm.sh"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Downloading"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://get.helm.sh/helm-v3.13.1-linux-amd64.tar.gz"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Verifying"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"checksum..."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Done."})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Preparing"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"to"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"helm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"into"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"helm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"installed"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"into"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"/usr/local/bin/helm"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(e.h3,{id:"helm-을-이용해-aws-load-balancer-controller-설치",children:"helm 을 이용해 aws-load-balancer-controller 설치"}),"\n",(0,r.jsx)(e.pre,{"data-language":"bash","data-theme":"default",filename:"terminal",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-language":"bash","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"helm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"repo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"eks"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"https://aws.github.io/eks-charts"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:'"eks"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"has"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"been"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"added"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"to"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"your"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"repositories"})]}),"\n",(0,r.jsx)(e.span,{className:"line highlighted",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"helm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"repo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"update"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"eks"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Hang"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"tight"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"while"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"we"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"grab"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"the"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"latest"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"your"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"chart"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"repositories..."})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".Successfully "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"got"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"an"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"update"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"the"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"eks"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"chart"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"repository"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Update"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Complete."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"⎈Happy"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Helming!⎈"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"helm"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"aws-load-balancer-controller"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"eks/aws-load-balancer-controller"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-n"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kube-system"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--set"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"clusterName=gitops-study-k8scluster"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--set"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"serviceAccount.create="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"--set"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"serviceAccount.name=aws-load-balancer-controller"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NAME:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"aws-load-balancer-controller"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"LAST"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"DEPLOYED:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Sun"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Dec"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"24"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"14"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:":11:01"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2023"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NAMESPACE:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kube-system"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"STATUS:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"deployed"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"REVISION:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"TEST"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"SUITE:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"None"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NOTES:"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"AWS"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Load"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"Balancer"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"controller"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"installed!"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## 설치 확인"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"## kube-system 네임스페이스 아래에 aws-load-balancer-controller 가 존재하는지 찾아본다."})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kubectl"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"get"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"deployment"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"-n"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"kube-system"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"aws-load-balancer-controller"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NAME"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                           "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"READY"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"UP-TO-DATE"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"AVAILABLE"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"AGE"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"aws-load-balancer-controller"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"/2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"     "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"           "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"104"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string)"},children:"s"})]})]})})]})}let c={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/1-create-an-eks/1.6.mdx",route:"/1-create-an-eks/1.6",timestamp:1706444307e3,pageMap:[{kind:"Folder",name:"0-setup-access-tools",route:"/0-setup-access-tools",children:[{kind:"MdxPage",name:"0.1",route:"/0-setup-access-tools/0.1"},{kind:"MdxPage",name:"0.2",route:"/0-setup-access-tools/0.2"},{kind:"MdxPage",name:"0.3",route:"/0-setup-access-tools/0.3"},{kind:"MdxPage",name:"0.4",route:"/0-setup-access-tools/0.4"},{kind:"MdxPage",name:"0.5",route:"/0-setup-access-tools/0.5"},{kind:"Meta",data:{"0.1":"1.Administrator 권한의 IAM User, Access Key, Access Key Secret 생성","0.2":"2.AWS Cloud 9 셋업","0.3":"3.EKS, k8s 접근 도구 셋업","0.4":"4.Cloud9 의 Access Key, Access Key Secret 새로고침문제 해결방법","0.5":"5.ArgoCD ALB 용도의 Ingress 에 서브넷 지정, 보안 그룹 생성"}}]},{kind:"Folder",name:"1-create-an-eks",route:"/1-create-an-eks",children:[{kind:"MdxPage",name:"1.0",route:"/1-create-an-eks/1.0"},{kind:"MdxPage",name:"1.1",route:"/1-create-an-eks/1.1"},{kind:"MdxPage",name:"1.2",route:"/1-create-an-eks/1.2"},{kind:"MdxPage",name:"1.3",route:"/1-create-an-eks/1.3"},{kind:"MdxPage",name:"1.4",route:"/1-create-an-eks/1.4"},{kind:"MdxPage",name:"1.5",route:"/1-create-an-eks/1.5"},{kind:"MdxPage",name:"1.6",route:"/1-create-an-eks/1.6"},{kind:"Meta",data:{"1.0":"0. 소개","1.1":"1. eksctl 을 사용해 EKS Cluster 생성","1.2":"2. eksctl 을 사용해 EKS Nodegroup 생성","1.3":"3. Managed Nodegroup 삭제","1.4":"4. EKS 추가기능 (VPC CNI, CSI 드라이버, kube-proxy, CoreDNS) 설치","1.5":"5. oidc 조회 및 클러스터 service account 생성","1.6":"6. helm 을 이용해 aws-load-balancer-controller 생성"}}]},{kind:"Folder",name:"2-setup-argocd",route:"/2-setup-argocd",children:[{kind:"MdxPage",name:"2.1",route:"/2-setup-argocd/2.1"},{kind:"MdxPage",name:"2.2",route:"/2-setup-argocd/2.2"},{kind:"MdxPage",name:"2.3",route:"/2-setup-argocd/2.3"},{kind:"MdxPage",name:"2.4",route:"/2-setup-argocd/2.4"},{kind:"Meta",data:{"2.1":"1. ArgoCD 공식 제공 yml 을 이용해 ArgoCD 설치","2.2":"2. ArgoCD 구축 (2) ArgoCD 에 HTTP 허용","2.3":"3. 80포트 허용된 ArgoCD 에 Ingress URL 을 통해 접속해보기","2.4":"4. ArgoCD 의 Default Password 변경"}}]},{kind:"Folder",name:"3-etc",route:"/3-etc",children:[{kind:"MdxPage",name:"3.1",route:"/3-etc/3.1"},{kind:"MdxPage",name:"3.2",route:"/3-etc/3.2"},{kind:"Meta",data:{"3.1":"주요 공식자료들","3.2":"(트러블슈팅) Cloud9 에서 AWS Credential 이 자주 Refresh 되는 이슈"}}]},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"satori",route:"/advanced/satori"},{kind:"Meta",data:{satori:"Satori"}}]},{kind:"MdxPage",name:"advanced",route:"/advanced"},{kind:"MdxPage",name:"another",route:"/another"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{"0-setup-access-tools":"접근 환경 구성","1-create-an-eks":"EKS 생성 & 셋업","2-setup-argocd":"EKS 내에 ArgoCD 구축","3-etc":"etc",index:"Introduction",another:"Another Page",advanced:"Advanced (A Folder)",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"1.6",headings:a},pageNextRoute:"/1-create-an-eks/1.6",nextraLayout:o.ZP,themeConfig:i.Z};e.default=(0,l.j)(c)},8426:function(s,e,n){"use strict";var r=n(5893);n(7294);let l={logo:(0,r.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-argocd-setup-at-eks"},docsRepositoryBase:"https://github.com/chagchagchag/docs-argocd-setup-at-eks",footer:{text:"Nextra Docs Template"}};e.Z=l},5789:function(){}},function(s){s.O(0,[774,796,888,179],function(){return s(s.s=3406)}),_N_E=s.O()}]);