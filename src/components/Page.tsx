import { Helmet } from "react-helmet-async";
import { FC, forwardRef, ReactElement } from "react";
// @mui
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  children: ReactElement;
  title: string;
  meta?: string;
};

const Page: FC<Props> = forwardRef(
  ({ children, title = "", meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} Tulpar Yazılım`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
