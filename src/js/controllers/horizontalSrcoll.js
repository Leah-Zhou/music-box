const horizontalScroll=(wrapper)=>{

  wrapper.addEventListener('wheel', e=>{
    e.preventDefault();
    const scrollYValue =e.deltaY;
    wrapper.scrollLeft+=scrollYValue;

  })
}

export {horizontalScroll as default}; 