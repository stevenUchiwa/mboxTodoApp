import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    clpaper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addhi:{
        textAlign: 'center'
    }
  }),
);

export default useStyles;