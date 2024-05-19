import { PortableText } from '@portabletext/react';
import React, {useState} from 'react'
import { useQuery } from "react-query";
import fetchDataFromSanity from '../Utils/DataFetcher';
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import moment from 'moment';
import { useParams } from 'react-router-dom';
import {buildFileUrl, getFileAsset, getImageDimensions} from '@sanity/asset-utils'
import { Download } from 'lucide-react';



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
    content,
    attachementName,
    attatchment,
  }`;
  const { data: articleData, isLoading, isError } = useQuery(['articleData', QUERY], () => fetchDataFromSanity(QUERY));
  
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source)
  }
  const fileUrlFor = (source) => {
    return getFileAsset(source, client.config())
  }

  const SampleImageComponent = ({value, isInline}) => {
    if (!value) return null
    const {width, height} = getImageDimensions(value)

    return (
      <img
        src={urlFor()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          display: isInline ? 'inline-block' : 'block',
          aspectRatio: width / height,
        }}
      />
    )
  }
  const components = {
    block: {
      h1: ({ children }) => <h1 className="text-2xl bg-slate-400">{children}</h1>,
      p: ({ children }) => <p className="text-sm text-green-500">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-10">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal l-10">{children}</ol>,
      checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
    types: {
      image: ({value, isInline}) => <img className='rounded-lg border border-slate-100 shadow-md my-4' src={urlFor().image(value).width(isInline ? 100 : 800).fit('max').auto('format').url()} />
    },
    a: ({ children }) => <a className='yellow-blue-600 underline'>{children}</a>,
  };
  


  
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
          <div className='flex justify-between flex-wrap'>
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
          </div>
          <PortableText
            value={item.content}
            components={components} 
            
          />
           { item.attachementName && <a className="btn btn-neutral btn-sm capitalize my-4" href={fileUrlFor(item.attatchment).url}>
              <Download className=' pr-2' />
              {item.attachementName}
            </a> }
        </article>

      ))
     }
    </div>
  )
}

