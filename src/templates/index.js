import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    // const posts = data.allGhostPost.edges
    const posts = [
        {
            "node": {
                "title": "1 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
        {
            "node": {
                "title": "2 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
        {
            "node": {
                "title": "3 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
        {
            "node": {
                "title": "4 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
        {
            "node": {
                "title": "5 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
        {
            "node": {
                "title": "6 언론산업 사업체와 매체 수 (2014~2019)",
                "slug": "hello",
                "featured": false,
                "feature_image": "https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png",
                "excerpt": "2019년 기준 언론산업 사업체 수는 전년보다 3.1% 줄어, 계속 증가세를 이어오던 수치가 감소세로 방향을 바꿨습니다.",
                "visibility": "public",
                "primary_author": {
                    "name": "공공",
                    "profile_image": "https://static.ghost.org/v2.0.0/images/ghost.png",
                },
                "tags": ['언론산업 실태조사'],
                "reading_time": 2
            }
        },
    ]

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
