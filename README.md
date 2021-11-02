# 🌟Our Memories🎞
[![image](https://user-images.githubusercontent.com/75716255/137454401-c9babde1-cd5d-4b9c-a669-8aa1da388636.png)
](https://meajin.github.io/Our-Memories/ "클릭! 하시면 홈페이지로 이동됩니다!")

<br />

### 🔗 Our Memories 주소
- https://meajin.github.io/Our-Memories/
- 최상단 이미지를 클릭하셔도 홈페이지로 이동됩니다.

<br />

## 📂 파일 구조

```
📂:.
│  index.html
│
├─css
│      css.css
│
├─font
│      폰트 모음
│
├─icon
│      아이콘 모음
│
├─img
│      이미지 모음
│
└─js
        script.js
```

<br />

## ❓ 토이프로젝트 수행 이유 및 목적

- HTML/CSS 복습
  - [Web-Study](https://github.com/MEAJIN/Web-Study)에 기재 되어 있는 기술 기반
  - 구현하면서 필요한 기술은 구글링

- 역량 확인
  - ✔ 문제해결능력
  - ✔ 구현력
  - ✔ 학습능력
  - ✔ 자기주도 능력/탐구력 

- 직접 구현한 서비스를 친구들과 함께 나눠보고 싶어서
  - 추억

- 포트폴리오 제작

<br />

## ❔ 왜, Our Memories 인가?

같은 중/고등 학교를 졸업하여 현재까지도 변함 없이 지내고 있는 친구들에게 우리만의 선물을 주고 싶었습니다.

친구들은 현재 개개인의 블로그를 운영 중 인데, 모두가 하나같이 자신의 일상이나 취미와 같은 글을 작성하면서 다양한 추억들을 기록해오고 있습니다. 

그러나 블로그 특성상 특정 인물만 지목하여 게시글을 보게 할 수는 없다는 단점을 가지고 있기 때문에 이를 보완한 '우리만의 사이트' 즉, 저와 제 친구들만의 사이트를 만들어 보면 좋겠다는 생각이 들었습니다. 또한, '우리만의 사이트' 라는 주제에 걸맞게 우리의 '추억'을 남길 수 있는 사이트라면 정말 멋지겠다는 생각이 들었습니다. 

그래서 '우리의' 라는 뜻인 `Our`와 '추억들' 이라는 뜻인 `Memories` 라는 단어를 합쳐 우리의 추억들 즉, `Our Memories` 라는 명칭이 탄생하게 되었습니다.

<br />

## 🛠 기술 스택

- `HTML5`
- `CSS3`
- `JS`
- `Bootstrap v5.1`
- `AOS` (Animate on scroll)

<br />

## 🔠 코딩 스타일

- 괄호의 위치
  - K&R

- 명칭 작성
  - CSS : 파스칼표기법
  - JS : 카멜표기법
  - Class : 여백 사이에 '-' 표기 (ex. abc-class)

- VScode Formater
  - Beautify

<br />

## 🔎 주요 기능 살펴보기

<br />

> ### Carousel

<br />

- `Bootstrap`에서 제공하는 [`Carousel`](https://getbootstrap.com/docs/4.4/components/carousel/) 사용



- 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 정보를 가져옴 (⭐추후 구현 예정)
<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137599135-759f5f6f-4131-4057-90e3-a853059dd75b.png" width="15%"></p>

<br />

- Carousel 클릭 시 해당 게시글로 이동

<br />

<img src="https://user-images.githubusercontent.com/75716255/137490549-a1d3a3e1-5edf-49a1-bd5f-fbbad30d91bd.gif" width="100%">

<br />

- '추억들(memories)' 이라는 주제를 가장 잘 나타내 주는 요소(element)이기 때문에 가시성에 초점을 두는 방향으로 진행함

  - 따라서, 전체화면으로 구성
  
    - `viewport`의 `height`와 `width` 값에 근거하여 측정되는 단위인 `vh`와 `vw` 를 사용
    -  `퍼센트(%)`를 사용하게 되면 가장 가까운 부모 요소에 상대 적인 영향을 받기 때문에 사용하지 않음

<br />

```css
.carousel-item {
  height: 100vh;
  width: 100vw;
  }
```

<br />
<br />

> ### Card(profile)

- 자신을 소개하는 프로필 카드

<br />

  - 각 카드에 자신만의 포인트를 주기 위해 직업과 관련된 이미지를 카드 배경으로 지정
  
  - 형태
  
    - 기본 형태 : 프로필 사진만 보임
  
    - 마우스 오버 시 : 카드에 해당하는 사람에 대한 정보 표시 (`:hover`사용)

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137599559-501e173f-d3a8-4cb2-8b50-3152279ac659.png" width="15%"></p>

<br />

<img src="https://user-images.githubusercontent.com/75716255/137509705-7b7479ac-e349-4aaa-b082-5a750495ea57.gif" width="100%">

<br />

```css

.container .card-bg:hover {
  background-image: url('../img/profile-bg.jpg');
}

.container .card-bg2:hover {
  background-image: url('../img/profile-bg2.jpg');
}

.container .card-bg3:hover {
  background-image: url('../img/profile-bg3.png');
}

.container .card-bg4:hover {
  background-image: url('../img/profile-bg4.jpg');
}

.container .card-bg5:hover {
  background-image: url('../img/profile-bg5.png');
}

.container .card-bg6:hover {
  background-image: url('../img/profile-bg6.jpg');
}

.container .card-bg7:hover {
  background-image: url('../img/profile-bg7.jpg');
}

.container .card-bg8:hover {
  background-image: url('../img/profile-bg8.jpg');
}

.container .card-bg9:hover {
  background-image: url('../img/profile-bg9.jpg');
}

.container .card:hover {
  height: 400px;
  width: 300px;
  text-align: center;

  /* 카드 투명도 색상 */
  background: rgba(0, 0, 0, .7);
  
  /* backdrop-filter: blur(0.2px); */
  box-shadow: 0 5px 10px rgba(0, 0, 0, .5);
  border-radius: 5%;
}

.container .card:hover .profile-img {
  margin: 0 auto;
  height: 120px;
  width: 120px;
  margin-top: 60px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 10px rgba(255, 255, 255, .2),
    0 15px 100px rgba(0, 0, 0, .1);
}

.container .card:hover p {
  font-size: 15px;
  color: #fffafa;
  margin-top: 30px;
}

.container .card:hover h3 {
  margin-top: 5px;
  padding-bottom: 3px;
  font-size: 30px;
  color: white;
}

.container .card:hover span {
  font-size: 15px;
  color: #fffafa;
  margin: 0;
}

.container .sns-icon:hover {
  margin-top: 30px;
}

.container .sns-icon:hover .blog {
  padding: 0 10px;
}
```

<br />
<br />

> ### Post

<br />

- 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 리스트가 나열 됨 (⭐추후 구현 예정)
- 리스트를 클릭하면 해당 게시글로 이동 (⭐추후 구현 예정)

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137522592-ac722638-8a04-4963-a78c-e8daecd93f76.gif" width="85%"></p>

<br />

- `:hover`

  - 초기 : `scale`을 사용하여 리스트 확대
  - 현재 : `box-shadow` 값을 진하게 주어 게시글 리스트 강조

<br />

```css

/* 기본 박스 그림자 값 */
.container .post-box {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
}

/* 마우스 오버 시 그림자 값 */
.container .post-hover:hover {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
}
```

<br />

- 'More▶' 버튼의 경우 시각적인 재미를 주기위해 `animation`을 사용하여 역동적인 효과를 줌

- 'More▶' 버튼을 클릭하면 게시판으로 이동 (⭐추후 구현 예정)
  
  - 등록된 모든 게시글을 열람 가능 (⭐추후 구현 예정)
  - 게시글 작성 가능 (⭐추후 구현 예정))

<br />

```css

.container .more-box {
  width: 100%;
  text-align: right;
  animation: horizontal 0.7s ease-in-out infinite;
}

@keyframes horizontal {
  0% {
    margin-left: 10px;
  }

  50% {
    margin-right: 9px;
  }

  100% {
    margin-left: 10px;
  }
}
```

<br />
<br />

> ### Post Record Box

<br />

- 게시글을 작성 할 수 있도록 `form` 사용
  
  - `input`, `textarea`
 
- 제목, 부제목, 내용 중 단 하나라도 입력 한 값이 없으면 등록 버튼의 `submit`이 요청되지 않도록 `required` 속성을 줌

- `placeholder` 속성을 주어 필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말을 명시

- 게시글 작성 중 특정 상황을 대비한 게시글 초기화 버튼 구현

- 초기화 버튼과 등록 버튼은 서로 헷갈리지 않도록 `:hover` 효과 부여

  - 초기화 버튼 : '🟥붉은색' 으로 변함
  - 등록 버튼 :  '🟩녹색' 으로 변함

<br />

<img src="https://user-images.githubusercontent.com/75716255/137509718-90f4fd18-48f9-4056-84f0-36fffce66c5e.gif" width="100%">

<br />

```html

<form action="" class="post-record-box" data-aos="fade-down">
        
  <input type="text" placeholder="제목" required class="post-record-title border">
  <input type="text" placeholder="부제목" required class="post-record-subtitle border">
  <textarea cols="100" rows="10" placeholder="내용을 입력해주세요." required class="post-record-contents border"></textarea>
  
  <div class="post-record-file-box border">
    <input type="file" multiple="multiple" name="filename[]"  id="myFile" class="post-record-file">
  </div>
   
  <div class="test">
    <input type="reset" placeholder="reset" value="초기화" class="post-record-reset-btn btn hred">
    <input type="submit" placeholder="submit" value="등록" class="post-record-submit-btn btn"> <!--onclick="alert('게시글이 등록 되었습니다.')"-->
  </div>
        
</form>
```

```css

.post-record-box .btn:hover {
  background: #04B486;
}

.post-record-box .hred:hover {
  background: #DF0101;
}
```

<br />
<br />

> ### Search

<br />

- 찾고자 하는 컨텐츠의 키워드를 입력 시 관련 컨텐츠를 리스트로 출력. (⭐추후 구현 예정)

- `scale`을 사용하여 검색 아이콘에 마우스 오버 시 아이콘 확대 효과를 줌

- 검색창 활성 후, 검색창 내부 돋보기 아이콘에 마우스 오버 시 녹색 아이콘으로 변경 

- 검색창 `input` 태그에 `placeholder` 속성을 주어 필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말 명시

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137592230-8f400839-46cf-4f1e-b4e3-8925d0fb603d.gif" width="50%"></p>

<br />

```html

<form action="" class="search-form">
  <input type="search" id="search-box" placeholder="이곳에 검색어를 입력해 주세요!">
  <label for="search-box" class="search-button"></label>
</form>
```

```css

header .navbar2 #search:hover,
header .navbar2 #sign-in:hover {
  transform: scale(1.4);
}
```

<br />

- 검색창 활성/비활성 이벤트 동작을 위해 `onclick` 속성 사용

  - 이를위해 자바스크립트 사용
  
    - method()
      
      - `toggle()` : on/off 기능
      - `remove()` : 클래스 값 제거 (다른 클래스와 동작이 겹치지 않도록 하기 위해 사용)
     
    - 변수는 재사용이 필요 없기 때문에 `const`로 선언
   
- CSS의 `transition`을 사용하여 부드러운 애니메이션 효과 부여

<br />

```css

header .search-form {
  position: absolute;
  top: 110%;
  right: -110%; /* 비활성일 때 위치 */
  width: 500px;
  height: 50px;
  background: #ffffff;
  border-radius: .5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
  border-radius: 5px;
}

header .search-form.active {
  right: 10px; /* 활성 시 위치 */
  transition: .2s linear;
}
```

```js

// search
const searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//remove
window.click = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
```

<br />
<br />

> ### Login

<br />

- 로그인, 로그아웃, 비밀번호 찾기, 회원가입 기능을 제공 (⭐추후 구현 예정)

- 로그인 아이콘은 대중적으로 많이 사용되고 있는 사람 형태의 아이콘을 사용

- `scale`을 사용하여 로그인 아이콘에 마우스 오버 시 아이콘 확대 효과를 줌

- 아이디 입력은 이메일 형식만 가능하며, 올바른 이메일 형식이 아닐경우 경고 메세지가 출력되어 올바른 이메일 형식 입력을 유도

- `input` 태그에 `placeholder` 속성을 주어 필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말을 명시

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137592534-77692a66-da77-4628-ab39-c3cd9f6206ec.gif" width="40%"></p>

<br />

```html

<form action="" class="login-form">
  <h3>our memories login</h3>
  <input type="email" placeholder="email" class="login-box">
  <input type="password" placeholder="password" class="login-box">
  <input type="submit" placeholder="submit" value="login" class="btn">
  <P class="click-m">forget your password <a href="#">click here</a></P>
  <P>don't have an account <a href="#">create now</a></P>
</form>
```

```css

header .navbar2 #search:hover,
header .navbar2 #sign-in:hover {
  transform: scale(1.4);
}
```

<br />

- 로그인창 활성/비활성 이벤트 동작을 위해 `onclick` 속성 사용

  - 이를위해 자바스크립트 사용
  
    - method()
      
      - `toggle()` : on/off 기능
      - `remove()` : 클래스 값 제거 (다른 클래스와 동작이 겹치지 않도록 하기 위해 사용)
     
    - 변수는 재사용이 필요 없기 때문에 `const`로 선언
   
- CSS의 `transition`을 사용하여 부드러운 애니메이션 효과 부여

<br />

```css

header .login-form {
  position: absolute;
  top: 110%;
  right: -110%; /* 비활성 시 위치 */
  width: 400px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  text-align: center;
}

header .login-form.active {
  right: 10px; /* 활성 시 위치 */
  transition: .2s linear;
}
```

```js

//login
const loginForm = document.querySelector('.login-form');

document.querySelector('#sign-in').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

//remove
window.click = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
```

<br />
<br />

> ### @media

<br />

- `@media` 기능을 사용하여 반응형 웹으로 구현

- 사용하는 기기에 적합한 환경을 제공

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137592404-88f5fbb8-24d1-4a57-ac63-c6be9afb0fcc.gif" width="85%"></p>

<br />

- 모바일 환경을 위해 네비게이션바는 메뉴 모양의 버튼 형태로 제작하여 유틸성 확대
  
  - 단, 메뉴 버튼이 나오는 해상도는 최대 768px

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137526984-cf56cdcd-740d-4547-a643-9815543290ff.gif" width="50%"></p>

<br />

- 메뉴 활성/비활성 이벤트 동작을 위해 `onclick` 속성 사용

  - 이를위해 자바스크립트 사용
  
    - method()
      
      - `toggle()` : on/off 기능
      - `remove()` : 클래스 값 제거 (다른 클래스와 동작이 겹치지 않도록 하기 위해 사용)
     
    - 변수는 재사용이 필요 없기 때문에 `const`로 선언
   
- CSS의 `transition`을 사용하여 부드러운 애니메이션 효과 부여

<br />

```css

header .navbar.active {
  right: 7px;
  transition: .2s linear;
}
```

```js

//menu-btn
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

//remove
window.click = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
```

<br />

아래 코드는 `@media`의 전체 코드

```css

@media screen and(max-width: 1200px) {

  .carousel-intro h2 {
    font-size: 35px;
  }

  .carousel-intro p {
    font-size: 20px;
  }
}

@media screen and (max-width: 992px) {

  html {
    font-size: 10px;
  }

  header .navbar a {
    margin: 5px 10px;
    font-size: 15px;
  }

  .carousel-intro h2 {
    font-size: 25px;
  }

  .carousel-intro p {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {

  header .navbar2 #menu {
    display: inline-block;
  }

  header .search-form {
    width: 97.5%;
  }

  header .login-form {
    width: 97.5%;
  }

  header .navbar {
    position: absolute;
    top: 110%;
    right: -110%;
    width: 97.5%;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    border-radius: 5px;
    background: #ffffff;
    display: block;
  }

  header .navbar.active {
    right: 7px;
    transition: .2s linear;
  }

  header .navbar a {
    margin: 5px 10px;
    font-size: 20px;
    display: block;
  }

  .carousel-intro h2 {
    font-size: 20px;
  }

  .carousel-intro p {
    font-size: 15px;
  }
}

@media screen and (max-width: 576px) {

  .carousel-intro h2 {
    font-size: 18px;
  }

  .carousel-intro p {
    font-size: 15px;
  }
}

@media screen and (max-width: 200px) {

  .carousel-intro {
    width: 100%;
  }

  .carousel-intro h2 {
    font-size: 18px;
  }

  .carousel-intro p {
    font-size: 15px;
  }
}
```

<br />
<br />

## 🤦‍♀️ 겪었던 문제 🔒

<br />

> ### AOS 사용으로 인한 여백 발생 

<br />

### 1. 문제 인식 및 이해 🤔

<br />

- 모바일 장치로 사이트 접속시, 우측 사이드에 여백이 발생함을 확인
 
<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137769521-11716608-99e9-4808-a615-5109726265a4.gif" width="70%"></p>

<br />

- 여백으로 인해 `<div>` 정렬 비대칭 문제 발생

  - 해상도마다 여백 너비 차이는 있음

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137776743-dd11f3f4-fe16-4335-929e-b7ffc7e621f3.gif" width="100%"></p>

<br />

- 처음에는 `<header>`에 적용한 `position: fixed;` 속성 때문인 줄 알았음

  - `position: sticky;`로 할 경우 여백 문제가 해결됐기 때문

  - 그러나 `position: fixed;`가 아니었기 때문에 검색/로그인 아이콘을 클릭할 때마다 스크롤이 올라가는 문제 발생
    
    - `fixed`는 viewport를 기준으로 한다면, `sticky`는 scroll-box를 기준으로 동작하기 때문 ([참고](https://tech.lezhin.com/2019/03/20/css-sticky))

- 따라서 `position` 문제는 아닐 것 이라는 확신이 듦

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137791860-383e71a7-d518-45d0-ae26-d33ebba40850.gif" width="70%" height="80%"></p>

<br />

- 다른 원인을 찾아 보던 중, 메뉴의 Our 항목에서 Memories 항목으로 완전히 넘어 갈 때 여백 문제가 해결됨을 확인

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137775298-ae4d9e1a-4de7-40c6-93d3-816610c2b199.gif" width="70%"></p>

<br />

- 크롬 개발자 도구를 켜놓고 해당 구간 재확인

  - `AOS`의 JS 동작 시 발생하는 문제임을 확인

    - 얼핏 보기엔 JS가 문제로 보였는데 곰곰히 생각해 보니 JS는 이벤트 동작만 제공을 하니, 근본적인 문제는 CSS라고 생각 됨
    
      - CSS는 이벤트 동작에 효과를 줄 수 있기 떄문
    
<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137793223-952e615e-93b7-46ce-b15f-273f1de0b6a3.gif"></p>

<br />

- 우선 이 문제의 원인이라 생각되는 `AOS`를 지워봤더니 여백 문제가 해결됨

  - `AOS`가 문제의 원인이었다는 결론을 내림

<br />

###  2. 문제 해결을 위한 정보 수집 🧐

<br />

- `AOS` 공식 [Github](https://github.com/michalsnik/aos#recipes)를 읽어 보면 제공되는 애니메이션만으로는 충분하지 않을 수 있으니, 해상도에 따른(반응형) 다른 애니메이션을 직접 만들어 쓰라고 나와있음

  - __공식 문서를 읽고 들은 생각__
  
    - 내가 직면한 문제는 특정 해상도에서 발생하는 여백 문제이긴한데, 굳이 해상도에 따른 반응형 애니메이션을 새로 만들어 써야할까?
    - 생각해보면 반응형 애니메이션도 결국 CSS가 아닌가?
    - 그렇다면 일단 크롬 개발자 모드를 통해 이미 적용 되어있는 AOS의 CSS 기본값을 수정해서 결과를 살펴보자!

- `AOS` [개발자 게시글](https://css-tricks.com/aos-css-driven-scroll-animation-library/)의 댓글을 확인해 보면, 내가 겪고 있는 문제를 똑같이 겪은 사람이 있음

  - 애초에 이 문제는 `AOS`의 단골 문제였던 것

  - 개발자는 이를 해결하려면 `<body>`에 `overflow-x: hidden;` 값을 주던지, `AOS.init({ disable: 'mobile' });` 코드를 추가하라고 함

<br />

### 3. 문제 해결 가능성이 있는 모든 방법 시도 😤

<br />

> #### 첫 번째 방법. AOS의 CSS 기본값 수정

<br />

- 사용한 `AOS`의 html 코드는 아래와 같다.

  - [애니메이션 동작 확인](https://michalsnik.github.io/aos/)

<br />

```html

<div data-aos="fade-right"></div>
<div data-aos="fade-left"></div>
```

<br />

- html 코드의 css 속성 값은 아래와 같음

  - right의 x축은 100px, left의 x축은 -100px
  
    - 두 x축 값을 음수(-) 또는 양수(+)로 동일하게 만들어 줄 경우 여백 문제가 해결됨을 확인    
    - 두 x축의 위치에 따른 갭(gap) 떄문에 생겨난 문제임이 확실
    
- 결론 : `AOS`가 적용되어 있는 `<div>`의 내용이 `container` 크기 보다 더 길어서 생긴 문제였음❗❗

<br />

```css

/* 속성 변경 전 */
html:not(.no-js) [data-aos=fade-right] {    
    transform: translate3d(100px,0,0);
}

html:not(.no-js) [data-aos=fade-left] {    
    transform: translate3d(-100px,0,0);
}

/* 속성 변경 후 */
html:not(.no-js) [data-aos=fade-right] {    
    transform: translate3d(-100px,0,0);
}

html:not(.no-js) [data-aos=fade-left] {    
    transform: translate3d(-100px,0,0);
}

/* 또는 */

html:not(.no-js) [data-aos=fade-right] {    
    transform: translate3d(100px,0,0);
}

html:not(.no-js) [data-aos=fade-left] {    
    transform: translate3d(100px,0,0);
}
```

<br />

> #### 두 번째 방법. `<body>`에 `overflow-x: hidden;` 추가

<br />

- 첫 번째 방법에서 `AOS`가 적용된 ``의 내용이 `container` 크기보다 더 길어서 생긴 문제였다는 결론이 나왔으니 해결법은….

  - `<body>`에 `overflow-x: hidden;` 추가

<br />

```css

body {
  background: #f7f7f7;
  overflow-x: hidden;
}
```

<br />

- 참고로 `AOS.init({ disable: 'mobile' });`는 사용하지 않음

  - 모바일 환경에서도 `AOS`는 사용할 것이기 때문

<br />

### 4. 최종 테스트 🥳

<br />

- `overflow-x: hidden;`를 추가한 후, 여백 문제가 해결되었는가?

  - ❗❗ ❗❗ YES ❗❗ ❗❗

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137817941-ccf1acf1-64a3-4899-8164-4afd2f8440b4.gif" width="70%"></p>

<br />

### 🔓 문제 해결 과정에서 느낀 점

<br />

- 역시 오류 해결은 무한한 삽질이 답

- 원인을 찾았으면 근본 부터 차근차근 파고 들자

- 나.. 조금은 성장했을지도? 😎

<br />
<br />

## 🩺 개선해야 할 부분

- [x] 각 `@media` 구간에 따른 `font-size` 

- [ ] ~~모바일 환경 `Carousel` 높이 변경 → 50~80vh 예상~~

- [ ] `SCSS`로 교체

<br />

## ⭐ 추후 구현 기능

- Carousel
  
  - [ ] 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 정보를 가져옴

- Post

  - [ ] 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 리스트가 나열 됨
  - [ ] 리스트를 클릭하면 해당 게시글로 이동
  - [ ] 등록된 모든 게시글을 열람 가능
  - [ ] 게시글 작성 가능

- Record

  - [ ] 첨부파일(이미지)는 미리보기가 가능 해야 함
  - [ ] 게시글 작성 중, 첨부된 이미지는 삭제될 수 있어야 함
  - [x] 기존 file 태그를 사용하여 이미지를 추가 할 수 있어야함
  - [ ] 파일 탐색기를 통해 파일을 드래그 앤 드롭해도 이미지 추가가 되어야 함
  - [ ] 메인 페이지 게시글 우측 상단에 작성자 이름 떠야함
  - [ ] 작성 날짜 떠야함
  - [ ] Create(생성), Read(읽기), Update(갱신), Delete(삭제)

- Search

  - [ ] 찾고자 하는 컨텐츠의 키워드를 입력 시 관련 컨텐츠를 리스트로 출력

- Login

  - [ ] 로그인, 로그아웃, 비밀번호 찾기, 회원가입 기능을 제공

<br />

## ➕ 추가해보고 싶은 기능

- 📅 캘린더

  - ⏰ 알림기능
  - 📝 메모 가능
  - ✅ TO DO LIST

- 🎮 미니게임

  - 🏆 순위 리스트
  - ⏰ 알림기능 (순위 바뀌면 알림 감)

- 🧍‍♀️ 프로필

  - 🛠 프로필 카드를 본인이 직접 추가 또는 수정 가능

    - 예시 

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/138879257-fcaf90e8-933d-42dc-8dc3-85edc36a7641.png"></P>

<br />

## 📚 Our-Memories를 위해 공부 해야 할 것

- SCSS
- JS
- React

<br />

## 💡 프로젝트를 하면서 알게된 것

- og tag
- flex / grid
- *::selection
- aos
- scroll-*
- !important

<br />

## 🌈 프로젝트를 하면서 느낀 점

- 자주 사용하는 이미지, 아이콘은 클래스로 만들어놓자.

  - 필요할 때마다 바로바로 사용 할 수 있음 (♻ 재사용 굳!)
  - 번거롭게 코드 다시 안 쳐도 됨
  - 코드 깔끔

- 자주 사용하는 CSS는 SCSS로 사용하자.

  - 나는 색상코드를 외울 만큼의 기억력은 없다.

- `flex`와 `grid`, 요 두 놈은 정말 대단하다.

  - 얘네를 알기 전에는 `float`로 `<div>` 정렬 하는 줄 알았다;
  - 날 `수직 정렬`의 늪에서 구원해줬다. (천사아니야?😇)

- `vw`와 `vh`는 정말 유용하다.

  - 날 `100%`의 늪에서 벗어나게 해주었다.

- 단위는 일관되게 하자

  - `px`을 썼으면 쭉 `px`로 쓰고, `rem`으로 썼으면 `rem`으로 쭉
  - 이래야 나중에 크기 정하기가 쉽다.

