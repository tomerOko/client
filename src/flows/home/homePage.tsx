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
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ArrowForward,
} from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        padding: "20px",
        position: "absolute",
        right: "-50px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        padding: "20px",
        position: "absolute",
        left: "-50px",
      }}
      onClick={onClick}
    />
  );
};

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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
                onClick={() => navigate("/become-consultant")}
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

        {/* How It Works */}
        <SectionTitle title="How It Works" />
        <Grid container spacing={4} sx={{ mb: 6, position: "relative" }}>
          {[
            {
              title: "Search",
              description:
                "Search the knowledge you need, like Legal Advice, or even a problem with your car",
              image:
                "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Choose",
              description:
                "Find the perfect consultant for your needs, you can read shortly about the consultant and see the rating",
              image:
                "https://plus.unsplash.com/premium_photo-1664474827168-201cf7d0420b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Schedule",
              description:
                "Book a meeting with your chosen consultant at a time that works for both of you",
              image:
                "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Learn",
              description:
                "Get the knowledge you need—and the insights you didn't expect in an online meeting",
              image:
                "https://images.unsplash.com/photo-1616587894289-86480e533129?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Pay",
              description:
                "Only pay for the time you talked, measured in minutes. For example, a 15-minute chat with a $20/hour consultant costs just $5",
              image:
                "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((step, index) => (
            <React.Fragment key={index}>
              <Grid item xs={12} sm={6} md={2.4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={step.image}
                    alt={step.title}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {index < 4 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: `${20 * (index + 1)}%`,
                    transform: "translate(-20%, -50%)",
                    zIndex: 1,
                    bgcolor: "rgba(25, 118, 210, 0.8)",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                >
                  <ArrowForward sx={{ fontSize: 30, color: "white" }} />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Grid>

        {/* Featured Consultants Carousel */}
        <SectionTitle title="Top-Rated Consultants" />
        <Box sx={{ mb: 6, position: "relative", mx: 6 }}>
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

        {/* Latest Projects */}
        <SectionTitle title="Explore New Opportunities" />
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
            "https://plus.unsplash.com/premium_photo-1677171749355-4ad563d86165?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

        {/* New section for separation */}
        <Box sx={{ my: 8, textAlign: "center" }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Join Our Thriving Community
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
            Discover how our platform has transformed careers and businesses.
            Read inspiring stories from consultants and clients who have found
            success through our community.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Explore Success Stories
          </Button>
        </Box>
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
