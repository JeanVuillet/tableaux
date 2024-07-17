// import { NextApiRequest, NextApiResponse } from "next";
// import multer from "multer";

// // Configuration de Multer pour gérer les fichiers uploadés
// const upload = multer({
// 	storage: multer.diskStorage({
// 		destination: (req :Request, file:File, cb) => {
// 			cb(null, "public/uploads"); // Chemin pour enregistrer les fichiers
// 		},
// 		filename: (req, file, cb) => {
// 			const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// 			cb(null, file.originalname + "-" + uniqueSuffix);
// 		},
// 	}),
// });

// // Fonction de gestion d'API
// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	if (req.method === "POST") {
// 		// Utilisez Multer comme middleware pour gérer les fichiers
// 		upload.single("file")(req, res, (err) => {
// 			if (err) {
// 				return res
// 					.status(400)
// 					.json({ message: "Erreur de téléchargement de fichier." });
// 			}
// 			if (!req.file) {
// 				return res.status(400).json({ message: "Aucun fichier fourni." });
// 			}

// 			try {
// 				// Traitez le fichier (enregistrez-le, etc.)

// 				res.status(200).json({ message: "Fichier téléchargé avec succès!" });
// 			} catch (error) {
// 				res.status(500).json({ message: "Erreur de traitement de fichier." });
// 			}
// 		});
// 	} else {
// 		res.status(405).end(); // Méthode non autorisée
// 	}
// }
