import containerUnloadingHero from "@/assets/services-photo/hero-uploading.webp";
import containerUploadingOne from "@/assets/services-photo/uploading-one.webp";
import containerUploadingTwo from "@/assets/services-photo/uploading-two.webp";

import factoryHero from '@/assets/services-photo/hero-factory.webp';
import factoryOne from '@/assets/services-photo/factory-one.webp';
import factoryTwo from '@/assets/services-photo/factory-two.webp';

import warehouseHero from '@/assets/services-photo/hero-warehouse.webp';
import warehouseOne from '@/assets/services-photo/warehouse-one.webp';
import warehouseTwo from '@/assets/services-photo/warehouse-two.webp';


export const servicesData = {
    "container-unloading": {
        image: containerUnloadingHero,
        imageUploadingOne: containerUploadingOne,
        imageUploadingTwo: containerUploadingTwo,
        i18nKey: "container-unloading",
    },
    "factory-staffing": {
        image: factoryHero,
        imageUploadingOne: factoryOne,
        imageUploadingTwo: factoryTwo,
        i18nKey: "factory-staffing",
    },
    "warehouse-cleaning": {
        image: warehouseHero,
        imageUploadingOne: warehouseOne,
        imageUploadingTwo: warehouseTwo,
        i18nKey: "warehouse-cleaning",
    },
};