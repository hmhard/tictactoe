import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Cell } from "./components/Cell";

function App() {
  const [even, setEven] = useState(false);
  const [cells, setCells] = useState(Array(9).fill("_"));
  const [end, setEnd] = useState(false);
  const [winner, setWinner] = useState("");
  const wins = {
    row: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
    cols: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
  };

  const play = (index) => {
    setCells((previousCells) => {
      const temp = previousCells.map((cell, indx) => {
        if (indx === index && cell === "_") {
          setEven((prev) => !prev);

          return even ? "X" : "O";
        }
        return cell;
      });

      chekWin(temp);
      return temp;
    });
  };
  const chekWin = (cells) => {
    if (!cells.includes("_")) {
      setEnd(true);
    }

    Object.keys(wins).map((win) => {
      wins[win].map((w) => {
        if (
          cells[w[0]] !== "_" &&
          cells[w[0]] === cells[w[1]] &&
          cells[w[1]] === cells[w[2]]
        ) {
          setWinner(cells[w[0]]);
          setEnd(true);
        }
      });
    });
  };
  const restartGame = () => {
    setCells(Array(9).fill("_"));
    setEnd(false);
    setWinner("");
  };
  return (
    <>
      <Container my={5} ml={5}>
        <Typography variant="h3">Tic Tac Toe Game</Typography>
        <Typography variant="h4" color="red">
          {" "}
          {end && "Game end "} {end && !winner && "with Draw"}{" "}
          {winner && `${winner} is winner`}
        </Typography>

        <Card my={5}>
          <CardContent>
            {end && (
              <Button variant="outlined" color="success" onClick={restartGame}>
                Restart
              </Button>
            )}
            <Grid container xs={4} spacing={0}>
              {cells.map((cell, index) => {
                return (
                  <Cell
                    key={index}
                    index={index}
                    cell={cell}
                    play={play}
                  ></Cell>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default App;
