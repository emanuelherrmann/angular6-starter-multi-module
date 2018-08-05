import { TesteableModule } from './testeable.module';

describe('TesteableModule', () => {
  let testeableModule: TesteableModule;

  beforeEach(() => {
    testeableModule = new TesteableModule();
  });

  it('should create an instance', () => {
    expect(testeableModule).toBeTruthy();
  });
});
