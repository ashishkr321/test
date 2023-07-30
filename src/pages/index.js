import React from 'react'
import Style from "../styles/index.module.css"
import Link from "next/link"
import about from './about'

const index = () => {
  return (
    <div className={Style.main}>
        <h1 className={Style.h1}>Index page</h1>
        <br />
        <Link href={"about"} className={Style.mybtn}>about</Link>
    </div>
  )
}

export default index