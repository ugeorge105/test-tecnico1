import { Test, TestingModule } from '@nestjs/testing';
import { ApipkmController } from './apipkm.controller';

describe('ApipkmController', () => {
  let controller: ApipkmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApipkmController],
    }).compile();

    controller = module.get<ApipkmController>(ApipkmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
