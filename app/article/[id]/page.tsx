import React from 'react'
import Image from 'next/image';
import InputImg from './InputImg';
type Props = {
  params:{
  id:number;
  };
};

async function getArticles(id:number){

  const resp= await fetch(`http://localhost:4000/articles/${id}`, {
		next: { revalidate: 1130 },});
  const data=  resp.json();
  return data;
};

export default async function page({params}: Props) {

const article=  await getArticles(params.id)

  return (<> 
  <div>vous etes sur la page {article.titre}</div>
  <figure>
  
    <Image src={article.image} alt='peter' width={500} height={500}  priority></Image>
  </figure>
  <p>  {article.contenu}</p>
  <span>{article.auteur}</span>

<InputImg>
</InputImg>
  
  
  </>)
}
