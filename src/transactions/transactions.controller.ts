/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/jwt.guard';
console.log(JwtGuard); // Verifique se o caminho está correto

import { TransactionService } from './transactions.service';
import { Role } from "../role.decorator";
import { RoleGuard } from 'src/role.guard';
import { AuthGuard } from 'src/jwt-strategy.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {

    const fileContent = file.buffer.toString();
    await this.transactionService.processFile(fileContent);
  }

  


  @Get('data')
  async GetData() {
    console.log("passou por aqui")
    const data = await this.transactionService.getData();
    return data;
  }
}
