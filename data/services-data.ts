import heroBg from "@/assets/hero-bg.jpeg";
import containerUnloadingHero from "@/assets/services-photo/hero-uploading.png";
import containerUploadingOne from "@/assets/services-photo/uploading-one.png";
import containerUploadingTwo from "@/assets/services-photo/uploading-two.png";

import factoryHero from '@/assets/services-photo/test.png';
import factoryOne from '@/assets/services-photo/factory-one.png';
import factoryTwo from '@/assets/services-photo/factory-two.png';

import warehouseHero from '@/assets/services-photo/tet4.png';
import warehouseOne from '@/assets/services-photo/warehouse-one.png';
import warehouseTwo from '@/assets/services-photo/warehouse-two.png';


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