import React from "react";
import {groq} from "next-sanity";
import {previewData} from "next/headers";
import {client} from "@root/lib/sanity.client";
import {PreviewSuspense} from "@sanity/preview-kit";
import {BlogList, PreviewBlogList} from "@components";

const query = groq`
*[_type=='post'] {
...,
author->,
categories[]->
} | order(_createdAt desc)
`

const HomePage = async () => {
    if (previewData()) {
        return (
            <PreviewSuspense fallback={(
                <div role='status'>
                    <p className='text-center text-lg animate-pulse text-amber-400'>
                        Loading Preview Data ...
                    </p>
                </div>
            )}
            >
                <PreviewBlogList query={query}/>
            </PreviewSuspense>
        )
    }

    const posts = await client.fetch(query)

    return (
        <BlogList posts={posts}/>
    );
};

export default HomePage;
