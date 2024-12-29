import { Test, TestingModule } from '@nestjs/testing';
import { ApirmController } from './apirm.controller';

describe('ApirmController', () => {
  let controller: ApirmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApirmController],
    }).compile();

    controller = module.get<ApirmController>(ApirmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
