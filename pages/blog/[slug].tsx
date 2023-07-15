import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import backendURL from '~/backendURL'
const BlogDetail = () => {
        const params = useRouter()
        const { slug } = params.query

        const [post, setPost]: any = useState('')
        useEffect(() => {
                backendURL.get(`api/blog/${slug}`)
                        .then((response) => {
                                setPost(response.data[0])
                                console.log(response);

                        })
        }, [slug])
        if (post) {
                return (
                        <div className="container pt-8">
                                <div className="flex gap-8 mb-6">
                                        <div className="w-32">hello</div>
                                        <div>
                                                <h3 className="">{post.author.username && post.author.username}</h3>
                                                <h6 className="text-slate-400">Frontend developer passionate about software engineering.</h6>
                                        </div>
                                </div>
                                <h1 className="text-5xl font-bold mb-4">{post.title && post.title}</h1>
                                <p className="mb-4 text-sm">July 12, 2022  17 min read </p>

                                <article>
                                        <p>{post.content && post.content}</p>
                                </article>
                        </div>
                )
        }

}

export default BlogDetail
BlogDetail.Layout = "Default"