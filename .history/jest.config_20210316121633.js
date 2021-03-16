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
	moduleNameMapper: {
		'^components(.*)$': '<rootDir>/src/components$1',
		'^pages(.*)$': '<rootDir>/src/pages$1',
		'^utils(.*)$': '<rootDir>/src/utils$1',
		'^services(.*)$': '<rootDir>/src/services$1',
		'^static(.*)$': '<rootDir>/src/static$1',
		'^models(.*)$': '<rootDir>/src/models$1',
		'^variable(.*)$': '<rootDir>//src/static/less/variable.less',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
	}
};
