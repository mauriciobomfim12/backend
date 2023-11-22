/*
  Warnings:

  - You are about to drop the `cadastro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipodetransacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tipodetransacao` DROP FOREIGN KEY `TipoDeTransacao_id_fkey`;

-- DropIndex
DROP INDEX `Trasaction_type_key` ON `trasaction`;

-- DropTable
DROP TABLE `cadastro`;

-- DropTable
DROP TABLE `tipodetransacao`;
