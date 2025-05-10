"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
    <section className="bg-slate-950">
      <Navbar/>
        <section id="home" className="flex flex-col lg:flex-row items-center lg:items-start m-8 lg:m-24 p-5 lg:p-10 mt-24">
        <div className="flex flex-col text-center lg:text-left p-5 lg:p-20 lg:mr-8 lg:mt-0">
  <h1 className="text-[35px] lg:text-[40px] font-bold text-[#049DD9]">Hi 👋, I am Nzah Fatimah</h1>
  <h2 className="text-[35px] lg:text-[40px] font-bold text-[#ffffff]">Frontend Developer</h2>
  <p className="mt-4 lg:mt-8 max-w-md lg:text-[15px] text-kata">
    Siswa SMK Negeri 1 Majalengka. Jurusan RPL (Rekayasa Perangkat Lunak). Memiliki kemampuan pemrograman dan pengembangan web dengan menggunakan berbagai bahasa dan framework.
  </p>

  {/* Tools */}
  <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      HTML
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      CSS
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      Javascript
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      React
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      NextJs
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      Git
    </span>
    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-xl text-sm font-medium shadow-sm hover:scale-105 transition">
      Tailwind css
    </span>
  </div>
</div>

          <div className="relative order-first lg:order-none mb-8 lg:mb-0 -ml-1 lg:ml-20">
          <div className="absolute -inset-7 lg:-inset-9 rounded-lg bg-blue-400 w-[325px] h-[325px] md:w-[360px] md:h-[370px] lg:w-[340px] lg:h-[340px] mx-4 lg:mt-20 mt-8 transition-transform transform hover:scale-105 hover:shadow-lg shadow-blue-950 hover:shadow-slate-700 duration-300"></div>
            <Image
              src="/nzahhh.png"
              alt="profil"
              width={315}
              height={315}
              className="rounded-lg relative ml-1 lg:-ml-1 -mt-16 lg:-mt-11 md:-mt-12"
            />
          </div>
        </section>

        {/* about start*/}
        <section id="about" className="w-full h-full px-8 py-10 lg:px-40">
            <h2 className="text-[22px] text-kata text-center mb-10">About Me</h2>
            <div className="px-6 py-10 lg:px-20 lg:py-16 w-full h-full bg-background rounded-lg shadow-lg shadow-slate-950">
                <p className="text-kata text-[20px] ml-3 -mt-1">saya Nzah Fatimah seorang Frontend Developer!</p>
                <p className="text-kata text-[18px] text-center mt-3">Lulusan SMK jurusan Rekayasa Perangkat Lunak dengan fokus pada Frontend Development. Memiliki pengalaman praktik kerja lapangan di PT Sawala Inovasi Digital sebagai Frontend Developer, serta terbiasa menggunakan Next.js dan Tailwind CSS untuk membangun antarmuka web yang modern dan responsif. Antusias dalam mempelajari teknologi baru dan siap berkembang di dunia industri sebagai junior frontend developer.
