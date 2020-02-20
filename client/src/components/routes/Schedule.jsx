import React from 'react'
import Layout from '../shared/Layout'
import FromTo from '../shared/FromTo'
import BusList from '../shared/BusList'

const Schedule = (props) => {
    return (
        <Layout>
            <FromTo 
                handleChangeFromField={props.handleChangeFromField} 
                handleChangeToField={props.handleChangeToField} 
            />
            <BusList 
                routeId={props.routeId}
            />
        </Layout>
    )
}

export default Schedule
