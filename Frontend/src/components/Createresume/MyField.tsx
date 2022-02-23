import { Input, Popover, Space } from "antd"
import { FC } from "react"
import {WarningTwoTone} from '@ant-design/icons'

interface IMyInput {
    handleBlur: any,
    value: any,
    handleChange: any,
    name: any,
    error: any
}

export const MyInput: FC<IMyInput> = ({ handleBlur, handleChange, name, value, error }) => {
    return (<div style={{ position: "relative" }}><Input onBlur={handleBlur} style={{ width: "100%" }} value={value} onChange={handleChange} name={name} />
        {error ?
            <Popover content={error}>
                <span style={{ position: "absolute", right: 7, top: 4 }}><WarningTwoTone /></span>
            </Popover> :
            <></>}
    </div>)
}

interface IMyField extends IMyInput{
    title: string
} 

export const MyField: FC<IMyField> = ({ handleBlur, handleChange, error, value, name, title }) => {
    return (<Space style={{ display: "flex", justifyContent: "space-between" }} >
        <h3>{title}</h3>
        <MyInput error={error} handleBlur={handleBlur} handleChange={handleChange} name={name} value={value} />
    </Space>)
}