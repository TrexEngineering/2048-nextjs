import Head from 'next/head'
import { useEffect, useState } from 'react'



export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>2048</title>
        <meta name="description" content="日々つらい現代に生きる社会人として、少しでもポジティブに！そう！ポジティブになろう！そんな2048"/>
        <meta property="og:type" content="website" />
        <meta property='og:image' content="/image.jpeg" />
        <meta property='og:title' content="株式会社トレックス | 2048" />
        <meta property='og:description' content="日々つらい現代に生きる社会人として、少しでもポジティブに！そう！ポジティブになろう！そんな2048" />
        <meta property='og:url' content="https://www.trex-group.com/"/>
        <meta name='twitter:site' value="@Trex2003" />
        <meta name='twitter:card' value="summary" />
        <meta name= 'twitter:image' value="/image.jpeg" />
        <meta name= 'twitter:description' value="日々つらい現代に生きる社会人として、少しでもポジティブに！そう！ポジティブになろう！そんな2048" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main>
        <h1>2048</h1>

      </main>

      <footer>
        <a
          href="https://www.trex-group.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/trex.png" alt="Trex" className="logo" />
        </a>
      </footer>
    </div>
  )
}