import React from "react";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import profileimage from "../../assets/profileimage /profilepic.jpg";

const About = () => {

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I Am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rahul Shriwas
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I Am A.... </span>
            <span className="text-[#8245ec]">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Software Developer",
                    "Web Developer",
                    "UI/UX Designer",
                    "Coder",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                  pauseFor: 2000,
                  wrapperClassName: "text-[#8245ec]",
                  cursorClassName: "Typewriter__cursor", // uses your Tailwind class now
                }}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb:10 mt:8 leading-relaxed">
            I ᴀᴍ ᴀ ғʀᴏɴᴛ-ᴇɴᴅ sᴏғᴛᴡᴀʀᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ sᴘᴇᴄɪᴀʟɪᴢɪɴɢ ɪɴ<br />
            ʜɪɢʜ-ᴘᴇʀғᴏʀᴍᴀɴᴄᴇ, sᴄᴀʟᴀʙʟᴇ ᴡᴇʙ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴs ᴜsɪɴɢ Rᴇᴀᴄᴛ ᴀɴᴅ Nᴇxᴛ.ᴊs. <br />
            I ᴄʀᴇᴀᴛᴇ ʀᴇғɪɴᴇᴅ, ʀᴇsᴘᴏɴsɪᴠᴇ ɪɴᴛᴇʀғᴀᴄᴇs ᴇɴɢɪɴᴇᴇʀᴇᴅ ғᴏʀ sᴘᴇᴇᴅ,
            ᴘʀᴇᴄɪsɪᴏɴ, ᴀɴᴅ sᴇᴀᴍʟᴇss ᴜsᴇʀ ᴇxᴘᴇʀɪᴇɴᴄᴇs. Wɪᴛʜ ᴀ sᴏʟɪᴅ ʙᴀᴄᴋᴇɴᴅ
            ғᴏᴜɴᴅᴀᴛɪᴏɴ, I ᴅᴇʟɪᴠᴇʀ sᴏʟᴜᴛɪᴏɴs ᴛʜᴀᴛ ᴀʀᴇ ʙᴏᴛʜ ᴠɪsᴜᴀʟʟʏ ᴄᴏᴍᴘᴇʟʟɪɴɢ
            ᴀɴᴅ ᴛᴇᴄʜɴɪᴄᴀʟʟʏ ʀᴏʙᴜsᴛ.
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 tex-lg  font bold transition duration-300  transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            <b>𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗩</b>
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileimage}
              alt="Rahul Shriwas"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
