// ** React
import { useState, useRef } from "react";
import { postMessageOnChat } from "../Helpers/postMessageOnChat";

// ** Icons
import {
  AttachFileDisabledMobileIcon,
  AttachFileEnabledMobileIcon,
  AttachFileIcon,
  CameraDisabledMobileIcon,
  CameraEnabledMobileIcon,
  ChooseGifIcon,
  ChooseStickerIcon,
  EmojiDisabledIcon,
  EmojiEnabledIcon,
  ExpandArrowIcon,
  MenuDisabledMobileIcon,
  MenuEnabledMobileIcon,
  MicrophoneDisabledIcon,
  MicrophoneEnabledIcon,
  OpenMoreActionsIcon,
  SendMessageIcon,
  ThumbUpIcon,
  ThumbUpIconMobile,
} from "../Icons/index";

export const ChatMessageSender = ({
  currentChat,
  messages,
  setMessages,
  socket,
  user,
}) => {
  // ** Hooks
  const filePicker = useRef(null);
  const [showIcons, setShowIcons] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [openMenuOptions, setOpenMenuOptions] = useState(false);
  const [openEmojiOptions, setOpenEmojiOptions] = useState(false);

  const postMessageOnChatHandler = (e) =>
    postMessageOnChat(
      currentChat,
      e,
      newMessage,
      messages,
      setNewMessage,
      setMessages,
      socket,
      user
    );

  return (
    <div
      className={`absolute bottom-2 bg-light-50 dark:bg-dark-200 inset-x-0 md:bottom-14 mx-auto w-full z-20`}
    >
      <div className="flex justify-between space-x-3 items-center pt-1 pb-2 pr-2 pl-2">
        {showIcons && (
          <>
            <div className="hidden md:flex items-center space-x-3">
              <div className="animate__animated animate__fadeIn">
                <OpenMoreActionsIcon />
              </div>
              <div
                className="animate__animated animate__fadeIn"
                onClick={() => filePicker.current.click()}
              >
                <div>
                  <AttachFileIcon />
                </div>
                <input hidden type="file" ref={filePicker} />
              </div>
              <div className="animate__animated animate__fadeIn">
                <ChooseStickerIcon />
              </div>
              <div className="animate__animated animate__fadeIn">
                <ChooseGifIcon />
              </div>
            </div>
            <div className="flex md:hidden space-x-4 items-center">
              <div
                className="cursor-pointer animate__animated animate__fadeIn"
                onClick={() => setOpenMenuOptions(!openMenuOptions)}
              >
                {openEmojiOptions ? (
                  <MenuDisabledMobileIcon />
                ) : (
                  <MenuEnabledMobileIcon />
                )}
              </div>
              <div className="animate__animated animate__fadeIn">
                <div>
                  {openMenuOptions || openEmojiOptions ? (
                    <CameraDisabledMobileIcon />
                  ) : (
                    <CameraEnabledMobileIcon />
                  )}
                </div>
              </div>
              <div
                className="animate__animated animate__fadeIn"
                onClick={() => filePicker.current.click()}
              >
                <div>
                  {openMenuOptions || openEmojiOptions ? (
                    <AttachFileDisabledMobileIcon />
                  ) : (
                    <AttachFileEnabledMobileIcon />
                  )}
                </div>
                <input hidden type="file" ref={filePicker} />
              </div>
              <div className="animate__animated animate__fadeIn">
                {openMenuOptions || openEmojiOptions ? (
                  <MicrophoneDisabledIcon />
                ) : (
                  <MicrophoneEnabledIcon />
                )}
              </div>
            </div>
          </>
        )}
        {!showIcons && <ExpandArrowIcon setShowIcons={setShowIcons} />}
        <form
          className="w-full bg-gray-100 rounded-full mr-1"
          onSubmit={postMessageOnChatHandler}
        >
          <div className="flex items-center pr-3 pl-3 pb-1 w-full flex-grow bg-gray-100 rounded-xl dark:bg-dark-100">
            <input
              className="w-full outline-none mt-0.5 p-1 mr-2 dark:bg-transparent dark:text-white bg-gray-100"
              type="text"
              placeholder="Aa"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <div
              className="mt-1"
              onClick={() => setOpenEmojiOptions(!openEmojiOptions)}
            >
              {openMenuOptions ? (
                <EmojiDisabledIcon />
              ) : (
                <EmojiEnabledIcon
                  openEmojiOptions={openEmojiOptions}
                  setOpenEmojiOptions={setOpenEmojiOptions}
                />
              )}
            </div>
            <button className="hidden" type="submit">
              Send message
            </button>
          </div>
        </form>
        {newMessage ? (
          <SendMessageIcon
            postMessageOnChatHandler={postMessageOnChatHandler}
          />
        ) : (
          <div className="animate__animated animate__fadeIn animate__faster">
            <ThumbUpIcon />
            <ThumbUpIconMobile />
          </div>
        )}
      </div>
      {false && (
        <div className="w-full">
          <h1 className="dar:text-white">TabbedCard</h1>
        </div>
      )}
      {false && <div className="w-full">openMenuOptions</div>}
    </div>
  );
};
