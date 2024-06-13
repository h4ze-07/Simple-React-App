import React from 'react'

type TButtonProps = {
    text: string,
    styles?: string,
    func?: () => void
}

const Button = ({text, styles, func}: TButtonProps) => {
  return (
    <button
        className={`text-white py-2 px-7 font-semibold rounded-[5px] ${styles}`}
        onClick={func}
    >{text}</button>
  )
}

export default Button