import React from 'react'
import Link from 'next/link'

type pageProps = {}

export default function page(props: pageProps) {
  return <div>
    les Articles
    <ul>
        <li>
<Link href="/article/1">lien vers article1</Link>
        </li>
        <li>
<Link href="/article/2">lien vers article2</Link>
        </li>
        <li>
<Link href="/article/3">lien vers article3</Link>
        </li>
    </ul>
  </div>
}


