"use client"

import {definePreview} from "@sanity/preview-kit";
import {dataset, projectId} from "@root/lib/sanity.client";

function onPublicAccessOnly() {
    throw new Error(`Enable to load preview as you're not logged in !`)
}

if (!projectId || !dataset) {
    throw new Error(`Missing projectId or dataset. check your sanity.json or .env`)
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})
