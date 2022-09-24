import { createTheme } from "@material-ui/core";

const primary = "#D5F591";
const secondary = "#44B78B";

export default createTheme({
  typography: {
    fontFamily: "Nunito, sans-serif", 

    
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    
  },
  overrides: {
    MuiDialogActions: {
      root: {
        padding: "8px 24px 16px 24px",
      },
    },
    MuiButton: {
      root: {
        fontWeight: 500,
        textTransform: "none",
        color: secondary,
        padding: "6px 24px",
        
      },
      outlined: {
        borderRadius: "35px",
        borderColor: secondary,
        padding: "6px 20px",
      },
      
      
    },
    MuiSelect: {
      filled: {
        padding: "15px 0 15px 15px",
      },
    },
    MuiFilledInput: {
      input: {
        height: "49px",
        padding: "0px 0 0 10px",
      },
    },
  },
});
