import { GlobalStyle } from '@/styles/Global';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomApp: NextPage<AppProps> = ({ pageProps, Component }) => {
  const [isMonted, setIsMonted] = useState(false);

  useEffect(() => {
    setIsMonted(true);
  }, []);

  return (
    <>
      {isMonted && (
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Head>
            <title>Ho is this champion</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyle />

          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default CustomApp;
