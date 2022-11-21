import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

export default function ThreadCard(props) {
  const {title, description, numPosts, isGridView} = props;
  const [isHovering, setIsHovering] = React.useState(false);
  const maxWidth = isGridView ? 200 : '100%';
  return (
    <Card sx={{ maxWidth: maxWidth, margin: 2, padding: 2, wordWrap: 'break-word'}} 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      variant="outlined">
      <CardHeader
        sx={{ wordBreak: 'break-all'}} 
        action={isHovering && <Typography sx={{mt: 0.5}}>{numPosts}</Typography>}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" dangerouslySetInnerHTML={{__html: description}} />
      </CardContent>
    </Card>
  );
}
