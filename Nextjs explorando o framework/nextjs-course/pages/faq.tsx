import React from 'react';
import Link from '../src/components/Link';
import axios from 'axios';

export async function getStaticProps() {

  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq = await axios({
    method: 'get',
    url: FAQ_API_URL
  }).then(resp => resp.data)

  return { props: { faq } }

}

export default function FAQPage({ faq }) {

  return (
    <div>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
      <Link href="/">
        Ir para a home
      </Link>
      <ul>
        {faq.map((q: any) => (
          <li key={q.question}>
            <article>
              <h1>{q.question}</h1>
              <p>{q.answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}