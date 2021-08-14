import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/common'
import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'

const HelloPage = () => {
    return (
        <>
            <Helmet>
                <style type="text/css"></style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        <figure className="post-feature-image">
                            <img src="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png" alt="hello" />
                        </figure>
                        <LineChart data={{"2021-05-13":2,"2021-05-14":5,"2021-05-15":3,"2021-05-16":8,"2021-05-17":6,"2021-05-18":6,"2021-05-19":12,"2021-05-20":5,"2021-05-21":5,"2021-05-22":3,"2021-05-23":1,"2021-05-24":6,"2021-05-25":1,"2021-05-26":3,"2021-05-27":2,"2021-05-28":3,"2021-05-29":2,"2021-05-30":8,"2021-05-31":5}} />
                        <section className="post-full-content">
                            <h1 className="content-title">hi hello</h1>
                            <section  className="content-body load-external-scripts">
                            </section>
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

export default HelloPage
