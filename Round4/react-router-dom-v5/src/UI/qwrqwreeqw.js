
//  <Grid container wrap="nowrap">
//       {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
//         <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
    //       <Stack spacing={1}>
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={210} height={118} />
    // </Stack>

//           {item ? (
//             <Box sx={{ pr: 2 }}>
//               <Typography gutterBottom variant="body2">
//                 {item.title}
//               </Typography>
//               <Typography display="block" variant="caption" color="text.secondary">
//                 {item.channel}
//               </Typography>
//               <Typography variant="caption" color="text.secondary">
//                 {`${item.views} • ${item.createdAt}`}
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ pt: 0.5 }}>
//               <Skeleton />
//               <Skeleton width="60%" />
//             </Box>
//           )}
//         </Box>
//       ))}
//     </Grid>
// }