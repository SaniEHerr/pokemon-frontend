import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

const Pagination = ({ currentPage, pageCount, handlePageChange }) => {
  const [maxButtons, setMaxButtons] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = 600;
      if (window.innerWidth < maxWidth) {
        setMaxButtons(3);
      } else {
        setMaxButtons(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(pageCount, startPage + maxButtons - 1);

  if (endPage - startPage + 1 < maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center">
      <ul className="flex flex-row gap-4 items-center text-black">

        <li>
          <button 
            className='text-white border border-white rounded-full p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 disabled:transition-all disabled:duration-[300ms] disabled:bg-black transition duration-[300ms] disableStyles w-9 h-9 xs:w-10 xs:h-10 xl:w-12 xl:h-12 flex items-center justify-center' 
            onClick={() => handlePageChange(1)} 
            disabled={currentPage === 1}
          >
            <Icon icon="ri:arrow-left-double-line" className='text-xl xl:text-2xl' />
          </button>
        </li>

        <li>
          <button 
            className='text-white border border-white rounded-full p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 disabled:transition-all disabled:duration-[300ms] disabled:bg-black transition duration-[300ms] disableStyles w-8 h-8 xs:w-9 xs:h-9 xl:w-11 xl:h-11 flex items-center justify-center'
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            <Icon icon="iconamoon:arrow-left-2-duotone" className='text-xl xl:text-xl' />
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "cursor-pointer text-red-500 text-[17px] xs:text-[20px] xl:text-[24px]" : "text-white cursor-pointer hover:text-[#d6845b] transition duration-200 text-[14px] xs:text-[15px] xl:text-[17px]"}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className='text-white border border-white rounded-full p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 disabled:transition-all disabled:duration-[300ms] disabled:bg-black transition duration-[300ms] disableStyles w-8 h-8 xs:w-9 xs:h-9 xl:w-11 xl:h-11 flex items-center justify-center'
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === pageCount}
          >
            <Icon icon="iconamoon:arrow-right-2-duotone" className='text-xl xl:text-xl' />
          </button>
        </li>

        <li>
          <button 
            className='text-white border border-white rounded-full p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 disabled:transition-all disabled:duration-[300ms] disabled:bg-black transition duration-[300ms] disableStyles w-9 h-9 xs:w-10 xs:h-10 xl:w-12 xl:h-12 flex items-center justify-center' 
            onClick={() => handlePageChange(pageCount)} 
            disabled={currentPage === pageCount}
          >
            <Icon icon="ri:arrow-right-double-line" className='text-xl xl:text-2xl' />
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Pagination