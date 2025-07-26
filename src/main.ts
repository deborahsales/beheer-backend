import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as Express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	(app.getHttpAdapter().getInstance() as Express.Application).set('trust proxy', 1);

	// Configuração do Swagger
	const config = new DocumentBuilder()
		.setTitle('Beheer')
		.setDescription('Aplicação de gerenciamento de equipes remotas')
		.setVersion('1.0')
		.addTag('login')
		.addBearerAuth(
			{
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT',
			},
			'access-token',
		)
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api', app, document, {
		customCssUrl: ['https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css'],
		customJs: [
			'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
		],
	});

	app.enableCors();

	app.useStaticAssets(join(process.cwd(), 'uploads'), {
		prefix: '/uploads/',
	});

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
