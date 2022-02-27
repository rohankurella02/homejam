import "./styles.css";
import Menu from "./Menu.js";
import Card from "./Card.js";
import ReviewCard from "./ReviewCard.js"
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function App() {
  return (
    <div className="App1">
      <Menu />
      <div className="imageContainer">
        <div className="overlay">
          <img src="https://s3-alpha-sig.figma.com/img/c7b5/3573/6991a1a773c3b45eed0c575ba2f6bd44?Expires=1646611200&Signature=MUyeZrXcRlP5gKj7QgtPa0quX8GuFi2TGSgs6sCE-pjAQtkMZQCHGSBKmkJhCydiIOD9n51GSSpCBl-5~W8EBRla4rEv7Em2sStg3z9yTJaQHAjxtin~A-GqowSOkpwTkDD1zTVFGz~Td6HpNvKIctVnZ54tsjKtEn1w6J9t0bH5iaXlGYgvyet2IOaRfpg8YMEbwBDpEfQKN2S1qoeX0kCTP1Nj3ovjMOkOEX90QQxmStGtCt1-vj7QeTzOsYp1sFHIrm6p~40E2Ajxj-m7D1Eapdjmp6NNGq9mcaoL9R6xVhpYGSVNtgHYpgsFm3gJXb33Kn56Ityru~N2vRKOlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="text-overlay">
        <h1>Cari Cari</h1>
        <br />
        <p className="description" style={{opacity: "0.6"}}>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
      </div>
      <div style={{ color: "white", textAlign: "center" }} className="progress">
        <Stack direction="row" spacing={0}>
          <div className="pro">
            <CircularProgress
              style={{ color: "#DD4CAC" }}
              size={130}
              thickness={0.7}
              variant="determinate"
              value={50}
            />
            <Stack
              style={{ marginTop: "-105px" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <FavoriteBorderIcon />
              <div>0</div>
              <div style={{ opacity: "0.5" }}>Label</div>
            </Stack>
          </div>
          <div className="pro">
            <CircularProgress
              style={{ color: "#FFF", opacity: "0.2" }}
              size={130}
              thickness={0.7}
              variant="determinate"
              value={100}
            />
            <Stack
              style={{ marginTop: "-108px" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <MovieFilterOutlinedIcon />
              <div>0</div>
              <div style={{ opacity: "0.5" }}>Label</div>
            </Stack>
          </div>
          <div className="pro">
            <CircularProgress
              style={{ color: "#FFF", opacity: "0.2" }}
              size={130}
              thickness={0.7}
              variant="determinate"
              value={100}
            />
            <Stack
              style={{ marginTop: "-108px" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <MovieFilterOutlinedIcon />
              <div>0</div>
              <div style={{ opacity: "0.5" }}>Label</div>
            </Stack>
          </div>
          <div className="pro">
            <CircularProgress
              style={{ color: "#FFF", opacity: "0.2" }}
              size={130}
              thickness={0.7}
              variant="determinate"
              value={100}
            />
            <Stack
              style={{ marginTop: "-108px" }}
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <MovieFilterOutlinedIcon />
              <div>0</div>
              <div style={{ opacity: "0.5" }}>Label</div>
            </Stack>
          </div>
        </Stack>
      </div>
      <br />
      <br />
      <div className="shows">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "white" }}>Upcoming Shows</h1>
          <span style={{ color: "#E5C558"}}>View All</span>
        </div>
        <hr />
        <Stack
          justifyContent="space-between"
          mt={5}
          style={{ width: "100%", overflowY: "hidden", overflowX: "scroll" }}
          direction="row"
          spacing={4}
        >
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/c153/d9e4/575af0a0c47fbc35f8befa545523b022?Expires=1646611200&Signature=FVXM8KlxvKOzpdZXi-prWzEkq1kjy7yvR2OefQNQhyRS-fE2tA55WfD5kEINExNtDOPJegdCmSKCccGvaOggY99xDxk13XosFedhd40Ad8o3VnuF6WxQEJ9DzXHDJl6qibT8H3zjDIlb8jzrHBT7owN1uDensA~YbkwqqLbU6~WgkadGwbTp7uEcEDwDkqZHubr8DKBcyC5H4Q8vOkwUeAlawcC8bK9cNEwf7u2DLnUK6qgxhwnuuugNcrEii9Wb2kZFTClPpt1pZOr2R-GKrtjj8cUTmXYBF7Q61tp716VEH7VcqUjOUivYTnM8MK1gZx~XyyLIx2Y7fgYVTzocug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            name={"Benny Dayal"}
            chip={"Folk"}
          />
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/00aa/184e/14e65dbe5f4c4ac8365460fb81c2d274?Expires=1646611200&Signature=R7zm2KdIDshDZKAYynrmWaBDUhXgdZ3r2s9sXGlCSve6vMDrtnO5Igz6ErNMJ3SEEjazwWQpJKc-tkuo1PQeD8EqzxLYm72OYucthRKbTrvUbYd~svwnLacQ2Z2oqGXsAjH0Ak3Rtk9uHYZN0gRrpOdbFFfkIE3j94WwC6pwDw~SMc7IRF3rCKC~rLDOo2AKNe~bVODu4zDT66AaTFT~ueqcxq3UC6Cmu9Js7iygadZY9HLWKef1OXKKc70Wilk5NIMWfP1Z523~r9XEgns4-A5bW7LQ~aYM0X7l0j7pm52l4A8Q5BfBLJGWPEeHhqSnuWcwca7E37eOL7nwWhZeZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            name={"Vijay Yesudas"}
            chip={"Bollywood"}
          />
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/dcc6/2cf7/c3f15ae722813c8d9985de4d6bd6509f?Expires=1646611200&Signature=VSRYpkNPvBCZSQCAh6ylwFgh5GF0UJ6dE7D9K4RgaNqGNB1-Qdi3m6YDkLFc~p0mhxvafRHMvECnVyBaXQZYnUqkxtvugGGu7AdaFFsqmn9DAYZWSGxN~VKfa6eMaWwIjFoou9HDjG9hrkT5ZZGwy5edFV1LjzJO3BvkJoZS29VFyKlbicYZdkiuO-A~4l4urC~mTScFtPMh4QKvzRImWQRWVEjaUnEI7oa0wRj2g~s8j8ltlQjVSxbR2maKKYT6hEK5c8K9HA0mhkK0NS1CMT9KMS80MLHBjAQR5A6XOayybqFJzHf4VESAfmBV52Qm~4i6zJkf~XvFqzLbaiMN6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            name={"Andrea Jeremiah"}
            chip={"Folk"}
          />
          <Card
            image={
              "https://s3-alpha-sig.figma.com/img/64a1/8b66/bd57fcd0d6a0d45a30dc2426856835dd?Expires=1646611200&Signature=YdeW4MdrAHlRfe2a7U-GFFaDmlNtC8L-FoPPN5QC0QmEtdKRUi3WyCzXrcsNgIQl2fwgjEqnsi2y9TMbQEN~auITS2BxnfCtnpAw9IsAVQsBfTUGEjyakojpsN7XNugDyr7r2ToVP6QK7PYnnswJSWLVE-K9hHVJZeDS4Yy6WDm0sF9iFmyJGWi9iLgWLqWi5LemwumfB9g0J3Ewox3f1N8bVi8r4Ejh6KJI5sGiN4~8SJSWG9MooBAEocMisjXbE3uDvFNh4yrd95l8k0Rxg0KY7JuG-sW70Oc~dtK62YfCyvCaWMY09KjkAejT055GV-rJmz40ukVYNe3OBZvlhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            }
            name={"Shilpa Rao"}
            chip={"Folk"}
          />
        </Stack>
      </div>
      <div style={{color: "white"}} className="reviews">
            <div style={{display: "flex"}}>
              <h1>Reviews</h1>
              <div style={{display: "flex", justifyContent: "space-around"}}>
                <div style={{opacity: "0.4"}}>1/12</div>
                <div style={{opacity: "0.4"}}><ArrowBackOutlinedIcon />    <ArrowForwardOutlinedIcon /></div>
              </div>
            </div>
            <hr />
            <br />
            <br />
            <div style={{display: "flex", justifyContent: "space-between", overflowY: "hidden", overflowX: "scroll"}}>
                <ReviewCard name={"Hellen Jummy"} image={"https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1646611200&Signature=F6uG8UWfdil1Ik0h-2XpPb6EVHLtAXufQTWOOdm87EsOltxIWSvmA2xAXsyJq0SGtRmMSsQl~8ko70pxFaS0W52tJZYkN45ng0m1TlUTGu~2dHVHImoYpaJ4VafK9UD1Di5~m5u80~HCbL-HGPq608Qv5B5GzoakkUA7pRJjKxBBPCd6tLoCLgSeod0AWeWiDj3zV4L3bxy3oOYqlr0G~jw8TUBMXXiRdsrwKXfBHRnneQsucumvnhYx05N5qWPouTVMDMcyX51aYVxgqOo1ni3e8tS-UWg3gLWd3Y6OpGWXFIZk2ZcU5taWdHjcxXn~d6TH1PbnIfgTPoyh-mXEgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"} />
                <ReviewCard name={"Isaac Oluwatemilorun"} image={"https://s3-alpha-sig.figma.com/img/b170/d098/6ffd2bedd0502693c4b159f2edb6f5f3?Expires=1646611200&Signature=Dw7AFA2UjCBt0Gz8X7MIPbjo5NbQ--ue8wTgXR411QqBZa~OxEdmXhTSvCjHNPU9lpgNpaz~ykD3cy9vv6quD4uMVSjvxsno89LpSg9aPzfZjQ91meBk8vm9hhj7y1BvmG30qQHTmtOxe1OVbVJv7-ooM4K-17Z5IFzzguESQkoes9l8XxezPwswZZL3t2UF8w6rg5sZcFWh0ugVUGuzGPsq6a2xY8WVwkP3D2OLKJmGT7n6LqutO40RrUT3CpvizfG3ektpiyJF8ufrA4ld0ZJy7e6FjUqOk24kV7R9LWnG7iFEcMedvjwpLP3~hH0Wqg3ZxT3sOyxcDL5QQnbnQQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>
                <ReviewCard name={"Hellen Jummy"} image={"https://s3-alpha-sig.figma.com/img/0d01/b98c/2977aa404ccb3e9ed56890aa3fee11c9?Expires=1646611200&Signature=D3gzHSwKqyITkGmA~3wm~kjE2DijAmlVNsMS-78d9X5-SbdC892QcS5OaSA3WYg2TOE7kFZjRzT1xXm-OTgyO90GzdOOCD3ub8v6Hm-GKlS5WHd8WSJT7T-K-1SIsqOSKnuudEcng4CgKVJdY9hQiMH5~RlbxTGsFcouslO6uHud8cGWECF~AqozIpJg8NSZFM873AauuxNxTzBdszzJjC~EN0Cexnf1woOouNbg6gpmTQ2wkqz~mZYNo633JjrkFbb~rDtnqREMh0h-NnpYq5v8xZv4EhEbKv0SOUKXOAB~Qjlvx5Jb095PqiZZDdIQrm5i8x48yBG~-liIid7CMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}/>
            </div>
      </div>
    </div>
  );
}
