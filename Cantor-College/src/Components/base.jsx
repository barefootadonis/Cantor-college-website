import React from 'react';
import { useEffect } from 'react';

const Base = ({ title, bgImage, children, sidebarImage }) => {
  const bannerStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

  useEffect(() => {
    document.title = `Cantor College: ${title}`;
  }, [title]);

  return (
    <>
      <div className="page-banner" style={bannerStyle}>
        <div className="banner-inner">
          <h1>{title}</h1>
        </div>
      </div>

      <main className="page-content">
        <section className="main-section">{children}</section>
        <aside className="sidebar">
          {sidebarImage && (
            <img src={sidebarImage} alt={`${title} sidebar`} />
          )}
        </aside>
      </main> 
    </>
  );
  };

  export default Base;
