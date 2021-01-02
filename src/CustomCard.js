import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  Avatar,
  CardActionArea,
  CardActions
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import ProfilePicture from "./profile.jpg";

const useStyles = makeStyles({
  media: {
    height: 300,
  }
});

const CustomCard = () => {
  const classes = useStyles();
  const [collapseStatus, setCollapseStatus] = React.useState(false);
  return (
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar src={ProfilePicture}/>}
          action={
            <IconButton>
              <FacebookIcon />
            </IconButton>
          }
          title="Sample Title"
          subheader="Sample Subheader"
        />
        <CardMedia
          className={classes.media}
          image={ProfilePicture}
          title="A black dog"
        />
        <CardContent>
          <Typography variant="h4">
            This is all about a sad black dog
          </Typography>
          <Typography variant="body2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here ', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ips um' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton onClick={(e) => setCollapseStatus(!collapseStatus)}>
            <FacebookIcon />
          </IconButton>
          <Collapse in={collapseStatus} timeout="auto" unmountOnExit>
            <Typography variant="body2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here ', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ips um' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
          </Collapse>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
