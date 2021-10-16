# 👩‍👩‍👧‍👧Our Memories🎞
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
  - CSS3 : 파스칼표기법
  - JS : 카멜표기법
  - Class : 스네이크표기법

- VScode Formater
  - Beautify

<br />

## 🔎 주요 기능 살펴보기

<br />

> ### Carousel

<br />

<img src="https://user-images.githubusercontent.com/75716255/137490549-a1d3a3e1-5edf-49a1-bd5f-fbbad30d91bd.gif" width="100%">

<br />

- `Bootstrap`에서 제공하는 [`Carousel`](https://getbootstrap.com/docs/4.4/components/carousel/) 사용

- Carousel 클릭 시 해당 게시글로 이동

- `Carousel`은 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 정보를 가져옴 (⭐추후 구현 예정)

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137599135-759f5f6f-4131-4057-90e3-a853059dd75b.png" width="15%"></p>

<br />

```css
.carousel-item {
  height: 100vh;
  width: 100vw;
  }
```

<br />

- `Carousel`은 '추억들(memories)' 이라는 주제를 가장 잘 나타내 주는 요소(element)이기 때문에 가시성에 초점을 두는 방향으로 진행함

  - 따라서, 전체화면으로 구성
  
    - `viewport`의 `height`와 `width` 값에 근거하여 측정되는 단위인 `vh`와 `vw` 를 사용
    -  `퍼센트(%)`를 사용하게 되면 가장 가까운 부모 요소에 상대 적인 영향을 받기 때문에 사용하지 않음

<br />
<br />

> ### Card(profile)

<br />

네비게이션바의 'Our' 항목은 저와 제 친구들을 소개하는 프로필 카드로 구성되어 있습니다. 기본 형태는 프로필 사진만 보이도록 되어 있으나,  `:hover` 효과를 사용하여 오버 시 프로필 카드에 해당하는 사람에 대한 정보가 보여지도록 구성하였습니다.  `:hover` 효과를 통해 보여지는 정보는 프로필 사진, 생년월일, 이름, 직업, 개인 사이트(깃, 블로그, 인스타그램)가 있습니다.  또한, 각 카드에 자신만의 포인트를 주기 위해 직업과 관련된 이미지를 카드 배경으로 지정해주었습니다.

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

네비게이션바의 'Memories' 항목은 `Carousel`과 마찬가지로 모든 사용자를 포함하여 가장 최근에 등록 된 5개의 게시글 리스트가 나열되며, 리스트를 클릭하면 해당 게시글로 이동됩니다. (⭐추후 구현 예정)

<img src="https://user-images.githubusercontent.com/75716255/137522592-ac722638-8a04-4963-a78c-e8daecd93f76.gif" width="100%">

<br />

초기의 `:hover` 효과는 게시글 리스트에 마우스를 오버 했을 경우 `scale`을 사용하여 리스트가 확대 되는 효과를 줬었습니다. 그러나 너무 뜬금없다는 느낌이 강하게 들어 `box-shadow` 값을 좀 더 진하게 주어 마우스 오버 시, 게시글 리스트를 강조 하는 방향으로 코드를 수정하였습니다. 

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

리스트 우측 하단에 위치한 'More▶' 버튼의 경우 시각적인 재미를 주기위해 `animation`을 사용하여 역동적인 효과를 주었습니다. 또한, 가장 최근에 등록 된 5개의 게시글 리스트(현재는 4개의 임시 리스트)만 메인에 노출되도록 해놨기 때문에 'More▶' 버튼을 클릭하면 게시판으로 이동하여 모든 게시글을 볼 수 있도록 하며, 게시글 또한 작성 할 수 있게끔 구현하려고 합니다. (⭐추후 구현 예정)

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

네비게이션바의 'Record' 항목은 게시글을 작성 할 수 있도록 `form`을 사용하여 구현하였습니다. 사용된 태그는 `input`, `textarea` 입니다. 제목, 부제목, 내용 중 단 하나라도 입력 한 값이 없으면 등록 버튼의 `submit`이 요청되지 않도록 위의 세 항목에 `required` 속성을 주었고, `placeholder` 속성을  필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말을 명시하였습니다.

또한, 게시글 작성 중 특정 상황을 대비하여 게시글 초기화 버튼을 같이 구현해 놓았습니다. 초기화 버튼과 등록 버튼은 클릭 직전의 순간 까지 서로 헷갈리지 않게끔 하기 위해 `:hover` 효과를 사용하여 마우스 오버 시 초기화 버튼은 '🟥붉은색'으로, 등록 버튼은 '🟩녹색'으로 변하는 효과를 주었습니다.


<img src="https://user-images.githubusercontent.com/75716255/137509718-90f4fd18-48f9-4056-84f0-36fffce66c5e.gif" width="100%">

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

> ## Search

<br />

네비게이션바의 Search 항목은 찾고자 하는 컨텐츠의 키워드를 입력 시 관련 컨텐츠를 리스트로 출력해줍니다(⭐추후 구현 예정). 검색이라는 주제에 맞게 돋보기 아이콘을 사용하였고, `scale`을 사용하여 마우스 오버 시 아이콘이 확대 되는 효과를 주었습니다. 또한, 검색창이 활성화 된 상태일 경우 검색창 내부의 돋보기 아이콘에 마우스 오버시 녹색으로 변하는 효과를 주었습니다. 마지막으로 검색창의 `input` 태그에 `placeholder` 속성을 주어 필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말을 명시하였습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137592230-8f400839-46cf-4f1e-b4e3-8925d0fb603d.gif" width="50%"></p>

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

검색 버튼의 경우 검색창 활성/비활성 이벤트 동작을 위해 `onclick` 속성을 사용하였습니다. 따라서, 자바스크립트의 `toggle()`메서드를 사용하였고 변수는 재사용이 필요 없기 때문에 `const`로 선언하였습니다. 검색창이 활성화 되어 있는 동안은 다른 클래스와 동작이 겹치지 않도록 `remove()` 메서드를 사용하여 메뉴 버튼 이외의 클래스는 값을 제거해주었습니다. 또한, 자바스크립트로는 단순히 검색창을 활성/비활성 하는 기능만 구현이 가능 하기 때문에 CSS3의 `transition`을 사용하여 부드러운 애니메이션 효과를 주었습니다.

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

> ## Login

네비게이션바의 Login 항목은 로그인, 로그아웃, 비밀번호 찾기, 회원가입 기능을 제공합니다(⭐추후 구현 예정). 로그인 아이콘은 대중적으로 많이 사용되고 있는 사람 형태의 아이콘을 사용하였습니다. 이는 검색 버튼과 마찬가지로 `scale`을 사용하여 마우스 오버 시 아이콘이 확대 되는 효과를 주었습니다. 아이디 입력은 이메일 형식만 가능하며, 올바른 이메일 형식이 아닐경우 경고 메세지가 출력되어 올바른 이메일 형식 입력을 유도합니다. 또한, `input` 태그에 `placeholder` 속성을 주어 필드에 사용자가 적절한 값을 입력 할 수 있도록 도움말을 명시하였습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/137592534-77692a66-da77-4628-ab39-c3cd9f6206ec.gif" width="40%"></p>

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

로그인 아이콘의 경우 로그인창 활성/비활성 이벤트 동작을 위해 `onclick` 속성을 사용하였습니다. 따라서, 자바스크립트의 `toggle()`메서드를 사용하였고 변수는 재사용이 필요 없기 때문에 `const`로 선언하였습니다. 검색창이 활성화 되어 있는 동안은 다른 클래스와 동작이 겹치지 않도록 `remove()` 메서드를 사용하여 메뉴 버튼 이외의 클래스는 값을 제거해주었습니다. 또한, 자바스크립트로는 단순히 검색창을 활성/비활성 하는 기능만 구현이 가능 하기 때문에 CSS3의 `transition`을 사용하여 부드러운 애니메이션 효과를 주었습니다.

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

## @media

<br />

Our Memories는 `@media` 기능을 사용하여 반응형 웹으로 구현하였습니다. 따라서 사용하는 기기에 적합한 환경을 제공해줍니다.

<img src="https://user-images.githubusercontent.com/75716255/137592404-88f5fbb8-24d1-4a57-ac63-c6be9afb0fcc.gif" width="100%">

<br />

또한, 모바일 환경을 위해 네비게이션바는 메뉴 모양의 버튼 형태로 제작하여 이용에 불편함이 없도록 하였습니다. (단, 메뉴 버튼이 나오는 해상도는 최대 `768px`로 지정)

<img src="https://user-images.githubusercontent.com/75716255/137526984-cf56cdcd-740d-4547-a643-9815543290ff.gif" width="100%">

<br />

메뉴 버튼의 경우 메뉴를 접고 펼치는 이벤트 동작을 위해 `onclick` 속성을 사용하였습니다. 따라서, 자바스크립트의 `toggle()`메서드를 사용하였고 변수는 재사용이 필요 없기 때문에 `const`로 선언하였습니다. 메뉴 버튼이 활성화 되어 있는 동안은 다른 클래스와 동작이 겹치지 않도록 `remove()` 메서드를 사용하여 메뉴 버튼 이외의 클래스는 값을 제거해주었습니다. 또한, 자바스크립트로는 단순히 메뉴를 접고 펼치는 기능만 구현이 가능 하기 때문에 CSS3의 `transition`을 사용하여 부드러운 애니메이션 효과를 주었습니다.

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

아래 코드는 `@media`의 전체 코드 입니다.

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




