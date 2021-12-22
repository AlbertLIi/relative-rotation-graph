import { Test, TestingModule } from '@nestjs/testing';
import { SectorController } from './sector.controller';

describe('SectorController', () => {
  let controller: SectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SectorController],
    }).compile();

    controller = module.get<SectorController>(SectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
