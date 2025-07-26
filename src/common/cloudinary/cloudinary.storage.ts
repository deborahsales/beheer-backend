import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.config';

export const storage = new CloudinaryStorage({
	cloudinary,
	params: (req, file) => {
		let folder = 'outros';

		const url = req.originalUrl || '';

		if (url.includes('prestacao-contas')) {
			folder = 'prestacoes';
		} else if (url.includes('atestado')) {
			folder = 'atestados';
		} else if (url.includes('ponto')) {
			folder = 'pontos';
		}

		return {
			folder,
			allowed_formats: ['jpg', 'jpeg', 'png'],
			public_id: `${Date.now()}-${file.originalname}`,
		};
	},
});
