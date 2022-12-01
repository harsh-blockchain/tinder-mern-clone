import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <header className={styles.container}>
      <IconButton>
        <PersonIcon fontSize="large" className={styles.header_icon} />
      </IconButton>

      <img
        src="https://www.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png"
        className={styles.header_logo}
      />

      <IconButton>
        <ForumIcon fontSize="large" className={styles.header_icon} />
      </IconButton>
    </header>
  );
};

export default Header;

const styles = {
  container: `m-6 flex justify-between items-center z-100`,
  header_icon: `text-slate-600`,
  header_logo: `h-[40px] object-contain`,
};
