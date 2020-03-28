import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export interface AnnoucemenetsProps {}

const Annoucemenets: React.FC<AnnoucemenetsProps> = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ width: "60vw" }}>
        <Typography
          component="div"
          style={{
            backgroundColor: "#DCDCC6",
            height: "55vh",
            padding: "20px",
            borderRadius: "3px"
          }}
        >
          <h1>Koronawirus - spotkania tylko online!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </Typography>
        <Typography
          component="div"
          style={{
            backgroundColor: "#DCDCC6",
            height: "55vh",
            padding: "20px",
            marginTop: "20px"
          }}
        >
          <h1>Tak działamy charytatywnie!</h1>
          <img
            src={require("../foto/volunt.jpg")}
            alt="Charity"
            width="100%"
            height="80%"
          />
          <p style={{ textAlign: "center" }}>
            Ekipa XYZ w rodzinie zbiórka jedzenia!
          </p>
        </Typography>
        <Typography
          component="div"
          style={{
            backgroundColor: "#DCDCC6",
            height: "55vh",
            padding: "20px",
            marginTop: "20px"
          }}
        >
          <h1>Owocowe czwartki od 22.02.2020 przesunięte na wtorki</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Annoucemenets;
