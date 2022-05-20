# 공공의창 & 빠띠

http://public-view.kr

## 개발환경

- Node 16.14.0
- npm@latest

설치

```
npm install
```

개발서버 시작

```
npm start
```

### 사용 라이브러리

- Gatsby
- Tailwind CSS
- @mdx-js/mdx
- recharts

## 컨텐츠 업로드 방법

1. 예시 파일 : https://raw.githubusercontent.com/parti-coop/data-micro-public-view/master/src/projects/1discrimination.mdx
2. 기본 정보 작성

   ```
   ---
   title: 제목
   slug: csv 파일명 ex) data(몇번째)
   date: 작성일 ex) 2021-09-30T00:00:00+09:00
   thumb: ../images/thumbs/썸네일이미지명
   featuredImg: ../images/featured/디테일에서 사용할 이미지명
   summary: 요약 (100자 이내)
   tags: [‘태그1, ‘태그2’]
   ---
   ```

3. 이미지 입력
   1. 이미지는 data-micro-public-view/src/images/ 에 썸네일, 디테일에서 보여줄 featured 이미지 2개 나눠서 입력해주시면 됩니다.
4. 차트 입력
   1. 차트 입력할 위치에 아래 코드 입력. 본문 중간에 삽입해도 상관없습니다. 차트는 slug csv 파일을 참조합니다.
   ```
    import ChartBase from './ChartBase'
    <ChartBase type={'pie'} data={props.data} columns={props.columns}></ChartBase>
   ```
   2. 차트 데이터는 data-micro-public-view/data/ 에 위치하여야 합니다.
5. 본문 입력
   1. 본문은 Markdown 파일 형식으로 작성해 주시면 됩니다. Ex) 온라인 마크다운 에디터( https://dillinger.io/ )

## 프로젝트 개요

### 템플릿 페이지 생성

- templates/project-details 템플릿으로 src/projects에 있는 mdx 파일을 웹페이지로 generate 합니다
- recharts를 사용해서 파이 차트, 바 차트를 그립니다
-

### 검색

- gatsby의 검색 라이브러리를 적용하는 데 실패햐여 모든 프로젝트 페이지를 불러와서 title.includes(query)로 검색합니다

### social share

- react-share에 의존하고 있습니다
- components/share에 커스텀 컴포넌트를 wrapping해서 사용합니다

## 배포

- netlify에 repository를 연결하여 pull request 시 테스트 버전을 빌드하고, master에 커밋 시 자동으로 빌드해서 배포합니다
