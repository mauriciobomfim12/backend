-- CreateTable
CREATE TABLE `Trasaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `product` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `seller` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
