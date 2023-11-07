import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchData = async() => {
  const options = {
    method: 'GET',
    url: 'https://ipapi.co/json'
  };
  return axios.request(options).then((response) => response.data);
};

const ReactQueryPage = () => {
  const carQuery = useQuery(['cat'], fetchData);
  console.log(carQuery.data);
  return (
    <div className={'bg-gray-50'}>
      <p>{(carQuery.isLoading || carQuery.isFetching) && 'Loading...'}</p>
      <div>{JSON.stringify(carQuery.data)}</div>
      {!carQuery.isLoading && !carQuery.isFetching && (
        <button className='bg-blue-500  font-bold py-2 px-4 rounded-full border-2'
          onClick={() => {
            carQuery.refetch();
          }}
        >
          {carQuery.isError ? '重试' : '刷新'}
        </button>
      )}
    </div>
  );
};

export default ReactQueryPage;
