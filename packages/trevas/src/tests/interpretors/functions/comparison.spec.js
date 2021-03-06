import interpret from '../../../interpretor';

describe('comparison-functions', () => {
	it('should check null', () => {
		expect(interpret('isnull(null)', {})).toBeTruthy();
		expect(interpret('isnull(test)', { test: null })).toBeTruthy();
	});
	it('should check not null', () => {
		expect(interpret('isnull("ko")', {})).toBeFalsy();
		expect(interpret('isnull(1 + 2)', {})).toBeFalsy();
	});
});
