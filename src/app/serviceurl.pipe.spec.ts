import { ServiceurlPipe } from './serviceurl.pipe';

describe('ServiceurlPipe', () => {
  it('create an instance', () => {
    const pipe = new ServiceurlPipe();
    expect(pipe).toBeTruthy();
  });
});
