import { useMatches } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Breadcrumbs as BreadcrumbsMUI,
  Link,
  Stack,
  Typography,
} from '@mui/material';

export const Breadcrumbs = () => {
  const matches = useMatches() as any[];
  const crumbs = matches
    .filter(match => Boolean(match.handle?.crumb))
    .map(match => match.handle.crumb(match.data));

  const breadcrumbs = (crumbs || []).map((crumb, idx) => {
    if (idx === crumbs.length - 1) {
      return (
        <Typography key="3" color="text.primary">
          {crumb?.name}
        </Typography>
      );
    }
    return (
      <Link underline="hover" key="1" color="inherit" href={crumb?.href}>
        {crumb?.name}
      </Link>
    );
  });

  return (
    <Stack spacing={2}>
      <BreadcrumbsMUI
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
        {breadcrumbs}
      </BreadcrumbsMUI>
    </Stack>
  );
};
