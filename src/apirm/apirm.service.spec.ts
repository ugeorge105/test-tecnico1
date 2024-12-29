import { Test, TestingModule } from '@nestjs/testing';
import { ApirmService } from './apirm.service';

describe('ApirmService', () => {
  let service: ApirmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApirmService],
    }).compile();

    service = module.get<ApirmService>(ApirmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
