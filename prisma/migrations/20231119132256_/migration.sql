/*
  Warnings:

  - You are about to drop the column `typeId` on the `trasaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[type]` on the table `Trasaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `Trasaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tipodetransacao` DROP FOREIGN KEY `TipoDeTransacao_id_fkey`;

-- DropIndex
DROP INDEX `Trasaction_typeId_key` ON `trasaction`;

-- AlterTable
ALTER TABLE `trasaction` DROP COLUMN `typeId`,
    ADD COLUMN `type` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Trasaction_type_key` ON `Trasaction`(`type`);

-- AddForeignKey
ALTER TABLE `TipoDeTransacao` ADD CONSTRAINT `TipoDeTransacao_id_fkey` FOREIGN KEY (`id`) REFERENCES `Trasaction`(`type`) ON DELETE RESTRICT ON UPDATE CASCADE;
