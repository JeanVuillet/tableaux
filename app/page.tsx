import React from "react";
import Link from "next/link";
type article = {
	id: number;
	titre: string;
	contenu: string;
	auteur: string;
	date: string;
	user_id: number;
};

async function getArticles() {

	const resp = await fetch("http://localhost:4000/articles", {
		next: { revalidate: 30 },
	});
	const data = await resp.json();
	return data;
}
export default async function Home() {

	const article = await getArticles();

	return (
		<div className=" flex gap-4 flex-wrap ">
			<div className="card-actions justify-end">
				<Link href={"new"} className="btn btn-primary">
					creer un nouvel article
				</Link>
			</div>
			{article.map((article: article) => (
				<div className="card bg-base-100 w-96 shadow-xl   ">
					<div key={article.id} className="card-body">
						<Link href={`article/${article.id}`}>
							<h3 className="card-title">{article.id}</h3>
							<div>{article.titre}</div>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
