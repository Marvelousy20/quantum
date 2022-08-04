import { useEffect, useRef, useState } from "react";
import GridItem from "./GridItem";
import locomotiveScroll from "locomotive-scroll";

const data = [
  {
    id: 0,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549646/4th%20slide/4625_d0tiqt.mp4",
  },
  {
    id: 1,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549632/4th%20slide/998_pclvsh.mp4",
  },
  {
    id: 2,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549576/4th%20slide/822_upf2sq.mp4",
  },
  {
    id: 3,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549543/4th%20slide/2904_jxbbhd.mp4",
  },
  {
    id: 4,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549295/4th%20slide/5161_yaxm7r.mp4",
  },
  {
    id: 5,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549245/4th%20slide/37_hqksf8.mp4",
  },
  {
    id: 6,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549223/4th%20slide/36_liz2ik.mp4",
  },
  {
    id: 7,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549295/4th%20slide/5161_yaxm7r.mp4",
  },
  {
    id: 8,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549245/4th%20slide/37_hqksf8.mp4",
  },
  {
    id: 9,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549223/4th%20slide/36_liz2ik.mp4",
  },
  {
    id: 10,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549186/4th%20slide/3599_rbcqgv.mp4",
  },
  {
    id: 11,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549186/4th%20slide/3599_rbcqgv.mp4",
  },
  {
    id: 12,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659549160/4th%20slide/756_w78kti.mp4",
  },
  {
    id: 13,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548956/4th%20slide/4201_iergve.mp4",
  },
  {
    id: 14,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548934/4th%20slide/5257_s3dmzs.mp4",
  },
  {
    id: 15,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548897/4th%20slide/3925_v3s9vb.mp4",
  },
  {
    id: 16,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548875/4th%20slide/5284_ofkbst.mp4",
  },
  {
    id: 17,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548872/4th%20slide/5251_xlkpo1.mp4",
  },
  {
    id: 18,
    videoSrc:
      "https://res.cloudinary.com/dllbqpsrp/video/upload/v1659548847/4th%20slide/725_juq0z2.mp4",
  },
];

export default function VideoGallery() {
  const ref = useRef(null);
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  const leftCol = [...data].splice(0, 6);
  const middleCol = [...data].splice(6, 6);
  const rightCol = [...data].splice(12, 6);

  useEffect(() => {
    const scrollElement = new locomotiveScroll({
      el: ref.current, 
      smooth: true,
      smartphone: {
        smooth: true,
      },
      getDirection: true,
      getSpeed: true
    })
  }, [])

  return (
    <div className="pt-8 md:pt-16 lg:pt-28" ref={ref} >
      <div className="grid-wrap grid grid-cols-5 gap-6 justify-center">
        <div className="left-column" ref={leftRef}>
          {leftCol.map((video, i) => (
            <GridItem videoSrc={video.videoSrc} key={i} />
          ))}
        </div>
        <div className="middle-column" ref={middleRef}>
          {middleCol.map((video, i) => (
            <GridItem videoSrc={video.videoSrc} key={i} />
          ))}
        </div>
        <div className="right-column" ref={rightRef}>
          {rightCol.map((video, i) => (
            <GridItem videoSrc={video.videoSrc} key={i} />
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.map((video, index) => (
          <div key={index} className="">
            <video
              src={video.videoSrc}
              muted
              autoPlay
              playsInline
              className=""
              loop
            ></video>
          </div>
        ))}
      </div> */}
    </div>
  );
}

// const Wrapper = styled.div`
//   -webkit-column-count: 5;
//   -moz-column-count: 5;
//   column-count: 5;
//   max-width: 80%;
//   margin: 0 auto;
//   -webkit-column-width: 20%;
//   -moz-column-width: 20%;
//   column-width: 20%;
//   padding: 0 12px;

//   .pics {
//     --webkit-transition: all 350ms ease;
//     transition: all 350ms ease;
//     cursor: pointer;
//     margin-bottom: 12px;
//   }

//   video {
//     height: 50%;
//   }

//   .pics:hover {
//     filter: opacity(0.8);
//   }

//   @media screen and (max-width: 991px) {
//     -webkit-column-count: 2;
//     -moz-column-count: 2;
//     column-count: 2;
//   }

//   @media screen and (max-width: 480px) {
//     -webkit-column-count: 1;
//     -moz-column-count: 1;
//     column-count: 1;
//     -webkit-column-width: 100%;
//     -moz-column-width: 100%;
//     column-width: 100%;
//   }
// `;
