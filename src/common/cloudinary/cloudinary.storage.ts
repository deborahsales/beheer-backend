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

		const timestamp = Date.now();
		const isPdf = file.originalname.toLowerCase().endsWith('.pdf');

		return {
			folder,
			allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'],
			public_id: `${timestamp}-${file.originalname}`,
			resource_type: isPdf ? 'raw' : 'image',
		};
	},
});
