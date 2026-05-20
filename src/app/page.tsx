import { Typography } from '@mui/material';

export default function Home() {
    return (
        <div>
            <Typography variant="h1">This is main page</Typography>
            <Typography variant="h2">This is main page</Typography>
            <Typography variant="h3">This is main page</Typography>
            <Typography variant="h4">This is main page</Typography>
            <Typography variant="h5">This is main page</Typography>
            <Typography variant="h6">This is main page</Typography>
            <Typography variant="text1" component="div">
                The European languages are members of the same family.
            </Typography>
            <Typography variant="text2" component="div">
                The European languages are members of the same family. Their separate existence is a
                myth. For science, music, sport, etc
            </Typography>
            <Typography variant="caption" component="div">
                The European languages are members of the same family. Their separate existence is a
                myth. For science, music, sport, etc
            </Typography>
        </div>
    );
}
