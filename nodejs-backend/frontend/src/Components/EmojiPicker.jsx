import axios from "axios";
import React, { useState } from "react";

export const EmojiPicker = ({ postId, userId }) => {
  const [viewEmojis, setViewEmojis] = useState(false);

  const postCommentHandler = async (emojiUrl) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/posts/${postId}/comment`,
        {
          comment: emojiUrl,
          userId,
        }
      );
    } catch (error) {
      console.log(error);
    }
    console.log(emojiUrl);
    setViewEmojis(false);
  };

  const handlePostComment1 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ted/3/28/1f600.png"
    );
  const handlePostComment2 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/3/28/1f603.png"
    );
  const handlePostComment3 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf1/3/28/1f604.png"
    );
  const handlePostComment4 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/3/28/1f601.png"
    );
  const handlePostComment5 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/3/28/1f606.png"
    );
  const handlePostComment6 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t72/3/28/1f605.png"
    );
  const handlePostComment7 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tef/3/28/1f602.png"
    );
  const handlePostComment8 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t71/3/28/1f923.png"
    );
  const handlePostComment9 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/3/28/263a.png"
    );
  const handlePostComment10 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/3/28/1f60a.png"
    );
  const handlePostComment11 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t74/3/28/1f607.png"
    );
  const handlePostComment12 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6b/3/28/1f642.png"
    );
  const handlePostComment13 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tec/3/28/1f643.png"
    );
  const handlePostComment14 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t76/3/28/1f609.png"
    );
  const handlePostComment15 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/3/28/1f60c.png"
    );
  const handlePostComment16 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t21/3/28/1f60d.png"
    );
  const handlePostComment17 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9/3/28/1f970.png"
    );
  const handlePostComment18 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t94/3/28/1f618.png"
    );
  const handlePostComment19 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t13/3/28/1f617.png"
    );
  const handlePostComment20 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t15/3/28/1f619.png"
    );
  const handlePostComment21 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/3/28/1f61a.png"
    );
  const handlePostComment22 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/3/28/1f60b.png"
    );
  const handlePostComment23 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/3/28/1f61b.png"
    );
  const handlePostComment24 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/3/28/1f61d.png"
    );
  const handlePostComment25 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5a/1.5/28/1f61c.png"
    );
  const handlePostComment26 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/3/28/1f92a.png"
    );
  const handlePostComment27 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/3/28/1f928.png"
    );
  const handlePostComment28 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/3/28/1f9d0.png"
    );
  const handlePostComment29 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td2/3/28/1f913.png"
    );
  const handlePostComment30 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta2/3/28/1f60e.png"
    );
  const handlePostComment31 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t77/3/28/1f929.png"
    );
  const handlePostComment32 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8c/3/28/1f973.png"
    );
  const handlePostComment33 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t23/3/28/1f60f.png"
    );
  const handlePostComment34 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/3/28/1f612.png"
    );
  const handlePostComment35 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t41/3/28/1f61e.png"
    );
  const handlePostComment36 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t90/3/28/1f614.png"
    );
  const handlePostComment37 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/3/28/1f61f.png"
    );
  const handlePostComment38 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t11/3/28/1f615.png"
    );
  const handlePostComment39 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tea/3/28/1f641.png"
    );
  const handlePostComment40 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td4/3/28/2639.png"
    );
  const handlePostComment41 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tae/3/28/1f623.png"
    );
  const handlePostComment42 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t92/3/28/1f616.png"
    );
  const handlePostComment43 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f62b.png"
    );
  const handlePostComment44 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f629.png"
    );
  const handlePostComment45 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td5/1.5/28/1f97a.png"
    );
  const handlePostComment46 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f622.png"
    );
  const handlePostComment47 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f62d.png"
    );
  const handlePostComment48 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f624.png"
    );
  const handlePostComment49 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f620.png"
    );
  const handlePostComment50 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f621.png"
    );
  const handlePostComment51 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/1.5/28/1f92c.png"
    );
  const handlePostComment52 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3f/1.5/28/1f92f.png"
    );
  const handlePostComment53 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f633.png"
    );
  const handlePostComment54 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f975.png"
    );
  const handlePostComment55 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f976.png"
    );
  const handlePostComment56 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f631.png"
    );
  const handlePostComment57 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4e/1.5/28/1f628.png"
    );
  const handlePostComment58 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f630.png"
    );
  const handlePostComment59 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/28/1f625.png"
    );
  const handlePostComment60 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f613.png"
    );
  const handlePostComment61 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf1/1.5/28/1f917.png"
    );
  const handlePostComment62 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f914.png"
    );
  const handlePostComment63 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f92d.png"
    );
  const handlePostComment64 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f92b.png"
    );
  const handlePostComment65 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f925.png"
    );
  const handlePostComment66 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f636.png"
    );
  const handlePostComment67 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta7/1.5/28/1f610.png"
    );
  const handlePostComment68 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f611.png"
    );
  const handlePostComment69 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f62c.png"
    );
  const handlePostComment70 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t88/1.5/28/1f644.png"
    );
  const handlePostComment71 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7c/1.5/28/1f62f.png"
    );
  const handlePostComment72 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f626.png"
    );
  const handlePostComment73 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tcd/1.5/28/1f627.png"
    );
  const handlePostComment74 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfb/1.5/28/1f62e.png"
    );
  const handlePostComment75 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f632.png"
    );
  const handlePostComment76 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/28/1f971.png"
    );
  const handlePostComment77 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/28/1f634.png"
    );
  const handlePostComment78 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f924.png"
    );
  const handlePostComment79 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f62a.png"
    );
  const handlePostComment80 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f635.png"
    );
  const handlePostComment81 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f910.png"
    );
  const handlePostComment82 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f974.png"
    );
  const handlePostComment83 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f922.png"
    );
  const handlePostComment84 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/1.5/28/1f92e.png"
    );
  const handlePostComment85 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f927.png"
    );
  const handlePostComment86 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f637.png"
    );
  const handlePostComment87 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f912.png"
    );
  const handlePostComment88 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f915.png"
    );
  const handlePostComment89 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f911.png"
    );
  const handlePostComment90 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f920.png"
    );
  const handlePostComment91 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f608.png"
    );
  const handlePostComment92 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f47f.png"
    );
  const handlePostComment93 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f479.png"
    );
  const handlePostComment94 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f47a.png"
    );
  const handlePostComment95 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f921.png"
    );
  const handlePostComment96 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f4a9.png"
    );
  const handlePostComment97 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t11/1.5/28/1f47b.png"
    );
  const handlePostComment98 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f480.png"
    );
  const handlePostComment99 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/2620.png"
    );
  const handlePostComment100 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t13/1.5/28/1f47d.png"
    );
  const handlePostComment101 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t94/1.5/28/1f47e.png"
    );
  const handlePostComment102 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f916.png"
    );
  const handlePostComment103 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/1.5/28/1f383.png"
    );
  const handlePostComment104 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f63a.png"
    );
  const handlePostComment105 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f638.png"
    );
  const handlePostComment106 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f639.png"
    );
  const handlePostComment107 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f63b.png"
    );
  const handlePostComment108 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f63c.png"
    );
  const handlePostComment109 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f63d.png"
    );
  const handlePostComment110 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f640.png"
    );
  const handlePostComment111 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f63f.png"
    );
  const handlePostComment112 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f63e.png"
    );
  const handlePostComment113 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f932.png"
    );
  const handlePostComment114 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f450.png"
    );
  const handlePostComment115 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f64c.png"
    );
  const handlePostComment116 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f44f.png"
    );
  const handlePostComment117 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1.5/28/1f91d.png"
    );
  const handlePostComment118 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t36/1.5/28/1f44d.png"
    );
  const handlePostComment119 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb7/1.5/28/1f44e.png"
    );
  const handlePostComment120 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb3/1.5/28/1f44a.png"
    );
  const handlePostComment121 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/270a.png"
    );
  const handlePostComment122 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/1.5/28/1f91b.png"
    );
  const handlePostComment123 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f91c.png"
    );
  const handlePostComment124 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/1.5/28/1f91e.png"
    );
  const handlePostComment125 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/270c.png"
    );
  const handlePostComment126 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f91f.png"
    );
  const handlePostComment127 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f918.png"
    );
  const handlePostComment128 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb5/1.5/28/1f44c.png"
    );
  const handlePostComment129 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f90f.png"
    );
  const handlePostComment130 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1.5/28/1f448.png"
    );
  const handlePostComment131 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8b/1.5/28/1f449.png"
    );
  const handlePostComment132 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8/1.5/28/1f446.png"
    );
  const handlePostComment133 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f447.png"
    );
  const handlePostComment134 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1.5/28/261d.png"
    );
  const handlePostComment135 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/270b.png"
    );
  const handlePostComment136 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f91a.png"
    );
  const handlePostComment137 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f590.png"
    );
  const handlePostComment138 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f596.png"
    );
  const handlePostComment139 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1.5/28/1f44b.png"
    );
  const handlePostComment140 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f919.png"
    );
  const handlePostComment141 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta6/1.5/28/1f4aa.png"
    );
  const handlePostComment142 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f9be.png"
    );
  const handlePostComment143 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f595.png"
    );
  const handlePostComment144 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/270d.png"
    );
  const handlePostComment145 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/28/1f64f.png"
    );
  const handlePostComment146 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f9b6.png"
    );
  const handlePostComment147 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9b5.png"
    );
  const handlePostComment148 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f9bf.png"
    );
  const handlePostComment149 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t82/1.5/28/1f484.png"
    );
  const handlePostComment150 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f48b.png"
    );
  const handlePostComment151 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f444.png"
    );
  const handlePostComment152 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9b7.png"
    );
  const handlePostComment153 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t87/1.5/28/1f445.png"
    );
  const handlePostComment154 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4/1.5/28/1f442.png"
    );
  const handlePostComment155 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9bb.png"
    );
  const handlePostComment156 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f443.png"
    );
  const handlePostComment157 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc3/1.5/28/1f463.png"
    );
  const handlePostComment158 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t83/1.5/28/1f441.png"
    );
  const handlePostComment159 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1.5/28/1f440.png"
    );
  const handlePostComment160 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f9e0.png"
    );
  const handlePostComment161 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f5e3.png"
    );
  const handlePostComment162 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f464.png"
    );
  const handlePostComment163 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f465.png"
    );
  const handlePostComment164 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f476.png"
    );
  const handlePostComment165 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f467.png"
    );
  const handlePostComment166 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f9d2.png"
    );
  const handlePostComment167 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f466.png"
    );
  const handlePostComment168 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc9/1.5/28/1f469.png"
    );
  const handlePostComment169 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f9d1.png"
    );
  const handlePostComment170 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f468.png"
    );
  const handlePostComment171 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f469_200d_1f9b1.png"
    );
  const handlePostComment172 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f9d1_200d_1f9b1.png"
    );
  const handlePostComment173 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f468_200d_1f9b1.png"
    );
  const handlePostComment174 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f469_200d_1f9b0.png"
    );
  const handlePostComment175 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9d1_200d_1f9b0.png"
    );
  const handlePostComment176 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f468_200d_1f9b0.png"
    );
  const handlePostComment177 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f471_200d_2640.png"
    );
  const handlePostComment178 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f471.png"
    );
  const handlePostComment179 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f471_200d_2642.png"
    );
  const handlePostComment180 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t14/1.5/28/1f469_200d_1f9b3.png"
    );
  const handlePostComment181 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f468_200d_1f9b3.png"
    );
  const handlePostComment182 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f469_200d_1f9b2.png"
    );
  const handlePostComment183 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f468_200d_1f9b2.png"
    );
  const handlePostComment184 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9d4.png"
    );
  const handlePostComment185 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f475.png"
    );
  const handlePostComment186 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f9d3.png"
    );
  const handlePostComment187 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f474.png"
    );
  const handlePostComment188 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f472.png"
    );
  const handlePostComment189 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f473_200d_2640.png"
    );
  const handlePostComment190 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f473.png"
    );
  const handlePostComment191 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f482_200d_2640.png"
    );
  const handlePostComment192 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t80/1.5/28/1f482.png"
    );
  const handlePostComment193 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t16/1.5/28/1f468_200d_2695.png"
    );
  const handlePostComment194 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8f/1.5/28/1f469_200d_1f33e.png"
    );
  const handlePostComment195 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9d1_200d_1f33e.png"
    );
  const handlePostComment196 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f468_200d_1f33e.png"
    );
  const handlePostComment197 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f469_200d_1f373.png"
    );
  const handlePostComment198 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f9d1_200d_1f373.png"
    );
  const handlePostComment199 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f468_200d_1f373.png"
    );
  const handlePostComment200 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f469_200d_1f393.png"
    );
  const handlePostComment201 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f9d1_200d_1f393.png"
    );
  const handlePostComment202 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f468_200d_1f393.png"
    );
  const handlePostComment203 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f3a4.png"
    );
  const handlePostComment204 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f3a4.png"
    );
  const handlePostComment205 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f3a4.png"
    );
  const handlePostComment206 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1a/1.5/28/1f469_200d_1f3eb.png"
    );
  const handlePostComment207 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f9d1_200d_1f3eb.png"
    );
  const handlePostComment208 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f468_200d_1f3eb.png"
    );
  const handlePostComment209 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f469_200d_1f3ed.png"
    );
  const handlePostComment210 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f9d1_200d_1f3ed.png"
    );
  const handlePostComment211 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f468_200d_1f3ed.png"
    );
  const handlePostComment212 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f469_200d_1f4bb.png"
    );
  const handlePostComment213 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/28/1f9d1_200d_1f4bb.png"
    );
  const handlePostComment214 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f468_200d_1f4bb.png"
    );
  const handlePostComment215 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f469_200d_1f4bc.png"
    );
  const handlePostComment216 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d1_200d_1f4bc.png"
    );
  const handlePostComment217 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t20/1.5/28/1f468_200d_1f4bc.png"
    );
  const handlePostComment218 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f527.png"
    );
  const handlePostComment219 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f527.png"
    );
  const handlePostComment220 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f527.png"
    );
  const handlePostComment221 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f52c.png"
    );
  const handlePostComment222 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f52c.png"
    );
  const handlePostComment223 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f52c.png"
    );
  const handlePostComment224 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f469_200d_1f3a8.png"
    );
  const handlePostComment225 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t45/1.5/28/1f9d1_200d_1f3a8.png"
    );
  const handlePostComment226 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1.5/28/1f468_200d_1f3a8.png"
    );
  const handlePostComment227 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/28/1f469_200d_1f692.png"
    );
  const handlePostComment228 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f9d1_200d_1f692.png"
    );
  const handlePostComment229 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f468_200d_1f692.png"
    );
  const handlePostComment230 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f469_200d_2708.png"
    );
  const handlePostComment231 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f9d1_200d_2708.png"
    );
  const handlePostComment232 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t43/1.5/28/1f468_200d_2708.png"
    );
  const handlePostComment233 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1.5/28/1f469_200d_1f680.png"
    );
  const handlePostComment234 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f9d1_200d_1f680.png"
    );
  const handlePostComment235 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f468_200d_1f680.png"
    );
  const handlePostComment236 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td8/1.5/28/1f469_200d_2696.png"
    );
  const handlePostComment237 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f9d1_200d_2696.png"
    );
  const handlePostComment238 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t97/1.5/28/1f468_200d_2696.png"
    );
  const handlePostComment239 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f470.png"
    );
  const handlePostComment240 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f935.png"
    );
  const handlePostComment241 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f478.png"
    );
  const handlePostComment242 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f934.png"
    );
  const handlePostComment243 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f9b8_200d_2640.png"
    );
  const handlePostComment244 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f9b8.png"
    );
  const handlePostComment245 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f9b8_200d_2642.png"
    );
  const handlePostComment246 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f9b9_200d_2640.png"
    );
  const handlePostComment247 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9b9.png"
    );
  const handlePostComment248 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f9b9_200d_2642.png"
    );
  const handlePostComment249 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f936.png"
    );
  const handlePostComment250 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f385.png"
    );
  const handlePostComment251 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tce/1.5/28/1f9d9_200d_2640.png"
    );
  const handlePostComment252 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f9d9.png"
    );
  const handlePostComment253 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d9_200d_2642.png"
    );
  const handlePostComment254 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb9/1.5/28/1f9dd_200d_2640.png"
    );
  const handlePostComment255 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1.5/28/1f9dd.png"
    );
  const handlePostComment256 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbb/1.5/28/1f9dd_200d_2642.png"
    );
  const handlePostComment257 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f9db_200d_2640.png"
    );
  const handlePostComment258 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f9db.png"
    );
  const handlePostComment259 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f9db_200d_2642.png"
    );
  const handlePostComment260 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f9df_200d_2640.png"
    );
  const handlePostComment261 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4d/1.5/28/1f9df.png"
    );
  const handlePostComment262 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f9df_200d_2642.png"
    );
  const handlePostComment263 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f9de_200d_2640.png"
    );
  const handlePostComment264 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tcc/1.5/28/1f9de.png"
    );
  const handlePostComment265 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1.5/28/1f9de_200d_2642.png"
    );
  const handlePostComment266 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f9dc_200d_2640.png"
    );
  const handlePostComment267 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tca/1.5/28/1f9dc.png"
    );
  const handlePostComment268 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f9dc_200d_2642.png"
    );
  const handlePostComment269 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1.5/28/1f9da_200d_2640.png"
    );
  const handlePostComment270 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc8/1.5/28/1f9da.png"
    );
  const handlePostComment271 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf8/1.5/28/1f9da_200d_2642.png"
    );
  const handlePostComment272 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/28/1f47c.png"
    );
  const handlePostComment273 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta8/1.5/28/1f930.png"
    );
  const handlePostComment274 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f931.png"
    );
  const handlePostComment275 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t79/1.5/28/1f647_200d_2640.png"
    );
  const handlePostComment276 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f647.png"
    );
  const handlePostComment277 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1.5/28/1f647_200d_2642.png"
    );
  const handlePostComment278 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6d/1.5/28/1f481_200d_2640.png"
    );
  const handlePostComment279 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f481.png"
    );
  const handlePostComment280 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6f/1.5/28/1f481_200d_2642.png"
    );
  const handlePostComment281 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f645_200d_2640.png"
    );
  const handlePostComment282 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f645.png"
    );
  const handlePostComment283 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f645_200d_2642.png"
    );
  const handlePostComment284 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f646_200d_2640.png"
    );
  const handlePostComment285 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f646.png"
    );
  const handlePostComment286 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1.5/28/1f646_200d_2642.png"
    );
  const handlePostComment287 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f64b_200d_2640.png"
    );
  const handlePostComment288 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f64b.png"
    );
  const handlePostComment289 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f64b_200d_2642.png"
    );
  const handlePostComment290 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5c/1.5/28/1f9cf_200d_2640.png"
    );
  const handlePostComment291 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f9cf.png"
    );
  const handlePostComment292 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9cf_200d_2642.png"
    );
  const handlePostComment293 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7d/1.5/28/1f926_200d_2640.png"
    );
  const handlePostComment294 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f926.png"
    );
  const handlePostComment295 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1.5/28/1f926_200d_2642.png"
    );
  const handlePostComment296 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9d/1.5/28/1f937_200d_2640.png"
    );
  const handlePostComment297 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2f/1.5/28/1f937.png"
    );
  const handlePostComment298 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f937_200d_2642.png"
    );
  const handlePostComment299 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t27/1.5/28/1f64e_200d_2640.png"
    );
  const handlePostComment300 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f64e.png"
    );
  const handlePostComment301 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f64e_200d_2642.png"
    );
  const handlePostComment302 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f64d_200d_2640.png"
    );
  const handlePostComment303 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f64d_1f3fd.png"
    );
  const handlePostComment304 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f64d_200d_2642.png"
    );
  const handlePostComment305 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f487_200d_2640.png"
    );
  const handlePostComment306 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/28/1f487.png"
    );
  const handlePostComment307 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf5/1.5/28/1f487_200d_2642.png"
    );
  const handlePostComment308 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f486_200d_2640.png"
    );
  const handlePostComment309 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f486.png"
    );
  const handlePostComment310 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f486_200d_2642.png"
    );
  const handlePostComment311 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9d6_200d_2640.png"
    );
  const handlePostComment312 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9d6.png"
    );
  const handlePostComment313 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f9d6_200d_2642.png"
    );
  const handlePostComment314 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/28/1f485.png"
    );
  const handlePostComment315 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2b/1.5/28/1f933.png"
    );
  const handlePostComment316 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f483.png"
    );
  const handlePostComment317 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f57a.png"
    );
  const handlePostComment318 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f46f_200d_2640.png"
    );
  const handlePostComment319 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t76/1.5/28/1f46f.png"
    );
  const handlePostComment320 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t26/1.5/28/1f46f_200d_2642.png"
    );
  const handlePostComment321 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f574.png"
    );
  const handlePostComment322 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f469_200d_1f9bd.png"
    );
  const handlePostComment323 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f9d1_200d_1f9bd.png"
    );
  const handlePostComment324 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f468_200d_1f9bd.png"
    );
  const handlePostComment325 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f9bc.png"
    );
  const handlePostComment326 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f9bc.png"
    );
  const handlePostComment327 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f9bc.png"
    );
  const handlePostComment328 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f6b6_200d_2640.png"
    );
  const handlePostComment329 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f6b6.png"
    );
  const handlePostComment330 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f6b6_200d_2642.png"
    );
  const handlePostComment331 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f469_200d_1f9af.png"
    );
  const handlePostComment332 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f9d1_200d_1f9af.png"
    );
  const handlePostComment333 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f468_200d_1f9af.png"
    );
  const handlePostComment334 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9ce_200d_2640.png"
    );
  const handlePostComment335 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f9ce.png"
    );
  const handlePostComment336 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9ce_200d_2642.png"
    );
  const handlePostComment337 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t63/1.5/28/1f3c3_200d_2640.png"
    );
  const handlePostComment338 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t75/1.5/28/1f3c3.png"
    );
  const handlePostComment339 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f3c3_200d_2642.png"
    );
  const handlePostComment340 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tda/1.5/28/1f9cd_200d_2640.png"
    );
  const handlePostComment341 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f9cd.png"
    );
  const handlePostComment342 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tdc/1.5/28/1f9cd_200d_2642.png"
    );
  const handlePostComment343 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f46b.png"
    );
  const handlePostComment344 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f46d.png"
    );
  const handlePostComment345 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f46c.png"
    );
  const handlePostComment346 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f469_200d_2764_200d_1f468.png"
    );
  const handlePostComment347 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_2764_200d_1f469.png"
    );
  const handlePostComment348 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f468_200d_2764_200d_1f468.png"
    );
  const handlePostComment349 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f468.png"
    );
  const handlePostComment350 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f469.png"
    );
  const handlePostComment351 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/1f468_200d_2764_200d_1f48b_200d_1f468.png"
    );
  const handlePostComment352 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f468_200d_1f469_200d_1f466.png"
    );
  const handlePostComment353 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f468_200d_1f469_200d_1f467.png"
    );
  const handlePostComment354 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f466.png"
    );
  const handlePostComment355 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f468_200d_1f469_200d_1f466_200d_1f466.png"
    );
  const handlePostComment356 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f467.png"
    );
  const handlePostComment357 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f469_200d_1f469_200d_1f466.png"
    );
  const handlePostComment358 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f469_200d_1f469_200d_1f467.png"
    );
  const handlePostComment359 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t40/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f466.png"
    );
  const handlePostComment360 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t61/1.5/28/1f469_200d_1f469_200d_1f466_200d_1f466.png"
    );
  const handlePostComment361 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tc1/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f467.png"
    );
  const handlePostComment362 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t19/2/28/1f468_200d_1f466.png"
    );
  const handlePostComment363 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/2/28/1f468_200d_1f467.png"
    );
  const handlePostComment364 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/2/28/1f468_200d_1f467_200d_1f466.png"
    );
  const handlePostComment365 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tae/2/28/1f468_200d_1f466_200d_1f466.png"
    );
  const handlePostComment366 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/te/2/28/1f468_200d_1f467_200d_1f467.png"
    );
  const handlePostComment367 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/2/28/1f9f6.png"
    );
  const handlePostComment368 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t20/2/28/1f9f5.png"
    );
  const handlePostComment369 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t81/2/28/1f9e5.png"
    );
  const handlePostComment370 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/2/28/1f97c.png"
    );
  const handlePostComment371 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/td0/2/28/1f9ba.png"
    );
  const handlePostComment372 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t98/2/28/1f45a.png"
    );
  const handlePostComment373 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/2/28/1f455.png"
    );
  const handlePostComment374 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ted/2/28/1f456.png"
    );
  const handlePostComment375 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t94/2/28/1fa72.png"
    );
  const handlePostComment376 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t15/2/28/1fa73.png"
    );
  const handlePostComment377 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/teb/2/28/1f454.png"
    );
  const handlePostComment378 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/2/28/1f457.png"
    );
  const handlePostComment379 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t70/2/28/1f459.png"
    );
  const handlePostComment380 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tef/2/28/1f458.png"
    );
  const handlePostComment381 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/2/28/1f97b.png"
    );
  const handlePostComment382 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t13/2/28/1fa71.png"
    );
  const handlePostComment383 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/2/28/1f97f.png"
    );
  const handlePostComment384 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t86/2/28/1f460.png"
    );
  const handlePostComment385 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7/2/28/1f461.png"
    );
  const handlePostComment386 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t88/2/28/1f462.png"
    );
  const handlePostComment387 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/2/28/1f45e.png"
    );
  const handlePostComment388 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/3/28/1f45f.png"
    );
  const handlePostComment389 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/3/28/1f97e.png"
    );
  const handlePostComment390 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/3/28/1f9e6.png"
    );
  const handlePostComment391 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/3/28/1f9e4.png"
    );
  const handlePostComment392 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t1e/3/28/1f9e3.png"
    );
  const handlePostComment393 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t22/3/28/1f3a9.png"
    );
  const handlePostComment394 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t9d/3/28/1f9e2.png"
    );
  const handlePostComment395 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t88/3/28/1f452.png"
    );
  const handlePostComment396 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t44/3/28/1f393.png"
    );
  const handlePostComment397 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/3/28/26d1.png"
    );
  const handlePostComment398 = () =>
    postCommentHandler(
      "https://static.xx.fbcdn.net/images/emoji.php/v9/t7/3/28/1f451.png"
    );

  return (
    <>
      <svg
        className={`${
          viewEmojis && "bg-gray-200 dark:bg-opacity-10"
        } h-8 w-8 pt-1.5 pb-1.5 pl-0.5 pr-0.5 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-opacity-10 rounded-full transition duration-300 text-gray-600 cursor-pointer`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setViewEmojis(!viewEmojis)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="relative">
        {viewEmojis && (
          <div className="absolute animate__animated animate__fadeIn animate__faster bg-white-white dark:bg-dark-200 hidden h-80 md:block overflow-y-scroll pl-2 pr-2 pt-2 right-10 rounded-xl shadow-2xl -top-80 w-80 z-50">
            <p className="dark:text-gray-300 text-gray-500 text-sm">
              Smileys & People
            </p>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/3/28/1f600.png"
                alt=""
                onClick={handlePostComment1}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/3/28/1f603.png"
                alt=""
                onClick={handlePostComment2}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf1/3/28/1f604.png"
                alt=""
                onClick={handlePostComment3}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/3/28/1f601.png"
                alt=""
                onClick={handlePostComment4}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/3/28/1f606.png"
                alt=""
                onClick={handlePostComment5}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/3/28/1f605.png"
                alt=""
                onClick={handlePostComment6}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/3/28/1f602.png"
                alt=""
                onClick={handlePostComment7}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t71/3/28/1f923.png"
                alt=""
                onClick={handlePostComment8}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/3/28/263a.png"
                alt=""
                onClick={handlePostComment9}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/3/28/1f60a.png"
                alt=""
                onClick={handlePostComment10}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t74/3/28/1f607.png"
                alt=""
                onClick={handlePostComment11}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6b/3/28/1f642.png"
                alt=""
                onClick={handlePostComment12}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tec/3/28/1f643.png"
                alt=""
                onClick={handlePostComment13}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t76/3/28/1f609.png"
                alt=""
                onClick={handlePostComment14}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/3/28/1f60c.png"
                alt=""
                onClick={handlePostComment15}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t21/3/28/1f60d.png"
                alt=""
                onClick={handlePostComment16}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/3/28/1f970.png"
                alt=""
                onClick={handlePostComment17}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t94/3/28/1f618.png"
                alt=""
                onClick={handlePostComment18}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t13/3/28/1f617.png"
                alt=""
                onClick={handlePostComment19}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/3/28/1f619.png"
                alt=""
                onClick={handlePostComment20}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/3/28/1f61a.png"
                alt=""
                onClick={handlePostComment21}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/3/28/1f60b.png"
                alt=""
                onClick={handlePostComment22}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/3/28/1f61b.png"
                alt=""
                onClick={handlePostComment23}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/3/28/1f61d.png"
                alt=""
                onClick={handlePostComment24}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3f/3/28/1f61c.png"
                alt=""
                onClick={handlePostComment25}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/3/28/1f92a.png"
                alt=""
                onClick={handlePostComment26}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/3/28/1f928.png"
                alt=""
                onClick={handlePostComment27}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/3/28/1f9d0.png"
                alt=""
                onClick={handlePostComment28}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td2/3/28/1f913.png"
                alt=""
                onClick={handlePostComment29}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta2/3/28/1f60e.png"
                alt=""
                onClick={handlePostComment30}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t77/3/28/1f929.png"
                alt=""
                onClick={handlePostComment31}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8c/3/28/1f973.png"
                alt=""
                onClick={handlePostComment32}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t23/3/28/1f60f.png"
                alt=""
                onClick={handlePostComment33}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/3/28/1f612.png"
                alt=""
                onClick={handlePostComment34}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t41/3/28/1f61e.png"
                alt=""
                onClick={handlePostComment35}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/3/28/1f614.png"
                alt=""
                onClick={handlePostComment36}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/3/28/1f61f.png"
                alt=""
                onClick={handlePostComment37}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t11/3/28/1f615.png"
                alt=""
                onClick={handlePostComment38}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tea/3/28/1f641.png"
                alt=""
                onClick={handlePostComment39}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td4/3/28/2639.png"
                alt=""
                onClick={handlePostComment40}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/3/28/1f623.png"
                alt=""
                onClick={handlePostComment41}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/3/28/1f616.png"
                alt=""
                onClick={handlePostComment42}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f62b.png"
                alt=""
                onClick={handlePostComment43}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f629.png"
                alt=""
                onClick={handlePostComment44}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td5/1.5/28/1f97a.png"
                alt=""
                onClick={handlePostComment45}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f622.png"
                alt=""
                onClick={handlePostComment46}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f62d.png"
                alt=""
                onClick={handlePostComment47}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f624.png"
                alt=""
                onClick={handlePostComment48}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f620.png"
                alt=""
                onClick={handlePostComment49}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f621.png"
                alt=""
                onClick={handlePostComment50}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/1.5/28/1f92c.png"
                alt=""
                onClick={handlePostComment51}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3f/1.5/28/1f92f.png"
                alt=""
                onClick={handlePostComment52}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f633.png"
                alt=""
                onClick={handlePostComment53}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f975.png"
                alt=""
                onClick={handlePostComment54}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f976.png"
                alt=""
                onClick={handlePostComment55}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f631.png"
                alt=""
                onClick={handlePostComment56}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4e/1.5/28/1f628.png"
                alt=""
                onClick={handlePostComment57}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f630.png"
                alt=""
                onClick={handlePostComment58}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/28/1f625.png"
                alt=""
                onClick={handlePostComment59}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f613.png"
                alt=""
                onClick={handlePostComment60}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf1/1.5/28/1f917.png"
                alt=""
                onClick={handlePostComment61}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f914.png"
                alt=""
                onClick={handlePostComment62}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f92d.png"
                alt=""
                onClick={handlePostComment63}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f92b.png"
                alt=""
                onClick={handlePostComment64}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f925.png"
                alt=""
                onClick={handlePostComment65}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f636.png"
                alt=""
                onClick={handlePostComment66}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta7/1.5/28/1f610.png"
                alt=""
                onClick={handlePostComment67}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f611.png"
                alt=""
                onClick={handlePostComment68}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f62c.png"
                alt=""
                onClick={handlePostComment69}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t88/1.5/28/1f644.png"
                alt=""
                onClick={handlePostComment70}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7c/1.5/28/1f62f.png"
                alt=""
                onClick={handlePostComment71}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f626.png"
                alt=""
                onClick={handlePostComment72}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcd/1.5/28/1f627.png"
                alt=""
                onClick={handlePostComment73}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfb/1.5/28/1f62e.png"
                alt=""
                onClick={handlePostComment74}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f632.png"
                alt=""
                onClick={handlePostComment75}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/28/1f971.png"
                alt=""
                onClick={handlePostComment76}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/28/1f634.png"
                alt=""
                onClick={handlePostComment77}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f924.png"
                alt=""
                onClick={handlePostComment78}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f62a.png"
                alt=""
                onClick={handlePostComment79}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f635.png"
                alt=""
                onClick={handlePostComment80}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f910.png"
                alt=""
                onClick={handlePostComment81}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f974.png"
                alt=""
                onClick={handlePostComment82}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f922.png"
                alt=""
                onClick={handlePostComment83}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/1.5/28/1f92e.png"
                alt=""
                onClick={handlePostComment84}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f927.png"
                alt=""
                onClick={handlePostComment85}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f637.png"
                alt=""
                onClick={handlePostComment86}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f912.png"
                alt=""
                onClick={handlePostComment87}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f915.png"
                alt=""
                onClick={handlePostComment88}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f911.png"
                alt=""
                onClick={handlePostComment89}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f920.png"
                alt=""
                onClick={handlePostComment90}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f608.png"
                alt=""
                onClick={handlePostComment91}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f47f.png"
                alt=""
                onClick={handlePostComment92}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f479.png"
                alt=""
                onClick={handlePostComment93}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f47a.png"
                alt=""
                onClick={handlePostComment94}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f921.png"
                alt=""
                onClick={handlePostComment95}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f4a9.png"
                alt=""
                onClick={handlePostComment96}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t11/1.5/28/1f47b.png"
                alt=""
                onClick={handlePostComment97}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f480.png"
                alt=""
                onClick={handlePostComment98}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/2620.png"
                alt=""
                onClick={handlePostComment99}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t13/1.5/28/1f47d.png"
                alt=""
                onClick={handlePostComment100}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t94/1.5/28/1f47e.png"
                alt=""
                onClick={handlePostComment101}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f916.png"
                alt=""
                onClick={handlePostComment102}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/1.5/28/1f383.png"
                alt=""
                onClick={handlePostComment103}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f63a.png"
                alt=""
                onClick={handlePostComment104}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f638.png"
                alt=""
                onClick={handlePostComment105}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f639.png"
                alt=""
                onClick={handlePostComment106}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f63b.png"
                alt=""
                onClick={handlePostComment107}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f63c.png"
                alt=""
                onClick={handlePostComment108}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f63d.png"
                alt=""
                onClick={handlePostComment109}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f640.png"
                alt=""
                onClick={handlePostComment110}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f63f.png"
                alt=""
                onClick={handlePostComment111}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f63e.png"
                alt=""
                onClick={handlePostComment112}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f932.png"
                alt=""
                onClick={handlePostComment113}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f450.png"
                alt=""
                onClick={handlePostComment114}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f64c.png"
                alt=""
                onClick={handlePostComment115}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f44f.png"
                alt=""
                onClick={handlePostComment116}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1.5/28/1f91d.png"
                alt=""
                onClick={handlePostComment117}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t36/1.5/28/1f44d.png"
                alt=""
                onClick={handlePostComment118}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb7/1.5/28/1f44e.png"
                alt=""
                onClick={handlePostComment119}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb3/1.5/28/1f44a.png"
                alt=""
                onClick={handlePostComment120}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/270a.png"
                alt=""
                onClick={handlePostComment121}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/1.5/28/1f91b.png"
                alt=""
                onClick={handlePostComment122}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f91c.png"
                alt=""
                onClick={handlePostComment123}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/1.5/28/1f91e.png"
                alt=""
                onClick={handlePostComment124}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/270c.png"
                alt=""
                onClick={handlePostComment125}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f91f.png"
                alt=""
                onClick={handlePostComment126}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f918.png"
                alt=""
                onClick={handlePostComment127}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb5/1.5/28/1f44c.png"
                alt=""
                onClick={handlePostComment128}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f90f.png"
                alt=""
                onClick={handlePostComment129}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1.5/28/1f448.png"
                alt=""
                onClick={handlePostComment130}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8b/1.5/28/1f449.png"
                alt=""
                onClick={handlePostComment131}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8/1.5/28/1f446.png"
                alt=""
                onClick={handlePostComment132}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f447.png"
                alt=""
                onClick={handlePostComment133}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1.5/28/261d.png"
                alt=""
                onClick={handlePostComment134}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/270b.png"
                alt=""
                onClick={handlePostComment135}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f91a.png"
                alt=""
                onClick={handlePostComment136}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f590.png"
                alt=""
                onClick={handlePostComment137}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f596.png"
                alt=""
                onClick={handlePostComment138}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1.5/28/1f44b.png"
                alt=""
                onClick={handlePostComment139}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f919.png"
                alt=""
                onClick={handlePostComment140}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta6/1.5/28/1f4aa.png"
                alt=""
                onClick={handlePostComment141}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f9be.png"
                alt=""
                onClick={handlePostComment142}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f595.png"
                alt=""
                onClick={handlePostComment143}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/270d.png"
                alt=""
                onClick={handlePostComment144}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/28/1f64f.png"
                alt=""
                onClick={handlePostComment145}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f9b6.png"
                alt=""
                onClick={handlePostComment146}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9b5.png"
                alt=""
                onClick={handlePostComment147}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f9bf.png"
                alt=""
                onClick={handlePostComment148}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t82/1.5/28/1f484.png"
                alt=""
                onClick={handlePostComment149}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f48b.png"
                alt=""
                onClick={handlePostComment150}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f444.png"
                alt=""
                onClick={handlePostComment151}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9b7.png"
                alt=""
                onClick={handlePostComment152}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t87/1.5/28/1f445.png"
                alt=""
                onClick={handlePostComment153}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4/1.5/28/1f442.png"
                alt=""
                onClick={handlePostComment154}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9bb.png"
                alt=""
                onClick={handlePostComment155}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f443.png"
                alt=""
                onClick={handlePostComment156}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc3/1.5/28/1f463.png"
                alt=""
                onClick={handlePostComment157}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t83/1.5/28/1f441.png"
                alt=""
                onClick={handlePostComment158}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1.5/28/1f440.png"
                alt=""
                onClick={handlePostComment159}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f9e0.png"
                alt=""
                onClick={handlePostComment160}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f5e3.png"
                alt=""
                onClick={handlePostComment161}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f464.png"
                alt=""
                onClick={handlePostComment162}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f465.png"
                alt=""
                onClick={handlePostComment163}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f476.png"
                alt=""
                onClick={handlePostComment164}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f467.png"
                alt=""
                onClick={handlePostComment165}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f9d2.png"
                alt=""
                onClick={handlePostComment166}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f466.png"
                alt=""
                onClick={handlePostComment167}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc9/1.5/28/1f469.png"
                alt=""
                onClick={handlePostComment168}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f9d1.png"
                alt=""
                onClick={handlePostComment169}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f468.png"
                alt=""
                onClick={handlePostComment170}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f469_200d_1f9b1.png"
                alt=""
                onClick={handlePostComment171}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f9d1_200d_1f9b1.png"
                alt=""
                onClick={handlePostComment172}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f468_200d_1f9b1.png"
                alt=""
                onClick={handlePostComment173}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f469_200d_1f9b0.png"
                alt=""
                onClick={handlePostComment174}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9d1_200d_1f9b0.png"
                alt=""
                onClick={handlePostComment175}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f468_200d_1f9b0.png"
                alt=""
                onClick={handlePostComment176}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f471_200d_2640.png"
                alt=""
                onClick={handlePostComment177}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f471.png"
                alt=""
                onClick={handlePostComment178}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f471_200d_2642.png"
                alt=""
                onClick={handlePostComment179}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t14/1.5/28/1f469_200d_1f9b3.png"
                alt=""
                onClick={handlePostComment180}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f468_200d_1f9b3.png"
                alt=""
                onClick={handlePostComment181}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f469_200d_1f9b2.png"
                alt=""
                onClick={handlePostComment182}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f468_200d_1f9b2.png"
                alt=""
                onClick={handlePostComment183}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9d4.png"
                alt=""
                onClick={handlePostComment184}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f475.png"
                alt=""
                onClick={handlePostComment185}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f9d3.png"
                alt=""
                onClick={handlePostComment186}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f474.png"
                alt=""
                onClick={handlePostComment187}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f472.png"
                alt=""
                onClick={handlePostComment188}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f473_200d_2640.png"
                alt=""
                onClick={handlePostComment189}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f473.png"
                alt=""
                onClick={handlePostComment190}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f482_200d_2640.png"
                alt=""
                onClick={handlePostComment191}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t80/1.5/28/1f482.png"
                alt=""
                onClick={handlePostComment192}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t16/1.5/28/1f468_200d_2695.png"
                alt=""
                onClick={handlePostComment193}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8f/1.5/28/1f469_200d_1f33e.png"
                alt=""
                onClick={handlePostComment194}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9d1_200d_1f33e.png"
                alt=""
                onClick={handlePostComment195}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f468_200d_1f33e.png"
                alt=""
                onClick={handlePostComment196}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f469_200d_1f373.png"
                alt=""
                onClick={handlePostComment197}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f9d1_200d_1f373.png"
                alt=""
                onClick={handlePostComment198}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f468_200d_1f373.png"
                alt=""
                onClick={handlePostComment199}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f469_200d_1f393.png"
                alt=""
                onClick={handlePostComment200}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f9d1_200d_1f393.png"
                alt=""
                onClick={handlePostComment201}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f468_200d_1f393.png"
                alt=""
                onClick={handlePostComment202}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f3a4.png"
                alt=""
                onClick={handlePostComment203}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f3a4.png"
                alt=""
                onClick={handlePostComment204}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f3a4.png"
                alt=""
                onClick={handlePostComment205}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1a/1.5/28/1f469_200d_1f3eb.png"
                alt=""
                onClick={handlePostComment206}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f9d1_200d_1f3eb.png"
                alt=""
                onClick={handlePostComment207}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f468_200d_1f3eb.png"
                alt=""
                onClick={handlePostComment208}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f469_200d_1f3ed.png"
                alt=""
                onClick={handlePostComment209}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f9d1_200d_1f3ed.png"
                alt=""
                onClick={handlePostComment210}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f468_200d_1f3ed.png"
                alt=""
                onClick={handlePostComment211}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f469_200d_1f4bb.png"
                alt=""
                onClick={handlePostComment212}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/28/1f9d1_200d_1f4bb.png"
                alt=""
                onClick={handlePostComment213}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f468_200d_1f4bb.png"
                alt=""
                onClick={handlePostComment214}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f469_200d_1f4bc.png"
                alt=""
                onClick={handlePostComment215}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d1_200d_1f4bc.png"
                alt=""
                onClick={handlePostComment216}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t20/1.5/28/1f468_200d_1f4bc.png"
                alt=""
                onClick={handlePostComment217}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f527.png"
                alt=""
                onClick={handlePostComment218}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f527.png"
                alt=""
                onClick={handlePostComment219}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f527.png"
                alt=""
                onClick={handlePostComment220}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f52c.png"
                alt=""
                onClick={handlePostComment221}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f52c.png"
                alt=""
                onClick={handlePostComment222}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f52c.png"
                alt=""
                onClick={handlePostComment223}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f469_200d_1f3a8.png"
                alt=""
                onClick={handlePostComment224}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t45/1.5/28/1f9d1_200d_1f3a8.png"
                alt=""
                onClick={handlePostComment225}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1.5/28/1f468_200d_1f3a8.png"
                alt=""
                onClick={handlePostComment226}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/28/1f469_200d_1f692.png"
                alt=""
                onClick={handlePostComment227}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f9d1_200d_1f692.png"
                alt=""
                onClick={handlePostComment228}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f468_200d_1f692.png"
                alt=""
                onClick={handlePostComment229}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f469_200d_2708.png"
                alt=""
                onClick={handlePostComment230}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f9d1_200d_2708.png"
                alt=""
                onClick={handlePostComment231}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t43/1.5/28/1f468_200d_2708.png"
                alt=""
                onClick={handlePostComment232}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1.5/28/1f469_200d_1f680.png"
                alt=""
                onClick={handlePostComment233}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f9d1_200d_1f680.png"
                alt=""
                onClick={handlePostComment234}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f468_200d_1f680.png"
                alt=""
                onClick={handlePostComment235}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td8/1.5/28/1f469_200d_2696.png"
                alt=""
                onClick={handlePostComment236}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f9d1_200d_2696.png"
                alt=""
                onClick={handlePostComment237}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t97/1.5/28/1f468_200d_2696.png"
                alt=""
                onClick={handlePostComment238}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f470.png"
                alt=""
                onClick={handlePostComment239}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f935.png"
                alt=""
                onClick={handlePostComment240}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f478.png"
                alt=""
                onClick={handlePostComment241}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f934.png"
                alt=""
                onClick={handlePostComment242}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f9b8_200d_2640.png"
                alt=""
                onClick={handlePostComment243}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f9b8.png"
                alt=""
                onClick={handlePostComment244}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f9b8_200d_2642.png"
                alt=""
                onClick={handlePostComment245}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f9b9_200d_2640.png"
                alt=""
                onClick={handlePostComment246}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9b9.png"
                alt=""
                onClick={handlePostComment247}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f9b9_200d_2642.png"
                alt=""
                onClick={handlePostComment248}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f936.png"
                alt=""
                onClick={handlePostComment249}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f385.png"
                alt=""
                onClick={handlePostComment250}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tce/1.5/28/1f9d9_200d_2640.png"
                alt=""
                onClick={handlePostComment251}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f9d9.png"
                alt=""
                onClick={handlePostComment252}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d9_200d_2642.png"
                alt=""
                onClick={handlePostComment253}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb9/1.5/28/1f9dd_200d_2640.png"
                alt=""
                onClick={handlePostComment254}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1.5/28/1f9dd.png"
                alt=""
                onClick={handlePostComment255}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbb/1.5/28/1f9dd_200d_2642.png"
                alt=""
                onClick={handlePostComment256}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f9db_200d_2640.png"
                alt=""
                onClick={handlePostComment257}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f9db.png"
                alt=""
                onClick={handlePostComment258}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f9db_200d_2642.png"
                alt=""
                onClick={handlePostComment259}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f9df_200d_2640.png"
                alt=""
                onClick={handlePostComment260}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4d/1.5/28/1f9df.png"
                alt=""
                onClick={handlePostComment261}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f9df_200d_2642.png"
                alt=""
                onClick={handlePostComment262}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f9de_200d_2640.png"
                alt=""
                onClick={handlePostComment263}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcc/1.5/28/1f9de.png"
                alt=""
                onClick={handlePostComment264}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1.5/28/1f9de_200d_2642.png"
                alt=""
                onClick={handlePostComment265}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f9dc_200d_2640.png"
                alt=""
                onClick={handlePostComment266}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tca/1.5/28/1f9dc.png"
                alt=""
                onClick={handlePostComment267}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f9dc_200d_2642.png"
                alt=""
                onClick={handlePostComment268}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1.5/28/1f9da_200d_2640.png"
                alt=""
                onClick={handlePostComment269}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc8/1.5/28/1f9da.png"
                alt=""
                onClick={handlePostComment270}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf8/1.5/28/1f9da_200d_2642.png"
                alt=""
                onClick={handlePostComment271}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/28/1f47c.png"
                alt=""
                onClick={handlePostComment272}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta8/1.5/28/1f930.png"
                alt=""
                onClick={handlePostComment273}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f931.png"
                alt=""
                onClick={handlePostComment274}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t79/1.5/28/1f647_200d_2640.png"
                alt=""
                onClick={handlePostComment275}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f647.png"
                alt=""
                onClick={handlePostComment276}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1.5/28/1f647_200d_2642.png"
                alt=""
                onClick={handlePostComment277}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6d/1.5/28/1f481_200d_2640.png"
                alt=""
                onClick={handlePostComment278}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f481.png"
                alt=""
                onClick={handlePostComment279}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6f/1.5/28/1f481_200d_2642.png"
                alt=""
                onClick={handlePostComment280}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f645_200d_2640.png"
                alt=""
                onClick={handlePostComment281}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f645.png"
                alt=""
                onClick={handlePostComment282}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f645_200d_2642.png"
                alt=""
                onClick={handlePostComment283}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f646_200d_2640.png"
                alt=""
                onClick={handlePostComment284}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f646.png"
                alt=""
                onClick={handlePostComment285}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1.5/28/1f646_200d_2642.png"
                alt=""
                onClick={handlePostComment286}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f64b_200d_2640.png"
                alt=""
                onClick={handlePostComment287}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f64b.png"
                alt=""
                onClick={handlePostComment288}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f64b_200d_2642.png"
                alt=""
                onClick={handlePostComment289}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5c/1.5/28/1f9cf_200d_2640.png"
                alt=""
                onClick={handlePostComment290}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f9cf.png"
                alt=""
                onClick={handlePostComment291}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9cf_200d_2642.png"
                alt=""
                onClick={handlePostComment292}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7d/1.5/28/1f926_200d_2640.png"
                alt=""
                onClick={handlePostComment293}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f926.png"
                alt=""
                onClick={handlePostComment294}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1.5/28/1f926_200d_2642.png"
                alt=""
                onClick={handlePostComment295}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9d/1.5/28/1f937_200d_2640.png"
                alt=""
                onClick={handlePostComment296}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2f/1.5/28/1f937.png"
                alt=""
                onClick={handlePostComment297}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f937_200d_2642.png"
                alt=""
                onClick={handlePostComment298}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t27/1.5/28/1f64e_200d_2640.png"
                alt=""
                onClick={handlePostComment299}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f64e.png"
                alt=""
                onClick={handlePostComment300}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f64e_200d_2642.png"
                alt=""
                onClick={handlePostComment301}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f64d_200d_2640.png"
                alt=""
                onClick={handlePostComment302}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f64d_1f3fd.png"
                alt=""
                onClick={handlePostComment303}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f64d_200d_2642.png"
                alt=""
                onClick={handlePostComment304}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f487_200d_2640.png"
                alt=""
                onClick={handlePostComment305}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/28/1f487.png"
                alt=""
                onClick={handlePostComment306}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf5/1.5/28/1f487_200d_2642.png"
                alt=""
                onClick={handlePostComment307}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f486_200d_2640.png"
                alt=""
                onClick={handlePostComment308}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f486.png"
                alt=""
                onClick={handlePostComment309}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f486_200d_2642.png"
                alt=""
                onClick={handlePostComment310}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9d6_200d_2640.png"
                alt=""
                onClick={handlePostComment311}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9d6.png"
                alt=""
                onClick={handlePostComment312}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f9d6_200d_2642.png"
                alt=""
                onClick={handlePostComment313}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/28/1f485.png"
                alt=""
                onClick={handlePostComment314}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2b/1.5/28/1f933.png"
                alt=""
                onClick={handlePostComment315}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f483.png"
                alt=""
                onClick={handlePostComment316}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f57a.png"
                alt=""
                onClick={handlePostComment317}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f46f_200d_2640.png"
                alt=""
                onClick={handlePostComment318}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t76/1.5/28/1f46f.png"
                alt=""
                onClick={handlePostComment319}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t26/1.5/28/1f46f_200d_2642.png"
                alt=""
                onClick={handlePostComment320}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f574.png"
                alt=""
                onClick={handlePostComment321}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f469_200d_1f9bd.png"
                alt=""
                onClick={handlePostComment322}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f9d1_200d_1f9bd.png"
                alt=""
                onClick={handlePostComment323}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f468_200d_1f9bd.png"
                alt=""
                onClick={handlePostComment324}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f9bc.png"
                alt=""
                onClick={handlePostComment325}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f9bc.png"
                alt=""
                onClick={handlePostComment326}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f9bc.png"
                alt=""
                onClick={handlePostComment327}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f6b6_200d_2640.png"
                alt=""
                onClick={handlePostComment328}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f6b6.png"
                alt=""
                onClick={handlePostComment329}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f6b6_200d_2642.png"
                alt=""
                onClick={handlePostComment330}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f469_200d_1f9af.png"
                alt=""
                onClick={handlePostComment331}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f9d1_200d_1f9af.png"
                alt=""
                onClick={handlePostComment332}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f468_200d_1f9af.png"
                alt=""
                onClick={handlePostComment333}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9ce_200d_2640.png"
                alt=""
                onClick={handlePostComment334}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f9ce.png"
                alt=""
                onClick={handlePostComment335}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9ce_200d_2642.png"
                alt=""
                onClick={handlePostComment336}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t63/1.5/28/1f3c3_200d_2640.png"
                alt=""
                onClick={handlePostComment337}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t75/1.5/28/1f3c3.png"
                alt=""
                onClick={handlePostComment338}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f3c3_200d_2642.png"
                alt=""
                onClick={handlePostComment339}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tda/1.5/28/1f9cd_200d_2640.png"
                alt=""
                onClick={handlePostComment340}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f9cd.png"
                alt=""
                onClick={handlePostComment341}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdc/1.5/28/1f9cd_200d_2642.png"
                alt=""
                onClick={handlePostComment342}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f46b.png"
                alt=""
                onClick={handlePostComment343}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f46d.png"
                alt=""
                onClick={handlePostComment344}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f46c.png"
                alt=""
                onClick={handlePostComment345}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f469_200d_2764_200d_1f468.png"
                alt=""
                onClick={handlePostComment346}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_2764_200d_1f469.png"
                alt=""
                onClick={handlePostComment347}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f468_200d_2764_200d_1f468.png"
                alt=""
                onClick={handlePostComment348}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f468.png"
                alt=""
                onClick={handlePostComment349}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f469.png"
                alt=""
                onClick={handlePostComment350}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/1f468_200d_2764_200d_1f48b_200d_1f468.png"
                alt=""
                onClick={handlePostComment351}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f468_200d_1f469_200d_1f466.png"
                alt=""
                onClick={handlePostComment352}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f468_200d_1f469_200d_1f467.png"
                alt=""
                onClick={handlePostComment353}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f466.png"
                alt=""
                onClick={handlePostComment354}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f468_200d_1f469_200d_1f466_200d_1f466.png"
                alt=""
                onClick={handlePostComment355}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f467.png"
                alt=""
                onClick={handlePostComment356}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f469_200d_1f469_200d_1f466.png"
                alt=""
                onClick={handlePostComment357}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f469_200d_1f469_200d_1f467.png"
                alt=""
                onClick={handlePostComment358}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t40/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f466.png"
                alt=""
                onClick={handlePostComment359}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t61/1.5/28/1f469_200d_1f469_200d_1f466_200d_1f466.png"
                alt=""
                onClick={handlePostComment360}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc1/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f467.png"
                alt=""
                onClick={handlePostComment361}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t19/2/28/1f468_200d_1f466.png"
                alt=""
                onClick={handlePostComment362}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/2/28/1f468_200d_1f467.png"
                alt=""
                onClick={handlePostComment363}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/2/28/1f468_200d_1f467_200d_1f466.png"
                alt=""
                onClick={handlePostComment364}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/2/28/1f468_200d_1f466_200d_1f466.png"
                alt=""
                onClick={handlePostComment365}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te/2/28/1f468_200d_1f467_200d_1f467.png"
                alt=""
                onClick={handlePostComment366}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/2/28/1f9f6.png"
                alt=""
                onClick={handlePostComment367}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t20/2/28/1f9f5.png"
                alt=""
                onClick={handlePostComment368}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t81/2/28/1f9e5.png"
                alt=""
                onClick={handlePostComment369}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/2/28/1f97c.png"
                alt=""
                onClick={handlePostComment370}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/2/28/1f9ba.png"
                alt=""
                onClick={handlePostComment371}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t98/2/28/1f45a.png"
                alt=""
                onClick={handlePostComment372}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/2/28/1f455.png"
                alt=""
                onClick={handlePostComment373}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/2/28/1f456.png"
                alt=""
                onClick={handlePostComment374}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t94/2/28/1fa72.png"
                alt=""
                onClick={handlePostComment375}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/2/28/1fa73.png"
                alt=""
                onClick={handlePostComment376}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/2/28/1f454.png"
                alt=""
                onClick={handlePostComment377}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/2/28/1f457.png"
                alt=""
                onClick={handlePostComment378}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/2/28/1f459.png"
                alt=""
                onClick={handlePostComment379}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/2/28/1f458.png"
                alt=""
                onClick={handlePostComment380}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/2/28/1f97b.png"
                alt=""
                onClick={handlePostComment381}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t13/2/28/1fa71.png"
                alt=""
                onClick={handlePostComment382}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/2/28/1f97f.png"
                alt=""
                onClick={handlePostComment383}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t86/2/28/1f460.png"
                alt=""
                onClick={handlePostComment384}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/2/28/1f461.png"
                alt=""
                onClick={handlePostComment385}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t88/2/28/1f462.png"
                alt=""
                onClick={handlePostComment386}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/2/28/1f45e.png"
                alt=""
                onClick={handlePostComment387}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/3/28/1f45f.png"
                alt=""
                onClick={handlePostComment388}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/3/28/1f97e.png"
                alt=""
                onClick={handlePostComment389}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/3/28/1f9e6.png"
                alt=""
                onClick={handlePostComment390}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/3/28/1f9e4.png"
                alt=""
                onClick={handlePostComment391}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1e/3/28/1f9e3.png"
                alt=""
                onClick={handlePostComment392}
              />
            </div>
            <div className="flex mt-2 space-x-0.5">
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/3/28/1f3a9.png"
                alt=""
                onClick={handlePostComment393}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9d/3/28/1f9e2.png"
                alt=""
                onClick={handlePostComment394}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t88/3/28/1f452.png"
                alt=""
                onClick={handlePostComment395}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/3/28/1f393.png"
                alt=""
                onClick={handlePostComment396}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/3/28/26d1.png"
                alt=""
                onClick={handlePostComment397}
              />
              <img
                className="animate__animated animate__fadeIn animate__faster Emoji"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/3/28/1f451.png"
                alt=""
                onClick={handlePostComment398}
              />
            </div>
            <div className="bg-white-white border-t-2 bottom-0 dark:bg-dark-200 dark:border-dark-100 pb-0.5 pl-4 pr-4 pt-0.5 sticky w-full">
              <svg
                className="cursor-pointer dark:hover:bg-opacity-10 duration-300 hover:bg-gray-200 h-7 w-7 pb-1 pl-0.5 pr-0.5 pt-1 rounded-full text-blue-500 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setViewEmojis(!viewEmojis)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
