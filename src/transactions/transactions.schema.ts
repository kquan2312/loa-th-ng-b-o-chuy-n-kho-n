import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Transaction extends Document {
  @Prop({ unique: true, index: true })
  transactionId: string;

  @Prop()
  amount: number;

  @Prop()
  transferType: string;

  @Prop()
  content: string;

  @Prop()
  transactionDate: Date;

  @Prop({ type: Object })
  rawPayload: any;
}

export const TransactionSchema =
  SchemaFactory.createForClass(Transaction);