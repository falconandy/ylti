/* eslint-disable import/no-unresolved */
import { SdkA } from '../../dist/cjs';

describe('SdkA', () => {
  test('should succeed', () => {
    expect(SdkA()).toEqual('SdkA');
  });
});
