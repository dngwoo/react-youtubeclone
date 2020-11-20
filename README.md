# Youtube-Clone
React를 활용하여 유튜브를 클론해봅니다.

## 페이지 구성
- [ ] Home
- [ ] Detail
- [ ] Search

## 포맷터 셋팅
css 부분
1. prettier extension 설치
1. vscode settings.json에 css에서만 동작하게 추가
    ```json
    [css]: {
        formatOnSave: true
    }
    ```
1. 추가설명<br>
기본적으로는 eslint extension이 동작하므로 prettier extension은 css에서만 동작하게 만들어준다. format on save는 꺼준다.

## PostCss nested 설정방법
create-react-app을 사용하게 되면 커스텀은 불가능하기 때문에 eject로 풀어서 설정을 바꿔줘야 한다. 하지만 craco라는 것을 이용하여 eject하지 않고 설정을 바꿀 수 있다.<br>
[craco](https://www.npmjs.com/package/@craco/craco)<br>
[postcss-nested 적용방법](https://github.com/gsoft-inc/craco/tree/master/recipes/use-a-post-css-config-file)<br>
[postcss-sugarss-language](https://github.com/velopert/react-tutorial/blob/master/styling/04-postcss.md)