import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4 mx-auto my-8">
        <h1 className="text-4xl font-bold text-blue-600 pt-10 text-center">
          Improving Object Pose Estimation with Line Features in Mixed Reality
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center">
          ETHz Mixed Reality 2024
        </p>

        {/* add names */}
        <div className="mt-6 flex flex-wrap justify-center space-x-4">
          <div className="text-lg text-gray-700">Deqing Song</div>
          <div className="text-lg text-gray-700">Moyang Li</div>
          <div className="text-lg text-gray-700">Yifan Jiang</div>
          <div className="text-lg text-gray-700">Yuqiao Huang</div>
        </div>

        {/* link to github repo */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/DavidSong2000/SBBTrainDoorLocolization"
            target="_blank"
            className="inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-center"
          >
            <span>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white text-xl text-center"
              />
              Code
            </span>
          </a>
        </div>

        {/* project overview */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            This project explores the potential of using line features to
            improve object pose estimation in mixed reality for SBB doors. Using
            real-time image sequences from the HoloLens, we conducted
            experiments to accurately match a query image with existing features
            with high precision. We compared LiMAP and GIM as feature matching
            methods, evaluating their performance in complex environments. Our
            findings indicate that while line features, even after image
            filtering, demonstrate potential, they are still outperformed by
            GIM, which provides a more efficient solution for real-time feature
            matching of SBB doors in mixed reality applications.
          </p>
        </div>

        {/* videos from hololens
        <div className="flex flex-wrap justify-between w-full max-w-1xl space-y-4 mt-5">
          <div className="flex justify-between w-full space-x-4">
            <video
              autoPlay
              loop
              muted
              playsInline
              className=" flex-1 rounded-lg"
              src="/course-showcase/videos/web_test.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}

        {/* pipeline*/}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Pipeline
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            LiMAP is a line-based feature matching algorithm that uses line
            segments extracted from images to estimate object poses. The
            algorithm first detects line segments in the reference and query
            images, then matches them based on their geometric properties. By
            calculating the transformation matrix between the two images, LiMAP
            accurately localizes the object in the query image.
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            GIM (Generalizable Image Matcher) is a self-supervised framework
            designed to learn robust image matching models with strong
            generalization capabilities from internet videos. By leveraging
            candidate correspondences between adjacent frames and propagating
            them to wider baselines, GIM enhances the training process for
            improved performance in unseen scenarios. In our project, we use GIM
            to localize SBB car doors, utilizing its ability to extract reliable
            feature correspondences.
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            In this project, we compare the performance of LiMAP and GIM in
            feature matching accuracy, evaluating their robustness in further
            localization of SBB train doors.
          </p>
          {/* pic */}
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/pipeline.png"
              alt="LiMAP"
              className="flex-1 rounded-lg"
            />
          </div>
        </div>

        {/* YOLO object detection */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            YOLO Object Detection
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            In our project, we use YOLO Bouding Box to detect SBB train doors in
            the image sequences captured by the HoloLens. By identifying the
            doors in the images, we can extract the region of interest for
            further processing.
          </p>
          {/* pic */}
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/yoloPipeline.png"
              alt="YOLO"
              className="flex-1 rounded-lg"
            />
          </div>
        </div>

        {/* limap results */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            LiMAP Results
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            Our experiments demonstrate that LiMAP is effective in
            reconstructing SBB train doors.
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            Our experiments reveal that LiMAP with bounding boxes is still
            insufficient for accurately localizing SBB train doors with high
            precision. While the algorithm successfully reconstructs the line
            features of the SBB train doors, it struggles to transfer the
            learned features from the synthetic dataset to real-world query
            images, regardless of whether bounding boxes are applied.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 text-center py-5">
            SBB train door reconstruction using LiMAP
          </h3>
          {/* videos */}
          <div className="flex flex-wrap justify-between w-full max-w-1xl space-y-4">
            <div className=" w-full space-x-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/course-showcase/videos/web_limap_reconstruction.mp4"
                className="flex-1"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="w-full space-x-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/course-showcase/videos/web_limapD.mp4"
                className="w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          {/* pic */}
          <h3 className="text-2xl font-bold text-gray-800 text-center py-5">
            LiMAP 2D-3D Line Matching Results
          </h3>
          <h4 className="text-xl font-bold text-gray-800 text-left py-5">
            2D-3D Line Matching <span className="text-red-600">Without</span>{" "}
            Bounding Box
          </h4>
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/out_1736.png"
              alt="LiMAP"
              className="w-1/3 mr-1 "
            />
            <img
              src="/course-showcase/pic/out_1736_sketch.png"
              alt="LiMAP"
              className="w-1/3 mr-1"
            />
            <img
              src="/course-showcase/pic/out_1736_3.png"
              alt="LiMAP"
              className="w-1/3 "
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800 text-left py-5">
            2D-3D Line Matching <span className="text-red-600">Without</span>{" "}
            Bounding Box{" "}
            <span className="text-yellow-600">in Synthetic Image</span>
          </h4>
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/Screenshot294.png"
              alt="LiMAP"
              className="w-1/3 mr-1 "
            />
            <img
              src="/course-showcase/pic/294_sketch.png"
              alt="LiMAP"
              className="w-1/3 mr-1"
            />
            <img
              src="/course-showcase/pic/294.png"
              alt="LiMAP"
              className="w-1/3 "
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800 text-left py-5 mt-5">
            2D-3D Line Matching <span className="text-red-600">With</span>{" "}
            Bounding Box
          </h4>
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/box_1736.png"
              alt="LiMAP"
              className="w-1/3 mr-1 "
            />
            <img
              src="/course-showcase/pic/1736_sketch_box.png"
              alt="LiMAP"
              className="w-1/3 mr-1"
            />
            <img
              src="/course-showcase/pic/1736_box.png"
              alt="LiMAP"
              className="w-1/3 "
            />
          </div>
        </div>

        {/* gim results */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            GIM Results
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            Our experiments show that GIM outperforms well in feature matching
            accuracy. The GIM algorithm is robust to occlusion and cluttered
            backgrounds, providing a more reliable solution for further object
            pose estimation in mixed reality applications.
          </p>

          {/* 视频展示 */}
          <div className="flex flex-wrap justify-between w-full max-w-1xl space-y-4 mt-7">
            <div className="flex justify-between w-full space-x-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-1/2"
                src="/course-showcase/videos/web_match1.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-1/2"
                src="/course-showcase/videos/web_match2.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-between w-full space-x-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/course-showcase/videos/web_warp1.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex justify-between w-full space-x-4">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/course-showcase/videos/web_warp2.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Hololens Implementation */}

        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Hololens Implementation
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            We implemented the GIM algorithms on the HoloLens. By leveraging the
            HoloLens capabilities, we accurately localize SBB train doors in
            mixed reality environments, providing a reliable solution for
            applications in the transportation industry.
          </p>
          <h4 className="text-xl font-bold text-gray-800 text-left py-5">
            Hololens real-time implementation
          </h4>
          {/* pic */}
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/holofin1.jpg"
              alt="project overview"
              className="w-1/3"
            />
            <img
              src="/course-showcase/pic/holofin2.jpg"
              alt="project overview"
              className="w-1/3"
            />
            <img
              src="/course-showcase/pic/holofin3.jpg"
              alt="project overview"
              className="w-1/3"
            />
          </div>
          <div className="flex justify-center w-full mt-5">
            <img
              src="/course-showcase/pic/000128_Client0_rawImage_gim_dkm_match.png"
              alt="project overview"
              className="w-1/2"
            />
            <img
              src="/course-showcase/pic/000128_Client1_rawImage_gim_dkm_match.png"
              alt="project overview"
              className="w-1/2"
            />
          </div>
          <div className="flex justify-center w-full mt-5">
            <img
              src="/course-showcase/pic/000128_Client0_rawImage_gim_dkm_warp.png"
              alt="project overview"
              className="flex-1"
            />
          </div>
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/000128_Client1_rawImage_gim_dkm_warp.png"
              alt="project overview"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
