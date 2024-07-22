import React from 'react';
import { mount } from 'marketing/marketingApp';
import { useRef } from 'react';
import { useEffect } from 'react';

function Marketing() {
    const ref = useRef(null);
    useEffect(()=> {
        mount(ref.current);
    }, []);
  return (
    <div ref={ref}></div>
  )
}

export default Marketing;
