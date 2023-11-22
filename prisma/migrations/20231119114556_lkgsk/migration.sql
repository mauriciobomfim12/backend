/*
  Warnings:

  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cargo` to the `Cadastro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cadastro` ADD COLUMN `cargo` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `login`;
