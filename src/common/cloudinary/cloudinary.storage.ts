import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.config';

export const storage = new CloudinaryStorage({
	cloudinary,
	params: (req, file) => ({
		folder: 'prestacoes',
		allowed_formats: ['jpg', 'jpeg', 'png'],
		public_id: `${Date.now()}-${file.originalname}`,
	}),
});
