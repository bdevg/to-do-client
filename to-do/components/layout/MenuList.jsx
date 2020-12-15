import {useEffect,useState} from "react";
import Link from "next/link";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from  "@material-ui/core/List";
// MUI Icons
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockIcon from '@material-ui/icons/Lock';
import ExploreIcon from '@material-ui/icons/Explore';
import CreateIcon from '@material-ui/icons/Create';
import LayersIcon from '@material-ui/icons/Layers';
import HomeIcon from '@material-ui/icons/Home';
import ListItem from "@material-ui/core/ListItem";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  userProfileIcon:{
    color:"black",
    backgroundColor:"transparent"
  }
});

let menuListItem = [{
    to:"/",
    text:"Home",
    icon:<HomeIcon/>
  },{
    to:"/#",
    text:"Join Us",
    icon:<PersonAddIcon/>
  },{
    to:"/#",
    text:"SignIn",
    icon:<LockIcon/>
  },{
    to:"/todo",
    text:"todo",
    icon:<CreateIcon/>
}];

menuListItem = menuListItem.map((item,index)=>{ // component={Link}
return <ListItem key={index} button>
  <Link href={item.to}>
    <ListItemIcon>{item.icon}</ListItemIcon>
  </Link>
  <Link href={item.to}>
      <ListItemText>{item.text}</ListItemText>
  </Link>
</ListItem>
});

export default function MenuList(){
    const classes = useStyles();
    const [userName, setUserName] = useState(null);
    const [userPic, setUserPic] = useState(null);
    const [devId, setDevId] = useState(null);
    useEffect(()=>{
        try{
            const dev = JSON.parse(localStorage.dev);
            setUserName(dev.fname);
            setUserPic(dev.pic);
            setDevId(dev.id)
        }catch(e){
            console.log(e)
        }
    },[]);

    return <>
        {menuListItem}
        {userName&&devId?
          <ListItem key={devId} button>
          <ListItemIcon><Avatar className={classes.userProfileIcon} src={userPic} alt={userName}></Avatar></ListItemIcon>
            <Link href={"/dev/"+devId}>
                <ListItemText>{userName}</ListItemText>
            </Link>
          </ListItem>:null
        }
    </>
}