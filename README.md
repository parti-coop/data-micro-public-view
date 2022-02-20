# 공공의창 & 빠띠

## 개발환경

- Node 14.17.5
- npm@latest

설치

```
npm install
```

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
   2. 차트 데이터는 data-micro-public-view/data/ 에 위치하여야 합니다. 이 데이터는 게시글별 다운로드 파일로도 사용됩니다.
5. 본문 입력
   1. 본문은 Markdown 파일 형식으로 작성해 주시면 됩니다. Ex) 온라인 마크다운 에디터( https://dillinger.io/ )

6. 홈 - 다운로드 파일 업로드
   1. [static 폴더](https://github.com/parti-coop/data-micro-public-view/tree/master/static) 의 data.zip 파일을 수정하면 다운로드 파일을 수정할 수 있습니다.