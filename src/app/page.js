"use client";

import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
    <section>
    <Navbar />
        <section id="home" className="flex flex-col lg:flex-row items-center lg:items-start m-8 lg:m-24 p-5 lg:p-10 mt-24">
          <div className="flex flex-col text-center lg:text-left p-5 lg:p-20 lg:mr-8 lg:mt-0">
            <h1 className="text-[35px] lg:text-[40px] font-bold text-[#7AB2D3]">Hi 👋, I am Nzah Fatimah</h1>
            <h2 className="text-[35px] lg:text-[40px] font-bold text-[#7AB2D3]">Frontend Developer</h2>
            <p className="mt-4 lg:mt-8 max-w-md lg:text-[16px] text-kata">
            Siswa SMK negeri 1 Majalengka. Jurusan RPL (Rekayasa Perangkat Lunak). Memiliki kemampuan pemrograman dan pengembangan web dengan menggunakan berbagai bahasa dan framework.
            </p>
          </div>

          <div className="relative order-first lg:order-none mb-8 lg:mb-0 -ml-1 lg:ml-20">
          <div className="absolute -inset-7 lg:-inset-9 rounded-lg bg-[#E1E8ED] w-[325px] h-[325px] md:w-[360px] md:h-[370px] lg:w-[340px] lg:h-[340px] mx-4 lg:mt-20 mt-8 shadow-lg shadow-slate-950"></div>
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
        <section id="about" className="w-full h-full bg-background px-8 py-10 lg:px-40">
            <h2 className="text-[22px] text-kata text-center mb-10">About Me</h2>
            <div className="bg-white px-8 py-12 lg:px-20 lg:py-16 w-full h-full">
                <p className="text-kata text-[20px] text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."</p>
            </div>
        </section>
        {/* about end */}

        {/* certificate start */}
        <section id="certificate" className="flex flex-col gap-8 px-8 py-12 lg:px-40">
            <h2 className="text-kata text-center text-[22px] mb-10">Certificate</h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-b pb-10">
              <a href="https://www.gamelab.id/certificate/GL0417987152" target="_blank">
              <Image
              src="/html, css.jpg"
              alt="html"
              width={1650}
              height={1650}
              className="rounded-lg shadow-lg shadow-slate-950"
              />
              </a>
              <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col">
              <h2 className="font-bold text-[20px] lg:text-[30px] text-kata">HTML, CSS, dan JAVASCRIPT</h2>
              <h2 className="text-black text-[18px] font-semibold mt-1">2023</h2>
              <p className="text-[20px] lg:text-[16px] text-kata mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-b pb-10">
              <a href="https://www.gamelab.id/certificate/GL6351036934" target="_blank">
              <Image
              src="/nodejs.jpg"
              alt="html"
              width={1650}
              height={1650}
              className="rounded-lg shadow-lg shadow-slate-950"
              />
              </a>
              <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col">
              <h2 className="font-bold text-[20px] lg:text-[30px] text-kata">NODEJS dan MYSQL</h2>
              <h2 className="text-black text-[18px] font-semibold mt-1">2024</h2>
              <p className="text-[20px] lg:text-[16px] text-kata mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-b pb-10">
              <a href="https://drive.google.com/file/d/1TokgVRHvAkUQawg4n3yhUj814gFNlCec/view?usp=sharing" target="_blank">
              <Image
              src="/glow.jpg"
              alt="html"
              width={1650}
              height={1650}
              className="rounded-lg shadow-lg shadow-slate-950"
              />
              </a>
              <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col">
              <h2 className="font-bold text-[20px] lg:text-[30px] text-kata">Perencanaan Keuangan untuk Anak Muda dalam Mempersiapkan Karir di dunia kerja</h2>
              <h2 className="text-black text-[18px] font-semibold mt-1">2024</h2>
              <p className="text-[20px] lg:text-[16px] text-kata mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-b pb-10">
              <a href="https://drive.google.com/file/d/1MhgO0_BVXtgeNIxMrxlRPuZOwUjIKSpu/view?usp=sharing" target="_blank">
              <Image
              src="/frontend.jpg"
              alt="html"
              width={1650}
              height={1650}
              className="rounded-lg shadow-lg shadow-slate-950"
              />
              </a>
              <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col">
              <h2 className="font-bold text-[20px] lg:text-[30px] text-kata">Frontend Fundamentals</h2>
              <h2 className="text-black text-[18px] font-semibold mt-1">2024</h2>
              <p className="text-[20px] lg:text-[16px] text-kata mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start border-b pb-10">
              <a href="https://drive.google.com/file/d/1xXUt9ucEJxN5ToGI0i29qiVEm7MWkqxo/view?usp=sharing" target="_blank">
              <Image
              src="/excel.jpg"
              alt="html"
              width={1650}
              height={1650}
              className="rounded-lg shadow-lg shadow-slate-950"
              />
              </a>
              <div className="lg:ml-8 mt-6 lg:mt-0 flex flex-col">
              <h2 className="font-bold text-[20px] lg:text-[30px] text-kata">Microsoft Excel</h2>
              <h2 className="text-black text-[18px] font-semibold mt-1">2024</h2>
              <p className="text-[20px] lg:text-[16px] text-kata mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
              </div>
            </div>
        </section>
        {/* certificate end */}

        {/* projects start */}
        <section id="projects" className="flex flex-col gap-8 px-8 py-10 lg:px-40">
         <h2 className="text-kata text-center text-[22px] mb-8">Projects</h2>
  
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project 1 */}
          <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 w-full lg:w-1/2">
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
              <h2 className="text-[20px] text-[#8695A4] py-3">Web Development</h2>
              <h2 className="font-bold text-[20px] lg:text-[24px] text-kata">Zenlytics | Personal-task</h2>
              <p className="text-[16px] lg:text-[16px] text-kata mt-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
    
          {/* Project 2 */}
          <div className="flex flex-col items-center border shadow-lg shadow-slate-950 rounded-lg p-6 w-full lg:w-1/2">
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
              <h2 className="text-[20px] text-[#8695A4] py-3">Web Development</h2>
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
        <h2 className="text-kata text-center text-[22px] mb-10">Contact</h2>
            <form>
                <div className="w-full lg:w-2/3 lg:mx-auto">
                <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold text-kata">Nama</label>
                <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none
                focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>

            <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold text-kata">Email</label>
                <input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none
                focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>

            <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold text-kata">Pesan</label>
                <textarea type="" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none
                focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
            </div>
            <div className="w-full px-4">
                <button className="text-base font-semibold text-white bg-background
                py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition
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
