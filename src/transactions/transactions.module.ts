/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionsController } from './transactions.controller';
import { TransactionService } from './transactions.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: { expiresIn: "60s" }
 })
  ],
  controllers: [TransactionsController],
  providers: [TransactionService, PrismaService],
})
export class TransitionsModule {}
