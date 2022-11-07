<!-- # 제목1
## 제목2
### 제목3  -->

# Regular Expression
- 문자검색
- 문자대체
- 문자추출

```
// 정규표현식 플래그 (g, i, m)
g: global: 모든 문자 검색 (안쓰면 매칭되는 첫 문자만 검색)
i: Ignore Case: 대소문자 구분안함
m: Multi line: 여러행의 문자열에 대해 검색
```

```js
// 생성자방식
const reEx = new RegExp('the','gi');
// 어떻게 보일지 메서드를 만들어 놔
console.log(str.match(reEx))

//리터널 방식
const reSample = /the/g
console.log(str.match(reSample));
```