import { PortableText } from '@portabletext/react';
import axios from 'axios';
import React, {useState} from 'react'
import { useQuery } from "react-query";
import fetchDataFromSanity from '../Utils/DataFetcher';
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import moment from 'moment';
import { useParams } from 'react-router-dom';

export const ArticleTemplate = () => {
  const param = useParams()
  const QUERY = `*[slug.current == "${param.slug}"]{
    title,
    "name": author->name,
    _id,
    "avatar": author->image,
    "degree": author->degree,
    coverImage,
    publishedAt,
    content
  }`;
  const { data: articleData, isLoading, isError } = useQuery(['articleData', QUERY], () => fetchDataFromSanity(QUERY));
  

  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source)
  }

  
  
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="px-4 py-6 md:px-6 lg:py-16 max-w-3xl mx-auto">
      { articleData?.result.map((item) => (
         <article className="prose prose-zinc mx-auto dark:prose-invert" key={item._id}>
          <img
            alt="Cover image"
            className="aspect-video object-cover mb-4 rounded-xl"
            height="340"
            src={ item.coverImage && urlFor(item.coverImage).width(320).height(240).fit('max').auto('format')}
            width="1250"
          />
          <p className="text-zinc-500 dark:text-zinc-400 mb-2">{moment(item.publishedAt).format('DD. MMM, YYYY')}</p>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] mb-4">
            {item.title}
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                {item.avatar && <img src={urlFor(item.avatar).width(320).height(240).fit('max').auto('format')} />}
              </div>
            </div> 
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">{item.name}</div>
              <div className="font-medium italic">{item.degree}</div>
            </div>
          </div>
          <PortableText
            value={item.content}
          />
        </article>

      ))
     }
    </div>
  )
}

