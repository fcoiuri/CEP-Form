import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const primary = '#FFF';
const secondary = '#202020';
const marginTitle = '3%'
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 32,
      textAlign: 'center',
      marginTop: marginTitle,
      fontFamily: 'Akshar, sans-serif',
    },

    find: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: primary,
        },
        '&:hover fieldset': {
          borderColor: primary,
        },
        '&.Mui-focused fieldset': {
          borderColor: primary,
        },
      },
      textAlign: 'center',
      marginTop: marginTitle,
    },

    textField: {
      color: `${primary} !important`,
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
      display: 'inline-block',
    },

    wrapper: {
      textAlign: 'center',
    },

    info: {
      padding: '2%',
      borderRadius: 25,
      margin: '2%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: 'auto',
      backgroundColor: primary,
      color: secondary,
      display: 'inline-block',
    },

    gridButton:{
      marginTop: marginTitle,
    },

    button: {
      backgroundColor: primary,
      color: secondary,
      fontWeight: 'bolder',
      marginLeft: '5%'
    },
    
    maps: {
      textDecoration: 'none',
      fontWeight: 800,
      color: secondary
    },
  })
);
