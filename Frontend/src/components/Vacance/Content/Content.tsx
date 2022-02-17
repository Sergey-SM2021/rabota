import { FC } from "react"

import Style from './Content.module.sass'

const Content:FC<{content:string}> = ({content}) => {
    return (<div className={`${Style.main} ${Style.item}`}>
        {content}
    </div>)
}

export default Content