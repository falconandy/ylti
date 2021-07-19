/* eslint-disable import/no-unresolved */
import { PluginABC } from '..';

describe('PluginABC', () => {
  test('should succeed', () => {
    expect(PluginABC()).toEqual('PluginABC_SdkA');
  });
});