</p>
            </div>
        </section>
        {/* about end */}

        {/* certificate start */}
        <section id="certificate" className="w-full px-8 py-12 lg:px-40">
  <h2 className="text-kata text-center text-[22px] mb-10">Certificate</h2>

  <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    {/* Sertifikat 1 */}
    <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
      <a href="https://drive.google.com/file/d/1TokgVRHvAkUQawg4n3yhUj814gFNlCec/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Image
          src="/glow.jpg"
          alt="glow"
          width={350}
          height={200}
          className="rounded-lg shadow-lg shadow-slate-950"
        />
      </a>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-[18px] text-kata">Perencanaan Keuangan untuk Anak Muda dalam Mempersiapkan Karir di Dunia Kerja</h3>
        <p className="text-[#049DD9] font-semibold">Gamelab Indonesia</p>
        <p className="text-[#049DD9] font-semibold">Oktober 2024</p>
      </div>
    </div>

    {/* Sertifikat 2 */}
    <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
      <a href="https://www.gamelab.id/certificate/GL0417987152" target="_blank" rel="noopener noreferrer">
        <Image
          src="/html, css.jpg"
          alt="html"
          width={350}
          height={200}
          className="rounded-lg shadow-lg shadow-slate-950"
        />
      </a>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-[18px] text-kata">HTML, CSS, dan JavaScript</h3>
        <p className="text-[#049DD9] font-semibold">Gamelab Indonesia</p>
        <p className="text-[#049DD9] font-semibold">Oktober 2024</p>
      </div>
    </div>

    {/* Sertifikat 3 */}
    <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
      <a href="https://drive.google.com/file/d/1MhgO0_BVXtgeNIxMrxlRPuZOwUjIKSpu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Image
          src="/frontend.jpg"
          alt="Frontend"
          width={350}
          height={200}
          className="rounded-lg shadow-lg shadow-slate-950"
        />
      </a>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-[18px] text-kata">Frontend Fundamentals</h3>
        <p className="text-[#049DD9] font-semibold">2024</p>
      </div>
    </div>

    {/* Sertifikat 4 */}
    <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
      <a href="https://drive.google.com/file/d/1xXUt9ucEJxN5ToGI0i29qiVEm7MWkqxo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Image
          src="/excel.jpg"
          alt="Excel"
          width={350}
          height={200}
          className="rounded-lg shadow-lg shadow-slate-950"
        />
      </a>
      <div className="mt-4 text-center">
        <h3 className="font-bold text-[18px] text-kata">Microsoft Excel</h3>
        <p className="text-[#049DD9] font-semibold">2024</p>
      </div>
    </div>
  </div>
</section>

        {/* certificate end */}

        {/* projects start */}
        <section id="projects" className="flex flex-col gap-8 px-8 py-10 lg:px-40">
         <h2 className="text-kata text-center text-[22px] mb-8">Projects</h2>
  
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project 1 */}
          <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 w-full lg:w-1/2 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
            <a href="https://github.com/sawala-internship/aplikasi-personal-task" target="_blank">
              <Image
                src="/task.png"
                alt="task project"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </a>
            <div className="mt-6 flex flex-col text-center">
              <h2 className="text-[20px] text-[#049DD9] py-3">Web Development</h2>
              <h2 className="font-bold text-[20px] lg:text-[24px] text-kata">Zenlytics | Personal-task</h2>
              <p className="text-[16px] lg:text-[16px] text-kata mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
    
          {/* Project 2 */}
          <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 w-full lg:w-1/2 bg-background transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-slate-700 duration-300">
            <a href="https://github.com/sawala-internship/simple-blog" target="_blank">
              <Image
                src="/blog.png"
                alt="blog project"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </a>
            <div className="mt-6 flex flex-col text-center">
              <h2 className="text-[20px] text-[#049DD9] py-3">Web Development</h2>
              <h2 className="font-bold text-[20px] lg:text-[24px] text-kata">Wander | Simple-blog</h2>
              <p className="text-[16px] lg:text-[16px] text-kata mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* projects end */}

        {/* contact start */}
        <section id="contact" className="pb-32 mt-10 dark:bg-slate-800">
        <div className="flex flex-col gap-8 px-8 py-2 lg:px-40">
        <h2 className="text-kata text-center text-[22px] mb-6 mt-8">Contact</h2>
            <form>
                <div className="w-full lg:w-2/3 lg:mx-auto">
                <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold text-kata">Nama</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none
                focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>

            <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold text-kata">Email</label>
                <input type="email" id="email" className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none
                focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>

            <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold text-kata">Pesan</label>
                <textarea type="" id="name" className="w-full text-black p-3 rounded-md focus:outline-none
                focus:ring-blue-500 focus:ring-1 focus:border-primary h-32"></textarea>
            </div>
            <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-background
                py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg hover:shadow-blue-500 transition
                duration-500">Kirim</button>
            </div>
        </div>
        </form>
        </div>
    </section>
    <Footer />
    </section>
    </>
  );
}
