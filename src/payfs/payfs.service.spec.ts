import { Test, TestingModule } from '@nestjs/testing';
import { PayfsService } from './payfs.service';

describe('PayfsService', () => {
  let service: PayfsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayfsService],
    }).compile();

    service = module.get<PayfsService>(PayfsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
