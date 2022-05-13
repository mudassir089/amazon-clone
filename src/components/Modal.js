import React,{useState} from 'react'
import { Modal } from 'antd'

export const useModal = () => {
    const [isvisible,setvisible] = useState(false)

    const toggle = () => {
        setvisible(true)
    }

    const closemodal = () => {
        setvisible(false)
    }

    const Modaldiv = () => {
        return <Modal title="Confirmed" visible={isvisible} onOk={closemodal} onCancel={closemodal}>
            <p>Your order has been confirmed</p>
        </Modal>
    }

    return [toggle,Modaldiv]
}