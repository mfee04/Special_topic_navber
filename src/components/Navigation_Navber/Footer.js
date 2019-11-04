import React from 'react'
//樣式
import '../../style/Home.scss'
//分頁連結


class Footer extends React.Component {
    constructor() {
        super()
    } render() {
        return (
            <>
                <div className="Home_footer">
                    <p>未滿十八歲請勿飲酒</p>
                    <p>禁止酒駕</p>
                    <p>飲酒過量有害健康</p><img src={"../images/Dontwine.png"}></img>
                </div>
            </>
        )
    }
}
export default Footer