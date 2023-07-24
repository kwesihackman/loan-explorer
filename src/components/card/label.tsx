import React from 'react'

type Props = {
  label:string
}

const Label = ({label}: Props) => {
  return <strong className=" text-slate-400">{`${label} :`} </strong>;
}

export default Label