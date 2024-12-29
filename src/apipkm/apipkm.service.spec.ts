import { Test, TestingModule } from '@nestjs/testing';
import { ApipkmService } from './apipkm.service';

describe('ApipkmService', () => {
  let service: ApipkmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApipkmService],
    }).compile();

    service = module.get<ApipkmService>(ApipkmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
