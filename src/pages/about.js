import React from 'react'
import Style from "../styles/index.module.css"
import Link from "next/link"

const about = () => {
  return (
    <div className={Style.main}>
        <h1 className={Style.h1}>About</h1>
        <Link className={Style.mybtn} href={"/"}>home</Link>
    </div>
  )
}

export default about