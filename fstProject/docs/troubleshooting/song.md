# 왜 `import`가 안되었는가?

> 24.02.28

## 당황스럽지만 고마운 `Error Message`

```js
import { myVariable } from './src/feat';

document.getElementById('root').innerHTML = myVariable;
```

```shell
GET http://127.0.0.1:5500/fstProject/src/feat net::ERR_ABORTED 404 (Not Found)
```

분명 폴더의 위치도 변수명도 틀리지 않았는데, `(Not Found)`를 만났다. 에러 메시지를 찬찬히 살펴보자.

-   `GET http://127.0.0.1:5500/fstProject/src/feat`
    -   HTTP 요청의 하나로 `GET 요청`를 했다는 뜻.
-   `net::ERR_ABORTED`는 무슨 뜻인가? 처음 보았다.

### `net::ERR_ABORTED`

-   `net`: 네트워크 오류 중 하나임을 나타낸다.
-   `::`: 스코프 결합 연사자이며, 네트워크 오류 코드와 설명을 구분하는 역할이다.
-   `ERR_ABORTED`: 여러 네트워크 오류 중 하나이며, 리소스 로딩이 중단 되었음을 의미한다.

즉, 네트워크 GET 요청으로 해당 파일을 요청했는데, NOT FOUND 찾을 수 없어 리소스 로딩이 중단되었다는 뜻을 의미한다.

## 정확히 파일의 확장자까지 포함해서 해결

Vanilla JS로 작성된 코드로, Chrome 브라우저에서 테스트시 js라는 확장자까지 명시해야 파일을 올바르게 찾아갈 수 있다. 이는 구글 크롬 브라우저의 내부 동작이 그리 정했으며, 내부 동작이 생략 가능한 타 브라우저나 프로젝트 설정으로 확장자를 생략한 채 사용할 수 있도록 설정 가능하다.

```js
import { myVariable } from './src/feat.js';

document.getElementById('root').innerHTML = myVariable;
```
