/*
  Warnings:

  - You are about to drop the `tipocliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tipocliente` DROP FOREIGN KEY `Tipocliente_id_fkey`;

-- DropTable
DROP TABLE `tipocliente`;

-- CreateTable
CREATE TABLE `TipoDeTransacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `natureza` VARCHAR(191) NOT NULL,
    `sinal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TipoDeTransacao` ADD CONSTRAINT `TipoDeTransacao_id_fkey` FOREIGN KEY (`id`) REFERENCES `Trasaction`(`typeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
