import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import data from "~/backendURL/data"
const BlogDetail = () => {
        const params = useRouter()
        const { slug } = params.query

        const [post, setPost]: any = useState('')
        useEffect(() => {
                const result = data.filter((item) => (
                        item.slug == slug
                ))
                setPost(result[0])
        }, [slug])
        if (post) {
                return (
                        <div className="blogapp pt-8">
                                {/* <div className="flex gap-8 mb-6">
                                        <div className="w-20 p-2 h-20 bg-center bg-no-repeat bg-cover border rounded-full" style={{ backgroundImage: `url("${post.author.avatar}")` }}></div>
                                        <div>
                                                <h3 className="">{post.author.username && post.author.username}</h3>
                                                <h6 className="text-slate-400">Frontend developer passionate about software engineering.</h6>
                                        </div>
                                </div> */}
                                <h1 className="md:text-5xl text-3xl font-bold mb-4">{post.title && post.title}</h1>
                                <p className="mb-4 text-sm font-medium">{post.shortcontent && post.shortcontent}</p>
                                <p className="mb-4 text-sm">{new Date(post.createdAt).toLocaleString()}</p>

                                <article dangerouslySetInnerHTML={{ __html: post.content && post.content }}>
                                </article>
                        </div>
                )
        }

}

export default BlogDetail
BlogDetail.Layout = "Default"