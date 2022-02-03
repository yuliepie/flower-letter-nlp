# 꽃편지 (AI 시집 제작 서비스)
## 1. Intro

<<<<<<< HEAD
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0e54647-9b44-4e0c-b55b-424f2521110a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T095149Z&X-Amz-Expires=86400&X-Amz-Signature=3befc0a056f6cdce498d2861dbec66f399e783a51fd25d84cf13e3c35971e1aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="drawing" width="500"/>
=======
![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0e54647-9b44-4e0c-b55b-424f2521110a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T095149Z&X-Amz-Expires=86400&X-Amz-Signature=3befc0a056f6cdce498d2861dbec66f399e783a51fd25d84cf13e3c35971e1aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
>>>>>>> 2de28b7df97a78278f745b7b0293c872247b0d54

- **프로젝트 명**: 꽃편지
- **팀원:** 정율리(팀장), 김가원, 김서정, 김준석, 이무용
- **Github 링크:** https://github.com/yuliepie/flower-letter-nlp
- **배포 링크:** https://www.flowerletter.co.kr

## 2. Project

### 프로젝트 소개

🌷 **소중한 사람에게 선물하는 나만의 커스텀 시집, 꽃편지가 만들어드려요.**
     
> 사람들은 곧 잘 누군가에게 줄 특별한 선물로 시집을 고르고는 합니다. 
하지만 시의 종류와 내용은 너무도 다양해서, 상대방에게 맞춘 적절한 내용의 시집을 찾기란 쉽지 않습니다. 
>
> 꽃편지는, 여러분이 선물하는 대상에 꼭 맞는 시집을 AI의 도움으로 만들어주는 서비스입니다.
>
>소중한 사람에게 편지를 쓰고, 함께 선물할 수 있는 맞춤 시집을 받아 보세요.
의미있는 꽃말을 담은 표지까지 더해진다면, 세상에서 하나뿐인 그 사람만을 위한 시집이 될 것입니다.

#### 주요 기능
- 수집한 시에서 **레이블을 추출**하여, 이를 기반으로 시를 **다중 레이블 분류**합니다.
- 사용자가 **편지를 입력**하면, **AI가 내용을 분석**해서 알맞은 키워드들로 이루어진 **시집을 큐레이팅** 해 줍니다.
- 사용자는 **AI가 추천한 꽃말들** 중 하나를 선택해 표지를 꾸밀 수 있습니다.
- **폰트와 컬러, 제목** 등 세부 커스터마이징 단계를 거치며 시집의 **외면과 내면을 검토** 할 수 있습니다.
- 시집이 완성된 후 배송정보와 결제정보를 입력하고 **결제를 완료**하면, 주문 확인 이메일을 받게 됩니다.

### 사용 스택 & 아키텍쳐

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e179b591-0324-4a7a-87c9-384e466d7c76/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T101538Z&X-Amz-Expires=86400&X-Amz-Signature=d8000791a17c0952a964cc2a21718f83c43d02d5363ec033a810f72ed7b8901c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" alt="drawing" width="700"/>

**FRONT** : `React` `Redux` `styled-components` `Chakra UI axios` `Figma (Wireframe)`

**BACK**

- MySQL
- SQLAlchemy
- MongoDB
- Beanie ODM
- FastAPI
- FastAPI-Mail
- Bcrypt

**AI**

- KoNLPy
- LDA
- KoBERT

**DEPLOY**

- MongoDB Atlas
- Amazon RDS
- Azure VM
- NGINX

## Wireframe

---

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMuRzCnUOePGZLqy5IjMfA4%2FNLP_MVP.ver%3Fnode-id%3D0%253A1](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FMuRzCnUOePGZLqy5IjMfA4%2FNLP_MVP.ver%3Fnode-id%3D0%253A1)

## 기능 Flow

---

<aside>
🌖 **Client Side Flow Chart**

</aside>

![Mind Map.jpeg](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/Mind_Map.jpeg)

<aside>
🌘 **Server Side Flow Chart**

</aside>

![Server-Flowchart.jpeg](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/Server-Flowchart.jpeg)

## 기능 데모

---

12/14 데모데이 전까지 추가 예정

