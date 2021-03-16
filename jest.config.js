const path = require('path');

module.exports = {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js'],
	moduleFileExtensions: ['js'],
	coverageReporters: ['text', 'lcov'],
	coverageThreshold: {
		global: {
			statements: 90,
			branches: 90,
			functions: 90,
			lines: 90
		}
	},
	coverageDirectory: 'test-reports',
	setupFilesAfterEnv: ['jest-extended', 'jest-enzyme'],
	testEnvironment: 'enzyme',
	testEnvironmentOptions: {
		enzymeAdapter: 'react16'
	},
	snapshotSerializers: ['enzyme-to-json/serializer'],
	moduleDirectories: ['node_modules', 'src'],
	rootDir: path.join(__dirname, 'src'),
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js'
	}
};
