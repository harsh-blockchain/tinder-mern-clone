import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

const SwipeButtons = () => {
  return (
    <div className={styles.swipeButton}>
      <IconButton className={styles.swipe_repeat}>
        <ReplayIcon fontSize="large" color="error" />
      </IconButton>

      <IconButton className={styles.swipe_left}>
        <CloseIcon fontSize="large" color="secondary" />
      </IconButton>

      <IconButton className={styles.swipe_star}>
        <StarRateIcon fontSize="large" color="info" />
      </IconButton>

      <IconButton className={styles.swipe_right}>
        <FavoriteIcon fontSize="large" color="warning" />
      </IconButton>

      <IconButton className={styles.swipe_lightning}>
        <FlashOnIcon fontSize="large" color="success" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;

const styles = {
  swipeButton: `fixed bottom-[6vh] flex justify-evenly w-full `,
  swipe_repeat: `bg-[#fff] shadow-2xlshadow-slate-900 rounded-2xl`,
  swipe_left: `bg-[#fff] shadow-2xl shadow-slate-900 rounded-2xl`,
  swipe_star: `bg-[#fff] shadow-2xl shadow-slate-900 rounded-2xl`,
  swipe_right: `bg-[#fff] shadow-2xl shadow-slate-900 rounded-2xl`,
  swipe_lightning: `bg-[#fff] shadow-2xl shadow-slate-900 rounded-2xl`,
};
