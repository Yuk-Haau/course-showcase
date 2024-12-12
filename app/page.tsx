import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 pt-10 ">
        Improving Object Pose Estimation with Line Features in Mixed Reality
      </h1>
      <p className="text-lg text-gray-700 mt-4">ETHz Mixed Reality 2024</p>

      {/* add names*/}
      <div className="mt-6 flex space-x-8">
        <div className="text-lg text-gray-700">Deqing Song</div>
        <div className="text-lg text-gray-700">Moyang Li</div>
        <div className="text-lg text-gray-700">Yifan Jiang</div>
        <div className="text-lg text-gray-700">Yuqiao Huang</div>
      </div>

      {/* link to github repo */}
      <div className="mt-6 flex space-x-8">
        <a
          href="https://github.com/DavidSong2000/SBBTrainDoorLocolization"
          target="_blank"
          className="inline-block text-lg text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
          <span>Code</span>
        </a>
      </div>
      {/* project overview */}
      <div className="mt-8 w-full px-6 py-4 ">
        <h2 className="text-2xl font-bold text-gray-800">Project Overview</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-full">
          This project focuses on improving object pose estimation in mixed
          reality for SBB doors by leveraging line features. Using real-time
          image sequences from the HoloLens, we accurately localize the doors
          with high precision. We compared LiMAP and GIM for feature matching,
          evaluating their performance in complex environments. Our findings
          show that combining these methods enhances pose estimation robustness,
          providing an efficient solution for real-time localization of SBB
          doors in mixed reality applications
        </p>
      </div>

      {/* gim results */}
      <div className="mt-8 w-full px-6 py-4 ">
        <h2 className="text-2xl font-bold text-gray-800">GIM Results</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-full">
          Our experiments show that GIM outperforms well in feature matching
          accuracy. The GIM algorithm is robust to occlusion and cluttered
          backgrounds, providing a more reliable solution for object pose
          estimation in mixed reality applications.
        </p>

        {/* 视频展示 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg"
              src="/course-showcase/videos/warp_sync_converted.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
