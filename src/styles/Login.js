import { makeStyles } from '@material-ui/core';

export const useLoginEntry = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    color: theme.palette.primary.dark,
  },
  text: {
    width: 350,
  },
  button: {
    width: 390,
    height: 50,
  },
  error: {
    color: theme.palette.secondary.dark,
  },
}));
