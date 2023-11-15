import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: 30,
  height: 150,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: 12,
}));

export const DashboardPage = () => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        Hi, Welcome back 👋
      </Typography>
      <Grid container spacing={4} marginTop="30px">
        <Grid item xs={6} lg={3}>
          <Item>
            <img
              src="../ic_glass_bag.png"
              style={{ height: 64, width: 64 }}
              alt="icon"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '20px',
              }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: 'black' }}>
                714k
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
                Weekly sales
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Item>
            <img
              src="../ic_glass_users.png"
              style={{ height: 64, width: 64 }}
              alt="icon"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '20px',
              }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: 'black' }}>
                1.35m
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
                New Users
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Item>
            <img
              src="../ic_glass_buy.png"
              style={{ height: 64, width: 64 }}
              alt="icon"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '20px',
              }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: 'black' }}>
                1.72m
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
                Item Orders
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Item>
            <img
              src="../ic_glass_message.png"
              style={{ height: 64, width: 64 }}
              alt="icon"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: '20px',
              }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: 'black' }}>
                234
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
                Bug Reports
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={4} marginTop="30px">
        <Grid item xs={12} lg={6}>
          <Item sx={{ height: 500 }}>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                height: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 30,
                  color: 'black',
                  marginBottom: '20px',
                }}>
                Traffic by Site
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 170,
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      borderColor: '#dddddd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24">
                      <g id="iconifyReact6">
                        <g id="iconifyReact7">
                          <path
                            id="iconifyReact8"
                            fill="rgb(24, 119, 242)"
                            d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"></path>
                        </g>
                      </g>
                    </svg>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 20,
                        color: 'black',
                        marginTop: 1,
                      }}>
                      323.23k
                    </Typography>
                    <Typography>Facebook</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 170,
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      borderColor: '#dddddd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      // className="component-iconify MuiBox-root css-1nwc0y iconify iconify--eva"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24">
                      <g id="iconifyReact9">
                        <g id="iconifyReact10">
                          <path
                            id="iconifyReact11"
                            fill="rgb(223, 62, 48)"
                            d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"></path>
                        </g>
                      </g>
                    </svg>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 20,
                        color: 'black',
                        marginTop: 1,
                      }}>
                      341.21k
                    </Typography>
                    <Typography>Google</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 170,
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      borderColor: '#dddddd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      // class="component-iconify MuiBox-root css-hp4woq iconify iconify--eva"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24">
                      <g id="iconifyReact12">
                        <g id="iconifyReact13">
                          <g id="iconifyReact14" fill="rgb(0, 96, 151)">
                            <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82Z"></path>
                            <rect
                              width="4.5"
                              height="11.7"
                              x="3"
                              y="9.3"
                              rx=".9"
                              ry=".9"></rect>
                            <circle cx="5.25" cy="5.25" r="2.25"></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 20,
                        color: 'black',
                        marginTop: 1,
                      }}>
                      411.21k
                    </Typography>
                    <Typography>Linkedin</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      height: 170,
                      borderStyle: 'dashed',
                      borderWidth: 1,
                      borderColor: '#dddddd',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      // class="component-iconify MuiBox-root css-1q6oxet iconify iconify--eva"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24">
                      <g id="iconifyReact15">
                        <g id="iconifyReact16">
                          <path
                            id="iconifyReact17"
                            fill="rgb(28, 156, 234)"
                            d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></path>
                        </g>
                      </g>
                    </svg>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 20,
                        color: 'black',
                        marginTop: 1,
                      }}>
                      443.23k
                    </Typography>
                    <Typography>Twitter</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item sx={{ height: 500 }}>
            <Box
              sx={{
                display: 'flex',
                flex: 1,
                height: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <Typography
                sx={{ fontWeight: 600, fontSize: 30, color: 'black' }}>
                Current Visits
              </Typography>
              <PieChart
                series={[
                  {
                    data: [
                      {
                        id: 0,
                        value: 27.7,
                        label: 'America',
                        color: 'rgb(24, 119, 242)',
                      },
                      {
                        id: 1,
                        value: 34.7,
                        label: 'Asia',
                        color: 'rgb(255, 171, 0)',
                      },
                      {
                        id: 2,
                        value: 9.2,
                        label: 'Europe',
                        color: 'rgb(0, 184, 217)',
                      },
                      {
                        id: 3,
                        value: 28.4,
                        label: 'Africa',
                        color: 'rgb(255, 86, 48)',
                      },
                    ],
                  },
                ]}
                // width={600}
                height={300}
                sx={{ width: '50%' }}
              />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};
