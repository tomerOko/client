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
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const consultants = [
    {
      name: "Dr. Alex Johnson",
      specialty: "Data Science & AI",
      rating: 4.9,
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
    },
    {
      name: "Prof. Sarah Lee",
      specialty: "Machine Learning",
      rating: 4.8,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Blockchain Technology",
      rating: 4.7,
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_1280.jpg",
    },
    {
      name: "Dr. Emily Taylor",
      specialty: "Cybersecurity",
      rating: 4.9,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg",
    },
    {
      name: "Prof. David Brown",
      specialty: "Big Data Analytics",
      rating: 4.8,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} sx={{ pt: 8, pb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="primary"
            >
              Share Knowledge, Grow Together
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Connect with expert consultants or share your expertise. Learn,
              teach, and succeed together.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mr: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("/search")}
              >
                Find a Consultant
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}
              >
                Become a Consultant
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: 400,
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg"
                alt="Knowledge Sharing"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "white",
                  p: 2,
                }}
              >
                <Typography variant="h6">
                  Empower Your Learning Journey
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Featured Consultants Carousel */}
        <SectionTitle title="Top-Rated Consultants" />
        <Box sx={{ mb: 6 }}>
          <Slider {...carouselSettings}>
            {consultants.map((consultant, index) => (
              <Box key={index} sx={{ p: 1 }}>
                <ConsultantCard
                  name={consultant.name}
                  specialty={consultant.specialty}
                  rating={consultant.rating}
                  imageUrl={consultant.imageUrl}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* How It Works */}
        <SectionTitle title="How It Works" />
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            {
              title: "Search",
              description: "Find the perfect consultant for your needs",
              image:
                "https://cdn.pixabay.com/photo/2017/09/21/13/32/magnifying-glass-2771735_1280.jpg",
            },
            {
              title: "Connect",
              description: "Schedule a session at your convenience",
              image:
                "https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_1280.jpg",
            },
            {
              title: "Learn",
              description: "Gain valuable insights and knowledge",
              image:
                "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_1280.jpg",
            },
          ].map((step, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={step.image}
                  alt={step.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Latest Projects */}
        <SectionTitle title="Explore New Opportunities" />
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/10/12/20/15/business-2845780_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_1280.jpg",
          ].map((imageUrl, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProjectCard
                title={`AI-Driven Marketing Strategy ${index + 1}`}
                budget={10000 + (index + 1) * 1000}
                skills={["Digital Marketing", "AI", "Data Analysis"]}
                imageUrl={imageUrl}
              />
            </Grid>
          ))}
        </Grid>

        {/* Success Stories */}
        <SectionTitle title="Success Stories from Our Community" />
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
            "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
          ].map((imageUrl, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TestimonialCard
                name={`Sarah Thompson ${index + 1}`}
                role="Entrepreneur"
                quote="This platform helped me find the perfect consultant for my project, leading to a 200% increase in productivity!"
                imageUrl={imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#2c3e50", color: "white", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
                sx={{ color: "#3498db" }}
              >
                About Us
              </Typography>
              <Typography variant="body2">
                We're on a mission to democratize knowledge sharing and empower
                learners worldwide.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
                sx={{ color: "#3498db" }}
              >
                Contact
              </Typography>
              <Typography variant="body2">
                Need help? Reach out to our support team at
                support@consultify.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
                sx={{ color: "#3498db" }}
              >
                Legal
              </Typography>
              <Typography variant="body2">
                Read our Terms of Service and Privacy Policy to learn how we
                protect your data.
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, borderTop: "1px solid #34495e", pt: 4 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body2">
                  © 2023 Consultify. All rights reserved.
                </Typography>
              </Grid>
              <Grid item>
                <IconButton color="inherit" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram">
                  <Instagram />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// ... (rest of the component definitions remain the same)

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography
    variant="h4"
    component="h2"
    sx={{ mt: 6, mb: 4, fontWeight: "bold", color: "#1976d2" }}
  >
    {title}
  </Typography>
);

interface ConsultantCardProps {
  name: string;
  specialty: string;
  rating: number;
  imageUrl: string;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({
  name,
  specialty,
  rating,
  imageUrl,
}) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardActionArea>
      <CardMedia component="img" height="200" image={imageUrl} alt={name} />
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {specialty}
        </Typography>
        <Typography variant="body2" color="primary">
          Rating: {rating.toFixed(1)} ★
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

interface ProjectCardProps {
  title: string;
  budget: number;
  skills: string[];
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  budget,
  skills,
  imageUrl,
}) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardActionArea>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Budget: ${budget.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="primary">
          Skills: {skills.join(", ")}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  imageUrl,
}) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardMedia component="img" height="200" image={imageUrl} alt={name} />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="body1" color="textSecondary" paragraph>
        "{quote}"
      </Typography>
      <Typography variant="subtitle1" component="h3">
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {role}
      </Typography>
    </CardContent>
  </Card>
);
