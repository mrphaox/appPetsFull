import Image from 'next/image'
import Link from "next/link"

interface iLogo {
  link?: string
  clickable?: boolean
}

export const Logo = ({ link = "/", clickable }: iLogo) => {
  return (
    <>
      {clickable ?
        (<Link href={link}><Image src="/assets/images/logo.png" alt="logo" width={100} height={30} /> </Link>)
        :
        (<Image src='/public/logo.png' alt="veerge logo" width={100} height={30} />)
      }
    </>
  )
}