import React from 'react'
import { withRouter } from 'react-router'

const PathNow = (props) => {
    return (
        <>
            <h5>你現在的位置：{props.location.pathname}</h5>
        </>
    )
}

// 高階元件，讓不在route(路由表)出現的孫元件，也能得到router的三個特性，history, location, match
export default withRouter(PathNow)