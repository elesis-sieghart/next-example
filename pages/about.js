import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About 페이지</title>
        <meta property="og:title" content="About" />
        <meta property="og:description" content="about 실습 중입니다." />
      </Head>
      <h1>About Page</h1>
      <p>여기는 About 페이지 입니다.</p>
    </>
  );
};

export default AboutPage;
