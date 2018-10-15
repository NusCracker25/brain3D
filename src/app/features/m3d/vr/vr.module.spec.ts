import { VrModule } from './vr.module';

describe('VrModule', () => {
  let vrModule: VrModule;

  beforeEach(() => {
    vrModule = new VrModule();
  });

  it('should create an instance', () => {
    expect(vrModule).toBeTruthy();
  });
});
