import { Test, TestingModule } from '@nestjs/testing';
import { SectorService } from './sector.service';

describe('service', () => {
  let service: SectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SectorService],
    }).compile();

    service = module.get<SectorService>(SectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
