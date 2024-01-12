import React, { useEffect } from 'react';

const AnimJsc = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const animElement1 = document.querySelectorAll('.op');
    animElement1.forEach((el) => observer.observe(el));

    const animElement2 = document.querySelectorAll('.op-d');
    animElement2.forEach((el) => observer.observe(el));


    return () => {
      animElement1.forEach((el) => observer.unobserve(el));
      animElement2.forEach((el) => observer.unobserve(el));
    };
  }, []); 
};

export default AnimJsc;