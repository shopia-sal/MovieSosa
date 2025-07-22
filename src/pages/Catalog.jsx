import React from 'react'

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import PageHeader from '../component/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../component/movie-grid/MovieGrid';

const Catalog = () => {

  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'movies' : 'Tv Series'}
      </PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category= {category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog;
