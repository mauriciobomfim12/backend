/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { normalizeTransactions, parseFileContent } from './transaction.utils';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}

  async processFile(fileContent: string) {
    try {
      const transaction = await parseFileContent(fileContent);
      console.log(transaction)
      const nomalizedTransactions = await normalizeTransactions(transaction);

      for (const transaction of nomalizedTransactions) {
        if(transaction.date != ''){
          await this.prismaService.trasaction.create({
            data: transaction,
          });
        }
      }

      console.log('Arquivo processado com sucesso.');
    } catch (error) {
      console.error('Error processing file:', error);
      throw new Error('Failed to process file.');
    }
  }

  async getData() {
    const data = await this.prismaService.trasaction.findMany();

    return data;
  }
}
