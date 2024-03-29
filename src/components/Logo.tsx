import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { FC, memo } from "react";

// ----------------------------------------------------------------------

type Props = {
  disabledLink?: boolean;
  sx?: any;
};

const Logo: FC<Props> = (props) => {
  const { disabledLink = false, sx } = props;

  const theme = useTheme();

  //const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  //const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  //const logo = (
  //  <Box
  //    component="img"
  //    src="/static/tulpar_logo_text_s.svg"
  //    sx={{ width: 40, height: 40, ...sx }}
  //  />
  //);

  const logo = (
    <Box sx={{ width: 40, height: 40, display: "flex", ...sx }}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 154.000000 173.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,173.000000) scale(0.100000,-0.100000)"
          fill={PRIMARY_MAIN}
          stroke="none"
        >
          <path
            d="M428 1621 c-181 -190 -260 -338 -295 -554 -30 -191 12 -335 132 -452
                73 -72 152 -119 300 -181 190 -80 137 -70 -90 16 -189 72 -320 200 -361 354
                -18 68 -18 242 1 336 29 147 111 386 174 505 2 6 -3 4 -12 -3 -27 -23 -118
                -171 -162 -266 -81 -175 -105 -275 -105 -437 1 -284 136 -456 435 -554 44 -14
                152 -44 240 -65 360 -88 413 -119 470 -285 7 -18 9 -16 22 15 50 117 14 222
                -108 314 -32 25 -116 77 -187 117 -70 39 -166 98 -214 131 -161 110 -296 282
                -333 423 -20 77 -19 201 1 284 16 67 82 214 148 329 20 34 34 62 32 62 -2 0
                -42 -40 -88 -89z"
          />
          <path
            d="M1164 1557 c-11 -17 -28 -44 -37 -59 -9 -15 -36 -39 -60 -53 -41 -24
                -47 -24 -102 -13 -45 9 -72 9 -119 -1 -89 -19 -105 -34 -28 -27 34 3 62 2 62
                -2 0 -15 -75 -44 -128 -49 -37 -4 -50 -9 -43 -16 18 -18 13 -24 -47 -46 -32
                -11 -69 -33 -83 -47 l-24 -26 42 21 c49 24 133 39 133 23 0 -5 -10 -12 -23
                -16 -19 -4 -137 -96 -124 -96 2 0 21 7 42 16 59 24 59 12 0 -33 -68 -53 -86
                -81 -91 -141 -4 -38 -2 -43 6 -27 12 22 49 49 56 42 3 -2 -5 -21 -17 -42 -28
                -46 -29 -108 -3 -155 l18 -35 7 58 c3 32 9 60 12 64 3 3 11 -16 18 -41 16 -65
                75 -152 145 -214 32 -30 122 -93 199 -142 151 -96 200 -140 236 -209 30 -58
                36 -144 15 -196 l-17 -39 26 24 c14 13 33 49 42 80 14 47 14 65 4 124 -19 113
                -40 147 -173 282 -68 69 -124 128 -126 133 -4 12 39 123 46 119 27 -12 105
                -38 146 -49 67 -17 112 -63 112 -114 0 -29 6 -43 29 -62 25 -22 35 -24 74 -19
                24 3 67 19 95 35 45 25 51 32 48 57 -4 31 -37 127 -98 284 -30 79 -35 103 -31
                146 6 63 -9 93 -93 179 l-59 60 9 45 c13 67 12 142 -2 138 -6 -2 -23 -25 -37
                -51 -14 -26 -28 -47 -31 -47 -4 0 -2 30 3 66 5 38 6 74 1 85 -8 17 -11 16 -30
                -14z"
          />
        </g>
      </svg>
    </Box>
  );

  //  const logo = (
  //    <Box sx={{ width: 150, height: 40 }}>
  //      <svg
  //        version="1.0"
  //        xmlns="http://www.w3.org/2000/svg"
  //        width="100%"
  //        height="100%"
  //        viewBox="0 0 160.000000 55.000000"
  //        preserveAspectRatio="xMidYMid meet"
  //      >
  //        <g
  //          transform="translate(0.000000,55.000000) scale(0.100000,-0.100000)"
  //          fill="#000000"
  //          stroke="none"
  //        >
  //          <path
  //            d="M112 483 c-40 -52 -50 -73 -63 -131 -20 -96 17 -159 120 -205 32 -14
  //              40 -21 30 -28 -11 -7 -12 -9 -1 -9 36 0 128 -35 149 -56 29 -29 33 -29 33 -6
  //              0 31 -29 61 -101 103 -38 22 -86 54 -105 71 -76 67 -95 163 -50 251 13 26 22
  //              47 20 47 -1 0 -16 -17 -32 -37z"
  //          />
  //          <path
  //            d="M357 475 c-12 -17 -28 -25 -47 -25 -16 0 -32 -4 -35 -10 -3 -5 -15
  //              -10 -26 -10 -12 0 -19 -7 -19 -20 0 -11 -5 -20 -12 -20 -6 0 -8 -3 -5 -7 4 -4
  //              -5 -20 -20 -36 -16 -17 -22 -27 -15 -23 10 6 12 0 8 -31 -4 -24 -3 -31 2 -19
  //              8 17 11 15 28 -20 13 -27 41 -54 89 -87 38 -26 78 -62 88 -80 16 -28 17 -29
  //              13 -7 -3 14 -6 30 -6 37 0 6 -21 31 -46 56 -36 36 -44 50 -39 67 6 18 12 20
  //              38 14 42 -9 47 -12 57 -40 7 -17 17 -24 35 -24 35 0 42 24 20 79 -10 25 -20
  //              60 -22 78 -3 17 -14 39 -24 49 -10 9 -19 31 -20 48 0 17 -3 25 -6 19 -9 -24
  //              -23 -13 -17 12 8 31 4 31 -19 0z"
  //          />
  //          <path
  //            d="M34 424 c-8 -19 -19 -56 -23 -80 -13 -69 14 -164 47 -164 10 0 8 9
  //              -7 34 -25 40 -28 127 -6 199 17 55 10 62 -11 11z"
  //          />
  //          <path
  //            d="M590 365 c0 -60 3 -75 15 -75 12 0 15 14 15 65 0 58 2 65 20 65 11 0
  //20 5 20 10 0 6 -16 10 -35 10 l-35 0 0 -75z"
  //          />
  //          <path
  //            d="M730 377 c0 -36 5 -68 12 -75 17 -17 74 -15 92 4 22 22 23 134 1 134
  //-11 0 -15 -13 -15 -53 0 -48 -12 -77 -31 -77 -22 0 -39 35 -39 81 0 27 -4 49
  //-10 49 -6 0 -10 -28 -10 -63z"
  //          />
  //          <path
  //            d="M930 367 l0 -77 40 0 c45 0 55 17 13 22 -26 3 -28 7 -33 60 -8 85
  //-20 82 -20 -5z"
  //          />
  //          <path
  //            d="M1080 363 c0 -53 4 -73 13 -73 7 0 13 12 12 28 0 23 5 28 30 30 36 4
  //55 19 55 41 0 32 -18 45 -64 46 l-46 2 0 -74z m75 32 c0 -14 -8 -21 -27 -23
  //-24 -3 -28 0 -28 23 0 23 4 26 28 23 19 -2 27 -9 27 -23z"
  //          />
  //          <path
  //            d="M1470 365 c0 -60 3 -75 15 -75 10 0 15 10 15 30 0 17 4 30 9 30 5 0
  //14 -13 21 -30 8 -18 20 -30 31 -30 18 0 19 1 3 25 -15 24 -15 27 0 44 19 21
  //21 52 4 69 -7 7 -31 12 -55 12 l-43 0 0 -75z m78 28 c3 -19 -1 -23 -22 -23
  //-21 0 -26 5 -26 26 0 21 4 25 23 22 14 -2 23 -11 25 -25z"
  //          />
  //          <path
  //            d="M1305 416 c-10 -8 -55 -108 -55 -123 0 -11 29 0 34 12 7 20 66 19 81
  //-1 27 -37 31 -6 8 57 -24 66 -39 77 -68 55z m35 -42 c13 -34 13 -34 -15 -34
  //-27 0 -28 3 -19 38 8 29 22 28 34 -4z"
  //          />
  //          <path
  //            d="M550 223 c0 -5 7 -30 16 -58 9 -27 18 -56 21 -64 2 -7 14 6 26 30 12
  //24 31 56 41 72 16 24 16 27 2 27 -8 0 -22 -13 -31 -30 -9 -16 -19 -30 -24 -30
  //-5 0 -11 14 -14 30 -4 18 -13 30 -22 30 -8 0 -15 -3 -15 -7z"
  //          />
  //          <path
  //            d="M772 218 c-23 -30 -61 -117 -53 -123 5 -3 12 -1 16 5 10 17 75 12 75
  //-5 0 -8 7 -15 16 -15 13 0 15 6 10 33 -4 17 -9 51 -13 75 -6 43 -29 57 -51 30z
  //m28 -58 c0 -23 -4 -30 -20 -30 -22 0 -25 12 -10 41 16 28 30 23 30 -11z"
  //          />
  //          <path
  //            d="M920 220 c0 -5 14 -10 30 -10 17 0 30 -3 30 -6 0 -3 -18 -27 -40 -53
  //-22 -26 -40 -53 -40 -59 0 -8 18 -12 50 -12 28 0 50 5 50 10 0 6 -13 10 -30
  //10 -16 0 -30 5 -30 10 0 6 18 30 40 54 22 24 40 48 40 55 0 7 -19 11 -50 11
  //-27 0 -50 -4 -50 -10z"
  //          />
  //          <path
  //            d="M1087 223 c-3 -5 -8 -30 -11 -58 -4 -27 -9 -58 -12 -67 -3 -12 0 -18
  //9 -18 10 0 18 19 26 63 6 35 11 69 11 75 0 13 -16 16 -23 5z"
  //          />
  //          <path
  //            d="M1177 208 c-3 -13 -9 -47 -13 -75 l-7 -53 36 0 c20 0 39 5 42 10 4 6
  //-5 10 -19 10 -29 0 -31 13 -17 88 6 31 5 42 -4 42 -7 0 -15 -10 -18 -22z"
  //          />
  //          <path
  //            d="M1317 223 c-3 -5 -8 -30 -12 -58 -4 -27 -9 -58 -12 -67 -3 -11 1 -18
  //10 -18 10 0 18 19 26 63 6 35 11 69 11 75 0 13 -16 16 -23 5z"
  //          />
  //          <path
  //            d="M1405 208 c-19 -88 -22 -128 -9 -128 7 0 16 16 19 38 11 65 18 69 28
  //15 6 -30 15 -53 22 -53 7 0 23 20 36 45 24 45 45 61 36 28 -16 -59 -17 -73 -4
  //-73 9 0 18 21 26 57 15 78 14 93 -7 93 -12 0 -28 -20 -47 -57 l-28 -58 -13 40
  //c-7 22 -13 48 -13 58 -1 26 -40 22 -46 -5z"
  //          />
  //        </g>
  //      </svg>
  //    </Box>
  //  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Box
      component={RouterLink}
      to="/"
      style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
    >
      {logo}
      <Typography
        gutterBottom
        align="center"
        textTransform={"none"}
        variant="subtitle1"
        color={PRIMARY_MAIN}
        fontWeight={theme.typography.fontWeightBold}
        sx={{
          m: 0,
          ml: 1.3,
          ...theme.typography.h4,
        }}
      >
        Tulpar Yazılım
      </Typography>
    </Box>
  );
};

export default memo(Logo);
