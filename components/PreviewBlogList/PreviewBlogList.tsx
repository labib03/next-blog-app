"use client"

import {usePreview} from "@root/lib/sanity.preview";
import {BlogList} from "@root/components";

type Props = {
    query: string
}

export default function PreviewBlogList({query}: Props) {
    const posts = usePreview(null, query)
    return <BlogList posts={posts} />
}