/*
  Warnings:

  - You are about to drop the column `type` on the `trasaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[typeId]` on the table `Trasaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeId` to the `Trasaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trasaction` DROP COLUMN `type`,
    ADD COLUMN `typeId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Tipocliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_cliente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Trasaction_typeId_key` ON `Trasaction`(`typeId`);

-- AddForeignKey
ALTER TABLE `Tipocliente` ADD CONSTRAINT `Tipocliente_id_fkey` FOREIGN KEY (`id`) REFERENCES `Trasaction`(`typeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
