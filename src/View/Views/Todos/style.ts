import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cdContent: {
      display: 'flex',
      flexDirection: 'column',
    },
  
  }),
);
export default useStyles;