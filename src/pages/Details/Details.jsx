import React from 'react'
import './Details.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';
import DetailsBanner from './DetailsBanner/DetailsBanner';
import Cast from './Cast/Cast';
import VideosSection from './videoSection/VideoSection';
import Similar from './DetailCarousel/Similar';
import Recommendation from './DetailCarousel/Recommendation'
const Details = () => {

  const {mediaType,id}=useParams();
  const {data,loading}= useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading}= useFetch(`/${mediaType}/${id}/credits`);  // rename data as credits and loading as creditsLoading 

  return (
    <div>
       <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
       <Cast data={credits?.cast} loading={creditsLoading}/>
       <VideosSection data={data} loading={loading}/>
       <Similar mediaType={mediaType} id={id}/>
       <Recommendation mediaType={mediaType} id={id}/>

    </div>
  )
}

export default Details
