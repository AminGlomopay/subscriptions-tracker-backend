-- CreateEnum
CREATE TYPE "VendorType" AS ENUM ('TECHNICAL_SUBSCRIPTION', 'NORMAL_SUBSCRIPTION', 'ONE_TIME', 'OTHERS');

-- CreateEnum
CREATE TYPE "VendorStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "isTaxClaimable" BOOLEAN NOT NULL DEFAULT false,
    "vendorType" "VendorType" NOT NULL,
    "status" "VendorStatus" NOT NULL DEFAULT 'ACTIVE',
    "isScrutVerified" BOOLEAN NOT NULL DEFAULT false,
    "isAgreementSigned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorOnCompany" (
    "vendorId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "VendorOnCompany_pkey" PRIMARY KEY ("vendorId","companyId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_taxId_key" ON "Vendor"("taxId");

-- AddForeignKey
ALTER TABLE "VendorOnCompany" ADD CONSTRAINT "VendorOnCompany_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorOnCompany" ADD CONSTRAINT "VendorOnCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
