// 정규표현식 (Regular Expression)
// 문자검색, 문자대체, 문자추출
// 생성자방식 (까탈스러워) : new RegExp('검색 할 내용','옵션')
// 리터널방식 (얘를 더 많이) : /검색 할 내용/옵션
// 검섹 = 표현

// 1.정규표현식이 어떻게 동작되는지 알아보기 ->점점영역을 넓혀가기


const str =`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches 
or the expression for details. 
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

//검색, 대체, 추출

// 정규표현식 플래그 (g, i, m)
// g: global: 모든 문자 검색 (안쓰면 매칭되는 첫 문자만 검색)
// i: Ignore Case: 대소문자 구분안함
// m: Multi line: 여러행의 문자열에 대해 검색

// 생성자방식
const reEx = new RegExp('the','gi');
// 어떻게 보일지 메서드를 만들어 놔
console.log(str.match(reEx))

//리터널 방식
const reSample = /the/g
console.log(str.match(reSample));