import { Test, TestingModule } from '@nestjs/testing';
import { PayfsController } from './payfs.controller';

describe('PayfsController', () => {
  let controller: PayfsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayfsController],
    }).compile();

    controller = module.get<PayfsController>(PayfsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
