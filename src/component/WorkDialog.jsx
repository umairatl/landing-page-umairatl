import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, Typography, DialogTitle } from "@mui/material";

const WorkDialog = ({ details, handleClose }) => {
  if (!details) return null;

  const { img, company, period, details: detailInfo } = details;

  return (
    <Box sx={{ p: { xs: 3, sm: 4 }, background: "#ffff" }}>
      <Grid container rowGap={1}>
        {/* Close Button */}
        <Grid item xs={12} textAlign="right">
          <CloseIcon
            onClick={handleClose}
            sx={{ color: "#A10142", cursor: "pointer", fontSize: 25 }}
          />
        </Grid>

        {/* Company Info */}
        <Grid item xs={12}>
          <img alt="company logo" src={img} width={40} height={40} />

          <DialogTitle sx={{ p: 0, fontWeight: "bold" }}>
            {detailInfo.title}
          </DialogTitle>

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Company:</strong> {company} ({period})
          </Typography>

          <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
            Description:
          </Typography>
          <ul>
            {detailInfo.description.map((desc, i) => (
              <li key={i}>
                <Typography variant="body2">{desc}</Typography>
              </li>
            ))}
          </ul>

          {/* project related section */}
          {detailInfo.project && (
            <>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>Project 1:</strong> {detailInfo.project}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
                Description:
              </Typography>
              <ul>
                {detailInfo.projectDesc.map((desc, i) => (
                  <li key={i}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </>
          )}

          <Typography variant="body2" sx={{ mt: 1 }}>
            <strong>Tech Stack:</strong> {detailInfo.techStack}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkDialog;