# 3. Our Team

### 🌻 정율리(팀장)

---

![Screen Shot 2021-11-30 at 20.24.47.png](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/Screen_Shot_2021-11-30_at_20.24.47.png)

- **Position** : Backend / PM
- **Stack** : **`Python`** `**Flask` `FastAPI` `Pydantic` `SQL` `MongoDB` `SQLAlchemy` `React` `JavaScript`**
- **Github**: [`**yuliepie**`](https://github.com/yuliepie)

**Contribution**

- **PM & Administration**
    - 서비스의 기획 & Requirements 정리
    - Product Backlog 관리
    - Gitlab Kanban Board & Issues 관리
    - 랜딩페이지, 소개페이지, 자주묻는 질문 등 텍스트 서술
- **Database**
    - Database schema 구성 (MySQL, MongoDB)
    - SQLAlchemy ORM & Beanie ODM 을 사용해 DB 쿼리
- **Server**
    - FastAPI framework로 API 서버 구축
    - API 문서화
    - 인공지능 모델 API 구축
    - API 구현:
        - 시 & 꽃말 반환 기능
        - 문의 추가 & 답변 기능
        - 주문 생성 & 이메일 발송
        - 백엔드 PG사 결제 후 리디렉션
    - 백오피스 기능 구현 (주문확인 & 문의 답변)
    - PG사 결제창 호출
- **Deployment**
    - Docker Compose 를 이용한 서비스 배포 (Front, Back, Model, Admin services)
    - Google Cloud Services로 VM & DNS 관리
    - Traefik 을 이용한 Reverse proxy & TLS certificate (HTTPS) 관리
    - Gitlab Runner 를 이용한 CD 구축
    - Staging, Production 환경 분리

**Project QnA**

- **Q. MySQL과 MongoDB를 동시에 쓴 이유?**
    
    주문 데이터 같은 경우는 DB에 추가시 ACID 원칙이 중요하기 때문에 그런 특성들이 잘 지켜지는 RDB를 사용했다. 하지만 시집 데이터같은 경우는 시집의 컨텐츠를 고려했을때 document type 의 데이터베이스가 더 적절하다는 판단을 해서 MongoDB를 도입하게 되었다.
    
- **Q. 프로젝트를 마친 소감?**
    
    단순 crud 시스템이 아닌 인공지능, ecommerce의 flow까지 더해진 프로젝트를 기획하고 구현해 볼 수 있어 서비스가 풍부하게 느껴져, 개발도 즐거웠습니다. 몸도 힘들고 팀장으로서 부담이 있었던 것도 사실이지만, 하루하루 지날때마다 새로운 사실을 알게되고 개발자로서 발전해 나가는 것이 느껴져서 정신적으론 즐거움이 있는 프로젝트였던 것 같습니다. 특히 배포환경과 containerization에 대해 스스로 배우고 적용해보는 것이 재밌었습니다.
    

### 🌻 김가원

---

![SmartSelect_20211130-203751_Gallery.jpg](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/SmartSelect_20211130-203751_Gallery.jpg)

- **Position** : AI
- **Stack** : `**python` `jupyter` `matplotlib` `pandas` `numpy` `scikit-learn` `gensim` `BERT`  `wordrank`**

**Contribution**

- **레이블링 모델 구현**
    - word2vec 모델 구현
    - doc2vec 모델 구현
    - 시 데이터 PCA 분석 진행
    - 한글 데이터 전처리
    - 시 데이터 키워드 추출
    - LDA 모델 재학습
- **학습 모델 구현**
    - koBERT 활용 다중 레이블 분류 모델 구현

**Project QnA**

- **Q. 프로젝트를 마친 소감?**
    
    이론으로만 접했던 인공지능을 프로젝트를 진행하면서 직접 구현하고 공부하면서 더 깊게 이해할 수 있었습니다. 기획 부터 개발까지 쉽지는 않았지만 팀원들과 함께 소통하고 서로 어려운 부분을 보완했기 때문에 프로젝트를 끝까지 마무리 할 수 있었다고 생각합니다. 인공지능의 학습 결과가 만족스럽지는 않지만 부족한 부분을 더 공부하면서 연구할 수 있는 기회인것 같습니다.
    

### 🌻 김서정

---

![사진.JPG](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg)

- **Position** : Frontend
- **Stack** :  **`React` `ChakraUI`  `StyledComponent` `Python`**
- Github: [https://github.com/seojeong2](https://github.com/seojeong2)

**Contribution**

- **Data Crawling**
    - 시 데이터 크롤링
- **웹 페이지 구현**
    - 웹 레이아웃 구현
    - 라우팅 구현
    - 전체 리덕스 구현
    - 키워드 표시 구현
    - 폰트/컬러 선택 기능 구현
    - 시집검토 단계 검토기능 구현
    - 주문번호 표시 기능 구현

**Project QnA**

- **Q. Chakra UI 선택 이유?**
    
    css적인 부분보다 기능구현에 초점을 맞추고 싶어, 빠르게 적용할 수 있는 UI Component를 사용하고자 하였다.
    
- **Q. 프로젝트를 마친 소감?**
    
    많이 배우고 성장할 수 있었던 프로젝트였습니다. 리덕스 사용 어려워 했는데, 이번 프로젝트 하면서 이해도를 높였고, 기능 구현을 완성해가면서 프론트엔드 개발의 매력을 더 많이 느낄 수 있었습니다. 
    

### 🌻 김준석

---

![profilesajin.jpg](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/profilesajin.jpg)

- **Position** : Frontend
- **Stack** : `**React` `ChakraUI`  `StyledComponent`**
- Github: [https://github.com/Junseok3608](https://github.com/Junseok3608)

**Contribution**

- **와이어프레임**
    - MVP 와이어프레임 작성
    - 최종 와이어프레임 수정
- **웹페이지 구현**
    - MVP 레이아웃 구현
    - 리덕스 셋업
    - 전체 페이지 디자인
    - 애니메이션
    - navlink 설정

**Project QnA**

- **Q. Redux 사용 이유**
    
    편지 작성 단계부터 편지 작성 후 시, 꽃말, 자유글, 주문정보 데이터를 주문 단계까지 가지고 있다가 back으로 전달하기 위함.
    
- **Q. 프로젝트를 마친 소감?**
    
    프로젝트를 진행하고 마치면서 공부가 많이 부족함을 느꼈습니다. 프론트엔드를 두 명이 맡아 진행한 것이 처음이었는데, 부족한 부분들을 많이 느끼고 이번 프로젝트 이후로 이해도를 더 높여야 겠다고 생각했습니다. 프로젝트 끝까지 있을 수 있던 건 팀원들의 배려 덕분이었습니다.
    

### 🌻 이무용

---

![Untitled](%E1%84%81%E1%85%A9%E1%86%BE%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%20AI%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%B8%20%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3%20578dad71a7c04c9296d8d2315315e77f/Untitled%202.png)

- **Position** : Back-end
- **Stack** : `**FastApi-MAIL` `KoBERT`**
- **GitHub :** [https://github.com/555cider](https://github.com/555cider)

**Contribution**

- **Data Crawling**
    - scrapy 라이브러리를 이용하여 시 데이터를 크롤링
    (동적 웹페이지의 데이터는 얻지 못하였음)
- **AI Modeling**
    - 레이블 추출 과정에서 LDA 모델링 및 시각화
    (결과가 좋지 않아 사용하진 않음)
    - 추출된 레이블로 시와 편지를 레이블링

**Project QnA**

- **Q. 프로젝트를 마친 소감?**
    
    이전 프로젝트를 느슨하게 수행한 탓인지, 이번에야말로 프로젝트를 한 느낌이 들었습니다. 이렇게 바쁘게 지내니, 시간을 알차게 보내는 것 같아 매우 만족스러운 시간이었습니다. 다만, 인공지능 분야에 대한 이해가 부족하여, 자잘한 시행착오가 많이 있었고, 프로젝트에 기여한 바도 많지 못하였습니다. 당초 예상했던 바보다 더 훌륭한, 위와 같은 결과물이 나올 수 있었던 데는 팀장님과 팀원분들이 많은 노고 덕분이라 생각합니다. 모두 고생하셨습니다.
    

---
 


