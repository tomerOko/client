import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PostLoginLandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome Back to Your Professional Network
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            Empower Your Projects with Expert Consultants
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginRight: "10px" }}
            onClick={() => {
              navigate("/search");
            }}
          >
            Find a Consultant
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Post a Project
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            alt="Professional Collaboration"
            height="350"
            image="https://example.com/professional_collaboration.jpg"
            title="Professional Collaboration"
          />
        </Grid>
      </Grid>

      {/* Featured Consultants */}
      <Typography variant="h4" component="h2" style={{ marginTop: "40px" }}>
        Top-Rated Consultants
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((consultant) => (
          <Grid item xs={12} sm={4} key={consultant}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Consultant"
                  height="200"
                  image={`https://example.com/consultant_${consultant}.jpg`} // Replace with the URL of the desired image
                  title="Consultant"
                />
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Consultant Name {consultant}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Specialty: Business Strategy
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Rating: ★★★★☆
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Personalized Recommendations */}
      <Typography variant="h4" component="h2" style={{ marginTop: "40px" }}>
        Recommended for You
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((recommendation) => (
          <Grid item xs={12} sm={4} key={recommendation}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Recommended Project"
                  height="200"
                  image={`https://example.com/recommended_project_${recommendation}.jpg`} // Replace with the URL of the desired image
                  title="Recommended Project"
                />
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Project Title {recommendation}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    A brief description of the project goes here.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Latest Projects */}
      <Typography variant="h4" component="h2" style={{ marginTop: "40px" }}>
        Explore New Opportunities
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((project) => (
          <Grid item xs={12} sm={4} key={project}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="New Project"
                  height="200"
                  image={`https://example.com/new_project_${project}.jpg`} // Replace with the URL of the desired image
                  title="New Project"
                />
                <CardContent>
                  <Typography variant="h5" component="h3">
                    New Project {project}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Budget: $10,000
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Required Skills: React, Node.js
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Success Stories */}
      <Typography variant="h4" component="h2" style={{ marginTop: "40px" }}>
        Success Stories from Our Community
      </Typography>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        {[1, 2, 3].map((story) => (
          <Grid item xs={12} sm={4} key={story}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Success Story"
                  height="200"
                  image={`https://example.com/success_story_${story}.jpg`} // Replace with the URL of the desired image
                  title="Success Story"
                />
                <CardContent>
                  <Typography variant="h5" component="h3">
                    Success Story {story}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    "This platform helped me find the perfect consultant for my
                    project."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Grid
        container
        spacing={4}
        style={{ marginTop: "40px", marginBottom: "20px" }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h4">
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Learn more about our mission and values.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h4">
            Contact
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Get in touch with us for support or inquiries.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" component="h4">
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Understand how we protect your data.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
