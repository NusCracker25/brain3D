import { TwoDModule } from './twoD.module';

describe('TwoDModule', () => {
  let twoDModule: TwoDModule;

  beforeEach(() => {
    twoDModule = new TwoDModule();
  });

  it('should create an instance', () => {
    expect(twoDModule).toBeTruthy();
  });
});
