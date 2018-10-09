import { Mm3dModule } from './mm3d.module';

describe('Mm3dModule', () => {
  let mm3dModule: Mm3dModule;

  beforeEach(() => {
    mm3dModule = new Mm3dModule();
  });

  it('should create an instance', () => {
    expect(mm3dModule).toBeTruthy();
  });
});
