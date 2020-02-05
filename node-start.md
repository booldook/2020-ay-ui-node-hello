# Node.js 프로젝트 시작하기
## 1. node.js를 설치한다.
### https://nodejs.org 에 접근하여 LTS버전을 다운로드 하고 설치한다. (이때 npm도 설치된다) - 모든PC에서 한번만 설치하면 됨.(아래의 supervisor도 한번만 설치한다)
~~~bash
npm i -g supervisor
~~~
## 2. 프로젝트 폴더를 생성하고 VSCODE를 이용하여 폴더를 연다.
## 3. **ctrl+j** 를 클릭하여 터미널창을 열고 아래의 명령을 실행한다.
~~~bash
npm init -y
~~~ 
## 4. node프로젝트 설치가 완료되면 / 폴더에 package.json 파일이 생성되고 프로젝트를 시작할 준비가 완료된다.
## 5. express를 설치한다.
~~~bash
npm i express pug
~~~