import React from "react";
import Image from "next/image";

export default function footer() {
  return ( 
    <div className="bg-background w-full h-[182px]">
        <div className="gap-4 flex justify-center items-center pt-6">
            <a href="https://www.instagram.com/nzahftmhh01_?igsh=bWt2NDJzOWk4YWV3">
                <Image src="/insta.png" alt="instagram-icon" width={20} height={20} />
            </a>
            <a href="https://github.com/NzahFatimah123">
                <Image src="/GitHub.png" alt="github-icon" width={20} height={20} />
            </a>
            <a href="https://linkedin.com/in/nzah-fatimah">
                <Image src="/Linkedin.png" alt="linkedin-icon" width={20} height={20} />
            </a>
        </div>
        <p className="text-white text-center text-[15px] pt-2">©2024 |<a href="http://instagram.com/nzahftmhh01_" 
                    target="_blank" className="font-bold text-white text-[15px]">Nzah Fatimah</a></p>
    </div>
  )
}
