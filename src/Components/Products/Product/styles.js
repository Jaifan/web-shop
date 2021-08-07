import { makeStyles } from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";

export default makeStyles(()=> ({
    root: {
        // maxWidth: 345, original width style
        marginBottom : '0',
        maxWidth: '100%',
        backgroundColor : '#e6e6fa',
      },
      media: {
        height: 0,
        paddingTop: '100%',
        paddingBottom : '15%', // 16:9
      },
      cardContent: {
        display: 'flex',
        textAlign : 'center',
        flexDirection : 'column'
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'space-evenly',
      },
      name :{
        color : 'black',
        fontFamily : 'Libre Baskerville',
        fontSize : '17px',
      },
      price :{
        color : 'black',
        fontFamily : 'Libre Baskerville',
        fontSize : '20px' 
      },
      descrip : {
        color : 'red',
        fontFamily : 'Merienda',

      }
      
}))