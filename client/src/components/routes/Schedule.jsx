import React from 'react'
import Layout from '../shared/Layout'
import FromTo from '../shared/FromTo'
import BusList from '../shared/BusList'

const Schedule = (props) =>
{
    return (
        <Layout>
            <FromTo
                {...props}
                handleChangeFromField={props.handleChangeFromField}
                handleChangeToField={props.handleChangeToField}
                fromValue={props.fromValue}
                toValue={props.toValue}
            />
            <BusList
                routeId={props.routeId}
            />
        </Layout>
    )
}

export default Schedule
