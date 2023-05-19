// ** Material UI
import { Fade, Modal } from "@mui/material";

// ** React
import { useEffect, useState } from "react";

// ** React Redux
import { useDispatch, useSelector } from "react-redux";

// ** Helpers
import { editPost } from "../Helpers/editPost";
import { handleSetFelling } from "../Helpers/handleSetFelling";

// ** Icons
import { NoProfilePictureIcon } from "../Icons";
import { ArrowLeftIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import {
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PhotographIcon,
  UserAddIcon,
  XIcon,
} from "@heroicons/react/outline";

export const EditPostModal = ({
  openEditPost,
  post,
  setOpenEditPost,
  token,
  user,
}) => {
  // ** Hooks
  const dispatch = useDispatch();
  const [felling, setFelling] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [fellingEmoji, setFellingEmoji] = useState("");
  const [openFellings, setOpenFellings] = useState(false);
  const { isEditingPost } = useSelector((state) => state.UiReducer);
  const [imageFromFilePicker, setImageFromFilePicker] = useState(null);

  // ** Methods
  const setFellingHandler = (fellingProp, fellingEmoji) =>
    handleSetFelling(
      felling,
      fellingProp,
      fellingEmoji,
      setFelling,
      setFellingEmoji,
      setOpenFellings
    );

  const editPostHandler = (e) =>
    editPost(
      dispatch,
      e,
      felling,
      fellingEmoji,
      post?._id,
      setFelling,
      setFellingEmoji,
      setOpenEditPost,
      setThoughts,
      thoughts,
      token,
      user?._id
    );

  // ** useEffect
  useEffect(() => {
    const getPost = () => {
      setFelling(post?.felling);
      setThoughts(post?.thoughts);
      setFellingEmoji(post?.fellingEmoji);
      setImageFromFilePicker(post?.image);
    };

    getPost();
  }, [post?.felling, post?.fellingEmoji, post?.image, post?.thoughts]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      className="flex items-center justify-center z-10"
      onClose={() => setOpenEditPost(false)}
      open={openEditPost}
    >
      <Fade in={openEditPost}>
        <div className="bg-light-50 dark:bg-dark-200 p-2.5 m-5 w-100 max-w-lg outline-none rounded-xl">
          {openFellings ? (
            <>
              <div className="flex items-center mb-2 mt-1 w-full">
                <ArrowLeftIcon
                  className="bouncing duration-200 flex icon  dark:text-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-white text-gray-500 transition"
                  onClick={() => setOpenFellings(false)}
                />
                <h1 className="font-bold ml-20 mt-1 pl-4 text-center dark:text-white text-xl bouncing">
                  How are you feeling?
                </h1>
              </div>
              <hr className="bg-gray-400" />
              <div className="h-80 overflow-y-scroll w-full">
                <div className="mt-1 p-1.5 space-y-1 w-ful">
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "happy" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "happy",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/kPzjY1SQHxy.png"
                        alt=""
                      />
                      <p className="inline-flex font-medium pl-2 dark:text-white bouncing">
                        happy
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "blessed" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "blessed",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/RBgas2KX5iq.png"
                        alt=""
                      />
                      <p className="inline-flex font-medium pl-2 dark:text-white bouncing">
                        blessed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "motivated" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "motivated",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/sq3df2SwY1Y.png"
                        alt=""
                      />
                      <p className="inline-flex font-medium pl-2 dark:text-white bouncing">
                        motivated
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "sad" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "sad",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/j7jYKhsSsMB.png"
                        alt=""
                      />
                      <p className="inline-flex font-medium pl-2 dark:text-white bouncing">
                        sad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`dark:hover:bg-dark-400 ${
                        felling === "in love" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } cursor-pointer duration-300 flex hover:bg-gray-100 hover:text-black items-center p-2 rounded-lg space-x-2 transition w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "in love",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png"
                        )
                      }
                    >
                      <img
                        className="flex icon bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/fmmGvxUMzHO.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        in love
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "excited" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "excited",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/hMfWzzwKmNb.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        excited
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "hungry" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "hungry",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/xdZ8Zi7BTOF.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        hungry
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "super" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "super",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/BRAwpY5K_ym.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        super
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "alone" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "alone",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/teFVbjmiZJ-.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        alone
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "crazy" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "crazy",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/yUM_CwwCn1H.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        crazy
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "grateful" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "grateful",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3At0_1akHCx.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        grateful
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "fantastic" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "fantastic",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/3ofw6h4V_6t.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        fantastic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "silly" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "silly",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/A0SCWEbC-Db.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        silly
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "thoughtful" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "thoughtful",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/T9aAWCAl885.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        thoughtful
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "relaxed" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "relaxed",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/tuUqQnegwDk.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        relaxed
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "ok" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "ok",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/xw06YpLxzK_.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        ok
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "delicious" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "delicious",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/_lEyM-5u2Jb.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        delicious
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "exhausted" &&
                        "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "exhausted",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/UIIk0U7G5Tm.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        exhausted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center relative w-full">
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "lucky" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "lucky",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/J3amg8bl7oR.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        lucky
                      </p>
                    </div>
                    <div
                      className={`flex dark:hover:bg-dark-400 items-center hover:bg-gray-100 space-x-2 p-2 ${
                        felling === "bored" && "bg-gray-200 dark:bg-opacity-10"
                      } transition duration-300 rounded-lg cursor-pointer hover:text-black w-6/12`}
                      onClick={() =>
                        setFellingHandler(
                          "bored",
                          "https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png"
                        )
                      }
                    >
                      <img
                        className="icon flex bouncing"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/zXpMTMPo75F.png"
                        alt=""
                      />
                      <p className="font-medium inline-flex pl-2 dark:text-white bouncing">
                        bored
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-2 mt-1">
                <h1 className="bouncing dark:text-white font-bold mt-1 mx-auto pl-4 text-center text-xl">
                  Edit Post
                </h1>
                <XIcon
                  className="bouncing duration-200 flex icon dark:text-gray-400 dark:hover:bg-opacity-20 dark:hover:bg-white text-gray-500 transition"
                  onClick={() => setOpenEditPost(false)}
                />
              </div>
              <hr className="dark:block hidden text-gray-400" />
              <hr className="block dark:hidden text-gray-400" />
              <div className="flex p-2 pt-3">
                {user?.profilePicture ? (
                  <img
                    alt=""
                    className="bouncing cursor-pointer h-12 object-cover rounded-full w-12"
                    src={user?.profilePicture}
                  />
                ) : (
                  <NoProfilePictureIcon className="bouncing cursor-pointer h-12 object-cover rounded-full w-12" />
                )}
                <div className="flex">
                  {user?.fullName ? (
                    <p className="bouncing dark:text-white font-semibold ml-3 text-lg">
                      {user?.fullName}
                    </p>
                  ) : (
                    <p className="bouncing dark:text-white font-semibold ml-3 text-lg">
                      You
                    </p>
                  )}
                  {felling !== "" && (
                    <>
                      <img
                        className="bouncing h-5 ml-2 mr-2 mt-1 w-5"
                        src={fellingEmoji}
                        alt=""
                      />
                      <p className="bouncing dark:text-white font-semibold text-lg">
                        {user?.fullName ? "is" : "are"} felling {felling}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <textarea
                className="bouncing mt-2 outline-none bg-transparent dark:text-white dark:placeholder-gray-300 pb-14 pl-3 pr-3 resize-none text-2xl w-full"
                placeholder={`What's on your mind${
                  user?.fullName ? `, ${user?.fullName?.split(" ")[0]}` : ""
                }?`}
                rows="1"
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              />
              {/* imageUrlContainer */}
              <div>
                <hr className="bg-dark-100 dark:block hidden" />
                <hr className="bg-gray-400 block dark:hidden" />
                <div className="flex items-center justify-between ml-2.5 mr-2.5 pb-2 pl-3 pr-2.5 pt-2 rounded-xl">
                  <h1 className="bouncing font-semibold dark:text-white hidden md:flex text-lg">
                    Add to your Post
                  </h1>
                  <h1 className="bouncing font-semibold dark:text-white flex md:hidden text-lg">
                    Add
                  </h1>
                  <div className="flex">
                    {!imageFromFilePicker ? (
                      <PhotographIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-green-500 transition w-10" />
                    ) : (
                      <PhotographIcon className="bouncing bg-green-100 dark:bg-opacity-10 cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-green-500 transition w-10" />
                    )}
                    <UserAddIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-blue-500 transition w-10" />
                    {!felling ? (
                      <EmojiHappyIcon
                        className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-yellow-500 transition w-10"
                        onClick={() => setOpenFellings(true)}
                      />
                    ) : (
                      <EmojiHappyIcon
                        className="bouncing bg-yellow-100 dark:bg-opacity-10 cursor-pointer duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-yellow-500 transition w-10"
                        onClick={() => setOpenFellings(true)}
                      />
                    )}
                    <LocationMarkerIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-red-500 transition w-10" />
                    <DotsHorizontalIcon className="bouncing cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-10 p-1 rounded-full text-gray-500 transition w-10" />
                  </div>
                </div>
                <hr className="bg-dark-100 dark:block hidden" />
                <hr className="bg-gray-400 block dark:hidden" />
              </div>
              <div className="mb-2 pl-3 pr-3.5 w-full">
                <button
                  className={`flex dark:hidden disabled:cursor-not-allowed disabled:opacity-70 bg-blue-600 duration-300 focus:outline-none font-semibold mt-3 pb-1.5 pt-1.5 rounded-lg text-center items-center justify-center text-white transition w-full ${
                    imageFromFilePicker && !isEditingPost && "hover:bg-blue-700"
                  } ${isEditingPost && "bg-opacity-70 cursor-not-allowed"}`}
                  disabled={!imageFromFilePicker || isEditingPost}
                  onClick={editPostHandler}
                >
                  {isEditingPost ? "Editing" : "Edit"}
                  {isEditingPost && (
                    <svg
                      className="animate-spin h-5 ml-2.5 text-white w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                </button>
                <button
                  className={`hidden dark:flex disabled:cursor-not-allowed disabled:opacity-70 bg-blue-600 duration-300 focus:outline-none font-semibold mt-3 pb-1.5 pt-1.5 rounded-lg items-center justify-center text-center text-white transition w-full ${
                    imageFromFilePicker && !isEditingPost && "hover:bg-blue-700"
                  } ${
                    isEditingPost &&
                    "bg-opacity-70 cursor-not-allowed flex items-center justify-center"
                  }`}
                  disabled={!imageFromFilePicker || isEditingPost}
                  onClick={editPostHandler}
                >
                  {isEditingPost ? "Editing" : "Edit"}
                  {isEditingPost && (
                    <svg
                      className="animate-spin h-5 ml-2.5 text-white w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

// {imageUrlContainer && (
//   <div className="animate__animated animate__fadeIn block border dark:hidden mb-3 ml-3 mr-3 relative rounded-xl">
//     <XIcon
//       className="absolute bg-white border cursor-pointer duration-300 hover:bg-gray-300 h-10 p-2 right-2 rounded-full text-gray-700 top-2 transition w-10"
//       onClick={() => {
//         setImageUrlContainer(false);
//         setImageFromFilePicker(null);
//       }}
//     />
//     <div
//       className="Input__Icon bg-gray-100 border-none hover:bg-gray-200 mt-0 p-6"
//       onClick={() => filePicker.current.click()}
//     >
//       {imageFromFilePicker ? (
//         <>
//           {imageFromFilePicker &&
//           imageFromFilePicker[13] === "4" ? (
//             <video
//               height="20px"
//               src={imageFromFilePicker}
//               width="20px"
//             />
//           ) : (
//             <img
//               className="h-24 object-contain"
//               src={imageFromFilePicker}
//               alt=""
//             />
//           )}
//         </>
//       ) : (
//         <div>
//           <PhotographIcon className="icon ml-12" />
//           <h1 className="font-medium mt-1 text-black">
//             Add Photos/Videos
//           </h1>
//         </div>
//       )}
//       <input
//         hidden
//         type="file"
//         ref={filePicker}
//         onChange={setImageFromFilePickerHandler}
//       />
//     </div>
//   </div>
// )}
//<div className="animate__animated animate__fadeIn dark:block hidden mb-3 ml-3 mr-3 relative rounded-xl">
//  <XIcon
//    className="absolute cursor-pointer bg-dark-200 text-white hover:bg-dark-300 duration-300 h-10 p-2 right-2 rounded-full top-2 transition w-10"
//    onClick={() => {
//      setImageFromFilePicker(null);
//    }}
//  />
//  <div
//    className="Input__Icon bg-dark-400 border-none hover:bg-dark-100 mt-0 p-6"
//    onClick={() => filePicker.current.click()}
//  >
//    {imageFromFilePicker ? (
//      <>
//        {imageFromFilePicker &&
//        imageFromFilePicker[13] === "4" ? (
//          <video
//            height="60px"
//            src={imageFromFilePicker}
//            width="60px"
//          />
//        ) : (
//          <img
//            className="h-24 object-contain"
//            src={imageFromFilePicker}
//            alt=""
//          />
//        )}
//      </>
//    ) : (
//      <div>
//        <PhotographIcon className="icon text-white ml-12" />
//        <h1 className="font-medium mt-1 text-white">
//          Add Photos/Videos
//        </h1>
//      </div>
//    )}
//    <input
//      hidden
//      type="file"
//      ref={filePicker}
//      onChange={setImageFromFilePickerHandler}
//    />
//  </div>
//</div>
