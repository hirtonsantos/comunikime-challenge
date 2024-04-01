/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "SellModel" DROP CONSTRAINT "SellModel_customer_id_fkey";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "SellModel";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tbl_users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER',
    "password" TEXT,

    CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "suportMailAdress" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'PENDING',
    "category" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "tbl_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_sells" (
    "id" SERIAL NOT NULL,
    "status" "SellCurrentStatus" NOT NULL,
    "totalCents" TEXT NOT NULL,
    "customer_id" INTEGER NOT NULL,

    CONSTRAINT "tbl_sells_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_email_key" ON "tbl_users"("email");

-- AddForeignKey
ALTER TABLE "tbl_products" ADD CONSTRAINT "tbl_products_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_sells" ADD CONSTRAINT "tbl_sells_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "tbl_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
