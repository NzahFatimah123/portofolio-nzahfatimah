import React from "react";
import Image from "next/image";

export default function footer() {
  return ( 
    <div className="bg-background w-full h-[182px]">
        <div className="gap-4 flex justify-center items-center pt-6">
            <a href="/https://instagram.com/nzahftmhh01_">
                <Image src="/insta.png" alt="instagram-icon" width={20} height={20} />
            </a>
            <a href="/https://github.com/NzahFatimah123">
                <Image src="/GitHub.png" alt="github-icon" width={20} height={20} />
            </a>
            <a href="/https://www.linkedin.com/in/nzah-f-48368430b/">
                <Image src="/Linkedin.png" alt="linkedin-icon" width={20} height={20} />
            </a>
        </div>
        <p className="text-[#FFE3E3] text-center text-[15px] pt-2">©2024 |<a href="http://instagram.com/nzahftmhh01_" 
                    target="_blank" className="font-bold text-[#FFE3E3] text-[15px]">Nzah Fatimah</a></p>
    </div>
  )
}
