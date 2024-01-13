import path from 'path';
import {
	buildWebpack,
	BuildOptions,
	BuildPaths,
	BuildPlatform,
	BuildMode
} from "@packages/build-config";
import webpack from 'webpack';
import packageJson from './package.json'


export interface EnvVariables {
	mode: BuildMode,
	port: number,
	analyzer?: boolean,
	platform?: BuildPlatform,
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		output: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src'),
		public: path.resolve(__dirname, 'public'),
	}

	const options: BuildOptions = {
		port: env.port ?? 3001,
		paths,
		mode: env.mode ?? 'development',
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop',
	}

	const config: webpack.Configuration = buildWebpack(options);

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: 'shop',
		filename: 'remoteEntry.js',
		exposes: {
			'./Router': './src/router/Router.tsx',
		},
		shared: {
			...packageJson.dependencies,
			react: {
				eager: true,
				requiredVersion: packageJson.dependencies['react'],
			},
			'react-router-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-router-dom'],
			},
			'react-dom': {
				eager: true,
				requiredVersion: packageJson.dependencies['react-dom'],
			},
		},
	}))

	return config;
}
