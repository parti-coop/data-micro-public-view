import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/common'
import { LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'

const HelloPage = () => {
    const chart_data = {
        "line_chart_sample": 
            {
                "2021-05-13":2,"2021-05-14":5,"2021-05-15":3,"2021-05-16":8,"2021-05-17":6,"2021-05-18":6,"2021-05-19":12,
                "2021-05-20":5,"2021-05-21":5,"2021-05-22":3,"2021-05-23":1,"2021-05-24":6,"2021-05-25":1,"2021-05-26":3,
                "2021-05-27":2,"2021-05-28":3,"2021-05-29":2,"2021-05-30":8,"2021-05-31":5
            },
        "by_medida_from_2010_to_2019" : 
            [
                {"name":"Workout","data":{"2021-02-10":3,"2021-02-17":3,"2021-02-24":3,"2021-03-03":1,"2021-03-10":4,"2021-03-17":3,"2021-03-24":2,"2021-03-31":3}},
                {"name":"Go to concert","data":{"2021-02-10":0,"2021-02-17":0,"2021-02-24":0,"2021-03-03":0,"2021-03-10":2,"2021-03-17":1,"2021-03-24":0,"2021-03-31":0}},
                {"name":"Wash face","data":{"2021-02-10":0,"2021-02-17":1,"2021-02-24":0,"2021-03-03":0,"2021-03-10":0,"2021-03-17":1,"2021-03-24":0,"2021-03-31":1}},
                {"name":"Call parents","data":{"2021-02-10":5,"2021-02-17":3,"2021-02-24":2,"2021-03-03":0,"2021-03-10":0,"2021-03-17":1,"2021-03-24":1,"2021-03-31":0}},
                {"name":"Eat breakfast","data":{"2021-02-10":3,"2021-02-17":2,"2021-02-24":1,"2021-03-03":0,"2021-03-10":2,"2021-03-17":2,"2021-03-24":3,"2021-03-31":0}}
            ]
    }

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
                        <section className="post-full-content">
                            <h1 className="content-title">hi hello</h1>
                            <section  className="content-body load-external-scripts">
                                <LineChart data={chart_data.line_chart_sample} />
                                <hr/>
                                <LineChart data={chart_data.by_medida_from_2010_to_2019} />
                            </section>
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

export default HelloPage
