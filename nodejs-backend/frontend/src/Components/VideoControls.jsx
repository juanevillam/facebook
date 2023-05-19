// ** Prop Types
import PropTypes from "prop-types";

// ** React
import { useState, forwardRef } from "react";

// ** Material UI
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { PauseRounded, PlayArrowRounded } from "@material-ui/icons";

// ** Icons
import { VolumeOffIcon, VolumeUpIcon } from "@heroicons/react/solid";

const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    visibility: "visible",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 50,
  },
  button: { margin: theme.spacing(1) },
  controlIcons: {
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": { color: "#fff", transform: "scale(1)" },
  },
  bottomIcons: { color: "#999", "&:hover": { color: "#fff" } },
  volumeSlider: { width: 100 },
}));
const PrettoSlider = withStyles({
  root: { height: 8, width: 8 },
  thumb: {
    color: "white",
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    height: 24,
    marginTop: -8,
    width: 24,
    "&:focus, &:hover, &$active": { boxShadow: "inherit" },
  },
  active: {},
  valueLabel: { left: "calc(-50% + 4px)" },
  track: { borderRadius: 4, height: 8 },
  rail: { borderRadius: 4, height: 8 },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": { transform: "rotate(45deg)" },
  },
})(Slider);

const VideoControls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
      onBookmark,
    },
    ref
  ) => {
    useStyles();
    const [openPlaybackRate, setOpenPlaybackRate] = useState(false);

    return (
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0",
          left: "0",
          paddingBottom: "10px",
          paddingLeft: "15px",
          paddingRight: "16px",
          paddingTop: "15px",
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex mr-4 space-x-2">
            <div className="cursor-pointer -ml-1 -mt-0.5" onClick={onPlayPause}>
              {playing ? (
                <PauseRounded sx={{ fontSize: "1.5rem" }} htmlColor="white" />
              ) : (
                <PlayArrowRounded
                  sx={{ fontSize: "1.5rem" }}
                  htmlColor="white"
                />
              )}
            </div>
            <p
              className="cursor-pointer font-medium mt-px text-sm text-white"
              onClick={onChangeDispayFormat}
            >
              {elapsedTime}/{totalDuration}
            </p>
          </div>
          <Slider
            aria-label="time-indicator"
            min={0}
            max={100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onSeekMouseDown}
            sx={{
              color: "#fff",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 20,
                height: 20,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": { boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)" },
                "&.Mui-active": { width: 20, height: 20 },
              },
              "& .MuiSlider-rail": { opacity: 0.28 },
            }}
            value={played * 100}
          />
          <div className="flex ml-4 mr-1 space-x-4 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                stroke="#F7F8FA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
              />
            </svg>
            {openPlaybackRate && (
              <div className="absolute animate__animated animate__fadeIn animate__faster bg-white bottom-10 p-1 right-2 rounded-lg w-min z-10">
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <Button
                    className="bouncing"
                    onClick={() => {
                      onPlaybackRateChange(rate);
                      setOpenPlaybackRate(!openPlaybackRate);
                    }}
                    key={rate}
                  >
                    {rate}X
                  </Button>
                ))}
              </div>
            )}
            <div className="absolute -bottom-2 cursor-pointer group h-32 -right-1 z-0">
              <div className="duration-300 group-hover:opacity-100 h-20 transition opacity-0">
                <PrettoSlider
                  aria-label="Temperature"
                  min={0}
                  max={100}
                  onChange={onVolumeChange}
                  onChangeCommitted={onVolumeSeekDown}
                  onMouseDown={onSeekMouseDown}
                  orientation="vertical"
                  value={muted ? 0 : volume * 100}
                />
              </div>
              <div onClick={onMute} className="absolute bottom-3 left-1.5">
                {muted ? (
                  <VolumeOffIcon className="cursor-pointer h-5 mt-2 text-light-400 w-5" />
                ) : (
                  <VolumeUpIcon className="cursor-pointer h-5 mt-2 text-light-400 w-5" />
                )}
              </div>
            </div>
            <p
              className="cursor-pointer -mt-px text-md text-white"
              onClick={() => setOpenPlaybackRate(!openPlaybackRate)}
            >
              {playbackRate}X
            </p>
            {muted ? (
              <VolumeOffIcon className="cursor-pointer h-5 text-light-400 w-5" />
            ) : (
              <VolumeUpIcon className="cursor-pointer h-5 text-light-400 w-5" />
            )}
          </div>
        </div>
      </Box>
    );
  }
);

VideoControls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};

export default VideoControls;
