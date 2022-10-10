import { ThemeOptions } from '@mui/material/styles';

export default function Autocomplete(theme: ThemeOptions | any) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
