import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#000000',
  },
  '& .MuiRating-iconHover': {
    color: '#000000',
  },
});

export default function StarRating() {
    return (
        <div>
        <StyledRating
            name="customized-color"
            defaultValue={3}
            max={3}
            precision={0.5}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
        </div>
    );
}