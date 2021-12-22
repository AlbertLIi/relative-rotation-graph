import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SectorDocument = Sector & Document;

@Schema()
export class Sector {
  @Prop([String])
  name: string;

  @Prop([Map])
  pricesMap : Map<string, number>;
}

export const SectorSchema = SchemaFactory.createForClass(Sector);
