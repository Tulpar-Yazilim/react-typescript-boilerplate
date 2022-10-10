import PropTypes from "prop-types";
// icons
import { Icon } from "@iconify/react";
// @mui
import { Box } from "@mui/material";
import { FC, memo } from "react";

// ----------------------------------------------------------------------

type Props = {
  icon: any;
  sx?: any;
  color?: string;
  width?: number;
  height?: number;
};

const Iconify: FC<Props> = (props) => {
  const { icon, sx, color, ...other } = props;

  return (
    <Box component={Icon} color={color} icon={icon} sx={{ ...sx }} {...other} />
  );
};

export default memo(Iconify);
