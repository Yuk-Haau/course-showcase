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
            Object pose estimation plays a critical role in augmented reality
            (AR) applications, particularly in environments with low-texture
            surfaces, such as SBB train doors. This work investigates the
            challenges of using line-based meth- ods for pose estimation under
            domain shifts, demonstrat- ing their limitations. We introduce a
            robust, generaliz- able approach leveraging the dense feature
            matcher (GIM) and a pipeline incorporating YOLOv8 bounding box pre-
            dictions and LIMAP-based line feature extraction. Our method
            enhances feature matching in domain-shifted condi- tions and
            provides a real-time implementation on Microsoft HoloLens,
            demonstrating its potential for practical AR ap- plications. Results
            shows the effectiveness of GIM for ro- bust feature matching and
            pose estimation.
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
              className="rounded-lg w-2/3 justify-center"
            />
          </div>
          <p className="mt-2 text-gray-500">
            Figure 1. the top part shows the pipeline of GIM-based feature
            matching. GIM-based method first conducts dense feature matching
            between the refer- ence image and query images, then uses matched
            features to real- ize image warping and pose estimation. The bottom
            part presents the pipeline of LIMAP-based method. LIMAP-based method
            first extracts both line features and point features, then utilizes
            YOLO box to remove outliers. LIMAP-based method use filtered
            features to realize localization.
          </p>
        </div>

        {/* YOLO object detection */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            YOLO Object Detection
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            To improve the quality of feature matching, the pipeline removes
            noisy line features outside the target object in the query image.
            This is achieved by leveraging a bounding box proposed by YOLO . To
            enable bounding box generation, the pipeline trains a YOLOv8
            network. The YOLO pipeline structure is illustrated in Figure 2.
          </p>
          {/* pic */}
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/yoloPipeline.png"
              alt="YOLO"
              className="w-2/3 rounded-lg"
            />
          </div>
          <p className="mt-2 text-gray-500">
            Figure 2. YOLOv8 Bouding Box Pipeline. The figure illustrates the
            image inference process and YOLOv8 model training pipeline. The
            query image undergoes the preprocessing and is then fed into the
            trained YOLOv8 model. The training dataset of annotated images is
            used to fine-tune the model through a process involv- ing model
            training, validation and model saving. Once fine-tuned, the model
            processes the query image by performing tasks of pre- processing,
            model prediction, and post-processing to identify and bound relevant
            features in the image. The resulting inference high- lights SBB door
            areas within the query image, bounds regions around detected objects
            and remove the uninterested areas.
          </p>
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
                src="/course-showcase/videos/web_limap_d.mp4"
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
            Generalizable Image Matcher (GIM) employ internet video to enhance
            the robustness and generalizability in chal- lenging scenarios.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 text-center py-5">
            GIM Feature Matching Results
          </h3>
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

        {/* GIM vs LiMAP */}
        <div className="mt-8 w-full px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            GIM vs LiMAP
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            We compare the performance of GIM and LiMAP, evaluate their
            robustness in further localization of SBB train doors.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 text-center py-5">
            Quantitative evaluation results
          </h3>
          {/* First Table */}
          <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full border text-black">
              <caption className="text-lg font-bold text-gray-700 my-2">
                Table 1. Quantitative Comparison of Localization on Synthetic
                Dataset
              </caption>
              <caption className="text-l text-gray-500 my-2">
                LIMAP-based method achieves better performance in terms of
                translation and rotation due to the introduction of line
                features.
              </caption>
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border text-black">Method</th>
                  <th className="px-4 py-2 border text-black">
                    Translation (m)
                  </th>
                  <th className="px-4 py-2 border text-black">
                    Rotation (deg)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border text-black">Point-based</td>
                  <td className="px-4 py-2 border text-black">0.082</td>
                  <td className="px-4 py-2 border text-black">0.396</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border text-black">
                    LIMAP-based [13]
                  </td>
                  <td className="px-4 py-2 border text-black">0.032</td>
                  <td className="px-4 py-2 border text-black">0.145</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Second Table */}
          <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full border text-black">
              <caption className="text-lg font-bold text-black my-2">
                Table 2. Comparison of Localization on Real-world Dataset
              </caption>
              <caption className="text-l text-gray-500 my-2">
                x denotes that the method fails in this sequence. GIM-based
                method realizes smaller absolute trajectory error (m) on 3
                sequences due to its generalizability on datasets with domain
                shift.
              </caption>
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border text-black">Method</th>
                  <th className="px-4 py-2 border text-black">seq1</th>
                  <th className="px-4 py-2 border text-black">seq2</th>
                  <th className="px-4 py-2 border text-black">seq3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border text-black">
                    LIMAP-based [13]
                  </td>
                  <td className="px-4 py-2 border text-black">x</td>
                  <td className="px-4 py-2 border text-black">1.368 ± 0.499</td>
                  <td className="px-4 py-2 border text-black">0.958 ± 0.417</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border text-black">
                    GIM-based [22]
                  </td>
                  <td className="px-4 py-2 border text-black">1.005 ± 0.473</td>
                  <td className="px-4 py-2 border text-black">0.659 ± 0.378</td>
                  <td className="px-4 py-2 border text-black">0.564 ± 0.346</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            Table 1 demonstrates the superiority of LIMAP-based method on
            low-texture images such as the SBB door. The introduction of line
            features improves the robustness of localization. Moreover, we
            conduct experiments of LIMAP-based method on real-world datasets.
            Table 2 show that LIMAP-based method fails on the real-world dataset
            due to large domain shift between the reference image and the query
            images. There are lots of mismatched line features even with the
            help of YOLO bounding box. However, the GIM-DKM model can realize
            more accurate feature matching and stable localization on datasets
            with large domain shift, as shown in Table 2.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 text-center py-5">
            Qualitative Comparisons of Trajectory Estimation
          </h3>
          {/* pic */}
          <div className="flex justify-center w-full">
            <img
              src="/course-showcase/pic/IMG_8188.png"
              alt="GIM vs LiMAP"
              className="w--full flex-1"
            />
          </div>
          <p className="text-lg text-gray-700 mt-4 max-w-full text-left">
            Given the reference image from synthetic dataset and a sequence of
            real-world images, GIM-based method is able to realize stable
            feature matching and more accurate pose estimation. LIMAP-based
            method fails to achieve accurate point and line feature matching due
            to large domain shift, thus leading to the failure on all sequences
          </p>
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
