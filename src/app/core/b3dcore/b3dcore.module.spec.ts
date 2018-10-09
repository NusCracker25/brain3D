import { B3dcoreModule } from './b3dcore.module';

describe('B3dcoreModule', () => {
  let b3dcoreModule: B3dcoreModule;

  beforeEach(() => {
    b3dcoreModule = new B3dcoreModule();
  });

  it('should create an instance', () => {
    expect(b3dcoreModule).toBeTruthy();
  });
});
